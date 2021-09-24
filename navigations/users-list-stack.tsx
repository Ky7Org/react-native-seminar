import React from "react";
import {Stack} from "./constants/navigation";
import {
    HOME_PAGE_USER_LIST_SCREEN,
    USER_DETAILS_SCREEN,
} from "../constants";
import {UserListScreen} from "../components/Admin/ManageUser/UserListScreen";
import {UserDetailScreen} from "../components/Admin/ManageUser";

export const UsersListStack: React.VFC = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={HOME_PAGE_USER_LIST_SCREEN} component={UserListScreen} />
            <Stack.Screen name={USER_DETAILS_SCREEN} component={UserDetailScreen} />
        </Stack.Navigator>
    )
}
