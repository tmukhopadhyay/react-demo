import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

interface IProps {
	name?: string,
	link?: string
}

interface IState {}

class AppRouter extends Component<IProps, IState> {
	render() {
		return (
			<Router>
				<div>
					<nav>
						<ul>
						<li>
							<Link to="/">{this.props.name}</Link>
						</li>
						<li>
							<Link to="/about/">{this.props.link}</Link>
						</li>
						<li>
							<Link to="/users/">Users</Link>
						</li>
						</ul>
					</nav>
				
					<Route path="/" exact component={Index} />
					<Route path="/about/" component={About} />
					<Route path="/users/" component={Users} />
				</div>
			</Router>
		);
	}
}

export default AppRouter;