import {BASE, HEADERS} from "../constants";

export const getDoujinById = async (id) => {
    const response = await fetch(`${BASE}/api/gallery/${id}`,
        {
            headers: HEADERS,
        });
    return await response.json();
};