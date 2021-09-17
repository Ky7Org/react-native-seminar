import React from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
} from "react-native-paper"
import {BACKGROUND_COLOR, BUTTON_COLOR, TEXT_COLOR_WHITE, USER_DETAILS_SCREEN, USER_LIST_SCREEN} from "../../constants";
import {
    InformationCircleIcon,
    LoginIcon,
    LogoutIcon,
    UserIcon,
    UsersIcon
} from "react-native-heroicons/solid";
import tailwind from "tailwind-rn";


export default function DrawerContent(props){

        return (
            <View style={{flex: 1, backgroundColor: BACKGROUND_COLOR}}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection: "row", marginTop: 15}}>
                                <Avatar.Image
                                    size={80}
                                    source={require('../../assets/miku_profile.jpg')}
                                />
                                <View style={{marginLeft: 15, flexDirection: "column"}}>
                                    <Title style={styles.title}>Hatsune Miku</Title>
                                    <Caption style={styles.caption}>
                                        Vocaloid Singer
                                    </Caption>
                                </View>
                            </View>
                            <Drawer.Section style={styles.drawer}>
                                <DrawerItem
                                    icon={ () => (
                                        <LoginIcon stroke={BUTTON_COLOR} size={31} style={tailwind('mr-2')}/>
                                    )}
                                    label={() => <Text style={styles.drawItemLabel}>LOG IN</Text>}
                                    onPress={() =>{}}
                                />
                            </Drawer.Section>
                            <Drawer.Section>
                                <DrawerItem
                                    icon={ () => (
                                        <UserIcon stroke={BUTTON_COLOR} size={31} style={tailwind('mr-2')}/>
                                    )}
                                    label={() => <Text style={styles.drawItemLabel}>MY INFORMATION</Text>}
                                    onPress={() =>{props.navigation.navigate(USER_DETAILS_SCREEN)}}
                                />
                            </Drawer.Section>
                            <Drawer.Section>
                                <DrawerItem
                                    icon={ () => (
                                        <UsersIcon stroke={BUTTON_COLOR} size={31} style={tailwind('mr-2')}/>
                                    )}
                                    label={() => <Text style={styles.drawItemLabel}>LIST EMPLOYEE</Text>}
                                    onPress={() =>{props.navigation.navigate(USER_LIST_SCREEN)}}
                                />
                            </Drawer.Section>
                            <Drawer.Section>
                                <DrawerItem
                                    icon={ () => (
                                        <InformationCircleIcon stroke={BUTTON_COLOR} size={31} style={tailwind('mr-2')}/>
                                    )}
                                    label={() => <Text style={styles.drawItemLabel}>ABOUT</Text>}
                                    onPress={() =>{Linking.openURL('https://www.facebook.com/profile.php?id=100009318392240')}}
                                />
                            </Drawer.Section>
                        </View>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <Drawer.Section>
                        <DrawerItem
                            icon={ () => (
                                <LogoutIcon stroke={BUTTON_COLOR} size={31} style={tailwind('mr-2')}/>
                            )}
                            label={() => <Text style={styles.drawItemLabel}>LOG OUT</Text>}
                            onPress={() =>{}}
                        />
                    </Drawer.Section>
                </Drawer.Section>
            </View>
        );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: "bold",
        color: TEXT_COLOR_WHITE
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: TEXT_COLOR_WHITE
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        ...tailwind('ml-6'),
        marginBottom: 15,
        borderTopColor: "#000",
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    drawItemLabel:{
        ...tailwind('-ml-6'),
        color: TEXT_COLOR_WHITE, fontWeight: "bold",
    },
    drawer: {
        ...tailwind('mt-20')
    }

})
