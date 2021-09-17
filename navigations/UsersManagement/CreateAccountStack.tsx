import React from "react";
import {Stack} from "../constants/navigation";
import {CREATE_ACCOUNT_SCREEN} from "../../constants";
import {CreateUserScreen} from "../../components/Admin/ManageUser";

type IProps = {};

export const CreateAccountStack: React.FC<IProps> = (props: IProps) => {
    return (
        <Stack.Navigator
            initialRouteName={CREATE_ACCOUNT_SCREEN}
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen
                name={CREATE_ACCOUNT_SCREEN}
                component={CreateUserScreen}
                options={{
                    title: 'Create user'
                }}
            />
        </Stack.Navigator>
    );
}
