import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { addTodo } from '../actions/todos.action';
import AppRouter from '../Router';
import './App.css';

interface IProps {
	addTodo: any;
}

interface IState {
	link?: string;
}

class App extends Component<any, IState> {
	constructor(props: any) {
		super(props);
		this.state = {
			link: 'shashikala'
		};
	}

	public handleChange(event: any): void {
		this.setState({ link: 'Charles' });
	}

	public addTodo(event: any): void {
		this.props.addTodo('My first addition of todo');
	}

	render() {
		const x: string = 'dsadasdad';
		return (
			<div className='App'>
				<ul>
					{this.props.todos.map((value: any) => {
						return <li key={value.id}>{value.text}</li>;
					})}
				</ul>
				<AppRouter name={x} link={this.state.link} />
				<button onClick={e => this.addTodo(e)}>Add Todo</button>
				<button onClick={e => this.handleChange(e)}>
					Change link name
				</button>
				<header className='App-header'>
					<Router>
						<Link to='/about/'>About</Link>
					</Router>
					<a
						className='App-link'
						href='https://reactjs.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default connect(
	(state: any) => ({ todos: state.todos }),
	{ addTodo }
)(App);
