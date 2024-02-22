import React from "react";
import { View, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { styles } from "./styles";
import { categories } from "../../../data/categories"
import CategoryBox from "../../../components/CategoryBox";


const Home = () => {
    const renderCatergoryItem = (item,index) => {
        console.log('item => ', item.item)
        return(
            <CategoryBox title={item?.title} image={item?.image} />
         )
     }
     return(
         <SafeAreaView>
             <View style={styles.container}>
                 <Header showSearch={true} title="Find All You Need"></Header>
                 <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCatergoryItem} />
                 <Text>Home</Text>
             </View>
         </SafeAreaView>
    )
}
export default React.memo(Home)