import React from 'react';
import { Button, Row, Col, Glyphicon, Props} from 'react-bootstrap';

class Patient extends React.Component{
	
	constructor(props){
		
		super(props);
	}
	
	render(){
		
		return(
		
			<div><div><Button><Glyphicon glyph="plus"/>{'  ' + /*this.props.person.fName + */ 'Add' /* + this.props.person.lName*/}</Button></div></div>
		);
	}
}

export default Patient;