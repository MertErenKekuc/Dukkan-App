import React, { useState, useEffect } from 'react'
import LottieView from 'lottie-react-native';

function Error() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return visible ? (
        <LottieView style={{ flex: 1 }} source={require('../../assets/error.json')} autoPlay />
    ) : null;
}

export default Error