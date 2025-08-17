export default function Blog2() {
  return (
    <div className="mt-10 pb-20 px-4 sm:px-6 lg:px-12">
      {/* Заголовок */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#313743] font-bold text-center lg:text-left">
        КАК СДЕЛАТЬ <br /> НЕЗАБЫВАЕМЫЙ ОТДЫХ
      </h1>

      {/* Первая секция — шаги */}
      <div className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-20">
        {[
          {
            img: "/assets/furmanov.jpeg",
            number: "01",
            text: "Bы выбираете тур, который вам больше всего подошел. Изучите варианты на нашем сайте.",
          },
          {
            img: "/assets/mounPhoto.jpeg",
            number: "02",
            text: "Определите дату для вашего путешествия и оплатите тур прямо на нашем сайте.",
          },
          {
            img: "/assets/mountain.jpeg",
            number: "03",
            text: "Дождитесь звонка от вашего персонального менеджера, который проинструктирует вас по вашему туру.",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="flex-1 relative group overflow-hidden rounded-lg bg-black/5 min-h-[250px] sm:min-h-[300px] lg:min-h-[550px]"
          >
            {/* Фон при наведении */}
            <div style={{ backgroundImage: `url(${step.img})` }}
              className={`absolute inset-0  bg-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 brightness-75`}
            ></div>

            {/* Номер */}
            <div className="absolute w-full h-full flex justify-center items-center group-hover:opacity-0 transition-opacity duration-500">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl text-[#313743] font-bold">
                {step.number}
              </h1>
            </div>

            {/* Текст при наведении */}
            <div className="relative opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 z-10">
              <p className="text-base sm:text-lg lg:text-xl text-white">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Вторая секция */}
      <div className="mt-20">
        <p className="text-lg sm:text-xl text-[#313743]">Найди себя:</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#313743] mt-5 mb-5">
          КОМУ ПОДХОДЯТ ТУРЫ ?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: "/assets/Boy.jpeg",
              title: "НЕДАВНО ПЕРЕЕХАЛИ",
              desc: "Главная ценность Казахстана — природа. Это первое, с чем вам нужно познакомиться.",
            },
            {
              img: "/assets/Save = follow╰❥Sαʀαh❦🐳.jpeg",
              title: "ВЛЮБЛЕННЫЕ",
              desc: "Некоторые из наших туров входят в топ лучших мест для свиданий.",
            },
            {
              img: "/assets/Pir.jpeg",
              title: "ВСТРЕЧАЕТЕ ГОСТЕЙ",
              desc: "Что может быть лучше, чем подарить гостям эмоции, которые останутся в памяти навсегда?",
            },
            {
              img: "/assets/⛰️.jpeg",
              title: "ВЫГОРАЮЩИЕ СПЕЦИАЛИСТЫ",
              desc: "Некоторые из наших туров — настоящая перезагрузка.",
            },
            {
              img: "/assets/Походники.jpeg",
              title: "КОМПАНИЯ ДРУЗЕЙ",
              desc: "Пик 'Советов', 'Белуха', Кольсай, Кайынды, Чарын — выбирайте маршрут.",
            },
            {
              img: "/assets/туристы.jpeg",
              title: "ТУРИСТЫ В КАЗАХСТАН",
              desc: "Туры в самые важные и красивые места с лучшими гидами.",
            },
          ].map((item, i) => (
            <div key={i}>
              <img
                className="w-full h-60 sm:h-56 lg:h-100 object-cover rounded-md brightness-75"
                src={item.img}
                alt={item.title}
              />
              <h3 className="mt-4 text-xl font-bold text-[#313743]">
                {item.title}
              </h3>
              <p className="text-base text-[#313743]">{item.desc}</p>
            </div>
          ))}

          {/* Последний блок */}
          <div className="border lg:h-100 border-[#313743] p-6 flex flex-col justify-center items-center rounded-md">
            <h1 className="text-2xl text-center sm:text-3xl lg:text-4xl font-bold text-[#313743] mb-4">
              Поехали с нами!
            </h1>
            <p className="text-base sm:text-lg text-[#313743] text-center">
              Выбери тур, который подходит тебе уже сейчас!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
