const types = [
  { name: "Дома", count: 158, img: "/type1.jpg" },
  { name: "Бани", count: 176, img: "/type2.jpg" },
  { name: "Гаражи", count: 152, img: "/type3.jpg" },
  { name: "Навесы", count: 152, img: "/type4.jpg" },
  { name: "Комм. объекты", count: 206, img: "/type5.jpg" },
];

export default function BuildingTypes() {
  return (
    <section className="max-w-6xl mx-auto mt-16 px-6">
      <h2 className="text-2xl font-semibold mb-6">Типы строений</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {types.map((t, i) => (
          <div key={i} className="text-center">
            <img src={t.img} alt={t.name} className="w-full rounded-md" />
            <p className="mt-2 font-semibold">{t.name}</p>
            <span className="text-sm text-gray-500">{t.count}+</span>
          </div>
        ))}
      </div>
    </section>
  );
}
