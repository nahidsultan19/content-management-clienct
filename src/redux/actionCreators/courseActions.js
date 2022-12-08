import { GET_CONTENT } from "../actionTypes/actionTypes"

export const loadCourse = (data) => {
    return {
        type: GET_CONTENT,
        payload: data
    }
};