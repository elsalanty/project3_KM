import React, { Component } from "react";
import { Link, Route } from 'react-router-dom';

import Courses from './courses';
import Quiz from './quiz';

class Dashboard extends Component {
	render(){  
		const { path } = this.props.match
		return(
			<div className="vh-100">
				<div className="row h-100">
					<div className="col-2 bg-dark">
						<nav className="nav flex-column">
							<Link to={`${path}/courses`} className="nav-item">Courses</Link>
							<Link to={`${path}/quiz`} className="nav-item">Quiz</Link>
							<Link to={`${path}/something`} className="nav-item">Something</Link>
						</nav>
					</div>
					<div className="col">
							<Route exact path={`${path}`}><h1>Welcome!</h1></Route>
							<Route path={`${path}/courses`} component={Courses}/>
							<Route path={`${path}/quiz`} component={Quiz}/>
					</div>
				</div>
			</div> 
		)  
  }
}

export default Dashboard;
