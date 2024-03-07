import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader"
import Input from "../../../components/Input"
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button"
import Separator from "../../../components/Separator";
import { styles } from "./styles"
import GoogleLogin from "../../../components/GoogleLogin";
import { Alert } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false)
    const [values, setValues] = useState({})

    const onBack = () => {
        navigation.goBack()
    }

    const onSignin = () => {
        navigation.navigate('Signin')
    }

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onsubmit = async () => {
        if(!values?.fullname || !values?.email || !values?.password){
            Alert.alert('All fields are required')
            return
        }
        if(!checked){
            Alert.alert('Please agree with the terms')
            return
        }
        axios.post('http://192.168.18.4/api/user/register', values).then(response => {
            console.log('signup => ', response);
            const {email, password} = values
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
        })
        .catch(error => {
            console.log(error)
        })
    }

     return (
        <SafeAreaView>
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign Up"/>
            <Input value={values.fullName} onChangeText={(v) => onChange('fullnName', v)}
            label="Name" placeholder="Joe"/>
            <Input value={values.email} onChangeText={(v) => onChange('email', v)}
            label="Email" placeholder="example@gmail.com"/>
            <Input value={values.password} onChangeText={(v) => onChange('password', v)}
            isPassword label="Password" placeholder="******"/>
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>  
            <Button onPress={onsubmit}  style={styles.button} title="Sign Up"></Button>
            <Separator text="Or sign up with"></Separator>
            <GoogleLogin></GoogleLogin>
            <Text style={styles.footerText}>Already have and account?
            <Text style={styles.footerLink}> Sign In</Text>
            </Text>
        </View>
        </SafeAreaView>
     )
 }

 export default React.memo(Signup) 