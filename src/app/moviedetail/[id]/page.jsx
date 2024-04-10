import MovieDetailsComponent from '@/app/_components/MovieDetailsComponent'
import React from 'react'

const page = () => {
    const movieId = "";
  return (
    <>
    <div><MovieDetailsComponent movieId={movieId}/></div>
    </>
  )
}

export default page