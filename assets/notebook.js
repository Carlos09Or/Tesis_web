// Página de un notebook: se pinta desde window.NOTEBOOKS según ?id=...
(function () {
  "use strict";
  var datos = window.NOTEBOOKS;
  var raiz = document.getElementById("raiz");
  var ETIQUETA = { ok: "Verificado", aviso: "Verificado con avisos", sinsalidas: "Sin salidas guardadas" };

  function el(tag, clase, texto) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto != null) n.textContent = texto;
    return n;
  }
  function lista(items, clase) {
    var ul = el("ul", clase || "plain");
    items.forEach(function (t) { ul.appendChild(el("li", null, t)); });
    return ul;
  }
  function seccion(titulo, hijo) {
    var s = el("section", "bloque");
    s.appendChild(el("h2", null, titulo));
    s.appendChild(hijo);
    return s;
  }

  if (!datos) { raiz.textContent = "No se pudo cargar data/notebooks.js"; return; }
  var id = new URLSearchParams(location.search).get("id");
  var lis = datos.notebooks;
  var i = -1;
  lis.forEach(function (n, k) { if (n.id === id) i = k; });
  if (i < 0) {
    raiz.textContent = "";
    raiz.appendChild(el("p", null, "No encontré ese notebook. "));
    var a0 = el("a", null, "Volver al índice"); a0.href = "index.html"; raiz.appendChild(a0);
    return;
  }
  var n = lis[i];
  document.title = n.titulo + " · Resultados de la tesis";
  raiz.textContent = "";

  window.Shell.montar();
  raiz.setAttribute("data-sec", n.seccion);

  // Cabecera
  var sec = window.Shell.seccion(n.seccion);
  var sub = sec ? sec.subs.filter(function (b) { return b.id === n.sub; })[0] : null;
  var cab = el("header", "hero");
  cab.appendChild(el("span", "eyebrow sec-color", sec ? sec.titulo + (sub ? " \u00b7 " + sub.titulo : "") : ""));
  cab.appendChild(el("h1", null, n.titulo));
  var estado = el("p", "estado " + n.nivel);
  estado.appendChild(el("b", null, ETIQUETA[n.nivel] + ". "));
  estado.appendChild(document.createTextNode(n.estado));
  cab.appendChild(estado);
  cab.appendChild(el("p", "archivo", n.archivo));

  // Posición del notebook dentro de su subsección (los demás, enlazados)
  var hermanos = lis.filter(function (x) { return x.seccion === n.seccion && x.sub === n.sub; });
  if (hermanos.length > 1) {
    var pos = hermanos.indexOf(n);
    var ruta = el("nav", "nb-ruta");
    ruta.setAttribute("aria-label", "Notebooks de " + (sub ? sub.titulo : "esta subsección"));
    ruta.appendChild(el("span", "nb-ruta-t", "Notebook " + (pos + 1) + " de " + hermanos.length + (sub ? " en " + sub.titulo : "")));
    var ol = el("ol");
    hermanos.forEach(function (h, k) {
      var li = el("li");
      var a = el("a", k === pos ? "on" : (k < pos ? "antes" : ""), h.id);
      a.href = "notebook.html?id=" + encodeURIComponent(h.id);
      a.title = h.titulo;
      if (k === pos) a.setAttribute("aria-current", "page");
      li.appendChild(a); ol.appendChild(li);
    });
    ruta.appendChild(ol);
    cab.appendChild(ruta);
  }
  raiz.appendChild(cab);

  // Cifras
  var cif = el("div", "facts");
  n.cifras.forEach(function (c) {
    var d = el("div", "fact");
    d.appendChild(el("b", null, c[0]));
    d.appendChild(el("span", null, c[1]));
    cif.appendChild(d);
  });
  raiz.appendChild(cif);

  // Entra / sale
  var io = el("div", "io");
  var e1 = el("div", "io-caja"); e1.appendChild(el("span", "io-et", "Entra")); e1.appendChild(el("p", null, n.entra));
  var fl = el("span", "io-flecha"); fl.setAttribute("aria-hidden", "true");
  fl.appendChild(el("span", "io-nb", n.id));
  var e2 = el("div", "io-caja"); e2.appendChild(el("span", "io-et", "Sale")); e2.appendChild(el("p", null, n.sale));
  io.appendChild(e1); io.appendChild(fl); io.appendChild(e2);
  raiz.appendChild(io);

  function bloque(titulo, items, clase, claseLista) {
    var s = seccion(titulo, lista(items, claseLista));
    s.className = "bloque " + clase;
    return s;
  }
  raiz.appendChild(bloque("Qué hice", n.hice, "b-hice"));
  if (n.hallazgos.length) raiz.appendChild(bloque("Qué encontré", n.hallazgos, "b-hallazgo"));
  raiz.appendChild(bloque("Qué verifiqué", n.verificado, "b-ok", "plain ok"));
  if (n.avisos.length) raiz.appendChild(bloque("Avisos", n.avisos, "b-aviso", "plain aviso"));

  // Páginas relacionadas
  var rel = (n.relacionados || []).map(function (arch) {
    var pag = (window.RESULTADOS ? window.RESULTADOS.paginas : []).filter(function (p) { return p.archivo === arch; })[0];
    return pag ? { href: arch, titulo: pag.titulo } : null;
  }).filter(Boolean);
  if (rel.length) {
    var ul = el("ul", "enlaces");
    rel.forEach(function (r) {
      var li = el("li"); var a = el("a", null, r.titulo); a.href = r.href; li.appendChild(a); ul.appendChild(li);
    });
    raiz.appendChild(seccion("Resultados relacionados", ul));
  }
})();
