import {StyleSheet} from "react-native";
import tailwind from "tailwind-rn";
import {
    DAINTREE_COLOR,
    SOLID_WHITE_COLOR, SPRING_GREEN_COLOR,
} from "../../../../constants";

export const styles = StyleSheet.create({
    input: {
        ...tailwind('w-11/12 h-14 pl-6 rounded-full border-2 mt-4 mb-2'),
        backgroundColor: DAINTREE_COLOR,
        borderColor: SPRING_GREEN_COLOR,
        fontSize: 20,
        fontWeight: 'bold',
        color: SOLID_WHITE_COLOR,
    },
    container: {
        ...tailwind('flex mr-2 mt-28'),
        justifyContent: 'center',
        flexDirection: 'column',
    },
    headerText: {
        ...tailwind('font-bold ml-3 text-white mb-3'),
        fontSize: 35,
    },
    textButtonAdmin: {
        color: "white",
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonCreate: {
        ...tailwind('flex flex-row rounded-full mt-8 ml-3 h-14 w-11/12'),
        backgroundColor: SPRING_GREEN_COLOR,
        justifyContent: "center",
        alignItems: 'center',
        fontSize: 25,
    },
    scrollView: {
        backgroundColor: DAINTREE_COLOR
    },
    header: {
        marginLeft: 20
    },
    body: {
        ...tailwind('flex items-center'),
    },
    buttonCreateAccount: {
        ...tailwind('flex flex-row items-center'),
        justifyContent: "center",
        marginRight: 10
    },
    textAlreadyHaveAccount: {
      ...tailwind('mt-16 ml-8 text-white'),
        fontSize: 20,
        fontWeight: '600',
    },
    footer: {
        ...tailwind('flex flex-row items-center my-6 mx-6 mt-10'),
        justifyContent: 'center',
    },
    footerText: {
        ...tailwind('text-white text-xs'),
        fontWeight: '600',
        fontSize: 14,
    }
});
