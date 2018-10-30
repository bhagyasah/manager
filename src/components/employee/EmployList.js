import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Container, Content, Header, Right, Body, Title, Button, Left, Icon } from 'native-base';
import { employeeFetch } from '../../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {

  static navigationOptions = {
    header: null,
  };

  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props);
  };

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow = (employee) => {
    return <ListItem employee={employee} />;
  }

  render() {
    console.log("EmployeeList", this.props);
    return (
      <Container>
        <Header style={{backgroundColor: 'black'}}>
          <Body>
            <Title> Home</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="plus" onPress={() => this.props.navigation.navigate('EmployeeCreate')} />
            </Button>
          </Right>
        </Header>
        <Content>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
