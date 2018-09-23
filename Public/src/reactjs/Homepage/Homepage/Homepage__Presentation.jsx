import React from 'react';

import { func_validation, func_navigation } from '../../_functions';
import { mainTextConstants } from '../../_constants';

import '../../../css/scss/page/mainHomepage-homepage-page.scss';



class Homepage__Presentation extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const toc_array = func_validation.isArrayNotEmpty(mainTextConstants.toc)?mainTextConstants.toc:[];
		let toc = toc_array.map((content, idx)=>{
			return (
				<div className="homepage-toc-entry" key={idx}>
					<div className="row">
						<div className="col-8">
							<p className="m-0 d-inline-block homepage-toc-entryLink homepage-toc-entryName" 
								onClick={()=>{ func_navigation.historyPushToURL(this.props, content.link) }}>
								{content.name}
							</p>
						</div>
						<div className="col-4">
							<p className="m-0">{content.remark}</p>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className="container page-homepage">

				<div className="row">
					<div className="col-12">
						<div className="homepage-toc-title">

							<h1 className="m-0">Table of Contents</h1>

						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						<div className="homepage-toc-header">

							<div className="row">
								<div className="col-8">
									<p className="m-0">Title</p>
								</div>
								<div className="col-4">
									<p className="m-0">Remark</p>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">
						{toc}
					</div>
				</div>

			</div>
        );
	}
}



export { Homepage__Presentation };