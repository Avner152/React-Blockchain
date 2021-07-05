import "./ExpenseItem.css";
import Inputs from "./Inputs";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ul>
        {props.blockchain.map((block) => (
          <div className="son" key={block}>
            <Inputs blockchain={props.blockchain} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseItem;
