# Resultados de la tesis

Sitio estático que reúne en un solo lugar las páginas de resultados de la tesis sobre
**wa-hls4ml**, el surrogate **07D** y el agente de predicción. No necesita build ni dependencias:
es HTML, CSS y JavaScript plano.

## Contenido

| Área | Páginas |
|---|---|
| Surrogate 07D | Entrenamiento del surrogate: comparación de 07 a 07F y frente a Purdue |
| Estudio de tiempos de síntesis | Ronda 400 · Ronda 800 · Ronda 2,000 · Síntesis frente al surrogate y el agente · Modelo de costo de síntesis |
| Agente de predicción y DSE | Informe de evaluación del agente · Informe Capa 4 (DSE) |

## Estructura

```
index.html              índice con tarjetas por área
data/resultados.js      catálogo: áreas, títulos, resúmenes y cifras de cada tarjeta
assets/                 estilos del índice, pintado del índice y barra de navegación
paginas/                una página HTML autocontenida por resultado
tools/agregar_pagina.py añade la barra de navegación a las páginas nuevas
```

## Verlo en local

Abrir `index.html` con doble clic, o desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

y entrar a <http://localhost:8000>.

## Añadir una página nueva

1. Copiar el HTML a `paginas/` con el nombre `NN-tema.html` (el número marca el orden).
2. Añadir su entrada en `data/resultados.js` (grupo, título, resumen, fecha y cifras).
3. Correr `python3 tools/agregar_pagina.py` para que tenga el enlace de vuelta y anterior/siguiente.

Cada página se conserva tal como se publicó; solo se le añade la barra superior.

## Publicación

El sitio está pensado para GitHub Pages desde la rama `main`, carpeta raíz.
Los datos crudos (CSV de tiempos, notebooks) no están en este repositorio.
