import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import 'react-native-gesture-handler';
import {User} from "./models/users.model";
import { ModalPortal } from 'react-native-modals';

import {
    MOCK_SIGNED_IN_USER,
    MOCK_USERS,
} from "./constants";
import {GlobalDrawer} from "./navigations";
import {SignInUser} from "./models/signed-in-user.model";
//                <Stack.Screen name={LOGIN_SCREEN} component={LogInScreen} />
export default function App() {
    const [users, setUsers] = useState<User[]>(MOCK_USERS);
    const [signedInUser, setSignedInUser] = useState<SignInUser>(MOCK_SIGNED_IN_USER);

    return (
        <NavigationContainer>
            <GlobalDrawer users={users} signedInUser={signedInUser} />
            <ModalPortal/>
        </NavigationContainer>
    );
}
