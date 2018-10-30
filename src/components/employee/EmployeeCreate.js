import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate } from '../../actions';
import { Card, CardSection, Input, Button } from '../common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {

  static navigationOptions={
    title: 'Employee',
  }

  state = {};

  onButtonPress = () => {
    const { name, phone, shift, navigation } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigation });
  }

  render() {
    console.log('value in employee create', this.props.navigation.getParam('employee'));
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name, phone, shift,
  };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
