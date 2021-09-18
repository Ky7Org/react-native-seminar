import React from 'react';
import {
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import tailwind from "tailwind-rn";
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

type IProps = {

};

export const RegisterUserScreen: React.FC<IProps> = (props: IProps) => {

    const navigation = useNavigation();

    return (
        <ScrollView bounces={false} style={styles.scrollView}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={tailwind('font-bold text-xl mt-8 ml-3 text-white')}>{CREATE_ACCOUNT_HEADER_TEXT}</Text>
                </View>
                <View style={styles.body}>
                    <TextInput
                        placeholder={EMAIL_PLACEHOLDER}
                        style={styles.textInput}
                        placeholderTextColor={SOLID_WHITE_COLOR}
                    />
                    <TextInput
                        placeholder={PASSWORD_PLACEHOLDER}
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholderTextColor={SOLID_WHITE_COLOR}
                    />
                    <TextInput
                        placeholder={REPASSWORD_PLACEHOLDER}
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholderTextColor={SOLID_WHITE_COLOR}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={tailwind('mt-28 ml-8 text-white')}>
                        {ALREADY_HAVE_ACCOUNT}
                        <Text style={{color: '#07FF8A'}} onPress={() => Alert.alert(SIGN_IN)}>{SIGN_IN}</Text>
                    </Text>
                    <TouchableOpacity style={styles.buttonCreate} onPress={() => Alert.alert(CREATE_ACCOUNT)}>
                        <Text style={styles.textButtonAdmin}>{CREATE_ACCOUNT}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={tailwind('my-8 mx-6 text-white text-xs items-center justify-center')}>
                        <Text>{BY_CREATING_ACCOUNT}</Text>
                        <Text style={{color: SPRING_GREEN_COLOR}} onPress={() => Alert.alert(TERMS_OF_USE)}>{TERMS_OF_USE}</Text>
                        <Text>{AND}</Text>
                        <Text style={{color: SPRING_GREEN_COLOR}} onPress={() => Alert.alert(PRIVACY_POLICY)}>{PRIVACY_POLICY}</Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}
