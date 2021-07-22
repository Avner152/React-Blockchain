import ExpenseItem from "./components/ExpenseItem";
import NewBlock from "./components/NewBlock"

import Inputs from "./components/Inputs";
import { createApiClient } from "./api";
import "./App.css";
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from "react-router-dom";

const { BlockChain, Block, Transaction } = require("./model/block");

var bitCoin  = new BlockChain();



const api = createApiClient();


/* git commands:
git pull
git status
git add .
git commit -m "what updated"
git push
*/



function App() {
  const [blocksCount, setBlocksCount] = useState(-2);
  const [blocks, setChain] = useState([{id:"", nonce:"", transaction:"", prevHash:"", hash:"", timeStamp:""}]); 
 

   
   const last_block = bitCoin.getLatestBlock();
  const Home = () => (
    <div>
      {/* <h2>Home</h2> */}
    </div>
  );
  
  const Hash = () => (
    <div>
      <h2>Hash</h2>
    </div>
  );
  
  const Chain = () => (
    <div>
      <h2>chain</h2>
    </div>
  );
  

  useEffect(() => {
    const fetchBlockChain = async () => {
     try {
    const countResponse = api.getBlocksCount();
    const blocksResponse = api.getBlocks();
     countResponse.then(res => setBlocksCount(res));
      blocksResponse.then(res => setChain(res))
  
     } catch (error) {
       console.log(error)   
     }
    };
    fetchBlockChain();

    blocks.map((block) => {
      var temp = new Block(block.id, block.nonce, block.transactions,block.hash, block.prevHash,  block.timeStamp)
         bitCoin.addBlock(temp)
    });

  },[blocksCount])

  return (
    <div className="App">
      <div>

    <nav class="navMenu">
      <Link to='/'><a >Home</a></Link>
      <Link to='/hash'><a>Hash</a></Link>
      <Link to='/chain'><a>Chain</a></Link>
      <Link to='/new'><a>Create New</a></Link>
      <div class="dot"></div>
    </nav>

      {/* <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hash">Hash</Link>
          </li>
          <li>
            <Link to="/chain">Chain</Link>
          </li>
          <li>
            <Link to="/new">Create New</Link>
          </li>
        </ul>
      </nav> */}

      { /* Route components are rendered if the path prop matches the current URL */}
      <div class="avner">
      <Route path="/"><Home /></Route>
      <Route path="/hash"><ExpenseItem blockchain={bitCoin.chain} /></Route>
      <Route path="/chain"><Chain /></Route>
      <Route path="/new"><NewBlock id ={blocksCount+1} prevHash = {last_block.hash} /></Route>
      </div>
    </div>    
  </div>
  );
}

export default App;
