import { Outlet } from "react-router-dom";
import Header from './1-header/Header'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
