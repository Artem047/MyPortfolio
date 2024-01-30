import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="py-20 px-[108px]">
      <section className="flex flex-col gap-4">
        <h1 className="text-7xl text-white uppercase">Контакты</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            <p>Поздороваться в</p>
            <Link target="blank" to='email:artem.glebov2004@yandex.ru' className="text-white border-b border-[#D3E97A]">
              artem.glebov2004@yandex.ru
            </Link>
          </div>
          <div className="flex gap-1">
            <p>Для получения дополнительной информации, вот моё</p>
            <Link target="blank" to='https://www.figma.com/file/ogEyHEVYmTiBMIoKZAu3c5/Resume?type=design&node-id=0%3A1&mode=design&t=alaNCYvDbi0w8AKe-1' className="text-white border-b border-[#D3E97A]">
                резюме
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;
