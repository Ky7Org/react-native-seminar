import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Modal, ModalContent} from "react-native-modals";
import tailwind from "tailwind-rn";
import {CalendarIcon, ChartBarIcon, DeviceMobileIcon, LocationMarkerIcon, MailIcon} from "react-native-heroicons/solid";
import {DELETE_USER_BUTTON} from "./constants";
import {DELETE_DETAILS_SCREEN} from "../../../../constants";

export default function EditAccountUserScreen({navigation, routes}) {
    return (

        <ScrollView bounces={false} style={tailwind('flex mt-10 bg-white')}>

            {/* Delete Modal*/}
            {/*<Modal width={0.7} visible={true}
                   rounded
                   actionsBordered
            >
                <ModalContent
                    style={{ backgroundColor: '#fff' }}
                >
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
                                              onPress={() =>{}}
                            >
                                <Text style={tailwind('text-white text-lg font-semibold')}>{"Done"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tailwind("rounded-full flex items-center justify-center w-full h-10  mr-4 bg-gray-300")}
                                              onPress={() =>{}}
                            >
                                <Text style={tailwind('text-black text-lg font-semibold')}>{"Undo"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ModalContent>
            </Modal>*/}

            {/* Verify Modal*/}
            {/*<Modal width={0.7} visible={true}
                   rounded
                   actionsBordered
            >
                <ModalContent
                    style={{ backgroundColor: '#fff' }}
                >
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
                            <TouchableOpacity style={tailwind("rounded-full flex items-center justify-center w-full h-10  mr-4 bg-blue-500 mb-4")}
                                              onPress={() =>{}}
                            >
                                <Text style={tailwind('text-white text-lg font-semibold')}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={tailwind("rounded-full flex items-center justify-center w-full h-10  mr-4 bg-gray-300")}
                                              onPress={() =>{}}
                            >
                                <Text style={tailwind('text-black text-lg font-semibold')}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ModalContent>
            </Modal>*/}

            {/* Error Modal*/}
            <Modal width={0.7} visible={true}
                   rounded
                   actionsBordered
            >
                <ModalContent
                    style={{backgroundColor: '#fff'}}
                >
                    <View style={tailwind("flex items-center")}>
                        <View style={tailwind("mb-3")}>
                            <View style={tailwind("flex items-center")}>
                                <Text style={tailwind("text-gray-400 text-xl font-medium")}>Error !!!</Text>
                            </View>
                            <View style={tailwind("flex items-center")}>
                                <Text style={tailwind("text-gray-400 text-sm")}>Error message</Text>
                            </View>
                        </View>
                        <View style={tailwind("w-11/12")}>
                            <TouchableOpacity style={{
                                ...tailwind("rounded-full flex items-center justify-center w-full h-10  mr-4 mb-4"),
                                backgroundColor: "#FF5F5F"
                            }}
                                              onPress={() => {
                                              }}
                            >
                                <Text style={tailwind('text-white text-lg font-semibold')}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ModalContent>
            </Modal>


            <View style={styles.bigCircle}/>
            <View style={tailwind('flex items-center')}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.buttonDelete}
                                      onPress={() => navigation.push(DELETE_DETAILS_SCREEN, {username: "123"})}
                    >
                        <Text style={styles.buttonText}>{DELETE_USER_BUTTON}</Text>
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
                    <TextInput multiline
                               numberOfLines={4} style={{maxHeight: 200}} placeholder="Write about you..."/>
                </View>

                <TouchableOpacity
                    style={styles.updateButton}
                    onPress={() => {
                    }}>
                    <Text style={tailwind('text-black text-xl font-bold')}>{"UPDATE"}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bigCircle: {
        ...tailwind('rounded-full absolute'),
        backgroundColor: "#002333",
        width: 1046,
        height: 1046,
        top: -900,
        left: -300
    },
    fullNameLabel: {
        ...tailwind('ml-3 text-xs'),
        color: "#0085FF",
    },
    fullNameInput: {
        ...tailwind('h-10 border-b-2 w-2/4 text-lg text-black font-bold ml-3'),
        borderColor: "#0085FF",
    },
    informationInputContainer: {
        ...tailwind("flex flex-col ml-1"),
    },
    informationInput: {
        ...tailwind("h-8 w-32 border-b-2 border-gray-300"),
    },
    informationLabel: {
        ...tailwind("text-xs text-gray-400"),
    },
    headerContainer: {
        ...tailwind('flex flex-row justify-end w-full mt-6'),
    },
    buttonDelete: {
        ...tailwind('rounded-full flex items-center justify-center w-32 h-6 mr-4'),
        backgroundColor: "#FF5F5F"
    },
    buttonText: {
        ...tailwind('text-white text-sm font-bold'),
    },
    updateButton: {
        ...tailwind('rounded-full flex items-center justify-center w-10/12 h-14 bg-red-700'),
        backgroundColor: '#07FF8A'
    },

})

