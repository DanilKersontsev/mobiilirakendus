import React from "react";
import {SafeAreaView} from 'react-native';
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";

const App = () => {
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App