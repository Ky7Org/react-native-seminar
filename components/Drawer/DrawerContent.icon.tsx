import React from "react";
import {SPRING_GREEN_COLOR} from "../../constants";
import tailwind from "tailwind-rn";
import {
    UsersIcon,
    InformationCircleIcon, LogoutIcon, UserIcon, LoginIcon,
} from "react-native-heroicons/solid";
import {styles} from "./DrawerContant.css";
import {Text} from "react-native-paper";

export const UsersListIconComp: React.FC = () => ( <UsersIcon stroke={SPRING_GREEN_COLOR} size={31} style={tailwind('mr-2')} />);
export const UsersListIconCompText: React.FC = () => ( <Text style={styles.drawItemLabel}>LIST EMPLOYEE</Text> );
export const InformationCircleIconComp: React.FC = () => ( <InformationCircleIcon stroke={SPRING_GREEN_COLOR} size={31} style={tailwind('mr-2')}/> );
export const InformationCircleIconCompText: React.FC = () => ( <Text style={styles.drawItemLabel}>ABOUT</Text> );
export const LogOutIconComp: React.FC = () => ( <LogoutIcon stroke={SPRING_GREEN_COLOR} size={31} style={styles.mr2}/> );
export const LogOutIconCompText: React.FC = () => ( <Text style={styles.drawItemLabel}>LOG OUT</Text> );
export const UserIconComp: React.FC = () => ( <UserIcon stroke={SPRING_GREEN_COLOR} size={31} style={tailwind('mr-2')}/> );
export const UserIconCompText: React.FC = () => ( <Text style={styles.drawItemLabel}>MY INFORMATION</Text> );
export const LogInIconComp: React.FC = () => ( <LoginIcon stroke={SPRING_GREEN_COLOR} size={31} style={tailwind('mr-2')}/> );
export const LogInIconCompText: React.FC = () => ( <Text style={styles.drawItemLabel}>LOG IN</Text> );
