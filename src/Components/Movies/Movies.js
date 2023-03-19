import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api-helpers/api-helpers";
import { MovieItem } from "./MovieItem";

export const Movies = () => {
const [movies,setMovies]=useState();
   getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
useEffect(() => {
  getAllMovies()
  .then((data) => setMovies(data.movies))
  .catch((err) => console.log(err));

  
}, [])



  return (
    <Box margin={"auto"} marginTop={4}>
      <Typography 
      margin={"auto"}
      variant="h4" 
      padding={2}
      width ="40%"
      bgcolor={"orangered"}
      textAlign ="center"
      fontFamily="algerian">
        All Movies
      </Typography>
      <Box 
      margin={'auto'}
      width='fit-content'
      marginTop={5}
      display={"flex"}
      justifyContent="flex-start"
      flexWrap={'wrap'}
    >
 {movies &&
          movies.map((movie, index) => (
            <MovieItem
              id={movie._id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              key={index}
            />
          ))}
          
      </Box>
    </Box>
  );
};
