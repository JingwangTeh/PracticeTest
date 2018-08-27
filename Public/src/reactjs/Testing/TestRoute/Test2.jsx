import React from 'react';

class Test2 extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		
		return (
			<div>abc123
				<img src="/img/a.png" alt="no img" />
				<div onClick={()=>{ this.props.history.push('/test1') }}>Click Me!</div>
			</div>
		);
	}
}

export { Test2 };