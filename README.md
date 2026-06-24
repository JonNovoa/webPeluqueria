# Maxi'm Peluqueros — Página Web

Página web completa para **Maxi'm Peluqueros**, Valle de Trápaga-Trapagaran, Bizkaia.

## Estructura de archivos

```
maxim-peluqueros/
├── index.html          ← Página principal
├── css/
│   └── style.css       ← Todos los estilos
├── js/
│   └── main.js         ← Interactividad (menú, animaciones)
└── README.md           ← Este archivo
```

## Cómo abrir en local

1. Simplemente abre el archivo `index.html` con tu navegador (doble clic).
2. No necesitas ningún servidor, funciona directamente.

> **Nota:** El mapa de Google Maps requiere conexión a internet para mostrarse.

## Qué incluye la web

- **Hero** con eslogan y llamada a la acción directa al teléfono
- **Estadísticas** (25+ años, valoración 4.8★, 9 puestos, +111 reseñas)
- **6 servicios** detallados (corte, color, moldeados, tratamientos, peinados, KB3)
- **Sección "Nosotros"** con la historia de la familia Alaiz y el premio del escaparate
- **Horario completo** (lunes a sábado)
- **Contacto** con dirección, teléfono, Facebook y mapa
- **Menú responsivo** con hamburguesa para móvil
- **Animaciones suaves** de entrada al hacer scroll

## Datos de contacto (incluidos en la web)

- **Dirección:** Av. Primero de Mayo, 9 — 48510 Trapagaran, Bizkaia
- **Teléfono:** 944 92 46 64
- **Facebook:** Maxi'm Peluqueros

## Personalización rápida

### Cambiar colores
En `css/style.css`, busca `:root { ... }` al principio del archivo.
Los colores principales son:
- `--c-gold`: dorado (#C8A96E)
- `--c-forest`: verde oscuro (#2B3A2E)
- `--c-dark`: casi negro (#1A1A14)

### Cambiar teléfono
Busca `944 92 46 64` en `index.html` y reemplázalo donde aparezca.

### Añadir fotos
Crea una carpeta `img/` dentro del proyecto y añade las imágenes.
En el hero, por ejemplo, puedes sustituir el degradado del fondo por una foto real:

```css
/* En css/style.css, dentro de .hero__bg */
background-image: url('../img/salon.jpg');
background-size: cover;
background-position: center;
```

### Mapa de Google Maps
Para que el mapa sea más preciso, ve a Google Maps, busca "Maxi'm Peluqueros Trapagaran",
haz clic en "Compartir → Insertar un mapa" y reemplaza la URL del `<iframe>` en `index.html`.

## Para subir a hosting en el futuro

Cuando quieras publicar la web, simplemente sube todos los archivos a tu hosting
(Ionos, Hostinger, etc.) manteniendo la misma estructura de carpetas.
