import React, { useState } from 'react';
import CreateButton from './CreateButton'
import "./inputs.css";
import { createApiClient } from "../api";
import { Button} from 'react-bootstrap';
const SHA256 = require("crypto-js/sha256");




const api = createApiClient();


function NewBlock(props) {
  const id = props.id
  const prevHash = props.prevHash
  const [nonce, setNonce] = useState(0);
  const [data, setData] = useState("")
  const [hash, setHash] = useState("")
  const calculateHash = () => {
    setHash( SHA256(
      props.id +
        nonce +
        props.prevHash +
        Date.now +
        data
    ).toString())
  }
    
  return(
    <div className="father">
      <h2 id="index" className="form__label">
        "Index: "
      </h2>
      <input
        type="input"
        id="hash_input"
        className="form__field"
        defaultValue={props.id}
        readOnly ={true}
       
      ></input>

      <h2 id="nonce" className="form__label">
        {"Nonce: "}
      </h2>
      <input
        type="input"
        id="hash_input"
        className="form__field"
        value = {nonce}
        onChange={event => {setNonce(event.target.value); calculateHash(); }}
      ></input>

      <h2 id="id" className="form__label">
        Data:
      </h2>
      <textarea
        id="hash_input"
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
        id="hash_input"
        value ={props.prevHash}
        readOnly="readOnly"
      
      ></input>
      <h2 id="hash" className="form__label">
        {"Hash: "}
      </h2>
      <input
        type="text"
        className="form__field"
        id="hash_input"
        readOnly="readOnly"
        value = {hash}
      ></input>
      <Button variant="primary" size="lg" active onClick={() => { api.createBlock(id, nonce,  data, prevHash, hash)}}>Create Block!</Button>
    
    </div>
  );
}

export default NewBlock