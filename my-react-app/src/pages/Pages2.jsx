import { useParams } from "react-router-dom";
import tours from "../toursData";
import Program from "../components/Program";
import Check from "../components/Check";
import Gallery from "../components/Gallery/Gallery";

export default function Pages2() {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return <h1 className="text-center mt-20">Тур не найден</h1>;
  }

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8">
      {/* Заголовок */}
      <div className="bg-[#313743] py-10 text-white rounded-lg shadow-lg">
        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl font-bold">
          {tour.title}
        </h1>
      </div>

      {/* Галерея */}
      <div className="mt-10">
        <Gallery />
      </div>

      {/* Описание */}
      <div className="mt-10 bg-[#313743] text-white p-6 sm:p-10 rounded-lg max-w-5xl mx-auto">
        <h1 className="text-center text-xl sm:text-2xl font-semibold">
          {tour.h1title}
        </h1>
        <p className="text-base sm:text-lg mt-5">
          {tour.description}
        </p>
        <ul className="text-base sm:text-lg gap-3 list-disc pl-5 mt-5 space-y-2">
          <li>{tour.li1Description}</li>
          <li>{tour.li2Description}</li>
          <li>{tour.li3Description}</li>
        </ul>
        <p className="text-base sm:text-lg mt-5">
          {tour.endDescription}
        </p>
      </div>

      {/* Маршрут */}
      <div className="mt-10">
        <h1 className="text-[#313743] text-center text-2xl sm:text-4xl font-bold">
          МАРШРУТ
        </h1>
      </div>

      <div className="text-[#313743] mt-5 text-lg sm:text-xl flex flex-wrap justify-center gap-2">
        {tour.route.map((point, idx) => (
          <span key={idx} className="flex items-center">
            {point}
            {idx !== tour.route.length - 1 && (
              <span className="mx-2">→</span>
            )}
          </span>
        ))}
      </div>

      {/* Программа */}
      <div className="mt-10">
        <Program program={tour.program} />
      </div>

      {/* Бронирование */}
      <div className="mt-10">
        <Check />
      </div>
    </div>
  );
}
