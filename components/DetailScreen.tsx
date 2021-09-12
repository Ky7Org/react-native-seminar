import {Alert, Button, FlatList, ScrollView, Text, TextInput, View} from "react-native";
import React from "react";
import {NavigationProp, Route} from "@react-navigation/native";
import tailwind from "tailwind-rn";
import {users} from "../constants";

type NavgiationType = {
    route: Route<any>;
    navigation: NavigationProp<any>;
};

export default function Detail({route, navigation}: NavgiationType) {
    const {id, otherId} = route.params;

    const confirm = () => {
        return Alert.alert(
            "Are your sure?",
            "Are you sure you want to remove this user?",
            [
                {
                    text: "Yes",
                    onPress: () => {
                        alert("ok");
                    },
                },
                {
                    text: "No",
                },
            ]
        );
    }

    const renderUser = ({item}) => (
          <View style={tailwind('p-4')}>
              <View style={tailwind('flex rounded-lg bg-pink-500 p-8 flex-col')}>
                  <View style={tailwind('flex-grow')}>
                      <Text style={tailwind('text-base text-white')}>
                          {item.username}
                      </Text>
                  </View>
              </View>
          </View>
        );


    return <ScrollView>
        <FlatList
    data={users}
    keyExtractor={user => user.username}
    renderItem={renderUser}/>

        <Button
            onPress={() => {
             confirm()
            }}
            title="Sum up"/>
    </ScrollView>
}