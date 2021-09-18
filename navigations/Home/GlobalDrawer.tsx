import {User} from "../../models/users.model";
import {Drawer} from "../constants/navigation";
import {
    CREATE_ACCOUNT_SCREEN,
    HOME_SCREEN,
    LOGIN_SCREEN,
    USER_DETAILS_SCREEN,
    USER_LIST_SCREEN,
} from "../../constants";
import React from "react";
import {
    UserDetailScreen,
} from "../../components/Admin/ManageUser";
import {DrawerContent} from "../../components/Drawer/DrawerContent";
import {UserListScreen} from "../../components/Admin/ManageUser/UserListScreen";
import {SignInUser} from "../../models/signed-in-user.model";
import LoginScreen from "../../components/Guest/LoginScreen";

type IProps = {
    users: User[];
    signedInUser: SignInUser;
};

export const GlobalDrawer: React.FC<IProps> = (props: IProps) => {
    const {
        users,
        signedInUser,
    } = props;

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={(props) => <DrawerContent {...props} signedInUser={signedInUser}/>}>
            <Drawer.Screen name={LOGIN_SCREEN}>
                {props => <LoginScreen {...props} users={users} /> }
            </Drawer.Screen>
            <Drawer.Screen name={USER_DETAILS_SCREEN} component={UserDetailScreen} />
            <Drawer.Screen name={USER_LIST_SCREEN}>
                {props => <UserListScreen {...props} users={users} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};
