import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./components/HomeScreen";
import Detail from "./components/DetailScreen";
import {DETAILS_SCREEN, HOME_SCREEN} from "./constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName={HOME_SCREEN}>
            <Stack.Screen
                name={HOME_SCREEN}
                component={Home}
                options={{
                title: 'Trang chủ',
                headerStyle: {
                    backgroundColor: '#0fefd3',
                },
            }}
            />
            <Stack.Screen
                name={DETAILS_SCREEN}
                component={Detail} />
        </Stack.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name={HOME_SCREEN} component={HomeStack}
              />
                <Tab.Screen name={DETAILS_SCREEN} component={Detail} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        'color': '#000',
    },
});
