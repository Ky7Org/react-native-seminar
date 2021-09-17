import {Drawer} from "../constants/navigation";
import {HOME_SCREEN, USER_DETAILS_SCREEN} from "../../constants";
import {Home} from "../../components/HomeScreen";
import {UserDetailScreen} from "../../components/Admin/ManageUser";
import React from "react";

const UsersManagementDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={HOME_SCREEN} component={Home} />
            <Drawer.Screen name={USER_DETAILS_SCREEN} component={UserDetailScreen} />
        </Drawer.Navigator>
    );
}
