import { useQueries, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPostById } from "../../api/posts";
import styled from "styled-components";
import UserInfo from "../common/UserInfo";
import { getCurrentUser } from "../../api/users";

function PostDetail() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["/postsDetail", id], getPostById);
  const query = useQuery("/users/current", getCurrentUser);
  console.log(data);
  // const currentId = query.data.data.id;
  // const author = data.autor;
  if (isLoading) return <div>로딩중</div>;
  return (
    <div>
      <UserInfo user={data.author}></UserInfo>
      <button>수정</button>
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
