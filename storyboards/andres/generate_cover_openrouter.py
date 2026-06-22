#!/usr/bin/env python3
"""
Generate a title-page cover image via OpenRouter (chat-completions image API).

Drop-in alternative to the skill's generate_cover.py, which targets OpenAI's
gpt-image-1 / images endpoint. OpenRouter exposes image generation through the
chat-completions endpoint with modalities=["image","text"], so this script uses
that shape instead and writes the same cover.png the renderer inlines.

Usage:
    export OPENROUTER_API_KEY=sk-or-...
    python3 generate_cover_openrouter.py \
        --concept "<paper concept>" --palette earth --mode light \
        [--model google/gemini-2.5-flash-image] [--out cover.png] [--prompt-only]

Stdlib only (no requests/openai needed).
"""

import argparse
import base64
import json
import os
import sys
import urllib.request
from pathlib import Path

# Same prompt language as the skill's generate_cover.py so output matches style.
PALETTE_HINT = {
    "warm":     "deep reds, oranges, ember glow, magma",
    "cool":     "teal, cyan, navy, ocean blues",
    "earth":    "olive, moss, chartreuse, soft greens with warm earth tones",
    "clinical": "cool blues, cyan accents, occasional red signal",
    "tech":     "violet, electric purple, cyan, neon magenta",
}
MODE_HINT = {
    "dark":  "dark cinematic background, deep shadows, moody atmospheric lighting, low key",
    "light": "light editorial background, airy, soft diffuse light, high key with gentle contrast",
}


def build_prompt(concept: str, palette: str, mode: str) -> str:
    palette_text = PALETTE_HINT.get(palette, PALETTE_HINT["warm"])
    mode_text = MODE_HINT.get(mode, MODE_HINT["dark"])
    return (
        f"Abstract stylized data-art for the cover of a scientific paper about "
        f"{concept}. Translate the concept into generative-art visuals: flowing "
        f"particles, layered topographic contours, soft network filaments, "
        f"luminous data streams, granular noise textures. Compose in a {palette_text} "
        f"color palette. {mode_text}. 16:9 cinematic composition, depth and atmosphere, "
        f"editorial magazine cover quality, subtle film grain. No text, no logos, "
        f"no letters, no numbers, no UI elements, no human faces, no charts with axes."
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--concept", required=True)
    ap.add_argument("--palette", required=True,
                    choices=["warm", "cool", "earth", "clinical", "tech"])
    ap.add_argument("--mode", default="dark", choices=["dark", "light"])
    ap.add_argument("--model", default="google/gemini-2.5-flash-image",
                    help="Any OpenRouter model that supports image output.")
    ap.add_argument("--out", type=Path, default=Path("cover.png"))
    ap.add_argument("--prompt-only", action="store_true")
    args = ap.parse_args()

    prompt = build_prompt(args.concept, args.palette, args.mode)
    if args.prompt_only:
        print(prompt)
        return

    api_key = os.environ.get("OPENROUTER_API_KEY")
    if not api_key:
        print("ERROR: OPENROUTER_API_KEY not set.", file=sys.stderr)
        sys.exit(2)

    body = json.dumps({
        "model": args.model,
        "messages": [{"role": "user", "content": prompt}],
        "modalities": ["image", "text"],
    }).encode()

    req = urllib.request.Request(
        "https://openrouter.ai/api/v1/chat/completions",
        data=body,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
    )
    print(f"Calling OpenRouter ({args.model})...", file=sys.stderr)
    with urllib.request.urlopen(req) as resp:
        payload = json.load(resp)

    try:
        images = payload["choices"][0]["message"]["images"]
        data_url = images[0]["image_url"]["url"]
    except (KeyError, IndexError, TypeError):
        print("ERROR: no image in response. Raw payload:", file=sys.stderr)
        print(json.dumps(payload, indent=2)[:2000], file=sys.stderr)
        sys.exit(1)

    b64 = data_url.split(",", 1)[1] if "," in data_url else data_url
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_bytes(base64.b64decode(b64))
    print(str(args.out.resolve()))


if __name__ == "__main__":
    main()
