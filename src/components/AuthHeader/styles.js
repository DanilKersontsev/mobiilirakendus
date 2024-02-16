import { StyleSheet } from "react-native";

 import { colors } from "../../utils/colors";

 export const styles = StyleSheet.create({
     container: {
         flexDirection: 'row',
         alignItems: 'center',
         marginBottom: 54
     },
     title: {
         color: colors.blue,
         fontSize: 26,
         fontWeight: '500',
         paddingHorizontal: 16
     },
     image: {
         width: 18,
         height: 18
     }
 }) 