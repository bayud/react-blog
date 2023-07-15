import {values} from "mobx";

export function cache_data(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
}

export function get_data(key) {
    return JSON.parse(sessionStorage.getItem(key));
}

export function clear_data(key) {
    cache_data(key, "");
}