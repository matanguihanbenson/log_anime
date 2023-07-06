import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Recent() {
  const [recentEpisodes, setRecentEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.consumet.org/anime/gogoanime/recent-episodes";
        const { data } = await axios.get(url, { params: { page: 1, type: 1 } });
        setRecentEpisodes(data.results);
      } catch (err) {
        console.error('Error fetching recent episodes:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-white col-span-12 md:col-span-9 h-max'>
      <div>
        <span className='font-thin tracking-[.4em] text-xs text-[--color-2]'>RECENT</span>
        <h1 className='leading-none text-5xl font-bold tracking-wider'>EPISODES</h1>
      </div>
      <div className='w-full grid grid-cols-12 gap-4 mt-4'>
        {recentEpisodes.length > 0 ? (
          recentEpisodes.map((episode) => (
            <div key={episode.id} className="py-2 lg:col-span-3 col-span-6">
              <Link to={`/details/${episode.id}`}>
                <div className="bg-[--color-3] p-2 h-[350px] flex items-end" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,.5), rgba(0,0,0,.2)), url(${episode.image})`, imageRendering: 'optimizeSpeed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                  <div className='h-[100px]'>
                    <p className='line-clamp-2'>{episode.title}</p>
                    <p>Episode {episode.episodeNumber}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No recent episodes found.</p>
        )}
      </div>
    </div>
  );
}

export default Recent;
