import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AnimeList() {
  const [animeList, setAnimeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function fetchData() {
    try {
      const url = `https://api.jikan.moe/v4/anime?page=${currentPage}`;
      const response = await axios.get(url);
      const { data, pagination } = response.data;

      setAnimeList(data);
      setTotalPages(pagination.last_visible_page);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <h2>Anime List</h2>
      {animeList.map((anime) => (
        <div key={anime.mal_id}>
          <h3>{anime.title}</h3>
          {/* Render other anime details */}
        </div>
      ))}

      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default AnimeList;
