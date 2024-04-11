
import MovieDetailsComponent from '@/app/_components/MovieDetailsComponent';
import React from "react";


async function getMovies(ids) {
  console.log(" Id came prom catch all route params :", ids);

  const catchData = [];

  for (const id of ids) {
    const res = await fetch(
      `https://movie-api-get-only-bmc3.vercel.app/api/${id}`
    );

    const cardDetails = await res.json();

    catchData.push(cardDetails);
  }
  return catchData;
}

const page = async ({ params }) => {
  const { id } = params;
  const details = await getMovies(id);

  return (
    <>
      <div>
        {details?.map((movie) => (
          <MovieDetailsComponent
            key={movie.details?.id}
            data={movie.payload}
          />
        ))}
      </div>
    </>
  );
};

export default page;
