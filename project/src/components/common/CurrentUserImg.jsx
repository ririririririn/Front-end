import { useQuery } from "react-query";
import { getCurrentUser } from "../../api/users";

function CurrentUserImg() {
  const { data, isLoading } = useQuery({
    queryKey: "/users/current",
    queryFn: () => {
      getCurrentUser();
    },
  });
  console.log(data);
  console.log(isLoading);
  // try {
  //   const data = getCurrentUser();
  //   console.log(data);
  // } catch (e) {
  //   console.log(e);
  // }

  return <div></div>;
}

export default CurrentUserImg;
