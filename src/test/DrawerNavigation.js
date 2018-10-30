import React from 'react';
import { createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';
import { Text, View, SafeAreaView, ScrollView, Dimensions, Image , Alert} from 'react-native';
import { Header, Left, Right, Container, Button, Title, Body, Content, StyleProvider, Icon } from 'native-base';

class MyHomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
    drawerIcon: (
      <Icon name="menu" />
    ),
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Header style={{backgroundColor: 'black'}}>
          <Left>
            <Button transparent>
              <Icon name='menu' onPress={() => this.props.navigation.openDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title> Home</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{color: 'red', backgroundColor: 'red', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text> Home Screen </Text>
          <Button  onPress={() => this.props.navigation.navigate('notification')}><Text>clickk me</Text></Button>
        </Content>
     </Container>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  render() {
    return (
     <Text> Mynotification screen</Text>
    );
  }
}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1}} >
  <Header style={{backgroundColor: 'black'}}>
          <Left>
            <Button transparent>
              <Icon name='md-arrow-back' onPress={() => props.navigation.closeDrawer()} />
            </Button>
          </Left>
          <Body>
            <Title> Home</Title>
          </Body>
        </Header>
   <View style={{ height: 150, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
     <Image source={require('./images.jpeg')} style={{ height: 100, width: 100, borderRadius: 20}} />
   </View>
    <ScrollView>
      <DrawerItems {...props} />
      </ScrollView>
  </SafeAreaView>
);

const homeStack = createStackNavigator({
  Home: MyHomeScreen,
  notification: MyNotificationsScreen,
});

export const RootScreen = createDrawerNavigator({
  Home: homeStack,
  Notifications: MyNotificationsScreen,
},{
  drawerWidth: Dimensions.get('window').width * 0.9,
  contentComponent: props => <CustomDrawerComponent {...props}/>,
}
);