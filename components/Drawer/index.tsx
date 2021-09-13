import React, {Component} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HOME_SCREEN, USER_DETAILS_SCREEN} from "../../constants";
import Home from "../HomeScreen";
import UserDetail from "../Admin/ManageUser/UserDetailScreen";

const Drawer = createDrawerNavigator();
export default function MikuDrawer(){
        return (
            <Drawer.Navigator>
                <Drawer.Screen name={HOME_SCREEN} component={Home}></Drawer.Screen>
                <Drawer.Screen name={USER_DETAILS_SCREEN} component={UserDetail}></Drawer.Screen>
            </Drawer.Navigator>
        );
}