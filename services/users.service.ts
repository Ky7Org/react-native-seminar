import {Credentials} from "../models/credentials.model";
import {User} from "../models/users.model";
import {storeUser} from "../utils/users.storage";
import {MOCK_USERS} from "../constants";

export const checkLogin = async ({email, password}: User) => {
    const loginUser: User = MOCK_USERS.find(user => user.username === email) ?? MOCK_USERS[0];
    if (loginUser.password === password) {
        await storeUser(loginUser);
    } else {
        throw new Error();
    }
}
