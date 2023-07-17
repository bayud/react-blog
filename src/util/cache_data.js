import {values} from "mobx";


const BLOG_CACHE_KEY = "blog_cache_key";

function cache_data(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

function get_data(key) {
    return JSON.parse(sessionStorage.getItem(key));
}

export const cache_data_content = (value) => cache_data(BLOG_CACHE_KEY, value);
export const get_data_content = () => get_data(BLOG_CACHE_KEY);
export const clear_data_content = () => cache_data(BLOG_CACHE_KEY, "");
