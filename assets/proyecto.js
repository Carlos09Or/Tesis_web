// Página del proyecto: recorrido paso a paso de una corrida real, catálogo de herramientas y índice lateral.
(function () {
  "use strict";
  if (window.Shell) window.Shell.montar();

  function el(tag, clase, texto) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto != null) n.textContent = texto;
    return n;
  }

  // ───────────────────────── Recorrido de la corrida del 7 nov (Dense) ─────────────────────────
  var PEDIDO =
    "una red con dos capas densas cuantizadas: la primera de 104 a 128 neuronas (13440 parametros, reuse factor 832), " +
    "la segunda de 128 a 104 (13416 parametros, reuse factor 1024). Reuse factor global 1024, estrategia Resource, " +
    "io_parallel, precision de 2 bits";
  var ID = "cnd_4712780a";
  var PAYLOAD =
    '{\n  "arch": [\n    {"t": "QDense", "in": [104], "out": [128], "p": 13440, "rf": 832},\n' +
    '    {"t": "QDense", "in": [128], "out": [104], "p": 13416, "rf": 1024}\n  ],\n' +
    '  "cfg": {"rf": 1024, "strategy": "Resource", "io": "io_parallel", "weight_bits": 2}\n}';

  // campos: lo que la ficha del candidato tiene después de ese paso
  var PASOS = [
    {
      corto: "Pedido", tipo: "usuario", titulo: "El usuario escribe el pedido",
      texto: "Trae todo: las dos capas con sus parámetros, el reuse factor de cada capa, el reuse factor global, la estrategia, el tipo de io y la precisión.",
      bloque: { et: "Usuario", cod: PEDIDO },
      campos: [],
    },
    {
      corto: "Clasificar", tipo: "codigo", titulo: "El clasificador decide la ruta",
      texto: "main.py le pasa el mensaje al clasificador (LLM, temperatura 0.2), que responde una sola palabra. Con «prediccion» se reinician los candidatos y entra el agente de predicción.",
      bloque: { et: "Clasificador", cod: "prediccion" },
      campos: [],
    },
    {
      corto: "Traducir", tipo: "accion", herramienta: "generar_candidato", titulo: "Traduce el pedido a JSON",
      thought: "El pedido trae capas, bits y reuse factor global: no hace falta pedir ejemplos reales. Lo traduzco.",
      action: '{"action": "generar_candidato",\n "action_input": {"pedido_usuario": "una red con dos capas densas…"}}',
      obs: "Candidato generado y registrado con id=" + ID + ".\n" + PAYLOAD,
      nota: "La compuerta de grounding no actúa: el pedido menciona los bits y el reuse factor global.",
      campos: ["payload"], id: true,
    },
    {
      corto: "Revisar", tipo: "accion", herramienta: "validar_especificacion", titulo: "Revisa el formato (opcional)",
      thought: "Reviso que el JSON tenga el formato compacto antes de seguir.",
      action: '{"action": "validar_especificacion",\n "action_input": {"json_text": "{…}", "candidate_id": "' + ID + '"}}',
      obs: PAYLOAD,
      nota: "El prompt la marca como opcional, para usar solo si se sospecha un error de formato. gemma4 la llamó igual: el JSON vuelve sin cambios.",
      campos: ["payload"],
    },
    {
      corto: "Formato", tipo: "accion", herramienta: "evaluar_restricciones", titulo: "Comprueba el formato en código (opcional)",
      thought: "Confirmo campos y tipos válidos.",
      action: '{"action": "evaluar_restricciones",\n "action_input": {"json_text": "{…}", "candidate_id": "' + ID + '"}}',
      obs: "Restricciones evaluadas: 18/18 condiciones cumplen. Cumplimiento: 100%\nOK: La arquitectura debe tener al menos una capa.\nOK: La configuración 'cfg' debe ser un diccionario.\nOK: Capa 1: tipo 'QDense' válido.\n…",
      nota: "Son 18 chequeos de formato: 2 generales, 6 por cada capa y 4 de cfg.",
      campos: ["payload", "restricciones"],
    },
    {
      corto: "Rangos", tipo: "accion", herramienta: "verificar_limites_operativos", titulo: "Contrasta los valores con el dataset real",
      thought: "Verifico que bits y reuse factor sean realistas para una red densa.",
      action: '{"action": "verificar_limites_operativos",\n "action_input": {"json_text": "{…}", "candidate_id": "' + ID + '"}}',
      obs:
        "Grupo detectado: Dense. 5/5 campos dentro del rango real.\n" +
        "OK: weight_bits=2 (rango real de Dense, p5-p95: [2, 16])\n" +
        "OK: cfg.rf (reuse factor global)=1024 (rango real de Dense, p5-p95: [1, 4093])\n" +
        "OK: cantidad de capas con peso=2 (rango real de Dense, p5-p95: [2, 19])\n" +
        "OK: rf de la capa 1=832 (rango real de Dense, p5-p95: [1, 5376])\n" +
        "OK: rf de la capa 2=1024 (rango real de Dense, p5-p95: [1, 5376])",
      nota: "Ningún campo fuera de rango, así que la confianza no se degradará.",
      campos: ["payload", "restricciones", "limites"],
    },
    {
      corto: "Predecir", tipo: "accion", herramienta: "predecir_recursos", titulo: "El surrogate 07D predice",
      thought: "Pido la predicción real con el candidate_id.",
      action: '{"action": "predecir_recursos",\n "action_input": {"json_text": "{…}", "candidate_id": "' + ID + '"}}',
      obs:
        '{\n  "candidate_id": "' + ID + '",\n  "bram": 13.72,\n  "dsp": 0.0,\n  "ff": 20078.56,\n  "lut": 27192.13,\n' +
        '  "cycles_max": 1763.74,\n  "interval_max": 868.47,\n  "model": "Bplus_late_fusion_hybrid_loss",\n  "model_version": "07D"\n}',
      nota: "Normaliza el JSON, lo convierte en arquitectura canónica y corre el modelo en CPU. La compuerta de DSP da probabilidad ≈ 0, así que DSP = 0.",
      campos: ["payload", "restricciones", "limites", "prediccion"],
    },
    {
      corto: "Confianza", tipo: "accion", herramienta: "estimar_baseline", titulo: "Califica la confiabilidad",
      thought: "Obligatorio: el usuario necesita saber qué tan confiable es la predicción.",
      action: '{"action": "estimar_baseline",\n "action_input": {"json_text": "{…}", "prediccion_text": "{…}", "candidate_id": "' + ID + '"}}',
      obs: "Nivel de confiabilidad del grupo detectado: alta\nR² promedio del grupo: 0.9531\nSMAPE promedio del grupo: 4.4461%\nPredicción incluida en la evaluación de baseline.",
      nota: "Dense tiene R² 0.953 en test, por encima del umbral de 0.95 para «alta».",
      campos: ["payload", "restricciones", "limites", "prediccion", "baseline"],
    },
    {
      corto: "Reporte", tipo: "accion", herramienta: "generar_reporte", titulo: "Deja el reporte visual",
      thought: "Falta la tercera obligatoria: el reporte.",
      action: '{"action": "generar_reporte",\n "action_input": {"json_text": "{…}", "prediccion_text": "{…}", "candidate_id": "' + ID + '"}}',
      obs: "Reporte generado: reportes/reporte_20261107_….html",
      nota: "HTML autocontenido con la predicción, la confiabilidad y bandas de error según el RMSE del grupo.",
      campos: ["payload", "restricciones", "limites", "prediccion", "baseline", "reporte"],
    },
    {
      corto: "Respuesta", tipo: "final", titulo: "Final Answer",
      texto: "Con las tres obligatorias hechas, responde en español. Abajo, la predicción frente a la síntesis real de ese mismo diseño.",
      comparacion: [
        ["BRAM", 13.72, 16], ["DSP", 0, 0], ["FF", 20078.56, 21438], ["LUT", 27192.13, 29485],
        ["Ciclos", 1763.74, 1861], ["II", 868.47, 1024],
      ],
      cita: "He procesado la arquitectura solicitada y he generado la predicción de recursos FPGA… DSP: 0.0 (Coherente con la cuantización de 2 bits)…",
      campos: ["payload", "restricciones", "limites", "prediccion", "baseline", "reporte"],
    },
  ];

  var CAMPOS = [
    ["payload", "payload", "arquitectura JSON"],
    ["restricciones", "restricciones", "18/18 formato"],
    ["limites", "limites_operativos", "5/5 en rango"],
    ["prediccion", "prediccion", "6 salidas del 07D"],
    ["baseline", "baseline", "confiabilidad alta"],
    ["reporte", "reporte", "ruta del HTML"],
  ];

  var rec = document.getElementById("rec");
  if (rec) {
    var puntos = document.getElementById("rec-puntos");
    var caja = document.getElementById("rec-paso");
    var campos = document.getElementById("rec-campos");
    var idEl = document.getElementById("rec-id");
    var prev = document.getElementById("rec-prev");
    var next = document.getElementById("rec-next");
    var actual = 0;

    PASOS.forEach(function (p, i) {
      var li = el("li");
      var b = el("button", "rec-punto " + p.tipo);
      b.type = "button";
      b.appendChild(el("span", "rec-punto-n", String(i)));
      b.appendChild(el("span", "rec-punto-t", p.corto));
      b.setAttribute("aria-label", "Paso " + i + ": " + p.titulo);
      b.addEventListener("click", function () { ir(i); });
      li.appendChild(b);
      puntos.appendChild(li);
    });

    function bloqueCod(etiqueta, texto, clase) {
      var d = el("div", "rec-bloque " + (clase || ""));
      d.appendChild(el("span", "rec-bloque-et", etiqueta));
      var pre = el("pre"); pre.appendChild(el("code", null, texto));
      d.appendChild(pre);
      return d;
    }
    function fmt(v) {
      return v >= 100 ? Math.round(v).toLocaleString("en-US") : (Math.round(v * 100) / 100).toString();
    }

    function ir(i) {
      actual = Math.max(0, Math.min(PASOS.length - 1, i));
      var p = PASOS[actual];
      caja.textContent = "";

      var cab = el("div", "rec-cab");
      cab.appendChild(el("span", "rec-paso-n", "Paso " + actual + " de " + (PASOS.length - 1)));
      if (p.herramienta) cab.appendChild(el("code", "rec-tool", p.herramienta));
      caja.appendChild(cab);
      caja.appendChild(el("h3", "rec-titulo", p.titulo));
      if (p.texto) caja.appendChild(el("p", "rec-texto", p.texto));
      if (p.bloque) caja.appendChild(bloqueCod(p.bloque.et, p.bloque.cod, p.tipo));
      if (p.thought) caja.appendChild(bloqueCod("Thought", p.thought, "thought"));
      if (p.action) caja.appendChild(bloqueCod("Action", p.action, "action"));
      if (p.obs) caja.appendChild(bloqueCod("Observation", p.obs, "obs"));
      if (p.nota) caja.appendChild(el("p", "rec-nota", p.nota));

      if (p.comparacion) {
        var t = el("div", "rec-comp");
        var h = el("div", "rec-comp-f rec-comp-h");
        ["Salida", "Predicho (07D)", "Real (síntesis)", "Error"].forEach(function (x) { h.appendChild(el("span", null, x)); });
        t.appendChild(h);
        p.comparacion.forEach(function (c) {
          var f = el("div", "rec-comp-f");
          var smape = (c[1] === 0 && c[2] === 0) ? 0 : Math.abs(c[1] - c[2]) / ((Math.abs(c[1]) + Math.abs(c[2])) / 2) * 100;
          f.appendChild(el("span", "rec-comp-n", c[0]));
          f.appendChild(el("span", null, fmt(c[1])));
          f.appendChild(el("span", null, fmt(c[2])));
          var e = el("span", "rec-comp-e", Math.round(smape) + " %");
          e.style.setProperty("--e", Math.min(smape, 30) / 30);
          f.appendChild(e);
          t.appendChild(f);
        });
        caja.appendChild(t);
        caja.appendChild(el("p", "rec-nota", "Error = SMAPE de ese diseño. Las cifras reales son las de su síntesis en wa-hls4ml."));
        if (p.cita) caja.appendChild(bloqueCod("Respuesta del agente (extracto)", p.cita, "final"));
      }

      // Ficha del candidato
      idEl.textContent = actual >= 2 ? ID : "sin candidato";
      idEl.classList.toggle("on", actual >= 2);
      campos.textContent = "";
      var antes = actual > 0 ? PASOS[actual - 1].campos : [];
      CAMPOS.forEach(function (c) {
        var lleno = p.campos.indexOf(c[0]) >= 0;
        var nuevo = lleno && antes.indexOf(c[0]) < 0;
        var li = el("li", (lleno ? "lleno" : "") + (nuevo ? " nuevo" : ""));
        li.appendChild(el("code", null, c[1]));
        li.appendChild(el("span", null, lleno ? c[2] : "vacío"));
        campos.appendChild(li);
      });

      [].forEach.call(puntos.querySelectorAll(".rec-punto"), function (b, k) {
        b.classList.toggle("on", k === actual);
        b.classList.toggle("hecho", k < actual);
        if (k === actual) {
          b.setAttribute("aria-current", "step");
          // En pantallas angostas la barra de pasos se desplaza: centrar el paso activo sin mover la página
          var li = b.parentNode;
          puntos.scrollLeft = li.offsetLeft - puntos.clientWidth / 2 + li.offsetWidth / 2;
        } else b.removeAttribute("aria-current");
      });
      prev.disabled = actual === 0;
      next.disabled = actual === PASOS.length - 1;
    }

    prev.addEventListener("click", function () { ir(actual - 1); });
    next.addEventListener("click", function () { ir(actual + 1); });
    rec.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { ir(actual + 1); e.preventDefault(); }
      if (e.key === "ArrowLeft") { ir(actual - 1); e.preventDefault(); }
    });
    rec.tabIndex = -1;
    ir(0);
  }

  // ───────────────────────── Catálogo de herramientas ─────────────────────────
  // uso: obligatoria | condicional | opcional ; motor: llm | codigo
  var FASES = [
    { id: "anclar", titulo: "Anclar en datos reales", desc: "Antes de inventar un valor, mirar qué existe." },
    { id: "traducir", titulo: "Traducir el pedido", desc: "Del lenguaje natural al JSON compacto." },
    { id: "validar", titulo: "Validar", desc: "Formato correcto y valores realistas." },
    { id: "predecir", titulo: "Predecir y calificar", desc: "Las seis salidas y qué tan confiables son." },
    { id: "entregar", titulo: "Entregar y comparar", desc: "Reporte, estado y selección entre candidatos." },
  ];
  var TOOLS = [
    {
      n: "sugerir_ejemplo_real", fase: "anclar", uso: "condicional", motor: "codigo",
      que: "Devuelve una arquitectura real por cada subgrupo del grupo pedido, con sus rangos típicos y los recursos medidos de verdad.",
      entra: "grupo: «Dense», «Conv1D» o «Conv2D»",
      sale: "Ejemplos por subgrupo: arch, cfg, recursos reales y rangos p5–p95 de reuse factor, bits y capas",
      det: [
        "Es obligatoria como primera acción si el pedido no trae todos los parámetros.",
        "Marca grounding_consultado, lo que abre la compuerta de generar_candidato.",
        "Lee prediccion/limites_operativos.json: no usa red ni RAG.",
      ],
    },
    {
      n: "generar_candidato", fase: "traducir", uso: "obligatoria", motor: "llm", llm: "llm_arquitecto · 0.2",
      que: "Traduce el pedido a un JSON compacto {arch, cfg} y lo registra como candidato.",
      entra: "pedido_usuario (texto)",
      sale: "candidate_id (cnd_xxxxxxxx) y el JSON generado",
      det: [
        "Compuerta: si faltan bits o reuse factor global y no se consultaron ejemplos, se niega.",
        "Si el agente perdió datos al resumir, traduce el pedido original.",
        "Hasta 3 intentos de parseo; si fallan, registra un candidato inválido.",
        "Prompt con el formato exacto y reglas: no inventar capas, activaciones ni InputLayer.",
      ],
    },
    {
      n: "validar_especificacion", fase: "validar", uso: "opcional", motor: "llm", llm: "llm_revisor · 0.0",
      que: "Revisa el formato del JSON (no su contenido) y lo corrige si hace falta.",
      entra: "json_text, candidate_id (opcional)",
      sale: "El JSON corregido; actualiza el candidato",
      det: [
        "No debe agregar ni quitar capas: solo corrige nombres de claves y estructura.",
        "En el sistema mejorado del banco DSE se quita.",
      ],
    },
    {
      n: "evaluar_restricciones", fase: "validar", uso: "opcional", motor: "codigo",
      que: "Comprueba el formato en código: tipos de capa válidos, campos obligatorios y valores de cfg.",
      entra: "json_text, candidate_id (opcional)",
      sale: "cumple_ratio y la lista de chequeos OK / FALLO",
      det: [
        "14 tipos de capa válidos; strategy ∈ {Resource, Latency}; io ∈ {io_parallel, io_stream}.",
        "Pese al nombre, no aplica restricciones de recursos del usuario: eso es el sistema mejorado.",
      ],
    },
    {
      n: "verificar_limites_operativos", fase: "validar", uso: "condicional", motor: "codigo",
      que: "Comprueba si bits, reuse factor y número de capas son realistas para el grupo de la arquitectura.",
      entra: "json_text, candidate_id (opcional)",
      sale: "X/Y campos dentro del rango real y una advertencia si hay valores atípicos",
      det: [
        "Usa la unión de los rangos p5–p95 de los subgrupos, no el agregado del grupo.",
        "Obligatoria si el agente completó algún valor que el usuario no dio.",
        "Registra cuántos campos quedaron fuera de rango; estimar_baseline lo usa.",
      ],
    },
    {
      n: "predecir_recursos", fase: "predecir", uso: "obligatoria", motor: "codigo", llm: "surrogate 07D",
      que: "Predice BRAM, DSP, FF, LUT, ciclos e II con el surrogate 07D local.",
      entra: "json_text, candidate_id (opcional)",
      sale: "JSON con candidate_id y las seis salidas, listo para pasar a las siguientes herramientas",
      det: [
        "Normaliza el formato y lo convierte en CanonicalArchitecture.",
        "El modelo se carga una sola vez por proceso.",
        "Unos 0.1 s por llamada, en CPU.",
      ],
    },
    {
      n: "estimar_baseline", fase: "predecir", uso: "obligatoria", motor: "codigo",
      que: "Califica la confiabilidad con el desempeño real del 07D en test para ese grupo.",
      entra: "json_text, prediccion_text (opcional), candidate_id (opcional)",
      sale: "Nivel alta / moderada / limitada, con R² y SMAPE del grupo",
      det: [
        "Alta si R² ≥ 0.95, moderada si ≥ 0.85, limitada por debajo.",
        "Se degrada a limitada si hay algún campo fuera del rango real.",
      ],
    },
    {
      n: "generar_reporte", fase: "entregar", uso: "obligatoria", motor: "codigo",
      que: "Genera un reporte HTML autocontenido con la predicción y la confiabilidad.",
      entra: "json_text, prediccion_text, veredicto_text (opcional), candidate_id (opcional)",
      sale: "La ruta del reporte en reportes/",
      det: [
        "Si el agente no lo llama, main.py lo genera igual para el mejor candidato.",
        "Hoy abre el navegador: el ejecutor del banco DSE lo evitará.",
      ],
    },
    {
      n: "consultar_estado", fase: "entregar", uso: "opcional", motor: "codigo",
      que: "Resume los candidatos de la conversación y cuál va mejor.",
      entra: "sin argumentos",
      sale: "Cantidad de candidatos y resumen del mejor",
      det: ["Sirve cuando el agente compara varias variantes."],
    },
    {
      n: "seleccionar_mejor", fase: "entregar", uso: "opcional", motor: "codigo",
      que: "Elige el mejor entre varios candidatos.",
      entra: "criteria (texto, opcional)",
      sale: "El mejor candidato con su predicción y su confiabilidad",
      det: [
        "Orden fijo: tiene predicción, cumplimiento de formato, confiabilidad, menor suma de recursos, menor II.",
        "El criterio en texto («menor DSP») hoy se ignora: es un límite conocido.",
      ],
    },
    {
      n: "sintetizar_hls4ml", fase: "entregar", uso: "opcional", motor: "codigo",
      que: "Lanza una síntesis real si hay un backend configurado.",
      entra: "json_text, candidate_id (opcional)",
      sale: "El resultado de la síntesis, o un aviso de que no hay backend",
      det: [
        "Necesita la variable HLS4ML_SYNTHESIS_URL; hoy no está configurada.",
        "No hace falta para predecir.",
      ],
    },
  ];
  var USO = { obligatoria: "Obligatoria", condicional: "Condicional", opcional: "Opcional" };

  var cont = document.getElementById("tl-fases");
  if (cont) {
    FASES.forEach(function (f, i) {
      var tools = TOOLS.filter(function (t) { return t.fase === f.id; });
      var s = el("div", "tl-fase fase-" + f.id);
      var cab = el("div", "tl-fase-cab");
      cab.appendChild(el("span", "tl-fase-n", String(i + 1)));
      var tt = el("div");
      tt.appendChild(el("h3", null, f.titulo));
      tt.appendChild(el("p", null, f.desc));
      cab.appendChild(tt);
      s.appendChild(cab);
      var grid = el("div", "tl-grid");
      tools.forEach(function (t) {
        var c = el("article", "tl-c " + t.uso + " " + t.motor);
        c.setAttribute("data-uso", t.uso);
        c.setAttribute("data-motor", t.motor);
        var top = el("div", "tl-top");
        top.appendChild(el("code", "tl-n", t.n));
        c.appendChild(top);
        var badges = el("div", "tl-badges");
        badges.appendChild(el("span", "tl-b uso-" + t.uso, USO[t.uso]));
        badges.appendChild(el("span", "tl-b motor-" + t.motor, t.motor === "llm" ? "LLM" : "Código"));
        if (t.llm) badges.appendChild(el("span", "tl-b tl-b-sutil", t.llm));
        c.appendChild(badges);
        c.appendChild(el("p", "tl-que", t.que));
        var io = el("dl", "tl-io");
        var d1 = el("div"); d1.appendChild(el("dt", null, "Entra")); d1.appendChild(el("dd", null, t.entra)); io.appendChild(d1);
        var d2 = el("div"); d2.appendChild(el("dt", null, "Sale")); d2.appendChild(el("dd", null, t.sale)); io.appendChild(d2);
        c.appendChild(io);
        var det = el("details", "tl-det");
        det.appendChild(el("summary", null, "Detalles"));
        var ul = el("ul");
        t.det.forEach(function (x) { ul.appendChild(el("li", null, x)); });
        det.appendChild(ul);
        c.appendChild(det);
        grid.appendChild(c);
      });
      s.appendChild(grid);
      cont.appendChild(s);
    });

    var botones = document.querySelectorAll(".tl-f");
    [].forEach.call(botones, function (b) {
      var fb = b.getAttribute("data-f");
      var n = TOOLS.filter(function (t) { return fb === "todas" || t.uso === fb || t.motor === fb; }).length;
      var sp = b.querySelector("span"); if (sp) sp.textContent = n;
      b.setAttribute("aria-pressed", b.classList.contains("on") ? "true" : "false");
      b.addEventListener("click", function () {
        var f = b.getAttribute("data-f");
        [].forEach.call(botones, function (o) { o.classList.toggle("on", o === b); o.setAttribute("aria-pressed", o === b ? "true" : "false"); });
        [].forEach.call(cont.querySelectorAll(".tl-c"), function (c) {
          var ver = f === "todas" || c.getAttribute("data-uso") === f || c.getAttribute("data-motor") === f;
          c.classList.toggle("oculta", !ver);
        });
        [].forEach.call(cont.querySelectorAll(".tl-fase"), function (s) {
          s.classList.toggle("oculta", !s.querySelector(".tl-c:not(.oculta)"));
        });
      });
    });
  }

  // ───────────────────────── Índice lateral: sección activa ─────────────────────────
  var links = document.querySelectorAll(".pj-toc a");
  if (links.length && "IntersectionObserver" in window) {
    var mapa = {};
    [].forEach.call(links, function (a) { mapa[a.getAttribute("href").slice(1)] = a; });
    var visibles = {};
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { visibles[e.target.id] = e.isIntersecting; });
      var primero = null;
      [].forEach.call(document.querySelectorAll(".pj-sec"), function (s) { if (!primero && visibles[s.id]) primero = s.id; });
      if (primero) [].forEach.call(links, function (a) { a.classList.toggle("on", a === mapa[primero]); });
    }, { rootMargin: "-20% 0px -60% 0px" });
    [].forEach.call(document.querySelectorAll(".pj-sec"), function (s) { obs.observe(s); });
  }
})();
