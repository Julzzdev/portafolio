---
name: Julzz Labs
description: Tablero de salidas de una central de autobuses mexicana para los productos que Julio construye y lanza.
colors:
  azul: "#1537c9"
  azul-hondo: "#0b1f86"
  noche: "#07124a"
  amarillo: "#ffc21a"
  rojo: "#d6331d"
  crema: "#f4e9cf"
  crema-clara: "#fff8ea"
  superficie: "#fbf5e4"
  borde: "#cdbd97"
  tinta: "#0c1a5c"
  tinta-suave: "#3e4a82"
  rojo-texto: "#b92a15"
  fondo-noche: "#0a1650"
  superficie-noche: "#11216e"
  borde-noche: "#2f409a"
  tinta-suave-noche: "#c3c9e6"
  rojo-texto-noche: "#ff9a82"
  banda-tinta-suave: "#d7dcf4"
  banda-borde: "#5068dc"
  kirei-tinta: "#0a2326"
  kirei-tinta-2: "#123438"
  kirei-teal: "#1d6b73"
  kirei-esmalte: "#f6f1e8"
  kirei-menta: "#a8f0d4"
  kirei-coral: "#ff6f4f"
  kirei-mantequilla: "#ffd87a"
typography:
  display:
    fontFamily: "Big Shoulders Variable, Arial Narrow, sans-serif"
    fontSize: "6rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Big Shoulders Variable, Arial Narrow, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.005em"
  title:
    fontFamily: "Big Shoulders Variable, Arial Narrow, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "0.005em"
  boton:
    fontFamily: "Big Shoulders Variable, Arial Narrow, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  sello:
    fontFamily: "Big Shoulders Variable, Arial Narrow, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.04em"
  lead:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Barlow, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  dato:
    fontFamily: "JetBrains Mono Variable, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
  kirei-display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "5.5rem"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.025em"
rounded:
  paleta: "0.05em"
  placa: "3px"
  kirei-pildora: "9999px"
spacing:
  margen-movil: "16px"
  margen: "32px"
  columna-tablero: "40px"
  andenes: "64px"
  seccion: "80px"
  seccion-lg: "112px"
  contenedor: "90rem"
components:
  boton-boleto:
    backgroundColor: "{colors.rojo}"
    textColor: "{colors.crema-clara}"
    typography: "{typography.boton}"
    padding: "0.7rem 1.75rem"
    height: "3.25rem"
  boton-boleto-hover:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.noche}"
  boton-linea:
    textColor: "{colors.tinta}"
    rounded: "{rounded.placa}"
    padding: "0.7rem 1.4rem"
    height: "3.25rem"
  boton-linea-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.crema}"
  sello:
    textColor: "{colors.rojo-texto}"
    typography: "{typography.sello}"
    rounded: "{rounded.placa}"
    padding: "0.2rem 0.45rem 0.15rem"
  paleta-crema:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.noche}"
    rounded: "{rounded.paleta}"
    width: "0.66em"
    height: "1.16em"
  paleta-amarilla:
    backgroundColor: "{colors.amarillo}"
    textColor: "{colors.noche}"
    rounded: "{rounded.paleta}"
    width: "0.66em"
    height: "1.16em"
  paleta-azul:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.crema}"
    rounded: "{rounded.paleta}"
    width: "0.66em"
    height: "1.16em"
  paleta-roja:
    backgroundColor: "{colors.rojo}"
    textColor: "{colors.crema-clara}"
    rounded: "{rounded.paleta}"
    width: "0.66em"
    height: "1.16em"
  banda:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.crema}"
  campo:
    backgroundColor: "{colors.crema}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.placa}"
    padding: "12px 16px"
  kirei-cta:
    backgroundColor: "{colors.kirei-coral}"
    textColor: "{colors.kirei-tinta}"
    rounded: "{rounded.kirei-pildora}"
    padding: "16px 28px"
  kirei-cta-hover:
    backgroundColor: "{colors.kirei-menta}"
    textColor: "{colors.kirei-tinta}"
---

# Design System: Julzz Labs

## Overview

**Creative North Star: "La Central de Salidas"**

Julzz Labs es una central de autobuses mexicana: cada producto es una salida con andén y estado real. El sistema toma de ahí sus materiales: lámina azul esmaltada, paletas mecánicas con corte horizontal, franjas de carrocería, boletos con muescas y sellos de estado. La letra es de rótulo, condensada y en mayúsculas, y la información se lee en columnas cuyo significado no cambia de un renglón a otro.

La densidad es de tablero: renglones separados por líneas, sin rejillas de tarjetas iguales. Las superficies azules abren y cierran las páginas, y entre ellas va el papel de boleto, crema de día y azul oscuro de noche. El único movimiento con carácter es la caída de las paletas al cargar; todo lo demás cambia de color y ya.

Kirei es un pasajero con identidad propia. Su sección deja la central y usa su tinta, su esmalte, su teal, su menta, su coral y su Fraunces, para que Julzz Labs no se confunda con ella.

**Key Characteristics:**
- Azul esmaltado, paletas amarillas y crema, y un rojo reservado para boletos y estados.
- Letra de rótulo condensada en mayúsculas para todo lo que se anuncia; Barlow para lo que se lee.
- Renglones con columnas fijas en lugar de tarjetas.
- Esquinas casi rectas, con muescas de boleto como única silueta especial.
- Estado explícito en cada proyecto, con sello o paletas.

## Colors

Colores saturados de lámina pintada sobre un papel de boleto cálido, con una segunda paleta aislada para Kirei.

### Primary
- **Azul Esmaltado** (#1537c9): superficie de encabezado, tablero, cierres y pie; también el color de enlaces y acentos sobre papel de día.
- **Azul Hondo** (#0b1f86): hover de renglones y navegación dentro de lo azul, y panel del menú móvil.

### Secondary
- **Amarillo Paleta** (#ffc21a): paletas de lo más importante, acento dentro de lo azul y en el tema de noche, selección de texto y anillo de foco.

### Tertiary
- **Rojo Boleto** (#d6331d): fondo del boleto de acción y de las paletas de estado. El brief pedía #e8402a; se construyó más oscuro para que el texto crema alcance 4.5:1. Ese texto usa la Crema Clara (#fff8ea), con 4.57:1 sobre este rojo: la crema base (#f4e9cf) se queda en 4.0:1 y no debe ir sobre él en tamaños de texto normal.
- **Rojo de Texto** (#b92a15 de día, #ff9a82 de noche): sellos de estado sobre papel. Dentro de lo azul los sellos pasan a amarillo.

### Neutral
- **Crema Boleto** (#f4e9cf): fondo de día, paleta por defecto y texto sobre azul.
- **Crema Clara** (#fff8ea): solo letra sobre rojo.
- **Papel Alto** (#fbf5e4): superficie de día, hover de renglones.
- **Filete de Boleto** (#cdbd97): líneas entre renglones de día.
- **Tinta Azul** (#0c1a5c) y **Tinta Suave** (#3e4a82): texto principal y secundario de día.
- **Noche de Central** (#07124a): letra de las paletas claras y sombra de sus mitades. Las familias de noche (#0a1650 fondo, #11216e superficie, #2f409a línea, #c3c9e6 texto suave) sustituyen al papel cuando se bajan las luces.
- **Sobre Azul** (#d7dcf4 texto suave, #5068dc línea): valores propios de las superficies azules, iguales en ambos temas.

### Kirei
- **Tinta** (#0a2326, #123438), **Teal** (#1d6b73), **Esmalte** (#f6f1e8), **Menta** (#a8f0d4), **Coral** (#ff6f4f) y **Mantequilla** (#ffd87a): solo dentro de la sección de Kirei. La sección conserva a propósito esta paleta y no toma ningún color de la central.

### Named Rules
**La Regla de la Lámina.** Azul, azul hondo, crema, amarillo y rojo no cambian con el tema. Solo cambia el papel: fondo, superficie, líneas y tintas.

**La Regla de la Letra sobre Rojo.** Sobre el rojo, la letra es Crema Clara. Un rojo más claro o una crema más oscura bajan de 4.5:1.

**La Regla del Pasajero.** La paleta de Kirei no sale de la sección de Kirei, y la de la central no entra en ella.

## Typography

**Display Font:** Big Shoulders Variable (con Arial Narrow)
**Body Font:** Barlow 400, 500 y 600 (con ui-sans-serif, system-ui)
**Label/Mono Font:** JetBrains Mono Variable (con ui-monospace), para horas, fechas, años y stack
**Kirei Font:** Fraunces 300 y 400 itálica (con Georgia), solo en los títulos de la sección de Kirei

**Character:** Big Shoulders habla como rótulo de terminal, en peso 800 y mayúsculas; Barlow, también de raíz señalética, se encarga de leer sin ruido.

### Hierarchy
- **Display** (800, hasta 6rem, 0.95, mayúsculas): títulos de sección a escala de pared; bajan a 3.75rem en móvil.
- **Headline** (800, 3.75rem, 0.95, mayúsculas): títulos de página y de bloque.
- **Title** (800, 2.25rem, 0.95, mayúsculas): andenes y proyectos destacados; 1.5rem en los renglones comunes.
- **Lead** (400, 1.25rem, 1.625): entradas de sección, con máximo de unos 62ch.
- **Body** (400, 1rem, 1.625): descripciones, con máximo de 62 a 70ch.
- **Dato** (mono 400, 0.75 a 0.875rem, cifras tabulares): horas, fechas y stack.
- **Kirei Display** (Fraunces 300, hasta 5.5rem, 0.98, tracking cerrado): título de su sección, con una palabra en itálica 400 y menta.

### Named Rules
**La Regla del Rótulo.** Lo que se anuncia va en Big Shoulders mayúscula; lo que se lee, en Barlow con caja normal. Las oraciones largas no van en rótulo.

**La Regla de la Escala por Grupo.** Las paletas miden en `em`: su tamaño sale del font-size de su contenedor, nunca de medidas propias por letra.

## Layout

Contenedor de hasta 90rem con márgenes de 16px en móvil y 32px desde 40rem. Las secciones respiran con 80px verticales y 112px en escritorio; los andenes se separan 64px.

El tablero se organiza con dos columnas fijas desde 64rem (1.5fr y 1fr, con 40px de separación), compartidas por el encabezado de columnas y todos sus renglones, de modo que cada columna signifique lo mismo en toda la tabla. Debajo de 64rem cada renglón se apila. Los renglones se separan con líneas de 1px, y con 2px en los encabezados de grupo. Las superficies azules de cierre y de encabezado de página llevan las franjas de carrocería en su borde.

## Elevation & Depth

Sistema plano: la profundidad viene del contraste entre lámina azul y papel, de los filetes y del cambio de fondo en hover. La excepción es material y pertenece a la paleta, que proyecta una sombra corta y parte su cara en dos mitades con un degradado duro.

### Shadow Vocabulary
- **Sombra de paleta** (`box-shadow: 0 0.03em 0.08em rgb(4 12 60 / 0.45)`): separa cada paleta de la lámina; escala con la letra.

### Named Rules
**La Regla de la Lámina Plana.** Las superficies en flujo no llevan sombra: ni renglones, ni secciones, ni botones. La sombra es propia de la paleta.

## Shapes

Esquinas casi rectas: 3px para botones de línea, sellos, campos y placas de navegación, y 0.05em en las paletas. La silueta propia es el boleto, un rectángulo con dos muescas circulares de 0.5rem a media altura de sus lados. Las franjas de carrocería son una banda de 1.25rem con rojo, amarillo y crema en tres tercios duros. La píldora solo existe en Kirei.

## Components

### Buttons
Mecánicos y directos; cambian de color sin moverse.
- **Shape:** boleto con muescas laterales, sin radio; altura mínima de 3.25rem.
- **Primary (boleto):** Rojo Boleto con letra Crema Clara y rótulo de 1.3rem. Puede llevar un talón separado por una línea punteada con la flecha.
- **Hover / Focus:** pasa a amarillo con letra noche en 160ms ease-out. El foco es un contorno interior de 3px, retraído 7px para que las muescas no lo corten.
- **Secondary (línea):** borde de 2px del color del texto, radio de 3px, rótulo de 1.2rem peso 700. En hover se rellena de tinta.

### Paletas (signature)
Letras sueltas en tejas de 0.66 por 1.16em, separadas 0.05em, en mayúsculas.
- **Tonos:** crema, amarilla, azul y roja. La amarilla marca lo principal, la roja el estado, la azul los números de andén y los renglones sobre papel.
- **Corte:** línea horizontal al centro; en paletas de renglón (`chica`) pasa detrás de la letra para no tacharla.
- **Caída:** al cargar, cada paleta del tablero recorre de 3 a 7 letras, a razón de una cada 85ms con 115ms de giro, y se detiene. Solo ocurre una vez. Sin JavaScript o con movimiento reducido, el tablero ya está completo.
- **Accesibilidad:** el texto real va oculto para lectores de pantalla y las tejas quedan `aria-hidden`.

### Sello
Borde de 2px, radio de 3px, rótulo de 0.95rem, girado -4°. Declara el estado de un proyecto: nada desaparece, se sella. Su color es el rojo de texto sobre papel y amarillo sobre azul.

### Renglón de salida
Filas a todo el ancho con las columnas del tablero, filete inferior de 1px y relleno vertical de 24px, o de 10px en el tablero principal. A la izquierda el nombre en paletas, título y descripción; a la derecha para quién es, stack, sello y año. Toda la fila es el enlace. En hover cambia a Papel Alto sobre papel o a Azul Hondo sobre azul.

### Banda
Superficie azul que redefine tinta, tinta suave, borde y acento, de modo que los componentes dentro de ella se adaptan sin variantes propias. Se usa en navegación, tablero, encabezados de página, cierre y pie.

### Inputs / Fields
- **Style:** borde de 1px en color filete, fondo de la página, radio de 3px, relleno de 12 por 16px.
- **Focus:** el borde pasa a acento y aparece el anillo global amarillo de 3px con refuerzo noche.

### Navigation
Barra azul pegajosa de 4.25rem. Marca con «Julzz» en paletas amarillas y «Labs» en rótulo. Enlaces en Big Shoulders 700 mayúscula sobre placas de 3px; el hover y la página actual usan Azul Hondo. En móvil, un menú desplegable sobre panel Azul Hondo.

### Kirei CTA
Píldora coral con texto tinta en Barlow 600, que pasa a menta en hover. Vive únicamente en la sección de Kirei.

## Do's and Don'ts

### Do:
- **Do** usar la letra Crema Clara sobre el Rojo Boleto.
- **Do** repetir las mismas columnas en todas las filas de una tabla de salidas.
- **Do** declarar el estado real de cada proyecto con sello o paletas.
- **Do** dejar el tablero completo cuando no haya JavaScript o se pida movimiento reducido.
- **Do** usar los tokens semánticos de papel y tinta para que la banda y el tema de noche se resuelvan solos.
- **Do** mantener Fraunces y la paleta de Kirei dentro de la sección de Kirei.

### Don't:
- **Don't** repetir la caída de las paletas después de la carga ni usarla como efecto de hover.
- **Don't** poner la crema base como letra sobre el rojo.
- **Don't** presentar los proyectos como una rejilla de tarjetas iguales.
- **Don't** agregar sombras a superficies en flujo.
- **Don't** usar píldoras ni Fraunces en las superficies de la central.
- **Don't** cruzar la letra de una paleta chica con su corte.
