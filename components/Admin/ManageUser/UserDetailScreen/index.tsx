import React, {useContext, useEffect, useState} from 'react';
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
import {NavigationProp, RouteProp, useFocusEffect, useIsFocused} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {
    BUTTON_ADMIN,
    BUTTON_EDIT_PROFILE,
} from "./constants";
import {AuthContext} from "../../../../utils/auth.context";
import {UPDATE_USER_SCREEN} from "../../../../constants";
import 'intl';
import 'intl/locale-data/jsonp/vi-VN';
import {User} from "../../../../models/users.model";
import {UsersContext} from "../../../../utils/users.context";

type IProps = {
    route: RouteProp<any>;
    navigation: NavigationProp<any>;
};

export const UserDetailScreen: React.FC<IProps> = (props: IProps) => {
    const {
        navigation,
        route,
    } = props;

    const {auth} = useContext(AuthContext);
    const users = useContext(UsersContext);
    const [user, setUser] = useState<User>({} as User);
    const isFocused = useIsFocused();

    const findUserByUsername = (username: string) => {
        return users.filter(u => u.username === username)[0];
    };

    const getInitialData = async () => {
        if (route.params?.username) {
            setUser(findUserByUsername(route.params?.username));
        } else {
            setUser({...auth});
        }
    };

    useEffect(() => {
        if (isFocused) {
            if (route.params?.username) {
                setUser(findUserByUsername(route.params?.username));
            } else {
                setUser(findUserByUsername(auth.username));
            }
        }
        }, [isFocused]);

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={tailwind('flex mt-10 bg-white')}>
            <View style={styles.bigCircle}/>
            <View style={tailwind('flex items-center')}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.buttonAdmin} onPress={() => route.params?.username ? navigation.goBack() : console.log('')}>
                        <Text style={styles.textButtonAdmin}>{route.params?.username ? 'Back' : BUTTON_ADMIN}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonEdit} onPress={() => navigation.navigate(UPDATE_USER_SCREEN, {
                        email: user.email,
                    })}>
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
