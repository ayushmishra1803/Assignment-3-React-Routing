import React, { Component } from "react";
import { Route } from "react-router";
import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
	state = {
		courses: [
			{ id: 1, title: "Angular - The Complete Guide" },
			{ id: 2, title: "Vue - The Complete Guide" },
			{ id: 3, title: "PWA - The Complete Guide" },
		],
	};
	componentDidMount() {
		console.log(this.props.match.url);
	}
	OnClickHandler = (id,title) => {
        console.log(id);
        
        this.props.history.push( this.props.match.url +"/"+ id+"/"+title);
    };

	render() {
        const url=this.props.match.url
		return (
			<div>
				<h1>Amazing Udemy Courses</h1>
				<section className="Courses">
					{this.state.courses.map((course) => {
						return (
							<article
								className="Course"
								key={course.id}
								onClick={() => this.OnClickHandler(course.id,course.title)}
							>
								{course.title}
							</article>
						);
					})}
                   
				</section>
				<section>
					<Route path= {url+"/:id/:title"} exact component={Course} />
				</section>
			</div>
		);
	}
}

export default Courses;
