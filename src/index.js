import ReactDOM from "react-dom/client"
import App from "./App";
import "./App.css";
import One from "./One"

const rootElement = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<One />);