import {User} from "../../models/users.model";
import {Drawer} from "../constants/navigation";
import {
    CREATE_ACCOUNT_SCREEN,
    DETAILS_SCREEN,
    HOME_SCREEN,
    UPDATE_DETAILS_SCREEN,
    USER_DETAILS_SCREEN, USER_LIST_SCREEN,
} from "../../constants";
import {Home} from "../../components/HomeScreen";
import React from "react";
import {
    CreateUserScreen,
    EditAccountUserScreen,
    UserDetailScreen,
} from "../../components/Admin/ManageUser";
import {Detail} from "../../components/DetailScreen";
import DrawerContent from "../../components/Drawer/DrawerContent";
import {UserDetailStack} from "../UsersManagement";
import {CreateAccountStack} from "../UsersManagement/CreateAccountStack";
import {UserListStack} from "../UsersManagement/UserListStack";
import {UserListScreen} from "../../components/Admin/ManageUser/UserListScreen";

type IProps = {
    users: User[];
};

export const GlobalDrawer: React.FC<IProps> = (props: IProps) => {
    const {
        users,
    } = props;

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name={HOME_SCREEN} component={Home} />
            <Drawer.Screen name={USER_DETAILS_SCREEN} component={UserDetailScreen} />
            <Drawer.Screen name={CREATE_ACCOUNT_SCREEN} component={CreateUserScreen} />
            <Drawer.Screen name={USER_LIST_SCREEN}>
                {props => <UserListScreen {...props} users={users} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};
