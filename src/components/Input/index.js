import React, { useState } from "react";;
 import { TextInput, View,Pressable, Text, Image, Modal, TouchableOpacity } from "react-native";
 import { styles } from "./styles"

 const Input = ({label, placeholder, isPassword, value, onChangeText, options, type, style, ...props}) => {
     const [isPasswordVisible, setIsPasswordVisible] = useState(false)
     const [isPickerModalVisible, setPickerModalVisible] = useState(false)

     const onEyePress = () => {
             setIsPasswordVisible(!isPasswordVisible)
     }

     const onSelect= (opt) =>{
         onChangeText(opt)
         setPickerModalVisible(false)
     }



     return (
         <View style={styles.container}>
             <Text style={styles.label}>{label}</Text>
             {type === 'picker' ? (
                 <Pressable onPress={() => setPickerModalVisible(true)} style={styles.inputContainer}>
                     { value ? (<Text style={[styles.placeholder, style]}>{value?.title}</Text>) : (<Text style={[styles.placeholder, style]}>{placeholder}</Text>)}

                     <Image style={styles.arrow} source={require('../../assets/arrow.png')} />
                 </Pressable>
             ) : (
             <View style={styles.inputContainer}>
                 <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={[styles.input, style]} {...props} />
                 {
                     isPassword ? (
                 <Pressable hitSlop={20} onPress={onEyePress}>
                     <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require("../../assets/eye_closed.png")} />
                 </Pressable>
                 ):null
                 }
             </View>)}
             <Modal transparent visible={isPickerModalVisible}>
                 <TouchableOpacity activeOpacity={1} onPress={() => setPickerModalVisible(false)} style={styles.modalWrapper}>
                     <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                         <Text style={styles.optionTitle} >Select options</Text>
                         {
                             options?.map(opt =>{
                                 if (!opt?.id) {
                                     return null
                                 }
                                 const selected = value?.id === opt?.id
                                 console.log(opt)
                                 console.log(value)
                                 return (<Text onPress={()=> onSelect(opt)} style={[styles.optionText, selected ? styles.selectedOption : {}]} key={opt?.title}>{opt?.title}</Text>)
                             })
                         }
                     </TouchableOpacity>
                 </TouchableOpacity>
             </Modal>
         </View>
     )
 }
export default Input