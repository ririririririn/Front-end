import { useState } from "react";
import { uploadPosts } from "../api/post";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import { useMutation } from "react-query";
function Upload() {
  const [files, setFiles] = useState(null);
  const [text, setText] = useState("");
  //   const mutation = useMutation();
  const onLoadFile = (e) => {
    setFiles(e.target.files);
  };

  const onLoadText = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    const data = uploadPosts(text, files);
    console.log(data);
  };

  return (
    <Container>
      <UploadBox>
        <InputLabel>
          <AiOutlinePlus />
          <input onChange={onLoadFile} type="file" multiple accept="image/*" />
        </InputLabel>
        <ImageBox></ImageBox>

        <TextBox
          placeholder="내용을 입력하세요."
          onChange={onLoadText}
          id=""
          cols="30"
          rows="10"
        ></TextBox>
        <Button onClick={handleClick}>업로드</Button>
      </UploadBox>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  /* border: 1px solid #000000; */
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    padding: 5px;
    right: 10px;
    margin-right: 5px;
  }
  input {
    display: none;
  }
`;

const ImageBox = styled.div`
  height: 400px;
  border: px solid #eee;
  background-color: #fff;
`;

const TextBox = styled.textarea`
  height: 50px;
  box-sizing: border-box;
  padding: 5px;
  resize: none;
  outline: none;
  border: 1px solid #eee;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: #4f88ca;
`;

export default Upload;
