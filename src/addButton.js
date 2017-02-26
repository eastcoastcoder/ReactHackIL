import React from 'react';
import {Button, FormControl, Glyphicon, InputGroup, Modal} from 'react-bootstrap';
import NameButtons from './data.js';
import ReactDOM from 'react-dom';

class AddButtons extends React.Component{
	
	constructor(props){
	
		super(props);
	}
	
	render(){
		
		var rows = [];
		
		console.log(this.props.count);
		
		for (var i=0; i < this.props.count; i++){
		
			rows.push(<AddButton key={i + this.props.count} ki={i + this.props.count}/>);
		}
		
		return(
		
			<div>{rows}</div>
		);
	}
}

class AddButton extends React.Component{
	
	constructor(props){
	
		super(props);
		this.state = {
			
			showModal: false 
        };
		
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.growTree = this.growTree.bind(this);
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
	
	growTree(){
		
		if(Math.pow(2, document.getElementById('tree').childElementCount - 1) <= this.props.ki){
			
			var tree = document.getElementById('tree');
			tree.insertBefore(document.createElement("DIV"), tree.firstChild);
			
			ReactDOM.render(<AddButtons count={Math.pow(2, document.getElementById('tree').childElementCount - 1)}/>, document.getElementById('tree').firstChild);
			var actualFirst = tree.firstChild.firstChild;
			tree.removeChild(tree.firstChild);
			tree.insertBefore(actualFirst, tree.firstChild);
		}
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
					
						<NameButtons onChildClick={this.growTree}/>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default AddButton;