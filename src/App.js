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
            <h1>Welcome to React</h1>
            <p>
              <ButtonToolbar>
                {/* Standard button */}
                <Button>Default</Button>

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
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
