import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, ScrollView, Text} from "react-native";
import {DELETE_USER_BUTTON} from "./constants";
import {DELETE_DETAILS_SCREEN} from "../../../../constants";

export default function EditUser({route, navigation}){

    const {username} = route.params;
        return (
            <ScrollView>
                <Text>Edit user details with username: {username}</Text>
                <Button title={DELETE_USER_BUTTON} onPress={() => navigation.push(DELETE_DETAILS_SCREEN, {username: {username}})} />
            </ScrollView>
        );
}
