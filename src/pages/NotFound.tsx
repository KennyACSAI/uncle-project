import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Hatası: Kullanıcı mevcut olmayan bir sayfaya erişmeye çalıştı:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 animate-fade-in">
      <div className="text-center animate-slide-up">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Sayfa bulunamadı</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
};

export default NotFound;