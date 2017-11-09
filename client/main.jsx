import {App} from "./components/App.jsx";

function renderApp() {
	ReactDOM.render(
		<App />,
		document.getElementById("app")
	);
}

document.addEventListener("DOMContentLoaded", renderApp);

if (document.getElementById("app"))
	renderApp();