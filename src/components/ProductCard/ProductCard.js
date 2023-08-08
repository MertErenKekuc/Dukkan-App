import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from './ProductCard.style'

const ProductCard = ({product,onSelect}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>  
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                <Image
                    style={styles.image} 
                    source={{uri: product.image}}
                />
            </View>
                 <View style={styles.bodycontainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price} TL</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard;
