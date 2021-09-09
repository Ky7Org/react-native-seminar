import {DoujinTag} from "./doujin-tag.model";

export type Doujin = {
    id: number,
    media_id: number,
    title: {
        english: string,
        japanese: string,
        pretty: string,
    },
    upload_date: number,
    tags: DoujinTag[],
    num_pages: number,
    num_favorites: number,
};