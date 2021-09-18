import React, {useContext} from 'react';
import {
    Image,
    ScrollView,
    Text,
    View,
} from "react-native";
import {styles} from "./styles/index.css";
import tailwind from "tailwind-rn";
import {
    CalendarIcon,
    ChartBarIcon,
    DeviceMobileIcon,
    LocationMarkerIcon,
    MailIcon,
} from "react-native-heroicons/solid";
import {RouteProp, useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {
    BUTTON_ADMIN,
    BUTTON_EDIT_PROFILE,
} from "./constants";
import {User} from "../../../../models/users.model";
import {AuthContext} from "../../../../utils/auth.context";

type IProps = {
    route: RouteProp<any>;
};

export const UserDetailScreen: React.FC<IProps> = (props: IProps) => {
    const user = useContext<User>(AuthContext) ?? {} as User;
    const navigation = useNavigation();

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={tailwind('flex mt-10 bg-white')}>
            <View style={styles.bigCircle}/>
            <View style={tailwind('flex items-center')}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.buttonAdmin}>
                        <Text style={styles.textButtonAdmin}>{BUTTON_ADMIN}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonEdit} onPress={() => {}}>
                        <Text style={styles.textButtonAdmin}>{BUTTON_EDIT_PROFILE}</Text>
                    </TouchableOpacity>
                </View>
                <View style={tailwind('font-bold')}>
                    <Text style={tailwind('font-bold text-2xl text-white')}>{user.fullname}</Text>
                </View>
                <View style={tailwind('border-8 border-transparent')}>
                    <Image style={tailwind('rounded-full w-24 h-24')}
                           source={require("../../../../assets/miku_profile.jpg")}/>
                </View>

                <View style={tailwind('flex flex-row flex-wrap w-full p-2 border-gray-300 border-t-2 mt-6')}>
                    <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                        <CalendarIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>{new Intl.DateTimeFormat('vi-VN').format(user.birthDate)}</Text>
                    </View>
                    <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                        <ChartBarIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>{user.height} cm</Text>
                    </View>
                    <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                        <LocationMarkerIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>{user.address}</Text>
                    </View>
                </View>

                <View style={tailwind('flex flex-wrap w-full p-2 border-gray-300 border-t-2')}>
                    <View style={tailwind('flex flex-row items-center p-2')}>
                        <DeviceMobileIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>{user.phone}</Text>
                    </View>
                    <View style={tailwind('flex flex-row items-center p-2')}>
                        <MailIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>{user.email}</Text>
                    </View>
                </View>

                <View style={tailwind('p-4 border-gray-300 border-t-2')}>
                    <Text style={tailwind('text-2xl font-bold')}>Curriculum Vitae</Text>
                    <Text style={tailwind('text-lg')}>{user.cv}</Text>
                </View>
            </View>
        </ScrollView>
    );
};
