const SHA256 = require("crypto-js/sha256");

class Transaction {
  constructor(amount, from, to) {
    this.amount = amount;
    this.from = from;
    this.to = to;
  }
}

class Block {
  constructor(index, timeStamp, transaction, prevHash = "") {
    this.index = index;
    this.transaction = transaction;
    this.prevHash = prevHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
    this.timeStamp = timeStamp;
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.nonce +
        this.prevHash +
        this.timeStamp +
        JSON.stringify(this.transaction)
    ).toString();
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
  }
}

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2;
  }

  createGenesisBlock() {
    return new Block(0, "10/6/2021 ", "Genesis Block", "0");
  }
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(block) {
    block.prevHash = this.getLatestBlock().hash;
    block.mineBlock(this.difficulty);
    this.chain.push(block);
  }
}

module.exports.BlockChain = BlockChain;
module.exports.Block = Block;
module.exports.Transaction = Transaction;
