import "./ExpenseItem.css";
import Inputs from "./Inputs";
import Buttons from "./Buttons";

const mission = "Change Diaper";
const start_Time = "00:00";
const pts = 35;

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <Inputs lbl_data={"Data: "} lbl_hash={"Hash: "} />
      </div>
    </div>
  );
}

export default ExpenseItem;
