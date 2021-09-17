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
import {
    BACKGROUND_COLOR,
    BUTTON_COLOR,
    TEXT_COLOR_WHITE,
} from "../../../../constants";
import {useNavigation} from "@react-navigation/native";

type IProps = {

};

export const CreateUserScreen: React.FC<IProps> = (props: IProps) => {

    const navigation = useNavigation();

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
