import React, { useState } from "react";
import { card as initialCardData } from "../../utils/brendsData"; // data faylingizni import qilasiz
import { BsPatchCheckFill } from "react-icons/bs";


const UpcomingBrands = () => {
    const [cards, setCards] = useState(initialCardData);

    const handleFollowToggle = (id) => {
        const updatedCards = cards.map((item) =>
            item.id === id ? { ...item, isFollowed: !item.isFollowed } : item
        );
        setCards(updatedCards);
    };

    return (
        <>
            <div className='container'>
                <div>
                    <h2 className='text-white text-center text-3xl font-bold mt-[120px]'>
                        Upcoming Brands
                    </h2>
                    <p className='text-[#888888]  text-center w-[323px] mt-[10px] mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div className='flex flex-wrap justify-center gap-6 pt-10'>
                    {cards.map(
                        (
                            {
                                id,
                                name,
                                bio,
                                isVerified,
                                avatar,
                                coverImage,
                                isFollowed,
                            },
                            index
                        ) => (
                            <div
                                key={id + index}
                                className='w-72 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-[#20202A] to-[#1E1240] text-white'>
                                <img
                                    src={coverImage}
                                    alt='cover'
                                    className='w-full h-40 object-cover'
                                />

                                <div className='flex flex-col items-center px-4 py-5'>
                                    <img
                                        src={avatar}
                                        alt='avatar'
                                        className='w-16 h-16 rounded-full  -mt-12 object-cover'
                                    />
                                    <h2 className='mt-2 font-semibold text-lg flex items-center gap-1'>
                                        {name}
                                        {isVerified && (
                                            <BsPatchCheckFill className='text-blue-700' />
                                        )}
                                    </h2>
                                    <p className='text-sm text-gray-300 text-center mt-1'>
                                        {bio}
                                    </p>

                                    <button
                                        onClick={() => handleFollowToggle(id)}
                                        className={`mt-4 px-4 py-2 rounded-full transition duration-300 font-semibold
                                         ${
                                             isFollowed
                                                 ? "border border-purple-500 text-purple-400 bg-transparent"
                                                 : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                         } `}>
                                        {isFollowed
                                            ? "+ Followed  "
                                            : " + Follow "}
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default UpcomingBrands;
