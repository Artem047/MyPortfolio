const ProjectInfo = ({info}) => {
  return (
    <ul>
        <li className="flex justify-between border-b py-4 border-b-[#484848]">
          <h4 className="text-white">Год</h4>
          <p>{info.year}</p>
        </li>
        <li className="flex justify-between border-b py-4 border-b-[#484848]">
          <h4 className="text-white">Роль</h4>
          <p>{info.role}</p>
        </li>
        <li className="flex justify-between border-b py-4 border-b-[#484848]">
          <h4 className="text-white">Технологии</h4>
          <p>{info.stack}</p>
        </li>
    </ul>
  );
};

export default ProjectInfo;
