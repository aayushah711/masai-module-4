import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDark: false
		};
	}

	toggleDark = () => {
		this.setState({
			isDark: true
		});
	};

	toggleLight = () => {
		this.setState({
			isDark: false
		});
	};

	render() {
		const { isDark } = this.state;
		const { toggleDark, toggleLight } = this;
		return (
			<React.Fragment>
				{isDark ? (
					<div className="App" style={{ background: 'rgb(81, 152, 58, 0.5)' }}>
						<Board theme={{ isDark, toggleDark, toggleLight }} />
					</div>
				) : (
					<div className="App" style={{ background: 'rgb(81, 152, 58)' }}>
						<Board theme={{ isDark, toggleDark, toggleLight }} />
					</div>
				)}
			</React.Fragment>
		);
	}
}

export default App;
