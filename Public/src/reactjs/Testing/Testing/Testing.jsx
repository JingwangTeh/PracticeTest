import { connect } from 'react-redux';

import { mainTestActions } from '../../_actions';

import { Testing__Presentation } from './Testing__Presentation';



function mapStateToProps(state) {
	const { test } = state.mainTestReducer;
	
    return {
		test
    };
}

function mapDispatchToProps(dispatch) {
    return {
        doTest: (text) => { dispatch(mainTestActions.test(text)); },
    };
}



const Testing = connect(mapStateToProps, mapDispatchToProps)(Testing__Presentation);



export { Testing };