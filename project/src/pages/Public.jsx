import Header from "../components/common/Header";
import { Outlet } from "react-router-dom";
function Public() {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default Public;
