import React, { Component } from 'react';
import { Picker,Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../../actions';
import { Card, CardSection, Input, Button } from '../common';


class EmployeeCreate extends Component {

  static navigationOptions={
    title: 'Employee',
  }

  state = {};

  onChangeInput = ({ prop, value }) => {
    this.props.employeeUpdate({ prop, value });
  }

  onButtonPress = () => {
    const { name, phone, shift, navigation } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigation });
  }

  render() {
    console.log('value in employee create', this.props);
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="bhagya"
            value={this.props.name}
            onChangeText={value => this.onChangeInput({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="9801074961"
            value={this.props.phone}
            onChangeText={value => this.onChangeInput({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
           style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday value=Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thrusday" value="Thrusday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 20,
    paddingLeft: 20,
  },
};
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name, phone, shift,
  };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
