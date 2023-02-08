import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomIconData } from '../datas/BottomIconData';
import TabIcon from '../ui/TapIcon';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
   return (
      <Tab.Navigator
         initialRouteName='Home'
         screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
               backgroundColor: '#ffb71b',
               borderTop: 'none',
               paddingTop: 14,
               paddingBottom: 14,
               boxSizing: 'border-box',
               height: 70,
            },
         }}
      >
         {
            BottomIconData.map(iconData => (
               <Tab.Screen
                  key={iconData.id}
                  name={iconData.name}
                  component={iconData.component}
                  options={{
                     tabBarIcon: (props) => TabIcon({ ...props, source: iconData.icon })
                  }}
               />
            ))
         }
      </Tab.Navigator>
   );
}

export default TabNavigation;