import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-[108px] py-20 flex justify-between h-screen">
      <h1 className="text-[100px] uppercase text-white">Обо мне</h1>
      <div>
      <div className="max-w-[705px] w-full flex flex-col gap-4">
        <h2 className="text-white text-4xl">
          Я front-end разработчик из Москвы.
        </h2>
        <p className="text-lg">
          Добро пожаловать! Я младший Front-end разработчик с опытом работы в
          HTML, CSS, JavaScript, React, Vite, Figma, Tailwind и SCSS. Я умею
          создавать пользовательские интерфейсы с помощью HTML, CSS и
          JavaScript, а также использовать такие фреймворки, как React и Vite,
          для различных проектов. Уделяя особое внимание дизайну и таким
          инструментам, как Figma, я создаю визуально ошеломляющие и интуитивно
          понятные интерфейсы. Оптимизируя производительность и отзывчивость с
          помощью CSS с помощью Tailwind и SCSS, я создаю привлекательные
          веб-сайты, ориентированные на пользователя.
        </p>
      </div>
      <Link className="flex items-center gap-1 border-b w-[130px] mt-14 border-b-[#D3E97A] py-2">
          <b className="uppercase text-[#D3E97A]">more about me</b>
        </Link>
      </div>
    </div>
  );
};

export default About;