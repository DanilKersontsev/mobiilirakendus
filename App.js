import React, { useEffect} from "react";
import {SafeAreaView} from 'react-native';
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Sigin from "./src/screens/auth/Signin";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID = '850262118316-cifuahu6qoirp79q2b8q9ot9smaab54l.apps.googleusercontent.com'
const IOS_CLIENT_ID ='850262118316-3p861n91obo1728bcv29koqnmkoofs14.apps.googleusercontent.com'
const REVERSED_CLIENT_ID ='com.googleusercontent.apps.850262118316-3p861n91obo1728bcv29koqnmkoofs14'
const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], 
      webClientId: WEB_CLIENT_ID, 
      offlineAccess: true, 
      iosClientId: IOS_CLIENT_ID, 
    })
  }, [])
  return (
    <SafeAreaView>
      <Sigin></Sigin>
    </SafeAreaView>
  );
};

export default App