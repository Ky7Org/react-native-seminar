import React, {useState} from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Modal, ModalContent} from "react-native-modals";
import tailwind from "tailwind-rn";
import {
    CalendarIcon,
    ChartBarIcon,
    DeviceMobileIcon,
    LocationMarkerIcon,
    MailIcon,
} from "react-native-heroicons/solid";
import {DELETE_USER_BUTTON} from "./constants";
import {styles} from "./styles/index.css";
import {NavigationProp, RouteProp, useNavigation} from "@react-navigation/native";
import {VerifyModal} from "./modals/VerifyModal";
import {DeleteModal} from "./modals/DeleteModal";

type IProps = {
  route: RouteProp<any>;
  navigation: NavigationProp<any>;
};

export const UpdateUserScreen: React.FC<IProps> = (props: IProps) => {

    const navigation = useNavigation();
    const {
        route,
    } = props;

    const [verifyModalVisible, setVerifyModalVisible] = useState<boolean>(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);

    return (
        <ScrollView bounces={false} style={tailwind('flex mt-10 bg-white')}>
            <View style={styles.bigCircle}/>
            <View style={tailwind('flex items-center')}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonDelete}
                                      onPress={() => {setVerifyModalVisible(true)}}
                    >
                        <Text style={styles.textButtonAdmin}>{DELETE_USER_BUTTON}</Text>
                    </TouchableOpacity>
                </View>

                <View style={tailwind('border-8 border-transparent mt-8')}>
                    <Image style={tailwind('rounded-full w-24 h-24')}
                           source={require("../../../../assets/miku_profile.jpg")}/>
                </View>

                <View style={tailwind('w-full')}>
                    <Text style={styles.fullNameLabel}>Full name</Text>
                    <TextInput placeholder="Banhsbao dayo" style={styles.fullNameInput}/>
                </View>

                <View style={tailwind('flex flex-row flex-wrap w-full p-2 border-gray-300 border-t-2 mt-6')}>
                    <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                        <CalendarIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <View style={styles.informationInputContainer}>
                            <TextInput placeholder="Your birthday" style={styles.informationInput}/>
                            <Text style={styles.informationLabel}>MM/DD/YYYY</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                        <ChartBarIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <View style={styles.informationInputContainer}>
                            <TextInput placeholder="Your height" style={styles.informationInput}/>
                            <Text style={styles.informationLabel}>Enter your height</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                        <LocationMarkerIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <View style={styles.informationInputContainer}>
                            <TextInput placeholder="Your address" style={styles.informationInput}/>
                            <Text style={styles.informationLabel}>Enter your address</Text>
                        </View>
                    </View>
                </View>

                <View style={tailwind('flex flex-wrap w-full p-2 border-gray-300 border-t-2')}>
                    <View style={tailwind('flex flex-row items-center p-2')}>
                        <DeviceMobileIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <View style={styles.informationInputContainer}>
                            <TextInput placeholder="Phone number" style={styles.informationInput}/>
                            <Text style={styles.informationLabel}>Enter a 10 digit number</Text>
                        </View>
                    </View>
                    <View style={tailwind('flex flex-row items-center p-2')}>
                        <MailIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <View style={styles.informationInputContainer}>
                            <TextInput placeholder="Your email" style={styles.informationInput}/>
                            <Text style={styles.informationLabel}>Enter your email</Text>
                        </View>
                    </View>
                </View>

                <View style={tailwind('p-4 border-gray-300 border-t-2 w-full')}>
                    <Text style={tailwind('text-2xl font-bold')}>Curriculum Vitae</Text>
                    <TextInput multiline numberOfLines={4} style={{maxHeight: 200}} placeholder="Write about you..."/>
                </View>

                <TouchableOpacity
                    style={styles.updateButton}
                    onPress={() => {}}>
                    <Text style={tailwind('text-black text-xl font-bold')}>{"UPDATE"}</Text>
                </TouchableOpacity>
            </View>
            <DeleteModal
                deleteModalVisible={deleteModalVisible}
                navigation={navigation}
                setDeleteModalVisible={setDeleteModalVisible}
            />
            <VerifyModal
                verifyModalVisible={verifyModalVisible}
                setVerifyModalVisible={setVerifyModalVisible}
                setDeleteModalVisible={setDeleteModalVisible}/>
        </ScrollView>
    );
};
