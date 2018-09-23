import React from 'react';

import '../../../../css/scss/common/mainHeader-header-common.scss';



class Header__Presentation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row no-gutters">
                <div className="col-12">
					<div className="app-header">
						Header
					</div>
				</div>
			</div>
        );
	}
}



export { Header__Presentation };