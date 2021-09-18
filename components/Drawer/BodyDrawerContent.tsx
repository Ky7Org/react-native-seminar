import React from "react";
import {Linking, View} from "react-native";
import {styles} from "./DrawerContant.css";
import {Drawer} from "react-native-paper";
import {DrawerItem} from "@react-navigation/drawer";
import {
    InformationCircleIconComp, InformationCircleIconCompText,
    LogInIconComp,
    LogInIconCompText,
    UserIconComp,
    UserIconCompText,
    UsersListIconComp, UsersListIconCompText
} from "./DrawerContent.icon";
import {USER_DETAILS_SCREEN, USER_LIST_SCREEN} from "../../constants";
import {aboutURL} from "./constants/constant";

type IBodyDrawerProps = {
    navigation: any;
};

export const BodyDrawerSection: React.FC<IBodyDrawerProps> = (props: IBodyDrawerProps) => {
    const {
        navigation,
    } = props;

    return <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
            <Drawer.Section style={styles.drawer}>
                <DrawerItem
                    icon={() => <LogInIconComp/>}
                    label={() => <LogInIconCompText/>}
                    onPress={() => {}}/>
            </Drawer.Section>
            <Drawer.Section>
                <DrawerItem
                    icon={() => <UserIconComp/>}
                    label={() => <UserIconCompText/>}
                    onPress={() => { navigation.navigate(USER_DETAILS_SCREEN) }}/>
            </Drawer.Section>
            <Drawer.Section>
                <DrawerItem
                    icon={() => <UsersListIconComp/>}
                    label={() => <UsersListIconCompText/>}
                    onPress={() => { navigation.navigate(USER_LIST_SCREEN) }}/>
            </Drawer.Section>
            <Drawer.Section>
                <DrawerItem
                    icon={() => <InformationCircleIconComp/>}
                    label={() => <InformationCircleIconCompText/>}
                    onPress={() => Linking.openURL(aboutURL)}
                />
            </Drawer.Section>
        </View>
    </View>;
}
