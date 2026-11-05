// Pinta el índice a partir de window.NOTEBOOKS (data/notebooks.js) y window.RESULTADOS (data/resultados.js).
(function () {
  "use strict";
  var res = window.RESULTADOS;
  var nbs = window.NOTEBOOKS;
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

  // Resumen superior
  var stats = document.getElementById("stats");
  var items = [];
  if (nbs) {
    var verif = nbs.notebooks.filter(function (n) { return n.nivel !== "sinsalidas"; }).length;
    items.push([String(nbs.notebooks.length), "notebooks resumidos"]);
    items.push([String(verif), "con salidas verificadas"]);
  }
  if (res) {
    var fechas = res.paginas.map(function (p) { return p.fecha; }).sort();
    items.push([String(res.paginas.length), "páginas de resultados"]);
    items.push([fecha(fechas[fechas.length - 1]), "última actualización"]);
  }
  items.forEach(function (s) {
    var d = el("div", "stat");
    d.appendChild(el("b", null, s[0]));
    d.appendChild(el("span", null, s[1]));
    stats.appendChild(d);
  });

  // Flujo de datos en una vista
  var PASOS = [
    ["01", "683,171", "diseños crudos"],
    ["02", "619,601", "diseños limpios"],
    ["03", "2.46 M", "capas canónicas"],
    ["04", "4 + 17", "variables por diseño y por capa"],
    ["05", "73", "shards de tensores"],
    ["06", "solo train", "ajusta los escaladores"],
    ["07D", "R² 0.907", "modelo elegido, en test"],
  ];
  var lista = document.getElementById("flujo-lista");
  if (lista) {
    PASOS.forEach(function (p) {
      var li = el("li");
      var a = el("a", "paso");
      a.href = "notebook.html?id=" + p[0];
      a.appendChild(el("span", "paso-id", p[0]));
      a.appendChild(el("b", null, p[1]));
      a.appendChild(el("span", "paso-et", p[2]));
      li.appendChild(a);
      lista.appendChild(li);
    });
  }

  // Notebook por notebook
  var ruta = document.getElementById("ruta");
  if (nbs && ruta) {
    var cab = el("h2", "titulo-seccion", "Notebook por notebook");
    ruta.appendChild(cab);
    nbs.etapas.forEach(function (e) {
      var sec = el("section", "grupo");
      sec.appendChild(el("h3", "etapa-t", e.titulo));
      sec.appendChild(el("p", "grupo-desc", e.descripcion));
      var filas = el("div", "filas");
      nbs.notebooks
        .filter(function (n) { return n.etapa === e.id; })
        .forEach(function (n) {
          var a = el("a", "fila");
          a.href = "notebook.html?id=" + n.id;
          a.appendChild(el("span", "fila-id", n.id));
          var c = el("div", "fila-cuerpo");
          c.appendChild(el("b", null, n.titulo.replace(/^[A-Z0-9]+ · /, "")));
          c.appendChild(el("span", null, n.hice[0]));
          a.appendChild(c);
          a.appendChild(el("span", "chip " + n.nivel, ETIQUETA[n.nivel]));
          filas.appendChild(a);
        });
      sec.appendChild(filas);
      ruta.appendChild(sec);
    });
  }

  // Resultados: grupos y tarjetas
  var cont = document.getElementById("grupos");
  if (res && cont) {
    res.grupos.forEach(function (g) {
      var sec = el("section", "grupo");
      var h = el("h3", "etapa-t", g.titulo);
      h.id = "g-" + g.id;
      sec.setAttribute("aria-labelledby", h.id);
      sec.appendChild(h);
      sec.appendChild(el("p", "grupo-desc", g.descripcion));

      var rejilla = el("div", "cards");
      res.paginas
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
  }
})();
