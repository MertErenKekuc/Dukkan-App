import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import styles from './Detail.style'
import useFetch from "../../hooks/useFetch/useFetch";
import {API_URL} from '@env'

import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";

function Detail ({route}) {
    const{id} = route.params
    const {loading, error, data} = useFetch(`${API_URL}/${id}`);


    if(loading){
        return <Loading />
    }

    if(error){
        return <Error />
    }

    return(
        <View style={styles.container}>
            <Image source={{uri:data.image}} style={styles.image}/>
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL </Text>
            </View>
        </View>
    )
}

export default Detail