import {User} from "../../models/users.model";
import {Drawer} from "../constants/navigation";
import {
    DETAILS_SCREEN,
    HOME_SCREEN,
    UPDATE_DETAILS_SCREEN,
    USER_DETAILS_SCREEN,
} from "../../constants";
import {Home} from "../../components/HomeScreen";
import React from "react";
import {
    EditAccountUserScreen,
    UserDetailScreen,
} from "../../components/Admin/ManageUser";
import {Detail} from "../../components/DetailScreen";

type IProps = {
    users: User[];
};

export const HomeStack: React.FC<IProps> = (props: IProps) => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen
                name={HOME_SCREEN}
                component={Home}
                options={{
                    title: 'Trang chủ'
                }}
            />
            <Drawer.Screen
                name={DETAILS_SCREEN}
                component={Detail}/>
            <Drawer.Screen
                name={USER_DETAILS_SCREEN}
                component={UserDetailScreen}
                options={{
                    title: 'User details'
                }}
            />
            <Drawer.Screen
                name={UPDATE_DETAILS_SCREEN}
                component={EditAccountUserScreen}
                options={{
                    title: 'Update user detail'
                }}
            />
        </Drawer.Navigator>
    );
};
