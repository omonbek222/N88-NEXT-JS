const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      <div className="text-xl font-bold">АУДИТЕРИЯ</div>
      <nav className="flex items-center gap-6">
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Каталог</a>
        <button className="bg-white text-black px-4 py-2 rounded-md">Регистрация</button>
        <button className="border border-white px-4 py-2 rounded-md">Войти</button>
      </nav>
    </header>
  );
};

export default Navbar;
