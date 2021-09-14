import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import Home from "./components/HomeScreen";
import Detail from "./components/DetailScreen";
import {
    CREATE_ACCOUNT_SCREEN,
    DELETE_DETAILS_SCREEN,
    DEMO_SCREEN,
    DETAILS_SCREEN,
    HOME_SCREEN,
    UPDATE_DETAILS_SCREEN,
    USER_DETAILS_SCREEN
} from "./constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UserDetail from "./components/Admin/ManageUser/UserDetailScreen";
import UpdateUser from "./components/Admin/ManageUser/EditUserScreen";
import DeleteUser from "./components/Admin/ManageUser/DeleteUserScreen";
import CreateUser from "./components/Admin/ManageUser/CreateUserScreen";

import {createDrawerNavigator} from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={HOME_SCREEN}
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen
                name={HOME_SCREEN}
                component={Home}
                options={{
                    title: 'Trang chủ'
                }}
            />

            <Stack.Screen
                name={USER_DETAILS_SCREEN}
                component={UserDetail}
                options={{
                    title: 'User details'
                }}
            />
        </Stack.Navigator>
    );
};


const UserDetailStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={USER_DETAILS_SCREEN}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={USER_DETAILS_SCREEN}
                component={UserDetail}
                options={{
                    title: 'User details'
                }}
            />
            <Stack.Screen
                name={UPDATE_DETAILS_SCREEN}
                component={UpdateUser}
                options={{
                    title: 'Update user details'
                }}
            />
            <Stack.Screen
                name={DELETE_DETAILS_SCREEN}
                component={DeleteUser}
                options={{
                    title: 'Delete user'
                }}
            />
        </Stack.Navigator>
    );
}

const CreateAccountStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={CREATE_ACCOUNT_SCREEN}
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={CREATE_ACCOUNT_SCREEN}
                component={CreateUser}
                options={{
                    title: 'Create user'
                }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown: false
            }}>
                <Drawer.Screen name={HOME_SCREEN} component={HomeStack}/>
                <Drawer.Screen name={USER_DETAILS_SCREEN} component={UserDetailStack}/>
                <Drawer.Screen name={CREATE_ACCOUNT_SCREEN} component={CreateAccountStack}/>
            </Drawer.Navigator>
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
