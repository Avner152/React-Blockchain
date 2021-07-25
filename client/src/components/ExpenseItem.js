import { Tab } from "react-bootstrap";
import "./ExpenseItem.css";
import Inputs from "./Inputs";
import Tabs from "./Tabs";
import Transtab from "./Transtab";


function ExpenseItem(props) {
  console.log(props.blockchain)
  return (
    <div className="expense-item">
      <ul>
        {props.blockchain.map((block) => (
          <div className="son" >
            <Inputs block={block} />
          </div>
        ))}
      </ul>

    </div>
  );
}

export default ExpenseItem;
