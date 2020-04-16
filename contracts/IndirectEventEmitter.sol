pragma solidity ^0.5.0;

contract IndirectEventEmitter {
    event IndirectUint(uint value);

    function emitUintIndirectly(uint value) public {
        emit IndirectUint(value);
    }
}
