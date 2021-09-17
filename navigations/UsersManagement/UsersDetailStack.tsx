import {Drawer} from "../constants/navigation";
import {USER_DETAILS_SCREEN} from "../../constants";
import {UserDetailScreen} from "../../components/Admin/ManageUser";
import React from "react";
import {NavigationProp, Route} from "@react-navigation/native";

type IProps = {
    route: Route<"User Details", object>;
    navigation: NavigationProp<any>;
};

export const UserDetailStack: React.FC<IProps> = (props: IProps) => {
    return (
        <Drawer.Navigator initialRouteName={USER_DETAILS_SCREEN}
                          screenOptions={{headerShown: false}}>

        </Drawer.Navigator>
    );
};
