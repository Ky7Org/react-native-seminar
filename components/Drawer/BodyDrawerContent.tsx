import React, {useContext} from "react";
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
import {AuthContext} from "../../utils/auth.context";

type IBodyDrawerProps = {
    navigation: any;
};

export const BodyDrawerSection: React.FC<IBodyDrawerProps> = (props: IBodyDrawerProps) => {
    const {
        navigation,
    } = props;

    const {auth} = useContext(AuthContext);

    return <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
            <Drawer.Section style={styles.drawer}>
                <DrawerItem
                    icon={() => <UserIconComp/>}
                    label={() => <UserIconCompText/>}
                    onPress={() => navigation.navigate(USER_DETAILS_SCREEN, {username: auth.username}) }/>
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
