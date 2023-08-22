import React, {useState,useEffect}  from "react";
import { SafeAreaView, FlatList, ActivityIndicator, Text } from "react-native";
import {API_URL} from "@env"

import Error from "../../components/Error/Error";
import Loading from '../../components/Loading/Loading'
import styles from './Products.style'
import PrductCard from '../../components/ProductCard'
import useFetch from "../../hooks/useFetch/useFetch";

function Products ({navigation}) {

    const {loading,data,error} = useFetch(API_URL)

    const handleProductSelect = (id) => {
        navigation.navigate('DetailsPage',{id})
    }

    const renderProduct = ({item}) => <PrductCard product={item} onSelect={() => handleProductSelect(item.id)}/>

    if (loading) {
        return <Loading />
      }
      
    if(error) {
       return <Error />
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={data}
            renderItem={renderProduct}/>
        </SafeAreaView>
    )
}

export default Products