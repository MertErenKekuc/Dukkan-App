import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    flatlist_container: {
        marginBottom: 20,
        margin: 2,
    },    
    flatlistItem: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryImage: {
        resizeMode: 'contain',
        width: 75,
        height: 75,
        marginRight: 11,
        backgroundColor: 'white',
        borderRadius: 50,
        overflow: 'hidden',
    },
    categoryName: {
        fontSize: 20,
        color: 'black',
    },
});
