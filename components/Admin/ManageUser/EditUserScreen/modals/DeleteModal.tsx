import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import tailwind from "tailwind-rn";
import {
    Modal,
    ModalContent,
} from 'react-native-modals';
import React from "react";
import {NavigationProp} from "@react-navigation/native";
import {HOME_SCREEN} from "../../../../../constants";

type IProps = {
    deleteModalVisible: boolean;
    navigation: NavigationProp<any>;
    setDeleteModalVisible: Function;
};

export const DeleteModal: React.FC<IProps> = (props: IProps) => {

    const {
        deleteModalVisible,
        setDeleteModalVisible,
        navigation,
    } = props;

    return (
        <Modal width={0.7} visible={deleteModalVisible} rounded actionsBordered>
            <ModalContent style={{ backgroundColor: '#fff' }}>
                <View style={tailwind("flex items-center")}>
                    <View style={tailwind("mb-3")}>
                        <View style={tailwind("flex items-center")}>
                            <Text style={tailwind("text-gray-400 text-xl font-medium")}>Delete account</Text>
                        </View>
                        <View style={tailwind("flex items-center")}>
                            <Text style={tailwind("text-gray-400 text-sm")}>Your account is Deleted</Text>
                        </View>
                    </View>
                    <View style={tailwind("w-11/12")}>
                        <TouchableOpacity style={tailwind("rounded-full flex items-center justify-center w-full h-10  mr-4 bg-blue-500 mb-4")}
                                          onPress={() => {
                                              setDeleteModalVisible(false);
                                              navigation.navigate(HOME_SCREEN);
                                          }}>
                            <Text style={tailwind('text-white text-lg font-semibold')}>{"Done"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tailwind("rounded-full flex items-center justify-center w-full h-10  mr-4 bg-gray-300")}
                                          onPress={() =>{}}>
                            <Text style={tailwind('text-black text-lg font-semibold')}>{"Undo"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalContent>
        </Modal>
    );
};
