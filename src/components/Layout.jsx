import { Outlet } from "react-router-dom";
import Header from "./1-header/Header";
import UpButton from "./error/2-UpButton/UpButton";
export default function Layout() {
  return (
    <>
      <Header />
      <UpButton />
      <Outlet />
    </>
  );
}
