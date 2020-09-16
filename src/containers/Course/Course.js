import React, { Component } from "react";

class Course extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	componentDidUpdate() {
		console.log(this.props.match.params.id);
	}
	render() {
		const id = this.props.match.params.id;
		const title = this.props.match.params.title;
		return (
			<div>
				<h1>_COURSE_TITLE_:{title}</h1>
				<p>You selected the Course with ID: {id} </p>
			</div>
		);
	}
}

export default Course;
