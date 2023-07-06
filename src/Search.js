import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Search() {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.consumet.org/anime/gogoanime/${id}?page=${currentPage}`;
      try {
        const { data } = await axios.get(url);
        console.log(data.results);

        setResults(data.results);
        setHasNextPage(data.hasNextPage);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchData();
  }, [id, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderResults = () => {
    if (results.length === 0) {
      return (
        <div className="no-results">
          <img src="no-results-image.png" alt="No results" />
          <p>No results found.</p>
        </div>
      );
    }

    return results.map((result) => (
      <Link to={`/details/${result.id}`}>
        <div key={result.id} className="flex h-32 gap-4 bg-[--color-3]">
          <div
            className="w-24"
            style={{
              background: `url(${result.image})`,
              backgroundSize: 'cover',
              imageRendering: 'optimizeSpeed',
            }}
          ></div>
          <div className='h-full flex flex-col justify-center text-white'>
            <h3>{result.title}</h3>
            <p>{result.releaseDate}</p>
            <p>{result.subOrDub.toUpperCase()}</p>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="p-6">
      <Navigation />
      <br />
      <br />
      {results.length > 0 && hasNextPage && (
        <div className="w-full flex justify-end">
          <div className="flex gap-4 bg-white p-6">
            {currentPage > 1 && (
              <button
                onClick={handlePrevPage}
                className="flex items-center gap-3 hover:font-bold hover:text-[--color-5]"
              >
                <i className="fa fa-angles-left text-[7px]"></i> Previous
              </button>
            )}
            {hasNextPage && (
              <button
                onClick={handleNextPage}
                className="flex items-center gap-3 hover:font-bold hover:text-[--color-5]"
              >
                Next <i className="fa fa-angles-right text-[7px]"></i>{' '}
              </button>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4">{renderResults()}</div>

      {results.length > 0 && hasNextPage && (
        <div className="w-full flex justify-end">
          <div className="flex gap-4 bg-white p-6">
            {currentPage > 1 && (
              <button
                onClick={handlePrevPage}
                className="flex items-center gap-3 hover:font-bold hover:text-[--color-5]"
              >
                <i className="fa fa-angles-left text-[7px]"></i> Previous
              </button>
            )}
            {hasNextPage && (
              <button
                onClick={handleNextPage}
                className="flex items-center gap-3 hover:font-bold hover:text-[--color-5]"
              >
                Next <i className="fa fa-angles-right text-[7px]"></i>{' '}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
