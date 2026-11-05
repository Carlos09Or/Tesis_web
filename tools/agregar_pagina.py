#!/usr/bin/env python3
"""Añade a cada página de paginas/ la barra compartida (menú de secciones, migas y anterior/siguiente).

Uso:   python3 tools/agregar_pagina.py
Es idempotente: las páginas que ya tienen la barra no se tocan.
Antes de correrlo, la página nueva debe estar en paginas/ y tener su entrada en data/resultados.js.
"""
import re
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
MARCA = "<!-- tr-nav -->"
INYECCION = (
    MARCA
    + '<script src="../data/secciones.js"></script>'
    + '<script src="../data/notebooks.js"></script>'
    + '<script src="../data/resultados.js"></script>'
    + '<script src="../assets/shell.js"></script>'
    + '<script src="../assets/nav.js"></script>'
)
# Bloque inyectado anteriormente (marcador + scripts seguidos), para reemplazarlo si cambia la barra
BLOQUE_RE = re.compile(re.escape(MARCA) + r"(?:<script src=\"[^\"]*\"></script>)+")


def main() -> int:
    paginas = sorted((RAIZ / "paginas").glob("*.html"))
    if not paginas:
        print("No hay páginas en paginas/")
        return 1

    registradas = set(re.findall(r'archivo:\s*"paginas/([^"]+)"', (RAIZ / "data" / "resultados.js").read_text("utf-8")))
    for p in paginas:
        if p.name not in registradas:
            print(f"AVISO: {p.name} no está en data/resultados.js (no aparecerá en el índice)")

    for p in paginas:
        html = p.read_text("utf-8")
        if INYECCION in html:
            print(f"ya tiene barra: {p.name}")
            continue
        if MARCA in html:
            p.write_text(BLOQUE_RE.sub(lambda m: INYECCION, html, count=1), "utf-8")
            print(f"barra actualizada: {p.name}")
            continue
        nuevo, n = re.subn(r"<body[^>]*>", lambda m: m.group(0) + INYECCION, html, count=1, flags=re.I)
        if n != 1:
            print(f"ERROR: {p.name} no tiene <body>")
            return 1
        p.write_text(nuevo, "utf-8")
        print(f"barra añadida: {p.name}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
