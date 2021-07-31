import "./Tabs.css";
import CryptoJS from "crypto-js";
import { useState } from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

function Tx(props) {

  const signMessage = () => {

    var keypair = ec.keyFromPrivate(props.from);
    var binaryMessage = CryptoJS.SHA256(props.amount+props.from+props.to).toString(CryptoJS.enc.Hex);
    var hexSignature = keypair.sign(binaryMessage).toDER("hex").toString();
      return hexSignature

  }


  const [signature] = useState(signMessage());
  cookies.set('signature', signature.toString());
  return (<div>
        <div class ="first">
          <h2>$</h2><input value = {props.amount}></input>
          <h2>from</h2><input value = {props.from}></input>
          <h2>-&gt;</h2><input value = {props.to}></input>       
      </div>
      <div class="second">
      <h2>Sig</h2><input value = {signature}></input>
      </div>
  </div>)
}

export default Tx;
