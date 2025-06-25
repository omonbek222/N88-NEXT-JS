const products = [
  {
    id: 1,
    name: "Model A",
    image: "/images/window1.jpg",
    desc: "Sifatli plastik deraza"
  },
  {
    id: 2,
    name: "Model B",
    image: "/images/window2.jpg",
    desc: "Issiqlikni saqlovchi"
  },
  {
    id: 3,
    name: "Model C",
    image: "/images/window3.jpg",
    desc: "Zamonaviy dizayn"
  }
];

const ProductSection = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <h3 className="text-3xl font-semibold text-center mb-10">Mahsulotlar</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map(p => (
          <div key={p.id} className="border rounded shadow-md overflow-hidden">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">{p.name}</h4>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
