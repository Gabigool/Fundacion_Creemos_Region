# 🌱 Fundación Creemos Región - Sitio Web

**Sitio web oficial de la Fundación Creemos Región**, organización privada sin ánimo de lucro dedicada al desarrollo social integral en Villavicencio, Meta, desde 2009.

---

## 📋 Contenido del Proyecto

### Páginas Principales

| Archivo | Descripción |
|---------|-------------|
| **index.html** | Página principal con información sobre la fundación, programas y contacto |
| **transparencia-esal.html** | Página de transparencia y rendición de cuentas (ESAL) |
| **eje-template.html** | Plantilla base para las páginas de ejes temáticos |

### Ejes Temáticos (Programas)

Cada eje representa un área de trabajo de la fundación:

| Eje | Archivo | Estado |
|-----|---------|--------|
| 🏥 **Salud** | `eje-salud.html` | 90% completo |
| 📚 **Educación** | `eje-educacion.html` | 90% completo |
| 💰 **Mejoramiento del Ingreso** | `eje-mejoramiento-del-ingreso.html` | 90% completo |
| 🤝 **Participación Social** | `eje-participacion-social.html` | 90% completo |
| ⚽ **Recreación y Deporte** | `eje-recreacion-y-deporte.html` | 90% completo |
| 🏢 **Desarrollo Comunitario Empresarial** | `eje-desarrollo-comunitario-empresarial.html` | 90% completo |

---

## 📁 Estructura del Proyecto

```
Fundación/
├── index.html                                  # Página principal
├── transparencia-esal.html                     # Página de transparencia
├── eje-template.html                           # Plantilla para ejes
├── eje-salud.html                              # Eje de salud
├── eje-educacion.html                          # Eje de educación
├── eje-mejoramiento-del-ingreso.html          # Eje de mejoramiento del ingreso
├── eje-participacion-social.html               # Eje de participación social
├── eje-recreacion-y-deporte.html               # Eje de recreación y deporte
├── eje-desarrollo-comunitario-empresarial.html # Eje empresarial
│
├── 📂 assets/
│   ├── 📂 css/
│   │   └── styles.css                          # Estilos principales (variables CSS, responsive)
│   ├── 📂 img/                                 # ❌ VACÍO - Falta agregar imágenes
│   └── 📂 js/
│       └── main.js                             # Scripts (lazy loading, formularios)
│
├── 📂 docs/
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
└── README.md                                   # Este archivo
```

---

## ✅ Lo que Está Implementado

### Características del Sitio
- ✔️ Diseño responsivo (mobile-first)
- ✔️ Navbar con navegación a todas las secciones
- ✔️ Sección Hero con propuesta de valor
- ✔️ Sección "Quiénes Somos" con información institucional
- ✔️ Galería de 6 ejes temáticos (Salud, Educación, Ingresos, Participación, Deporte, Empresarial)
- ✔️ Sección de Valores y Principios
- ✔️ Sección de Experiencia/Logros
- ✔️ Formulario de Contacto
- ✔️ Página dedicada a Transparencia ESAL
- ✔️ Sistema de tipografía y colores consistentes
- ✔️ Animaciones con Intersection Observer (fade-in)
- ✔️ Documentación interna (docs/)

### Recursos de Estilo
- **Fuentes**: Playfair Display (títulos), DM Sans (cuerpo)
- **Colores**:
  - Verde principal: `#1a6b47`
  - Verde secundario: `#2d8f63`
  - Dorado: `#c8962a`
  - Fondos neutros
- **Breakpoints**: Diseño adaptable a todos los tamaños de pantalla

---

## ❌ Lo que Falta (Pendiente)

### 1. **Imágenes** (`assets/img/`)
El directorio está vacío. Se necesitan las siguientes imágenes:

```
assets/img/
├── favicon.svg                          # Icono de la página
├── logo.svg / logo.png                  # Logo principal de la fundación
├── hero-image.jpg / hero-image.png      # Imagen hero de la página principal
├── eje-salud/
│   ├── icon.svg                         # Icono representativo
│   └── imagen-actividad.jpg             # Foto de actividades
├── eje-educacion/
│   ├── icon.svg
│   └── imagen-actividad.jpg
├── eje-mejoramiento-del-ingreso/
│   ├── icon.svg
│   └── imagen-actividad.jpg
├── eje-participacion-social/
│   ├── icon.svg
│   └── imagen-actividad.jpg
├── eje-recreacion-y-deporte/
│   ├── icon.svg
│   └── imagen-actividad.jpg
├── eje-desarrollo-comunitario-empresarial/
│   ├── icon.svg
│   └── imagen-actividad.jpg
└── team/                                # Fotos del equipo (opcional)
    ├── persona1.jpg
    ├── persona2.jpg
    └── persona3.jpg
```

### 2. **Documentos para Transparencia ESAL** (`docs/`)
Aunque existen algunos archivos, falta organizar y complementar:

- ❌ Vincular documentos en la página `transparencia-esal.html` con descargas
- ❌ Agregar más documentos si es necesario:
  - Acuerdos y decisiones de la Junta Directiva
  - Informes de auditoría
  - Políticas organizacionales
  - Conflictos de interés resueltos
  - Planes de mejora

### 3. **Contenido de Texto**
- ⚠️ Verificar que cada página de ejes tenga descripción completa
- ⚠️ Agregar números/estadísticas de impacto en cada eje
- ⚠️ Incluir fotos/testimonios de beneficiarios

---

## 🚀 Cómo Usar Este Proyecto

### Abrir Localmente
1. Descarga/Clona el proyecto
2. Abre `index.html` en tu navegador
3. O usa un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js (si tienes live-server instalado)
   live-server
   ```
4. Accede a `http://localhost:8000`

### Editar Contenido
- **HTML**: Modifica directamente los archivos `.html` en la raíz
- **Estilos**: Edita `assets/css/styles.css`
- **JavaScript**: Modifica `assets/js/main.js`

### Agregar Imágenes
1. Coloca los archivos en `assets/img/` (organizados por carpeta si es necesario)
2. Actualiza las rutas en los HTML:
   ```html
   <img src="assets/img/nombre-imagen.jpg" alt="Descripción">
   ```

### Vincular Documentos de Transparencia
En `transparencia-esal.html`, crea enlaces a los documentos:
```html
<a href="docs/certificaciones/rut.txt" download>Descargar RUT</a>
```

---

## 🔧 Tecnologías Usadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive, variables CSS, flexbox/grid
- **JavaScript**: Vanilla JS (sin frameworks)
- **Fuentes**: Google Fonts (Playfair Display, DM Sans)

---

## 📝 Próximos Pasos (Recomendaciones)

### Inmediato (Alta Prioridad)
1. ⭐ Agregar todas las imágenes faltantes
2. ⭐ Completar la página de Transparencia ESAL con enlaces descargables
3. ⭐ Revisar y validar contenido de texto en todos los ejes

### Corto Plazo
- Agregar Google Analytics para medir tráfico
- Configurar formulario de contacto (conectar a servicio de email)
- Optimizar imágenes para web
- Agregar SEO (meta tags adicionales)

### Mediano Plazo
- Considerar agregar blog/noticias
- Crear galería dinámicas con lightbox
- Agregar mapa interactivo de ubicación
- Mejorar accesibilidad (WCAG 2.1)

### Largo Plazo
- Migrar a CMS estático (Hugo, Jekyll, 11ty)
- Agregar backend para manejo de formularios
- Implementar búsqueda de documentos
- Versión en inglés

---

## 📧 Contacto

**Fundación Creemos Región**  
📍 Villavicencio, Meta - Colombia  
📅 Desde 2009  
🌐 [Ver sitio web](./index.html)

---

## 📄 Licencia

Este proyecto es propiedad de la Fundación Creemos Región. Todos los derechos reservados.

---

**Última actualización**: 21 de abril de 2026
