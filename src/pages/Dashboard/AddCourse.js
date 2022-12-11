import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addCourseData from '../../redux/thunk/courses/addCourseData';

const AddCourse = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        const course = {
            title: data.title,
            image: data.image,
            price: data.price,
            desc: data.desc
        }
        dispatch(addCourseData(course))
        console.log(course);
    }

    return (
        <div className='flex justify-center items-center h-full'>
            <form className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white' onSubmit={handleSubmit(submit)}>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="model">Title</label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" name='title' id='title'{...register("title")} />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='model' htmlFor='image'>
                        Image
                    </label>
                    <input className='input input-bordered w-full max-w-xs' type='text' name='image' id='image' {...register("image")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="model">Description</label>
                    <textarea class="textarea textarea-info" placeholder="Description" id='desc' {...register("desc")}></textarea>
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label htmlFor="model">Price</label>
                    <input className='input input-bordered w-full max-w-xs' type="number" placeholder='Input Price' name='price' id='price'{...register("price")} />
                </div>
                <div className='flex flex-col w-full max-w-xs'></div>
                <div className='flex justify-between items-center w-full'>
                    <button class="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-md">submit</button>
                </div>
            </form>

        </div>
    );
};

export default AddCourse;