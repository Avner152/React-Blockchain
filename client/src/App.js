import ExpenseItem from "./components/ExpenseItem";
import NewBlock from "./components/NewBlock"

import Inputs from "./components/Inputs";
import { createApiClient } from "./api";
import "./App.css";
import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from "react-router-dom";

const { BlockChain, Block, Transaction } = require("./model/block");

var bitCoin = new BlockChain();



const api = createApiClient();

/* git commands:
git pull
git status
git add .
git commit -m "what updated"
git push
*/



function App() {
  const [chain, setChain] = useState({id:"", nonce:"", transaction:"", prevHash:"", hash:"", timeStamp:""});

  useEffect(() => {
    const fetchBlockChain = () => {
     try {
      const response =  api.getBlocks();
      response.then(res => setChain(res));
      
       
     } catch (error) {
       console.log(error)
       
     }
  


    };
    fetchBlockChain();

  },[])
  console.log(chain)
  const last_block = bitCoin.getLatestBlock();
  const Home = () => (
    <div>
      <h2>Home</h2>
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
  

  return (
    <div className="App">
      <div>
      <nav className="navbar navbar-light">
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
      </nav>

      { /* Route components are rendered if the path prop matches the current URL */}
      <Route path="/"><Home /></Route>
      <Route path="/hash"><ExpenseItem block={last_block} blockchain={bitCoin.chain} /></Route>
      <Route path="/chain"><Chain /></Route>
      <Route path="/new"><NewBlock id ={2523465} prevHash = {last_block.prevHash} /></Route>
    </div>
      <h1 className="heads">SHA256 HASH</h1>
    
    </div>
  );
}

export default App;
