import {createStore} from 'redux';

const initialState = {
	inputText: '',
	items:[]
}

const reducer = (state = initialState, action) => {
	console.log('reducer', action);

	switch(action.type){
		case 'CHANGE_INPUT_TEXT':
			return Object.assign({}, state, {inputText: action.text} )
		case 'ADD_ITEM':
			return Object.assign({}, state, { 
				items: state.items.concat(state.inputText),
				inputText:''//to wipe the input from input field
			} )

		default: return state;
	}
	return state;
}

const store = createStore(reducer);

export default store;