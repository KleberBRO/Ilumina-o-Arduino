import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Controle from './src/controle';
import Info from './src/info';
import Instrucoes from './src/instrucoes';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor='#37D276'
      barStyle='light-content'
      />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
              tabBarStyle: styles.tabBarStyle,
              tabBarActiveTintColor: "#002810",
              tabBarInactiveTintColor: "#fff",
              tabBarLabelStyle: styles.tabBarLabelStyle,
              headerStyle: { backgroundColor: '#37D276'},
              headerTitleStyle: { fontWeight: 'bold', color: '#fff' }
        }}
        >
          <Tab.Screen name='Controle' component={Controle}
          options={{
            tabBarLabel:"Controle",
            tabBarIcon: ({ focused }) => (
              <Entypo name="game-controller"
               size={24}
               color={focused ? "#002810" : "white"}/>
            ),
          }}
          />
          <Tab.Screen name='Info' component={Info} options={{
            tabBarLabel:"Info",
            tabBarIcon: ({ focused }) => (
              <Entypo name="bar-graph" size={22} 
              color={focused ? "#002810" : "white"}
              />
            )
          }}
          />
          <Tab.Screen name='Instruções' component={Instrucoes} options={{
            tabBarLabel:"Instruções",
            tabBarIcon: ({ focused }) => (
              <Entypo name="info-with-circle" size={22} 
              color={focused ? "#002810" : "white"}n
              />
            )
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  tabBarStyle:{
    backgroundColor: "#50FF96",
    borderTopWidth:3,
    borderColor:"#B7FFD4",
  },
  tabBarLabelStyle: {
    fontSize: 16, // tamanho da fonte do texto das guias
    fontWeight: 'bold', // peso da fonte do texto das guias
    color: '#FFFFFF', // cor do texto das guias
  },
});
