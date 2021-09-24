import React, {useContext, useState} from 'react';
import {
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {styles} from './styles/index.css';
import {useNavigation} from "@react-navigation/native";
import {
    ALREADY_HAVE_ACCOUNT,
    AND,
    BY_CREATING_ACCOUNT,
    CREATE_ACCOUNT,
    CREATE_ACCOUNT_HEADER_TEXT,
    EMAIL_PLACEHOLDER,
    PASSWORD_PLACEHOLDER,
    PRIVACY_POLICY,
    REPASSWORD_PLACEHOLDER,
    SIGN_IN,
    TERMS_OF_USE
} from "./constants/constant";
import {
    SOLID_WHITE_COLOR,
    SPRING_GREEN_COLOR,
} from '../../../constants';
import {User} from "../../../models/users.model";
import {UsersContext} from "../../../utils/users.context";
import {Formik} from 'formik';
import {EMAIL_VAR, PASSWORD_VAR, RE_PASSWORD_VAR} from "../LoginScreen/constants/constant";
import tailwind from "tailwind-rn";

type IProps = {};

export const RegisterUserScreen: React.VFC<IProps> = (props: IProps) => {

    const users = useContext<User[]>(UsersContext);
    const navigation = useNavigation();
    const [isError, setIsError] = useState<boolean>(false);
    const [isPasswordNotMatched, setPasswordNotMatch] = useState<boolean>(false);
    const [isUserExisted, setUserExisted] = useState<boolean>(false);

    const initialValues = {
        email: '',
        password: '',
        rePassword: '',
    };

    const checkUserExisted = ({username, email}) => {
        if (users.filter(u => ((u.username === email) || (u.email === email)))[0]) {
            setUserExisted(true);
            setPasswordNotMatch(false);
            return false;
        }
        return true;
    };

    const checkPasswordMatches = ({password, rePassword}) => {
        if (password !== rePassword) {
            setPasswordNotMatch(true);
            setUserExisted(false);
            return false;
        }
        return true;
    };

    const handleSubmit = (values) => {
        if (!checkUserExisted(values) || !checkPasswordMatches(values)) {
            return;
        }

        users.push({
            username: values.email,
            email: values.email,
            password: values.password,
            fullname: values.email,
            role: 'User',
            cv: 'Lorem ipsum dolor sit amet',
            phone: '0123456789',
            height: 170,
            address: 'Vietnam',
            birthDate: 7000000,
        });
        navigation.goBack();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <ScrollView bounces={false} style={styles.baseContainer}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>{CREATE_ACCOUNT_HEADER_TEXT}</Text>
                        </View>
                        <View style={styles.body}>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={handleChange(EMAIL_VAR)}
                                onBlur={handleBlur(EMAIL_VAR)}
                                placeholder={EMAIL_PLACEHOLDER}
                                style={styles.input}
                                value={values.email}
                                placeholderTextColor={SOLID_WHITE_COLOR}
                            />
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={handleChange(PASSWORD_VAR)}
                                onBlur={handleBlur(PASSWORD_VAR)}
                                placeholder={PASSWORD_PLACEHOLDER}
                                style={styles.input}
                                value={values.password}
                                secureTextEntry={true}
                                placeholderTextColor={SOLID_WHITE_COLOR}
                            />
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={handleChange(RE_PASSWORD_VAR)}
                                onBlur={handleBlur(RE_PASSWORD_VAR)}
                                placeholder={REPASSWORD_PLACEHOLDER}
                                value={values.rePassword}
                                style={styles.input}
                                secureTextEntry={true}
                                placeholderTextColor={SOLID_WHITE_COLOR}
                            />
                            <View style={tailwind('mt-4')}>
                                {isUserExisted ? <Text style={styles.textError}>The e-mail is already taken!</Text> : <></>}
                                {isPasswordNotMatched ? <Text style={styles.textError}>The password is not matched</Text> : <></>}
                            </View>
                        </View>
                        <View style={styles.footer}>
                            <View style={styles.textFooterAlreadyHaveAccount}>
                                <Text style={styles.textAlreadyHaveAccount}>{ALREADY_HAVE_ACCOUNT}</Text>
                                <Text style={styles.textHaveAccountSignIn}
                                      onPress={() => navigation.goBack()}>{SIGN_IN}</Text>
                            </View>
                            <View style={styles.buttonCreateAccount}>
                                <TouchableOpacity style={styles.buttonCreate} onPress={() => handleSubmit()}>
                                    <Text style={styles.textButtonAdmin}>{CREATE_ACCOUNT}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.footerText}>
                                <Text style={styles.textTermsOfUseFooter}>
                                    {BY_CREATING_ACCOUNT}
                                    <Text style={{color: SPRING_GREEN_COLOR}}
                                          onPress={() => Alert.alert(TERMS_OF_USE)}>{TERMS_OF_USE}</Text>
                                    <Text style={styles.textTermsOfUseFooter}>{AND}</Text>
                                    <Text style={{color: SPRING_GREEN_COLOR}}
                                          onPress={() => Alert.alert(PRIVACY_POLICY)}>{PRIVACY_POLICY}</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            )}
        </Formik>
    );
}
