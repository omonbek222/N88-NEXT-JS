import Image from "next/image";

const CategoryTabs = () => {
  return (
    <section className="px-6 py-10">
      <div className="flex gap-6 text-lg font-semibold mb-4">
        <span className="text-orange-400">Новинки</span>
        <span>Популярное</span>
        <span>Выбор редакции</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Array(6).fill(0).map((_, i) => (
          <div
            key={i}
            className="bg-[#1f1f1f] rounded-lg p-3 text-sm hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-44 mb-2">
              <Image
                src="/book.png"
                alt="Book Cover"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="text-white font-medium">Название книги</div>
            <div className="text-gray-400 text-xs">Автор книги</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryTabs;
