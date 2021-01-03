import React from 'react'
import { Provider } from 'react-native-paper'
import {  Image  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import firebase from 'firebase/app'
import 'firebase/auth'
import { theme } from './src/core/theme'
import {
  AuthLoadingScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from './src/screens'
import { FIREBASE_CONFIG } from './src/core/config'

const Stack = createStackNavigator()
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG)
}

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AuthLoadingScreen"
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen
            name="AuthLoadingScreen"
            component={AuthLoadingScreen}
          />
          <Stack.Screen options={{headerShown:false}} name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" options={{headerShown:false}}  component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" options={{headerShown:false}}   component={RegisterScreen} />
          <Stack.Screen name="Dashboard"  component={Dashboard} 
                        options={{
                          title: <Image 
                              style={{width:30, height:30}}
                              source={require("./src/assets/logo_mini.png")}
                              resizeMode="contain" />,
                          headerStyle: {
                            shadowRadius:0,
                            shadowOffset:{height:0},
                            backgroundColor: '#111325',
                          },
                          headerTintColor: '#fff',
                          headerTitleStyle: {
                            fontWeight: 'bold',
                          },
                        }}/>
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
