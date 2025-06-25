const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Tiwel Winda</h1>
      <ul className="flex space-x-6 text-gray-600 font-medium">
        <li><a href="#">Bosh sahifa</a></li>
        <li><a href="#">Mahsulotlar</a></li>
        <li><a href="#">Bog‘lanish</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
