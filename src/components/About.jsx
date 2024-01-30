import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-[108px] py-20">
      <div className="flex justify-between">
        <h1 className="text-[100px] uppercase text-white">Обо мне</h1>
        <div className="flex flex-col gap-12">
          <section className="max-w-[705px] w-full flex flex-col gap-4">
            <h2 className="text-white text-4xl">
              Я front-end разработчик из Москвы.
            </h2>
            <p className="text-lg">
              Добро пожаловать! Я младший Front-end разработчик с опытом работы
              в HTML, CSS, JavaScript, React, Vite, Figma, Tailwind и SCSS. Я
              умею создавать пользовательские интерфейсы с помощью HTML, CSS и
              JavaScript, а также использовать такие фреймворки, как React и
              Vite, для различных проектов. Уделяя особое внимание дизайну и
              таким инструментам, как Figma, я создаю визуально ошеломляющие и
              интуитивно понятные интерфейсы. Оптимизируя производительность и
              отзывчивость с помощью CSS с помощью Tailwind и SCSS, я создаю
              привлекательные веб-сайты, ориентированные на пользователя.
            </p>
          </section>
          <div className="flex gap-4">
            <Link
              to="/doc/resume.pdf"
              rel="noreferrer"
              target="_blank"
              download="PDF-document"
              className="bg-[#D3E97A] flex items-center gap-2 p-2 rounded-[100px]"
            >
              <b className="text-[#0A0A0A] uppercase">Загрузить резюме</b>
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
      </div>
      <div className="mt-20 w-full bg-[#C7C7C7] rounded-2xl py-4">
        <img src="/me.png" alt="" className="mx-auto" />
      </div>
    </div>
  );
};

export default About;
