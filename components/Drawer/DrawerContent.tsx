import React from 'react';
import {View} from 'react-native';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useNavigation} from "@react-navigation/native";
import {styles} from "./DrawerContant.css";
import {SignInUser} from "../../models/signed-in-user.model";
import {HeaderDrawerSection} from "./HeaderDrawerContent";
import {BodyDrawerSection} from "./BodyDrawerContent";
import {FooterDrawerSection} from "./FooterDrawerContent";

type IProps = {
    signedInUser: SignInUser;
    drawerContentComponentProps: DrawerContentComponentProps
};

export const DrawerContent: React.FC<any> = (props: any) => {
    const {
        signedInUser,
        drawerContentComponentProps,
    } = props;

    const navigation = useNavigation();

        return (
            <View style={styles.container}>
                <HeaderDrawerSection signedInUser={signedInUser}/>
                <DrawerContentScrollView {...drawerContentComponentProps}>
                    <BodyDrawerSection navigation={navigation}/>
                </DrawerContentScrollView>
                <FooterDrawerSection />
            </View>
        );
};


