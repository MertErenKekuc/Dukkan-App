import React from "react";
import { View, SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import {API_URL} from '@env'

import ProductCard from '../../components/ProductCard'
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const Products = ({navigation}) => {
    const {loading,data,error} = useFetch(API_URL)

    const renderProduct = ({item}) => <ProductCard product = {item} onSelect={() => handleProductSelect(item.id)}/>

    const handleProductSelect = id => {
        navigation.navigate('DetailPage', {id})
    }

    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }

    return(
        <SafeAreaView>
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    )
}

export default Products;