import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { tmdbAxios } from "../../api/tmdbAxios";
import { useEffect } from "react";
import { useState } from "react";

function DetailPage() {
  const { pathname } = useLocation();
  const [movie, setMovie] = useState({});
  const {
    poster_path,
    title,
    backdrop_path,
    overview,
    name,
    release_date,
    first_air_date,
  } = movie;
  const src = "https://image.tmdb.org/t/p/w300/" + poster_path;
  const backDropUrl = "https://image.tmdb.org/t/p/w300/" + backdrop_path;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await tmdbAxios.get(pathname, {});
      setMovie(data);
    };
    console.log(movie);
    fetchData();
  }, [pathname]);

  const date = release_date ?? first_air_date;
  const year = date?.slice(0, 4);

  return (
    <Container url={backDropUrl}>
      <ImgBox>
        <img src={src} alt={title} />
      </ImgBox>
      <DesBox>
        <h3>
          {title ?? name}
          <span>({year})</span>
        </h3>
        <p>{overview}</p>
      </DesBox>
    </Container>
  );
}

export default DetailPage;

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  gap: 10px;
  padding: 40px;
  background: center/cover no-repeat;
  background-blend-mode: multiply;
  background-color: #000000a9;
  background-image: url(${({ url }) => url});
  color: white;
`;

const ImgBox = styled.div`
  img {
    width: 250px;
  }
`;
const DesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 32px;

    span {
      font-weight: 500;
    }
  }
  p {
    font-size: 18px;
    margin-top: 40px;
    /* width: 80%; */
  }
`;
