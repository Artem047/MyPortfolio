import { Link } from "react-router-dom";
import { projectInfo } from "../data/data";

const Project = () => {
  return (
    <div className="py-20 px-[108px]">
      <div className="flex flex-col gap-2 max-w-[600px] w-full">
        <h1 className="text-6xl text-white">Избранные проекты</h1>
        <p className="text-lg">
          Вот некоторые из отобранных проектов, которые демонстрируют мои навыки
          во front-end разработке.
        </p>
      </div>
      <div className="pt-20 flex gap-12 items-center">
        <div className="max-w-[600px] w-full max-h-[600px] h-full bg-[#1A1A1A] flex justify-center items-center px-14 py-28">
          <img src="/work.png" alt="" />
        </div>
        <div className="flex flex-col gap-10 max-w-[576px] w-full">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-white">
              Promotional landing page for our favorite show
            </h1>
            <p>
              Teamed up with a designer to breathe life into a promotional
              webpage for our beloved show, Adventure Time. Delivered a fully
              responsive design with dynamic content capabilities, seamlessly
              integrating a newsletter feature to keep fans updated with the
              latest adventures.
            </p>
          </div>
          <div>
            <h3 className="text-base uppercase text-white border-b py-4 border-b-[#484848]">
              Project Info
            </h3>
            <ul>
              {projectInfo.map((info, index) => {
                return (
                  <div key={index}>
                    <li className="flex justify-between border-b py-4 border-b-[#484848]">
                      <h4 className="text-white">Year</h4>
                      <p>{info.year}</p>
                    </li>
                    <li className="flex justify-between border-b py-4 border-b-[#484848]">
                      <h4 className="text-white">Role</h4>
                      <p>{info.role}</p>
                    </li>
                    <li className="flex justify-between border-b py-4 border-b-[#484848]">
                      <h4 className="text-white">Stack</h4>
                      <p>{info.stack}</p>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="flex gap-12">
            <Link className="flex items-center gap-1 border-b border-b-[#D3E97A] py-2">
              <b className="uppercase text-[#D3E97A]">live demo</b>
              <img src="/green_arrow.svg" alt="" />
            </Link>
            <Link className="flex items-center gap-1 border-b border-b-[#D3E97A] py-2">
              <b className="uppercase text-[#D3E97A]">See on Github</b>
              <img src="/git.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
