import React, {useState} from "react";
import { pressable, Image, Text, View} from "react-native";
import Input from "../Input";
import { styles } from "./styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Header = ({title, onBackPress, onLogout, showBack, showSearch, showLogout}) => {
    const [showSearchInput, setShowSearchInput] = useState(false)

    const onSearch = () => {
        setShowSearchInput(search => !search)
    }
    return(
        <View>
        <View style={styles.container}>
            { showBack ? (
                <Pressable hitSlop={20} onPress={onBackPress}>
                    <Image style={styles.icon} source={require('../../assets/back.png')}></Image>
                </Pressable>
            ) : showSearch ? (
                <Pressable hitSlop={20} onPress={onSearch}>
                    <Image style={styles.icon} source={require('../../assets/search.png')}></Image>
                </Pressable>
            ) : <View style={styles.space} />
            }
            <Text style={styles.title}>{title}</Text>
            {
                showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../assets/logout.png')}></Image>
                    </Pressable>
                ) : <View style={styles.space} />
            }
        </View>
        {
            showSearchInput ? (
                <Input placeholder="Type your keyword"></Input>
            ) : null
        }
        </View>
    )
}
export default React.memo(Header)