import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RootStack from './routers/RootStack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDN1UImvjMdbTsQIcCv_sSJ7DVGbKajeEs',
      authDomain: 'authentication-168a9.firebaseapp.com',
      databaseURL: 'https://authentication-168a9.firebaseio.com',
      projectId: 'authentication-168a9',
      storageBucket: 'authentication-168a9.appspot.com',
      messagingSenderId: '325488281662',
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    console.log('state changed');
    return (
      <Provider store={store}>
        <RootStack />
        {/* <RootScreen /> */}
      </Provider>
    );
  }
}

export default App;
