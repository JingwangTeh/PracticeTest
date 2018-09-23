import React from 'react';

import '../../../../css/scss/common/mainFooter-footer-common.scss';



class Footer__Presentation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row no-gutters">
                <div className="col-12">
					<div className="app-footer">
						Footer
					</div>
				</div>
			</div>
        );
	}
}



export { Footer__Presentation };