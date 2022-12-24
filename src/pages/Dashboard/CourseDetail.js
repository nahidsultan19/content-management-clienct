import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CourseDetail = () => {
    const course = useSelector(state => state.course);
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(detailCourseData())
    }, [])
    return (
        <div className='shadow-lg relative rounded-md border p-2 xy-2 flex flex-col w-80 mx-auto'>
            {course && <> <div className='mx-auto'>
                <img className='h-40 w-full rounded-md' src='' alt="" />
            </div>
                <h1 className='font-bold text-center text-indigo-900 text-xl py-3'>{course.title}</h1>
                <p className='text-center font-semibold mb-3'>{course.desc}</p></>}
        </div>
    );
};

export default CourseDetail;