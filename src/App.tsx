import React from "react";

import "./App.css";
import MyRoutes from "./Routes";
import { GlobalStyle } from "./styles/global";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<MyRoutes />
		</div>
	);
}

export default App;
