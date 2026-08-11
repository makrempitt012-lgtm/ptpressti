import { companyData } from "../data/companyData";
import {
  MapPin,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-[#060e1a] via-[#0a1628] to-[#0f2847]">
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-slate-50"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="PT. Pressti Asia Cargo" 
                className="h-12 sm:h-14 w-auto object-contain" 
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              {companyData.slogan} Kami menyediakan solusi logistik internasional
              terbaik untuk mendukung pertumbuhan bisnis Anda.
            </p>
            <div className="flex items-start gap-2 text-slate-400">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
              <p className="text-sm">{companyData.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Menu Cepat
            </h4>
            <ul className="space-y-3">
              {companyData.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={companyData.emailLink}
                  className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">{companyData.email}</span>
                </a>
              </li>
              {companyData.whatsapp.map((wa) => (
                <li key={wa.number}>
                  <a
                    href={`https://wa.me/${wa.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {wa.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            &copy; {currentYear} {companyData.name}. Seluruh hak cipta dilindungi.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-white/5 hover:bg-amber-500/20 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-110"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
