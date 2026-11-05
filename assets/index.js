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

  var con = document.getElementById("conexion");
  if (con) con.textContent = "Cómo se conectan: los datos alimentan al surrogate; el surrogate le da al modelo de tiempos sus predicciones y al agente su herramienta de predicción.";
})();
