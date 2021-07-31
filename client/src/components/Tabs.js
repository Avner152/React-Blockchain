import { useState } from "react";
import "./Tabs.css";
import CryptoJS from "crypto-js";
import Cookies from "universal-cookie";
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const cookies = new Cookies();

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [message, setMessage] = useState("");
  const [publicKey, setPublicKey] = useState(cookies.get("publicKey"));
  const [privateKey, setPrivateKey] = useState(cookies.get("privateKey"));
  const [signature, setSignature] = useState("");

  const toggleTab = (index) => {
    setToggleState(index);
  };

   const sign = () => {
    var keypair = ec.keyFromPrivate(privateKey);
    var binaryMessage = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
    var hexSignature = keypair.sign(binaryMessage).toDER("hex").toString();
    setSignature(hexSignature);
    document.getElementById('sign').style.backgroundColor = '#f1f1f1';
  };

  const verify = () => {
    var tmpKey = ec.keyFromPublic(publicKey, "hex");
    var binaryMessage = CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
    if (tmpKey.verify(binaryMessage, signature)) {
      console.log("is verify!");
      document.getElementById('sign').style.backgroundColor = '#9afdaf';

    } else {
      console.log("not verify!");
      document.getElementById('sign').style.backgroundColor = '#fd9a9a';
    }
  };

  return (
    <div className="container" id="sign">
      <h2>Signature</h2>
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
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
          <textarea
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          ></textarea>
          <h3>Private Key</h3>
          <input
            value={privateKey}
            onChange={(event) => setPrivateKey(event.target.value)}
          ></input>

          <div id="sign_btn" onClick={() => sign()}>
            <b>Sign</b>
          </div>

          <h3>Message Signature</h3>
          <input value={signature} readOnly={true}></input>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h3>Message</h3>
          <textarea
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          ></textarea>
          <h3>Public Key</h3>
          <input value={publicKey} onChange={(event) => setPublicKey(event.target.value)} ></input>

          <br />
          <br />
          <h3>Signature</h3>

          <input value={signature} readOnly></input>

          <div id="sign_btn" onClick={() =>signature? verify(): ""}>
            <b>Verify</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
