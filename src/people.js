import React from 'react';
import { Navbar, Jumbotron, Button, ButtonToolbar, Grid, Row, Col} from 'react-bootstrap';

class Patient extends React.Component{
	
	constructor(props){
		
		super(props);
	}
	
	render(){
		
		return(
		
			
			<Row className="show-grid">
				<Col xs={12} md={8}><Button>{this.props.person.fName + ' ' + this.props.person.lName}</Button></Col>
				<Col xs={6} md={4}><h3>Family Medical History</h3></Col>
			</Row>
		);
	}
}

export default Patient;