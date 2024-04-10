import Image from "next/image";
import HomepageComponent from "./_components/HomepageComponent";
import MovieComponent from "./_components/MovieComponent";
import Link from "next/link";
import { getAllMoviesService } from "@/services/movie.service";
import { getMovieByGenreService } from "@/services/movie.service";

export default async function Home() {
  const allMoviesData = await getAllMoviesService();
  const allGenres = allMoviesData?.payload?.map((item) => item.genre);
  const uniqueGenres = allGenres?.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  console.log(uniqueGenres);
  return (
    <main>
      <div className="background-div">
        <HomepageComponent />
      </div>
      <div className="bg-amber-950 px-10 py-4">
        <div className="">
          <h2 className="font-semibold text-white ml-10 ">All Movies &gt;</h2>
        </div>
        <div className="flex overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container ">
          {allMoviesData.payload.map((movie) => (
            <MovieComponent key={movie.movie_id} movie={movie} />
          ))}
        </div>

        {uniqueGenres?.map(async (genre) => {
          const movies = await getMovieByGenreService(genre);
          return (
            <div key={genre}>
              <div className="">
                <h2 className="font-semibold text-white ml-10 ">
                  {genre} Movies &gt;
                </h2>
              </div>
              <div className="flex overflow-y-hidden whitespace-no-wrap scrolling-touch overflow-x-auto scroll-none container ">
                {movies.payload.map((movie) => (
                  <MovieComponent key={movie.movie_id} movie={movie} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
