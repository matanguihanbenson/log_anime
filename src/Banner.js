import React from 'react';

function Banner() {
  return (
    <div className='h-[500px] w-full relative'>
      
      <img
        src='https://www.pngall.com/wp-content/uploads/13/Demon-Slayer.png'
        alt=''
        className='z-10 absolute object-cover w-[50%] h-[115%] top-[-30px] right-0' style={{imageRendering:'optimizeSpeed'}}
      />
      <div className='h-full w-full bg-[--color-5] rounded-lg md:mb-0 relative overflow-hidden z-0 flex justify-center flex-col px-12' style={{background: `linear-gradient(to top, rgba(0,0,0,.9),rgba(0,0,0,.9)), url(https://pbs.twimg.com/media/FJAJXixXsAUpPvX.jpg:large)`}}>
      <div className='w-14 h-full absolute left-0 z-50 flex gap-4 flex-col justify-center items-center'>
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-transparent border-2 border-white rounded-full"></div>
        <div className="w-3 h-3 bg-transparent border-2 border-white rounded-full"></div>
      </div>
          <h1 className='text-9xl font-black text-white w-[6ch]'>Demon Slayer</h1>
          <div className='mt-4'>
            <button className='h-10 w-max px-2 bg-white rounded-md'>Watch Now <i className="ml-2 fa fa-play"></i></button>
          </div>
      </div>
      
    </div>
  );
}

export default Banner;
