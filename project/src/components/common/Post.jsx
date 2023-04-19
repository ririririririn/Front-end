import { getPosts } from "../../api/post";

function Post() {
  const data = getPosts();
  console.log(data);

  return (
    <>
      <ul>
        <li></li>
      </ul>
    </>
  );
}

export default Post;
