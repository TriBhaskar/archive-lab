import { Outlet } from "react-router-dom";
import Images from "../assets/Image";
import Header from "./Header";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
