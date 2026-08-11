import { companyData } from "../data/companyData";

export default function FloatingWA() {
  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex flex-col items-start group">
      
      {/* Tooltip / Balon Teks di Atas Tombol */}
      <div className="mb-2 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-xl border border-slate-700 whitespace-nowrap transition-all duration-300 transform group-hover:scale-105 origin-left opacity-0 group-hover:opacity-100 pointer-events-none relative">
        Chat via WhatsApp
        {/* Panah Kecil Tooltip */}
        <div className="absolute top-full left-4 -mt-1 border-4 border-transparent border-t-slate-900"></div>
      </div>

      {/* Tombol WhatsApp */}
      <a
        href={companyData.whatsappLink("Halo PT. Pressti Asia Cargo, saya ingin bertanya mengenai layanan Anda.")}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat via WhatsApp"
      >
        {/* Pulse ring (from original) */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-ring pointer-events-none" />
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-ring delay-300 pointer-events-none" />
        
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99 0-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>

    </div>
  );
}
