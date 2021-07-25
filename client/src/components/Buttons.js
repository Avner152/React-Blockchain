import "./Buttons.css";

function Buttons(props) {
return (
    <div>
      <a>
        <span>{props.name}</span>
        <div class="wave"></div>
      </a>
    </div>
  );
}

export default Buttons;
