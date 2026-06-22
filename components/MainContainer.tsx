import Footer from "./Footer";
import Header from "./Header";
import HeaderCompleto from "./HeaderCompleto";

export default function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderCompleto />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}