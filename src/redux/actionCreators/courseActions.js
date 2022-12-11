import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes"

export const loadCourse = (data) => {
    return {
        type: GET_CONTENT,
        payload: data
    }
};

export const addCourse = (data) => {
    return {
        type: ADD_CONTENT,
        payload: data
    }
};

export const removeCourse = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}