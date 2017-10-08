import {App} from "./components/App.jsx";
// import styles from "../public/stylesheets/style.css";

function renderApp() {
	ReactDOM.render(
		<App />,
		document.getElementById("app")
	);
}

document.addEventListener("DOMContentLoaded", renderApp);

if (document.getElementById("app"))
	renderApp();