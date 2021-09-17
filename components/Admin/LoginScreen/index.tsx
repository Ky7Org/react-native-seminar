import React, {useState} from 'react';
import {AsyncStorage, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Formik} from 'formik';
import styles from "./styles";
import {users} from "../../../constants";


export const LogInScreen = () => {
    const [isError, setIsError] = useState<boolean>(false)

    const checkLogin = ({email, password}) => {
        const loginUser = users.find(user =>
            user.username === email
        )
        if (typeof loginUser === 'undefined') {
            setIsError(true)
        } else if (loginUser.password === password) {
            let _storeUser = async () => {
                try {
                    await AsyncStorage.setItem('user', JSON.stringify(loginUser))
                } catch (error) {
                    console.log(error)
                }
            }
            _storeUser()
        } else {
            setIsError(true)
        }
    }

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => checkLogin(values)}
        >
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.headerContainer}>
                            Sign In
                        </Text>
                    </View>
                    <View style={styles.containerForm}>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder={'E-mail'}
                            placeholderTextColor={'#ffffff'}
                            style={styles.input}
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
                        <View>
                            <Text style={styles.textError}>
                                {isError ? 'Your Email or Password is invalid!' : ' '}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.textInButton}>
                                SIGN IN
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.createContainer}>
                        <Text style={styles.textQuestion}><Text>Don't have Account?</Text><Text
                            style={styles.textCreate}> Create Account</Text></Text>
                    </View>
                </View>
            )}
        </Formik>
    )
}


export default LogInScreen