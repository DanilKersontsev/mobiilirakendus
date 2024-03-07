import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import Separator from "../../../components/Separator";
import { styles } from "./styles"
import GoogleLogin from "../../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../../../App";

const Signin = ({navigation}) => {
    const [values, setValues] = useState({})
    const {user, setUser} = UserContext(UserContext)

    const onBack = () => {
        navigation.goBack()
    }

    const onSignup = () => {
        navigation.navigate('Signup')
    
    }
    const onChange = () => {
        setValues(v => ({...v, [key]: value}))
    }
    const onSignin = () => {
        console.log('login values => ', values)
        if(!values?.email || !values?.password){
            Alert.alert('All field are required')
            return
        }
        axios.post('http://192.168.18.4/api/user/login', values).then( async response => {
                console.log('login => ', response)
                const accessToken = response?.data?.accessToken
                console.log(accessToken)
                setUser({accessToken})
                if (response?.data?.token) {
                    await AsyncStorage.setItem('auth_token', `${response?.data?.token}`)
                }
            })
            .catch(error => {
                console.log('login error => ', error.response.data)
            })
        .catch(error => {
            console.log(error)
        })
    }






     return (
        <SafeAreaView>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign in"/>
            <Input value={values.emai} onChangeText={(v) => onChangeText('email',  v)}
            label="E-mail" placeholder="example@gmail.com"/>
            <Input value={values.password} onChangeText={(v) => onChangeText('password', v)} 
            isPassword label="Password" placeholder="******"/> 
            <Button style={styles.button} title="Sign in"></Button>
            <Separator text="Or sign in with"></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>Don't have an account?
            <Text style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
        </SafeAreaView>
     )
 }

 export default React.memo(Signin) 