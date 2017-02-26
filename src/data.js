import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

var people = [
	
	{'fName':'Jen', 'lName':'Earl', 'problems':[]},
	{'fName':'Lou', 'lName':'Tenant', 'problems':[]},
	{'fName':'Jack', 'lName':'Hammer', 'problems':[]},
	{'fName':'Grey', 'lName':'Earl', 'problems':[]},
	{'fName':'Grandma', 'lName':'Earl', 'problems':[]},
	{'fName':'Grandpa', 'lName':'Earl', 'problems':[]},
	{'fName':'Sam', 'lName':'Tenant', 'problems':[]},
	{'fName':'Dad', 'lName':'Earl', 'problems':[]}
];

class NameButton extends React.Component{
	
	constructor(props){
	
		super(props);
	}
	
	render(){
		
		return(
		
			<Button>{this.props.person.fName + ' ' + this.props.person.lName}</Button>
		);
	}
}

class NameButtons extends React.Component{
	
	render(){
		
		var rows = [];
		
		for (var i=0; i < people.length; i++){
		
			rows.push(<NameButton person={people[i]} key={i}/>);
		}
		
		return(
		
			<ButtonGroup vertical block>{rows}</ButtonGroup>
		);
	}
}

export default NameButtons;