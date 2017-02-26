import React, { Component } from 'react';
import './App.css';
import { Navbar, Button, ButtonToolbar, Grid, PageHeader, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    var styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: '#bdc3c7'
      },
      bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
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
						<Col xs={6} md={4}><h3>Family Medical History</h3><div></div></Col>
					</Row>
                </ButtonToolbar>
            </Grid>
            
        <div id = 'listProblems'></div>
      </div> 
    );
  }
}

export default App;