import "./Buttons.css";
import { createApiClient } from "../api";


const api = createApiClient();
function CreateButton() {
  return (
    <div>

        <span>Create!</span>
        <div className="wave"></div>
    </div>
  );
}

export default CreateButton;
