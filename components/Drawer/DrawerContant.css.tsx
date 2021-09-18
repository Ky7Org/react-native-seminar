import tailwind from "tailwind-rn";
import {BACKGROUND_COLOR, TEXT_COLOR_WHITE} from "../../constants";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    mr2: {
       ...tailwind('mr-2'),
    },
    container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR
    },
    userAvatarSection: {
        flexDirection: "row",
        ...tailwind('mt-16 ml-6')
    },
    userDesignationSection: {
        marginLeft: 15,
        flexDirection: "column",
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold",
        color: TEXT_COLOR_WHITE
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: TEXT_COLOR_WHITE
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        ...tailwind('ml-6'),
        marginBottom: 15,
        borderTopColor: "#000",
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
        color: TEXT_COLOR_WHITE, fontWeight: "bold",
    },
    drawer: {
        ...tailwind('mt-20')
    }

})
