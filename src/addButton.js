import React from 'react';
import {Button, ButtonGroup, FormControl, Glyphicon, InputGroup, Modal} from 'react-bootstrap';
import NameButtons from './data.js';
import familyButton from './familyButton.js';
import ReactDOM from 'react-dom';

var people = [
	
	{'fName':'Jen', 'lName':'Earl', 'problems':[1]},
	{'fName':'Lou', 'lName':'Tenant', 'problems':[]},
	{'fName':'Jack', 'lName':'Hammer', 'problems':[]},
	{'fName':'Grey', 'lName':'Earl', 'problems':[1]},
	{'fName':'Grandma', 'lName':'Earl', 'problems':[]},
	{'fName':'Grandpa', 'lName':'Earl', 'problems':[1]},
	{'fName':'Sam', 'lName':'Tenant', 'problems':[]},
	{'fName':'Dad', 'lName':'Earl', 'problems':[]}
];

class NameButton extends React.Component{
	
	constructor(props){
	
		super(props);
	}
	
	render(){
		
		return(
		
			<Button onClick={() => this.props.onClick(this.props.person.fName + " " +this.props.person.lName)}>{this.props.person.fName + ' ' + this.props.person.lName}</Button>
		);
	}
}

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
			
			showModal: false,
			text:"Add"
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
	
	growTree(names){
		
		if(Math.pow(2, document.getElementById('tree').childElementCount - 1) <= this.props.ki){
			
			var tree = document.getElementById('tree');
			tree.insertBefore(document.createElement("DIV"), tree.firstChild);
			
			ReactDOM.render(<AddButtons count={Math.pow(2, document.getElementById('tree').childElementCount - 1)}/>, document.getElementById('tree').firstChild);
			var actualFirst = tree.firstChild.firstChild;
			tree.removeChild(tree.firstChild);
			tree.insertBefore(actualFirst, tree.firstChild);
		}
		
		
		this.setState({showModal: false, text:names});
		this.close();
		/*var k = 1;
			
		while(Math.pow(2, k) < this.props.ki){
			
			k++;
		}
		
		var subIndex = this.props.ki - Math.pow(2, k - 1); */
	}
	
	render(){
	
		var rows = [];
		
		for (var i=0; i < people.length; i++){
		
			rows.push(<NameButton person={people[i]} key={i} onClick={this.growTree}/>);
		}
	
		return(
		
			<div>
				<div>
					<Button onClick={this.open}><Glyphicon glyph="plus"/>{'  ' + /*this.props.person.fName + */ this.state.text /* + this.props.person.lName*/}</Button>
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
					
						<ButtonGroup vertical block>{rows}</ButtonGroup>
					</Modal.Body>
				</Modal>
			</div>
		);
	}
}

export default AddButton;