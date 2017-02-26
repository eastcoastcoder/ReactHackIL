import React, { Component } from 'react';
import './App.css';
import {Navbar, Button, ButtonToolbar, Grid, PageHeader, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {

    var indents = [];
    for (var i = 0; i < this.props.level; i++) {
      indents.push(<span className='indent' key={i}></span>);
    }
    return (
      <div id = 'middle'>
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
                  <Row id='main' className="show-grid">
                    <Col id='tree' xs={12} md={8}></Col>
                    <Col xs={6} md={4}><h3>Family Medical History</h3><Button id='history'></Button></Col>
                  </Row>
                </ButtonToolbar>
            </Grid>
            
        <div id = 'listProblems'></div>
      </div> 
    );
  }
}

export default App;