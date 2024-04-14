import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Wrapper() {
  return (
    <>
      <Header />
      <div style={{margin: "96px"}}></div>
      <Outlet />
      <Footer />
    </>
  );
}
