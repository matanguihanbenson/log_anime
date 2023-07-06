import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Trending() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://api.consumet.org/anime/gogoanime/top-airing';
        const { data } = await axios.get(url, { params: { page: 1 } });
        setAnimeList(data.results || []);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lg:w-[30%]  w-full h-max rounded-lg bg-[--color-3] p-6 mt-8 md:mt-0">
      <div className="flex justify-between items-end">
        <h1 className="text-white text-2xl font-medium">Top Airing</h1>
        <a href="#" className="text-white text-sm font-thin underline">See more</a>
      </div>
      <div className="pt-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          animeList.length > 0 ? (
            animeList.slice(0, 5).map((anime) => (
              <Link to={`/details/${anime.id}`}><div key={anime.id} className="h-max w-full mb-2 grid grid-cols-12 items-center">
                <img src={anime.image} alt="" className="h-full col-span-2" />
                <div className="col-span-10 pl-2">
                  <h2 className="overflow-hidden text-ellipsis line-clamp-2 text-white text-md">{anime.title}</h2>
                  <p className="w-full overflow-hidden text-ellipsis text-xs line-clamp-2 text-[--color-2]">{anime.genres.join(', ')}</p>
                </div>
              </div></Link>
            ))
          ) : (
            <p>No anime found.</p>
          )
        )}
      </div>
    </div>
  );
}

export default Trending;
