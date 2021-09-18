import {User} from "../../models/users.model";
import {Drawer} from "../constants/navigation";
import {
    CREATE_ACCOUNT_SCREEN,
    HOME_SCREEN,
    USER_DETAILS_SCREEN, USER_LIST_SCREEN,
} from "../../constants";
import {Home} from "../../components/HomeScreen";
import React from "react";
import {
    CreateUserScreen,
    UserDetailScreen,
} from "../../components/Admin/ManageUser";
import {DrawerContent} from "../../components/Drawer/DrawerContent";
import {UserListScreen} from "../../components/Admin/ManageUser/UserListScreen";
import {SignInUser} from "../../models/signed-in-user.model";

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
            <Drawer.Screen name={HOME_SCREEN} component={Home} />
            <Drawer.Screen name={USER_DETAILS_SCREEN} component={UserDetailScreen} />
            <Drawer.Screen name={CREATE_ACCOUNT_SCREEN} component={CreateUserScreen} />
            <Drawer.Screen name={USER_LIST_SCREEN}>
                {props => <UserListScreen {...props} users={users} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};
