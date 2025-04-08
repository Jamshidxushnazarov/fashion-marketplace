import { Col, Row, Statistic } from "antd";
import CountUp from "react-countup";
import hero1 from "../../assets/images/hero_img1.png";
import hero2 from "../../assets/images/hero_img2.png";
import hero3 from "../../assets/images/hero-img3.png";
import hero4 from "../../assets/images/hero_img4.png";
import hero5 from "../../assets/images/hero-img5.png";
import hero6 from "../../assets/images/hero_img6.png";
import hero7 from "../../assets/images/hero_img7.png";

const formatter = (value) => <CountUp end={value} separator=',' />;

const HeroSection = () => {
    return (
        <div className='hero py-16'>
            <div className='container'>
                <div className='relative flex  flex-col items-center mt-[40px]'>
                    {/* Chiziq (absolute, markazdan o‘tadi) */}
                    <div className='absolute top-1/2 opacity-10 left-1/2 transform -translate-x-1/2 w-[993px] h-[1px] bg-gray-300 z-0'></div>

                    {/* Buttonlar (ustida tursin, lekin fon bo‘lmasin) */}
                    <div className='flex space-x-[50px] z-10'>
                        <button className='bg-[#6C5DD3] text-white px-6 py-2 rounded-full'>
                            Main Collection
                        </button>
                        <button className='bg-[#493E52] text-white px-6 py-2 rounded-full'>
                            Creators Market
                        </button>
                    </div>
                </div>

                <div className='flex justify-between items-center  mt-[140px]'>
                    <div className='hero-content flex flex-col gap-y-4'>
                        <h1 className='text-5xl w-[350px] text-white font-bold'>
                            Clothes are the Spirit of Fashion
                        </h1>
                        <p className='text-lg w-[440px] text-white opacity-50 mt-4 max-w-md'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit.
                        </p>
                        <div>
                            <button className='mt-6 bg-[#6C5DD3] text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition'>
                                Explore Now
                            </button>
                            <button className='bg-[#493E52] text-white px-6 py-2 rounded-full'>
                                Create
                            </button>
                        </div>
                        <div>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Statistic
                                        title='Active Users'
                                        value={112893}
                                        formatter={formatter}
                                    />
                                </Col>
                                <Col span={12}>
                                    <Statistic
                                        title='Account Balance (CNY)'
                                        value={112893}
                                        precision={2}
                                        formatter={formatter}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className='hero-image flex justify-center gap-8'>
                        {/* 1-ustun */}
                        <div className='flex flex-col'>
                            <img src={hero1} alt='Hero'  className="mb-4"/>
                            <img src={hero2} alt='Hero' />
                            <img src={hero3} alt='Hero' />
                        </div>

                        {/* 2-ustun */}
                        <div className='flex flex-col gap-4'>
                            <img src={hero4} alt='Hero' />
                            <img src={hero5} alt='Hero' />
                            <img src={hero6} alt='Hero' />
                        </div>

                        {/* 3-ustun */}
                        <div className='flex flex-col justify-center'>
                            <img src={hero7} alt='Hero' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
