import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ShowUpCafe", function () {
  
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

    it("should revert for missing payment", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await expect(contract.safeMint(owner.address)).to.be.revertedWith("Missing payment");
    });

    it("should revert for payment below threshold", async () => {
      const { contract, owner } = await loadFixture(contractDeployedFixture);

      await expect(contract.safeMint(owner.address, { value: ethers.utils.parseUnits("9.9999")}))
      .to.be.revertedWith("Missing payment");
    });

  });

});
