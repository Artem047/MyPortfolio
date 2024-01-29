import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-[1440px] w-full m-auto">
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
};

export default Root;
