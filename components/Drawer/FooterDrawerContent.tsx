import React, {useContext} from "react";
import {Drawer} from "react-native-paper";
import {styles} from "./DrawerContant.css";
import {DrawerItem} from "@react-navigation/drawer";
import {LogOutIconComp, LogOutIconCompText} from "./DrawerContent.icon";
import {AuthContext} from "../../utils/auth.context";

export const FooterDrawerSection: React.FC = () => {

    const {setAuth} = useContext(AuthContext);

    return ( <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Section>
            <DrawerItem
                icon={() => <LogOutIconComp/>}
                label={() => <LogOutIconCompText/>}
                onPress={() => setAuth(undefined)}/>
        </Drawer.Section>
    </Drawer.Section> );
};
