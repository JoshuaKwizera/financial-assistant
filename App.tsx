import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Screens/SplashScreen';
import LoginScreen from './src/Screens/LoginScreen';
import { EmailProvider } from './src/utilityFunctions/EmailContext';
import SignUpScreen from './src/Screens/SignUpScreen';
import BottomTabsNavigator from './src/Transitions/navigation/BottomNavigation/BottomTabsNavigator';
import BudgetSetup from './src/Screens/BudgetSetup';
import BudgetShow from './src/Screens/BudgetShow';
import BudgetShows from './src/Screens/BudgetShows';
import ExpenseScreen from './src/Screens/ExpenseScreen';
import FinalSummary from './src/Screens/FinalSummary';
import BudgetOverview from './src/Screens/BudgetOverview';
import {IncomeProvider} from './src/Storage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <IncomeProvider>
    <EmailProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="BottomTabsNavigator" 
          component={BottomTabsNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BudgetScreen" 
          component={BudgetSetup} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BudgetShow" 
          component={BudgetShow} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BudgetShows" 
          component={BudgetShows} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ExpenseScreen" 
          component={ExpenseScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BudgetOverview" 
          component={BudgetOverview} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="FinalSummary" 
          component={FinalSummary} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    </EmailProvider>
    </IncomeProvider>
  );
};

export default App;
