import "./inputs.css";
import Buttons from "./Buttons";
import React, { useState } from 'react';
import { createApiClient } from "../api";
const SHA256 = require("crypto-js/sha256");

const api = createApiClient();


function Inputs(props) {
  var id = props.block.index
  const prevHash = props.block.prevHash
  const [nonce, setNonce] = useState(props.block.nonce);
  const [data, setData] = useState(props.block.transaction[0].amount + ", " + props.block.transaction[0].from + ", " + props.block.transaction[0].to)
  const [hash, setHash] = useState(props.block.hash)
  const [timeStamp, settimeStamp] = useState(props.block.timeStamp)

  const calculateHash = () => {
    setHash(SHA256(
      id +
      prevHash +
      timeStamp +
      data +
      nonce
    ).toString())

    inValidChain();

  }


  const inValidChain = () => {
    for (var i = id ; i < props.size; i++)
      document.getElementById("block_" + i).style.backgroundColor = '#fd9a9a';
  }

  const mineBlockV2 = async () => {


    try {
      console.log(hash, nonce)
      const response = api.mineBlock(hash, "" + (id) + prevHash + timeStamp + data);
      console.log(response)
      response.then(res => { setHash(res.hash); setNonce(res.nonce ? res.nonce : nonce) })

      document.getElementById("block_" + id).style.backgroundColor = "#9afdaf"


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
        // id="hash_input"
        class="form__field"
        value={id}
        readOnly={true}

      ></input>

      <h2 id="nonce">
        {"Nonce: "}
      </h2>
      <input
        type="input"
        class="form__field"
        value={nonce}
        onChange={event => { setNonce(event.target.value); calculateHash() }}
      ></input>

      <h2 id="id" class="form__label">
        {"Data:"}
      </h2>
      {/* Todo:  create Component of Transaction */}
      <textarea
        value={data}
        onChange={event => { setData(event.target.value); calculateHash() }}

      ></textarea>
      <h2 id="prev" class="form__label">
        {"Previous: "}
      </h2>
      <input
        type="text"
        class="form__field"
        id="hash_input"
        value={prevHash}
        readonly="readonly"
      ></input>
      <h2 id="hash" class="form__label">
        {"Hash: "}
      </h2>
      <input
        type="text"
        class="form__field"
        id="hash_input"
        value={hash}
        onChange={event => { setHash(event.target.value); }}
        readonly="readonly"
      ></input>
      <div className="btn_container" onClick={() => { mineBlockV2() }}>
        <Buttons name={'MINE!'}></Buttons>
      </div>
    </div>
  );
}
export default Inputs;
