import "./Token.css";
import "./inputs.css";
import "./Tabs.css";
import Tx from "./Tx";

function Token(props) {
  return (<div class = "token_container">
        <div class ="block child">
            <h3 class>Block: </h3>
            <h3 class ="grey_higlight">#</h3>
            <input class="new_input"
                    type="input"
                ></input>   
    </div>
    <div class ="nonce child">
            <h3 class>Nonce: </h3>
            <input 
                    type="input"
                ></input>  
    </div>

    <div class ="Tx child">
    <h3 class="tx_header" >Tx: </h3>        
    <div>
    <Tx></Tx>
    <Tx></Tx>
    <Tx></Tx>
    <Tx></Tx>
    <Tx></Tx>
      </div>
    </div>

    <div class ="prev child">
            <h3 class>Prev: </h3>
            <input 
                    type="input"
                ></input>  
    </div>

    <div class ="hash child">
            <h3 class>Hash: </h3>
            <input 
                    type="input"
                ></input>  
    </div>



  </div>)
}

export default Token;
