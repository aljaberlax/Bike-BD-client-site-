import React from 'react';

const BusinessSummery = () => {
    return (
        <div>
            <div>
                <h1 className=' text-center text-6xl text-secondary uppercase font-mono font-bold'>Million Business Trust Us</h1>
                <p className='uppercase text-center text-2xl'>try to understant users expection </p>
            </div>
            <div className='flex justify-center '>
                <div className='grid sm:grid-cols-1 lg:grid-cols-3 shadow-2xl mt-10 p-10 w-3/4 rounded-3xl '>
                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">Total Likes</div>
                        <div class="stat-value text-primary">25.6K</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div class="stat-title">New Users</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='shadow-2xl my-10 w-3/4 text-center flex flex-col  items-center p-5  rounded-3xl'>
                    <div>
                        <h1 className='text-secondary font-bold text-3xl'>Have any question about us or get a product request ?</h1>
                        <h1 className='text-xl'>Dont hesitate to contact us</h1>
                    </div>
                    <div className='flex p-5'>
                        <button class="btn btn-success text-white mr-5">Request for Quote</button>
                        <button class="btn btn-active text-white">Contact us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;