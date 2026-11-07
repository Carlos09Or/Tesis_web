// Portada de una sección: resumen, subsecciones con sus notebooks ("cómo se hizo") y resultados ("qué salió").
(function () {
  "use strict";
  var Shell = window.Shell;
  var cx = Shell.contexto();
  var sec = cx.sec;
  var raiz = document.getElementById("raiz");
  var NB = (window.NOTEBOOKS && window.NOTEBOOKS.notebooks) || [];
  var PAG = (window.RESULTADOS && window.RESULTADOS.paginas) || [];
  var ETIQUETA = { ok: "Verificado", aviso: "Con avisos", sinsalidas: "Sin salidas" };

  function el(tag, clase, texto) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto != null) n.textContent = texto;
    return n;
  }
  function fecha(iso) {
    var m = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
    var p = iso.split("-");
    return parseInt(p[2], 10) + " " + m[parseInt(p[1], 10) - 1] + " " + p[0];
  }

  // ── Diagramas de portada, uno por sección (datos en data/secciones.js → visual) ──
  function num(n) { return n.toLocaleString("en-US"); }
  function panel(titulo, nota) {
    var p = el("figure", "vis-panel");
    p.appendChild(el("figcaption", "vis-t", titulo));
    p._nota = nota;
    return p;
  }
  function cerrar(p) { if (p._nota) p.appendChild(el("p", "vis-nota", p._nota)); return p; }
  function barra(clase, frac, etiqueta, valor, detalle) {
    var f = el("div", "vis-fila " + (clase || ""));
    var cab = el("div", "vis-fila-cab");
    cab.appendChild(el("span", "vis-et", etiqueta));
    cab.appendChild(el("b", "vis-val", valor));
    f.appendChild(cab);
    var b = el("span", "vis-barra"); var i = el("i"); i.style.setProperty("--f", frac); b.appendChild(i); f.appendChild(b);
    if (detalle) f.appendChild(el("span", "vis-det", detalle));
    return f;
  }
  var VISUAL = {
    surrogate: function (v) {
      var w = el("div", "vis");
      var p1 = panel("De los datos crudos al dataset de entrenamiento", "Seis notebooks en cadena (01 a 06). Los conteos se reprodujeron desde los JSON crudos con la misma regla de limpieza.");
      var max = v.embudo[0][2];
      v.embudo.forEach(function (e, k) { p1.appendChild(barra(k ? "fuerte" : "", e[2] / max, e[1], e[0], k ? v.descartados : "")); });
      var tot = v.splits.reduce(function (a, s) { return a + s[1]; }, 0);
      var sp = el("div", "vis-split");
      v.splits.forEach(function (s, k) {
        var seg = el("span", "vis-seg s" + k); seg.style.flexGrow = s[1];
        seg.title = s[0] + ": " + num(s[1]);
        sp.appendChild(seg);
      });
      p1.appendChild(el("span", "vis-sub", "Particiones, sin diseños repetidos entre ellas"));
      p1.appendChild(sp);
      var ley = el("div", "vis-ley");
      v.splits.forEach(function (s, k) {
        var x = el("span", "vis-ley-i s" + k);
        x.appendChild(el("b", null, s[0]));
        x.appendChild(document.createTextNode(" " + num(s[1]) + " · " + Math.round(s[1] / tot * 100) + " %"));
        ley.appendChild(x);
      });
      p1.appendChild(ley);
      w.appendChild(cerrar(p1));

      var p2 = panel("Seis series de modelos, un elegido", "R² medio en test sobre las seis salidas; el eje empieza en 0.80.");
      var lo = 0.8, hi = 1.0;
      v.modelos.forEach(function (m) {
        p2.appendChild(barra(m[2] ? "gana" : "", (m[1] - lo) / (hi - lo), m[0], m[1].toFixed(3), m[2] ? "elegido: el mejor en validación y en test" : ""));
      });
      if (v.referencia) p2.appendChild(barra("ref", (v.referencia[1] - lo) / (hi - lo), v.referencia[0], v.referencia[1].toFixed(4), v.referencia[2]));
      w.appendChild(cerrar(p2));
      return w;
    },
    tiempos: function (v) {
      var w = el("div", "vis");
      var p1 = panel("Sintetizar frente a predecir", v.equivale);
      p1.appendChild(barra("lenta", 1, v.sintesis[1], v.sintesis[0]));
      p1.appendChild(barra("rapida", 0.004, v.surrogate[1], v.surrogate[0]));
      var g = el("div", "vis-grande");
      g.appendChild(el("b", null, v.speedup[0]));
      g.appendChild(el("span", null, v.speedup[1]));
      p1.appendChild(g);
      w.appendChild(cerrar(p1));

      var p2 = panel("Tres rondas de medición, y el modelo de costo");
      var max = v.rondas[v.rondas.length - 1][2];
      v.rondas.forEach(function (r) { p2.appendChild(barra("", r[2] / max, r[0] + " · " + r[3], r[1], "")); });
      p2.appendChild(el("span", "vis-sub", "configuraciones con tiempo real recuperado de los logs"));
      var ch = el("div", "vis-chips");
      v.modelo.forEach(function (m) { var c = el("div", "vis-chip"); c.appendChild(el("b", null, m[0])); c.appendChild(el("span", null, m[1])); ch.appendChild(c); });
      p2.appendChild(ch);
      w.appendChild(cerrar(p2));
      return w;
    },
    agente: function (v) {
      var w = el("div", "vis vis-una");
      var p = panel("Cómo responde a un pedido");
      var ol = el("ol", "vis-flujo");
      v.pasos.forEach(function (s, k) {
        var li = el("li", "vis-paso " + s[2]);
        li.appendChild(el("span", "vis-paso-n", String(k + 1)));
        li.appendChild(el("b", null, s[0]));
        li.appendChild(el("span", null, s[1]));
        ol.appendChild(li);
      });
      p.appendChild(ol);
      if (v.enlace) { var a = el("a", "vis-enlace", v.enlace[1]); a.href = v.enlace[0]; p.appendChild(a); }
      w.appendChild(p);
      return w;
    },
  };

  if (!sec) { raiz.textContent = "Sección no encontrada."; return; }
  document.title = sec.titulo + " · Resultados de la tesis";
  Shell.montar();
  raiz.setAttribute("data-sec", sec.id);

  // Cabecera
  var hero = el("header", "hero");
  hero.appendChild(el("span", "eyebrow sec-color", "Sección"));
  hero.appendChild(el("h1", null, sec.titulo));
  hero.appendChild(el("p", "lede", sec.resumen));
  var facts = el("div", "facts");
  sec.cifras.forEach(function (c) {
    var d = el("div", "fact");
    d.appendChild(el("b", "sec-color", c[0]));
    d.appendChild(el("span", null, c[1]));
    facts.appendChild(d);
  });
  hero.appendChild(facts);
  if (sec.subs.length > 1) {
    var toc = el("nav", "saltos"); toc.setAttribute("aria-label", "En esta sección");
    sec.subs.forEach(function (b) { var a = el("a", null, b.titulo); a.href = "#sub-" + b.id; toc.appendChild(a); });
    hero.appendChild(toc);
  }
  raiz.appendChild(hero);
  if (sec.visual && VISUAL[sec.visual.tipo]) raiz.appendChild(VISUAL[sec.visual.tipo](sec.visual));

  // Flujo de datos (solo la subsección que lo pide)
  var PASOS = [
    ["01", "683,171", "diseños crudos"], ["02", "619,601", "diseños limpios"], ["03", "2.46 M", "capas canónicas"],
    ["04", "4 + 17", "variables por diseño y por capa"], ["05", "73", "shards de tensores"],
    ["06", "solo train", "ajusta los escaladores"], ["07D", "R² 0.907", "modelo elegido, en test"],
  ];
  function flujo() {
    var ol = el("ol", "flujo");
    PASOS.forEach(function (p) {
      var li = el("li"); var a = el("a", "paso"); a.href = "notebook.html?id=" + p[0];
      a.appendChild(el("span", "paso-id", p[0])); a.appendChild(el("b", null, p[1])); a.appendChild(el("span", "paso-et", p[2]));
      li.appendChild(a); ol.appendChild(li);
    });
    return ol;
  }

  // Experimento planeado: estado, tabla de candidatos y decisiones abiertas
  var CLASE_PRIO = { "Obligatorio": "oblig", "Alta": "alta", "Media": "media", "Experimental": "exp" };
  function experimento(x) {
    var w = el("div", "experimento");
    var cab = el("div", "exp-cab");
    cab.appendChild(el("span", "chip plan", x.estado));
    cab.appendChild(el("p", null, x.nota));
    w.appendChild(cab);

    var caja = el("div", "tablebox");
    var t = el("table", "tabla-exp");
    var th = el("thead"), trh = el("tr");
    ["#", "Modelo", "Familia", "Prioridad"].forEach(function (h) { trh.appendChild(el("th", null, h)); });
    th.appendChild(trh); t.appendChild(th);
    var tb = el("tbody");
    x.modelos.forEach(function (m) {
      var tr = el("tr", m[3] === "Obligatorio" ? "base" : "");
      tr.appendChild(el("td", "num", m[0]));
      tr.appendChild(el("td", null, m[1]));
      tr.appendChild(el("td", null, m[2]));
      var td = el("td"); td.appendChild(el("span", "prio " + (CLASE_PRIO[m[3]] || ""), m[3])); tr.appendChild(td);
      tb.appendChild(tr);
    });
    t.appendChild(tb); caja.appendChild(t); w.appendChild(caja);

    w.appendChild(el("h3", "sub-h", "Por decidir antes de ejecutar"));
    var ul = el("ul", "plain");
    x.porDecidir.forEach(function (d) { ul.appendChild(el("li", null, d)); });
    w.appendChild(ul);
    return w;
  }

  // Tarjeta destacada que lleva a otra página del sitio
  function destacado(d) {
    var a = el("a", "destacado"); a.href = d.href;
    if (d.sec) a.style.setProperty("--dest", "var(--s-" + d.sec + ")");
    var c = el("div");
    c.appendChild(el("h3", null, d.titulo));
    c.appendChild(el("p", null, d.texto));
    if (d.cifras) {
      var dl = el("dl", "dest-cifras");
      d.cifras.forEach(function (x) { var w = el("div"); w.appendChild(el("dt", null, x[0])); w.appendChild(el("dd", null, x[1])); dl.appendChild(w); });
      c.appendChild(dl);
    }
    a.appendChild(c);
    a.appendChild(el("span", "dest-ir", "Abrir →"));
    return a;
  }

  sec.subs.forEach(function (b) {
    var nbs = NB.filter(function (n) { return n.seccion === sec.id && n.sub === b.id; });
    var pgs = PAG.filter(function (p) { return p.seccion === sec.id && p.sub === b.id; });
    var s = el("section", "sub");
    s.id = "sub-" + b.id;
    s.appendChild(el("h2", "sub-t", b.titulo));
    s.appendChild(el("p", "grupo-desc", b.desc));
    if (b.flujo) s.appendChild(flujo());

    if (b.experimento) s.appendChild(experimento(b.experimento));
    if (b.destacado) s.appendChild(destacado(b.destacado));

    if (nbs.length) {
      s.appendChild(el("h3", "sub-h", "Cómo se hizo"));
      var filas = el("div", "filas");
      nbs.forEach(function (n) {
        var a = el("a", "fila"); a.href = "notebook.html?id=" + n.id;
        a.appendChild(el("span", "fila-id", n.id));
        var c = el("div", "fila-cuerpo");
        c.appendChild(el("b", null, n.titulo.replace(/^[A-Z0-9]+ · /, "")));
        c.appendChild(el("span", null, n.hice[0]));
        a.appendChild(c);
        a.appendChild(el("span", "chip " + n.nivel, ETIQUETA[n.nivel]));
        filas.appendChild(a);
      });
      s.appendChild(filas);
    }

    if (pgs.length) {
      s.appendChild(el("h3", "sub-h", "Qué salió"));
      var rej = el("div", "cards");
      pgs.forEach(function (p) {
        var a = el("a", "card"); a.href = p.archivo;
        var top = el("div", "card-top");
        top.appendChild(el("span", "tag", p.etiqueta));
        top.appendChild(el("span", "fecha", fecha(p.fecha)));
        a.appendChild(top);
        a.appendChild(el("h3", null, p.titulo));
        a.appendChild(el("p", "resumen", p.resumen));
        var cif = el("dl", "cifras");
        p.cifras.forEach(function (c) { var w = el("div"); w.appendChild(el("dt", null, c[0])); w.appendChild(el("dd", null, c[1])); cif.appendChild(w); });
        a.appendChild(cif);
        a.appendChild(el("span", "ir", "Abrir página →"));
        rej.appendChild(a);
      });
      s.appendChild(rej);
    }
    raiz.appendChild(s);
  });

  // Qué sigue
  if (sec.sigue && sec.sigue.length) {
    var sg = el("section", "pendientes");
    sg.appendChild(el("h2", null, "Qué sigue"));
    var ul = el("ul");
    sec.sigue.forEach(function (t) { ul.appendChild(el("li", null, t)); });
    sg.appendChild(ul);
    raiz.appendChild(sg);
  }
})();
