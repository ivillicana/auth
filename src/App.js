import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: false };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD6gy7-MVQjdSBbGAhU_4tJU9MKoYOhnZs',
      authDomain: 'auth-b1824.firebaseapp.com',
      databaseURL: 'https://auth-b1824.firebaseio.com',
      projectId: 'auth-b1824',
      storageBucket: 'auth-b1824.appspot.com',
      messagingSenderId: '614683893468',
      appId: '1:614683893468:web:d40e7dfeb80f61f9'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        
          <CardSection>
            <Button>
              Log Out
            </Button>
          </CardSection>
   
      );
    }

    return <LoginForm />;
  }
  
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
