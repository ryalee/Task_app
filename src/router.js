import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

import Home from "./screens/Home/home";
import Tasks from "./screens/Tasks/tasks";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home"  
          component={Home}
          options={{
            tabBarLabel: 'Home', 
            headerShown: false,
            tabBarIcon: () => (<FontAwesome name="home" color={'#afc186'} size={22}/>),
            tabBarActiveTintColor: '#afc186',
            tabBarInactiveTintColor: '#4a5b6a',
            tabBarStyle: { backgroundColor: '#1e2025'},
          }}/>

        <Tab.Screen 
          name='Taks' 
          component={Tasks}
          options={{
            tabBarLabel: 'Tasks', 
            headerShown: false,
            tabBarIcon: () =>(<FontAwesome5 name="check-square" color={'#afc186'} size={22}/>),
            tabBarActiveTintColor: '#afc186',
            tabBarInactiveTintColor: '#4a5b6a',
            tabBarStyle: { backgroundColor: '#1e2025'},
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};