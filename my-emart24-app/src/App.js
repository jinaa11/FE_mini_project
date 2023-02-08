import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TabNavigation from './navigations/TabNavigation';

const App = () => {
   return (
      <NavigationContainer>
         <StatusBar style='auto' />
         <TabNavigation />
      </NavigationContainer>
   );
}

export default App;