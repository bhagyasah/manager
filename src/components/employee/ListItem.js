import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from '../common';

class ListItem extends Component {

  state = {};

  render() {
    const { name } = this.props.employee;
    return (
      <CardSection>
        <Text style={styles.tittleStyle}>
          {name}
        </Text>
      </CardSection>
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

