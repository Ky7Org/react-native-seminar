import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, SectionList, Text, TextInput, View} from "react-native";

export default function Demo(){
    const [text, setText] = useState("");

    //mỗi user trong user list , gồm: name và age
    //nếu kí tự đầu tiên của name giông nhau => group lại thành 1 nhóm
    const [userList, setUserList] = useState([

        {
            name: "ABS D WDHN",
            age: 23
        },
        {
            name: "A J WJ JW",
            age: 22
        },
        {
            name: "AL LW PW P",
            age: 23
        },
        {
            name: "Ax xxxxx",
            age: 23
        },
        {
            name: "Bpwwpp",
            age: 23
        },
        {
            name: "Bjwjw",
            age: 23
        },
    ]);

    function getResult() {
        return alert(userList.map(user => user.age))
    }

    function groupUsersByName() {
        return userList.filter((user) => {user.name.charAt(0)})
    }

    return (
            <View>
                <Text>
                    SectionList example:
                    Ex: A: ABSWDW, AOOOJK | B: BWDWKDK, BWLLW</Text>
                <Button title="Get result" onPress={getResult}></Button>
                <SectionList sections={[
                    {
                        title: "", data: []
                    }
                ]} />


            </View>
        );
}
