import "./Token.css";
import "./inputs.css";
import "./Tabs.css";
import Buttons from "./Buttons"
import Tx from "./Tx";
import Cookies from 'universal-cookie';
import CryptoJS from "crypto-js";

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const cookies = new Cookies();


function Token(props) {
        

        const genPublic = () => {
                var key = ec.genKeyPair();
                return key.getPublic('hex')

        }
        
      
        
  return (<div class = "token_container">
        <div class ="block child">
            <h3 class>Block: </h3>
            <h3 class ="grey_higlight">#</h3>
            <input class="new_input"
                    type="input"
                    value = {props.block.id}
                ></input>   
    </div>
    <div class ="nonce child">
            <h3 class>Nonce: </h3>
            <input 
                    type="input"
                    value = {props.block.nonce}
                ></input>  
    </div>

    <div class ="Tx child">
    <h3 class="tx_header" >Tx: </h3>        
    <div>
 <Tx amount = {100} from = {genPublic()} to = {genPublic()}></Tx>
 <Tx amount = {200} from = {genPublic()} to = {genPublic()}></Tx>
 <Tx amount = {300} from = {genPublic()} to = {genPublic()}></Tx>
      </div>
    </div>

    <div class ="prev child">
            <h3 class>Prev: </h3>
            <input 
                    value = {props.block.prevHash}
                ></input>  
    </div>

    <div class ="hash child">
            <h3 class>Hash: </h3>
            <input 
                    type="input"
                    value = {props.block.hash}
                ></input>  
    </div>

    <div className="btn_container" onClick={() => {}}>
    <Buttons name = {'MINE!'}></Buttons>
    </div>



  </div>)
}


export default Token;
