import React, { useEffect, useState} from "react";
import { Image}  from 'react-native'

import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin";

import Home from './src/screens/app/Home';
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import Settings from "./src/screens/app/Settings";
import CreateListing from "./src/screens/app/CreateListing";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "./src/utils/colors";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { SafeAreaProvider } from "react-native-safe-area-context";
import { create } from "react-test-renderer";
import ProductDetails from "./src/screens/app/ProductDetails";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export const UserContext = React.createContext()


const ProfileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="Settings" component={Settings} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="CreateListing" component={CreateListing} options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  )
}




const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = focused
              ? require('./src/assets/tabs/Home_active.png')
              : require('./src/assets/tabs/Home.png');
          } else if (route.name === 'Favorites') {
            icon = focused 
            ? require('./src/assets/tabs/bookmark_active.png') 
            : require('./src/assets/tabs/bookmark.png');
          }
          else if (route.name === 'Profile') {
            icon = focused 
            ? require('./src/assets/tabs/profile_active.png') 
            : require('./src/assets/tabs/profile.png');
          }

          // You can return any component that you like here!
          return <Image style={{width: 24, height: 24}} source={icon} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGray}
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}

const isSignedIn = true;

const WEB_CLIENT_ID = '850262118316-cifuahu6qoirp79q2b8q9ot9smaab54l.apps.googleusercontent.com'
const IOS_CLIENT_ID ='850262118316-3p861n91obo1728bcv29koqnmkoofs14.apps.googleusercontent.com'
const REVERSED_CLIENT_ID ='com.googleusercontent.apps.850262118316-3p861n91obo1728bcv29koqnmkoofs14'





const App = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      const accessToken = await AsyncStorage.getItem('auth_token')
      setUser({ accessToken })
    }) ()
  }, [])


  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
      webClientId: WEB_CLIENT_ID, 
      offlineAccess: true, 
      iosClientId: IOS_CLIENT_ID, 
    })
  }, [])

  
  const theme = {
    colors: {
      background: colors.white
    },
  }


  return (
    <SafeAreaProvider>
      <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {
          user?.accessToken ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}></Stack.Screen>
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{headerShown: false}}></Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
              <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
              <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
    </UserContext.Provider>
    </SafeAreaProvider>
  );
};

export default React.memo(App)