import {Drawer} from "../constants/navigation";
import {
    USER_DETAILS_SCREEN,
    USER_LIST_SCREEN,
} from "../../constants";
import React from "react";
import {DrawerContent} from "../../components/Drawer/DrawerContent";
import {UserDetailStack} from "../users-detail.stack";
import {UsersListStack} from "../users-list-stack";
type IProps = {
};

export const GlobalDrawer: React.FC<IProps> = (props: IProps) => {

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <DrawerContent {...props}/>}>
            <Drawer.Screen name={USER_LIST_SCREEN} component={UsersListStack} />
            <Drawer.Screen name={USER_DETAILS_SCREEN} component={UserDetailStack}/>
        </Drawer.Navigator>
    );
};
