import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './firebase.js'
function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
