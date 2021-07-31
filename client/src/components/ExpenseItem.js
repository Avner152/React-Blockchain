import "./ExpenseItem.css";
import Inputs from "./Inputs";
const { BlockChain, Block, Transaction } = require("../model/block");


function ExpenseItem(props) {

  var bitCoin = new BlockChain();
  
  props.blockchain.map((block) => {
          var trans = [];
  
          var transArray = block.transactions.split("\n");
          transArray.map((tran) => {
            tran = tran.split(",");
            trans.push(new Transaction(tran[0], tran[1], tran[2]));
          });
          var temp = new Block(
            block.id,
            block.nonce,
            trans,
            block.hash,
            block.prevHash,
            block.timeStamp
          );
          bitCoin.addBlock(temp);
        });
      

  // console.log(props.blockchain)
  return (
    <div className="expense-item">
      <ul>
        {bitCoin.chain.map((block) => (
          <div className ="son" id = {"block_"+block.index} >
            <Inputs block={block}  size = {bitCoin.chain.length} />
          </div>
        ))}
      </ul>

    </div>
  );
}

export default ExpenseItem;
