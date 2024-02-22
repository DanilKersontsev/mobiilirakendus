import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import Separator from "../../../components/Separator";
import { styles } from "./styles"
import GoogleLogin from "../../../components/GoogleLogin";

 const Signin = () => {
     return (
        <View style={styles.container}>
            <AuthHeader title="Sign in"/>
            <Input label="E-mail" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="******"/> 
            <Button style={styles.button} title="Sign in"></Button>
            <Separator text="Or sign in with"></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>Don't have an account?
            <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
     )
 }

 export default Signin 