import styled from "styled-components";
import { Link } from "react-router-dom";

function Poster({ data }) {
  const {
    id,
    title,
    release_date,
    poster_path,
    name,
    first_air_date,
    media_type,
  } = data;
  console.log(data);

  const src = "https://image.tmdb.org/t/p/w154/" + poster_path;

  return (
    <Container>
      <Link to={`/${media_type}/${id}`}>
        <ImgBox>
          <img src={src} alt="" />
        </ImgBox>
        <TitleBox>
          <span>{release_date || first_air_date}</span>
          <h4>{title || name}</h4>
        </TitleBox>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  width: 160px;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.3);
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 180px;
  overflow: hidden;
  img {
    width: 100%;
    /* margin: 10px; */
    /* height: 100%; */
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  padding: 0 10px;
  flex-wrap: wrap;
  span {
    font-size: 14px;
  }
  h4 {
  }
`;

export default Poster;
