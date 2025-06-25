export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-10 text-white">
        <h1 className="text-4xl font-bold mb-4">Построй свою мечту</h1>
        <p className="text-lg">Наш сервис каждый день помогает купить минимум один домокомплект</p>
      </div>
    </section>
  );
}
