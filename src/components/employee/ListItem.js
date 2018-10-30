import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from '../common';

class ListItem extends Component {

  state = {};

  onRowPress = () => {
    this.props.navigation.navigate('EmployeeEdit', { employee: this.props.employee });
  }

  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={styles.tittleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  tittleStyle: {
    fontSize: 20,
    paddingLeft: 15,
  },
};

export default ListItem;

