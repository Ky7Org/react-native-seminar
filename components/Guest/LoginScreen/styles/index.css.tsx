import {StyleSheet} from "react-native";
import {
    DAINTREE_COLOR, SOLID_WHITE_COLOR, SPRING_GREEN_COLOR,
    TORCH_RED_COLOR,
} from "../../../../constants";
import tailwind from "tailwind-rn";

const styles = StyleSheet.create({
    container: {
        ...tailwind('flex-1 p-2'),
        backgroundColor: DAINTREE_COLOR,
        justifyContent: 'center',
        fontWeight: "bold",
    },
    body: {
        ...tailwind('items-center'),
    },
    input: {
        ...tailwind('w-11/12 h-14 pl-6 rounded-full border-2 mt-4 mb-2'),
        backgroundColor: DAINTREE_COLOR,
        borderColor: SPRING_GREEN_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
        color: SOLID_WHITE_COLOR,
    },
    inputPassword: {
        ...tailwind('mb-2 mt-4'),
    },
    header: {
        ...tailwind('pl-8 mb-2'),
    },
    headerText: {
        fontSize: 35,
        color: SOLID_WHITE_COLOR,
        fontWeight: 'bold',
    },
    buttonSignIn: {
        ...tailwind('flex flex-row rounded-full h-14 w-11/12 mb-56'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: SPRING_GREEN_COLOR,
        fontSize: 25,
    },
    textSignInButton: {
        fontSize: 25,
        color: SOLID_WHITE_COLOR,
        fontWeight: 'bold'
    },
    textDontHaveAccount: {
        color: SOLID_WHITE_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textCreateAccount: {
        color: SPRING_GREEN_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textError: {
        ...tailwind('mb-7'),
        color: TORCH_RED_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
    },
    footer: {
        ...tailwind('flex flex-row'),
        flexWrap: 'wrap',
        justifyContent: "center"
    },
});

export default styles;
