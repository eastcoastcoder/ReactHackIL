import React, { Component } from 'react';
import './App.css';
import { Navbar, Button, ButtonToolbar, Grid, PageHeader} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">GenCompare</a>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
          </Grid>
        </Navbar>
		
		<PageHeader>GenCompare</PageHeader>
          <Grid>
              <ButtonToolbar id = 'buttons'>
              </ButtonToolbar>
          </Grid>
		  <div id = 'listProblems'></div>
      </div>
    );
  }
}

export default App;
