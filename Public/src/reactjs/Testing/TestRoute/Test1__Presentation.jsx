import React from 'react';



class Test1__Presentation extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if (this.props.addToDo) {
			this.props.addToDo('hello there');
		}

		//const { history } = this.props;
		//history.push('/abc');
	}

	render() {
        const { test } = this.props;
		
		return (
			<div>
				<div>12345abb<br/>{test}</div>
				<div onClick={()=>{ this.props.history.push('/test2') }}>Click Me!</div>
			</div>
        );
	}
}



export { Test1__Presentation };