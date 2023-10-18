import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Courses.css"
const Courses = () => {
	return (
		<div className="Page">
			<h1>You are in the Courses page!</h1>
			<h3>URL: localhost:3000/courses</h3>
			<div className="courses-nav">
				<NavLink className={(navData) => navData.isActive ? "active" : "" }to="/courses/search">Search</NavLink>
				<NavLink className={(navData) => navData.isActive ? "active" : "" } to="/courses/list">List</NavLink>
			</div>
			<Outlet />
		</div>
	);
};

export default Courses;
