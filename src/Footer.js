import React from 'react';
import { Link } from 'react-router-dom';
import image from './Game.png';
function Footer() {
  return (
    <div className='px-6 flex justify-between flex-col md:flex-row gap-4 items-center h-max py-6 mt-8 w-full bg-[--color-3] absolute left-0 right-0'>
        <Link to="/log-anime">
            <div className='w-full flex gap-2'><img src={image} className='h-10 ' alt="" /><p className='text-white font-bold text-3xl'>log.<span className='animate-pulse !duration-100 transition-opacity inline-block'>_</span></p></div>
          </Link>
          <p className='text-white'>Project by <a href='https://www.facebook.com/bensonmark1109' target='_blank' className='underline'>Mark Benson Matanguihan</a></p>
        <div className='w-[300px] flex justify-center flex-col'>
            <p className='mb-2 text-white text-center md:text-left w-full'>Made with</p>
            <div className=' w-full flex flex-row gap-4 justify-center'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/862px-React-icon.svg.png" className='h-8' alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" className='h-8' alt="" />
                <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" className='h-8' alt="" />
                <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className='h-8' alt="" />
                <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" className='h-8' alt="" />
            </div>
        </div>
    </div>

  )
}

export default Footer;