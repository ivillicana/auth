import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

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
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerViewStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default App;
