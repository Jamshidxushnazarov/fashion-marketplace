import money from "../../assets/images/Allcollection_money.svg";
import nft from "../../assets/images/Allcollection_NFT.svg";
import transit from "../../assets/images/Allcollection_transit.svg";
import { cards } from "../../utils/collectionData";
import { useState } from "react";



const Collection = () => {
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
                        All Collection
                    </h2>
                    <p className='text-[#888888]  text-center w-[323px] mt-[10px] mx-auto'>
                        Worlds First Layer 2 Fashion Marketplace
                    </p>
                    <div className='flex mt-[75px] max-w-[941px] justify-between mx-auto '>
                        <div className='flex flex-col items-center'>
                            <img src={money} alt='money-icon' />
                            <p className='text-white'>No Gas Fees</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={nft} alt='nft-icon' />
                            <p className='text-white'>Carbon Netural NFTs</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={transit} alt='transit-icon' />
                            <p className='text-white'>
                                Fast And Easy Transactions
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-wrap justify-between gap-4 pt-[162px]'>
                    <button className='bg-[#6C5DD3] text-white px-10 py-1 rounded-lg'>
                        All Collections
                    </button>
                    <button className='bg-[#6C5DD3] text-white px-10 py-1 rounded-lg'>
                        Verified Brands
                    </button>
                    <button className='bg-[#6C5DD3] text-white px-10 py-1 rounded-lg'>
                        Verified Artists
                    </button>
                    <button className='bg-[#6C5DD3] text-white px-10 py-1 rounded-lg'>
                        New Drops
                    </button>
                    <button className='bg-[#6C5DD3] text-white px-10 py-1 rounded-lg'>
                        Live Shows
                    </button>
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

export default Collection;
