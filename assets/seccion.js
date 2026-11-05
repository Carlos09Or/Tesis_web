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

  sec.subs.forEach(function (b) {
    var nbs = NB.filter(function (n) { return n.seccion === sec.id && n.sub === b.id; });
    var pgs = PAG.filter(function (p) { return p.seccion === sec.id && p.sub === b.id; });
    var s = el("section", "sub");
    s.id = "sub-" + b.id;
    s.appendChild(el("h2", "sub-t", b.titulo));
    s.appendChild(el("p", "grupo-desc", b.desc));
    if (b.flujo) s.appendChild(flujo());

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
