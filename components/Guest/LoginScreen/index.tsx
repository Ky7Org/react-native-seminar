import React, {useContext, useState} from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {Formik} from 'formik';
import styles from "./styles/index.css";
import {User} from "../../../models/users.model";
import {
    CREATE_ACCOUNT_SCREEN,
    MOCK_USERS,
    SOLID_WHITE_COLOR,
} from "../../../constants";
import {
    CREATE_ACCOUNT_TEXT,
    DONT_HAVE_ACCOUNT_TEXT,
    EMAIL_TEXT,
    EMAIL_VAR,
    INVALID_CREDENTIAL_TEXT,
    IS_PASSWORD_SECURED,
    LOGIN_CAMEL_CASE_TEXT,
    LOGIN_TEXT,
    PASSWORD_TEXT, PASSWORD_VAR
} from "./constants/constant";
import { AuthContext } from '../../../utils/auth.context';
import {useNavigation} from "@react-navigation/native";
import {UsersContext} from "../../../utils/users.context";
import {storeUser} from "../../../utils/users.storage";

type IProps = {
};

const LoginScreen: React.VFC<IProps> = (props: IProps) => {
    const users = useContext(UsersContext);
    const {setAuth} = useContext(AuthContext);
    const navigation = useNavigation<any>();

    const [isError, setIsError] = useState<boolean>(false);

    const checkLogin = async ({email, password}: User) => {
        const loginUser: User = MOCK_USERS.find(user => user.username === email) ?? MOCK_USERS[0];
        if (loginUser.password === password) {
            await storeUser(loginUser);
        } else {
            throw new Error();
        }
    };

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values) => {
        checkLogin(values).then(() => {
            setIsError(false);
            setAuth({...users.filter(u => u.username === values.email)[0]});
        }).catch(() => setIsError(true));
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>{LOGIN_CAMEL_CASE_TEXT}</Text>
                    </View>
                    <View style={styles.body}>
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange(EMAIL_VAR)}
                            onBlur={handleBlur(EMAIL_VAR)}
                            value={values.email}
                            placeholder={EMAIL_TEXT}
                            placeholderTextColor={SOLID_WHITE_COLOR}
                            style={styles.input}
                        />
                        <TextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={handleChange(PASSWORD_VAR)}
                            onBlur={handleBlur(PASSWORD_VAR)}
                            value={values.password}
                            placeholder={PASSWORD_TEXT}
                            placeholderTextColor={SOLID_WHITE_COLOR}
                            style={styles.input}
                            secureTextEntry={IS_PASSWORD_SECURED}
                        />
                        <View>
                            <Text style={styles.textError}>{isError ? INVALID_CREDENTIAL_TEXT : ' '}</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonSignIn} onPress={() => handleSubmit()}>
                            <Text style={styles.textSignInButton}>{LOGIN_TEXT}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.textDontHaveAccount}>{DONT_HAVE_ACCOUNT_TEXT}</Text>
                        <Text
                            onPress={() => navigation.push(CREATE_ACCOUNT_SCREEN)}
                            style={styles.textCreateAccount}>
                            {CREATE_ACCOUNT_TEXT}
                        </Text>
                    </View>
                </View>
            )}
        </Formik>
    )
};

export default LoginScreen;
