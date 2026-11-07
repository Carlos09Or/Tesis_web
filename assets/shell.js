// Barra superior compartida: menú de secciones, migas de pan y anterior/siguiente.
// La usan el inicio, las portadas de sección, notebook.html y cada página de resultados.
// Lee window.SECCIONES, window.NOTEBOOKS y window.RESULTADOS; no hace fetch, así que abre también con doble clic.
(function () {
  "use strict";
  var SEC = window.SECCIONES || [];
  var NB = (window.NOTEBOOKS && window.NOTEBOOKS.notebooks) || [];
  var PAG = (window.RESULTADOS && window.RESULTADOS.paginas) || [];
  var CLARO = { proyecto: "#6E93FF", surrogate: "#3CC9A0", tiempos: "#F0A73A", agente: "#A78BFA" };
  var PROYECTO = { archivo: "proyecto.html", titulo: "El proyecto" };

  function el(tag, clase, texto) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto != null) n.textContent = texto;
    return n;
  }
  function seccionPor(id) { return SEC.filter(function (s) { return s.id === id; })[0]; }
  function subPor(sec, id) { return sec ? sec.subs.filter(function (b) { return b.id === id; })[0] : null; }

  // Elementos de una sección en el orden de sus subsecciones
  function ordenados(lista, sec) {
    var out = [];
    sec.subs.forEach(function (b) {
      lista.forEach(function (x) { if (x.seccion === sec.id && x.sub === b.id) out.push(x); });
    });
    return out;
  }

  var enPaginas = location.pathname.indexOf("/paginas/") >= 0;
  var base = enPaginas ? "../" : "";
  var archivo = decodeURIComponent(location.pathname.split("/").pop() || "");

  function contexto() {
    var q = new URLSearchParams(location.search);
    var sec = null, sub = null, titulo = "", prev = null, next = null, tipo = "inicio";

    var porArchivo = SEC.filter(function (s) { return s.archivo === archivo; })[0];
    if (porArchivo) { tipo = "seccion"; sec = porArchivo; titulo = sec.titulo; }
    else if (archivo === PROYECTO.archivo) { tipo = "proyecto"; titulo = PROYECTO.titulo; }
    else if (archivo === "notebook.html") {
      tipo = "notebook";
      var n = NB.filter(function (x) { return x.id === q.get("id"); })[0];
      if (n) {
        sec = seccionPor(n.seccion); sub = subPor(sec, n.sub); titulo = n.titulo;
        var seq = ordenados(NB, sec), i = seq.indexOf(n);
        if (i > 0) prev = { href: base + "notebook.html?id=" + seq[i - 1].id, titulo: seq[i - 1].titulo };
        if (i < seq.length - 1) next = { href: base + "notebook.html?id=" + seq[i + 1].id, titulo: seq[i + 1].titulo };
      }
    } else if (enPaginas) {
      tipo = "pagina";
      var p = PAG.filter(function (x) { return x.archivo === "paginas/" + archivo; })[0];
      if (p) {
        sec = seccionPor(p.seccion); sub = subPor(sec, p.sub); titulo = p.titulo;
        var sq = ordenados(PAG, sec), k = sq.indexOf(p);
        if (k > 0) prev = { href: base + sq[k - 1].archivo, titulo: sq[k - 1].titulo };
        if (k < sq.length - 1) next = { href: base + sq[k + 1].archivo, titulo: sq[k + 1].titulo };
      }
    }
    return { tipo: tipo, sec: sec, sub: sub, titulo: titulo, prev: prev, next: next };
  }

  var CSS =
    "#tr-nav{box-sizing:border-box;margin:8px;border-radius:10px;position:relative;z-index:30;background:#17202E;color:#E6EAF1;" +
    "font:500 13px/1.3 ui-monospace,Menlo,Consolas,monospace;overflow:hidden}" +
    "#tr-nav a{color:inherit;text-decoration:none}" +
    "#tr-nav .tr-top{display:flex;align-items:stretch;flex-wrap:wrap;gap:4px 18px;padding:0 14px}" +
    "#tr-nav .tr-brand{display:flex;align-items:center;gap:8px;padding:11px 0;font-weight:700;letter-spacing:.02em}" +
    "#tr-nav .tr-brand:before{content:'';width:12px;height:12px;border-radius:3px;background:linear-gradient(135deg,#6E93FF,#3CC9A0 50%,#F0A73A)}" +
    "#tr-nav .tr-menu{display:flex;flex-wrap:wrap;gap:0 4px}" +
    "#tr-nav .tr-menu a{display:flex;align-items:center;padding:11px 10px 8px;border-bottom:3px solid transparent;color:#9AA6B7}" +
    "#tr-nav .tr-menu a:hover{color:#fff}" +
    "#tr-nav .tr-menu a.on{color:#fff;border-bottom-color:var(--c)}" +
    "#tr-nav .tr-sub{display:flex;align-items:center;flex-wrap:wrap;gap:6px 14px;padding:8px 14px 10px;border-top:1px solid #2A3444;color:#9AA6B7}" +
    "#tr-nav .tr-migas{display:flex;flex-wrap:wrap;align-items:center;gap:2px 6px;list-style:none;margin:0;padding:0;min-width:0}" +
    "#tr-nav .tr-migas li{display:flex;align-items:center;gap:6px;min-width:0}" +
    "#tr-nav .tr-migas li+li:before{content:'\\203A';color:#5E6B7E}" +
    "#tr-nav .tr-migas a:hover{color:#fff;text-decoration:underline}" +
    "#tr-nav .tr-migas li:last-child{color:#E6EAF1}" +
    "#tr-nav .tr-sp{flex:1}" +
    "#tr-nav .tr-pn{display:flex;gap:14px;white-space:nowrap}" +
    "#tr-nav .tr-pn a:hover{color:#fff;text-decoration:underline}";

  function montar() {
    if (document.getElementById("tr-nav")) return;
    var cx = contexto();
    if (!document.getElementById("tr-shell-css")) {
      var st = el("style"); st.id = "tr-shell-css"; st.textContent = CSS; document.head.appendChild(st);
    }
    var nav = el("header"); nav.id = "tr-nav";
    nav.setAttribute("role", "banner");

    var top = el("div", "tr-top");
    var brand = el("a", "tr-brand", "Tesis · hls4ml"); brand.href = base + "index.html"; top.appendChild(brand);
    var menu = el("nav", "tr-menu"); menu.setAttribute("aria-label", "Secciones");
    var pj = el("a", cx.tipo === "proyecto" ? "on" : "", PROYECTO.titulo);
    pj.href = base + PROYECTO.archivo;
    pj.style.setProperty("--c", CLARO.proyecto);
    if (cx.tipo === "proyecto") pj.setAttribute("aria-current", "page");
    menu.appendChild(pj);
    SEC.forEach(function (s) {
      var a = el("a", cx.sec && cx.sec.id === s.id ? "on" : "", s.titulo);
      a.href = base + s.archivo;
      a.style.setProperty("--c", CLARO[s.id] || "#6E93FF");
      if (a.className === "on") a.setAttribute("aria-current", "page");
      menu.appendChild(a);
    });
    top.appendChild(menu);
    nav.appendChild(top);

    // Migas y anterior/siguiente (no en el inicio)
    if (cx.tipo !== "inicio") {
      var sub = el("div", "tr-sub");
      var ol = el("ol", "tr-migas");
      function miga(texto, href) {
        var li = el("li");
        if (href) { var a = el("a", null, texto); a.href = href; li.appendChild(a); } else li.textContent = texto;
        ol.appendChild(li);
      }
      miga("Inicio", base + "index.html");
      if (cx.sec) {
        miga(cx.sec.titulo, cx.tipo === "seccion" ? null : base + cx.sec.archivo);
        if (cx.sub && cx.tipo !== "seccion") miga(cx.sub.titulo, base + cx.sec.archivo + "#sub-" + cx.sub.id);
        if (cx.tipo !== "seccion") miga(cx.titulo);
      } else if (cx.tipo === "proyecto") miga(cx.titulo);
      sub.appendChild(ol);
      sub.appendChild(el("span", "tr-sp"));
      if (cx.prev || cx.next) {
        var pn = el("span", "tr-pn");
        if (cx.prev) { var pa = el("a", null, "← Anterior"); pa.href = cx.prev.href; pa.title = cx.prev.titulo; pn.appendChild(pa); }
        if (cx.next) { var na = el("a", null, "Siguiente →"); na.href = cx.next.href; na.title = cx.next.titulo; pn.appendChild(na); }
        sub.appendChild(pn);
      }
      nav.appendChild(sub);
    }
    document.body.insertBefore(nav, document.body.firstChild);
    if (cx.titulo && cx.tipo === "notebook") document.title = cx.titulo + " · Resultados de la tesis";
    if (enPaginas) arreglarMovil();
  }

  // Páginas de resultados: se conservan tal como se publicaron, pero en el teléfono algunas desbordaban
  // a lo ancho (rutas largas en <code> y tablas sin contenedor con scroll). Se corrige sin tocar su HTML.
  function arreglarMovil() {
    if (!document.getElementById("tr-movil-css")) {
      var st = el("style"); st.id = "tr-movil-css";
      st.textContent =
        "code{overflow-wrap:anywhere}" +
        ".tr-tabla-scroll{overflow-x:auto;max-width:100%;-webkit-overflow-scrolling:touch}" +
        "@media (max-width:700px){p,li,dd,footer,figcaption{overflow-wrap:break-word}.two>*{min-width:0}}";
      document.head.appendChild(st);
    }
    function envolver() {
      [].forEach.call(document.querySelectorAll("table"), function (t) {
        for (var a = t.parentElement; a && a !== document.body; a = a.parentElement) {
          var ox = getComputedStyle(a).overflowX;
          if (ox === "auto" || ox === "scroll" || ox === "hidden") return;
        }
        var w = el("div", "tr-tabla-scroll");
        t.parentNode.insertBefore(w, t);
        w.appendChild(t);
      });
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", envolver);
    else envolver();
  }

  window.Shell = { montar: montar, contexto: contexto, seccion: seccionPor, ordenados: ordenados };
})();
