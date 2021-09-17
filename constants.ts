export const DETAILS_SCREEN = 'Details';
export const HOME_SCREEN = 'Home';
export const DEMO_SCREEN = 'Demo';
export const USER_DETAILS_SCREEN = "User Details"
export const UPDATE_DETAILS_SCREEN = "Update user detail"
export const DELETE_DETAILS_SCREEN = "Delete"


export const BASE = "http://nhentai.net";
export const READ = "http://t.nhentai.net";
export const HEADERS = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Windows NT 5.1; rv:19.0) Gecko/20100101 Firefox/19.0",
};
export type User = {
    username: string;
    fullname: string;
    role: string;
};

export const users: User[] = [
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