"use client";
import React, { useState, useEffect } from "react";
import HomepageComponent from "./HomepageComponent";
import { getMovieByIdService } from "@/services/movie.service";

const MovieDetailsComponent = ({ movieId, data }) => {
  console.log("movie details : ", data);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await getMovieByIdService(movieId);
        setMovieData(response);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [movieId]);

    const renderStars = (rating) => {
    const stars = [];
    const roundedRating = Math.round(rating); 
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(
          <span key={i} className="text-yellow-400">
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-400">
            &#9733;
          </span>
        );
      }
    }
    return stars;
  };

  const staticImageURL = "https://vuclipi-a.akamaihd.net/p/tthumb1600x900/d-1/1166006834.jpg";

  return (
    <>
      <div class=" bg-amber-950 h-screen ">
        <HomepageComponent />

        <div class="px-[6rem] py-5">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-6">
              <div class="w-[47rem] h-[27rem] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                {data && data.image ? (
                  <img
                    src={data.image}
                    alt={data.movie_title}
                    className="rounded-sm h-[27rem]"
                  />
                ) : (
                  <img
                    src={staticImageURL}
                    alt="Placeholder"
                    className="rounded-sm h-[27rem]"
                  />
                )}
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-bold text-white dark:text-white mb-2">
                {data.director}
              </h2>

              <div class="flex-1 mb-4">
                <div class="mr-4">
                  <span class="font-bold text-white dark:text-gray-300">
                    Duration :&nbsp;
                  </span>
                  <span class="text-white dark:text-gray-100">
                    {data.runtime} minutes
                  </span>
                </div>

                <div>
                  <span class="font-bold text-white dark:text-gray-200">
                    Genre :&nbsp;
                  </span>
                  <span class="text-white dark:text-gray-200">
                    {data.genre}
                  </span>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(data.rating)} {/* Call renderStars function */}
              </div>

              <div>
                <span class="font-bold text-white dark:text-gray-300">
                  {data.movie_title} &nbsp;
                </span>
                <span class="font-bold text-white dark:text-gray-300">
                  (&nbsp;2021&nbsp;)
                </span>
                <p class="text-white dark:text-gray-300 text-sm mt-2">
                  {data.description}
                </p>
                <p className="text-sm mt-9 text-white ">{data.posted_at}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsComponent;
