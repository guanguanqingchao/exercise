import {
    ADD_ARTICLE,
    FOUND_BAD_WORD,
    DATA_LOADED
} from "./constant";

import 'isomorphic-fetch';


export function badWord(payload) {
    return {
        type: FOUND_BAD_WORD,

    }
}
export function addArticle(payload) {
    return {
        type: ADD_ARTICLE,
        payload
    };
}

//触发一个异步的action
// export function getData() {
//     return function (dispatch) {
//         return fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({
//                     type: "DATA_LOADED",
//                     payload: json
//                 });
//             });
//     };
// }

export function getData() {
    return {
        type: "DATA_REQUESTED"
    };
}