import { Outlet } from "react-router-dom";
import { Header, Footer, Contact } from "@/layout";

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <Outlet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
