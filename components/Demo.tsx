import React  from 'react';
import {Button, SectionList, Text, View} from "react-native";
import {User} from "../models/users.model";

type IProps = {
    users: User[];
};

export const Demo: React.FC<IProps> = ({users}: IProps) => {
    const getResult = () => {
        return alert(users.map(user => user.age))
    };

    return (
            <View>
                <Text>
                    SectionList example:
                    Ex: A: ABSWDW, AOOOJK | B: BWDWKDK, BWLLW</Text>
                <Button title="Get result" onPress={getResult}/>
                <SectionList sections={[
                    {
                        title: "", data: []
                    }
                ]} />
            </View>
        );
}
