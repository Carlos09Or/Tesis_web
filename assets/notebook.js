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

  // Barra superior
  var barra = el("nav", "barra");
  var volver = el("a", null, "← Todos los notebooks"); volver.href = "index.html#ruta"; barra.appendChild(volver);
  barra.appendChild(el("span", "sp"));
  if (i > 0) { var p = el("a", null, "← Anterior"); p.href = "notebook.html?id=" + lis[i - 1].id; p.title = lis[i - 1].titulo; barra.appendChild(p); }
  barra.appendChild(el("span", "pos", (i + 1) + " / " + lis.length));
  if (i < lis.length - 1) { var s = el("a", null, "Siguiente →"); s.href = "notebook.html?id=" + lis[i + 1].id; s.title = lis[i + 1].titulo; barra.appendChild(s); }
  raiz.appendChild(barra);

  // Cabecera
  var etapa = datos.etapas.filter(function (e) { return e.id === n.etapa; })[0];
  var cab = el("header", "hero");
  cab.appendChild(el("span", "eyebrow", etapa ? etapa.titulo : ""));
  cab.appendChild(el("h1", null, n.titulo));
  var estado = el("p", "estado " + n.nivel);
  estado.appendChild(el("b", null, ETIQUETA[n.nivel] + ". "));
  estado.appendChild(document.createTextNode(n.estado));
  cab.appendChild(estado);
  cab.appendChild(el("p", "archivo", n.archivo));
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
  var fl = el("span", "io-flecha", "→"); fl.setAttribute("aria-hidden", "true");
  var e2 = el("div", "io-caja"); e2.appendChild(el("span", "io-et", "Sale")); e2.appendChild(el("p", null, n.sale));
  io.appendChild(e1); io.appendChild(fl); io.appendChild(e2);
  raiz.appendChild(io);

  raiz.appendChild(seccion("Qué hice", lista(n.hice)));
  if (n.hallazgos.length) raiz.appendChild(seccion("Qué encontré", lista(n.hallazgos)));
  raiz.appendChild(seccion("Qué verifiqué", lista(n.verificado, "plain ok")));
  if (n.avisos.length) raiz.appendChild(seccion("Avisos", lista(n.avisos, "plain aviso")));

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
