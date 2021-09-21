import React, {useContext} from "react";
import {View} from "react-native";
import {styles} from "./DrawerContant.css";
import {Avatar, Caption, Title} from "react-native-paper";
import {SignInUser} from "../../models/signed-in-user.model";
import { AuthContext } from "../../utils/auth.context";

type IHeaderDrawerSectionProps = {
};

export const HeaderDrawerSection: React.FC<IHeaderDrawerSectionProps> = (props: IHeaderDrawerSectionProps) => {

    const {auth} = useContext(AuthContext);

    return <View style={styles.userAvatarSection}>
        <Avatar.Image size={80} source={require('../../assets/miku_profile.jpg')}/>
        <View style={styles.userDesignationSection}>
            <Title style={styles.title}>{auth.fullname}</Title>
            <Caption style={styles.caption}>{auth.role}</Caption>
        </View>
    </View>;
}
