import React from "react";
import {Drawer} from "react-native-paper";
import {styles} from "./DrawerContant.css";
import {DrawerItem} from "@react-navigation/drawer";
import {LogOutIconComp, LogOutIconCompText} from "./DrawerContent.icon";

export const FooterDrawerSection: React.FC = () => {
    return ( <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Section>
            <DrawerItem
                icon={() => <LogOutIconComp/>}
                label={() => <LogOutIconCompText/>}
                onPress={() => {
                }}/>
        </Drawer.Section>
    </Drawer.Section> );
};
