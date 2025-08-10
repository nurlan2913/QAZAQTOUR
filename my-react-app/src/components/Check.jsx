import React, { useState, useEffect } from "react";

export default function Check() {
  const [participants, setParticipants] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ city: "", name: "", phone: "" });
  const [toast, setToast] = useState("");
  const basePrice = 600;

  const pricePerPerson = participants >= 2 ? basePrice * 0.8 : basePrice;
  const totalPrice = pricePerPerson * participants;

  const handleBuy = (tourName) => {
    setShowForm(true);
    localStorage.setItem("selectedTour", tourName);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.city || !formData.name || !formData.phone) {
      alert("Заполните все поля!");
      return;
    }
    const order = {
      ...formData,
      tour: localStorage.getItem("selectedTour"),
      participants,
      price: totalPrice,
    };
    localStorage.setItem("tourOrder", JSON.stringify(order));
    setFormData({ city: "", name: "", phone: "" });
    setShowForm(false);
    setToast("Спасибо за выбор! Ваш заказ оформлен. Скоро с вами свяжется!");
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 mt-10 relative">
      <h1 className="text-3xl sm:text-4xl text-[#313743] font-bold text-center mb-6">
        Стоимость тура
      </h1>

      <div className="grid gap-6 mt-10 sm:grid-cols-2">
        {/* Стандарт */}
        <div className="bg-[#313743] p-6 rounded-lg flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
              <h2 className="text-xl font-bold">Стандарт</h2>
              <span className="text-sm bg-[#4d535f] px-2 py-1 rounded-lg whitespace-nowrap">
                ⭐ Популярный выбор
              </span>
            </div>
            <p className="mb-4">
              Мы берём на себя только транспорт и сопровождение
            </p>
            <h3 className="font-bold mb-2">Включено</h3>
            <ul className="space-y-1 mb-4">
              <li>➕ гид-водитель</li>
              <li>➕ внедорожник или минивэн</li>
            </ul>
            <p className="font-bold text-lg">
              $500 <span className="text-sm font-normal">/за поездку</span>
            </p>
            <p className="text-sm">максимум 6 мест</p>
          </div>
          <button
            onClick={() => handleBuy("Стандарт")}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg mt-4"
          >
            Купить тур
          </button>
        </div>

        {/* Комфорт */}
        <div className="bg-[#313743] p-6 rounded-lg flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
              <h2 className="text-xl font-bold">Комфорт</h2>
              <span className="text-sm bg-[#4d535f] px-2 py-1 rounded-lg whitespace-nowrap">
                ⭐ Рекомендуем
              </span>
            </div>
            <p className="mb-4">
              Организуем и проследим за всеми деталями тура
            </p>
            <h3 className="font-bold mb-2">Включено</h3>
            <ul className="space-y-1 mb-4">
              <li>➕ гид-водитель</li>
              <li>➕ внедорожник или минивэн</li>
              <li>➕ проживание в гостевых домах</li>
              <li>➕ трёхразовое питание</li>
              <li>➕ входные билеты</li>
            </ul>

            <div className="mb-4">
              <p className="mb-2">Количество участников</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setParticipants((p) => Math.max(1, p - 1))}
                  className="bg-[#4d535f] px-3 py-1 rounded-full"
                >
                  -
                </button>
                <span className="w-8 text-center">{participants}</span>
                <button
                  onClick={() => setParticipants((p) => p + 1)}
                  className="bg-[#4d535f] px-3 py-1 rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            <p className="font-bold text-lg">
              ${totalPrice.toFixed(2)}{" "}
              <span className="text-sm font-normal">
                /за тур на {participants}{" "}
                {participants === 1 ? "человека" : "человек"}
              </span>
            </p>
            {participants >= 2 && (
              <p className="text-green-600 text-sm mt-1">
                Скидка 20% применена
              </p>
            )}
          </div>
          <button
            onClick={() => handleBuy("Комфорт")}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg mt-4"
          >
            Купить тур
          </button>
        </div>
      </div>

      {/* Модалка */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white text-[#313743] p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Оформление тура</h2>
            <input
              type="text"
              name="city"
              placeholder="Город"
              value={formData.city}
              onChange={handleChange}
              className="border p-2 w-full mb-3 rounded"
            />
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full mb-3 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Номер телефона"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full mb-3 rounded"
            />
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
              >
                Отмена
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-center max-w-xs">
          {toast}
        </div>
      )}
    </div>
  );
}
