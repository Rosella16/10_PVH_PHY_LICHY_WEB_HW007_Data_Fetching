import React from "react";
import Link from "next/link";

const MovieComponent = ({ movie }) => {
  const {
    movie_id = "",
    movie_title = "",
    description = "",
    image = "",
  } = movie || {};

  const staticImageURL = "https://vuclipi-a.akamaihd.net/p/tthumb1600x900/d-1/1166006834.jpg";

  return (
    <>
      <div className="bg-amber-950 h-full px-2 py-3">
        <Link href={`/moviedetail/${movie_id}`}>
          <div className="bg-white w-[20rem] p-4 mt-1 rounded-lg text-black">
            {image ? (
              <img src={image} alt={movie_title} className="rounded-sm" />
            ) : (
              <img
                src={staticImageURL}
                alt="Placeholder"
                className="rounded-sm"
              />
            )}
            <div>
              <h2 className="mt-4 font-bold text-2xl movie-title">
                {movie_title}
              </h2>
            </div>
            <div>
              <p className="w-auto description">{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieComponent;
