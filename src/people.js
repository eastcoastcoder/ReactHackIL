import React from 'react';
import { Navbar, Jumbotron, Button, ButtonToolbar, Grid } from 'react-bootstrap';

class Patient extends React.Component{
	
	constructor(props){
		
		super(props);
	}
	
	render(){
		
		return(
		
			<Button>{this.props.person.fName + ' ' + this.props.person.lName}</Button>
		);
	}
}

export default Patient;