// SPDX-License-Identifier: MIT

pragma solidity =0.5.16;
import './PancakePair.sol';

contract CallHash {
    function bytes32ToString(bytes32 _bytes32) public pure returns (string memory) {
        uint8 i = 0;
        while(i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }
    function getInitHash() public pure returns(string memory){
        bytes memory bytecode = type(PancakePair).creationCode;
        return bytes32ToString(keccak256(abi.encodePacked(bytecode)));
    }
}
