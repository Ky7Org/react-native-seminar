import React, {useContext, useState} from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {Formik} from 'formik';
import styles from "./styles";
import {User} from "../../../models/users.model";
import {SOLID_WHITE_COLOR, USER_LIST_SCREEN} from "../../../constants";
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

type IProps = {
  users: User[],
};

const LoginScreen: React.FC<IProps> = (props: IProps) => {

    const {
        users,
    } = props;

    const [isError, setIsError] = useState<boolean>(false);

    const user = useContext<any>(AuthContext);
    const navigation = useNavigation<any>();

    return (
        <Formik initialValues={{email: '', password: ''}}
            onSubmit={values => {
                checkLogin(values).then(() => {
                    setIsError(false);
                    user.user = {...users.filter(u => u.username === values.email)[0]};
                    navigation.navigate(USER_LIST_SCREEN);
                }).catch(() => setIsError(true));
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.headerContainer}>{LOGIN_CAMEL_CASE_TEXT}</Text>
                    </View>
                    <View style={styles.containerForm}>
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
                        <TouchableOpacity style={styles.signInButton} onPress={() => handleSubmit()}>
                            <Text style={styles.textSignInButton}>{LOGIN_TEXT}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.textDontHaveAccount}>{DONT_HAVE_ACCOUNT_TEXT}</Text>
                        <Text style={styles.textCreateAccount}>{CREATE_ACCOUNT_TEXT}</Text>
                    </View>
                </View>
            )}
        </Formik>
    )
};

export default LoginScreen;
