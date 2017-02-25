import React from 'react';

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

class Patient extends React.Component{
	
	constructor(props){
		
		super(props);
		this.state ={
			
			'fName':props.fName, 
			'lName':props.lName,
			'problems':props.problems
		};
	}
	
	render(){
		
		return(
		
			<div>
		
				<p>{this.props.fName + this.props.lName}</p>
			</div>
		);
	}
}

module.exports = Patient;