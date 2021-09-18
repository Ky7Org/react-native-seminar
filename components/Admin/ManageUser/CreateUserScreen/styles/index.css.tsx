import {StyleSheet} from "react-native";
import tailwind from "tailwind-rn";
import {BACKGROUND_COLOR, BUTTON_COLOR, TEXT_COLOR_WHITE} from "../../../../../constants";

export const styles = StyleSheet.create({
    textInput: {
        ...tailwind('rounded-full w-full h-16 bg-white mt-8 mr-8 ml-3 border-2 border-green-400'),
        backgroundColor: BACKGROUND_COLOR,
        paddingLeft: 30,
        color: TEXT_COLOR_WHITE,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        display: "flex",
        flexDirection: 'column',
        marginRight: 20
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonCreate: {
        ...tailwind('rounded-full w-full h-20 bg-white mt-8 ml-3 border-2 border-green-400'),
        backgroundColor: BUTTON_COLOR,
        justifyContent: "center",
    },
    scrollView: {
        backgroundColor: BACKGROUND_COLOR
    },
    header: {
        marginLeft: 20
    },
    body: {
        marginRight: 20,
        marginLeft: 20
    },
    footer: {
        marginRight: 10
    }
});
