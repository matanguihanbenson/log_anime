import React from 'react';
import { Link } from 'react-router-dom';

function Genres() {
    const genres = [
        "action", "adventure", "cars", "comedy", "crime", "dementia", "demons", "drama", "dub", "ecchi",
        "family", "fantasy", "game", "gourmet", "harem", "historical", "horror", "josei", "kids", "magic",
        "martial-arts", "mecha", "military", "music", "mystery", "parody", "police", "psychological", "romance",
        "samurai", "school", "sci-fi", "seinen", "shoujo", "shoujo-ai", "shounen", "shounen-ai", "slice-of-life",
        "space", "sports", "super-power", "supernatural", "suspense", "thriller", "vampire", "yaoi", "yuri"
    ];

    const genreLinks = genres.map((genre) => (
        <li key={genre} className='hover:text-[--color-5]'>
            <Link to={`/genres/${genre}`}>{genre.toUpperCase()}</Link>
        </li>
    ));

    const column1 = genreLinks.slice(0, Math.ceil(genreLinks.length / 2));
    const column2 = genreLinks.slice(Math.ceil(genreLinks.length / 2));

    return (
        <div className="bg-white h-max col-span-12  lg:col-span-3 p-6 rounded-lg">
            <h1 className="text-3xl font-medium mb-4">Genres</h1>
            <div className="grid grid-cols-2 gap-4 h-max">
                <ul>{column1}</ul>
                <ul>{column2}</ul>
            </div>
        </div>
    );
}

export default Genres;
