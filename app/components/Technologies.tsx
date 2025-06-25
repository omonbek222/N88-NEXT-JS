const tech = [
  "Клееный брус", "Лифт", "Фахверковое", "Рубленное бревно",
  "Каркасное", "CLT-панели", "Панельно-рамочное", "Жилой (вагонка)"
];

export default function Technologies() {
  return (
    <section className="max-w-6xl mx-auto mt-16 px-6">
      <h2 className="text-2xl font-semibold mb-6">Технологии строительства</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {tech.map((name, i) => (
          <div key={i} className="p-4 border rounded-md bg-white shadow-sm text-center text-sm">
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}
