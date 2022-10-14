import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Login from './Login.jsx'
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
function App() {
	return (
		<div className="App">
			<h1>
				HII
			</h1>
			<header className="App-header"></header>
			
				<Routes>
					<Route exact path="/" component={Login} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/reset" element={<Reset />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
				</Routes>
			
		</div>
	);
}

export default App;
