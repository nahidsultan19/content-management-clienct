import { updateCourse } from "../../actionCreators/courseActions";

const updateCourseData = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/course/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        });

        const data = await res.json();
        if (data.acknowledged) {
            dispatch(updateCourse())
        }
    }
}

export default updateCourseData;