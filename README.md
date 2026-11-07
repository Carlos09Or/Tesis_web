# Resultados de la tesis

Sitio estático con el resumen de cada notebook (qué hace, qué entra y sale, cifras clave y qué se verificó)
y todas las páginas de resultados de la tesis sobre **wa-hls4ml**, el surrogate **07D** y el agente.
No necesita build ni dependencias: es HTML, CSS y JavaScript plano.

## Secciones

| Sección | Subsecciones | Qué contiene |
|---|---|---|
| **Surrogate 07D** | Datos · Modelos · Referencia: Purdue | Notebooks 01 a 06 y la auditoría de los datos; 07 a 07F, el bundle y la comparación que explica por qué ganó el 07D; el modelo de Purdue |
| **Modelo de tiempos** | Estudio de tiempos · Modelo de costo | Rondas 400, 800 y 2,000, síntesis frente a surrogate y agente, modelo de costo y bitácora de iteraciones; notebooks T1 a T5 |
| **Agente y DSE** | Evaluación · Banco de pruebas DSE | Informe de evaluación del agente e Informe Capa 4; diseño del banco nuevo para evaluar el sistema completo |

Cada portada de sección sigue el mismo orden: qué es, cómo se hizo (notebooks), qué salió (resultados) y qué sigue.

## Estructura

```
index.html                 inicio: una tarjeta por sección
surrogate.html             portadas de sección (se pintan desde los datos)
tiempos.html
agente.html
notebook.html              resumen de un notebook, con ?id=
data/secciones.js          secciones y subsecciones: título, resumen, cifras y qué sigue
data/notebooks.js          un resumen por notebook: qué hice, entra/sale, cifras, verificación y avisos
data/resultados.js         catálogo de páginas de resultados
assets/shell.js            barra compartida: menú, migas y anterior/siguiente
assets/                    estilos y scripts de cada vista
paginas/                   una página HTML autocontenida por resultado
tools/agregar_pagina.py    inyecta la barra compartida en las páginas de paginas/
```

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
