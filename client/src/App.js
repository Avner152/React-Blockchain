import ExpenseItem from "./components/ExpenseItem";
import Inputs from "./components/Inputs";
import { createApiClient } from "./api";
import "./App.css";

const { BlockChain, Block } = require("./model/block");

var bitCoin = new BlockChain();
bitCoin.addBlock(new Block(1, "10/6/2021", { amount: 4 }));
// bitCoin.addBlock(new Block(2, "8/4/2021", { amount: 2 }));

const api = createApiClient();

/* git commands:
git pull
git status
git add .
git commit -m "what updated"
git push
*/

function App() {
  const last_block = bitCoin.getLatestBlock();

  return (
    <div className="App">
      <h1 className="heads">SHA256 HASH</h1>
      {<ExpenseItem block={last_block} blockchain={bitCoin.chain} />}
    </div>
  );
}

export default App;
