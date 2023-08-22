import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native';

function Loading() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return visible ? (
        <LottieView style={{ flex: 1 }} source={require('../../assets/loading.json')} autoPlay />
    ) : null;
}

export default Loading;
