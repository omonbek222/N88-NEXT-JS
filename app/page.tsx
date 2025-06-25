import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductSection />
      <Footer />
    </main>
  );
}
