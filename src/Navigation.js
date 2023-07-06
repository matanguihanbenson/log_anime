import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from './Game.png';

function Navigation() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.nav');
      if (navbar && window.pageYOffset > 0) {
        navbar.classList.add('bg-white-scroll');
      } else if (navbar) {
        navbar.classList.remove('bg-white-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/log-anime/search/${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <div>
      <nav className='w-full h-20 nav fixed inset-0 grid grid-cols-12 items-center px-6'>
        <div className='md:col-span-2 col-span-6'>
          <Link to="/log-anime">
            <div className='w-full flex gap-2'>
              <img src={image} className='h-10 ' alt="" />
              <p className='text-white font-bold text-3xl'>log.<span className='animate-pulse !duration-100 transition-opacity inline-block'>_</span></p>
            </div>
          </Link>
        </div>
        <div className='relative w-full h-20 col-span-6 flex justify-center items-center'>
          <form onSubmit={handleSearch} className="md:w-[50%] w-full relative h-10">
            <input
              type="text"
              placeholder='Search...'
              className='rounded-md h-full w-full outline-none focus:outline-none indent-3'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit" className='w-10 h-full bg-[--color-5] absolute top-0 right-0 flex items-center justify-center rounded-r-md'>
              <i className="fa fa-search w-10 h-10 flex items-center justify-center"></i>
            </button>
          </form>
        </div>
        <div className='md:col-span-4 hidden md:block'>
          <div className='flex justify-end'>
            <p className='h-10 w-max px-3 bg-[--color-5] flex items-center justify-center text-white rounded-md'>Login</p>
          </div>
        </div>
      </nav>

      <br />
    </div>
  );
}

export default Navigation;
