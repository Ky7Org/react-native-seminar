import {StyleSheet} from "react-native";
import tailwind from "tailwind-rn";

export const styles = StyleSheet.create({
    bigCircle: {
        ...tailwind('rounded-full absolute'),
        backgroundColor: "#002333",
        width: 1046,
        height: 1046,
        top: -900,
        left: -300
    },
    fullNameLabel: {
        ...tailwind('ml-3 text-xs'),
        color: "#0085FF",
    },
    fullNameInput: {
        ...tailwind('h-10 border-b-2 w-2/4 text-lg text-black font-bold ml-3'),
        borderColor: "#0085FF",
    },
    informationInputContainer: {
        ...tailwind("flex flex-col ml-1"),
    },
    informationInput: {
        ...tailwind("h-8 w-32 border-b-2 border-gray-300"),
    },
    informationLabel: {
        ...tailwind("text-xs text-gray-400"),
    },
    header: {
        ...tailwind('flex flex-row justify-end w-full mt-6'),
    },
    buttonDelete: {
        ...tailwind('rounded-full flex items-center justify-center w-32 h-6 mr-4'),
        backgroundColor: "#FF5F5F"
    },
    textButtonAdmin: {
        ...tailwind('text-white text-sm font-bold'),
    },
    updateButton: {
        ...tailwind('rounded-full flex items-center justify-center w-10/12 h-14 bg-red-700'),
        backgroundColor: '#07FF8A'
    },

});
