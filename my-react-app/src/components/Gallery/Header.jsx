import './Header.css';

export default function Header() {
  return (
    <div className="block px-4 sm:px-6 lg:px-8 mt-20">
      {/* Верхняя часть с текстом и картинкой */}
      <div className="flex flex-col lg:flex-row items-center gap-6 border-b-2 border-b-lime-400 pb-6">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-[#313743] font-bold text-center lg:text-left">
          ПОСМОТРИ НА МИР.
          <br />
          ОН КУДА УДИВИТЕЛЬНЕЕ
          <br />
          ЧЕМ СНЫ
        </h1>
        <img
          className="w-24 h-24 sm:w-32 sm:h-32 lg:w-50 lg:h-50 animate-spin [animation-duration:5s]"
          src="/assets/earth_2072299.png"
          alt="Земля"
        />
      </div>

      {/* Нижняя часть с подписью */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-lg sm:text-xl pt-5 gap-2 sm:gap-4">
        <h1 className="text-[#313743] text-xl sm:text-2xl font-bold">Рэй Брэдберри</h1>
        <p className="text-[#313743]">американский писатель</p>
        <p className="text-[#313743]">1980</p>
        <img
          className="w-10 sm:w-12 lg:w-14"
          src="/assets/blockquote (1).png"
          alt="Цитата"
        />
      </div>
    </div>
  );
}
