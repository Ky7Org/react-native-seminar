import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Button,
    PixelRatio,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {
    BACKGROUND_COLOR,
    BUTTON_COLOR,
    DELETE_DETAILS_SCREEN,
    HOME_SCREEN, TEXT_COLOR_WHITE,
    USER_DETAILS_SCREEN
} from "../../../../constants";
import tailwind from "tailwind-rn";

export default function CreateUserScreen({navigation}) {

    return (
        <ScrollView bounces={false} style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={tailwind('font-bold text-xl mt-8 ml-3 text-white')}>Create an account</Text>
                </View>
                <View style={styles.body}>
                    <TextInput
                        placeholder="Email"
                        style={styles.textInput}
                        placeholderTextColor={'#fff'}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholderTextColor={'#fff'}
                    />
                    <TextInput
                        placeholder="Re-Password"
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholderTextColor={'#fff'}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={tailwind('mt-28 ml-8 text-white')}>
                        Already have an account ?
                        <Text style={{color: '#07FF8A'}}
                              onPress={() => Alert.alert("Sign in")}
                        >
                            Sign in
                        </Text>
                    </Text>
                    <TouchableOpacity style={styles.buttonCreate}
                                      onPress={() => Alert.alert("Create Account")}>
                        <Text style={styles.buttonText}>Create account</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={tailwind('my-8 mx-6 text-white text-xs items-center justify-center')}>
                        <Text>By clicking Create account, I agree that I have read and accepted the </Text>
                        <Text style={{color: '#07FF8A'}} onPress={() => Alert.alert("Term of use")}>
                            Terms of Use
                        </Text>
                        <Text> and </Text>
                        <Text style={{color: '#07FF8A'}} onPress={() => Alert.alert("Privacy Policy")}>
                            Privacy Policy.
                        </Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    textInput: {
        ...tailwind('rounded-full w-full h-16 bg-white mt-8 mr-8 ml-3 border-2 border-green-400'),
        backgroundColor: BACKGROUND_COLOR,
        paddingLeft: 30,
        color: TEXT_COLOR_WHITE,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        display: "flex",
        flexDirection: 'column',
        marginRight: 20
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonCreate: {
        ...tailwind('rounded-full w-full h-20 bg-white mt-8 ml-3 border-2 border-green-400'),
        backgroundColor: BUTTON_COLOR,
        justifyContent: "center",
    },
    scrollView: {
        backgroundColor: BACKGROUND_COLOR
    },
    header: {
        marginLeft: 20
    },
    body: {
        marginRight: 20,
        marginLeft: 20
    },
    footer: {
        marginRight: 10
    }
});
