import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/posts";
import styled from "styled-components";
import UserInfo from "../components/common/UserInfo";

function PostDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["/postsDetail", id], getPostById);
  console.log(data);

  if (isLoading) return <div>로딩중</div>;
  return (
    <div>
      <UserInfo user={data.author}></UserInfo>
      <ul>
        {data.img_list.map((img) => (
          <ImageBox key={img.id}>
            <img src={img.url} alt={img.key}></img>
          </ImageBox>
        ))}
      </ul>
    </div>
  );
}

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  img {
    width: 100%;
  }
`;

export default PostDetail;
