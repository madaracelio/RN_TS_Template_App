import { Animated, Easing } from "react-native";

export const animRotation = (duree: number, direction: string) => {
    let rotateValueHolder = new Animated.Value(0);
    
    const setDirection = () => {
        if(direction == "droite") return ['0deg', '360deg']
        else if(direction == "gauche") return ['0deg', '-360deg']
        else return ['0deg', '360deg']
    }

    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: duree,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => startImageRotateFunction());
    };

    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: setDirection(),
    })

    startImageRotateFunction()
    return rotateData
}