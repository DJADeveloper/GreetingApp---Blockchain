const assert = require('assert');
const ganache = require('ganache-cli');
const { beforeEach } = require('mocha');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider);

const { abi, evm } = require('../Compile.js');

let greeting;

beforeEach(async () => {
    greeting = await new web3.eth.Contract(abi)
    .deploy({data: evm.bytecode.object, arguments: ['This is a test']})
    console.log(typeof JSON.parse(compiledFactory).abi)
})

describe('Greeting', () => {
    it('has a deployed a greeting', () => {
        assert.ok(greeting.options.address)
    })
})
