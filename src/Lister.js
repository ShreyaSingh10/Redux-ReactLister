import React from 'react';
import {connect} from 'react-redux';

function Lister(props){
	console.log('render',props);
	return(
		<div>
			<h1>Lister</h1>
		
				<input value={props.inputText} onChange={props.inputChange}/>

			<ul>
				<li>item 1</li>

			</ul>
		</div>
	);
}

function mapStateToProps(state){
	return{
		inputText: state.inputText
	};
}

function mapDispatchToProps(dispatch) {
	return{
		inputChange: (event) => {
			const action = {type: 'CHANGE_INPUT_TEXT', text: event.target.value}
			dispatch(action);
	}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Lister);