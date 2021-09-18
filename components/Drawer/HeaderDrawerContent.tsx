import React from "react";
import {View} from "react-native";
import {styles} from "./DrawerContant.css";
import {Avatar, Caption, Title} from "react-native-paper";
import {SignInUser} from "../../models/signed-in-user.model";

type IHeaderDrawerSectionProps = {
    signedInUser: SignInUser,
};

export const HeaderDrawerSection: React.FC<IHeaderDrawerSectionProps> = (props: IHeaderDrawerSectionProps) => {
    const {
        signedInUser,
    } = props;

    return <View style={styles.userAvatarSection}>
        <Avatar.Image size={80} source={require('../../assets/miku_profile.jpg')}/>
        <View style={styles.userDesignationSection}>
            <Title style={styles.title}>{signedInUser.fullname}</Title>
            <Caption style={styles.caption}>{signedInUser.role}</Caption>
        </View>
    </View>;
}
