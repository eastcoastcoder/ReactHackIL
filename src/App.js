import React, { Component } from 'react';
import './App.css';
import { Navbar, Jumbotron, Button, ButtonToolbar, Grid } from 'react-bootstrap';
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
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1 id = 'title'>GenCompare</h1>
              <ButtonToolbar id = 'buttons'>
                {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                <Button bsStyle="primary">Primary</Button>

                {/* Indicates a successful or positive action */}
                <Button bsStyle="success">Success</Button>

                {/* Contextual button for informational alert messages */}
                <Button bsStyle="info">Info</Button>

                {/* Indicates caution should be taken with this action */}
                <Button bsStyle="warning">Warning</Button>

                {/* Indicates a dangerous or potentially negative action */}
                <Button bsStyle="danger">Danger</Button>

                {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                <Button bsStyle="link">Link</Button>
              </ButtonToolbar>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
