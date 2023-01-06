import { loadCourse } from "../../actionCreators/courseActions";

export const fetchCourseData = () => {
    return async (dispatch, getState) => {
        const res = await fetch('https://content-management-server.vercel.app/courses');
        const data = await res.json();

        if (data.length) {
            dispatch(loadCourse(data))
        }
    };
};