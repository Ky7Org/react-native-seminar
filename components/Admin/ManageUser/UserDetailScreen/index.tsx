import React from 'react';
import {Button, Image, ScrollView, View, Text} from "react-native";
import tailwind from "tailwind-rn";
import {BUTTON_ADMIN} from "./constants";
import {CalendarIcon, ChartBarIcon, DeviceMobileIcon, LocationMarkerIcon, MailIcon} from "react-native-heroicons/solid";


export default function UserDetailScreen({navigation, routes}){
        return (
            <ScrollView bounces={false} style={tailwind('flex mt-10 bg-white')}>
                <View style={tailwind('flex justify-center items-center divide-y')}>
                    <View style={tailwind('rounded-full bg-gray-50 flex flex-row justify-evenly')}>
                        <View style={tailwind('rounded-sm w-16')}>
                            <Button onPress={() => {}} title={BUTTON_ADMIN}/>
                        </View>

                        <View style={tailwind('rounded-sm w-16' )}>
                            <Button onPress={() => {}} title={BUTTON_ADMIN}/>
                        </View>
                    </View>
                    <View style={tailwind('font-bold')}>
                        <Text style={tailwind('font-bold text-2xl')}>Tien</Text>
                    </View>
                    <View style={tailwind('border-8 border-transparent')}>
                        <Image style={tailwind('rounded-full w-20 h-20')} source={require("../../../../assets/miku_profile.jpg")}></Image>
                    </View>

                    <View style={tailwind('flex flex-row flex-wrap w-full p-2 border-gray-900')}>
                        <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                            <DeviceMobileIcon color="#07FF8A" size={31} style={tailwind('mr-2')}/>
                            <Text>123</Text>
                        </View>
                        <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                            <MailIcon color="#07FF8A" size={31} style={tailwind('mr-2')}/>
                            <Text>123</Text>
                        </View>
                        <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                            <LocationMarkerIcon color="#07FF8A" size={31} style={tailwind('mr-2')}/>
                            <Text>123</Text>
                        </View>
                    </View>


                    <View style={tailwind('flex flex-row flex-wrap w-full p-2 border-gray-900')}>
                        <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                            <CalendarIcon color="#07FF8A" size={31} style={tailwind('mr-2')}/>
                            <Text>123</Text>
                        </View>
                        <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                            <ChartBarIcon color="#07FF8A" size={31} style={tailwind('mr-2')}/>
                            <Text>123</Text>
                        </View>
                        <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                            <LocationMarkerIcon color="#07FF8A" size={31} style={tailwind('mr-2')}/>
                            <Text>123</Text>
                        </View>
                    </View>
                </View>



                {/*<View style={tailwind('items-center overflow-hidden bg-white')}>
                    <Image source={require('../../../../assets/miku_profile.jpg')}
                            style={tailwind('rounded-full h-24 w-24 flex items-center justify-center')}
                    >
                    </Image>

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
                </View>*/}
            </ScrollView>
        );
}

