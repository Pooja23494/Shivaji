import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "../common/ScrollTop";
import WhatsappButton from "../common/WhatsappButton";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20 pb-24 lg:pb-0">
        <Outlet />
      </main>

      <Footer />

      <WhatsappButton />

      <ScrollTop />
    </>
  );
};

export default Layout;
