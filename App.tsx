import React, {useState} from 'react';
import {NavigationContainer} from "@react-navigation/native"
import 'react-native-gesture-handler';
import {User} from "./models/users.model";
import { ModalPortal } from 'react-native-modals';

import {
    MOCK_USERS,
} from "./constants";
import {GlobalDrawer} from "./navigations";

export default function App() {
    const [users, setUsers] = useState<User[]>(MOCK_USERS);

    return (
        <NavigationContainer>
            <GlobalDrawer users={users} />
            <ModalPortal/>
        </NavigationContainer>
    );
}
