import React from "react";
import Link from "next/link";

const MovieComponent = ({ movie }) => {
  const {
    movie_id = "",
    movie_title = "",
    description = "",
    image = "",
  } = movie || {};

  return (
    <>
      <div className="bg-amber-950 h-full px-2 py-3">
        <Link href={`/moviedetail/${movie_id}`}>
          <div className="flex" >
            <div className="bg-white w-[20rem] p-4 mt-1 rounded-lg text-black card-container">
              <img src={image} alt={movie_title} className="rounded-sm" />
              <h2 className="mt-4 font-bold text-2xl">{movie_title}</h2>
              <p className="description">{description}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieComponent;
