# Resultados de la tesis

Sitio estático con el resumen de cada notebook (qué hace, qué entra y sale, cifras clave y qué se verificó)
y todas las páginas de resultados de la tesis sobre **wa-hls4ml**, el surrogate **07D** y el agente.
No necesita build ni dependencias: es HTML, CSS y JavaScript plano.

## El proyecto (`proyecto.html`)

Primera entrada del menú. Explica el proyecto y el agente de punta a punta: el problema, cómo está armado el
sistema (clasificador, agente general y agente de predicción), el diagrama de funcionamiento de un pedido de punta
a punta (con cada decisión y si la toma el LLM o el código), el bucle ReAct, una corrida real paso a paso
(pedido Dense del 7 nov 2026 con `gemma4:31b-cloud`), las 11 herramientas con filtros, las salvaguardas en código,
los roles del LLM, el surrogate 07D por dentro y el estado actual. Es una página escrita a mano (no se pinta desde
`data/`): si cambia el agente en `~/Documents/Thesis_Last`, hay que actualizarla.

## Secciones

| Sección | Subsecciones | Qué contiene |
|---|---|---|
| **Surrogate 07D** | Datos · Modelos · Referencia: Purdue | Notebooks 01 a 06 y la auditoría de los datos; 07 a 07F, el bundle y la comparación que explica por qué ganó el 07D; el modelo de Purdue |
| **Modelo de tiempos** | Estudio de tiempos · Modelo de costo · Comparativa | Rondas 400, 800 y 2,000, síntesis frente a surrogate y agente, modelo de costo y bitácora de iteraciones; notebooks T1 a T5 |
| **Agente y DSE** | Cómo funciona · Evaluación · Banco de pruebas DSE | Enlace a la página del proyecto; informe de evaluación del agente e Informe Capa 4; diseño del banco nuevo para evaluar el sistema completo |

Cada portada de sección sigue el mismo orden: qué es, cómo se hizo (notebooks), qué salió (resultados) y qué sigue.

## Estructura

```
index.html                 inicio: portada, ruta datos → surrogate → tiempos → agente, secciones y lo más reciente
proyecto.html              el proyecto y el agente (página propia, con assets/proyecto.css y assets/proyecto.js)
surrogate.html             portadas de sección (se pintan desde los datos)
tiempos.html
agente.html
notebook.html              resumen de un notebook, con ?id=
data/secciones.js          secciones y subsecciones: título, resumen, cifras, tarjeta destacada y qué sigue
data/notebooks.js          un resumen por notebook: qué hice, entra/sale, cifras, verificación y avisos
data/resultados.js         catálogo de páginas de resultados
assets/shell.js            barra compartida: menú, migas, anterior/siguiente, tema, progreso y arreglos de móvil
assets/                    estilos y scripts de cada vista
paginas/                   una página HTML autocontenida por resultado
tools/agregar_pagina.py    inyecta la barra compartida en las páginas de paginas/
```

La barra compartida también trae, en todas las páginas (incluidas las de `paginas/`):

- **Botón de tema** (Auto, Claro, Oscuro), guardado en el navegador. Fuerza el tema reescribiendo en el navegador las
  reglas `@media (prefers-color-scheme: …)` de cada hoja de estilos, así que funciona también con el CSS propio de
  cada página de resultados sin tocarlo.
- **Barra de progreso de lectura** arriba y botón **volver arriba** en las páginas largas.
- **Ícono** de la pestaña (`assets/favicon.svg`).

Las páginas principales llevan además etiquetas Open Graph para la **vista previa al compartir** el enlace, con la
imagen `assets/og.png`. Su fuente es `tools/og.html`; el comando para regenerarla está en ese archivo.

Las portadas de sección pintan un diagrama propio desde `visual` en `data/secciones.js` (tipos `surrogate`,
`tiempos` y `agente`, dibujados en `assets/seccion.js`).

En el teléfono, la barra compartida corrige sin tocar el HTML de `paginas/` los desbordes a lo ancho: parte las
rutas largas en `<code>` y mete en un contenedor con scroll las tablas que no lo tenían.

## Verlo en local

Abrir `index.html` con doble clic, o desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

y entrar a <http://localhost:8000>.

## Añadir un notebook

Agregar una entrada en `data/notebooks.js` con `seccion` y `sub` (por ejemplo `seccion: "surrogate", sub: "modelos"`),
más id, título, qué hice, entra/sale, cifras y qué se verificó. Aparece solo en su portada y tiene su página.

## Añadir una página de resultados

1. Copiar el HTML a `paginas/` con el nombre `NN-tema.html`.
2. Añadir su entrada en `data/resultados.js`, con `seccion` y `sub`, título, resumen, fecha y cifras.
3. Correr `python3 tools/agregar_pagina.py` para que tenga la barra compartida.

Cada página se conserva tal como se publicó; solo se le añade la barra superior.

## Añadir una sección o subsección

Editar `data/secciones.js`. El menú, el inicio y las migas se actualizan solos.

## Publicación

El sitio está pensado para GitHub Pages desde la rama `main`, carpeta raíz.
Los notebooks y los datos crudos no están en este repositorio.
