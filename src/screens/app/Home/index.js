import React, { useEffect, useState} from "react";
import { View, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
 import { styles } from "./styles";
 import { categories } from "../../../data/categories"
 import CategoryBox from "../../../components/CategoryBox";
 import {products} from "../../../data/products"
 import ProductHomeItem from "../../../components/ProductHomeItem";
 import { colors } from "../../../utils/colors";


 const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedProducts, setSelectedProducts] = useState(products)

    useEffect(() => {
        if(selectedCategory){
            const updatedSelectedProducts = products.filter((product) =>
            product?.category === selectedCategory)
            setSelectedProducts(updatedSelectedProducts)
        } else {
            setSelectedProducts(products)
        }
    }, [selectedCategory])
    const renderCatergoryItem = (item,index) => {
        return(
            <CategoryBox
            onPress={() => setSelectedCategory(item?.item?.id)} isSelected={item.item.id === selectedCategory} title={item?.item?.title} image={item?.item?.image} />
        )
    }

   const renderProductItem = ({item}) => {
       console.log('item => ', item)
       return(
           <ProductHomeItem {...item} />
       )
   }
   return(
       <SafeAreaView>
            <View style={styles.container}>
                <Header showSearch={true} title="Find All You Need"></Header>
                <FlatList showsHorizontalScrollIndicator={false} style={styles.list} horizontal data={categories} renderItem={renderCatergoryItem} keyExtractor={(item,index)=> String(index)} />
                <FlatList numColumns={2} data={selectedProducts} renderItem={renderProductItem} keyExtractor={(item) => String(item.id)} ListFooterComponent={<View style={{height: 250}} />} />
            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home)