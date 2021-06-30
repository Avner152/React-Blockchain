import ExpenseItem from "./components/ExpenseItem";
import Inputs from "./components/Inputs";
import { createApiClient } from './api'

const { BlockChain, Block } = require("./model/block");

let avnersCoin = new BlockChain();
avnersCoin.addBlock(new Block(1, "10/6/2021", { amount: 4 }));
avnersCoin.addBlock(new Block(2, "8/4/2021", { amount: 2 }));
avnersCoin.addBlock(new Block(3, "8/4/2021", { amount: 3 }));
console.log("1 " + JSON.stringify(avnersCoin.chain[0].hash));
console.log("2 " + JSON.stringify(avnersCoin.chain[1].hash));
console.log("3 " + JSON.stringify(avnersCoin.chain[2].hash));

const api = createApiClient();




/* git commands:
git pull
git status
git add .
git commit -m "what updated"
git push
*/


function App() {
  const last_block = avnersCoin.getLatestBlock();

  return (
    <div className="App">
      <h1 className="heads">SHA256 HASH</h1>
      {<ExpenseItem block={last_block} />}
    </div>
  );
}

export default App;
