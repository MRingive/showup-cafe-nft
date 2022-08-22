// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ShowUpCafe is ERC721 {
    constructor() ERC721("ShowUpCafe", "SUC") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://www.showup.cafe/nft/";
    }
}