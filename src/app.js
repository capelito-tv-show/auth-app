import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Button } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDIGyiMrucceVBxRTeJi9hp0p6fw9awb0o',
      authDomain: 'auth-d8669.firebaseapp.com',
      databaseURL: 'https://auth-d8669.firebaseio.com',
      projectId: 'auth-d8669',
      storageBucket: 'auth-d8669.appspot.com',
      messagingSenderId: '589582202485'
    });
  }

  firebase.auth()onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true});
      else {
        this.setState({ loggedIn: false})
      }
    }
  });

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <Button>Log out</Button>
      );
    case false:
      return <LoginForm />;
    default:
      return <Spinner size="large" />;
  }
}

  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
