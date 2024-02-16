import React from "react";
 import { View } from "react-native"
 import Input from "../../../components/Input";
 import AuthHeader from "../../../components/AuthHeader"
 import { styles } from "./styles"

 const Signup = () => {
     return (
         <View style={styles.container}>
             <AuthHeader title="Sign up"></AuthHeader>
             <Input label="Name" placeholder={"John Doe"}></Input>
             <Input label="Email" placeholder="example@gmail.com"></Input>
             <Input  isPassword label="Password" placeholder="******"></Input>
         </View>
     )
 }

 export default Signup 