import "./Buttons.css";

function Buttons(props) {
return (
    <div class="btns_father">
      <a>
        <span>{props.name}</span>
        <div class="wave"></div>
      </a>
    </div>
  );
}

export default Buttons;
