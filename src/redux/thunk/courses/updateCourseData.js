import { updateCourse } from "../../actionCreators/courseActions";

const updateCourseData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://content-management-server.vercel.app/course/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        });

        const data = await res.json();
        if (data.acknowledged) {
            dispatch(updateCourse(id))
        }
    }
}

export default updateCourseData;