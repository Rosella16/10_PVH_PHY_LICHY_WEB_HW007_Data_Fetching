'use client'
import React,{useState, useEffect} from "react";
import HomepageComponent from "./HomepageComponent";
import { getAllMoviesService, getMovieByIdService } from "@/services/movie.service";

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
  return (
    <>
      <div class=" bg-amber-950 h-screen ">
        <HomepageComponent />

        <div class="px-[6rem] py-5">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-6">
              <div class="w-[47rem] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  class="w-full h-full object-cover"
                  src={data.image}
                  alt="Product Image"
                />
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

              {/* star rating */}
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              <div>
                <span class="font-bold text-white dark:text-gray-300">
                  {data.movie.title} &nbsp;
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
