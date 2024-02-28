import { Outlet } from "react-router-dom";
import Header from "./1-header/Header";
import UpButton from "./2-upButton/UpButton";
export default function Layout() {
  return (
    <>
      <Header />
      <UpButton />
      <Outlet />
    </>
  );
}
