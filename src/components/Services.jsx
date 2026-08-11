import { useEffect, useRef, useState } from "react";
import { companyData } from "../data/companyData";
import {
  PackageOpen,
  Send,
  ShieldCheck,
  Home,
  Plane,
  Ship,
  Boxes,
  MessageCircle,
  Globe,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";

const iconMap = {
  PackageOpen,
  Send,
  ShieldCheck,
  Home,
  Plane,
  Ship,
  Boxes,
  MessageCircle,
  Globe,
};

export default function Services() {
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="layanan" className="relative bg-slate-50 py-24" ref={sectionRef}>
      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#0f2847]"
          />
        </svg>
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Solusi{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Logistik Lengkap
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan import, export, dan logistik
            internasional yang profesional dan terpercaya.
          </p>
        </div>
      </div>

      {/* Service Cards Grid — LOCKED to max-w-7xl, standard grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {companyData.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className={`service-card opacity-0 translate-y-8 transition-all duration-700 group`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative h-full bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-amber-200 overflow-hidden hover:-translate-y-2">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  {/* Icon */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#0f2847] flex items-center justify-center shadow-lg group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-500 group-hover:scale-110 group-hover:shadow-amber-500/25">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#0f2847] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors group/link cursor-pointer"
                    >
                      Pelajari Lebih Lanjut
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* POP-UP MODAL DETAIL LAYANAN */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-[92%] sm:w-full p-5 md:p-8 relative shadow-2xl border border-slate-100">
            
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5"/>
            </button>

            {/* Header Modal */}
            <h3 className="text-2xl font-bold text-slate-900 mb-3 pr-8">
              {selectedService.title}
            </h3>

            {/* Deskripsi Detail */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedService.details}
            </p>

            {/* Keunggulan */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase text-amber-600 tracking-wider mb-3">Keunggulan Layanan:</h4>
              <ul className="space-y-2">
                {selectedService.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"/>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button inside Modal */}
            <div className="flex gap-3 pt-2 border-t border-slate-100 mt-6">
              <a
                href={companyData.whatsappLink(`Halo PT. Pressti Asia Cargo, saya ingin tanya detail mengenai layanan ${selectedService.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md"
              >
                Konsultasi Layanan Ini via WA
                <ArrowRight className="w-4 h-4"/>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
