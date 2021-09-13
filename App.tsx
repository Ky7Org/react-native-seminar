import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import Home from "./components/HomeScreen";
import Detail from "./components/DetailScreen";
import {DETAILS_SCREEN, HOME_SCREEN, USER_DETAILS_SCREEN} from "./constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UserDetail from "./components/Admin/ManageUser/UserDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import UserDetailScreen from "./components/Admin/ManageUser/UserDetailScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Drawer.Screen
                name={HOME_SCREEN}
                component={Home}
                options={{
                    title: 'Trang chủ'
                }}
            />
            <Drawer.Screen
                name={DETAILS_SCREEN}
                component={Detail}/>
            <Drawer.Screen
                name={USER_DETAILS_SCREEN}
                component={UserDetail}
                options={{
                    title: 'User details'
                }}
            />
        </Drawer.Navigator>
    );
};
const UserDetailStack = () => {return (
    <Drawer.Navigator
        initialRouteName={USER_DETAILS_SCREEN}
        screenOptions={{
            headerShown: false
        }}
    >
        <Drawer.Screen
            name={USER_DETAILS_SCREEN}
            component={UserDetailScreen}
            options={{
                title: 'User details'
            }}
        />
    </Drawer.Navigator>)
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name={HOME_SCREEN} component={HomeStack}></Stack.Screen>
                <Stack.Screen name={USER_DETAILS_SCREEN} component={UserDetailStack}></Stack.Screen>
            </Stack.Navigator>
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
