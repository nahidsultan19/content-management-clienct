import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CourseCard from '../../components/CourseCard';
import { fetchCourseData } from '../../redux/thunk/courses/fetchCourses';



const Home = () => {
    // const [courses, setCourses] = useState([]);
    const courses = useSelector((state) => state.courses);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCourseData())
    }, [dispatch]);


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
            {courses.map(course => <CourseCard key={course._id} course={course} />)}
        </div>
    );
};

export default Home;