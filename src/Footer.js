import React from 'react';
import {connect} from 'react-redux';

function Footer (props){
	return(
		<footer>
			Total Count: {props.count}
		</footer>
	)
}

function mapStateToProps(state){
	return{
		count: state.items.length
	};
}
export default connect (mapStateToProps)(Footer);