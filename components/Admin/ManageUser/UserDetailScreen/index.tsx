import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Image, ScrollView, Text, View} from "react-native";
import styles from "./styles/index.css";
import tailwind from "tailwind-rn";
import {BUTTON_UPDATE_PROFILE_TITLE} from "./constants";
import {UPDATE_DETAILS_SCREEN} from "../../../../constants";


export default function Index({navigation, routes}){
        return (
            <ScrollView bounces={false} style={tailwind('flex')}>
                <View style={tailwind('items-center overflow-hidden bg-black')}>
                    <View style={tailwind('border-8 border-transparent')}>
                        <Image source={require('../../../../assets/miku_profile.jpg')}
                               style={tailwind('rounded-full w-24 h-24')}
                        >
                        </Image>
                    </View>
                </View>
                <View style={tailwind('py-5 text-center')}>
                    <Text style={tailwind('text-2l font-bold text-gray-800')}>
                        Username:
                    </Text>
                    <Text style={tailwind('text-2l font-bold text-gray-800')}>
                        Fullname:
                    </Text>
                    <Text style={tailwind('text-2l font-bold text-gray-800')}>
                        Email:
                    </Text>
                    <Text style={tailwind('text-2l font-bold text-gray-800')}>
                        Phone:
                    </Text>
                    <Text style={tailwind('text-2l font-bold text-gray-800')}>
                        Role:
                    </Text>
                    <Button title={BUTTON_UPDATE_PROFILE_TITLE} onPress={() => navigation.push(UPDATE_DETAILS_SCREEN,
                        {username: "sondeptrai"}
                    )} />
                </View>
            </ScrollView>
        );
}
