import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Card, CardSection, Input, Button, Spinner } from '../common';

class LoginForm extends Component {
  state={};

  static navigationOptions = {
    title: 'Please Login',
    headerStyle: {
      backgroundColor: 'red',
    },
    // headerRight: (<View><Text>Right</Text></View>),
    // headerLeft: (<View><Text>left</Text></View>),
    headerTitleStyle: {
      alignItems: 'center',
      color: 'white',
      alignSelf: 'center',
      textAlign: 'center',
    },
  }

  onEmailChange = (text) => {
    const { emailChanged } = this.props;
    emailChanged(text);
  }

  onPasswordChange = (text) => {
    const { passwordChanged } = this.props;
    passwordChanged(text);
  }

  onButtonPress = () => {
    const { email, password, navigation } = this.props;
    this.props.loginUser({ email, password, navigation });

  }

  renderError = () => {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton = () => {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={this.onButtonPress}>
      Log In
      </Button>
    );
  }

  checkLogin = () => {
    this.props.navigation.navigate( this.props.user ? 'app' : 'auth');
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="Email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />

        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = ({ auth }) => {
  const {
    email, password, error, loading, user,
  } = auth;
  return {
    email,
    password,
    error,
    loading,
    user,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
