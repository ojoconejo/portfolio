# Portafolio — Diego Jaramillo · Diseñador UX/UI Senior

Sitio estático (HTML + CSS + JS, sin build ni dependencias). Bilingüe ES/EN, responsive y con microinteracciones sutiles.

## Estructura

```
site/
├─ index.html          Home (one-page)
├─ proyecto.html       Plantilla de caso (usa ?p=slug)
├─ README.md
└─ assets/
   ├─ css/styles.css   Sistema de diseño + componentes
   ├─ js/data.js       Contenido bilingüe de los 4 casos (edítalo aquí)
   ├─ js/main.js       Idioma, render, microinteracciones, lightbox
   ├─ img/<proyecto>/  Imágenes .webp (understanding-NN / gallery-NN)
   └─ Diego-Jaramillo-CV.pdf
```

Proyectos: `simem`, `bankgar`, `hojas-de-vida`, `abastecimiento`.
Cada caso se abre en `proyecto.html?p=<slug>`.

## Ver en local

Por las rutas relativas y el toggle de idioma, ábrelo con un servidor (no con doble clic):

```bash
cd site
python3 -m http.server 8000
# luego abre http://localhost:8000
```

Parámetros útiles de URL:
- `?lang=en` / `?lang=es` — fuerza el idioma (útil para compartir enlaces localizados).
- `?qa=1` — modo QA visual (desactiva animaciones de entrada para revisar el layout).

## Editar contenido

- **Textos y métricas de los casos:** `assets/js/data.js` (cada campo tiene `{ es, en }`).
- **Textos del home:** directamente en `index.html` (cada idioma en `<span data-lang="es">` / `data-lang="en">`).
- **Imágenes:** reemplaza los `.webp` en `assets/img/<proyecto>/` manteniendo los nombres
  (`understanding-01…`, `gallery-01…`) y ajusta los contadores `understanding` / `gallery` en `data.js`.

## Publicar en GitHub Pages

Este directorio ya es un repositorio git (rama `main`, con `.nojekyll`). La raíz del repo = el sitio, así que Pages lo sirve directo.

1. Crea un repositorio vacío en github.com (p. ej. `portafolio`). **No** marques "Add README/.gitignore".
2. Conéctalo y súbelo (reemplaza `TU-USUARIO`):

   ```bash
   git remote add origin https://github.com/TU-USUARIO/portafolio.git
   git push -u origin main
   ```

3. En el repo: **Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / `(root)` → Save**.
4. En ~1 min estará en `https://TU-USUARIO.github.io/portafolio/`.

Todas las rutas son relativas, así que funciona igual en un subpath (`/portafolio/`) o en un dominio propio.

## Fuente

Google Sans Flex se carga desde Google Fonts (fuente variable). Pesos usados: 200 (cuerpo), 700 (subtítulos), 900 (títulos).

## Colores

Fondo `#faf6f0` · Texto `#0d0801` · Acentos sutiles `#00eeff` / `#eb00ff`.
