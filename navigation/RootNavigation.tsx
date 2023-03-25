import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar"
import React from "react"
import HomeScreen from "../screens/HomeScreen";


const RootStack = createStackNavigator()

const MainNav = () => {
    return (
        <NavigationContainer>
            <StatusBar style='auto' />
            <RootStack.Navigator initialRouteName="Homecreen">
                <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false, headerTintColor: "white", headerStyle: {backgroundColor: "black"}, headerBackTitleVisible: false}}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default MainNav