import React, {useState} from 'react';
import {Modal, Pressable, Text, View} from "react-native";
import styles from "./styles/index.css";

export default function DeleteModal({route, navigation}) {

    const [modalVisible, setModalVisible] = useState(false);
    const {username} = route.params.username;


    function handleDeleteUser() {
        console.log("Delete pressed")
        setModalVisible(!modalVisible)
    }

    function handleShowModal() {
        console.log("Modal showed")
    }

    function handleCloseModal() {
        console.log("Modal closed")
        console.log(JSON.stringify(username))
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
                onShow={handleShowModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Verify your action: {username}</Text>
                        <Text style={styles.modalMiniText}>Delete your selected account</Text>
                        <Pressable
                            style={[styles.button, styles.buttonYes]}
                            onPress={handleDeleteUser}
                        >
                            <Text style={styles.textStyle}>Delete</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonNo]}
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/*<UserDetail/>*/}
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
        </View>
    );


}


