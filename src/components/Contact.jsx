import { useState, useEffect, useRef } from "react";
import { companyData } from "../data/companyData";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    jenis: "Import",
    negara: "",
    jenisBrg: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

    const items = sectionRef.current?.querySelectorAll(".contact-animate");
    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `Halo PT. Pressti Asia Cargo, saya ingin mengajukan penawaran:

📋 *Data Pengirim:*
• Nama: ${formData.nama}
• Email: ${formData.email}
• Telepon: ${formData.telepon}

📦 *Detail Pengiriman:*
• Jenis Layanan: ${formData.jenis}
• Negara Asal/Tujuan: ${formData.negara}
• Jenis Barang: ${formData.jenisBrg}

💬 *Pesan Tambahan:*
${formData.pesan || "-"}

Mohon informasi estimasi biaya dan waktu pengiriman. Terima kasih!`;

    const waUrl = `https://wa.me/6281111119699?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Alamat Kantor",
      value: companyData.address,
      href: null,
    },
    {
      icon: Mail,
      label: "Email",
      value: companyData.email,
      href: companyData.emailLink,
    },
    {
      icon: Phone,
      label: "WhatsApp 1",
      value: companyData.whatsapp[0].display,
      href: `https://wa.me/${companyData.whatsapp[0].number}`,
    },
    {
      icon: Phone,
      label: "WhatsApp 2",
      value: companyData.whatsapp[1].display,
      href: `https://wa.me/${companyData.whatsapp[1].number}`,
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin – Sabtu, 08.00 – 17.00 WIB",
      href: null,
    },
  ];

  return (
    <section id="kontak" className="relative py-24 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 contact-animate opacity-0 translate-y-8 transition-all duration-700">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Minta{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Penawaran Gratis
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Isi formulir di bawah dan tim kami akan segera menghubungi Anda
            melalui WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <div className="contact-animate opacity-0 translate-y-8 transition-all duration-700 delay-100">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-amber-500" />
                Formulir Estimasi Pengiriman
              </h3>

              {submitted && (
                <div className="mb-6 flex items-center gap-2 p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    Pesan berhasil dikirim ke WhatsApp! Tim kami akan segera merespons.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      required
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@contoh.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">
                      No. Telepon / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telepon"
                      value={formData.telepon}
                      onChange={handleChange}
                      required
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">
                      Jenis Layanan *
                    </label>
                    <select
                      name="jenis"
                      value={formData.jenis}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    >
                      <option>Import</option>
                      <option>Export</option>
                      <option>Customs Clearance</option>
                      <option>Door to Door</option>
                      <option>Air Freight</option>
                      <option>Sea Freight</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">
                      Negara Asal / Tujuan *
                    </label>
                    <input
                      type="text"
                      name="negara"
                      value={formData.negara}
                      onChange={handleChange}
                      required
                      placeholder="Contoh: China, Jepang, dll."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-1.5">
                      Jenis Barang *
                    </label>
                    <input
                      type="text"
                      name="jenisBrg"
                      value={formData.jenisBrg}
                      onChange={handleChange}
                      required
                      placeholder="Contoh: Elektronik, Tekstil, dll."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-1.5">
                    Pesan Tambahan
                  </label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Jelaskan kebutuhan Anda secara detail..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-amber-500/30 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Kirim via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Info & Map */}
          <div className="contact-animate opacity-0 translate-y-8 transition-all duration-700 delay-200 space-y-6">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 space-y-5">
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Informasi Kontak
              </h3>
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                const Wrapper = info.href ? "a" : "div";
                const wrapperProps = info.href
                  ? {
                      href: info.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};
                return (
                  <Wrapper
                    key={i}
                    {...wrapperProps}
                    className={`flex items-start gap-4 p-3 rounded-xl transition-all duration-200 ${
                      info.href
                        ? "hover:bg-amber-50 cursor-pointer"
                        : ""
                    }`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#1e3a5f] to-[#0f2847] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="text-slate-700 text-sm font-medium mt-0.5">
                        {info.value}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              <div className="p-5 pb-3">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  Lokasi Kantor Kami
                </h3>
              </div>
              <div className="px-5 pb-5">
                <div className="rounded-2xl overflow-hidden">
                  <iframe
                    src={companyData.mapEmbedUrl}
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi PT. Pressti Asia Cargo"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
