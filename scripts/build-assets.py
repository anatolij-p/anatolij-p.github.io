#!/usr/bin/env python3
from __future__ import annotations

import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def minify_css(css: str) -> str:
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    css = re.sub(r"\s+", " ", css)
    css = re.sub(r"\s*([{}:;,>+~])\s*", r"\1", css)
    css = css.replace(";}" , "}")
    return css.strip() + "\n"


def minify_js(js: str) -> str:
    js = re.sub(r"/\*.*?\*/", "", js, flags=re.S)
    lines = []
    for line in js.splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("//"):
            continue
        lines.append(stripped)
    compact = "\n".join(lines)
    compact = re.sub(r"\n{2,}", "\n", compact)
    return compact.strip() + "\n"


def write_minified(source: str, target: str, minifier) -> None:
    source_path = ROOT / source
    target_path = ROOT / target
    target_path.write_text(minifier(source_path.read_text(encoding="utf-8")), encoding="utf-8")
    print(f"minified {source} -> {target}")


def optimize_images() -> None:
    if os.environ.get("OPTIMIZE_IMAGES") != "1":
        print("image optimization skipped: set OPTIMIZE_IMAGES=1 to enable")
        return

    try:
        from PIL import Image
    except Exception:
        print("image optimization skipped: Pillow is not installed")
        return

    for path in (ROOT / "img").glob("*.png"):
        with Image.open(path) as image:
            image.save(path, optimize=True)
            print(f"optimized {path.relative_to(ROOT)}")
    for path in (ROOT / "img").glob("*.jpg"):
        with Image.open(path) as image:
            image.save(path, optimize=True, quality=86)
            print(f"optimized {path.relative_to(ROOT)}")


def main() -> None:
    write_minified("css/style.css", "css/style.min.css", minify_css)
    write_minified("js/index.js", "js/index.min.js", minify_js)
    optimize_images()


if __name__ == "__main__":
    main()
