import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWA from "./components/FloatingWA";

export default function App() {
  return (
    <main className="w-full overflow-x-hidden min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <FloatingWA />
    </main>
  );
}
