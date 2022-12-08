import { loadCourse } from "../../actionCreators/courseActions";

export const fetchCourseData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/courses');
        const data = await res.json();

        if (data.length) {
            dispatch(loadCourse(data))
        }
    };
};