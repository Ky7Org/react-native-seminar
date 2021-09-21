import React from "react";
import {Stack} from "./constants/navigation";
import {UPDATE_USER_SCREEN, USER_DETAILS_SCREEN} from "../constants";
import {UpdateUserScreen, UserDetailScreen} from "../components/Admin/ManageUser";

export const UserDetailStack: React.VFC = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={USER_DETAILS_SCREEN} component={UserDetailScreen}/>
            <Stack.Screen name={UPDATE_USER_SCREEN} component={UpdateUserScreen} />
        </Stack.Navigator>
    );
}
