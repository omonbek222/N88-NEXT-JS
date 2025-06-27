import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/CarouselSection";
import CategoryTabs from "@/components/CategoryTabs";

export default function HomePage() {
  return (
    <main className="bg-black text-white font-sans">
      <Navbar />
      <HeroSection />
      <CarouselSection title="Новинки" />
      <CarouselSection title="Популярное" />
      <CarouselSection title="Выбор редакции" />
      <CategoryTabs />
    </main>
  );
}
