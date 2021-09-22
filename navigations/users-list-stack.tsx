import React from "react";
import {Stack} from "./constants/navigation";
import {USER_DETAILS_SCREEN, USER_LIST_SCREEN} from "../constants";
import {UserListScreen} from "../components/Admin/ManageUser/UserListScreen";
import {UserDetailScreen} from "../components/Admin/ManageUser";

export const UsersListStack: React.VFC = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={USER_LIST_SCREEN} component={UserListScreen} />
            <Stack.Screen name={USER_DETAILS_SCREEN} component={UserDetailScreen} />
        </Stack.Navigator>
    )
}
