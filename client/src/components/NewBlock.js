import React, { useState } from 'react';
import "./inputs.css";
import { createApiClient } from "../api";
import Buttons from "./Buttons"
const SHA256 = require("crypto-js/sha256");




const api = createApiClient();


function NewBlock(props) {
  const id = props.id
  const prevHash = props.prevHash
  const [nonce, setNonce] = useState(0);
  const [data, setData] = useState("")
  const [hash, setHash] = useState("")
  const [timeStamp] = useState(Date.now)

  const calculateHash = () => {
    setHash( SHA256(
      id +
        prevHash +
        timeStamp +
        data+
        nonce
    ).toString())
  }

 const mineBlockV2 = async () => {
    try {
      console.log(hash, nonce)
   const response = api.mineBlock(hash, ""+(id-1)+prevHash+timeStamp+data);
      response.then(res => {setHash(res.hash); setNonce(res.nonce)})

    } catch (error) {
      console.log(error)   
    }
   };

   const createBlock = async () => {
    api.createBlock(id, nonce,  data, prevHash, hash, timeStamp).then()
    .catch(err => console.error(err))
   };

    
  return(
    <div className="father">
      <h2 id="index" className="form__label">
        "Index: "
      </h2>
      <input
        type="input"
        id="input1"
        className="form__field"
        defaultValue={props.id}
        readOnly ={true}
       
      ></input>

      <h2 id="nonce" className="form__label">
        {"Nonce: "}
      </h2>
      <input
        type="input"
        id="input2"
        className="form__field"
        value = {nonce}
        onChange={event => {setNonce(event.target.value); calculateHash(); }}
      ></input>

      <h2 id="data" className="form__label">
        Data:
      </h2>
      <textarea
        id="input3"
        className="form__field"
        onChange={event => {setData(event.target.value); calculateHash() }}
        value = {data}
      ></textarea>
      <h2 id="prev" className="form__label">
        {"Previous: "}
      </h2>
      <input
        type="text"
        className="form__field"
        id="input4"
        value ={props.prevHash}
      
      ></input>
      <h2 id="hash" className="form__label">
        {"Hash: "}
      </h2>
      <input
        type="text"
        className="form__field"
        id="input5"
        value = {hash}
      ></input>
      <div class='token_btns'>
      <div class = 'son_token_btn' onClick={() => createBlock()}>
      <a>Create Block!</a>
      </div>
      <div class = 'son_token_btn' onClick={() => {mineBlockV2()}}>
      <a>MINE!</a>
      </div>
      </div>
    </div>
  );
}

export default NewBlock
