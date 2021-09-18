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
import { AuthContext } from './utils/auth.context';

const user: User = {
    fullname: 'Hatsune Miku',
    birthDate: 1191085200000,
    height: 159,
    address: 'Sapporo, Japan',
    phone: '0356773***',
    email: 'miku.work@gmail.com',
    cv: `Hatsune Miku was the first Vocaloid developed by Crypton Future Media after they handled the release of the Yamaha vocal Meiko and Kaito. Miku was intended tobe the first of a series of Vocaloids called the "Character Vocal Series", which included Kagamine Rin/Len and Megurine Luka. Each had a particular concept and vocal direction. She was built using Yamaha's Vocaloid 2 technology, and later updated to newer engine versions. She was created by taking vocal samples from voice actress Saki Fujita at a controlled pitch and tone. Those samples all contain a single Japanese phonic that, when strung together, createsfull lyrics and phrases. The pitch of the samples was to be altered by the synthesizer engineand constructed into a keyboard-style instrument within the Vocaloid software.`,
};
export default function App() {
    const [users, setUsers] = useState<User[]>(MOCK_USERS);
    const [signedInUser, setSignedInUser] = useState<SignInUser>(MOCK_SIGNED_IN_USER);

    return (
        <NavigationContainer>
            <AuthContext.Provider value={{user}}>
                <GlobalDrawer users={users} signedInUser={signedInUser} />
            </AuthContext.Provider>
            <ModalPortal/>
        </NavigationContainer>
    );
}
