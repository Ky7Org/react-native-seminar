import React from "react";
import {
    Text,
    View,
} from "react-native";
import {styles} from "./styles/index.css";

type IProps = {

};

export const CreateUserScreen: React.FC<IProps> = () => {
    return <View style={styles.container}>
        <Text>
            Hello CreateUserScreen!
        </Text>
    </View>
};
