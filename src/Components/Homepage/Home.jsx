import React from 'react';
import TryMonmatics from '../TryMonmaticsbtn/TryMonmatics';

const Home = () => {
    return (
        <>
            <div
                className="w-full h-full lg:h-[600px] bg-cover bg-center"
                style={{ backgroundImage: "url('https://arkaaconsultants.com/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FKvC4qoCjZaXRiBrc_a6Y9A%2F20d5ecf5-1403-4d20-67c0-6b88b537a000%2Fpublic&w=3840&q=75')" }}
            >
                <div className="">
                    <div className='md:flex md:px-10'>
                        {/* Left Content */}
                        <div className='px-12 pt-3 md:mt-10 lg:mt-20'>
                            <h1 className='text-2xl font-bold text-transparent md:text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-black to-blue-800'>
                                ZameenJaidad is a platform you can sell buy property. You can also register as agent publish your ads
                            </h1>
                            <p className='pt-3 text-xs text-white sm:text-base md:pt-5'>
                                The only platform you'll ever need to run your business: <br /> 
                                integrated apps, kept simple, and adored by users.
                            </p>
                            <div className='hidden mt-4 md:flex'>
                                <TryMonmatics />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className='mx-10 mt-16 md:max-w-full sm:mx-w-20 md:mx-2'>
                            <div className='flex justify-center items-center md:max-w-full mt-7 lg:w-[600px] sm:mx-w-20 mx-auto'>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* Additional sections */}
            </div>
        </>
    );
};

export default Home;