import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    const state = useSelector((state) => state);
    console.log(state);

    return (
        <div className='px-16'>
            {courses.map(course => console.log(course))}
        </div>
    );
};

export default Home;