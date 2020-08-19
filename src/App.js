import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import ProductPage from './pages/ProductPage/ProductPage';
import NotFound from './components/NotFound/NotFound';
import Home from './pages/Home/Home';
import browserHistory from './browserHistory';
import './App.css';
import './reset.css';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/registration' component={RegistrationPage}/>
            <Route exact path='/product/:id' component={ProductPage}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
    );
  }
}

export default App;