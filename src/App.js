import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route } from "react-router-dom";
import User from "./containers/Users/Users";
import Courses from "./containers/Courses/Courses";
function App() {
	return (
		<div className="App">
			<nav>
				<NavLink
					to="/user"
					className="NavLink"
					activeStyle={{ color: "orange" }}
				>
					User{" "}
				</NavLink>
				|&nbsp;&nbsp;
				<NavLink
					to="/courses"
					className="NavLink"
					activeStyle={{ color: "orange" }}
				>
					Courses
				</NavLink>
			</nav>
			<Route path="/user" component={User} />
			<Route path="/courses"  component={Courses} />
		</div>
	);
}

export default App;
