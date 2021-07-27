import { useState } from "react";
import "./Tabs.css";
import Tx from './Tx'
function Transtab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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
        <Tx></Tx>
          <h3>Private Key</h3>
          <input></input>

        <a id="sign_btn" onClick=""><b>Sign</b></a>

          <h3>Message Signature</h3>
          <input></input>
        
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <h3>Message</h3>
          <textarea></textarea>
          <h3>Public Key</h3>
          <input></input>
          
          <br/><br/>
          <h3>Signature</h3>
          
          <input></input>

          <a id="sign_btn" onClick=""><b>Verify</b></a>

        </div>


      </div>
    </div>
  );
}

export default Transtab;