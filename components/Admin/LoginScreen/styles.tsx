import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#002333',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
        fontWeight: "bold",
        padding: 8
    },
    input: {
        width: '87.43%',
        height: '8%',
        backgroundColor: '#002333',
        paddingLeft: 25,
        borderRadius: 35.5,
        borderWidth: 3,
        borderColor: '#07FF8A',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    inputPassword: {
        marginBottom: 10,
        marginTop: 20
    },
    inputEmail: {
        marginTop: 30
    },
    header: {
        fontSize: 35,
        color: '#fff',
        fontWeight: 'bold'
    },
    button: {
        paddingTop: 13,
        marginBottom: 150,
        backgroundColor: '#07FF8A',
        alignItems: 'center',
        width: '87.43%',
        borderRadius: 35.5,
        height: 62,
        fontSize: 25,
    },
    textInButton: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    },
    textQuestion: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    textCreate: {
        color: '#07FF8A',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    textError: {
        color: '#ff0033',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 25
    }
});

export default styles
