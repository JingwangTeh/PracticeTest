import React from 'react';

import { func_navigation } from '../../_functions';



class Homepage__Presentation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
                Homepage
				<div onClick={()=>{ func_navigation.historyPushToURL(this.props, '/testing') }}>To Testing Page</div>
			</div>
        );
	}
}



export { Homepage__Presentation };