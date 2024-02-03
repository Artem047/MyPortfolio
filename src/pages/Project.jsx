import { Link } from "react-router-dom";
import { projectInfo } from "../data/data";
import ProjectInfo from "../components/ProjectInfo";

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
      <div className="pt-20 flex flex-col gap-[120px]">
        {projectInfo.map((project, id) => {
          return (
            <div key={id} className="flex gap-12 items-center">
              <div className="max-w-[600px] w-full max-h-[600px] h-full bg-[#1A1A1A] flex justify-center items-center px-14 py-28">
                <img src={project.image} alt="" className="rounded-xl" />
              </div>
              <div className="flex flex-col gap-10 max-w-[576px] w-full">
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl text-white">
                    {project.title}
                  </h1>
                  <p>
                    {project.desc}
                  </p>
                </div>
                <div>
                  <h3 className="text-base uppercase text-white border-b py-4 border-b-[#484848]">
                    Информация о проекте
                  </h3>
                  <div>
                    {project.info.map((info, i) => {
                      return (
                        <ProjectInfo key={i} info={info} />
                      );
                    })}
                  </div>
                </div>
                <div className="flex gap-12">
                  <Link to={project.links} target="blank2" className="flex items-center gap-1 border-b border-b-[#D3E97A] py-2">
                    <b className="uppercase text-[#D3E97A]">смотреть демо</b>
                    <img src="/green_arrow.svg" alt="" />
                  </Link>
                  <Link to={project.github} target="blank" className="flex items-center gap-1 border-b border-b-[#D3E97A] py-2">
                    <b className="uppercase text-[#D3E97A]">Github</b>
                    <img src="/git.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
