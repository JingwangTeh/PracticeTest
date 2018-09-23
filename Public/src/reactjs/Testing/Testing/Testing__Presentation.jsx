import React from 'react';

import { func_navigation } from '../../_functions';



class Testing__Presentation extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.doTest) {
			this.props.doTest('hello there');
		}
	}

	render() {
        const { test } = this.props;
		
		return (
			<div>
				<div>
					12345abb<br/>
					
					<p className="abc">hello abc</p>
					
					<img src="/img/a.png" alt="no img" />

					{test}
				</div>

				<div onClick={()=>{ func_navigation.historyPushToURL(this.props, '/') }}>Click Me!</div>
			</div>
        );
	}
}



export { Testing__Presentation };