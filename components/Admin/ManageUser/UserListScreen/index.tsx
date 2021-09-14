import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {BACKGROUND_COLOR, TEXT_COLOR_WHITE, users} from "../../../../constants";
import tailwind from "tailwind-rn";
import {BUTTON_ADMIN, BUTTON_EDIT_PROFILE} from "../UserDetailScreen/constants";
import {CalendarIcon, ChartBarIcon, DeviceMobileIcon, LocationMarkerIcon, MailIcon} from "react-native-heroicons/solid";

export default function UserListScreen() {

    const renderUser = ({item}) => (
        <View style={tailwind('p-4')}>
            <View style={tailwind('flex rounded-lg bg-pink-500 p-8 flex-col')}>
                <View style={tailwind('flex-grow')}>
                    <Text style={tailwind('text-base text-white')}>
                        {item.username}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <ScrollView bounces={false} style={tailwind('flex bg-white')}>
            <View style={styles.bigCircle}></View>
            <View style={tailwind('flex items-center')}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.buttonAdmin}
                                      onPress={() => {}}>
                        <Text style={styles.buttonText}>{BUTTON_ADMIN}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchView}>
                    <TextInput
                        placeholder="Search..."
                        style={styles.searchField}
                        placeholderTextColor={'#000'}
                    />
                </View>
            </View>
            <FlatList
                data={users}
                keyExtractor={user => user.username}
                renderItem={renderUser}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bigCircle: {
        ...tailwind('rounded-full absolute w-full h-full'),
        backgroundColor: "#002333",
        width: 1046,
        height: 1090,
        top: -900,
        left: -300

    },
    headerContainer: {
        ...tailwind('flex flex-row justify-between w-full mt-6'),
    },
    buttonEdit: {
        ...tailwind('rounded-full flex items-center justify-center'),
        backgroundColor: '#07FF8A',
        width: 112,
        height: 30,
        marginRight: 22
    },
    buttonAdmin: {
        ...tailwind('rounded-full flex items-center justify-center'),
        borderWidth: 2,
        borderColor: '#07FF8A',
        width: 60,
        height: 30,
        marginLeft: 22,
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold'
    },
    searchField: {
        ...tailwind('rounded-full w-96 h-16 bg-white mt-6 mr-6 ml-6 border-2'),
        backgroundColor: TEXT_COLOR_WHITE,
        paddingLeft: 80,
        color: BACKGROUND_COLOR,
    },
    searchView: {

    }
})