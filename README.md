# 🌱 Fundación Creemos Región - Sitio Web

**Sitio web oficial de la Fundación Creemos Región**, organización privada sin ánimo de lucro dedicada al desarrollo social integral en Villavicencio, Meta, desde 2009.

### ℹ️ Información Institucional
- **Tipo**: Organización privada sin ánimo de lucro
- **Ubicación**: Villavicencio, Meta - Colombia
- **Fundación**: 2009
- **Enfoque**: Desarrollo social integral a través de 6 ejes estratégicos

---

## 📋 Contenido del Proyecto

### Páginas Principales

| Archivo | Descripción |
|---------|-------------|
| **index.html** | Página principal: información institucional, programas, valores y contacto |
| **transparencia-esal.html** | Página de transparencia y rendición de cuentas (requisitos ESAL) |
| **eje-template.html** | Plantilla base reutilizable para páginas de ejes temáticos |

### Ejes Temáticos - Programas Estratégicos

Cada eje representa un área de intervención y trabajo de la fundación:

| Eje | Archivo | Descripción |
|-----|---------|-------------|
| 🏥 **Salud** | `eje-salud.html` | Promoción de salud y bienestar en poblaciones vulnerables |
| 📚 **Educación** | `eje-educacion.html` | Acceso a educación de calidad y formación integral |
| 💰 **Mejoramiento del Ingreso** | `eje-mejoramiento-del-ingreso.html` | Generación de oportunidades económicas y emprendimiento |
| 🤝 **Participación Social** | `eje-participacion-social.html` | Empoderamiento comunitario y ciudadanía activa |
| ⚽ **Recreación y Deporte** | `eje-recreacion-y-deporte.html` | Actividad física, deporte y desarrollo integral |
| 🏢 **Desarrollo Comunitario Empresarial** | `eje-desarrollo-comunitario-empresarial.html` | Fortalecimiento empresarial y tejido productivo local |

---

## 📁 Estructura del Proyecto

```
Fundación/
├── index.html                                   # Página principal
├── transparencia-esal.html                      # Página de transparencia y ESAL
├── eje-template.html                            # Plantilla base para ejes
│
├── 📂 PÁGINAS DE EJES/
│   ├── eje-salud.html
│   ├── eje-educacion.html
│   ├── eje-mejoramiento-del-ingreso.html
│   ├── eje-participacion-social.html
│   ├── eje-recreacion-y-deporte.html
│   └── eje-desarrollo-comunitario-empresarial.html
│
├── 📂 ASSETS/
│   ├── 📂 css/
│   │   └── styles.css                          # Estilos principales
│   ├── 📂 img/
│   │   ├── favicon.svg
│   │   ├── logo.jpg
│   │   └── 📂 ejes/                            # Imágenes por eje
│   │       ├── desarrollo/
│   │       ├── educacion/
│   │       ├── ingresos/
│   │       ├── participacion/
│   │       ├── recreacion/
│   │       └── salud/
│   └── 📂 js/
│       └── main.js                             # JavaScript personalizado
│
├── 📂 DOCS/ (Documentación Legal & Financiera)
│   ├── 📂 certificaciones/
│   │   ├── certificado-existencia-representacion.txt
│   │   └── rut.txt
│   ├── 📂 estados-financieros/
│   │   ├── 2025-estados-financieros.txt
│   │   └── notas-2025.txt
│   ├── 📂 estatutos/
│   │   ├── acta-reforma-estatutos.txt
│   │   └── estatutos-vigentes.txt
│   └── 📂 informes/
│       ├── informe-gestion-2025.txt
│       └── rendicion-cuentas-2025.txt
│
├── README.md                                    # Este archivo
└── .gitignore                                   # (Opcional) Archivos ignorados
```

---

## ✅ Lo que Está Completado

### Arquitectura & Estructura
- ✔️ 9 páginas HTML semánticas (1 principal + 6 ejes + 1 transparencia + 1 plantilla)
- ✔️ Estructura de carpetas organizada y escalable
- ✔️ Documentación legal y financiera centralizada en `/docs`

### Diseño & UX
- ✔️ Diseño responsivo (mobile-first) - funciona en todos los dispositivos
- ✔️ Sistema de navegación intuitiva con navbar persistente
- ✔️ Paleta de colores consistente (verde institucional, dorado, neutrales)
- ✔️ Tipografía profesional (Playfair Display para títulos, DM Sans para cuerpo)
- ✔️ Animaciones de entrada con Intersection Observer (fade-in suave)
- ✔️ Secciones visualmente diferenciadas con espaciado armónico

### Contenido en Página Principal
- ✔️ **Hero Section**: Propuesta de valor con badge institucional
- ✔️ **Quiénes Somos**: Información institucional y contexto
- ✔️ **Programas/Ejes**: Galería de 6 ejes temáticos con navegación
- ✔️ **Valores y Principios**: Identidad y compromiso institucional
- ✔️ **Experiencia/Logros**: Trayectoria desde 2009
- ✔️ **Contacto**: Formulario de comunicación

### Páginas Especializadas
- ✔️ **Página de cada Eje**: Plantillas coherentes con hero, descripción y call-to-action
- ✔️ **Página Transparencia ESAL**: Sección dedicada a rendición de cuentas
- ✔️ **Plantilla Reutilizable**: Base para futuras páginas

### Funcionalidades Técnicas
- ✔️ **CSS Personalizado**: Variables CSS, flexbox/grid, responsive design
- ✔️ **JavaScript**: Animaciones suaves, interactividad
- ✔️ **Favicon**: Identidad visual en pestaña del navegador
- ✔️ **Meta Tags**: Descripción y metadatos para SEO básico
- ✔️ **Google Fonts**: Tipografía optimizada de Google
- ✔️ **Crossorigin**: Atributos de seguridad configurados

### Recursos Disponibles
- ✔️ Logo oficial
- ✔️ Estructura de carpetas para imágenes por eje
- ✔️ Documentación legal (certificaciones, estatutos, estados financieros 2025)
- ✔️ Informes de gestión y rendición de cuentas 2025

---

## ⚠️ Lo que Falta o Necesita Completarse

### 📄 Documentación de Transparencia ESAL
En `docs/` existen archivos pero necesitan:
- ✔️ Documentos ya presentes (2025)
- ❌ Vincular en `transparencia-esal.html` con descargas
- ❌ Agregar enlaces descargables para cada categoría
- ⚠️ Considerar agregar:
  - Acuerdos de Junta Directiva
  - Informes de auditoría
  - Políticas organizacionales
  - Registro de conflictos de interés
  - Planes de mejora institucional

### 📝 Contenido de Texto
- ⚠️ Completar descripción detallada en cada página de ejes
- ⚠️ Agregar estadísticas/números de impacto
- ⚠️ Incluir testimonios de beneficiarios
- ⚠️ Expandir sección "Experiencia/Logros" con casos específicos

### 🔧 Funcionalidades Adicionales
- ⚠️ Validar y conectar formulario de contacto a servicio de email
- ⚠️ Implementar validación de formularios en cliente
- ⚠️ Agregar Google Analytics para monitoreo de tráfico
- ⚠️ Optimizar imágenes para web (compresión)

---

## 🚀 Cómo Usar Este Proyecto

### 1. Abrir Localmente
**Opción A - Directamente en navegador:**
1. Descarga/Clona el proyecto
2. Abre `index.html` en tu navegador (haz doble clic)

**Opción B - Con servidor local (recomendado):**
```bash
# Con Python 3.x
python -m http.server 8000

# Con Python 2.x
python -m SimpleHTTPServer 8000

# Con Node.js (requiere tener live-server instalado)
live-server
```
3. Accede a `http://localhost:8000` en tu navegador

### 2. Editar Contenido

**Modificar HTML:**
- Abre cualquier archivo `.html` en tu editor de texto
- Edita el contenido directamente
- Guarda y recarga el navegador

**Modificar Estilos:**
- Abre `assets/css/styles.css`
- Variables CSS principales (colores, tipografía) están al inicio
- Los cambios se aplican automáticamente

**Modificar JavaScript:**
- Abre `assets/js/main.js`
- Contiene: animaciones, validaciones, interactividad

### 3. Agregar/Reemplazar Imágenes

**Paso 1: Preparar imagen**
- Optimiza el tamaño (máx. 1MB para web)
- Guarda en formato JPG o PNG

**Paso 2: Colocar en carpeta**
```
assets/img/
├── logo.jpg                    # Logo principal
├── hero-image.jpg              # Imagen hero
└── ejes/
    ├── salud/image.jpg
    ├── educacion/image.jpg
    ├── ingresos/image.jpg
    ├── participacion/image.jpg
    ├── recreacion/image.jpg
    └── desarrollo/image.jpg
```

**Paso 3: Referenciar en HTML**
```html
<img src="assets/img/nombre-archivo.jpg" alt="Descripción clara">
```

### 4. Vincular Documentos de Transparencia

En `transparencia-esal.html`, agrega enlaces descargables:

```html
<div class="documento">
  <h4>Certificado de Existencia y Representación</h4>
  <a href="docs/certificaciones/certificado-existencia-representacion.txt" download>
    📥 Descargar
  </a>
</div>

<div class="documento">
  <h4>RUT - Registro Único Tributario</h4>
  <a href="docs/certificaciones/rut.txt" download>
    📥 Descargar
  </a>
</div>
```

### 5. Agregar Nuevas Páginas de Ejes

1. Duplica `eje-template.html`
2. Renómbralo: `eje-nombre.html`
3. Edita:
   - `<title>` - Nombre del eje
   - `.page-title` - Nombre visible
   - `.page-lead` - Descripción
   - `.page-hero-media` - Imagen del eje
4. Agrega enlace en `index.html` sección "ejes"

---

## 🔧 Tecnologías & Stack

| Tecnología | Uso | Versión |
|------------|-----|---------|
| **HTML5** | Estructura semántica | Estándar |
| **CSS3** | Diseño responsivo, variables, animaciones | Estándar |
| **JavaScript** | Vanilla JS (sin frameworks) | ES6+ |
| **Google Fonts** | Playfair Display, DM Sans | Ultima |
| **Archivos estáticos** | Documentación | Múltiples formatos |

### Diseño Responsivo
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Paleta de Colores Institucional
```css
--color-primary: #1a6b47;      /* Verde institucional */
--color-secondary: #2d8f63;    /* Verde secundario */
--color-accent: #c8962a;       /* Dorado */
--color-light: #f5f5f5;        /* Neutral claro */
--color-dark: #2c2c2c;         /* Neutral oscuro */
```

---

## � Roadmap & Próximos Pasos

### 🔴 **CRÍTICO - Debe hacerse primero**

1. **Completar página Transparencia ESAL** con enlaces descargables
   - Requisito legal/institucional
   - Aprovechar documentos ya disponibles en `/docs`
   - Tiempo estimado: 1-2 horas

2. **Validar y enriquecer contenido de texto**
   - Revisar y actualizar descripción de cada eje
   - Agregar números/estadísticas de impacto
   - Incluir testimonios de beneficiarios
   - Tiempo estimado: 3-5 horas

### 🟡 **IMPORTANTE - Próximas 2-3 semanas**
- Configurar formulario de contacto (backend: email)
- Implementar validación de formularios completa
- Agregar Google Analytics
- Optimizar imágenes para web (compresión)
- Verificar SEO básico (meta tags, keywords)
- Pruebas en diferentes navegadores

### 🟢 **FUTURO - Mejoras a Largo Plazo**
- Agregar blog o sección de noticias
- Implementar galería de fotos con lightbox
- Mapa interactivo de ubicación
- Mejorar accesibilidad WCAG 2.1
- Migrar a CMS estático (Hugo, Jekyll, 11ty)
- Backend para manejo avanzado de formularios
- Sistema de búsqueda de documentos
- Versión en inglés del sitio

---

## 📊 Estadísticas del Proyecto

| Métrica | Valor |
|---------|-------|
| Páginas HTML | 9 |
| Ejes temáticos | 6 |
| Archivos documentación | 8 |
| Directorios de imágenes | 7 |
| Archivos CSS | 1 |
| Archivos JS | 1 |
| Idioma | Español |
| Framework | Ninguno (vanilla) |
| Tamaño aproximado (sin imágenes) | ~150 KB |

---

## � Tips & Mejores Prácticas

### Para Editar HTML
- Usa nombres de clases descriptivos (`.eje-card`, `.hero-content`)
- Mantén la estructura semántica (nav, header, main, section, footer)
- Comenta secciones complejas para futuras ediciones
- Valida HTML: https://validator.w3.org/

### Para Estilos CSS
- Las variables están al inicio del archivo para fácil actualización
- Mobile-first: estilo base para móvil, luego media queries
- Usa `clamp()` para tamaños responsivos sin media queries
- Prefiere flexbox y grid sobre float

### Para Imágenes
- Formato JPG para fotos (mejor compresión)
- PNG para iconos y logos (fondo transparente)
- Tamaño máximo 1MB por imagen
- Usa Alt text descriptivo para accesibilidad y SEO

### Para Rendimiento
- Lazy loading de imágenes (nativo con `loading="lazy"`)
- Compresión de imágenes antes de subir
- Minificar CSS y JS para producción
- Cachear recursos estáticos

---

## 📧 Información de Contacto

**Fundación Creemos Región**
- 📍 **Ubicación**: Villavicencio, Meta - Colombia
- 📅 **Fundada**: 2009
- 🌐 **Sitio Web**: [Ver](./index.html)
- 📧 **Contacto**: Ver formulario en la web

---

## 📄 Licencia & Derechos

Este proyecto es propiedad intelectual de la **Fundación Creemos Región**. 
Todos los derechos reservados © 2009-2026.

Para usos externos, comunicarse con la fundación directamente.

---

## 📝 Historial de Cambios

| Fecha | Versión | Cambios |
|-------|---------|---------|
| 21 Abr 2026 | 1.2 | README actualizado con contenido actual |
| - | 1.1 | Estructura inicial + 6 ejes + transparencia |
| - | 1.0 | Plantilla base y diseño |

---

**Última actualización**: 21 de abril de 2026  
**Mantenedor**: Equipo Fundación Creemos Región  
**Estado**: En desarrollo activo ✨
