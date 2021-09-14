import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {Alert, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {DELETE_DETAILS_SCREEN, HOME_SCREEN, USER_DETAILS_SCREEN} from "../../../../constants";
import tailwind from "tailwind-rn";
import {useController, useForm} from "react-hook-form";

export default function CreateUserScreen({navigation}) {
    const {control, handleSubmit} = useForm();

    const onSubmit = (data) => {
        // Alert.alert(JSON.stringify(data))
        console.log(data.email)
    }

    const Input = ({name, control}) => {
        const {field} = useController({
            control,
            defaultValue: '',
            name,
        })

        return (
            <TextInput
                value={field.value}
                onChangeText={field.onChange}
                style={tailwind('rounded-full w-96 h-16 bg-white mt-8 mr-8 ml-3 border-2 border-green-400')}/>
        )
    }

    return (
        <ScrollView bounces={false} style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={tailwind('font-bold text-xl mt-8 ml-3 text-white')}>Create an account</Text>
                <TextInput
                    placeholder="Email"
                    style={tailwind('rounded-full w-96 h-16 bg-white mt-8 mr-8 ml-3 border-2 border-green-400')}/>
                <TextInput
                    placeholder="Password"
                    style={tailwind('rounded-full w-96 h-16 bg-white mt-8 mr-8 ml-3 border-2 border-green-400')}
                    secureTextEntry={true}
                />
                <TextInput
                    placeholder="Re-Password"
                    style={tailwind('rounded-full w-96 h-16 bg-white mt-8 mr-8 ml-3 border-2 border-green-400')}
                    secureTextEntry={true}
                />

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
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonCreate: {
        ...tailwind('rounded-full flex items-center justify-center mx-6 my-8'),
        backgroundColor: '#07FF8A',
        width: 362,
        height: 69,
        justifyContent: "center",
    },
    scrollView: {
        backgroundColor: '#002333'
    }
});
