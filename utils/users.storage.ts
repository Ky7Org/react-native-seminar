import {User} from "../models/users.model";
import {AsyncStorage} from "react-native";

export const storeUser = async (loginUser: User) => {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(loginUser));
    } catch (error) {
        console.log(error);
    }
}
