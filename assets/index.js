// Pinta el índice a partir de window.RESULTADOS (data/resultados.js).
(function () {
  "use strict";
  var datos = window.RESULTADOS;
  if (!datos) return;

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

  // Resumen superior
  var stats = document.getElementById("stats");
  var fechas = datos.paginas.map(function (p) { return p.fecha; }).sort();
  [
    [String(datos.paginas.length), "páginas de resultados"],
    [String(datos.grupos.length), "áreas"],
    [fecha(fechas[fechas.length - 1]), "última actualización"],
  ].forEach(function (s) {
    var d = el("div", "stat");
    d.appendChild(el("b", null, s[0]));
    d.appendChild(el("span", null, s[1]));
    stats.appendChild(d);
  });

  // Grupos y tarjetas
  var cont = document.getElementById("grupos");
  datos.grupos.forEach(function (g) {
    var sec = el("section", "grupo");
    var h = el("h2", null, g.titulo);
    h.id = "g-" + g.id;
    sec.setAttribute("aria-labelledby", h.id);
    sec.appendChild(h);
    sec.appendChild(el("p", "grupo-desc", g.descripcion));

    var rejilla = el("div", "cards");
    datos.paginas
      .filter(function (p) { return p.grupo === g.id; })
      .forEach(function (p) {
        var a = el("a", "card");
        a.href = p.archivo;

        var top = el("div", "card-top");
        top.appendChild(el("span", "tag", p.etiqueta));
        top.appendChild(el("span", "fecha", fecha(p.fecha)));
        a.appendChild(top);

        a.appendChild(el("h3", null, p.titulo));
        a.appendChild(el("p", "resumen", p.resumen));

        var cifras = el("dl", "cifras");
        p.cifras.forEach(function (c) {
          var w = el("div");
          w.appendChild(el("dt", null, c[0]));
          w.appendChild(el("dd", null, c[1]));
          cifras.appendChild(w);
        });
        a.appendChild(cifras);
        a.appendChild(el("span", "ir", "Abrir página →"));
        rejilla.appendChild(a);
      });
    sec.appendChild(rejilla);
    cont.appendChild(sec);
  });
})();
