import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider, ThemeSwitcher } from "colbrush";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <ThemeProvider>
          <Outlet />
          <ThemeSwitcher className={`bottom-10 right-10`}/>
        </ThemeProvider>
      </main>
      <Footer />
    </div>
  );
}
