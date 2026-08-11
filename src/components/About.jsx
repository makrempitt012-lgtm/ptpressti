import { useEffect, useRef } from "react";
import { companyData } from "../data/companyData";
import {
  CheckCircle2,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Zap,
} from "lucide-react";

const keunggulan = [
  {
    icon: Shield,
    title: "Terpercaya & Berizin Resmi",
    desc: "Perusahaan forwarder resmi dengan izin lengkap untuk menangani import dan export.",
  },
  {
    icon: Clock,
    title: "Cepat & Tepat Waktu",
    desc: "Proses pengiriman yang efisien dengan estimasi waktu yang akurat.",
  },
  {
    icon: TrendingUp,
    title: "Tarif Kompetitif",
    desc: "Harga terjangkau dengan kualitas layanan terbaik di kelasnya.",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    desc: "Didukung oleh tim berpengalaman di bidang logistik internasional.",
  },
  {
    icon: Zap,
    title: "Proses Mudah & Transparan",
    desc: "Pantau status pengiriman Anda secara real-time dengan mudah.",
  },
  {
    icon: CheckCircle2,
    title: "Layanan Door to Door",
    desc: "Kami jemput dan antarkan barang Anda dari pintu ke pintu.",
  },
];

export default function About() {
  const sectionRef = useRef(null);

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

    const items = sectionRef.current?.querySelectorAll(".about-animate");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tentang"
      className="relative py-24 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1e3a5f] overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 about-animate opacity-0 translate-y-8 transition-all duration-700">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-400 text-sm font-semibold rounded-full mb-4 border border-amber-500/20">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
            Mengapa Memilih{" "}
            <span className="text-gradient">Kami?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">{companyData.name}</span>{" "}
            adalah perusahaan jasa pengiriman barang (freight forwarding) yang
            berpengalaman dalam menangani import dan export ke seluruh dunia.
            Kami berkomitmen memberikan solusi logistik terbaik untuk mendukung
            pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Keunggulan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keunggulan.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="about-animate opacity-0 translate-y-8 transition-all duration-700 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-full glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center about-animate opacity-0 translate-y-8 transition-all duration-700">
          <a
            href={companyData.whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
          >
            Mulai Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
