// Inicio: una tarjeta grande por sección.
(function () {
  "use strict";
  if (window.Shell) window.Shell.montar();
  var SEC = window.SECCIONES || [];
  var NB = (window.NOTEBOOKS && window.NOTEBOOKS.notebooks) || [];
  var PAG = (window.RESULTADOS && window.RESULTADOS.paginas) || [];

  function el(tag, clase, texto) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto != null) n.textContent = texto;
    return n;
  }
  function plural(n, uno, varios) { return n + " " + (n === 1 ? uno : varios); }

  var cont = document.getElementById("secciones");
  SEC.forEach(function (s) {
    var nn = NB.filter(function (x) { return x.seccion === s.id; }).length;
    var np = PAG.filter(function (x) { return x.seccion === s.id; }).length;

    var a = el("a", "sec-card");
    a.href = s.archivo;
    a.setAttribute("data-sec", s.id);

    a.appendChild(el("span", "sec-eyebrow", [nn ? plural(nn, "notebook", "notebooks") : "", np ? plural(np, "resultado", "resultados") : ""].filter(Boolean).join(" · ")));
    a.appendChild(el("h2", null, s.titulo));
    a.appendChild(el("p", "sec-resumen", s.resumen));

    var cif = el("dl", "sec-cifras");
    s.cifras.forEach(function (c) {
      var w = el("div");
      w.appendChild(el("dt", null, c[0]));
      w.appendChild(el("dd", null, c[1]));
      cif.appendChild(w);
    });
    a.appendChild(cif);

    var subs = el("ul", "sec-subs");
    s.subs.forEach(function (b) { subs.appendChild(el("li", null, b.titulo)); });
    a.appendChild(subs);
    a.appendChild(el("span", "ir", "Entrar a " + s.titulo + " →"));
    cont.appendChild(a);
  });

  // Ruta: datos → surrogate → tiempos → agente
  var RUTA = [
    { sec: "surrogate", href: "surrogate.html#sub-datos", k: "Datos", t: "wa-hls4ml", c: "619,601", d: "diseños sintetizados, limpios" },
    { sec: "surrogate", href: "surrogate.html#sub-modelos", k: "Surrogate", t: "07D", c: "R² 0.907", d: "seis salidas, en test" },
    { sec: "tiempos", href: "tiempos.html", k: "Costo", t: "Modelo de tiempos", c: "91.8 %", d: "del tiempo predicho dentro de ×2" },
    { sec: "proyecto", href: "proyecto.html", k: "Uso", t: "Agente ReAct", c: "11", d: "herramientas, una es el 07D" },
  ];
  var ruta = document.getElementById("ruta4");
  if (ruta) RUTA.forEach(function (r, i) {
    var li = el("li");
    var a = el("a", "r4"); a.href = r.href; a.setAttribute("data-sec", r.sec);
    a.appendChild(el("span", "r4-k", (i + 1) + " · " + r.k));
    a.appendChild(el("b", "r4-t", r.t));
    a.appendChild(el("span", "r4-c", r.c));
    a.appendChild(el("span", "r4-d", r.d));
    li.appendChild(a); ruta.appendChild(li);
  });

  // Lo más reciente: páginas de resultados por fecha
  var MES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  function fecha(iso) { var p = iso.split("-"); return parseInt(p[2], 10) + " " + MES[parseInt(p[1], 10) - 1] + " " + p[0]; }
  var ult = document.getElementById("ultimos");
  if (ult) {
    var items = PAG.slice().sort(function (a, b) { return a.fecha < b.fecha ? 1 : a.fecha > b.fecha ? -1 : 0; }).slice(0, 6);
    items.forEach(function (p) {
      var s = SEC.filter(function (x) { return x.id === p.seccion; })[0];
      var li = el("li");
      var a = el("a", "ult"); a.href = p.archivo; a.setAttribute("data-sec", p.seccion);
      a.appendChild(el("time", "ult-f", fecha(p.fecha)));
      var c = el("span", "ult-c");
      c.appendChild(el("b", null, p.titulo));
      c.appendChild(el("span", null, p.resumen));
      a.appendChild(c);
      a.appendChild(el("span", "ult-s", s ? s.corto : ""));
      li.appendChild(a); ult.appendChild(li);
    });
  }
})();
