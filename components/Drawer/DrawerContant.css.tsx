import tailwind from "tailwind-rn";
import {
    DAINTREE_COLOR,
    SOLID_WHITE_COLOR,
} from "../../constants";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mr2: {
       ...tailwind('mr-2'),
    },
    container: {
        ...tailwind('flex-1'),
        backgroundColor: DAINTREE_COLOR,
    },
    userAvatarSection: {
        flexDirection: "row",
        ...tailwind('mt-16 ml-6')
    },
    userDesignationSection: {
        ...tailwind('ml-3'),
        flexDirection: "column",
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
       ...tailwind('pl-5'),
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: SOLID_WHITE_COLOR
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: SOLID_WHITE_COLOR
    },
    bottomDrawerSection: {
        ...tailwind('ml-6'),
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    drawItemLabel:{
        ...tailwind('-ml-6'),
        color: SOLID_WHITE_COLOR,
        fontWeight: "bold",
    },
    drawer: {
        ...tailwind('mt-20')
    },
})
