const BN = web3.utils.BN;
const { expectEvent } = require('@openzeppelin/test-helpers');
const { expect } = require('chai').use(require('chai-bn')(BN));
const EventEmitter = artifacts.require('EventEmitter');
const IndirectEventEmitter = artifacts.require('IndirectEventEmitter');

contract('IndirectExpectEvent', function() {
    beforeEach(async function () {
        this.emitter = await EventEmitter.new();
        this.indirectEmitter = await IndirectEventEmitter.new();
    });

    it('should emit indirect uint', async function () {
        const value = new BN(1);
        const { tx } = await this.emitter.emitUintIndirectly(value, this.indirectEmitter.address);
        await expectEvent.inTransaction(tx, IndirectEventEmitter, 'IndirectUint', {
            value
        });
    });

    it('should pass', function () {
        expect('11').to.be.bignumber.equal(new BN(11));
    });
});
