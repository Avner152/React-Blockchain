import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Inputs from "./components/Inputs";

const { BlockChain, Block } = require("./model/block");

let avnersCoin = new BlockChain();
avnersCoin.addBlock(new Block(1, "10/6/2021", { amount: 4 }));
avnersCoin.addBlock(new Block(2, "8/4/2021", { amount: 2 }));
avnersCoin.addBlock(new Block(3, "8/4/2021", { amount: 3 }));
console.log("1 " + JSON.stringify(avnersCoin.chain[0].hash));
console.log("2 " + JSON.stringify(avnersCoin.chain[1].hash));
console.log("3 " + JSON.stringify(avnersCoin.chain[2].hash));


/* git commands:
git pull
git status
git add .
git commit -m "what updated"
git push
*/


// // ---- Mongoose ---- \\\\
// var mongoose = require("mongoose");
// const URL = "mongodb://localhost/toDoList_ReactJs";
// const connection = mongoose.connection;
// mongoose.connect(URL, { useNewUrlParser: true });

// connection.on("open", () => {
//   console.log("Connected...");
// });

// // ---- Express ---- \\\\
// const express = require("express");
// const app = express();

// // Fetch
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   next();
// });

// // Post
// app.use(express.json());

// const missionRouter = require("./routes/route-info");
// app.use("/missions", missionRouter);

// app.listen(3000, () => {
//   console.log("Server is listening in port 3000");
// });

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
