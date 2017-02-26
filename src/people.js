import React from 'react';
import {Button, FormControl, Glyphicon, InputGroup, Modal} from 'react-bootstrap';

class Patient extends React.Component{
	
	constructor(props){
	
		super(props);
		this.state = {
			
			showModal: false 
        };
		
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
	}
	
	getInitialState() {
		
		return { showModal: false };
	}

	close() {
	
		this.setState({ showModal: false });
	}

	open() {
	
		this.setState({ showModal: true });
	}
	
	render(){
		
		return(
		
			<div>
				<div>
					<Button onClick={this.open}><Glyphicon glyph="plus"/>{'  ' + /*this.props.person.fName + */ 'Add' /* + this.props.person.lName*/}</Button>
				</div>
				
				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>						
							<InputGroup>
								<InputGroup.Addon><Glyphicon glyph="search"/></InputGroup.Addon>
								<FormControl type="text" placeholder="Search"/>
							</InputGroup>
						</Modal.Title>
					</Modal.Header>
			  
					<Modal.Body>
						<h4>Text in a modal</h4>
						<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
						
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default Patient;