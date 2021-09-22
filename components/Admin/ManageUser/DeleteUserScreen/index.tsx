import React, {useState} from 'react';
import {Modal, Pressable, Text, View} from "react-native";
import styles from "./styles/index.css";
import {NavigationProp, Route, RouteProp, useNavigation} from "@react-navigation/native";

type IProps = {
    route: Route<"Delete", object>;
    navigation: NavigationProp<any>;
};
//    routeProp: RouteProp<{ params: {username: string }}, 'params'>;
export const DeleteUserScreen: React.FC<IProps> = (props: IProps) => {
    const {
        route,
    } = props;
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const navigation = useNavigation();

    const handleDeleteUser = () => {
        console.log("Delete pressed")
        setModalVisible(!modalVisible)
    };

    const handleShowModal = () => {
        console.log("Modal showed")
    };

    const handleCloseModal = () => {
        console.log("Modal closed")
        setModalVisible(!modalVisible);
    };

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
                        <Text style={styles.modalText}>Verify your action: </Text>
                        <Text style={styles.modalMiniText}>Delete your selected account</Text>
                        <Pressable
                            style={[styles.buttonSignIn, styles.buttonYes]}
                            onPress={handleDeleteUser}
                        >
                            <Text style={styles.textStyle}>Delete</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.buttonSignIn, styles.buttonNo]}
                            onPress={handleCloseModal}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.buttonSignIn, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Delete</Text>
            </Pressable>
        </View>
    );


}


