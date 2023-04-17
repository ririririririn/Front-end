import styled from "styled-components";

function UserInfo({ user }) {
  console.log(user.profile_url);
  return (
    <Container>
      <ImageCircle profile_url={user.profile_url}></ImageCircle>
      <p>{user.name}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  gap: 10px;
`;
const ImageCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: center / cover no-repeat;
  background-image: url(${({ profile_url }) => profile_url});
`;

export default UserInfo;
