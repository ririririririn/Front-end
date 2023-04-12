import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTop } from "../redux/toprate";
import { useGetTopRatedQuery } from "../api/movies";
/* 
export const getTopRated = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
    headers: {
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_ACCESS_TOKEN,
    },
  });
  const data = await res.json();
  console.log(data);
  return data.results;
}; */

function TopRated() {
  const { data, isLoading, error } = useGetTopRatedQuery(1);
  /*   const { data, isLoading } = useSelector((state) => state.toprated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTop());
  }, [dispatch]);
 */
  return (
    <div>
      <h1>Top Rated</h1>
      {isLoading ? (
        <div>로딩중 </div>
      ) : (
        <ul>
          {data.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TopRated;

/* /movie/top_rated */
