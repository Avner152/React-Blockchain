import Keys from "./components/Keys";
import ExpenseItem from "./components/ExpenseItem";
import NewBlock from "./components/NewBlock";
import Tabs from "./components/Tabs";
import Transtab from "./components/Transtab";
import Token from "./components/Token";
import { createApiClient } from "./api";
import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, Route, withRouter } from "react-router-dom";

const api = createApiClient();

function App() {
  const [blocksCount, setBlocksCount] = useState(-2);
  const [blocks, setChain] = useState([]);
  
  const Home = () => <div>{/* <h2>Home</h2> */}</div>;



  useEffect( async() => {
    try {
      const blocksResponse = api.getBlocks();
      blocksResponse.then((res) => setChain(res));
      console.log(blocks);
    } catch (error) {
      console.log(error);
    }


  }, [blocksCount]);


  useEffect(async () => {
    try {
      const countResponse =  api.getBlocksCount();
      countResponse.then((res) => setBlocksCount(res));

    } catch (error) {
      console.log(error);
    }


  },[blocksCount] );
 
  

  return (
    <div className="App">
      <div>
        <nav class="navMenu">
          <Link to="/#">
            <a>Home</a>
          </Link>
          <Link to="/hash">
            <a>Hash</a>
          </Link>
          <Link to="/keys">
            <a>Keys</a>
          </Link>
          <Link to="/new">
            <a>Create New</a>
          </Link>
          <Link to="/token">
            <a>Tokens</a>
          </Link>
          <div class="dot"></div>
        </nav>


        {/* Route components are rendered if the path prop matches the current URL */}
        <div class="avner">
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/hash">
            <ExpenseItem blockchain={blocks} />{" "}
          </Route>
          <Route path="/keys">
            <Keys /> 
            <Tabs />
            <Transtab />
          </Route>
          <Route path="/new">
            <NewBlock id={blocksCount + 1} prevHash={blocksCount>0? blocks[blocksCount-1].hash: 0} />
          </Route>
          <Route path="/token">
            <Token block = {blocks[3]} />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
