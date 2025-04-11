import React from 'react';
import TryMonmatics from '../TryMonmaticsbtn/TryMonmatics';

const Home = () => {
    return (
        <>
            <div
                className="w-full min-h-screen lg:h-[600px] bg-cover bg-center bg-black bg-opacity-100"
                style={{ backgroundImage: "url('https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/hqqfwkfjm56jvv4ubvlh')" }}
            >
                <div className="">
                    <div className='md:flex md:px-10'>
                        {/* Left Content */}
                        <div className='px-12 pt-3 md:mt-10 lg:mt-20'>
                            <h1 className='text-3xl mt-8 font-bold text-transparent md:text-3xl lg:text-5xl bg-clip-text bg-gradient-to-r from-black to-black '>
                                ZameenJaidad is a platform you can sell buy property. You can also register as agent publish your ads
                            </h1>
                            <p className='pt-3 text-xs text-white sm:text-base md:pt-5'>
                                
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