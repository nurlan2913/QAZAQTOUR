import React, { useState } from "react";

export default function Program() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Программа тура</h1>

      {/* Tabs */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === 1
              ? "bg-green-200 font-bold"
              : "bg-green-100 hover:bg-green-200"
          }`}
        >
          1 день
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === 2
              ? "bg-green-200 font-bold"
              : "bg-green-100 hover:bg-green-200"
          }`}
        >
          2 день
        </button>
      </div>

      {/* Content */}
      <div className="bg-green-100 p-6 rounded-lg flex flex-col md:flex-row md:space-x-6">
        <div className="flex-1">
          {activeTab === 1 && (
            <>
              <h2 className="text-lg font-bold mb-4">1 день</h2>
              <p>07:00 — Выезд из места размещения. Во время пути рассказ путевой информации</p>
              <p>10:00 — Прибытие на Чарынский Каньон.</p>
              <p>10:00-13:00 — Пешая экскурсия. Обед</p>
              <p>13:30 — Выезд на озеро Кайынды</p>
              <p>15:00 — Прибытие на озеро Кайынды, пешая прогулка</p>
              <p>18:00 — Прибытие в село Саты, размещение в гостевом доме, ужин</p>
            </>
          )}

          {activeTab === 2 && (
            <>
              <h2 className="text-lg font-bold mb-4">2 день</h2>
              <p>08:00 — Завтрак</p>
              <p>09:00 — Поездка к Кольсайским озёрам</p>
              <p>12:00 — Пешая прогулка</p>
              <p>15:00 — Отправление в город</p>
              <p>19:00 — Прибытие обратно</p>
            </>
          )}
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={activeTab === 1 ? "/images/charyn.jpg" : "/images/kolsai.jpg"}
            alt="Фото"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
