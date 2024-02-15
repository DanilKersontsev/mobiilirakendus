import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItmes: 'center'

    },
    image: {
        width: 18,
        height: 18
    },
    title: {
        colors: colors.blue,
        fontSize: 26,
        fontWeight: '500',
        paddingHorizontal: 16
    }
})