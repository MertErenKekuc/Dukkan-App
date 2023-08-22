import { StyleSheet,Dimensions } from "react-native";

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0eeee',
    },
    body_container: {
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 2.4,
        resizeMode: 'contain',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        margin: 5,
        textAlign: 'center',
    },
    description: {
        fontStyle: 'italic',
        fontSize: 18,
        margin: 5,
    },  
    price: {
        fontSize: 18,
        margin: 10,
        textAlign: 'right',
        marginRight: 15,
        color: 'black',
    },
})