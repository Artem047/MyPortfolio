import { Link } from "react-router-dom";
import Project from "../components/Project";
import About from "../components/About";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-between py-20 px-[108px] ">
        <div className="max-w-[540px] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-7xl uppercase">Привет, я Артём Глебов.</h1>
            <p className="text-lg">
              Front-end разработчик из Москвы, увлеченный созданием доступных и
              удобных для пользователя веб-сайтов.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="email:artem.glebov2004@yandex.ru"
              target="blank"
              className="bg-[#D3E97A] flex items-center gap-2 p-2 rounded-[100px]"
            >
              <b className="text-[#0A0A0A] uppercase">Contact Me</b>
              <div className="bg-black w-10 h-10 rounded-[50%] flex justify-center items-center">
                <img src="/arrow.svg" alt="" />
              </div>
            </Link>
            <Link
              target="blank"
              to="https://podolsk.hh.ru/resume/0280e604ff0b8fdd0a0039ed1f303764526569"
              className="bg-[#222] w-14 h-14 rounded-[50%] flex items-center justify-center"
            >
              <img src="/hh.svg" alt="" />
            </Link>
            <Link
              to="https://github.com/Artem047"
              target="blank"
              className="bg-[#222] w-14 h-14 rounded-[50%] flex items-center justify-center"
            >
              <img src="/git.svg" alt="" />
            </Link>
          </div>
        </div>
        <img src="/Memoji.png" alt="" />
      </div>
      <hr className="w-full" />
      <Project />
      <hr className="w-full"/>
      <About />
      <hr className="w-full"/>
      <Contact />
    </>
  );
};

export default Home;
