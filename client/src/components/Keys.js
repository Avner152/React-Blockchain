import { useState } from "react";
import "./Keys.css";
import Cookies from 'universal-cookie';


const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const cookies = new Cookies();



function Keys() {

var key = ec.genKeyPair();
const [publicKey, setPublicKey] = useState(key.getPublic("hex"))
const [privateKey, setPrivateKey] = useState(key.getPrivate("hex"))
cookies.set('privateKey', privateKey.toString());
cookies.set('publicKey', publicKey.toString());


const  genPublicFromPrivate = () => {

    key = ec.keyFromPrivate(privateKey);
    setPublicKey(key.getPublic("hex"))

}
const  randomkeys = () => {
    key = ec.genKeyPair();
    setPrivateKey(key.getPrivate("hex"))
    setPublicKey(key.getPublic("hex"))
}





  return( 
      <div className="container">
          <h2 className="keys-header">Keys</h2>
          <div className="private-key">
              <h3>private key</h3>
              <input className="private-input" type="input"  value = {privateKey}  onChange={event => {setPrivateKey(event.target.value); genPublicFromPrivate()}}>
              </input>
              </div>
              <div className="public-key">
              <h3>public key</h3>
              <input className="private-input" type="input" value = {publicKey} >
              </input>
              </div>
              {/* Check CSS */}
              <div className="btn_container" onClick={() => {randomkeys()}}>
              <a name = {"RANDOM!"}><b>Random</b></a>
              </div>
                  </div>


  )

}
export default Keys;