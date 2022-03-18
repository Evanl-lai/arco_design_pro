import axios from "axios";

export interface NoticeList {
    title: string;
    data: string;
    text: string;
}

export function getHomeNotice() {
    return axios.get("/api/home/listnotice");
}