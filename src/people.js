import React from 'react';
import { Button, Row, Col} from 'react-bootstrap';

class Patient extends React.Component{
	
	constructor(props){
		
		super(props);
	}
	
	render(){
		
		return(
		
			
			<Row id='main' className="show-grid">
				<Col xs={12} md={8}><div class="member"><Button>{this.props.person.fName + ' ' + this.props.person.lName}</Button></div></Col>
				<Col xs={6} md={4}><h3>Family Medical History</h3></Col>
			</Row>
		);
	}
}

export default Patient;