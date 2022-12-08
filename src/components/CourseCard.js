import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className='shadow-lg relative rounded-md border p-2 flex flex-col '>
            <div className='mx-auto'>
                <img className='h-40 w-full rounded-md' src={course.image} alt="" />
            </div>
            <h1 className='font-bold text-center text-indigo-900 text-xl py-3'>{course.title}</h1>
            <p className='text-center font-semibold mb-3'>{course.desc}</p>
            <button className='btn'>Course Detail</button>
        </div>
    );
};

export default CourseCard;