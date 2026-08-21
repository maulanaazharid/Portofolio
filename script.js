  /* ================================================================
   PORTOFOLIO - SCRIPT.JS
   Berisi semua data + logika interaksi website
   ================================================================ */

/* ================================================================
   DATA: Teks animasi ketik di Hero
   UBAH: Ganti atau tambah teks sesuai profil kamu
   ================================================================ */
const typingTexts = [
  "Basic Python Programmer",
  "Cyber Security Learner",
  "Basic C++ Programmer",
  "Online sales",
  "Content Creator",
  "Freelancer"
];

/* ================================================================
   DATA: Skill Box
   UBAH: Tambah atau hapus { name, icon } sesuai skill kamu
   Cari ikon di: https://fontawesome.com/icons
   ================================================================ */
const skillsData = [
  { name:"HTML (Basic)",        icon:"fab fa-html5"         },
  { name:"Css (Basic)",        icon:"fab fa-css3-alt"         },
  { name:"Python (Basic)",            icon:"fab fa-python"        },
  { name:"C++ (Basic)", icon:"devicon-cplusplus-plain colored" },
  { name:"Website Deployment", icon:"fab fa-dev" },
  { name:"Problem Solving", icon:"fas fa-brain" },
  { name:"Customer Service", icon:"fas fa-headset" },
  { name:"GitHub",      icon:"fab fa-git-alt"       },
  { name:"Digital Content Creation",     icon:"fas fa-film"          },
  { name:"Basic UI/UX Design", icon:"fab fa-figma"         },
  { name:"Basic Cyber Security",    icon:"fas fa-shield-alt"    }
];

/* ================================================================
   DATA: Tools & Teknologi
   ================================================================ */
const toolsData = [
  { name:"ACode",    icon:"fab fa-autoprefixer"        },
  { name:"GitHub",     icon:"fab fa-github"      },
  { name:"Linux",             icon:"fab fa-linux"         },
  { name:"YouTube",    icon:"fab fa-youtube"     },
  { name:"Canva",      icon:"fas fa-palette"     },
  { name:"Codepen",  icon:"fab fa-codepen"   },
 { name:"ZArchiever",  icon:"fas fa-file"   },
  { name:"Apktool M",  icon:"fab fa-android"  }
];

/* ================================================================
   DATA: Project Portofolio
   UBAH: Tambah objek baru untuk menambah project
   
   category yang tersedia:
   "Website" | "Python" | "Cyber Security" | "YouTube" |
   "Freelance" | "Sertifikat" | "Lainnya"
   (Atau tambah kategori baru — tombol filter otomatis muncul)
   ================================================================ */
const projects = [
  {
    title:"Website Toko Online Netraverse",
    image:"assets/web-netraverse.jpg",
    description:"Website toko online dengan halaman produk dinamis, detail produk, slider gambar, dan integrasi pemesanan melalui WhatsApp.",
    category:"Website",
    demo:"https://netraverse-shop.vercel.app/", source:"#"
  },
    {
    title:"XAUUSD AI Trading analysis",
    image:"assets/tradebot.jpg",
    description:"Bot Telegram AI untuk analisis XAUUSD dengan indikator teknikal dan berita fundamental, lengkap dengan rekomendasi trading.",
    category:"Bot",
    demo:"https://github.com/maulanaazharid/xau-ai", source:"#"
  },
  {
    title:"Website Portofolio Pribadi",
    image:"assets/web-porto.jpg",
    description:"Website portofolio responsif untuk menampilkan profil, keterampilan, proyek, dan pengalaman secara profesional.",
    category:"Website",
    demo:"#", source:"#"
  },
  {
    title:"Simulasi Tata Surya",
    image:"assets/web-tatasurya.jpg",
    description:"Simulasi tata surya interaktif berbasis web yang menampilkan pergerakan planet mengelilingi matahari.",
    category:"Website",
    demo:"https://tatasurya-sandy.vercel.app/", source:"#"
  },
  {
    title:"Modifikasi APK Android",
    image:"assets/modifapk.jpg",
    description:"Eksplorasi struktur aplikasi Android menggunakan MT Manager untuk memahami konfigurasi aplikasi dan kompatibilitas sistem.",
    category:"Modifikasi",
    demo:"", source:"#"
  },
  {
    title:"YouTube Channel",
    image:"assets/channel.jpg",
    description:"Mengelola dan mengembangkan channel YouTube Shorts dengan fokus pada konten game. Telah mempublikasikan lebih dari 100 video, mencapai lebih dari 1000 Subscriber, dan total penayangan saat ini yang sudah mencapai lebih dari 1.000.000 penayangan.",
    category:"YouTube",
    demo:"https://youtube.com/@ravenshademlbb01", source:"#"
  },
  {
    title:"Transaksi Penjualan Online",
    image:"assets/penjualan.jpg",
    description:"Mengelola penjualan berbagai macam item, langganan, dan jasa game online secara mandiri melalui berbagai platform media sosial. Berhasil menangani lebih dari 700 transaksi pelanggan, termasuk komunikasi pelanggan, dan pemrosesan pesanan.",
    category:"Lainnya",
    demo:"", source:"#"
  }
];

/* ================================================================
   DATA: Sertifikat
   UBAH: Tambah objek baru untuk menambah sertifikat
   ================================================================ */
const certificates = [
  {
    title:"Computational Thinking: Cara Berpikir Logis untuk Mengatasi Masalah",
    issuer:"Digital Talent Scholarship (Komdigi)",
    date:"Agustus 2025",
    image:"assets/Computational Thinking Cara Berpikir Logis untuk Mengatasi Masalah.jpg"
  },
  {
    title:"Introduction To Cloud Computing",
    issuer:"Digital Talent Scholarship (Komdigi)",
    date:"Agustus 2025",
    image:"assets/Introduction To Cloud Computing.jpg"
  },
  {
    title:"Introduction to Python",
    issuer:"SoloLearn",
    date:"juni 2025",
    image:"assets/python.jpg"
  },
  {
    title:"Introduction to C++",
    issuer:"SoloLearn",
    date:"Juni 2026",
    image:"assets/c++.jpg"
  },
  {
    title:"Ethical Hacker For Dummies",
    issuer:"Digital Talent Scholarship (Komdigi)",
    date:"Agustus 2026",
    image:"assets/Ethical Hacker For Dummies.jpg"
  },
  {
    title:"Introduction to Cyber Security and Career Awareness",
    issuer:"Digital Talent Scholarship (Komdigi)",
    date:"Agustus 2026",
    image:"assets/Introduction to Cyber Security and Career Awareness.jpg"
  },
  {
    title:"Kompetisi Sains Madrasah (KSM) Tingkat Kabupaten",
    issuer:"Kabupaten Barito Kuala",
    date:"Juli 2019",
    image:"assets/ksm.jpg"
  },
  {
    title:"Penghargaan Peringkat 1 Akademik",
    issuer:"Total 20 Semerter",
    date:"2014-2026",
    image:"assets/peringkat1.jpg"
  },
  {
    title:"Purna Tugas OSIS",
    issuer:"SMA Negeri 1 Anjir Muara",
    date:"2025",
    image:"assets/osis.jpg"
  }
];

/* ================================================================
   DATA: Pengalaman / Timeline
   type: "education" atau "work"
   ================================================================ */
const experience = [
  {
    year:"2023 - Sekarang",
    title:"Penjualan Online (Mandiri)",
    place:"Online",
    description:"Mengelola penjualan produk digital melalui media sosial dan menangani lebih dari 700 transaksi pelanggan.",
    type:"work"
  },
  {
    year:"2023 - Sekarang",
    title:"Content Creator",
    place:"YouTube Shorts - Channel Ravenshade MLBB",
    description:"Membuat dan mengelola konten digital dengan lebih dari 100 video yang telah dipublikasikan dan tan total penayangan mencapai sekitar 1.000.000 lebih.",
    type:"work"
  },
  {
    year:"2025 – Sekarang",
    title:"Pengembangan Website",
    place:"Proyek Pribadi",
    description:"Membuat dan mengembangkan berbagai website sederhana untuk pembelajaran HTML, CSS, JavaScript, dan desain web responsif.",
    type:"work"
  },
  {
    year:"2022 – Sekarang",
    title:"Pembelajaran Python",
    place:"Self Learning",
    description:"Mempelajari dasar-dasar Python dan menerapkannya pada berbagai proyek latihan untuk meningkatkan kemampuan pemrograman.",
    type:"work"
  },
  {
    year:"2023 – 2025",
    title:"Anggota OSIS Bidang Keamanan",
    place:"SMA Negeri 1 Anjir Muara",
    description:"aktif membantu dan berpartisipasi dalam berbagai kegiatan organisasi.",
    type:"education"
  },
  {
    year:"2021 – 2026",
    title:"Pengelolaan Akses Ruangan Sekolah",
    place:"MTs Negeri 5 Barito Kuala",
    description:"Membantu pengelolaan akses ruang kelas dan fasilitas sekolah serta menjalankan tugas pembukaan dan penguncian ruangan sesuai jadwal.",
    type:"work"
  },
  {
    year:"2023 – 2026",
    title:"SMAN 1 Anjir Muara",
    place:"Kurikulum Merdeka",
    description:"Lulusan SMA dengan fokus pada Matematika Lanjutan, Bahasa Inggris Lanjutan, dan Kimia.",
    type:"work"
  }
];

/* ================================================================
   FUNGSI-FUNGSI JAVASCRIPT
   ================================================================ */

/* --- Animasi Teks Ketik --- */
let typingIdx  = 0;
let charIdx    = 0;
let isDeleting = false;

function typeEffect() {
  const el = document.getElementById("typing-text");
  if (!el) return;
  const txt = typingTexts[typingIdx];
  el.textContent = isDeleting
    ? txt.substring(0, charIdx - 1)
    : txt.substring(0, charIdx + 1);

  isDeleting ? charIdx-- : charIdx++;

  if (!isDeleting && charIdx === txt.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1600);
    return;
  }
  if (isDeleting && charIdx === 0) {
    isDeleting = false;
    typingIdx = (typingIdx + 1) % typingTexts.length;
  }
  setTimeout(typeEffect, isDeleting ? 55 : 105);
}

/* --- Render Skill Boxes (ikon + nama, tanpa progress bar) --- */
function renderSkills() {
  // Gunakan satu grid khusus untuk box skill
  const container = document.getElementById("skills-left");
  const right     = document.getElementById("skills-right");
  if (!container) return;

  // Sembunyikan kolom kanan karena kita pakai grid sendiri
  if (right) right.style.display = "none";

  // Ubah kolom kiri jadi full-width grid
  container.style.cssText = "display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:16px;width:100%;grid-column:1/-1";

  skillsData.forEach(s => {
    const box = document.createElement("div");
    box.className = "skill-box";
    box.innerHTML = `
      <div class="skill-box-icon"><i class="${s.icon}"></i></div>
      <span class="skill-box-name">${s.name}</span>
    `;
    container.appendChild(box);
  });
}

/* --- Animasi Skill Fill — tidak dipakai lagi (diganti box) --- */
function animateSkillBars() { /* tidak digunakan */ }

/* --- Render Tools --- */
function renderTools() {
  const g = document.getElementById("tools-grid");
  if (!g) return;
  g.innerHTML = "";
  toolsData.forEach(t => {
    const d = document.createElement("div");
    d.className = "tool-badge";
    d.innerHTML = `<i class="${t.icon}"></i>${t.name}`;
    g.appendChild(d);
  });
}

/* --- Render Filter Tombol --- */
let activeFilter = "Semua";
let visibleCount = 6;

function renderFilters() {
  const fc = document.getElementById("portfolio-filters");
  if (!fc) return;
  const cats = ["Semua", ...new Set(projects.map(p => p.category))];
  fc.innerHTML = "";
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === "Semua" ? " active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter  = cat;
      visibleCount  = 6;
      renderProjects(cat);
    });
    fc.appendChild(btn);
  });
}

/* --- Render Project Cards --- */
function renderProjects(filter = "Semua") {
  const grid = document.getElementById("portfolio-grid");
  const moreBtn = document.getElementById("load-more-btn");
  if (!grid) return;

  const filtered = filter === "Semua"
    ? projects
    : projects.filter(p => p.category === filter);

  grid.innerHTML = "";

  filtered.forEach((p, i) => {
    const hidden = i >= visibleCount ? "hidden" : "";
    const card = document.createElement("div");
    card.className = `project-card ${hidden}`;
    card.setAttribute("data-animate", "fade-up");
    card.setAttribute("data-delay", String((i % 3) * 100));
    card.innerHTML = `
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.title}" class="project-img" loading="lazy" />
        <div class="project-overlay">
          ${p.demo && p.demo !== "#" ? `<a href="${p.demo}"   class="overlay-btn" target="_blank" title="Demo"><i class="fas fa-external-link-alt"></i></a>` : ""}
          ${p.source !== "#" ? `<a href="${p.source}" class="overlay-btn" target="_blank" title="Source"><i class="fab fa-github"></i></a>` : ""}
        </div>
      </div>
      <div class="project-content">
        <span class="project-category">${p.category}</span>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-actions">
  ${p.demo ? `
    <a href="${p.demo}" class="project-btn project-btn-demo" ${p.demo !== "#" ? 'target="_blank"' : ""}>
      <i class="fas fa-eye"></i> Check
    </a>
  ` : ""}
</div>
      </div>`;
    grid.appendChild(card);
  });

  if (moreBtn) {
    moreBtn.style.display = filtered.length > visibleCount ? "inline-flex" : "none";
  }
  observeAnimations();
}

/* --- Load More --- */
function initLoadMore() {
  const btn = document.getElementById("load-more-btn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    visibleCount += 6;
    renderProjects(activeFilter);
  });
}

/* --- Render Sertifikat --- */
function renderCertificates() {
  const g = document.getElementById("certificates-grid");
  if (!g) return;
  g.innerHTML = "";
  certificates.forEach(c => {
    const card = document.createElement("div");
    card.className = "cert-card";
    card.setAttribute("data-animate", "fade-up");
    card.innerHTML = `
      <div class="cert-img-wrapper">
        <img src="${c.image}" alt="${c.title}" class="cert-img" loading="lazy" />
      </div>
      <div class="cert-content">
        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-issuer">${c.issuer}</p>
        <span class="cert-date"><i class="fas fa-calendar-alt"></i> ${c.date}</span>
      </div>`;
    card.addEventListener("click", () => openModal(c.image, c.title));
    g.appendChild(card);
  });
}

/* --- Render Timeline --- */
function renderTimeline() {
  const t = document.getElementById("timeline");
  if (!t) return;
  t.innerHTML = "";
  experience.forEach(e => {
    const d = document.createElement("div");
    d.className = "timeline-item";
    d.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-year">${e.year}</span>
        <h3 class="timeline-title">${e.title}</h3>
        <p class="timeline-place">
          <i class="fas fa-${e.type === "education" ? "graduation-cap" : "briefcase"}"></i>
          ${e.place}
        </p>
        <p class="timeline-desc">${e.description}</p>
      </div>`;
    t.appendChild(d);
  });
}

/* --- Animasi Counter Statistik --- */
function animateCounters() {
  document.querySelectorAll(".stat-number").forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"));
    const step   = target / (1500 / 16);
    let cur = 0;
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { counter.textContent = target; clearInterval(timer); }
      else counter.textContent = Math.floor(cur);
    }, 16);
  });
}

/* --- Intersection Observer: Scroll Animations --- */
function observeAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll("[data-animate]").forEach(el => obs.observe(el));
}

/* --- Observer: Stats Counter --- */
function observeStats() {
  const sec = document.querySelector(".stats");
  if (!sec) return;
  let done = false;
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !done) { animateCounters(); done = true; }
  }, { threshold: 0.3 }).observe(sec);
}

/* --- Observer: Skill Bars --- */
function observeSkills() {
  const sec = document.querySelector(".skills");
  if (!sec) return;
  let done = false;
  new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !done) { animateSkillBars(); done = true; }
  }, { threshold: 0.2 }).observe(sec);
}

/* --- Sticky Navbar --- */
function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
    updateActiveLink();
  });
}

function updateActiveLink() {
  const links    = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  let cur = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 130) cur = s.id;
  });
  links.forEach(l => {
    l.classList.toggle("active", l.getAttribute("href") === `#${cur}`);
  });
}

/* --- Hamburger Menu --- */
function initHamburger() {
  const ham  = document.getElementById("hamburger");
  const menu = document.getElementById("nav-menu");
  if (!ham || !menu) return;
  ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    menu.classList.toggle("active");
  });
  document.querySelectorAll(".nav-link").forEach(l => {
    l.addEventListener("click", () => {
      ham.classList.remove("active");
      menu.classList.remove("active");
    });
  });
  document.addEventListener("click", e => {
    if (!ham.contains(e.target) && !menu.contains(e.target)) {
      ham.classList.remove("active");
      menu.classList.remove("active");
    }
  });
}

/* --- Back To Top --- */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => btn.classList.toggle("visible", window.scrollY > 400));
  btn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}

/* --- Dark / Light Mode --- */
function initThemeToggle() {
  const btn  = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");
  const html = document.documentElement;
  if (!btn) return;
  const saved = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", saved);
  updateIcon(saved);
  btn.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateIcon(next);
  });
}
function updateIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (icon) icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

/* --- Modal --- */
function openModal(src, caption) {
  const ov  = document.getElementById("modal-overlay");
  const img = document.getElementById("modal-image");
  const cap = document.getElementById("modal-caption");
  if (!ov) return;
  img.src = src; cap.textContent = caption;
  ov.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  const ov = document.getElementById("modal-overlay");
  if (ov) ov.classList.remove("active");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

/* --- Form → WhatsApp ---
   UBAH: Ganti nomor WA di bawah ini
   ================================================================ */
function sendMessage() {
  const name    = document.getElementById("name")?.value.trim();
  const email   = document.getElementById("email")?.value.trim();
  const subject = document.getElementById("subject")?.value.trim();
  const message = document.getElementById("message")?.value.trim();
  if (!name || !email || !message) { alert("Isi nama, email, dan pesan dulu ya!"); return; }
  const wa = `62882020255414`; // UBAH nomor WhatsApp kamu
  const txt = encodeURIComponent(`Halo! Saya ${name} (${email}).\n\nSubjek: ${subject}\n\nPesan:\n${message}`);
  window.open(`https://wa.me/${wa}?text=${txt}`, "_blank");
  const ok = document.getElementById("form-success");
  if (ok) { ok.style.display = "flex"; setTimeout(() => ok.style.display = "none", 5000); }
}

/* --- Tahun Footer --- */
function setYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* ================================================================
   INIT — Jalankan semua saat halaman siap
   ================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderTools();
  renderFilters();
  renderProjects();
  initLoadMore();
  renderCertificates();
  renderTimeline();

  initNavbar();
  initHamburger();
  initBackToTop();
  initThemeToggle();

  typeEffect();
  observeAnimations();
  observeStats();
  observeSkills();
  setYear();

  console.log("✅ Portfolio loaded!");
});
