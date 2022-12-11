import { addCourse } from "../../actionCreators/courseActions";


const addCourseData = (course) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/course', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-type': 'application/json',
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(addCourse({
                _id: data.insertedId,
                ...course,
            }))
        }
    }
};

export default addCourseData;