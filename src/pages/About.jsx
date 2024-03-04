import { Link } from "react-router-dom";
import { technology } from "../data/data";

const About = () => {
  return (
    <div className="px-[108px] py-20 lat:p-10 tab:p-5">
      <div className="flex justify-between lat:flex-col lat:items-center lat:gap-5">
        <h1 className="text-[100px] uppercase text-white lat:text-7xl tel:text-5xl">Обо мне</h1>
        <div className="flex flex-col gap-12">
          <section className="max-w-[705px] w-full flex flex-col gap-4">
            <h2 className="text-white text-4xl tel:text-center tel:text-2xl">
              Я front-end разработчик из Москвы.
            </h2>
            <p className="text-lg tel:text-base">
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
          <div className="flex gap-4 lat:justify-center tel:flex-wrap tel:items-center">
            <Link
              to="/doc/resume.pdf"
              rel="noreferrer"
              target="_blank"
              download="PDF-document"
              className="bg-[#D3E97A] flex items-center gap-2 p-2 rounded-[100px]"
            >
              <b className="text-[#0A0A0A] uppercase">Загрузить резюме</b>
              <div className="bg-black w-10 h-10 rounded-[50%] flex justify-center items-center">
                <img src="/arrow.svg" alt="" loading="lazy" />
              </div>
            </Link>
            <Link
              target="blank"
              to="https://podolsk.hh.ru/resume/0280e604ff0b8fdd0a0039ed1f303764526569"
              className="bg-[#222] w-14 h-14 rounded-[50%] flex items-center justify-center"
            >
              <img src="/hh.svg" alt="" loading="lazy" />
            </Link>
            <Link
              to="https://github.com/Artem047"
              target="blank"
              className="bg-[#222] w-14 h-14 rounded-[50%] flex items-center justify-center"
            >
              <img src="/git.svg" alt="" loading="lazy"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full bg-[#C7C7C7] rounded-2xl py-4">
        <img src="/Me.png" alt="" className="mx-auto" loading="lazy"/>
      </div>
      <section className="py-20 flex justify-between lat:flex-col lat:items-center lat:gap-10 tab:py-10">
        <h1 className="uppercase text-7xl tab:text-5xl">технологии</h1>
        <div className="flex flex-col gap-8 w-[600px] lat:w-full">
          <p className="lat:text-2xl tab:text-lg">
            Добро пожаловать в раздел 'Технологии' – пространство, где я,
            фронтенд программист, демонстрирую свой путь в мире современных
            технологий. Здесь вы найдете мой опыт, инструменты и исследования,
            позволяющие создавать увлекательные и инновационные веб-приложения.
          </p>
          <ul className="flex flex-wrap gap-4 tab:justify-center">
            {technology.map((tec) => {
              return (
                <li key={tec.id} className="py-5 px-10 border rounded-[100px] uppercase">
                  <b>{tec.name}</b>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <hr className="w-full" />
      <section className="py-20 flex justify-between gap-10 tab:flex-col tab:py-10">
        <h1 className="uppercase text-7xl lat:text-center">опыт</h1>
        <div className="flex flex-col gap-2 w-[600px] tab:w-full">
          <div className="flex items-center justify-between flex-wrap">
            <h2 className="text-2xl text-white">Стажер Front-End</h2>
            <p className="text-lg">Февраль 2023 — Июль 2023</p>
          </div>
          <p className="text-[#D3E97A] text-lg">
            Правительство Ярославской области
          </p>
          <p>
            В рамках моей стажировки в компании я успешно разрабатывал страницы
            для сайта представительства Правительства Ярославской области при
            Правительстве РФ. В процессе работы я использовал
            JavaScript-библиотеку <b className="text-white">React</b> и применял
            препроцессор <b className="text-white">SCSS</b> для стилизации
            контента. Моя задача включала не только кодирование функциональных
            компонентов, но и обеспечение их визуальной привлекательности, а
            также адаптацию под различные устройства и экраны, обеспечивая
            оптимальную производительность и пользовательский опыт.
          </p>
        </div>
      </section>
      <hr className="w-full" />
    </div>
  );
};

export default About;
