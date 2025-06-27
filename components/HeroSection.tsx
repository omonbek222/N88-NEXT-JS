import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-[#1a1a1a] px-6 pt-10 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-snug max-w-md">
            Книги, которые вам хочется слушать
          </h1>
          <p className="text-gray-400 mt-4 max-w-sm">
            Глубокий выбор художественной и полезной литературы. Слушайте везде и наслаждайтесь
          </p>
          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
            Выбрать книгу
          </button>
        </div>
        <div className="flex-1 relative w-full h-[400px] mt-6 md:mt-0">
          <Image
            src="/girl.png"
            alt="Girl listening to audiobook"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
