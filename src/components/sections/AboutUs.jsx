import aboutUs from "../../assets/images/AboutUs.png"

const AboutUs = () => {
    return (
        <>
            <div className='max-w-6xl mx-auto'>
                <div>
                    <h2 className='text-white text-center text-3xl font-bold mt-[83px]'>
                        About Us
                    </h2>
                    <p className='text-[#888888]  text-center w-[323px] mt-[10px] mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='flex mt-[91px] justify-between'>
                        <img src={aboutUs} alt='about-img' />

                        <div className='flex flex-col pt-20'>
                            <h2 className='text-white text-2xl font-bold'>
                                Fashion That Speaks
                            </h2>

                            <p className='text-[#95929F] w-[517px] mt-4 leading-9'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam eu turpis molestie,
                                dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem
                                sollicitudin lacus, ut interdum tellus elit sed
                                risus. Maecenas eget condimentum velit, sit amet
                                feugiat lectus. Class aptent taciti sociosqu ad
                                litora torquent per conubia nostra, per inceptos
                                himenaeos. Praesent auctor purus luctus enim
                                egestas, ac scelerisque ante pulvinar.
                            </p>

                            <button className='w-[160px] inline-block mt-6 bg-[#6C5DD3] text-white px-6 py-2 rounded font-semibold hover:opacity-90 transition'>
                                Show more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
