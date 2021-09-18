import {StyleSheet} from "react-native";
import tailwind from "tailwind-rn";
import {
    DAINTREE_COLOR,
    SOLID_WHITE_COLOR, SPRING_GREEN_COLOR,
} from "../../../../constants";

export const styles = StyleSheet.create({
    textInput: {
        ...tailwind('rounded-full w-full h-16 bg-white mt-8 mr-8 ml-3 border-2 border-green-400'),
        backgroundColor: DAINTREE_COLOR,
        paddingLeft: 30,
        color: SOLID_WHITE_COLOR,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        display: "flex",
        flexDirection: 'column',
        marginRight: 20
    },
    textButtonAdmin: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonCreate: {
        ...tailwind('rounded-full w-full h-20 bg-white mt-8 ml-3 border-2 border-green-400'),
        backgroundColor: SPRING_GREEN_COLOR,
        justifyContent: "center",
    },
    scrollView: {
        backgroundColor: DAINTREE_COLOR
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
