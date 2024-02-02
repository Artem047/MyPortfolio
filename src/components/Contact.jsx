import { Link } from "react-router-dom";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 px-[108px] flex gap-6">
      <div className="flex flex-col gap-10 max-w-[600px] w-full">
        <section className="flex flex-col gap-4">
          <h1 className="text-7xl text-white uppercase">Контакты</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <p>Поздороваться в</p>
              <Link
                target="blank"
                to="email:artem.glebov2004@yandex.ru"
                className="text-white border-b border-[#D3E97A]"
              >
                artem.glebov2004@yandex.ru
              </Link>
            </div>
            <div className="flex gap-1">
              <p>Для получения дополнительной информации, вот моё</p>
              <Link
                target="blank"
                to="https://www.figma.com/file/ogEyHEVYmTiBMIoKZAu3c5/Resume?type=design&node-id=0%3A1&mode=design&t=alaNCYvDbi0w8AKe-1"
                className="text-white border-b border-[#D3E97A]"
              >
                резюме
              </Link>
            </div>
          </div>
        </section>
        <div className="flex gap-6">
          <Link
            target="blank"
            to="https://podolsk.hh.ru/resume/0280e604ff0b8fdd0a0039ed1f303764526569"
            className="w-10 h-10"
          >
            <img src="/hh.svg" alt="" className="w-full" />
          </Link>
          <Link
            to="https://github.com/Artem047"
            target="blank"
            className="w-10 h-10"
          >
            <img src="/git.svg" alt="" className="w-full" />
          </Link>
          <Link to="https://t.me/agleboov" target="blank">
            <FaTelegram size={40} color="#D3E97A" />
          </Link>
        </div>
      </div>
      <form className="max-w-[600px] w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-[#C7C7C7]">Имя</label>
          <input
            required
            type="text"
            className="bg-[#1A1A1A] rounded p-4 outline-none text-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#C7C7C7]">Почта</label>
          <input
            required
            type="email"
            className="bg-[#1A1A1A] rounded p-4 outline-none text-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#C7C7C7]">Сообщение</label>
          <textarea
            required
            type="email"
            className="bg-[#1A1A1A] rounded p-4 outline-none text-lg h-[156px]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-[#0A0A0A] bg-[#D3E97A] uppercase w-[140px] px-10 py-5 flex justify-center items-center rounded-[100px]"
        >
          <b>отправить</b>
        </button>
      </form>
      
    </div>
  );
};

export default Contact;
