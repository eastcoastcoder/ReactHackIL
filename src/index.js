import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Patient from './people';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var people = [

	{'fName':'Jen', 'lName':'Earl', 'problems':[]},
	{'fName':'Lou', 'lName':'Tenant', 'problems':[]},
	{'fName':'Jack', 'lName':'Hammer', 'problems':[]},
	{'fName':'Grey', 'lName':'Earl', 'problems':[]},
	{'fName':'Grandma', 'lName':'Earl', 'problems':[]},
	{'fName':'Grandpa', 'lName':'Earl', 'problems':[]},
	{'fName':'Sam', 'lName':'Tenant', 'problems':[]},
	{'fName':'Dad', 'lName':'Earl', 'problems':[]}
];//ajax in the future

ReactDOM.render(<Patient person = {people[1]}/>, document.getElementById('buttons'));