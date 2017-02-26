import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Patient from './people';
// import IPL from './ipl.js';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

var APIKey = 'cd1aa174e078484bbda23afd59b452e3';
var APISecret = '19135914982590CE96592961FDA62C0FC209AC423BF3915B669A118AC26D992B';
// var buf = new Buffer(APIKey + ":" + APISecret).toString('base64');

var IPL = {};
IPL.categorizeURL = "https://ipl.e-imo.com/api/v3/actions/categorize", IPL.Categorize = function(a, b, c, d) {
    IPL.ajaxCategorize(a, b, IPL.categorizeURL, JSON.stringify(c), d)
}, IPL.ajaxCategorize = function(a, b, c, d, e) {
    var f;
    f = new XMLHttpRequest, f.onreadystatechange = function() {
        4 == f.readyState && 200 == f.status ? e(JSON.parse(f.responseText)) : 4 == f.readyState && 200 != f.status && e({
            HttpError: f.status
        })
    }, f.open("POST", c, !0), f.setRequestHeader("Authorization", "Basic " + btoa(a + ":" + b)), f.setRequestHeader("Accept", "application/json"), f.setRequestHeader("Content-Type", "application/json"), f.send(d)
}, IPL.setCategorizeURL = function(a) {
    IPL.categorizeURL = a
}, window.IPL = IPL;

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

var rawData = 
{
	"Problems" : [
		{ "FreeText": "Aarskog syndrome" },
		{ "FreeText": "CHF (congestive heart failure)" },
		{ "FreeText": "AIDS (acquired immune deficiency syndrome)" },
		{ "FreeText": "deep venous thrombosis of tibial vein" },
		{ "FreeText": "diabetic retinopathy" },
		{ "FreeText": "accidental overdose of anti-Parkinsonism drug" },
		{ "FreeText": "CKD (chronic kidney disease)" },
		{ "FreeText": "diffuse non-follicular lymphoma" },
		{ "FreeText": "HTN (hypertension)" }
	]
};

IPL.Categorize(APIKey, APISecret, rawData, function(result) {
	console.log(result);
});

// fetch('https://ipl-nonproduction-customer_validation.e-imo.com/api/v3/actions/categorize', { 
// 	method: 'POST',
// 	headers: {
// 		'Authorization': 'Basic ' + buf,
// 		'Content-Type': 'application/json'    
// 	},
// 	body : {
//     "Problems": [
//         {
//             "FreeText": "Heart Attack"

//         },
//         {
//             "FreeText": "sty"
//         }
//     ]
// 	}

// 	})
// 	.then(function(response) {
// 		return response.json()
// 	}).then(function(body) {
// 		console.log(body);
// 	});

ReactDOM.render(<Patient person = {people[1]}/>, document.getElementById('buttons'));