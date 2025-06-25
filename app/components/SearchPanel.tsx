export default function SearchPanel() {
  return (
    <div className="bg-white shadow-md p-6 rounded-md max-w-6xl mx-auto mt-[-60px] relative z-10">
      <form className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <select className="border p-2 rounded">Тип строения</select>
        <select className="border p-2 rounded">Габариты, м</select>
        <select className="border p-2 rounded">Общая площадь, м²</select>
        <select className="border p-2 rounded">Стоимость, ₽</select>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          С мансардой
        </label>
        <button className="bg-green-500 text-white py-2 px-4 rounded">Подобрать</button>
      </form>
    </div>
  );
}
