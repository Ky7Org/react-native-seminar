import {StyleSheet} from "react-native";
import tailwind from "tailwind-rn";
import {DAINTREE_COLOR, SOLID_WHITE_COLOR, SPRING_GREEN_COLOR, TUNDORA_COLOR} from "../../../../../constants";

export const styles = StyleSheet.create({
    bigCircle: {
        ...tailwind('rounded-full absolute'),
        backgroundColor: DAINTREE_COLOR,
        width: 1015,
        height: 1090,
        top: -900,
        left: -300
    },
    header: {
        ...tailwind('flex flex-row justify-between w-full mt-6'),
    },
    buttonAdmin: {
        ...tailwind('rounded-full flex items-center justify-center ml-6 h-8 w-16 border-2'),
        borderColor: SPRING_GREEN_COLOR,
    },
    textButtonAdmin: {
        color: SOLID_WHITE_COLOR,
        fontWeight: 'bold',
    },
    searchField: {
        ...tailwind('rounded-full w-96 h-16 mt-6 mr-6 ml-6 border-2'),
        backgroundColor: DAINTREE_COLOR,
        color: DAINTREE_COLOR,
    },
    searchView: {
        ...tailwind('flex-shrink'),
    },
    userList: {
        ...tailwind('p-4 mx-2 my-2'),
    },
    item: {
        ...tailwind('flex rounded-2xl bg-white p-8 flex-col border-2 border-gray-100'),
    },
    containerStyle: {
        ...tailwind('p-2 rounded-full mb-2 -mt-2 -mr-4 -ml-20'),
        backgroundColor: SOLID_WHITE_COLOR,
    },
    searchSection: {
        ...tailwind('flex-1 items-center rounded-full h-16 ml-8 mr-8 mt-6'),
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: SOLID_WHITE_COLOR,
    },
    input: {
        ...tailwind('flex-1 rounded-full ml-4 pt-3 pb-3 pr-3'),
        backgroundColor: SOLID_WHITE_COLOR,
        color: TUNDORA_COLOR,
    },
});
