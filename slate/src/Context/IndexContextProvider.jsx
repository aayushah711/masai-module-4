import React, { Component } from 'react';

export const IndexContext = React.createContext();

class IndexContextProvider extends Component {
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
			<IndexContext.Provider value={{ isDark, toggleDark, toggleLight }}>
				{this.props.children}
			</IndexContext.Provider>
		);
	}
}

export default IndexContextProvider;
