/* ============================================================
   Portafolio Diego Jaramillo — interacciones
   ============================================================ */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const PROJECTS = window.PROJECTS || null;

  /* Helper i18n: value puede ser string u objeto {es,en} */
  function t(val, lang) {
    if (val && typeof val === "object" && ("es" in val || "en" in val)) return val[lang] || val.es;
    return val;
  }
  const IMG = (slug, name) => `assets/img/${slug}/${name}.webp`;

  /* ---------- Idioma ---------- */
  const LANG_KEY = "dj-lang";
  function getLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "es") return q;
    return localStorage.getItem(LANG_KEY) ||
      (navigator.language && navigator.language.startsWith("en") ? "en" : "es");
  }
  function setLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(LANG_KEY, lang);
    document.querySelectorAll("[data-set-lang]").forEach((b) => {
      b.classList.toggle("is-active", b.getAttribute("data-set-lang") === lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-set-lang") === lang);
    });
    // re-render dynamic content
    if (typeof window.__renderDynamic === "function") window.__renderDynamic(lang);
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-set-lang]");
    if (btn) setLang(btn.getAttribute("data-set-lang"));
  });

  /* ---------- Nav ---------- */
  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const open = navMenu.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", open);
      navToggle.setAttribute("aria-expanded", open);
    });
    navMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navMenu.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- Reveal on scroll ---------- */
  function observeReveals(root) {
    const els = (root || document).querySelectorAll(".reveal:not(.in-view), .step:not(.in-view)");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in-view");
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Scrollspy nav ---------- */
  function initScrollSpy() {
    const links = Array.from(document.querySelectorAll('.nav__link[href^="#"]'));
    if (!links.length || !("IntersectionObserver" in window)) return;
    const map = new Map();
    links.forEach((l) => {
      const sec = document.querySelector(l.getAttribute("href"));
      if (sec) map.set(sec, l);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            links.forEach((l) => l.classList.remove("is-active"));
            const active = map.get(en.target);
            if (active) active.classList.add("is-active");
          }
        });
      },
      { threshold: 0.4, rootMargin: "-30% 0px -55% 0px" }
    );
    map.forEach((_, sec) => io.observe(sec));
  }

  /* ---------- Cursor sutil (solo puntero fino) ---------- */
  function initCursor() {
    if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    if (!dot || !ring) return;
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    const hoverSel = "a, button, .card, .frame, [data-cursor]";
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(hoverSel)) document.body.classList.add("cursor-hover");
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(hoverSel)) document.body.classList.remove("cursor-hover");
    });
  }

  /* ---------- Tilt magnético en cards ---------- */
  function initTilt() {
    if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll("[data-tilt]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `translateY(-6px) rotateX(${(-py * 3).toFixed(2)}deg) rotateY(${(px * 3).toFixed(2)}deg)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ---------- Reading progress (case) ---------- */
  function initProgress() {
    const bar = document.querySelector(".progress");
    if (!bar) return;
    const upd = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    };
    upd();
    window.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", upd);
  }

  /* ---------- Lightbox ---------- */
  function initLightbox() {
    let box = document.querySelector(".lightbox");
    if (!box) {
      box = document.createElement("div");
      box.className = "lightbox";
      box.innerHTML =
        '<button class="lightbox__close" aria-label="Cerrar">✕</button><img alt="">';
      document.body.appendChild(box);
    }
    const img = box.querySelector("img");
    const close = () => { box.classList.remove("is-open"); document.body.style.overflow = ""; };
    box.addEventListener("click", (e) => { if (e.target === box || e.target.closest(".lightbox__close")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    document.addEventListener("click", (e) => {
      const z = e.target.closest("[data-zoom]");
      if (!z) return;
      img.src = z.getAttribute("data-zoom");
      img.alt = z.getAttribute("data-alt") || "";
      box.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
  }

  /* ============================================================
     HOME — render tarjetas de proyecto
     ============================================================ */
  function renderHome(lang) {
    const grid = document.getElementById("projectsGrid");
    if (!grid || !PROJECTS) return;
    grid.innerHTML = PROJECTS.order.map((slug, i) => {
      const p = PROJECTS[slug];
      const title = t(p.title, lang);
      const type = t(p.type, lang);
      const card = t(p.card, lang);
      const seeCase = lang === "en" ? "View case" : "Ver caso";
      return `
        <a class="card reveal" data-tilt data-delay="${(i % 2) + 1}" href="proyecto.html?p=${slug}" aria-label="${title} — ${type}">
          <div class="card__media">
            <img src="${IMG(slug, "gallery-" + String(p.cover).padStart(2, "0"))}" alt="${title} — ${type}" loading="lazy" />
          </div>
          <div class="card__body">
            <div class="card__kicker"><span class="card__tag"></span> ${type} · ${p.client}</div>
            <div class="card__title">${title}</div>
            <div class="card__desc">${card}</div>
            <div class="card__foot">${seeCase} <span class="card__arrow">→</span></div>
          </div>
        </a>`;
    }).join("");
    observeReveals(grid);
    initTilt();
  }

  /* ============================================================
     CASE — render página de proyecto
     ============================================================ */
  function renderCase(lang) {
    const root = document.getElementById("caseRoot");
    if (!root || !PROJECTS) return;
    const slug = new URLSearchParams(location.search).get("p");
    const p = PROJECTS[slug];
    if (!p) { location.replace("index.html"); return; }

    const title = t(p.title, lang);
    document.title = title + " — Diego Jaramillo";
    const backTxt = lang === "en" ? "All projects" : "Todos los proyectos";
    const roleL = lang === "en" ? "Role" : "Rol";
    const clientL = lang === "en" ? "Client" : "Cliente";
    const scopeL = lang === "en" ? "Scope" : "Alcance";
    const yearL = lang === "en" ? "Year" : "Año";
    const impactL = lang === "en" ? "Impact" : "Impacto";
    const beforeL = lang === "en" ? "Before" : "Antes";
    const afterL = lang === "en" ? "Now" : "Ahora";
    const indicatorL = lang === "en" ? "Indicator" : "Indicador";
    const nextL = lang === "en" ? "Next project" : "Siguiente proyecto";
    const galleryL = lang === "en" ? "The interfaces" : "Las interfaces";
    const processL = lang === "en" ? "Discovery & understanding" : "Descubrimiento y entendimiento";
    const processNote = lang === "en"
      ? "Rapid prototypes, mind maps and navigation trees — validated with the client throughout to reach an early, shared understanding."
      : "Prototipos rápidos, mapas mentales y árboles de navegación — validados con el cliente de forma constante para lograr un entendimiento temprano y compartido.";

    // understanding images
    let understandHTML = "";
    for (let i = 1; i <= p.understanding; i++) {
      const name = "understanding-" + String(i).padStart(2, "0");
      understandHTML += `
        <figure class="understand-media reveal" data-zoom="${IMG(slug, name)}" data-alt="${title} — ${processL}">
          <img src="${IMG(slug, name)}" alt="${title} — ${processL} ${i}" loading="lazy" />
        </figure>`;
    }

    // gallery images (cover excluded si quieres; aquí mostramos todas)
    let galleryHTML = "";
    let shown = 0;
    for (let i = 1; i <= p.gallery; i++) {
      if (i === p.cover) continue; // la portada ya se muestra arriba
      shown++;
      const name = "gallery-" + String(i).padStart(2, "0");
      const span = shown === 1 ? " span-2" : "";
      galleryHTML += `
        <figure class="frame reveal${span}" data-zoom="${IMG(slug, name)}" data-alt="${title} ${i}">
          <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i></div>
          <img src="${IMG(slug, name)}" alt="${title} — UI ${i}" loading="lazy" />
        </figure>`;
    }

    // impact rows
    const impactRows = p.impact.map((r) => `
      <div class="impact__row reveal">
        <div class="impact__label">${t(r.label, lang)}</div>
        <div class="impact__before">${t(r.before, lang)}</div>
        <div class="impact__after"><span class="hl">${t(r.after, lang)}</span></div>
      </div>`).join("");

    // next project
    const idx = PROJECTS.order.indexOf(slug);
    const nextSlug = PROJECTS.order[(idx + 1) % PROJECTS.order.length];
    const nextP = PROJECTS[nextSlug];

    root.innerHTML = `
      <section class="case-hero container">
        <a class="case-back" href="index.html#work">← ${backTxt}</a>
        <p class="eyebrow" style="margin-top:1.4rem">${p.n} · ${t(p.type, lang)}</p>
        <h1 class="case-hero__title">${title}</h1>
        <p class="case-phrase">${t(p.phrase, lang)}</p>
        <div class="case-facts">
          <div><div class="case-fact__l">${clientL}</div><div class="case-fact__v">${p.client}</div></div>
          <div><div class="case-fact__l">${yearL}</div><div class="case-fact__v">${p.year}</div></div>
          <div><div class="case-fact__l">${roleL}</div><div class="case-fact__v">${t(p.role, lang)}</div></div>
          <div><div class="case-fact__l">${scopeL}</div><div class="case-fact__v">${t(p.scope, lang)}</div></div>
        </div>
      </section>

      <section class="container" style="padding-top:2rem">
        <div class="frame case-cover reveal" data-zoom="${IMG(slug, "gallery-" + String(p.cover).padStart(2, "0"))}" data-alt="${title}">
          <div class="frame__bar" aria-hidden="true"><i></i><i></i><i></i></div>
          <img src="${IMG(slug, "gallery-" + String(p.cover).padStart(2, "0"))}" alt="${title} — ${t(p.type, lang)}" />
        </div>
      </section>

      <section class="container">
        <div class="case-block">
          <h2 class="reveal">${t(p.reto.title, lang)}</h2>
          <div class="body reveal" data-delay="1"><p>${t(p.reto.body, lang)}</p></div>
        </div>
      </section>

      <section class="section-alt">
        <div class="container">
          <div class="case-block" style="margin-bottom:2.6rem">
            <h2 class="reveal">${t(p.understand.title, lang)}</h2>
            <div class="body reveal" data-delay="1"><p>${t(p.understand.body, lang)}</p></div>
          </div>
          <p class="eyebrow reveal">${processL}</p>
          <div class="stack" style="margin-top:1.4rem">${understandHTML}</div>
          <p class="understand-note reveal">${processNote}</p>
        </div>
      </section>

      <section class="container">
        <div class="case-block" style="margin-bottom:2.8rem">
          <h2 class="reveal">${t(p.solution.title, lang)}</h2>
          <div class="body reveal" data-delay="1"><p>${t(p.solution.body, lang)}</p></div>
        </div>
        <p class="eyebrow reveal">${galleryL}</p>
        <div class="gallery" style="margin-top:1.4rem">${galleryHTML}</div>
      </section>

      <section class="section-alt">
        <div class="container">
          <div class="section-head"><div>
            <p class="eyebrow reveal">${impactL}</p>
            <h2 class="reveal" data-delay="1" style="font-size:var(--step-3)">${lang === "en" ? "Before &amp; after" : "Antes y después"}</h2>
          </div></div>
          <div class="impact">
            <div class="impact__row impact__head-row">
              <div class="impact__head">${indicatorL}</div>
              <div class="impact__head">${beforeL}</div>
              <div class="impact__head">${afterL}</div>
            </div>
            ${impactRows}
          </div>
        </div>
      </section>

      <a class="next-case" href="proyecto.html?p=${nextSlug}">
        <div class="container next-case__inner">
          <div>
            <div class="next-case__label">${nextL}</div>
            <div class="next-case__title">${t(nextP.title, lang)}</div>
          </div>
          <div class="next-case__arrow">→</div>
        </div>
      </a>
    `;
    observeReveals(root);
    initProgress();
  }

  /* ---------- Dynamic re-render hook (para toggle idioma) ---------- */
  window.__renderDynamic = function (lang) {
    renderHome(lang);
    renderCase(lang);
  };

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    if (location.search.indexOf("qa") !== -1) document.documentElement.classList.add("qa");
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
    setLang(getLang());       // aplica idioma + renderiza dinámico
    observeReveals(document);
    initScrollSpy();
    initCursor();
    initTilt();
    initLightbox();
  });
})();
