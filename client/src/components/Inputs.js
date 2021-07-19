import { Block, BlockChain } from "../model/block";
import "./inputs.css";
import Buttons from "./Buttons";
import React, { useState } from 'react';

function Inputs(props) {
  var changed, fit_hash;
  var i = 1;
  const id = props.id
  const prevHash = props.prevHash
  const [nonce, setNonce] = useState(0);
  const [data, setData] = useState("")
  const [hash, setHash] = useState("")
  const [timeStamp, settimeStamp] = useState("")


  function onInputChange(event) {
    var hashes = document.querySelectorAll("#hash_input");

    // hashes[0].value = blockchain.chain[0].index

    changed = event.target.value;
    var hash = event.currentTarget.nextElementSibling;

    // fit_hash = blockchain[0].calculateHash();
    // hash.value = fit_hash;
  }

  // document.getElementById("hash_input").value = fit_hash;

  return (
    <div class="father">
      <h2 id="index" class="form__label">
        {"Index: "}
      </h2>
      <input
        type="input"
        id="hash_input"
        class="form__field"
        value = {eval(props.block.index+1)}
       
      ></input>

      <h2 id="nonce" class="form__label">
        {"Nonce: "}
      </h2>
      <input
        type="input"
        id="hash_input"
        class="form__field"
        value = {props.block.nonce}
   
      ></input>

      <h2 id="id" class="form__label">
        {"Data:"}
      </h2>
      <textarea
        id="hash_input"
        class="form__field"
        value = {props.block.transaction}
 
      ></textarea>
      <h2 id="prev" class="form__label">
        {"Previous: "}
      </h2>
      <input
        type="text"
        class="form__field"
        id="hash_input"
        value = {props.block.prevHash}
        readonly="readonly"
      ></input>
      <h2 id="hash" class="form__label">
        {"Hash: "}
      </h2>
      <input
        type="text"
        class="form__field"
        value = {props.block.hash}
        readonly="readonly"
      ></input>
      <Buttons></Buttons>
    </div>
  );
}
export default Inputs;
