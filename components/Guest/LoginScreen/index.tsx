import React, {useContext, useState} from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {Formik} from 'formik';
import indexCss from "./styles/index.css";
import {User} from "../../../models/users.model";
import {CREATE_ACCOUNT_SCREEN, SOLID_WHITE_COLOR, USER_LIST_SCREEN} from "../../../constants";
import {
    CREATE_ACCOUNT_TEXT,
    DONT_HAVE_ACCOUNT_TEXT,
    EMAIL_TEXT,
    EMAIL_VAR, INVALID_CREDENTIAL_TEXT,
    IS_PASSWORD_SECURED, LOGIN_CAMEL_CASE_TEXT,
    LOGIN_TEXT,
    PASSWORD_TEXT, PASSWORD_VAR
} from "./constants/constant";
import {checkLogin} from "../../../services/users.service";
import { AuthContext } from '../../../utils/auth.context';
import {useNavigation} from "@react-navigation/native";
import {UsersContext} from "../../../utils/users.context";

type IProps = {
};

const LoginScreen: React.FC<IProps> = (props: IProps) => {
    const users = useContext(UsersContext);
    const authContext = useContext<any>(AuthContext);
    const navigation = useNavigation<any>();

    const [isError, setIsError] = useState<boolean>(false);

    return (
        <Formik initialValues={{email: '', password: ''}}
            onSubmit={values => {
                checkLogin(values).then(() => {
                    setIsError(false);
                    authContext.setAuth({...users.filter(u => u.username === values.email)[0]});
                }).catch(() => setIsError(true));
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <View style={indexCss.container}>
                    <View>
                        <Text style={indexCss.headerContainer}>{LOGIN_CAMEL_CASE_TEXT}</Text>
                    </View>
                    <View style={indexCss.containerForm}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange(EMAIL_VAR)}
                            onBlur={handleBlur(EMAIL_VAR)}
                            value={values.email}
                            placeholder={EMAIL_TEXT}
                            placeholderTextColor={SOLID_WHITE_COLOR}
                            style={indexCss.input}
                        />
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange(PASSWORD_VAR)}
                            onBlur={handleBlur(PASSWORD_VAR)}
                            value={values.password}
                            placeholder={PASSWORD_TEXT}
                            placeholderTextColor={SOLID_WHITE_COLOR}
                            style={indexCss.input}
                            secureTextEntry={IS_PASSWORD_SECURED}
                        />
                        <View>
                            <Text style={indexCss.textError}>{isError ? INVALID_CREDENTIAL_TEXT : ' '}</Text>
                        </View>
                        <TouchableOpacity style={indexCss.signInButton} onPress={() => handleSubmit()}>
                            <Text style={indexCss.textSignInButton}>{LOGIN_TEXT}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={indexCss.footerContainer}>
                        <Text style={indexCss.textDontHaveAccount}>{DONT_HAVE_ACCOUNT_TEXT}</Text>
                        <Text
                            onPress={() => navigation.push(CREATE_ACCOUNT_SCREEN)}
                            style={indexCss.textCreateAccount}>
                            {CREATE_ACCOUNT_TEXT}
                        </Text>
                    </View>
                </View>
            )}
        </Formik>
    )
};

export default LoginScreen;
