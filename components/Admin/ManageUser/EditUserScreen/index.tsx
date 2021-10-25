import React, {useEffect, useState} from 'react';
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
import {UsersContext} from "../../../../utils/users.context";
import {AuthContext} from "../../../../utils/auth.context";
import {User} from "../../../../models/users.model";
import 'intl';
import 'intl/locale-data/jsonp/vi-VN';
import {Formik} from 'formik';

type IProps = {
    route: RouteProp<any>;
    navigation: NavigationProp<any>;
};

export const UpdateUserScreen: React.FC<IProps> = (props: IProps) => {
    const {auth} = React.useContext(AuthContext);
    const users = React.useContext<User[]>(UsersContext);
    const [user, setUser] = React.useState<User>({} as User);

    const navigation = useNavigation();
    const {
        route,
    } = props;

    const findUserByEmail = (email: string) => {
        return users.filter(u => u.email === email)[0];
    };

    const updateUser = (values) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === user.username) {
                users[i].phone = values.phone;
                users[i].address = values.address;
                console.log(values.height);
                users[i].height = parseInt(values.height);
                const date = values.birthdate.split('/');
                console.log(date[0] + " " + date[1] + " " + date[2]);
                users[i].birthDate = new Date(date[2], date[1], date[0]).getTime();
            }
        }
        navigation.goBack();
    };

    useEffect(() => {
        if (route.params?.email) {
            setUser(findUserByEmail(route.params?.email));
        }
    }, []);

    const [verifyModalVisible, setVerifyModalVisible] = useState<boolean>(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);

    const initialValues = {
        fullname: user.fullname ?? '',
        birthdate: user.birthDate ? new Intl.DateTimeFormat('vi-VN').format(user.birthDate) : '',
        address: user.address ?? '',
        height: user.height ? user.height.toString(10) : '',
        cv: user.cv ?? '',
        phone: user.phone ?? '',
        email: user.email ?? '',
    }
    return (
        <Formik enableReinitialize initialValues={initialValues} onSubmit={updateUser}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
                <ScrollView bounces={false} style={tailwind('flex mt-10 bg-white')}>
                    <View style={styles.bigCircle}/>
                    <View style={tailwind('flex items-center')}>
                        <View style={styles.header}>
                            {(auth.email !== route.params?.email) ?
                                <TouchableOpacity style={styles.buttonDelete}
                                                  onPress={() => {
                                                      setVerifyModalVisible(true)
                                                  }}>
                                    <Text style={styles.textButtonAdmin}>{DELETE_USER_BUTTON}</Text>
                                </TouchableOpacity> : <></>}
                        </View>

                        <View style={tailwind('border-8 border-transparent mt-8')}>
                            <Image style={tailwind('rounded-full w-24 h-24')}
                                   source={require("../../../../assets/miku_profile.jpg")}/>
                        </View>

                        <View style={tailwind('w-full')}>
                            <Text style={styles.fullNameLabel}>Full name</Text>
                            <TextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={handleChange('fullname')}
                                onBlur={handleBlur('fullname')}
                                placeholder="Input fullname"
                                value={values.fullname}
                                style={styles.fullNameInput}/>
                        </View>

                        <View style={tailwind('flex flex-row flex-wrap w-full p-2 border-gray-300 border-t-2 mt-6')}>
                            <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                                <CalendarIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                                <View style={styles.informationInputContainer}>
                                    <TextInput placeholder="Input birthdate"
                                               autoCapitalize="none"
                                               autoCorrect={false}
                                               onChangeText={handleChange('birthdate')}
                                               onBlur={handleBlur('birthdate')}
                                               style={styles.informationInput}
                                               value={values.birthdate}
                                    />
                                    <Text style={styles.informationLabel}>MM/DD/YYYY</Text>
                                </View>
                            </View>
                            <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                                <ChartBarIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                                <View style={styles.informationInputContainer}>
                                    <TextInput placeholder="Input height"
                                               autoCapitalize="none"
                                               autoCorrect={false}
                                               onChangeText={handleChange('height')}
                                               onBlur={handleBlur('height')}
                                               style={styles.informationInput}
                                               value={values.height}
                                    />
                                    <Text style={styles.informationLabel}>Body height (cm)</Text>
                                </View>
                            </View>
                            <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                                <LocationMarkerIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                                <View style={styles.informationInputContainer}>
                                    <TextInput placeholder="Input address"
                                               autoCapitalize="none"
                                               autoCorrect={false}
                                               onChangeText={handleChange('address')}
                                               onBlur={handleBlur('address')}
                                               style={styles.informationInput}
                                               value={values.address}
                                    />
                                    <Text style={styles.informationLabel}>Input address</Text>
                                </View>
                            </View>
                        </View>

                        <View style={tailwind('flex flex-wrap w-full p-2 border-gray-300 border-t-2')}>
                            <View style={tailwind('flex flex-row items-center p-2')}>
                                <DeviceMobileIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                                <View style={styles.informationInputContainer}>
                                    <TextInput
                                        placeholder="Phone number"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        onChangeText={handleChange('phone')}
                                        onBlur={handleBlur('phone')}
                                        style={styles.informationInput}
                                        value={values.phone}
                                    />
                                    <Text style={styles.informationLabel}>Enter a 10-digit number</Text>
                                </View>
                            </View>
                            <View style={tailwind('flex flex-row items-center p-2')}>
                                <MailIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                                <View style={styles.informationInputContainer}>
                                    <TextInput
                                        placeholder="Your email"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        style={styles.informationInput}
                                        value={values.email}
                                    />
                                    <Text style={styles.informationLabel}>Input email</Text>
                                </View>
                            </View>
                        </View>

                        <View style={tailwind('p-4 border-gray-300 border-t-2 w-full')}>
                            <Text style={tailwind('text-2xl font-bold')}>Curriculum Vitae</Text>
                            <TextInput multiline
                                       autoCapitalize="none"
                                       autoCorrect={false}
                                       onChangeText={handleChange('cv')}
                                       onBlur={handleBlur('cv')}
                                       numberOfLines={4}
                                       style={{maxHeight: 200}}
                                       placeholder="Write about..."
                                       value={values.cv}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.updateButton}
                            onPress={() => handleSubmit()}>
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
            )}
        </Formik>
    );
};
