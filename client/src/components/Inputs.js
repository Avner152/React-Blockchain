import { Block } from "../model/block";
import "./inputs.css";

function Inputs(props) {
  // const block = new Block(1, "6/11/2021");
  var changed, fit_hash;
  var i = 0;
  function onInputChange(event) {
    changed = event.target.value;
    console.log("changed: " + changed);
    var block = new Block(i++, "6/11/2021", { changed: i });
    fit_hash = block.calculateHash();
    console.log("hash: " + fit_hash);
    document.getElementById("hash_input").value = fit_hash;
  }
  return (
    <div>
      <div>
        <label for="name" class="form__label">
          {props.lbl_data}
        </label>
        <textarea
          id="ta"
          class="form__field"
          onChange={onInputChange}
        ></textarea>
      </div>
      <div>
        <label for="name" class="form__label">
          {props.lbl_hash}
        </label>
        <input type="input" id="hash_input" class="form__field"></input>
      </div>
    </div>
  );
}

export default Inputs;
