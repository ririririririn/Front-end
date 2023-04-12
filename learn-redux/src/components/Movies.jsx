import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/movies-redux";
import { useGetMoviesQuery } from "../api/movies";

function Movies() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetMoviesQuery(3);

  return (
    <div>
      <h1>Movies</h1>
      {isLoading ? (
        <div>로딩 중</div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      <button
        onClick={() => {
          if (page > 1) setPage(page - 1);
        }}
      >
        -1
      </button>
      <span>page : {page}</span>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Movies;
