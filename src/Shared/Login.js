import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
//     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    
    
//     const { register, formState: { errors }, handleSubmit } = useForm();
    
//     const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useSignInWithEmailAndPassword(auth);
    
//     let signInError;
//     let navigate = useNavigate();
//     let location = useLocation();
//     let from = location.state?.from?.pathname || "/";

//     if (loading || gLoading) {
//         return <Loading></Loading>
//     }
//     if (error || gError) {
//         signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
//     }

//     if (user || gUser) {
//         navigate(from, { replace: true });
//     }
//     const onSubmit = data => {
//         console.log(data)
//         signInWithEmailAndPassword(data.email, data.password)
//         navigate(from, { replace: true });

//     }

// const navigateRegister=Event=>{
//     navigate('/register');
// }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    {signInError}
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                </form>
                <p><small>New Member ? <Link className='text-primary' to="/register">Create New Account</Link></small></p>
                <div className="divider">OR</div>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline"
                >Continue with Google</button>
            </div>
        </div>
    </div >
    //     <div className='flex justify-center items-center h-screen'>
    //     <div class="card w-96 bg-base-100 shadow-xl">
    //         <div class="card-body">
    //             <h2 class="text-2xl text-center font-bold">Login</h2>
    //             <form  onSubmit={handleSubmit(onSubmit)} >
    //                 <div class="form-control w-full max-w-xs">
    //                     <label class="label">
    //                         <span class="label-text">Email</span>

    //                     </label>
    //                     <input {...register("email",
    //                         {
    //                             required: {
    //                                 value: true,
    //                                 message: 'Email is required'
    //                             },
    //                             pattern: {
    //                                 value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    //                                 message: 'Provide e valid email address'
    //                             }
    //                         })} type="email"
    //                         placeholder="Your Email" name='email'
    //                         class="input input-bordered w-full max-w-xs" />
    //                     <label class="label">
    //                         {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    //                         {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    //                     </label>
    //                 </div>
    //                 <div class="form-control w-full max-w-xs">
    //                     <label class="label">
    //                         <span class="label-text">Password</span>

    //                     </label>
    //                     <input {...register("password",
    //                         {
    //                             required: {
    //                                 value: true,
    //                                 message: 'password is required'
    //                             },
    //                             minLength: {
    //                                 value: 6,
    //                                 message: 'must be 6 character or longer'
    //                             }
    //                         })} type="password"
    //                         placeholder="password" name='password'
    //                         class="input input-bordered w-full max-w-xs" />
    //                     <label class="label">
    //                         {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
    //                         {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}


    //                     </label>
    //                 </div>
    //                 {signInError}
    //                 <input className='btn w-full max-w-xs' value='login' type="submit" />
    //             </form>
    //             <p>New Member? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister} >Please Register</Link> </p>
    //             <div class="divider">OR</div>

    //             <button  onClick={() => signInWithGoogle()}  class="btn btn-primary">Continue with google</button>
    //         </div>
    //     </div>
    // </div>
    );
};

export default Login;