import { companyData } from "../data/companyData";
import { ArrowRight, Award, PackageCheck, Globe2, Smile, Ship, Plane } from "lucide-react";

export default function Hero() {
  const scrollToLayanan = () => {
    const el = document.querySelector("#layanan");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const statIcons = [
    <Award key="award" className="w-6 h-6 text-amber-500 mb-2"/>,
    <PackageCheck key="pkg" className="w-6 h-6 text-amber-500 mb-2"/>,
    <Globe2 key="globe" className="w-6 h-6 text-amber-500 mb-2"/>,
    <Smile key="smile" className="w-6 h-6 text-amber-500 mb-2"/>,
  ];

  return (
    <section id="beranda" className="relative w-full min-h-[100dvh] bg-[#070d1e] text-white flex flex-col justify-between pt-24 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* 1. Latar Belakang Decorative Ambient Light & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950/80 to-[#070d1e] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

      {/* Decorative Floating Freight Icons Background */}
      <Ship className="absolute top-1/4 -left-10 w-64 h-64 text-blue-500/5 -rotate-12 pointer-events-none"/>
      <Plane className="absolute top-1/3 -right-10 w-72 h-72 text-blue-500/5 rotate-12 pointer-events-none"/>

      {/* 2. Main Hero Content */}
      <div className="max-w-6xl mx-auto text-center my-auto flex flex-col items-center justify-center space-y-6 z-10 py-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Melayani Seluruh Indonesia & Internasional
        </div>

        {/* Main Title - Enlarged */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
          {companyData.name.split(" ").slice(0, 2).join(" ")}{" "}
          <span className="text-amber-500 drop-shadow-md">
            {companyData.name.split(" ").slice(2).join(" ")}
          </span>
        </h1>

        {/* Subtitles - Enlarged */}
        <div className="space-y-2 max-w-3xl mx-auto px-2">
          <p className="text-slate-200 text-sm sm:text-xl md:text-2xl font-medium leading-relaxed">
            {companyData.slogan}
          </p>
          <p className="text-amber-400 text-xs sm:text-base font-semibold tracking-wide">
            {companyData.subSlogan}
          </p>
        </div>

        {/* CTA Buttons - Enlarged */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 w-full px-4 sm:px-0">
          <a
            href={companyData.whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm sm:text-base transition-all transform hover:-translate-y-0.5 shadow-xl shadow-amber-500/20"
          >
            Konsultasi Gratis <ArrowRight className="w-5 h-5"/>
          </a>
          <button
            onClick={scrollToLayanan}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm sm:text-base transition-all backdrop-blur-md"
          >
            Lihat Layanan
          </button>
        </div>
      </div>

      {/* 3. Stat Cards - Larger Padding, Icons & Bigger Numbers */}
      <div className="max-w-6xl mx-auto w-full z-10 mt-6 sm:mt-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-6">
          {companyData.stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-900/60 backdrop-blur-lg border border-slate-800/80 hover:border-amber-500/40 rounded-2xl p-3 md:p-6 text-center flex flex-col items-center justify-center transition-all duration-300 shadow-xl"
            >
              {statIcons[index]}
              <span className="text-amber-500 font-black text-2xl md:text-4xl leading-tight mb-1">
                {stat.value}
              </span>
              <span className="text-slate-300 text-xs md:text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
