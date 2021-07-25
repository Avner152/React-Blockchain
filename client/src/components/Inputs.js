import { Block, BlockChain } from "../model/block";
import "./inputs.css";
import Buttons from "./Buttons";
import React, { useState } from 'react';
import { Button} from 'react-bootstrap';
import { createApiClient } from "../api";
const SHA256 = require("crypto-js/sha256");

const api = createApiClient();


function Inputs(props) {
  var id = props.block.index
  const prevHash = props.block.prevHash
  const [nonce, setNonce] = useState(props.block.nonce);
  const [data, setData] = useState(props.block.transaction)
  const [hash, setHash] = useState(props.block.hash)
  const [timeStamp, settimeStamp] = useState("")

  const calculateHash = () => {
    setHash( SHA256(
      id +
        prevHash +
        timeStamp +
        data +
        nonce
    ).toString())
  }

  const mineBlockV2 = async () => {
    try {
      console.log(hash, nonce)
   const response = api.mineBlock(hash, ""+(id)+prevHash+timeStamp+data);
   console.log(response)
      response.then(res => {setHash(res.hash); setNonce(res.nonce)})
    
      
    } catch (error) {
      console.log(error)   
    }
   };



  return (
    <div class="father">
      <h2 id="index" >
        {"Index: "}
      </h2>
      <input
        type="input"
        id="hash_input"
        class="form__field"
        value = {id}
        readOnly = {true}
       
      ></input>

      <h2 id="nonce">
        {"Nonce: "}
      </h2>
      <input
        type="input"
        id="hash_input"
        class="form__field"
        value = {nonce}
        onChange={event => {setNonce(event.target.value); calculateHash() }}
      ></input>

      <h2 id="id" class="form__label">
        {"Data:"}
      </h2>
      {/* Todo:  create Component of Transaction */}
      <textarea
        value = {data[0].amount +", "+ data[0].from +", "+ data[0].to}
        onChange={event => {setData(event.target.value); calculateHash() }}
 
      ></textarea>
      <h2 id="prev" class="form__label">
        {"Previous: "}
      </h2>
      <input
        type="text"
        class="form__field"
        id="hash_input"
        value = {prevHash}
        readonly="readonly"
      ></input>
      <h2 id="hash" class="form__label">
        {"Hash: "}
      </h2>
      <input
        type="text"
        class="form__field"
        value = {hash}
        onChange={event => {setHash(event.target.value); }}
        readonly="readonly"
      ></input>
    <div className="btn_container" onClick={() => {mineBlockV2()}}>
    <Buttons name = {'MINE!'}></Buttons>
    </div>
    </div>
  );
}
export default Inputs;
