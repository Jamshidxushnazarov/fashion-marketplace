import React from "react";

const Question = () => {
    return (
        <div className= 'text-white min-h-screen flex items-center justify-center'>
            <div className='container w-full  px-4 pt-12'>
                {/* Title */}
                <div>
                    <div className='text-center mb-10'>
                    <h2 className='text-3xl md:text-4xl font-bold'>
                        Frequently Asked <br /> Question
                    </h2>
                    <p className='text-gray-300 mt-2'>Wanna Ask Something?</p>
                </div>

                {/* FAQ Inputs */}
                <div className='grid md:grid-cols-2 gap-8'>
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className='flex items-center justify-between border-b border-gray-500 pb-4'>
                            <input
                                type='text'
                                placeholder='Your question...'
                                className='bg-transparent w-full outline-none text-white placeholder-gray-400'
                            />
                            <span className='text-xl font-bold ml-4'>+</span>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
