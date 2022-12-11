import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    courses: [],
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                courses: action.payload,
            }
        case ADD_CONTENT:
            return {
                ...state,
                courses: [...state.courses, action.payload]
            }

        case DELETE_CONTENT:
            return {
                ...state,
                courses: state.courses.filter(course => course._id !== action.payload)
            }
        default:
            return state;
    }
};

export default courseReducer;