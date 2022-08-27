// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/PullPayment.sol";

contract ShowUpCafe is ERC721, Ownable, PullPayment {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // TODO: events for show up ? Would give history but would also cost
    // a lot more.
    // Even without events it will be possible to track history. Just a
    // lot more difficult.

    struct ShowUpInfo {
        uint256 lastTimestamp;
        uint sum;
    }

    // Mapping from token ID to show up information.
    mapping(uint256 => ShowUpInfo) private _showUps;

    constructor() ERC721("ShowUpCafe", "SUC") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://www.showup.cafe/nft/";
    }

    function safeMint(address to) public payable {
        require(msg.value >= 10 ether, "Missing payment");

        _asyncTransfer(owner(), msg.value);

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();

        _showUps[tokenId] = ShowUpInfo(block.timestamp, 0);

        _safeMint(to, tokenId);
    }

    function getShowUpInformation(uint tokenId) public view 
    returns (ShowUpInfo memory) {
        return _showUps[tokenId];
    }

    function canShowUp(uint tokenId) public view returns (bool) {
        ShowUpInfo memory showUpInfo = _showUps[tokenId];
        uint lastTimestamp = showUpInfo.lastTimestamp;

        return !_isEarly(lastTimestamp) && !_isLate(lastTimestamp);
    }

    function _isEarly(uint timestamp) private view returns (bool) {
        uint lockout = timestamp + 8 hours;
        return block.timestamp < lockout;
    }

    function _isLate(uint timestamp) private view returns (bool) {
        uint deadline = timestamp + 32 hours;
        return block.timestamp > deadline;
    }

    function showUp(uint tokenId) public onlyTokenOwner(tokenId) {
        ShowUpInfo storage showUpInfo = _showUps[tokenId];

        _verifyCanShowUp(showUpInfo.lastTimestamp);

        showUpInfo.sum = showUpInfo.sum + 1;
        showUpInfo.lastTimestamp = block.timestamp;
    }

    function _verifyCanShowUp(uint timestamp) private view {
        _verifyIsNotEarly(timestamp);
        _verifyIsNotLate(timestamp);
    }

    function _verifyIsNotEarly(uint timestamp) private view {
        require(!_isEarly(timestamp), "Too early");
    }

    function _verifyIsNotLate(uint timestamp) private view {
        require(!_isLate(timestamp), "Too late");
    }

    modifier onlyTokenOwner(uint tokenId) {
        require(msg.sender == ownerOf(tokenId), "Not token owner");
        _;
    }
}