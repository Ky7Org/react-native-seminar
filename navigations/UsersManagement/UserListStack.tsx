import React from "react";
import { Stack } from "../constants/navigation";
import {USER_LIST_SCREEN} from "../../constants";
import {UserListScreen} from "../../components/Admin/ManageUser/UserListScreen";

type IProps = {

};

export const UserListStack: React.FC<IProps> = (props: IProps) => {
    return (
            <Stack.Navigator
                initialRouteName={USER_LIST_SCREEN}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name={USER_LIST_SCREEN}
                    component={UserListScreen}
                    options={{
                        title: 'User list'
                    }}
                />
            </Stack.Navigator>
        );
};
