import {User} from "./models/users.model";
import {SignInUser} from "./models/signed-in-user.model";

export const HOME_SCREEN = 'Home';
export const USER_DETAILS_SCREEN = "User Details"
export const LOGIN_SCREEN  = "Login";
export const CREATE_ACCOUNT_SCREEN = "Create account"
export const USER_LIST_SCREEN = "User list"

//Color constant
export const SPRING_GREEN_COLOR = "#07FF8A"
export const DAINTREE_COLOR = "#002333"
export const SOLID_WHITE_COLOR = "#ffffff";
export const TORCH_RED_COLOR = "#ff0033";
export const TUNDORA_COLOR = "#424242";

export const MOCK_SIGNED_IN_USER: SignInUser = {
    fullname: 'Hatsune Miku',
    role: 'Vocaloid Signer',
};

export const MOCK_USERS: User[] = [
    {
        username: "admin",
        password: '1234',
        fullname: "Pham Cong Thanh",
        role: "Administrator",
    },
    {
        username: "admin2",
        password: '1234',
        fullname: "Lai Duc Hung",
        role: "Administrator",
    },
    {
        username: "user1",
        password: '1234',
        fullname: "NguyenTT",
        role: "User",
    },
];
