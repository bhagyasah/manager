import React, { Component } from 'react';
import { ActivityIndicator, View, Text} from 'react-native';
import { connect } from 'react-redux';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._laodScreeen();
    this.state = {};
  }

  componentWillReceiveProps() {
    console.log('Auth loginCalled in will recievecall');
  }

  _laodScreeen = () => {
    console.log('props in AuthLoading ', this.props);
    // const { user } = this.props.user;
    this.props.navigation.navigate(this.props.user.user ? 'App' : 'Auth');
  }


  render() {
    console.log('AuthLoading Component rendered');
    return (
      <View>
        <Text> Auth login</Text>
        <ActivityIndicator />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps)(AuthLoading);
