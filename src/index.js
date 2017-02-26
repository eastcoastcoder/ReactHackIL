import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Patient from './people';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var APIKey = 'cd1aa174e078484bbda23afd59b452e3';
var APISecret = '19135914982590CE96592961FDA62C0FC209AC423BF3915B669A118AC26D992B';
var buf = new Buffer(APIKey + ":" + APISecret).toString('base64');

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

var jsonData = {
	Problems : [
	    {
            FreeText: "Heart Attack"

        },
        {
            FreeText: "sty"
        }
	]
};

var myHeaders = new Headers({
  "Authorization": "Basic " + buf,
  "Content-Type": "application/json",
  "Accept": "application/json"
});

fetch('https://ipl-nonproduction-customer_validation.e-imo.com/api/v3/actions/categorize', { 
	method: 'POST',
	headers: myHeaders,
	body : JSON.stringify(jsonData)
	})
	.then(function(response) {
		return response.json()
	}).then(function(body) {
		document.getElementById('history').innerHTML = JSON.stringify(body);
		console.log(body);
});

ReactDOM.render(<Patient person = {people[1]}/>, document.getElementById('tree'));