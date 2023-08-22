import {StyleSheet} from 'react-native'

export default StyleSheet.create({

    container: {
        backgroundColor: '#f0eeee',
        borderWidth: 1,
        borderColor: '#a09e9e',
        margin: 10,
        flexDirection: 'row',
        borderRadius: 10,
    },
    image: {
        width: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        minHeight: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    body_container: {
        flex: 1,
        padding: 6,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18,
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontStyle: 'italic',
    },
})