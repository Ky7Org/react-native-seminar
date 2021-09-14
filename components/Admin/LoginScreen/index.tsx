import React from 'react';
import {Button, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import styles from "./styles";

export const LogInScreen = (props) => {
    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}
        >
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <SafeAreaView style={styles.container}>
                    <View>
                        <Text style={styles.header}>
                            Sign In
                        </Text>
                    </View>
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder={'E-mail'}
                        placeholderTextColor={'#ffffff'}
                        style={[styles.input, styles.inputEmail]}
                    />
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder={'Password'}
                        placeholderTextColor={'#ffffff'}
                        style={[styles.input, styles.inputPassword]}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.textInButton}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textQuestion}><Text>Don't have Account?</Text><Text
                            style={styles.textCreate}>    Create Account</Text></Text>
                    </View>
                </SafeAreaView>
            )}
        </Formik>
    )
}


export default LogInScreen