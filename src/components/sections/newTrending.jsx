import React from "react";
import { cards } from "../../utils/trendingData";
import { useState } from "react";

const NewTrending = () => {
    const [cardStates, setCardStates] = useState(cards);

    const toggleLike = (id) => {
        const updatedCards = cardStates.map((card) =>
            card.id === id ? { ...card, liked: !card.liked } : card
        );
        setCardStates(updatedCards);
    };
    return (
        <>
            <div className='container'>
                <div>
                    <h2 className='text-white text-center text-3xl font-bold mt-[120px]'>
                        New & Trending
                    </h2>
                    <p className='text-[#888888]  text-center w-[323px] mt-[10px] mx-auto'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6'>
                    {cardStates.map((card) => (
                        <div
                            key={card.id}
                            className='bg-gradient-to-b from-[#2e033e] to-[#3b0d57] rounded-xl p-6 overflow-hidden shadow-md text-white'>
                            <img
                                src={card.image}
                                alt={card.title}
                                className='w-full object-cover'
                            />

                            <div className='pt-4 flex flex-col justify-between'>
                                <div className='flex justify-between text-sm text-gray-400'>
                                    <span>{card.author}</span>
                                    <span>Current Bid</span>
                                </div>

                                <div className='flex justify-between items-center mt-1'>
                                    <p className='text-white font-semibold'>
                                        {card.title}
                                    </p>
                                    <p className='text-white font-medium'>
                                        {card.currentBid}
                                    </p>
                                </div>

                                <div className='mt-4 flex justify-between items-center'>
                                    <button
                                        className='text-xl'
                                        onClick={() => toggleLike(card.id)}>
                                        {card.liked ? "❤️" : "🤍"}
                                    </button>
                                    <button className=' bg-[#6C5DD3] text-white px-4 py-2 rounded-lg font-semibold w-[250px]'>
                                        {card.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NewTrending;
