import React from 'react';
import styled from 'styled-components/native';
import { createStackNavigator } from '@react-navigation/stack';
import { stackMainData, stackMainCenterData } from '../datas/stackMainData';

const Stack = createStackNavigator();

const HeaderLogo = styled.Image`
   width: 150px;
   height: 30px;
`;

const HomeStackNavigation = () => {
   return (
      <Stack.Navigator
         initialRouteName='Main'
         screenOptions={{
            headerStyle: {
               backgroundColor: '#fff',
               height: 100,
               shadowColor: '#222',
               shadowOffset: {
                  width: 0,
                  height: 5
               },
               shadowOpacity: 0.2,
               shadowRadius: 5,
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
               <HeaderLogo source={stackMainCenterData[0].data[0].source} />
            )
         }}
      >
         {
            stackMainData.map(data => (
               <Stack.Screen key={data.id} name={data.name} component={data.component} />
            ))
         }
      </Stack.Navigator>
   );
}

export default HomeStackNavigation;