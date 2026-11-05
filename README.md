# Resultados de la tesis

Sitio estático con dos cosas: un **resumen de cada notebook** (qué hace, qué entra y sale, cifras clave y qué se
verificó) y **todas las páginas de resultados** de la tesis sobre **wa-hls4ml**, el surrogate **07D** y el agente.
No necesita build ni dependencias: es HTML, CSS y JavaScript plano.

## Contenido

**Notebook por notebook** (`notebook.html?id=…`): 6 de datos (01 a 06), 7 de modelos (07 a 07F y el bundle),
5 de tiempos de síntesis y 2 de referencia de Purdue.

**Resultados** (páginas completas):

| Área | Páginas |
|---|---|
| Verificación de los datos | Auditoría de los datos y los notebooks |
| Surrogate 07D | Entrenamiento del surrogate: comparación de 07 a 07F y frente a Purdue |
| Estudio de tiempos de síntesis | Ronda 400 · Ronda 800 · Ronda 2,000 · Síntesis frente al surrogate y el agente · Modelo de costo de síntesis · Modelo de tiempos: bitácora de iteraciones |
| Agente de predicción y DSE | Informe de evaluación del agente · Informe Capa 4 (DSE) |

## Estructura

```
index.html              flujo de datos, lista de notebooks y tarjetas de resultados
notebook.html           resumen de un notebook (se pinta desde data/notebooks.js con ?id=)
data/notebooks.js       resumen por notebook: qué hice, entra/sale, cifras, verificación y avisos
data/resultados.js      catálogo de páginas de resultados: áreas, títulos, resúmenes y cifras
assets/                 estilos, pintado del índice y de cada notebook, barra de navegación
paginas/                una página HTML autocontenida por resultado
tools/agregar_pagina.py añade la barra de navegación a las páginas nuevas
```

## Verlo en local

Abrir `index.html` con doble clic, o desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

y entrar a <http://localhost:8000>.

## Añadir un notebook

Agregar una entrada en `data/notebooks.js` (id, etapa, título, qué hice, entra/sale, cifras y qué se verificó).
Aparece solo en el índice y tiene su propia página.

## Añadir una página de resultados

1. Copiar el HTML a `paginas/` con el nombre `NN-tema.html` (el número marca el orden).
2. Añadir su entrada en `data/resultados.js` (grupo, título, resumen, fecha y cifras).
3. Correr `python3 tools/agregar_pagina.py` para que tenga el enlace de vuelta y anterior/siguiente.

Cada página se conserva tal como se publicó; solo se le añade la barra superior.

## Publicación

El sitio está pensado para GitHub Pages desde la rama `main`, carpeta raíz.
Los notebooks y los datos crudos (CSV de tiempos) no están en este repositorio.
