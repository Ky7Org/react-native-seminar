import {Alert, Button, FlatList, ScrollView, Text, TextInput, View} from "react-native";
import React, {Props} from "react";
import {NavigationProp, Route} from "@react-navigation/native";
import tailwind from "tailwind-rn";
import {USER_DETAILS_SCREEN} from "../constants";
import {User} from "../models/users.model";

type DetailsComponentProps = {
    route: Route<any>;
    navigation: NavigationProp<any>;
    users: User[];
};

export const Detail: React.FC<DetailsComponentProps> = ({route, navigation, users}: DetailsComponentProps) => {

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
        <Button title="View detail" onPress={() => navigation.navigate(USER_DETAILS_SCREEN, {
            username: "son"
        })}/>
    </ScrollView>
}
