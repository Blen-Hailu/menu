import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className='App'>
        <Navbar dark color='primary'>
            <div className='container'>
              <NavbarBrand href='/'>Restorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>
        <Menu/>
    </div>
    );
  }
}

export default App