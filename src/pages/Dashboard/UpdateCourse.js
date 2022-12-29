import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import updateCourseData from '../../redux/thunk/courses/updateCourseData';

const UpdateCourse = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState(location.state.title);
    const [price, setPrice] = useState(location.state.price);
    const [desc, setDesc] = useState(location.state.desc);
    const [image, setImage] = useState(location.state.image);


    const submit = (event) => {
        event.preventDefault();
        const course = {
            title: event.target.title.value,
            image: event.target.image.value,
            price: event.target.price.value,
            desc: event.target.desc.value
        }
        dispatch(updateCourseData(course))
        navigate('/dashboard/course-list')
        console.log(course);

    }

    return (
        <div className='flex justify-center items-center h-full mt-3'>
            <form className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-gary-300' onSubmit={submit}>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="model">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} type="text" value={title} placeholder="Type here" className="input input-bordered w-full max-w-xs" name='title' id='title' />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='model' htmlFor='image'>
                        Image
                    </label>
                    <input onChange={(e) => setImage(e.target.value)} className='input input-bordered w-full max-w-xs' type='text' value={image} name='image' id='image' />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="model">Description</label>
                    <textarea onChange={(e) => setDesc(e.target.value)} class="textarea textarea-info" value={desc} placeholder="Description" id='desc'></textarea>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="model">Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} className='input input-bordered w-full max-w-xs' type="number" value={price} placeholder='Input Price' name='price' id='price' />
                </div>
                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex justify-between items-center w-full'>
                    <button class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">update now</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateCourse;