import { useState } from "react";
import "./Tabs.css";
import Cookies from "universal-cookie";
import CryptoJS from "crypto-js";
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const cookies = new Cookies();

const genPublic = () => {
  var key = ec.genKeyPair();
  return key.getPublic('hex')

}

function Transtab() {
  const [publicKey, setPublicKey] = useState(cookies.get("publicKey"));
  const [privateKey, setPrivateKey] = useState(cookies.get("privateKey"));
  const [toggleState, setToggleState] = useState(1);
  const [from, setFrom] = useState(publicKey);
  const [to, setTo] = useState(genPublic());
  const [amount, setAmount] = useState(100);
  const [signature, setSignature] = useState("");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  


  const sign = () => {
    var keypair = ec.keyFromPrivate(privateKey);
    var binaryMessage = CryptoJS.SHA256(amount+from+to).toString(CryptoJS.enc.Hex);
    var hexSignature = keypair.sign(binaryMessage).toDER("hex").toString();
    setSignature(hexSignature);
    document.getElementById('trans').style.backgroundColor = '#f1f1f1';
  };

  const verify = () => {
    var tmpKey = ec.keyFromPublic(publicKey, "hex");
    var binaryMessage = CryptoJS.SHA256(amount+from+to).toString(CryptoJS.enc.Hex);
    if (tmpKey.verify(binaryMessage, signature)) {
      console.log("is verify!");
      document.getElementById('trans').style.backgroundColor = '#9afdaf';

    } else {
      console.log("not verify!");
      document.getElementById('trans').style.backgroundColor = '#fd9a9a';
    }
  }

  return (
    <div className="container" id="trans">
          <h2>Transactions</h2>
      <div className="bloc-tabs">

        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          Sign
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Verify
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h3>Message</h3>
          <div class ="first">
          <h2>$</h2><input value={amount} onChange={(event)=> setAmount(event.target.value)}></input>
          <h2>from</h2><input value={from} onChange={(event)=> setFrom(event.target.value)}></input>
          <h2>-&gt;</h2><input value={to} onChange={(event)=> setTo(event.target.value)}></input>       
      </div>

          <h3>Private Key</h3>
          <input value={privateKey} onChange={(event)=> setPrivateKey(event.target.value)}></input>

        <a id="sign_btn" onClick={() => sign()}><b>Sign</b></a>

          <h3>Message Signature</h3>
          <input value = {signature} readOnly></input>
        
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <h3>Message</h3>
        <div class ="first">
        <h2>$</h2><input value={amount} onChange={(event)=> setAmount(event.target.value)}></input>
          <h2>from</h2><input value={from} onChange={(event)=> setFrom(event.target.value)}></input>
          <h2>-&gt;</h2><input value={to} onChange={(event)=> setTo(event.target.value)}></input>        
      </div>

        
          <br/><br/>
          <h3>Signature</h3>
          
          <input value = {signature} readOnly></input>

          <a id="sign_btn" onClick={() => verify()}><b>Verify</b></a>

        </div>


      </div>
    </div>
  );
}

export default Transtab;