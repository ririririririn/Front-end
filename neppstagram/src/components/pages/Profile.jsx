import { getCurrentUser, updateProfile } from "../../api/users";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { tokenState } from "../../state/auth";

function Profile() {
  const { data, isLoading } = useQuery("/users/current", getCurrentUser);
  const queryClient = useQueryClient();
  const setToken = useSetRecoilState(tokenState);

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries("/users/current");
    },
  });
  const handleProfile = (e) => {
    mutation.mutate(e.target.files[0]);
  };
  if (isLoading) return;

  console.log(data.data.name);
  // const query = useQuery("/users/current", getCurrentUser);
  // console.log(query);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    setToken(null);
  };
  return (
    <Container>
      <label>
        <ImageBox profile_url={data.data.profile_url}></ImageBox>
        <input
          type="file"
          onChange={handleProfile}
          accept="image/*"
          style={{ display: "none" }}
        />
      </label>

      <h3>{data.data.name}</h3>
      <button onClick={handleLogout}>로그아웃</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageBox = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #ddd;
  border-radius: 100%;
  background: center/cover no-repeat;
  background-image: url(${({ profile_url }) => profile_url});
`;

export default Profile;
