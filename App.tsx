import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import 'react-native-gesture-handler';
import {User} from "./models/users.model";
import {AppStack} from './navigations';
import { ModalPortal } from 'react-native-modals';

import {
    MOCK_USERS,
} from "./constants";
/*
*             <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
           drawerContent={props => <DrawerContent {...props}/>}
            >
                <Drawer.Screen name={HOME_SCREEN} component={HomeStack}/>
                <Drawer.Screen name={USER_DETAILS_SCREEN} component={UserDetailStack}/>
                <Drawer.Screen name={CREATE_ACCOUNT_SCREEN} component={CreateAccountStack}/>
                <Drawer.Screen name={USER_LIST_SCREEN} component={UserListStack}/>
            </Drawer.Navigator>
* */
export default function App() {
    const [users, setUsers] = useState<User[]>(MOCK_USERS);

    return (
        <NavigationContainer>
            <AppStack users={users} />
            <ModalPortal/>
        </NavigationContainer>
    );
}
