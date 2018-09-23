import React from 'react';

import { func_navigation } from '../../_functions';



class Test1__Presentation extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.addToDo) {
			this.props.addToDo('hello there');
		}
	}

	render() {
        const { test } = this.props;
		
		return (
			<div>
				<div>12345abb<br/>{test}</div>
				<div onClick={()=>{ func_navigation.historyPushToURL(this.props, '/test2') }}>Click Me!</div>
				<p className="abc">hello abc</p>
			</div>
        );
	}
}



export { Test1__Presentation };