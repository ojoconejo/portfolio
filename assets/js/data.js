/* ============================================================
   Datos de proyectos — bilingüe (ES / EN)
   Orden define la navegación "siguiente proyecto"
   ============================================================ */
window.PROJECTS = {
  order: ["simem", "bankgar", "hojas-de-vida", "abastecimiento"],

  simem: {
    slug: "simem",
    client: "XM",
    year: "2022",
    n: "01",
    understanding: 1,
    gallery: 13,
    cover: 6, // usa gallery-06 como portada
    type:  { es: "Portal público de datos", en: "Public open-data portal" },
    title: "SIMEM",
    role:  { es: "Investigación · Arquitectura de información · Sistema UI",
             en: "Research · Information architecture · UI system" },
    scope: { es: "Sitio público + panel administrativo", en: "Public site + admin panel" },
    card:  { es: "Un decreto convertido en un portal público, accesible y a contrarreloj.",
             en: "A decree turned into a public, accessible portal against the clock." },
    phrase:{ es: "Traducir un mandato regulatorio en una experiencia que cualquier ciudadano pudiera usar sin fricción — dentro de un plazo que no daba tregua.",
             en: "Turning a regulatory mandate into an experience any citizen could use without friction — within a deadline that gave no quarter." },
    reto: {
      title: { es: "El reto", en: "The challenge" },
      body: {
        es: "Cuando el Ministerio de Minas publicó el decreto, el reloj empezó a correr. XM, operador del Mercado de Energía Mayorista en Colombia, debía crear una plataforma pública donde cualquier persona pudiera consultar libremente los conjuntos de datos del mercado energético. Y el plazo, como suele pasar con estos mandatos, era corto.",
        en: "When the Ministry of Mines issued the decree, the clock started ticking. XM — operator of Colombia's Wholesale Energy Market — had to build a public platform where anyone could freely browse the market's datasets. And the deadline, as regulatory mandates tend to go, was tight." }
    },
    understand: {
      title: { es: "Entender antes de dibujar", en: "Understand before drawing" },
      body: {
        es: "Empecé por lo más importante: leer el decreto línea por línea hasta poder traducirlo en una categorización clara de los tipos de datos que debían compartirse. Mapas de navegación, benchmarking de plataformas similares y sesiones de cocreación con los roles operativos del cliente dieron forma temprana al sitio, validando cada hallazgo antes de comprometer un solo pixel.",
        en: "I started with what mattered most: reading the decree line by line until I could translate it into a clear taxonomy of the data types that had to be shared. Navigation maps, benchmarking of comparable platforms and co-creation sessions with the client's operational roles shaped the site early, validating every finding before committing a single pixel." }
    },
    solution: {
      title: { es: "La solución", en: "The solution" },
      body: {
        es: "Evaluamos plataformas preconstruidas, pero ninguna cumplía lo que el decreto exigía, así que junto al equipo técnico decidimos construir a la medida. Al ser un sitio público no había margen para la ambigüedad: debía cumplir los más altos estándares de accesibilidad y claridad. Estructuré y diseñé el sistema de componentes UI en Figma y entregué las interfaces del sitio público y del panel administrativo — un portal claro, accesible y construido desde cero para abrir la información del mercado energético a quien la buscara.",
        en: "We evaluated off-the-shelf platforms, but none met what the decree demanded, so together with the technical team we chose to build a bespoke solution. Being public, there was no room for ambiguity: it had to meet the highest standards of accessibility and clarity. I structured and designed the UI component system in Figma and delivered the interfaces for both the public site and the admin panel — a clear, accessible portal built from scratch to open up the energy market's data to anyone looking for it." }
    },
    impact: [
      { label: { es: "Acceso a un dataset del mercado", en: "Access to a market dataset" },
        before:{ es: "3–5 días hábiles", en: "3–5 business days" },
        after: { es: "Menos de 2 minutos", en: "Under 2 minutes" } },
      { label: { es: "Canales de acceso", en: "Access channels" },
        before:{ es: "Correos y solicitudes dispersas", en: "Scattered emails & requests" },
        after: { es: "1 portal público centralizado", en: "1 centralized public portal" } },
      { label: { es: "Accesibilidad WCAG 2.1 AA", en: "WCAG 2.1 AA accessibility" },
        before:{ es: "No existía plataforma", en: "No platform existed" },
        after: { es: "100% validado", en: "100% validated" } },
      { label: { es: "Plazo regulatorio", en: "Regulatory deadline" },
        before:{ es: "Riesgo de incumplimiento", en: "At risk of non-compliance" },
        after: { es: "Lanzado dentro del plazo", en: "Shipped within deadline" } },
      { label: { es: "Satisfacción en pruebas beta", en: "Beta-test satisfaction" },
        before:{ es: "N/A", en: "N/A" },
        after: { es: "4.2 / 4.8", en: "4.2 / 4.8" } }
    ]
  },

  bankgar: {
    slug: "bankgar",
    client: "XM",
    year: "2022",
    n: "02",
    understanding: 2,
    gallery: 5,
    cover: 2,
    type:  { es: "Gestión de garantías de cumplimiento", en: "Compliance-guarantee management" },
    title: "BankGar",
    role:  { es: "Puente PO–desarrollo · Diseño de flujos · UI",
             en: "PO–dev bridge · Flow design · UI" },
    scope: { es: "Plataforma web enterprise", en: "Enterprise web platform" },
    card:  { es: "Rigor normativo y una experiencia amigable, entregados a tiempo.",
             en: "Regulatory rigor and a friendly experience, delivered on time." },
    phrase:{ es: "Incluso contra el reloj, es posible diseñar una herramienta que combine rigor normativo con una experiencia de uso amigable.",
             en: "Even against the clock, you can design a tool that combines regulatory rigor with a friendly experience." },
    reto: {
      title: { es: "El reto", en: "The challenge" },
      body: {
        es: "XM necesitaba una plataforma para gestionar las garantías de cumplimiento que respaldan los contratos de venta de energía entre los actores del sistema. Sin ella, cada garantía se revisaba y validaba a mano: un proceso lento y propenso a errores en un mercado donde la precisión no es negociable.",
        en: "XM needed a platform to manage the compliance guarantees backing energy-sale contracts between market players. Without it, every guarantee was reviewed and validated by hand — a slow, error-prone process in a market where precision is non-negotiable." }
    },
    understand: {
      title: { es: "Escuchar cada rol", en: "Listening to every role" },
      body: {
        es: "Actué como puente entre los Product Owners y el equipo de desarrollo. A través de talleres entendí a fondo los flujos operacionales de cada rol involucrado y los traduje en interacciones intuitivas, cuidando que cada decisión respondiera tanto a la operación real como a los requerimientos de ley.",
        en: "I acted as the bridge between the Product Owners and the development team. Through workshops I got to the bottom of each role's operational flows and translated them into intuitive interactions, making sure every decision answered both the real operation and the legal requirements." }
    },
    solution: {
      title: { es: "Contra el reloj", en: "Against the clock" },
      body: {
        es: "La resolución que originó el proyecto estimó una ventana de tiempo poco realista para su tamaño. Eso significó entender, diseñar, ajustar y comunicar con los desarrolladores de forma constante y efectiva, sin perder de vista ni la experiencia ni la fecha. El resultado: una plataforma robusta pero amigable, que permite a los operadores comerciales registrar sus garantías, validar sus características y administrar los atributos necesarios para el cumplimiento legal de cada contrato — entregada a tiempo.",
        en: "The resolution behind the project set an unrealistic window for its size. That meant understanding, designing, adjusting and communicating with developers constantly and effectively, without losing sight of either the experience or the date. The result: a robust yet friendly platform that lets commercial operators register their guarantees, validate their characteristics and manage the attributes each contract needs for legal compliance — delivered on time." }
    },
    impact: [
      { label: { es: "Registro de una garantía", en: "Registering a guarantee" },
        before:{ es: "2–3 días (manual)", en: "2–3 days (manual)" },
        after: { es: "Menos de 15 minutos", en: "Under 15 minutes" } },
      { label: { es: "Validación normativa", en: "Regulatory validation" },
        before:{ es: "1–2 días, caso a caso", en: "1–2 days, case by case" },
        after: { es: "Minutos, asistida", en: "Minutes, assisted" } },
      { label: { es: "Errores en atributos", en: "Attribute errors" },
        before:{ es: "Margen de error alto", en: "High error margin" },
        after: { es: "Reducción significativa", en: "Significantly reduced" } },
      { label: { es: "Plazo de entrega", en: "Delivery deadline" },
        before:{ es: "En riesgo", en: "At risk" },
        after: { es: "100% cumplido", en: "100% met" } }
    ]
  },

  "hojas-de-vida": {
    slug: "hojas-de-vida",
    client: "EPM",
    year: "2024",
    n: "03",
    understanding: 2,
    gallery: 14,
    cover: 8,
    type:  { es: "Centralización de reclutamiento", en: "Recruitment centralization" },
    title: { es: "Hojas de Vida", en: "Candidate Hub" },
    role:  { es: "Investigación de negocio · Prototipado · Power Apps",
             en: "Business research · Prototyping · Power Apps" },
    scope: { es: "Aplicación interna (Power Apps)", en: "Internal app (Power Apps)" },
    card:  { es: "Del caos de macros dispersas a un solo lugar para encontrar al candidato.",
             en: "From scattered macros to one place to find the right candidate." },
    phrase:{ es: "Ordenar el caos operativo también es una forma de diseño: uno que empieza por escuchar y termina liberando tiempo real para las personas.",
             en: "Taming operational chaos is a form of design too: one that starts by listening and ends by giving people real time back." },
    reto: {
      title: { es: "El reto", en: "The challenge" },
      body: {
        es: "El reclutamiento en EPM no se detiene, y con esa constancia llega el caos: una misma persona puede postularse varias veces, las bases de datos no están centralizadas y hay que buscar saltando entre aplicativos y documentos. Para sobrevivir a esa dispersión, algunos usuarios habían construido sus propias macros — soluciones informales que funcionaban, pero que nadie más podía mantener ni escalar.",
        en: "Recruitment at EPM never stops, and with that constancy comes chaos: the same person may apply several times, databases aren't centralized, and finding anything means hopping between apps and documents. To survive the sprawl, some users had built their own macros — informal fixes that worked, but that nobody else could maintain or scale." }
    },
    understand: {
      title: { es: "Escuchar al negocio", en: "Listening to the business" },
      body: {
        es: "Escuché de cerca las necesidades del negocio y facilité espacios de socialización con los equipos involucrados. Con ese entendimiento prototipé, pensando en Power Apps, una solución ágil que aprovechara al máximo las capacidades de la herramienta para ordenar lo que hasta entonces era manual y disperso.",
        en: "I listened closely to the business needs and facilitated socialization sessions with the teams involved. With that understanding I prototyped — with Power Apps in mind — an agile solution that squeezed the most out of the tool's capabilities to bring order to what until then was manual and scattered." }
    },
    solution: {
      title: { es: "Un solo lugar", en: "A single place" },
      body: {
        es: "Una experiencia centralizada donde los reclutadores pueden consultar, validar y dar seguimiento a los candidatos sin depender de macros improvisadas ni de bases de datos dispersas — un flujo pensado para acompañar el ritmo real del reclutamiento.",
        en: "A centralized experience where recruiters can browse, validate and track candidates without relying on improvised macros or scattered databases — a flow designed to keep pace with recruitment as it really happens." }
    },
    impact: [
      { label: { es: "Búsqueda de una hoja de vida", en: "Finding a CV" },
        before:{ es: "Horas, entre fuentes", en: "Hours, across sources" },
        after: { es: "Minutos, en un solo lugar", en: "Minutes, in one place" } },
      { label: { es: "Duplicidad de postulantes", en: "Duplicate applicants" },
        before:{ es: "Alta", en: "High" },
        after: { es: "−52% (base centralizada)", en: "−52% (centralized base)" } },
      { label: { es: "Dependencia de macros", en: "Dependence on macros" },
        before:{ es: "Alta", en: "High" },
        after: { es: "Eliminada", en: "Eliminated" } },
      { label: { es: "Estandarización de la validación", en: "Validation standardization" },
        before:{ es: "Variable por reclutador", en: "Varied by recruiter" },
        after: { es: "Uniforme para el equipo", en: "Uniform across the team" } }
    ]
  },

  abastecimiento: {
    slug: "abastecimiento",
    client: "EPM",
    year: "2024",
    n: "04",
    understanding: 1,
    gallery: 10,
    cover: 1,
    type:  { es: "Flujo de abastecimiento asistido por IA", en: "AI-assisted procurement flow" },
    title: { es: "Abastecimiento", en: "Procurement" },
    role:  { es: "Descubrimiento · Prototipo de alta fidelidad · Power Apps + IA",
             en: "Discovery · Hi-fi prototype · Power Apps + AI" },
    scope: { es: "Aplicación escalable (Power Apps)", en: "Scalable app (Power Apps)" },
    card:  { es: "De la necesidad a la firma del contrato, sin fricción y guiado por IA.",
             en: "From need to signed contract, frictionless and AI-guided." },
    phrase:{ es: "No solo puso a prueba mi capacidad de diseñar: puso a prueba mi capacidad de convencer, facilitar y alinear a personas con intereses distintos alrededor de una misma solución.",
             en: "It didn't just test my ability to design: it tested my ability to convince, facilitate and align people with different interests around one solution." },
    reto: {
      title: { es: "El reto", en: "The challenge" },
      body: {
        es: "Entre el momento en que aparece una necesidad de abastecimiento —de un bien, un servicio o ambos— y el momento en que se firma el contrato que la cubre, pasa demasiado tiempo. El proceso es manual en exceso, y quienes lo lideran, aunque dominan el conocimiento técnico de la necesidad, no siempre conocen los lineamientos jurídicos y las políticas internas que rigen la adquisición.",
        en: "Between the moment a procurement need appears —a good, a service, or both— and the moment the contract that covers it is signed, too much time passes. The process is excessively manual, and those who lead it, though they master the technical knowledge of the need, aren't always familiar with the legal guidelines and internal policies governing acquisition." }
    },
    understand: {
      title: { es: "De la idea a la herramienta", en: "From idea to tool" },
      body: {
        es: "Todo empezó en descubrimiento. Me integré al equipo gerencial de abastecimiento y a los negociadores para construir, con velocidad, un prototipo de alta fidelidad que comunicara a las áreas de decisión el valor real del producto. No era un ejercicio decorativo: era la pieza que debía convencer. La ronda de socialización fue exitosa, y con ese respaldo iniciamos formalmente con talleres de cocreación.",
        en: "It all started in discovery. I embedded with the procurement management team and the negotiators to quickly build a high-fidelity prototype that would communicate the product's real value to decision-makers. It wasn't a decorative exercise: it was the piece meant to convince. The socialization round was a success, and with that backing we formally kicked off with co-creation workshops." }
    },
    solution: {
      title: { es: "Doble clic sobre cada paso", en: "Double-clicking every step" },
      body: {
        es: "Nos sentamos con roles ejecutivos —los más interesados en reducir tiempos—, negociadores, líderes técnicos y usuarios funcionales. Hicimos doble clic sobre cada paso del flujo, traduciendo las particularidades de cada rol en una experiencia coherente, sin perder de vista la eficiencia del negocio ni la claridad que necesitaban los usuarios operativos. Con esa base diseñé una aplicación escalable en Power Apps, apoyada en modelos de IA, que desagrega el proceso al detalle y lo convierte en pantallas claras que guían al usuario en cada paso.",
        en: "We sat down with executive roles —the ones most interested in cutting times—, negotiators, technical leads and functional users. We double-clicked every step of the flow, translating each role's specifics into a coherent experience, without losing sight of the efficiency the business expected or the clarity operational users needed. On that basis I designed a scalable Power Apps application, backed by AI models, that breaks the process down in detail and turns it into clear screens that guide the user through every step." }
    },
    impact: [
      { label: { es: "Proceso total (necesidad → firma)", en: "End-to-end (need → signature)" },
        before:{ es: "Hasta 6 meses", en: "Up to 6 months" },
        after: { es: "2 meses y decreciendo", en: "2 months and falling" } },
      { label: { es: "Pasos manuales", en: "Manual steps" },
        before:{ es: "Correos y archivos dispersos", en: "Scattered emails & files" },
        after: { es: "Flujo guiado digital", en: "Guided digital flow" } },
      { label: { es: "Reprocesos jurídicos", en: "Legal reworks" },
        before:{ es: "Frecuentes", en: "Frequent" },
        after: { es: "−42% (validaciones integradas)", en: "−42% (built-in validations)" } },
      { label: { es: "Adopción", en: "Adoption" },
        before:{ es: "N/A", en: "N/A" },
        after: { es: "Alta, validada en talleres", en: "High, validated in workshops" } }
    ]
  }
};
