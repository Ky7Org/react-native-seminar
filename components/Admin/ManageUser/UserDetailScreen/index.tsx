import React from 'react';
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

type IProps = {
    route: RouteProp<any>;
};

export const UserDetailScreen: React.FC<IProps> = (props: IProps) => {

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
                    <TouchableOpacity style={styles.buttonAdmin}
                                      onPress={() => {}}>
                        <Text style={styles.buttonText}>{BUTTON_ADMIN}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonEdit}
                                      onPress={() => {}}>
                        <Text style={styles.buttonText}>{BUTTON_EDIT_PROFILE}</Text>
                    </TouchableOpacity>
                </View>

                <View style={tailwind('font-bold')}>
                    <Text style={tailwind('font-bold text-2xl text-white')}>Tien</Text>
                </View>
                <View style={tailwind('border-8 border-transparent')}>
                    <Image style={tailwind('rounded-full w-24 h-24')}
                           source={require("../../../../assets/miku_profile.jpg")}/>
                </View>

                <View style={tailwind('flex flex-row flex-wrap w-full p-2 border-gray-300 border-t-2 mt-6')}>
                    <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                        <CalendarIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>August 31 2007</Text>
                    </View>
                    <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                        <ChartBarIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>159 cm</Text>
                    </View>
                    <View style={tailwind('flex flex-row items-center w-1/2 p-2')}>
                        <LocationMarkerIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>Sapporo, Japan</Text>
                    </View>
                </View>

                <View style={tailwind('flex flex-wrap w-full p-2 border-gray-300 border-t-2')}>
                    <View style={tailwind('flex flex-row items-center p-2')}>
                        <DeviceMobileIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>0356773***</Text>
                    </View>
                    <View style={tailwind('flex flex-row items-center p-2')}>
                        <MailIcon stroke="#07FF8A" size={31} style={tailwind('mr-2')}/>
                        <Text style={tailwind('text-lg')}>miku.work@gmail.com</Text>
                    </View>
                </View>

                <View style={tailwind('p-4 border-gray-300 border-t-2')}>
                    <Text style={tailwind('text-2xl font-bold')}>Curriculum Vitae</Text>
                    <Text style={tailwind('text-lg')}>
                        Hatsune Miku was the first Vocaloid developed by Crypton Future
                        Media after they handled the release of the Yamaha vocal Meiko and Kaito. Miku was intended to
                        be the first of a series of Vocaloids called the "Character Vocal Series", which included
                        Kagamine Rin/Len and Megurine Luka. Each had a particular concept and vocal direction.[4]

                        She was built using Yamaha's Vocaloid 2 technology, and later updated to newer engine versions.
                        She was created by taking vocal samples from voice actress Saki Fujita at a controlled pitch and
                        tone. Those samples all contain a single Japanese phonic that, when strung together, creates
                        full lyrics and phrases. The pitch of the samples was to be altered by the synthesizer engine
                        and constructed into a keyboard-style instrument within the Vocaloid software.
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};
