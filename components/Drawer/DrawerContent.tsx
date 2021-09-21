import React, {useContext} from 'react';
import {View} from 'react-native';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useNavigation} from "@react-navigation/native";
import {styles} from "./DrawerContant.css";
import {HeaderDrawerSection} from "./HeaderDrawerContent";
import {BodyDrawerSection} from "./BodyDrawerContent";
import {FooterDrawerSection} from "./FooterDrawerContent";
import {UsersContext} from "../../utils/users.context";

type IProps = {
    drawerContentComponentProps: DrawerContentComponentProps;
};

export const DrawerContent: React.FC<any> = (props: any) => {
    const users = useContext(UsersContext);
    const {
        drawerContentComponentProps,
    } = props;

    const navigation = useNavigation();

        return (
            <View style={styles.container}>
                <HeaderDrawerSection/>
                <DrawerContentScrollView {...drawerContentComponentProps}>
                    <BodyDrawerSection navigation={navigation}/>
                </DrawerContentScrollView>
                <FooterDrawerSection />
            </View>
        );
};


