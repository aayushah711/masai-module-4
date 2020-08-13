import React, { Component } from 'react';
import './App.css';
import Board from './Components/Board';
import Homepage from './Components/Homepage';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDark: false,
			homepage: true
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

	showHompage = () => {
		console.log('showing homepage');
		this.setState({
			homepage: true
		});
	};

	hideHomepage = () => {
		console.log('showing homepage');
		this.setState({
			homepage: false
		});
	};

	render() {
		const { isDark, homepage } = this.state;
		const { toggleDark, toggleLight, showHompage, hideHomepage } = this;
		return (
			<React.Fragment>
				<div
					className="App"
					style={isDark ? { background: 'rgb(81, 152, 58, 0.5)' } : { background: 'rgb(81, 152, 58)' }}
				>
					{homepage ? (
						<Homepage
							theme={{ isDark, toggleDark, toggleLight, hideHomepage }}
							// style={homepage ? { display: 'block' } : { display: 'none' }}
						/>
					) : (
						<div
							className="App"
							style={
								homepage ? (
									{ display: 'none' }
								) : isDark ? (
									{ background: 'rgb(81, 152, 58, 0.5)' }
								) : (
									{ background: 'rgb(81, 152, 58, 0.5)' }
								)
							}
						>
							<Board theme={{ isDark, toggleDark, toggleLight, homepage, showHompage }} />
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}

export default App;
