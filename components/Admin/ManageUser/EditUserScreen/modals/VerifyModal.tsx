import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {
    Modal,
    ModalContent,
} from 'react-native-modals';
import tailwind from "tailwind-rn";
import React from "react";

type IProps = {
    verifyModalVisible: boolean;
    setVerifyModalVisible: Function;
    setDeleteModalVisible: Function;
};

export const VerifyModal: React.FC<IProps> = (props: IProps) => {

    const {
        verifyModalVisible,
        setVerifyModalVisible,
        setDeleteModalVisible,
    } = props;

    return (
        <Modal width={0.7}
               rounded
               actionsBordered
               visible={verifyModalVisible}>
            <ModalContent
                style={{backgroundColor: '#fff'}}>
                <View style={tailwind("flex items-center")}>
                    <View style={tailwind("mb-3")}>
                        <View style={tailwind("flex items-center")}>
                            <Text style={tailwind("text-gray-400 text-xl font-medium")}>Verify your action</Text>
                        </View>
                        <View style={tailwind("flex items-center")}>
                            <Text style={tailwind("text-gray-400 text-sm")}>Delete your selected account</Text>
                        </View>
                    </View>
                    <View style={tailwind("w-11/12")}>
                        <TouchableOpacity
                            style={tailwind("rounded-full flex items-center justify-center w-full h-10  mr-4 bg-blue-500 mb-4")}
                            onPress={() => {
                                setVerifyModalVisible(false);
                                setDeleteModalVisible(true);
                            }}>
                            <Text style={tailwind('text-white text-lg font-semibold')}>Delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={tailwind("rounded-full flex items-center justify-center w-full h-10  mr-4 bg-gray-300")}
                            onPress={() => {
                                setVerifyModalVisible(false);
                            }}
                        >
                            <Text style={tailwind('text-black text-lg font-semibold')}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalContent>
        </Modal>
    );
}
