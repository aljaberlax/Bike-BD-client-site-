import React from 'react';
import mypic from '../DashBoard/600_600.jpg'
const MyProfile = () => {
    return (
        <div className='flex flex-col justify-center min-h-full'>
            <div className='grid grid-cols-2 gap-10'>
                <div className='flex justify-center'>
                    <img className='text-center rounded-full shadow-xl mt-10' src={mypic} alt="" />

                </div>


            </div>
            <div className='container'>
                <h1 className='text-3xl text-center'>My Profile</h1>
                <h1 className='text-xl text-center'> Email : aljaberlax@gmail.com</h1>
                <h3 className='py-5'>EDUCATION</h3>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='justify-center py-5'>
                        Eastern University <br />
                        Degree: B.sc In Computer Science and Engineering <br />
                        Year: 2021 <br />
                        CGPA: 3.46 out of 4
                    </div>
                    <div className='justify-center py-5'>
                        <h1>My Skils</h1>
                        <p>I am learning React Development . i also know Networking (CCNA) . Know JavaScript , HTML5,CSS,NodeJs. Have knowledge in Mongodb (No SQL)</p>
                        <p>
                            MY Mission: I want to be a MERN Full Stack Developer.
                        </p>
                    </div>
                    <div className='justify-center py-5'>
                        <h1>My Live Projects</h1>
                        <a className='text-primary' href="https://bike-bd-154c6.web.app/" target='_blank'>Bike Bd</a> <br />
                        <a className='text-primary' href="https://pc-builder-bd-b948d.web.app/" target='_blank'>PC Builder BD</a> <br />
                        <a className='text-primary' href="https://kgf-2.netlify.app/" target='_blank'>KGF-2</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;