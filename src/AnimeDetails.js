import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

function AnimeDetails() {
  const { id } = useParams();
  const [animeDetails, setAnimeDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.consumet.org/anime/gogoanime/info/${id}`;
        const { data } = await axios.get(url);
        setAnimeDetails(data);
      } catch (error) {
        console.error('Error fetching anime details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!animeDetails) {
    return (
      <div className="w-full h-screen fixed z-[999] bg-white flex flex-col justify-center items-center">
        <img
          className="h-[100px]"
          src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952n15tqq2b7fjupstdd5n1x6us6s4owa8g31dhqekb&ep=v1_gifs_search&rid=200w.gif&ct=g"
          alt=""
        />
        <p>Loading anime details...</p>
      </div>
    );
  }

  const bgStyle = {
    background: `url(${animeDetails.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
    imageRendering: 'optimizeQuality',
  };

  const description = animeDetails.description.replace('Plot Summary:', '');

  return (
    <div className="px-6 mt-20">
      <Navigation />

      <div className="mb-4">
        <p className="text-white !uppercase text-md flex items-center gap-2">
          <Link to="/log-anime">
            <p className="text-[--color-5]">HOME</p>
          </Link>{' '}
          <i className="fa fa-angles-right text-[7px]"></i>{' '}
          {animeDetails.title}
        </p>
      </div>
      <div className="flex w-full md:flex-row flex-col gap-4">
        <div className="md:w-[25%] w-full h-[600px]" style={bgStyle}></div>
        <div className="text-white w-full md:w-[75%]">
          <p className="text-sm tracking-[.2em] text-[--color-5] flex items-center gap-2 mb-4">
            {animeDetails.type}{' '}
            <i className="fa fa-circle text-[4px] text-white"></i>{' '}
            <span className="text-white">
              {animeDetails.subOrDub.toUpperCase()}
            </span>{' '}
            <i className="fa fa-circle text-[4px] text-white"></i>{' '}
            <span className="text-white">
              {animeDetails.status.toUpperCase()}
            </span>
          </p>

          <h2 className="text-6xl font-bold mb-4">
            {animeDetails.title}{' '}
            <span className="block text-lg font-light break-words">
              Other Name: {animeDetails.otherName}
            </span>
          </h2>

          <div className="my-4">
            <p>Genre: {animeDetails.genres.join(', ')}</p>
          </div>

          <p className="font-light mt-8">{description}</p>
        </div>
      </div>

      <div className="my-4">
        {animeDetails.episodes.length > 0 ? (
          <>
            <h1 className="text-5xl text-white font-bold my-8">EPISODES</h1>
            <div className="grid grid-cols-12 mt-4 gap-4">
              {animeDetails.episodes.map((episode) => (
                <div className="md:col-span-3 col-span-6 hover:bg-[--color-5]" key={episode.id}>
                  <a href={episode.url} className="" target="_blank">
                    <div className="relative hover:bg-[--color-5] bg-[--color-3] text-white py-2 px-4 rounded cursor-pointer ">
                      <p className="text-2xl">Episode {episode.number}</p>
                      <span className="font-light">Watch Now</span>
                      <span className="absolute right-0 top-0 w-20 h-full flex items-center justify-center">
                        <i className="fa fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className='text-white'>No Episodes Yet</p>
        )}
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default AnimeDetails;
