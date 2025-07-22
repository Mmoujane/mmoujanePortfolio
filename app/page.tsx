import Image from "next/image";
import Hero from "./components/ui/hero";
import PortfolioSection from "./components/portfolio/portfolioSection";
import Experience from "./components/portfolio/experience";
import BlogSection from "./components/blog/BlogSection";
import About from "./components/portfolio/about";
import Education from "./components/portfolio/education";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <PortfolioSection />
      <Education />
      <Experience />
      <BlogSection />
      <About />
    </div>
  );
}
