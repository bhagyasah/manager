import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../../actions';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from '../common';

class EmployeeEdit extends Component {

  static navigationOptions = {
    title: 'Edit Employee',
  }

  state = {showModal: false };

  componentWillMount() {
    _.each(this.props.navigation.getParam('employee'), (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({ name, phone, shift, uid: this.props.navigation.getParam('employee').uid, navigation: this.props.navigation });
  }

  onAccept = () => {
    this.props.employeeDelete({ uid: this.props.navigation.getParam('employee').uid, navigation: this.props.navigation});
  };

  onDecline = () => {
    this.setState({showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
            Fire
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
            Are you sure want to fire this employee ?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
