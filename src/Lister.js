import React from 'react';
import {connect} from 'react-redux';
import Footer from './Footer';

function Lister(props){
	console.log('render',props);
	return(
		<div>
			<h1>Lister</h1>
			<form onSubmit={props.submit}>
				<input value={props.inputText} onChange={props.inputChange}/>
			</form>
			<ul>
			{ props.items.map((item,index) => {
				return <li onClick={()=>props.deleteItem(index)}key={index}>{item}</li>
			})}
			</ul>
			<Footer/>
		</div>
	);
}

function mapStateToProps(state){
	return{
		inputText: state.inputText,
		items: state.items
	};
}

function mapDispatchToProps(dispatch) {
	return{
		inputChange: (event) => {
			const action = {type: 'CHANGE_INPUT_TEXT', text: event.target.value}
			dispatch(action);
		},
		submit: (event) => {
			event.preventDefault();
			const action = {type: 'ADD_ITEM'};
			dispatch(action);
		},
		deleteItem: (index) => {
			const action ={type: 'DELETE_ITEM', index: index};
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Lister);