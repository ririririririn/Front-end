import { useParams } from "react-router-dom";
import { getPosts } from "../../api/post";
import { useQuery } from "react-query";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
function Post() {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["/posts", page],
    queryFn: () => getPosts(),
  });

  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  if (isLoading) return;

  const handleComments = (e) => {
    setComments(e.target.value);
  };

  const onClickButton = () => {};
  return (
    <>
      <ul>
        {data.map((post) => (
          <PostBox key={post.id}>
            <UserBox>
              <img src={post} alt="" />
              {post.author.name}
            </UserBox>
            <ImageBox>
              <img src={post.images[0].img_url} alt="" />
            </ImageBox>
            <TextBox>
              <div>
                <AiOutlineHeart />
                <AiOutlineMessage />
              </div>
              {post.content}
              <input onChange={handleComments} type="text" />
              <button onClick={onClickButton}>게시</button>
            </TextBox>
          </PostBox>
        ))}
      </ul>
      <button onClick={() => setPage(page > 1 ? page - 1 : page)}>
        이전 페이지
      </button>
      <button onClick={() => setPage(data.length < 10 ? page : page + 1)}>
        다음 페이지
      </button>
    </>
  );
}

const PostBox = styled.li`
  width: 500px;
`;

const UserBox = styled.div``;

const ImageBox = styled.div`
  img {
    /* width: 400px; */
  }
`;

const TextBox = styled.div``;

export default Post;
