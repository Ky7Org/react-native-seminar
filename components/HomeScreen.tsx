import {View, Text, StyleSheet, Button, Image, ScrollView} from "react-native";
import React, {useEffect} from "react";
import {BASE, DETAILS_SCREEN, HOME_SCREEN, READ} from "../constants";
import tailwind from "tailwind-rn";
import {Doujin} from "../models/doujin.model";
import {getDoujinById} from "../services/doujin.service";


const defaultDoujin: Doujin = {
    id: 0,
    media_id: 0,
    title: {
        english: '',
        japanese: '',
        pretty: '',
    },
    upload_date: 0,
    tags: [],
    num_pages: 0,
    num_favorites: 0,
};



export default function Home({route, navigation}) {

    const [doujin, setDoujin] = React.useState<Doujin>(defaultDoujin);

    useEffect( () => {
        getDoujinById('372176').then((content) => {
            setDoujin(content);

        });
    }, []);


    return (
        <ScrollView bounces={false} style={tailwind('flex')}>
            <View style={tailwind('items-center overflow-hidden bg-white')}>
                <Image style={tailwind('w-full h-72')}
                       source={{uri: `${READ}/galleries/${doujin.media_id}/cover.jpg`}}
                />
                <View style={tailwind('py-5 text-center')}>
                    <Text style={tailwind('text-2xl font-bold text-gray-800')}>
                        {doujin.title.pretty}
                    </Text>
                    <Text style={tailwind('text-sm text-gray-700 mt-4')}>
                        日本語：{doujin.title.japanese}
                    </Text>
                    <Text style={tailwind('text-sm text-gray-700 mt-4')}>
                        English: {doujin.title.english}
                    </Text>
                    <Text style={tailwind('text-sm text-gray-700 mt-4')}>
                        Thể loại: {doujin.tags.map(tag => <View key={tag.id} style={tailwind('items-center rounded-lg bg-white border border-gray-200 p-px')}>
                        <Text style={tailwind('px-1 text-sm')}>{tag.name}</Text>
                    </View>)}
                    </Text>
                    <Text style={tailwind('text-sm text-red-400 mt-4')}>
                        Lượt thích: {doujin.num_favorites}
                    </Text>
                    <Text style={tailwind('text-sm text-gray-700 mt-4')}>
                        Số trang: {doujin.num_pages}
                    </Text>
                </View>
                <View  style={{flexDirection:'row', flexWrap:'wrap'}}>

                <View style={tailwind('m-2')}>
                    <Button onPress={() => navigation.push(DETAILS_SCREEN)} title="Yêu thích">

                    </Button>
                </View>

                    <View style={tailwind('m-2')}>
                        <Button title={"Đọc truyện ngay"} onPress={() => navigation.push(DETAILS_SCREEN, {
                            id: doujin.id,
                            otherId: 6969696,
                        })} />
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        'color': '#000',
    },
});
