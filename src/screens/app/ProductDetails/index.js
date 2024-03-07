import React from "react";
 import { ScrollView, Image, Text, View, Linking} from "react-native";
 import { SafeAreaView } from "react-native-safe-area-context";
 import Button from "../../../components/Button";
 import { styles } from "./styles"
 import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
 import ImageCarusel from "../../../components/ImageCarusel";

 const ProductDetails = ({navigation, route}) => {
     const {product} = route.params || {}
     console.log('product => ', product)

     const onBackPress = () =>{
         navigation.goBack()
     }

     const onContact = () =>{
         let phone = 'real phone number'
         Linking.openURL(`tel:${phone}`)

         let email = 'real email'
         Linking.openURL(`mailto:${email}`)
     }

     return(
         <SafeAreaView style={styles.save}>
             <ScrollView>
             {product?.images?.length ? (
                 <ImageCarusel images={product.images} />
             ) : (
                 <Image style={styles.image} source={{uri: product.image}} />
             )}

                 <View style={styles.content} >
                     <Text style={styles.title}>{product?.title}</Text>
                     <Text style={styles.price}>{product?.price}</Text>
                     <Text style={styles.description}>{product?.description}</Text>
                 </View>
                 <Pressable onPress={onBackPress} style={styles.backContainer}>
                     <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
                 </Pressable>
             </ScrollView>
             <View style={styles.footer}>
                 <Pressable  style={styles.bookMarkContainer}>
                     <Image style={styles.bookMarkIcon} source={require('../../../assets/tabs/bookmark.png')} />
                 </Pressable>
                 <Button onPress={onContact}title="Contact Seller" />
             </View>
         </SafeAreaView>
     )
 }
 export default React.memo(ProductDetails)