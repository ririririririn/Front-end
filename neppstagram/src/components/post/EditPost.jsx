import { useState } from "react";
import styled from "styled-components";
import { createPost } from "../../api/posts";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
function EditPost() {
  const [body, setBody] = useState("");
  const [files, setFiles] = useState(null);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationKey: "post/create",
    mutationFn: () => createPost(body, files),
    onSuccess: (data) => {
      navigate(`/posts/${data.id}`);
    },
  });
  console.log(mutation);
  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleFile = (e) => {
    setFiles(e.target.files);
  };

  const onClick = () => {
    // createPost(body, files); 대신
    mutation.mutate();
  };

  return (
    <Container>
      <input
        onChange={handleFile}
        type="file"
        multiple
        accept="image/*"
      ></input>
      <textarea
        onChange={handleBody}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={onClick}>등록하기</button>
    </Container>
  );
}

export default EditPost;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  textarea {
    width: 300px;
    height: 150px;
    resize: none;
  }
`;
