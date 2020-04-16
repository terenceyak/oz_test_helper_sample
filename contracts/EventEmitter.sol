pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./IndirectEventEmitter.sol";

contract EventEmitter {
    function emitUintIndirectly(uint256 value, IndirectEventEmitter emitter) public {
        emitter.emitUintIndirectly(value);
    }

}
