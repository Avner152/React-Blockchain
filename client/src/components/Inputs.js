import { Block, BlockChain } from "../model/block";
import "./inputs.css";
import Buttons from "./Buttons";
import React, { useState } from 'react';

function Inputs(props) {
  var changed, fit_hash;
  var i = 1;
  const [isNewValue, setIsNewValue] = useState(true);


  function onInputChange(event) {
    var hashes = document.querySelectorAll("#hash_input");

    // hashes[0].value = blockchain.chain[0].index;
    // hashes[1].value = blockchain.chain[0].nonce;
    // hashes[3].value = blockchain.chain[0].prevHash;
    // hashes[4].value = blockchain.chain[0].hash;
    
    // for (let i = 1; i < hashes.length; i++) {
    //   // while (i % 3 != 0) {
    //   // }
    // }

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
        onChange={onInputChange}
      ></input>

      <h2 id="nonce" class="form__label">
        {"Nonce: "}
      </h2>
      <input
        type="input"
        id="hash_input"
        class="form__field"
        onChange={onInputChange}
      ></input>

      <h2 id="id" class="form__label">
        {"Data:"}
      </h2>
      <textarea
        id="hash_input"
        class="form__field"
        onChange={onInputChange}
      ></textarea>
      <h2 id="prev" class="form__label">
        {"Previous: "}
      </h2>
      <input
        type="text"
        class="form__field"
        id="hash_input"
        readonly="readonly"
      ></input>
      <h2 id="hash" class="form__label">
        {"Hash: "}
      </h2>
      <input
        type="text"
        class="form__field"
        id="hash_input"
        readonly="readonly"
      ></input>
      <Buttons></Buttons>
    </div>
  );
}
export default Inputs;
