import {User} from "./models/users.model";
import {SignInUser} from "./models/signed-in-user.model";

export const DETAILS_SCREEN = 'Details';
export const HOME_SCREEN = 'Home';
export const DEMO_SCREEN = 'Demo';
export const USER_DETAILS_SCREEN = "User Details"
export const UPDATE_DETAILS_SCREEN = "Update user detail"
export const DELETE_DETAILS_SCREEN = "Delete"
export const CREATE_ACCOUNT_SCREEN = "Create account"
export const USER_LIST_SCREEN = "User list"

//css constant
export const BUTTON_COLOR = "#07FF8A"
export const BACKGROUND_COLOR = "#002333"
export const TEXT_COLOR_WHITE = "#fff";

export const MOCK_SIGNED_IN_USER: SignInUser = {
    fullname: 'Hatsune Miku',
    role: 'Vocaloid Signer',
};

export const MOCK_USERS: User[] = [
    {
        username: "admin",
        fullname: "Pham Cong Thanh",
        role: "Administrator",
    },
    {
        username: "admin2",
        fullname: "Lai Duc Hung",
        role: "Administrator",
    },
    {
        username: "user1",
        fullname: "NguyenTT",
        role: "User",
    },
];
