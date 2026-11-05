// Catálogo de resultados. Para añadir una página nueva:
//   1) copiar su HTML a paginas/  2) añadir una entrada aquí  3) correr tools/agregar_pagina.py
// Se usa .js (no .json) para que el sitio también abra con doble clic, sin servidor.
window.RESULTADOS = {
  grupos: [
    {
      id: "tiempos",
      titulo: "Estudio de tiempos de síntesis",
      descripcion:
        "Cuánto tarda realmente sintetizar un acelerador con hls4ml, y cuánto tiempo ahorran el surrogate 07D y el agente. Cinco etapas, de la primera muestra al modelo de costo.",
    },
    {
      id: "agente",
      titulo: "Agente de predicción y DSE",
      descripcion:
        "Evaluación del agente ReAct y del surrogate 07D: pruebas funcionales, fidelidad, búsqueda frente al azar y honestidad de la confianza.",
    },
  ],
  paginas: [
    {
      grupo: "tiempos",
      archivo: "paginas/01-tiempos-sintesis-r400.html",
      titulo: "Tiempos de síntesis · Ronda 400",
      resumen:
        "Primera muestra: se recuperan de los logs originales los tiempos de C-synthesis y de Vivado del test de wa-hls4ml.",
      fecha: "2026-10-20",
      etiqueta: "Ronda 400",
      cifras: [
        ["2,830", "configuraciones"],
        ["7.6 min", "síntesis típica"],
        ["≥ 23%", "cómputo en fallos"],
      ],
    },
    {
      grupo: "tiempos",
      archivo: "paginas/02-tiempos-sintesis-r800.html",
      titulo: "Tiempos de síntesis · Ronda 800",
      resumen:
        "Se duplica la muestra y se comprueba que los resultados se sostienen; aparece el efecto de la precisión de los pesos.",
      fecha: "2026-10-21",
      etiqueta: "Ronda 800",
      cifras: [
        ["5,645", "configuraciones"],
        ["7.6 min", "síntesis típica"],
        ["≥ 27%", "cómputo en fallos"],
      ],
    },
    {
      grupo: "tiempos",
      archivo: "paginas/03-tiempos-sintesis-r2000.html",
      titulo: "Tiempos de síntesis · Ronda 2,000",
      resumen:
        "Ronda final con 13,276 configuraciones y el surrogate 07D medido sobre exactamente las mismas.",
      fecha: "2026-10-22",
      etiqueta: "Ronda 2,000",
      cifras: [
        ["13,276", "configuraciones"],
        ["3.1 ms", "surrogate 07D"],
        ["199,000×", "speedup mediano"],
      ],
    },
    {
      grupo: "tiempos",
      archivo: "paginas/04-sintesis-vs-surrogate-agente.html",
      titulo: "Síntesis frente al surrogate y el agente",
      resumen:
        "Los mismos 140 diseños, medidos de cuatro maneras: síntesis real, surrogate directo y agente LLM con tres formas de describir la red.",
      fecha: "2026-10-22",
      etiqueta: "Comparación final",
      cifras: [
        ["11.2 min → 3.1 ms", "síntesis frente a 07D"],
        ["125/140", "redes exactas con texto completo"],
      ],
    },
    {
      grupo: "tiempos",
      archivo: "paginas/05-modelo-costo-sintesis.html",
      titulo: "Modelo de costo de síntesis",
      resumen:
        "Predice antes de sintetizar cuánto tardarán C-synthesis y Vivado, con un rango del 10 al 90 %, y la probabilidad de que la síntesis falle.",
      fecha: "2026-10-23",
      etiqueta: "Modelo",
      cifras: [
        ["91.8 %", "dentro de ×2 (C-synth)"],
        ["0.912", "AUC del fallo"],
      ],
    },
    {
      grupo: "agente",
      archivo: "paginas/06-informe-evaluacion-agente.html",
      titulo: "Informe de evaluación del agente de predicción",
      resumen:
        "Pruebas funcionales, benchmark de fidelidad por grupo de arquitectura y la ficha del modelo surrogate Transformer.",
      fecha: "2026-07-22",
      etiqueta: "Agente ReAct",
      cifras: [
        ["22/23", "checks funcionales OK"],
        ["40", "casos de benchmark"],
      ],
    },
    {
      grupo: "agente",
      archivo: "paginas/07-informe-capa4-dse.html",
      titulo: "Informe Capa 4 · DSE",
      resumen:
        "Cinco experimentos sobre el agente y el surrogate 07D: reconstrucción, búsqueda frente al azar, consistencia física, honestidad de la confianza y dominio de aplicabilidad.",
      fecha: "2026-10-11",
      etiqueta: "Capa 4 + 5",
      cifras: [
        ["3/3", "tareas ganadas al azar"],
        ["6/7", "subsets con confianza honesta"],
        ["0.907", "R² del 07D en test"],
      ],
    },
  ],
};
