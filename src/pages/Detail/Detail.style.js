import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    body_container: {
        padding: 10,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height/4,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black',
        fontSize: 24,
    },
    description: {
        color: 'grey',
        fontSize: 15,
        margin: 8,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        margin: 8,
    },
})