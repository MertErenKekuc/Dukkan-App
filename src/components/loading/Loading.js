import React from "react";
import LottieView from "lottie-react-native";
import { View, Text, Image } from "react-native";

function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView style={{ width: 200, height: 400 }} source={require('../../assets/loading.json')} autoPlay />
        </View>
    );
}


export default Loading