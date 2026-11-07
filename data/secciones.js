// Estructura del sitio: 3 secciones, cada una con sus subsecciones.
// Qué pertenece a cada una se decide en los datos: cada entrada de data/notebooks.js y data/resultados.js
// lleva `seccion` y `sub`. El orden de las subsecciones es el orden en que se muestran.
window.SECCIONES = [
  {
    id: "surrogate",
    titulo: "Surrogate 07D",
    corto: "Surrogate",
    archivo: "surrogate.html",
    resumen:
      "El modelo que predice recursos y latencia de un acelerador sin sintetizarlo. Cómo se prepararon los datos, cómo se eligió el 07D entre seis variantes y cómo se compara con el modelo histórico de Purdue.",
    cifras: [
      ["0.907", "R² medio en test"],
      ["4.88 %", "SMAPE medio"],
      ["433,676", "diseños de entrenamiento"],
    ],
    // Diagrama de la portada (lo pinta assets/seccion.js)
    visual: {
      tipo: "surrogate",
      embudo: [["683,171", "diseños crudos en wa-hls4ml", 683171], ["619,601", "con síntesis utilizable", 619601]],
      descartados: "63,570 descartados (9.3 %): síntesis fallidas",
      splits: [["train", 433676], ["val", 92992], ["test", 92933]],
      modelos: [["07 · B", 0.898], ["07B", 0.886], ["07C", 0.886], ["07D", 0.907, true], ["07E", 0.889], ["07F", 0.85]],
      referencia: ["Purdue", 0.9585, "referencia histórica, 2.3 M parámetros"],
    },
    subs: [
      {
        id: "datos",
        titulo: "Datos",
        desc: "Del JSON crudo de wa-hls4ml al dataset que entra al entrenamiento: seis notebooks en cadena, comprobados también desde los datos crudos.",
        flujo: true,
      },
      {
        id: "modelos",
        titulo: "Modelos",
        desc: "Seis series de experimentos controlados sobre el mismo dataset. El test se usó solo para la evaluación final.",
      },
      {
        id: "referencia",
        titulo: "Referencia: Purdue",
        desc: "El modelo histórico del benchmark, con el que se compara el 07D.",
      },
    ],
    sigue: [
      "Ablación de las variables derivadas del 07D: probarlo con y sin ellas.",
      "Regenerar los fixtures de equivalencia con muestreo estratificado por subset.",
      "Borrar las celdas con error de los notebooks 01 y Mejor_Modelo_07.",
    ],
  },
  {
    id: "tiempos",
    titulo: "Modelo de tiempos",
    corto: "Tiempos",
    archivo: "tiempos.html",
    resumen:
      "Cuánto tarda realmente sintetizar un acelerador con hls4ml, cuánto tiempo ahorra el surrogate, y un modelo que predice el costo de una síntesis antes de lanzarla.",
    cifras: [
      ["7.5 min", "síntesis típica (mediana)"],
      ["199,000×", "speedup del 07D"],
      ["91.8 %", "tiempo predicho dentro de ×2"],
    ],
    visual: {
      tipo: "tiempos",
      sintesis: ["7.5 min", "mediana de una síntesis real (C-synth + Vivado)"],
      surrogate: ["3.1 ms", "mediana del surrogate 07D, en CPU"],
      speedup: ["199,000×", "más rápido que sintetizar (mediana de la razón, diseño por diseño)"],
      equivale: "En los 7.5 min de una síntesis típica, el 07D predice unos 145,000 diseños.",
      rondas: [["Ronda 400", "2,830", 2830, "20 oct"], ["Ronda 800", "5,645", 5645, "21 oct"], ["Ronda 2,000", "13,276", 13276, "22 oct"]],
      modelo: [["91.8 %", "del tiempo de C-synth predicho dentro de ×2"], ["0.912", "AUC al predecir si la síntesis falla"]],
    },
    subs: [
      {
        id: "estudio",
        titulo: "Estudio de tiempos",
        desc: "Los tiempos reales de C-synthesis y de Vivado recuperados de los logs originales, en tres rondas, y su comparación con el surrogate y el agente.",
      },
      {
        id: "modelo",
        titulo: "Modelo de costo",
        desc: "Predicción del tiempo de cada etapa y de la probabilidad de fallo antes de sintetizar, y la bitácora de sus iteraciones.",
      },
      {
        id: "comparativa",
        titulo: "Comparativa de modelos",
        desc: "Experimento planeado: poner el gradient boosting actual frente a otras nueve alternativas, bajo las mismas condiciones, para comprobar que la elección del modelo se sostiene.",
        experimento: {
          estado: "Planeado",
          nota: "Solo anotado: todavía no hay notebooks ni resultados. Esta lista es la que se va a ejecutar cuando se decida avanzar.",
          modelos: [
            ["1", "Gradient Boosting (el actual)", "Baseline", "Obligatorio"],
            ["2", "LightGBM", "Gradient Boosted Trees", "Alta"],
            ["3", "XGBoost", "Gradient Boosted Trees", "Alta"],
            ["4", "CatBoost", "Gradient Boosted Trees", "Alta"],
            ["5", "Random Forest", "Ensemble de árboles", "Alta"],
            ["6", "Extra Trees Regressor", "Ensemble de árboles", "Media"],
            ["7", "HistGradientBoosting", "Gradient Boosted Trees", "Media"],
            ["8", "MLP Regressor", "Red neuronal", "Alta"],
            ["9", "FT-Transformer", "Deep Learning tabular", "Experimental"],
            ["10", "TabNet", "Deep Learning tabular", "Experimental"],
          ],
          porDecidir: [
            "Qué se predice: lo más natural es los mismos objetivos del modelo actual (tiempo de C-synthesis, tiempo de síntesis lógica y fallo de la síntesis).",
            "Condiciones iguales para todos: las mismas particiones train, val y test, y las mismas 43 variables sin fuga.",
            "Métricas: las del modelo actual (acierto dentro de ×2, error mediano, Spearman, cobertura del rango 10–90 %, AUC del fallo), para que la comparación sea directa.",
            "Cómo se ajustan: hiperparámetros elegidos solo con val y test usado una sola vez, igual que en el modelo actual.",
            "Cómo darle los cuantiles a los modelos que no los producen de forma nativa (por ejemplo Random Forest o los de red neuronal).",
          ],
        },
      },
    ],
    sigue: [
      "Comparativa de modelos: notebooks de los diez candidatos, cuando se decida avanzar.",
      "Nuevas iteraciones del modelo, que se suman a la bitácora.",
      "Conectar el modelo al agente como herramienta, probarlo y documentarlo.",
    ],
  },
  {
    id: "agente",
    titulo: "Agente y DSE",
    corto: "Agente",
    archivo: "agente.html",
    resumen:
      "Un agente ReAct que usa el surrogate para explorar diseños. Cómo funciona, pruebas funcionales, fidelidad al reconstruir diseños conocidos, búsqueda frente al azar, honestidad de la confianza que comunica y el banco nuevo para comparar modelos.",
    cifras: [
      ["11", "herramientas del agente"],
      ["61/63", "chequeos smoke OK (7 nov)"],
      ["3/3", "tareas de búsqueda ganadas al azar"],
      ["6/7", "subsets con confianza honesta"],
    ],
    visual: {
      tipo: "agente",
      pasos: [
        ["Pedido", "lenguaje natural", ""],
        ["Clasificador", "LLM: ¿predicción?", "llm"],
        ["Agente ReAct", "decide qué herramienta usar", "llm"],
        ["11 herramientas", "9 en código, 2 con LLM", "codigo"],
        ["Surrogate 07D", "6 salidas en ms", "modelo"],
        ["Respuesta + reporte", "con su confiabilidad", ""],
      ],
      enlace: ["proyecto.html#funcionamiento", "Ver el diagrama completo de funcionamiento →"],
    },
    subs: [
      {
        id: "funciona",
        titulo: "Cómo funciona",
        desc: "El sistema por dentro: el clasificador, el bucle ReAct, las 11 herramientas, las salvaguardas en código y una corrida real paso a paso.",
        destacado: {
          href: "proyecto.html",
          sec: "proyecto",
          titulo: "El proyecto y el agente",
          texto: "Arquitectura del sistema, cómo razona el agente, qué hace cada herramienta y qué no se deja al LLM. Sistema base sin RAG, con gemma4:31b-cloud.",
          cifras: [["11", "herramientas"], ["22", "iteraciones máx."], ["17–24 s", "por pedido"]],
        },
      },
      {
        id: "evaluacion",
        titulo: "Evaluación",
        desc: "Dos informes: las pruebas funcionales con el benchmark de fidelidad, y los cinco experimentos de la Capa 4.",
      },
      {
        id: "banco",
        titulo: "Banco de pruebas DSE",
        desc: "El banco nuevo, desde cero, para evaluar el sistema completo en tareas de exploración de diseño con modelos de lenguaje open source. Hoy es un diseño: todavía no se ha ejecutado.",
      },
    ],
    sigue: [
      "Incorporar el extended abstract de CSTIC 2027, que existe como documento pero aún no como página.",
      "Banco de pruebas DSE: ficha del dataset por familia, espacios y oráculo, y luego correr los modelos.",
    ],
  },
];
