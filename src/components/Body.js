import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Head from "./Head";

function Body() {
  return (
    <>
      <Head />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default Body;
