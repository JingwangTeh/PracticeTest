import { connect } from 'react-redux';

import { mainTestActions } from '../../_actions';

import { Test1__Presentation } from './Test1__Presentation' ;



function mapStateToProps(state) {
	const { test } = state.mainTestReducer;
	
    return {
		test
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => { dispatch(mainTestActions.addTodo(text)); },
    };
}



const Test1 = connect(mapStateToProps, mapDispatchToProps)(Test1__Presentation);



export { Test1 };