import React from "react";
import { View, Text, Image } from "react-native";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import {API_URL} from "@env"

import styles from './Details.style'
import useFetch from "../../hooks/useFetch/useFetch";

function Details ({route}) {

    const {id} = route.params
    const{loading, error, data} = useFetch(`${API_URL}/${id}`)

    if (loading) {
        return <Loading />
      }
      
    if(error) {
       return <Error />
    }


    return(
        <View style={styles.container}>
            <View style={styles.body_container}>
                <Image source={{uri: data.image}} style={styles.image}/>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price} $</Text>
            </View>
        </View>
    )
}

export default Details