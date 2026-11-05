// Barra superior que se añade a cada página de resultados: volver al índice + anterior/siguiente.
// Funciona sin servidor (file://) porque lee window.RESULTADOS, no hace fetch.
(function () {
  "use strict";
  var datos = window.RESULTADOS;
  var actual = decodeURIComponent(location.pathname.split("/").pop() || "");
  var paginas = datos ? datos.paginas : [];
  var i = -1;
  paginas.forEach(function (p, k) {
    if (p.archivo.split("/").pop() === actual) i = k;
  });

  var css =
    "#tr-nav{box-sizing:border-box;display:flex;align-items:center;gap:12px;flex-wrap:wrap;" +
    "margin:8px;border-radius:8px;position:relative;z-index:30;" +
    "padding:9px 14px;background:#17202E;color:#E6EAF1;" +
    "font:500 13px/1.3 ui-monospace,Menlo,Consolas,monospace}" +
    "#tr-nav a{color:#E6EAF1;text-decoration:none;white-space:nowrap}" +
    "#tr-nav a:hover{text-decoration:underline}" +
    "#tr-nav .tr-sp{flex:1}" +
    "#tr-nav .tr-dim{color:#9AA6B7}";
  var estilo = document.createElement("style");
  estilo.textContent = css;
  document.head.appendChild(estilo);

  function enlace(p, flecha) {
    var a = document.createElement("a");
    a.href = p.archivo.split("/").pop();
    a.title = p.titulo;
    a.textContent = flecha === "<" ? "← Anterior" : "Siguiente →";
    return a;
  }

  var barra = document.createElement("nav");
  barra.id = "tr-nav";
  barra.setAttribute("aria-label", "Navegación de resultados");

  var inicio = document.createElement("a");
  inicio.href = "../index.html";
  inicio.textContent = "← Resultados de la tesis";
  barra.appendChild(inicio);

  var sp = document.createElement("span");
  sp.className = "tr-sp";
  barra.appendChild(sp);

  if (i > 0) barra.appendChild(enlace(paginas[i - 1], "<"));
  if (i >= 0) {
    var pos = document.createElement("span");
    pos.className = "tr-dim";
    pos.textContent = i + 1 + " / " + paginas.length;
    barra.appendChild(pos);
  }
  if (i >= 0 && i < paginas.length - 1) barra.appendChild(enlace(paginas[i + 1], ">"));

  document.body.insertBefore(barra, document.body.firstChild);
})();
