import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row', // Resim ve metinleri yatayda hizala
        backgroundColor: 'rgba(211, 211, 211, 0.5)',
        borderColor: 'black',
        margin: 10,
    },
    imageContainer: {
        padding: 10,
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    bodycontainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
    },
    price: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: 15,
    },
});
