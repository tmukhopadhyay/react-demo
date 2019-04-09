import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/todos.action';

class About extends Component<any, any> {
	componentDidMount() {
		this.props.dispatch(fetchData());
	}

	render() {
		console.log(this);
		return (
			<div>
				<h2>This is About</h2>
				<ul>
					{this.props.todos.map((value: any) => {
						return <li key={value.id}>{value.text}</li>;
					})}
				</ul>
			</div>
		);
	}
}

export default connect((state: any) => ({ todos: state.todos }))(About);
