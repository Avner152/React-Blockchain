import React, { useState, useEffect, useCallback } from 'react';
import CreateButton from './CreateButton'
import "./inputs.css";
import { createApiClient } from "../api";
import { Button} from 'react-bootstrap';
const SHA256 = require("crypto-js/sha256");



const MAX = 500000;
const api = createApiClient();


function NewBlock(props) {
  const id = props.id
  const prevHash = props.prevHash
  const [nonce, setNonce] = useState(0);
  const [data, setData] = useState("")
  const [hash, setHash] = useState("")
  const [timeStamp, settimeStamp] = useState(Date.now)

  const calculateHash = () => {
    setHash( SHA256(
      id +
        nonce +
        prevHash +
        timeStamp +
        data
    ).toString())
  }

  const mineBlockV2 = async () => {
    try {
      console.log(hash, nonce)
   const response = api.mineBlock(hash, ""+id+prevHash+timeStamp+data);
   console.log(response)
      response.then(res => {setHash(res.hash); setNonce(res.nonce)})
    
      
    } catch (error) {
      console.log(error)   
    }
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
        readOnly="readOnly"
      
      ></input>
      <h2 id="hash" className="form__label">
        {"Hash: "}
      </h2>
      <input
        type="text"
        className="form__field"
        id="input5"
        readOnly="readOnly"
        value = {hash}
      ></input>
      <Button variant="primary" size="lg" active onClick={() => { 
        api.createBlock(id, nonce,  data, prevHash, hash).
        then()
        .catch(err => console.error(err))}}>Create Block!</Button>
      <Button variant="secondary" size="lg" onClick={() => {mineBlockV2()}}>MINE! </Button>
    
    </div>
  );
}

export default NewBlock