import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
      <div>
          <div className='container'>
              <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-12'>
                  {/* Logo Section */}
                  <div>
                      <h1 className='text-lg font-bold text-purple-400'>
                          LOGO
                      </h1>
                      <p className='text-sm mt-3 text-gray-400'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. <br />
                          Scelerisque donec non pellentesque ut.
                      </p>
                  </div>

                  {/* About Section */}
                  <div className='text-white'>
                      <h2 className='text-base font-semibold mb-4'>About</h2>
                      <ul className='space-y-2 text-sm text-gray-300'>
                          <li>
                              <a href='#'>Product</a>
                          </li>
                          <li>
                              <a href='#'>Resource</a>
                          </li>
                          <li>
                              <a href='#'>Term & Condition</a>
                          </li>
                          <li>
                              <a href='#'>FAQ</a>
                          </li>
                      </ul>
                  </div>

                  {/* Company Section */}
                  <div className='text-white'>
                      <h2 className='text-base font-semibold mb-4'>Company</h2>
                      <ul className='space-y-2 text-sm text-gray-300'>
                          <li>
                              <a href='#'>Our Team</a>
                          </li>
                          <li>
                              <a href='#'>Partner With Us</a>
                          </li>
                          <li>
                              <a href='#'>Privacy & Policy</a>
                          </li>
                          <li>
                              <a href='#'>Features</a>
                          </li>
                      </ul>
                  </div>

                  {/* Contact Section */}
                  <div className='text-white'>
                      <h2 className='text-base font-semibold mb-4'>Contact</h2>
                      <p className='text-sm text-gray-300 mb-2'>+012 3456789</p>
                      <p className='text-sm text-gray-300 mb-4'>
                          adorableprogrammer@gmail.com
                      </p>
                      <div className='flex items-center space-x-4 text-xl'>
                          <FaYoutube />
                          <FaLinkedin />
                          <FaInstagram />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Footer
