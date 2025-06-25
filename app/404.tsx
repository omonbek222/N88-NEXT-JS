export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">Sahifa topilmadi</p>
        <a href="/" className="text-green-600 underline">Bosh sahifaga qaytish</a>
      </div>
    </div>
  );
}
