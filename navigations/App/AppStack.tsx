import {DELETE_DETAILS_SCREEN, HOME_SCREEN, USER_DETAILS_SCREEN} from "../../constants";
import React from "react";
import { Stack } from "../constants/navigation";
import {
    HomeStack,
    UserDetailStack,
} from '../index';
import {User} from "../../models/users.model";
import {
    DeleteUserScreen,
} from "../../components/Admin/ManageUser";

type IProps = {
  users: User[],
};

export const AppStack = (props: IProps) => {

    const {
        users,
    } = props;

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={HOME_SCREEN}>
            <Stack.Screen name={HOME_SCREEN}>
                {props => <HomeStack {...props} users={users} />}
            </Stack.Screen>
            <Stack.Screen name={USER_DETAILS_SCREEN}>
                {props => <UserDetailStack {...props} />}
            </Stack.Screen>
            <Stack.Screen name={DELETE_DETAILS_SCREEN}>
                {props => <DeleteUserScreen {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};
