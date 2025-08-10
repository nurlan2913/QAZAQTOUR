import './Header.css';

export default function Header() {
  return (
    <header className=" h-screen w-full">
      <img
        className="absolute inset-0 object-cover w-full h-full brightness-110"
        src="/assets/hesder.jpeg" 
        alt="Header background"
      />

      {/* Текст */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-4 sm:px-8 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Путешествие
          <br />
          начинается <em>здесь</em>
        </h1>
      </div>

      {/* Стрелка */}
      <img
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 sm:w-10 md:w-12 animate-up-down"
        src="/assets/arrow.png"
        alt="Arrow down"
      />
    </header>
  );
}
