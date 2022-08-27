import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { time } from "@nomicfoundation/hardhat-network-helpers";

describe("ShowUpCafe", function () {

  const EIGHT_HOURS_IN_SECONDS = 28800
  const THIRTY_TWO_HOURS_IN_SECONDS = 115200
  
  async function contractDeployedFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const ShowUpCafe = await ethers.getContractFactory("ShowUpCafe");
    const contract = await ShowUpCafe.deploy();

    return { contract, owner, otherAccount };
  }

  describe("Minting", () => {

    it("should mint token", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      expect(await contract.ownerOf(0)).to.equal(owner.address);
      expect(await contract.balanceOf(owner.address)).to.equal(1);
    });

    it("should mint token to another address", async () => {
      const { contract, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})

      expect(await contract.ownerOf(0)).to.equal(otherAccount.address);
      expect(await contract.balanceOf(otherAccount.address)).to.equal(1);
    });

    it("should mint token from non-owner", async () => {
      const { contract, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.connect(otherAccount).safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})

      expect(await contract.ownerOf(0)).to.equal(otherAccount.address);
      expect(await contract.balanceOf(otherAccount.address)).to.equal(1);
    });

    it("should revert for missing payment", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await expect(contract.safeMint(owner.address)).to.be.revertedWith("Missing payment");
    });

    it("should revert for payment below threshold", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await expect(contract.safeMint(owner.address, { value: ethers.utils.parseUnits("9.9999")}))
      .to.be.revertedWith("Missing payment");
    });

    it("should mint two tokens", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})
      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      expect(await contract.ownerOf(0)).to.equal(owner.address);
      expect(await contract.ownerOf(1)).to.equal(owner.address);
      expect(await contract.balanceOf(owner.address)).to.equal(2);
    });

    it("should mint two tokens to different accounts", async () => {
      const { contract, owner, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})
      await contract.safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})

      expect(await contract.ownerOf(0)).to.equal(owner.address);
      expect(await contract.ownerOf(1)).to.equal(otherAccount.address);
      expect(await contract.balanceOf(owner.address)).to.equal(1);
      expect(await contract.balanceOf(otherAccount.address)).to.equal(1);
    });

    it("should pay to owner", async () => {
      const { contract, owner, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.connect(otherAccount).safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})

      expect(await contract.payments(owner.address)).to.equal(ethers.utils.parseUnits("10"));
    });

    it("should pay to owner for two mints", async () => {
      const { contract, owner, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.connect(otherAccount).safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})
      await contract.connect(otherAccount).safeMint(otherAccount.address, { value: ethers.utils.parseUnits("11")})

      expect(await contract.payments(owner.address)).to.equal(ethers.utils.parseUnits("21"));
    });

    it("should set show up info to match block timestamp", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      const timestamp = await time.latest()
      const showUpInfo = await contract.getShowUpInformation(0)

      expect(showUpInfo.lastTimestamp).to.equal(timestamp)
      expect(showUpInfo.sum).to.equal(0)
    });

  });

  describe("can show up?", () => {

    it("should be able to show up after lock out period", async () => {
      const { contract, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(EIGHT_HOURS_IN_SECONDS);

      expect(await contract.canShowUp(0)).to.equal(true)
    });

    it("should not be able to show up before lock out period", async () => {
      const { contract, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(EIGHT_HOURS_IN_SECONDS - 1);

      expect(await contract.canShowUp(0)).to.equal(false)
    });

    it("should be able to show up before deadline", async () => {
      const { contract, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(THIRTY_TWO_HOURS_IN_SECONDS);

      expect(await contract.canShowUp(0)).to.equal(true)
    });

    it("should not be able to show up after deadline", async () => {
      const { contract, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(THIRTY_TWO_HOURS_IN_SECONDS + 1);

      expect(await contract.canShowUp(0)).to.equal(false)
    });

  });

  describe("Show up", () => {

    it("should revert on wrong token owner", async () => {
      const { contract, otherAccount } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(otherAccount.address, { value: ethers.utils.parseUnits("10")})

      await expect(contract.showUp(0)).to.be.revertedWith("Not token owner");
    });

    it("should revert on invalid token id", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      await expect(contract.showUp(1)).to.be.revertedWith("ERC721: invalid token ID");
    });

    it("should revert on show up too late", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(THIRTY_TWO_HOURS_IN_SECONDS);

      await expect(contract.showUp(0)).to.be.revertedWith("Too late");
    });

    it("should not revert on show up just before deadline", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(THIRTY_TWO_HOURS_IN_SECONDS - 1);

      await contract.showUp(0);

      const showUpInfo = await contract.getShowUpInformation(0)

      const timestamp = await time.latest()

      expect(showUpInfo.lastTimestamp).to.equal(timestamp)
      expect(showUpInfo.sum).to.equal(1)
    });

    it("should change timestamp on show up to latest block", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      const showUpInfoBefore = await contract.getShowUpInformation(0)
      const timestampBefore = await time.latest()
      expect(showUpInfoBefore.lastTimestamp).to.equal(timestampBefore)
      expect(showUpInfoBefore.sum).to.equal(0)

      await time.increase(EIGHT_HOURS_IN_SECONDS);

      await contract.showUp(0);

      const showUpInfo = await contract.getShowUpInformation(0)

      expect(showUpInfo.lastTimestamp).to.equal(timestampBefore + EIGHT_HOURS_IN_SECONDS + 1)
      expect(showUpInfo.sum).to.equal(1)
    });

    it("should not be possible to show up less than 8 hours after minting", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(EIGHT_HOURS_IN_SECONDS - 2);

      await expect(contract.showUp(0)).to.be.revertedWith("Too early");
    });

    it("should be possible to show up more than 8 hours after minting", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(EIGHT_HOURS_IN_SECONDS - 1);

      await contract.showUp(0);

      const showUpInfo = await contract.getShowUpInformation(0)
      expect(showUpInfo.sum).to.equal(1)
    });

    it("should be have 8 hours lockout after showing up", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(EIGHT_HOURS_IN_SECONDS - 1);

      await contract.showUp(0);

      await time.increase(EIGHT_HOURS_IN_SECONDS - 2);

      await expect(contract.showUp(0)).to.be.revertedWith("Too early");
    });

    it("should be possible to show up again after 8 hours", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await contract.safeMint(owner.address, { value: ethers.utils.parseUnits("10")})

      await time.increase(EIGHT_HOURS_IN_SECONDS - 1);

      await contract.showUp(0);

      await time.increase(EIGHT_HOURS_IN_SECONDS - 1);

      await contract.showUp(0);

      const showUpInfo = await contract.getShowUpInformation(0)
      expect(showUpInfo.sum).to.equal(2)
    });
  });

});
