import React from "react";
import { Pressable, Image, Text} from "react-native";
import { styles } from "./styles";

const ProductHomeitem = ({title, image, price, onPress}) => {
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}}></Image>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </Pressable>
    )
}
export default React.memo(ProductHomeitem)