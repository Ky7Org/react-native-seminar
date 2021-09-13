import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        height:50
    },
    buttonOpen: {
        backgroundColor: "#f32121",
        width: 100
    },
    buttonYes: {
        backgroundColor: "#f32121",
    },
    buttonNo: {
        backgroundColor: "#2DC73D",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold"
    },
    modalMiniText: {
        fontSize:10,
        textAlign: "center",
        padding:20,
        paddingTop:5
    }
});