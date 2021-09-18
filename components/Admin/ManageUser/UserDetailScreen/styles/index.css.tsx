import {StyleSheet} from "react-native";
import tailwind from "tailwind-rn";

export const styles = StyleSheet.create({
    bigCircle: {
        ...tailwind('rounded-full absolute w-full h-full'),
        backgroundColor: "#002333",
        width: 1046,
        height: 1046,
        top: -900,
        left: -300

    },
    headerContainer: {
        ...tailwind('flex flex-row justify-between w-full mt-6'),

    },
    buttonEdit: {
        ...tailwind('rounded-full flex items-center justify-center'),
        backgroundColor: '#07FF8A',
        width: 112,
        height: 30,
        marginRight: 22
    },
    buttonAdmin: {
        ...tailwind('rounded-full flex items-center justify-center'),
        borderWidth: 2,
        borderColor: '#07FF8A',
        width: 60,
        height: 30,
        marginLeft: 22,
    },
    textButtonAdmin: {
        color: "white",
        fontSize: 14,
        fontWeight: 'bold'
    },

})
