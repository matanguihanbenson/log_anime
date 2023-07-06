import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function AnimeGenre({ genre }) {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.consumet.org/anime/gogoanime/genre/${genre}`)
      .then((response) => response.json())
      .then((data) => {
        setAnimeList(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching anime list:', error);
        setAnimeList([]);
        setLoading(false);
      });
  }, [genre]);

  if (loading) {
    return (
      <div className="bg-[#FF4D4E] h-screen w-screen fixed z-[9999] flex items-center justify-center flex-col">
        <img className="w-[200px] rounded-full" src="https://cdn.dribbble.com/users/3347541/screenshots/12910163/media/8692d8818c246750c4c39b15424bf99f.gif" alt="" />
        <span className="text-2xl font-bold text-white animate__animated animate__rubberBand">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="px-6 pt-20">
        <div className="text-white tracking-widest text-md font-extralight mb-4">
          <Link to="/log-anime" className="text-[--color-5]">HOME</Link> <i className="fa fa-angles-right text-[7px]"></i> {genre && genre.toUpperCase()}
        </div>

        <div className="grid grid-cols-12 gap-4">
          {animeList.map((anime) => {
            const bgStyle = {
              background: `url(${anime.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              imageRendering: 'optimizeSpeed'
            };

            return (
              
              <div key={anime.id} className="md:col-span-2 col-span-6">
                <Link to={`/details/${anime.id}`}>
                  <div className="bg-white h-[350px] w-full flex items-end cursor-pointer" style={bgStyle} title={anime.title}>
                    <div className="bg-black/90 w-full h-24 px-2 py-2 text-white">
                      <p className="list-none text-md font-medium line-clamp-2">{anime.title}</p>
                      <p className="text-sm font-extralight">Released: {anime.released}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default AnimeGenre;
