import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import LoginForm from '../components/auth/LoginForm';
import EmployeeList from '../components/employee/EmployList';
import AuthLoading from '../components/auth/AuthLoading';
import EmployeeCreate from '../components/employee/EmployeeCreate';
import EmployeeEdit from '../components/employee/EmployeeEdit';

const AppStack = createStackNavigator({
  EmployeeList,
  EmployeeCreate,
  EmployeeEdit,
});

const AuthStack = createStackNavigator({ LoginForm });

export default RootStack = createSwitchNavigator({
  AuthLoading,
  App: AppStack,
  Auth: AuthStack,
},
{
  initialRouteName: 'AuthLoading',
});
