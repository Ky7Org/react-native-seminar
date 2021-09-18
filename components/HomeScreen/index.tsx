import {
    View,
    Text, SafeAreaView,
} from "react-native";
import React from "react";
import {NavigationProp, Route} from "@react-navigation/native";
import {styles} from "./styles/index.css";

type IProps = {
  route: Route<any>;
  navigation: NavigationProp<any>;
};

export const Home: React.FC<IProps> = ({route, navigation}: IProps) => {
    return <SafeAreaView style={styles.container}>
        <View>
            <Text>
                React Native Seminar!
            </Text>
        </View>
    </SafeAreaView>;
};

