import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const AddReviews = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        const url = `https://morning-harbor-44069.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                window.alert('Review successfully added')
            })
    }
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl text-center'> ADD Your Review</h1>
            <div className='card border-2 w-3/4 flex  shadow-2xl'>
                <form className=' p-10 justify-center items-center flex flex-col shadow-2xl' onSubmit={handleSubmit(onSubmit)}  >
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your name?</span>

                        </label>
                        <input type="text" required placeholder="Your Name" class="input input-bordered w-full max-w-xs"  {...register("name", { required: true, maxLength: 20 })} />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Image Url</span>

                        </label>
                        <input required type="text" placeholder="Image URL" class="input input-bordered w-full max-w-xs"{...register("img")} />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Country</span>

                        </label>
                        <input type="text" required placeholder="Your Country" class="input input-bordered w-full max-w-xs" {...register("country")} />

                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Your Comment</span>

                        </label>
                        <textarea placeholder="Comment Here" class="input input-bordered w-full max-w-xs" {...register("review")} required></textarea>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Retings</span>

                            </label>
                            <input type="text" placeholder="add ratings 1 to 5" class="input input-bordered w-full max-w-xs" {...register("ratings")} required />

                        </div>
                    </div>
                    <input type="submit" className='btn btn-secondary my-5' value="Post Your Review" />

                </form>
            </div>
        </div>
    );
};

export default AddReviews;