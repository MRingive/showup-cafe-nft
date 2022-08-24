// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/PullPayment.sol";

contract ShowUpCafe is ERC721, Ownable, PullPayment {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("ShowUpCafe", "SUC") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://www.showup.cafe/nft/";
    }

    function safeMint(address to) public payable {
        require(msg.value >= 10 ether, "Missing payment");

        _asyncTransfer(owner(), msg.value);

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }
}