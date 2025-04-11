// Header.jsx
import { useState, useRef, useEffect } from "react";
import { FiSearch, FiBell, FiMessageSquare } from "react-icons/fi";
import LogoSite from "../../assets/images/Logo.svg";
import UserSute from "../../assets/images/User.svg";
import Notification from "../../assets/images/Notification.svg";
import Message from "../../assets/images/Message.svg";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);

    // dropdown outside click close
    const moreRef = useRef();
    const userRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if (moreRef.current && !moreRef.current.contains(e.target)) {
                setIsMoreOpen(false);
            }
            if (userRef.current && !userRef.current.contains(e.target)) {
                setIsUserOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <header className='max-w-[1365px] mx-auto px-6 py-3  text-white flex items-center justify-between '>
            {/* Left - Logo */}
            <img src={LogoSite} alt='logo' />

            <div className='relative'>
                <input
                    type='text'
                    placeholder='Search items, fashion, collection and users'
                    className='px-10 py-2 w-[312px] rounded-full bg-transparent placeholder:text-sm font-medium text-white focus:outline-none border border-white'
                />
                <FiSearch className='absolute left-3 top-2.5 h-5 w-5 text-gray-300' />
            </div>

            {/* Nav */}
            <nav className='flex items-center gap-8 text-sm font-medium'>
                <a href='#' className='hover:text-gray-300'>
                    Home
                </a>
                <a href='#' className='hover:text-gray-300'>
                    Explore
                </a>
                <a href='#' className='hover:text-gray-300'>
                    Personal Collection
                </a>
                <a href='#' className='hover:text-gray-300'>
                    Drops
                </a>

                {/* More Dropdown */}
                <div className='relative' ref={moreRef}>
                    <button
                        onClick={() => setIsMoreOpen(!isMoreOpen)}
                        className='hover:text-gray-300'>
                        More ▾
                    </button>
                    {isMoreOpen && (
                        <div className='absolute top-full left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg py-2 z-50'>
                            {[
                                "Stats",
                                "Shows",
                                "About Us",
                                "Community",
                                "Creator",
                                "Edit",
                                "Setting",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href='#'
                                    className='block px-4 py-2 hover:bg-gray-100 text-sm'>
                                    {item}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* Right - Icons and Auth */}
            <div className='flex items-center gap-4'>
                <img src={Notification} alt='Notification' />
                <img src={Message} alt='Message' />

                <button className='bg-transparent border border-white px-6 py-1.5 rounded hover:bg-white hover:text-[#181E41] transition'>
                    Wallet
                </button>

                {/* User Dropdown */}
                <div className='relative' ref={userRef}>
                    <button
                        onClick={() => setIsUserOpen(!isUserOpen)}
                        className='flex items-center gap-1'>
                        ▾<img src={UserSute} alt='User' />
                    </button>
                    {isUserOpen && (
                        <div className='absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg py-2 z-50 w-32'>
                            <Link to="/login" className='block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm'>
                                Sign In
                            </Link>
                            <Link to="/register" className='block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm'>
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
