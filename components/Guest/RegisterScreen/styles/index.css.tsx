import {StyleSheet} from "react-native";
import tailwind from "tailwind-rn";
import {
    DAINTREE_COLOR,
    SOLID_WHITE_COLOR, SPRING_GREEN_COLOR,
} from "../../../../constants";

export const styles = StyleSheet.create({
    input: {
        ...tailwind('w-11/12 h-14 pl-6 font-bold rounded-full border-2 mt-4 mb-2'),
        backgroundColor: DAINTREE_COLOR,
        borderColor: SPRING_GREEN_COLOR,
        fontSize: 20,
        color: SOLID_WHITE_COLOR,
    },
    container: {
        ...tailwind('flex mt-28'),
        justifyContent: 'center',
    },
    headerText: {
        ...tailwind('font-bold text-white'),
        fontSize: 35,
    },
    textButtonAdmin: {
        ...tailwind('font-bold text-white'),
        fontSize: 25,
        textAlign: 'center'
    },
    buttonCreate: {
        ...tailwind('flex flex-row items-center rounded-full mt-8 mb-8 h-14 w-11/12'),
        backgroundColor: SPRING_GREEN_COLOR,
        justifyContent: "center",
        fontSize: 25,
    },
    baseContainer: {
        backgroundColor: DAINTREE_COLOR
    },
    header: {
        ...tailwind('flex flex-row mb-4 ml-6'),
    },
    body: {
        ...tailwind('flex items-center ml-2 mr-2'),
    },
    buttonCreateAccount: {
        ...tailwind('flex flex-row'),
        justifyContent: "center",
    },
    textFooterAlreadyHaveAccount: {
        ...tailwind('flex flex-row items-center mt-8'),
    },
    textAlreadyHaveAccount: {
      ...tailwind('text-white'),
        fontSize: 20,
        fontWeight: 'bold',
    },
    textHaveAccountSignIn: {
        color: SPRING_GREEN_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
    },
    footer: {
        ...tailwind('flex flex-col items-center'),
        justifyContent: 'center',
    },
    footerText: {
        ...tailwind('flex flex-row text-white text-xs mr-4 ml-4'),
        flexWrap: 'wrap',
    },
    textTermsOfUseFooter: {
        ...tailwind('text-white'),
        fontWeight: '600',
        fontSize: 14,
    }
});
