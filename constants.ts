import {User} from "./models/users.model";

export const HOME_SCREEN = 'Home';
export const USER_DETAILS_SCREEN = "User Details"
export const LOGIN_SCREEN  = "Login";
export const CREATE_ACCOUNT_SCREEN = "Create account"
export const USER_LIST_SCREEN = "User list"
export const UPDATE_USER_SCREEN = "Update user";
export const GLOBAL_DRAWER = "Global Drawer";

//Color constant
export const SPRING_GREEN_COLOR = "#07FF8A"
export const DAINTREE_COLOR = "#002333"
export const SOLID_WHITE_COLOR = "#ffffff";
export const TORCH_RED_COLOR = "#ff0033";
export const TUNDORA_COLOR = "#424242";

export const MOCK_USERS: User[] = [
    {
        username: 'miku',
        password: '1234',
        fullname: 'Hatsune Miku',
        birthDate: 1191085200000,
        height: 159,
        address: 'Sapporo, Japan',
        phone: '0356773***',
        email: 'miku.work@gmail.com',
        role: 'Administrator',
        cv: `Hatsune Miku was the first Vocaloid developed by Crypton Future Media after they handled the release of the Yamaha vocal Meiko and Kaito. Miku was intended tobe the first of a series of Vocaloids called the "Character Vocal Series", which included Kagamine Rin/Len and Megurine Luka. Each had a particular concept and vocal direction. She was built using Yamaha's Vocaloid 2 technology, and later updated to newer engine versions. She was created by taking vocal samples from voice actress Saki Fujita at a controlled pitch and tone. Those samples all contain a single Japanese phonic that, when strung together, createsfull lyrics and phrases. The pitch of the samples was to be altered by the synthesizer engineand constructed into a keyboard-style instrument within the Vocaloid software.`,
    },
    {
        username: "thanhpc",
        password: '1234',
        fullname: "Pham Cong Thanh",
        role: "Administrator",
        birthDate: 1191085200000,
        height: 159,
        address: 'Sapporo, Japan',
        phone: '0356773***',
        email: 'miku.work@gmail.com',
        cv: 'ThanhPC3',
    },
    {
        username: 'hoadnt',
        password: '1234',
        fullname: "Doan Nguyen Thanh Hoa",
        role: "Administrator",
        birthDate: 1191085200000,
        height: 159,
        address: 'Sapporo, Japan',
        phone: '0356773***',
        email: 'miku.work@gmail.com',
        cv: 'ThanhPC3',
    },
    {
        username: "hungld",
        password: '1234',
        fullname: "Lai Duc Hung",
        role: "Administrator",
        birthDate: 1191085200000,
        height: 159,
        address: 'Sapporo, Japan',
        phone: '0356773***',
        email: 'miku.work@gmail.com',
        cv: 'HungLD',
    },
    {
        username: "nguyentt",
        password: '1234',
        fullname: "NguyenTT",
        role: "User",
        birthDate: 1191085200000,
        height: 159,
        address: 'Sapporo, Japan',
        phone: '0356773***',
        email: 'miku.work@gmail.com',
        cv: 'NguyenTT',
    },
];
