import { removeCourse } from "../../actionCreators/courseActions";


const deleteCourse = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://content-management-server.vercel.app/course/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(removeCourse(id))
        }
    }
}

export default deleteCourse;