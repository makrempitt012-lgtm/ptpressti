// ============================================================
// DATA RESMI PT. PRESSTI ASIA CARGO
// Single Source of Truth — Digunakan oleh seluruh komponen
// ============================================================

export const companyData = {
  name: "PT. PRESSTI ASIA CARGO",
  shortName: "Pressti Asia Cargo",
  slogan: "Solusi Terpercaya untuk Kebutuhan Import & Export Anda!",
  subSlogan: "Import Mudah • Export Lancar • Bisnis Semakin Berkembang!",

  address:
    "Jl. Raya Lenteng Agung Kav. 22 No. 20, Jakarta Selatan 12610, Indonesia",
  email: "Hermanpressticargo82@gmail.com",

  whatsapp: [
    {
      label: "WhatsApp 1",
      display: "0811-1111-9699",
      number: "6281111119699",
    },
    {
      label: "WhatsApp 2",
      display: "0853-5528-5421",
      number: "6285355285421",
    },
  ],

  whatsappLink: (message = "Halo PT. Pressti Asia Cargo, saya ingin bertanya mengenai layanan Anda.") =>
    `https://wa.me/6281111119699?text=${encodeURIComponent(message)}`,

  emailLink: "mailto:Hermanpressticargo82@gmail.com",

  // Google Maps embed — PRESSTI CARGO
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3560363049718!2d106.83509071305069!3d-6.339071701595228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edce5cd584bd%3A0xa912966ef66321f1!2sPRESSTI%20CARGO!5e0!3m2!1sen!2sus!4v1786374065521!5m2!1sen!2sus",

  services: [
    {
      id: 1,
      title: "Jasa Import Barang",
      description:
        "Layanan import barang dari berbagai negara di seluruh dunia dengan proses yang mudah, cepat, dan aman.",
      icon: "PackageOpen",
      details: "Kami melayani pengurusan impor dari China, Singapura, Amerika, Eropa, dan negara lainnya. Penanganan mencakup izin impor, pengurusan pajak bea cukai, hingga barang tiba di gudang Anda.",
      benefits: ["Proses Bea Cukai Cepat", "Garansi Keamanan Barang", "Tracking Real-time", "Biaya Transparan"],
    },
    {
      id: 2,
      title: "Jasa Export Barang",
      description:
        "Kirim barang ke seluruh penjuru dunia dengan jaminan keamanan dan ketepatan waktu pengiriman.",
      icon: "Send",
      details: "Bantu produk lokal melesat ke pasar global. Kami mengurus dokumen ekspor (PEB, COO, Phytosanitary), moda transportasi udara/laut, dan pengiriman Internasional.",
      benefits: ["Jaringan Logistik Global", "Konsultasi Regulasi Ekspor", "Pengurusan Dokumen Lengkap"],
    },
    {
      id: 3,
      title: "Customs Clearance",
      description:
        "Pengurusan bea cukai yang profesional dan sesuai regulasi untuk kelancaran proses impor dan ekspor Anda.",
      icon: "ShieldCheck",
      details: "Tim ahli kepabeanan kami siap membantu menyelesaikan proses custom clearance barang komersial maupun jalur cepat tanpa kendala administrasi.",
      benefits: ["Tim Ahli Berlisensi", "Meminimalisir Risiko Red Line", "Proses Cepat & Tepat"],
    },
    {
      id: 4,
      title: "Door to Door Service",
      description:
        "Layanan pengiriman langsung dari pintu pengirim ke pintu penerima tanpa repot.",
      icon: "Home",
      details: "Layanan all-in di mana Anda cukup menyerahkan barang di lokasi asal, dan kami akan mengantarkannya sampai ke alamat tujuan akhir.",
      benefits: ["Bebas Repot Operasional", "All-in Rate (Tanpa Biaya Tersembunyi)", "Layanan Jemput Barang"],
    },
    {
      id: 5,
      title: "Air Freight",
      description:
        "Pengiriman udara yang cepat dan efisien untuk barang-barang yang membutuhkan kecepatan tinggi.",
      icon: "Plane",
      details: "Solusi terbaik untuk komoditas bernilai tinggi atau kebutuhan pengiriman mendesak (express/urgent cargo) via maskapai penerbangan internasional.",
      benefits: ["Waktu Transit Singkat (1-3 Hari)", "Prioritas Penanganan", "Akses Rute Global"],
    },
    {
      id: 6,
      title: "Sea Freight (LCL & FCL)",
      description:
        "Pengiriman laut dengan pilihan LCL (Less Container Load) maupun FCL (Full Container Load) sesuai kebutuhan.",
      icon: "Ship",
      details: "Kirim barang volume besar dengan biaya hemat. Pilihan FCL (sewa kontainer utuh 20ft/40ft) atau LCL (gabungan cargo kecil).",
      benefits: ["Kapasitas Besar", "Tarif Paling Ekonomis", "Jadwal Kapal Rutin"],
    },
    {
      id: 7,
      title: "Pengiriman Komersial & Pribadi",
      description:
        "Solusi pengiriman untuk kebutuhan komersial maupun pribadi dengan layanan terpadu.",
      icon: "Boxes",
      details: "Baik untuk pengiriman skala besar perusahaan (B2B) maupun barang personal (B2C), kami menyusun rute dan metode terbaik untuk barang Anda.",
      benefits: ["Layanan Terpersonalisasi", "Keamanan Terjamin", "Dukungan Pengepakan"],
    },
    {
      id: 8,
      title: "Konsultasi Import & Export",
      description:
        "Tim ahli kami siap membantu Anda memahami regulasi dan strategi terbaik untuk bisnis Anda.",
      icon: "MessageCircle",
      details: "Kami menyediakan pendampingan profesional dari perhitungan pajak, regulasi larangan terbatas (lartas), hingga strategi rantai pasok paling efisien.",
      benefits: ["Analisis Regulasi Terkini", "Strategi Hemat Biaya", "Dukungan Penuh via Chat/Tatap Muka"],
    },
    {
      id: 9,
      title: "Solusi Logistik untuk UMKM",
      description:
        "Solusi logistik internasional yang dirancang khusus untuk UMKM, perusahaan, dan distributor.",
      icon: "Globe",
      details: "Dukungan menyeluruh bagi pelaku UMKM untuk melakukan ekspansi bisnis global. Tarif spesial dan fleksibilitas kuantitas barang pengiriman.",
      benefits: ["Tarif Kompetitif UMKM", "Pendampingan Dokumen Legal", "Tidak Ada Minimum Ekspor/Impor"],
    },
  ],

  stats: [
    { value: "10+", label: "Tahun Pengalaman" },
    { value: "5000+", label: "Pengiriman Sukses" },
    { value: "30+", label: "Negara Tujuan" },
    { value: "99%", label: "Kepuasan Klien" },
  ],

  navigation: [
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan", href: "#layanan" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Hubungi Kami", href: "#kontak" },
  ],
};
