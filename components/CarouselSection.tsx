import Image from "next/image";

interface Props {
  title: string;
}

const CarouselSection = ({ title }: Props) => {
  return (
    <section className="px-6 py-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="bg-[#272727] px-3 py-1 rounded-md text-sm text-orange-400">Смотреть всё</span>
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

export default CarouselSection;
