import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Login from './Login.jsx'
function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<Router>
				<Routes>
					<Route exact path="/" component={Login} />
					{/* <Route exact path="/register" element={<Register />} />
					<Route exact path="/reset" element={<Reset />} />
					<Route exact path="/dashboard" element={<Dashboard />} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
