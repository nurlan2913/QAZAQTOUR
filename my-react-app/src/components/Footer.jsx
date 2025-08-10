export default function Footer() {
  return (
    <footer className="w-full absolute left-0 bg-[#313743] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        
        {/* Лого */}
        <img
          className="w-32 h-auto"
          src="/Logo.png"
          alt="Логотип"
        />

        {/* Контакты */}
        <p className="text-sm text-center md:text-left">
          <span className="font-semibold">Контакты:</span>
          <br />
          +7(ххх)ххх-хх-хх
          <br />
          +7(ххх)ххх-хх-хх
        </p>

        {/* Адрес */}
        <p className="text-sm text-center md:text-left">
          <span className="font-semibold">Адрес:</span>
          <br />
          г. Алматы, ул. Мауленова 192
        </p>

        {/* Соцсети */}
        <div className="flex gap-4 justify-center">
          <img className="w-8 h-8" src="/Photo/instagram.png" alt="Instagram" />
          <img className="w-8 h-8" src="/Photo/phone.png" alt="Телефон" />
        </div>
      </div>
    </footer>
  );
}
