import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import 'react-native-gesture-handler';
import {ModalPortal} from 'react-native-modals';
import {GlobalDrawer} from "./navigations";
import {Stack} from "./navigations/constants/navigation";
import LoginScreen from "./components/Guest/LoginScreen";
import {RegisterUserScreen} from "./components/Guest/RegisterScreen";
import {AuthContext} from "./utils/auth.context";
import {UsersContext} from "./utils/users.context";
import {isUndefined} from "./utils/utils";
import {
    CREATE_ACCOUNT_SCREEN,
    GLOBAL_DRAWER,
    LOGIN_SCREEN,
    MOCK_USERS,
} from "./constants";

export default function App() {
    const [auth, setAuth] = useState();
    return (
        <UsersContext.Provider value={MOCK_USERS}>
            <AuthContext.Provider value={{auth, setAuth}}>
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        {isUndefined(auth)
                            ? <>
                                <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
                                <Stack.Screen name={CREATE_ACCOUNT_SCREEN} component={RegisterUserScreen} />
                            </>
                            : <Stack.Screen name={GLOBAL_DRAWER} component={GlobalDrawer} />
                        }
                    </Stack.Navigator>
                    <ModalPortal/>
                </NavigationContainer>
            </AuthContext.Provider>
        </UsersContext.Provider>
    );
}
