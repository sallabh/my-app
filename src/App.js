import React from 'react';

import {Switch , Route} from 'react-router-dom';

import './App.css';

import { auth , createUserProfileDocument} from './firebase/firebase.util'

import ShopPage from './pages/shop/shop.component';

import HomePage from './pages/homepage/homepage.component';

import Header from './components/header/header-component';

import signInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


class App extends React.Component {

  constructor(){
    super();

    this.state= {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user)

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage}/>    
        <Route  path='/shop' component={ShopPage}/>
        <Route path='/signin' component={signInAndSignUp} />
        </Switch>
        
      </div>
    );
  }

}

export default App;
