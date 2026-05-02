#!/usr/bin/env python3
"""
One-shot migration: move the <div class="telemetry">...</div> block
from before <nav class="bar"> to right after the first </header> tag.

Run from project root.
"""
import re
import os
import sys

FILES = [
    'site/index.html',
    'site/dr-katona.html',
    'site/hair-transplant.html',
    'site/hair-restoration.html',
    'site/advanced-aesthetics.html',
    'site/book.html',
    'site/tools/index.html',
    'site/tools/hair-assessment.html',
    'site/tools/cost-calculator.html',
    'site/tools/treatment-comparison.html',
    'site/blog/index.html',
    'site/blog/hair-loss-norwood-ludwig.html',
    'site/blog/fue-vs-fut-explained.html',
    'site/blog/dermatology-matters.html',
    'site/blog/recovery-week-by-week.html',
]

# Match the telemetry block + any HTML comment + the opening of nav
# Captures: (1) telemetry block, (2) optional comment + nav opening
PATTERN = re.compile(
    r'(<div class="telemetry">.*?</div>)\s*(?:<!--[^>]*-->\s*)?(<nav class="bar">)',
    re.DOTALL,
)

# We want to put it after the first </header>. There may be a comment <!-- HERO -->
# or similar above the header. We just locate the literal `</header>` end-tag.
HEADER_END = '</header>'

def process(filepath):
    if not os.path.isfile(filepath):
        print(f"  SKIP (not found): {filepath}")
        return False
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    m = PATTERN.search(content)
    if not m:
        print(f"  SKIP (no telemetry block): {filepath}")
        return False

    telemetry_block = m.group(1)
    nav_opening = m.group(2)

    # Remove the telemetry from its current spot, leaving the nav opening in place
    # (also strip any leading comment immediately preceding the removed telemetry,
    # since we have a nice-looking comment we placed there originally)
    new_content = PATTERN.sub(nav_opening, content, count=1)

    # Strip any lingering "<!-- TELEMETRY -->" comment that may be left orphaned
    new_content = re.sub(r'\n?\s*<!--\s*TELEMETRY\s*-->\s*\n', '\n', new_content)

    # Insert the telemetry right after the FIRST </header> that we encounter
    idx = new_content.find(HEADER_END)
    if idx == -1:
        print(f"  SKIP (no </header> found): {filepath}")
        return False
    insert_at = idx + len(HEADER_END)
    new_content = new_content[:insert_at] + '\n\n' + telemetry_block + '\n' + new_content[insert_at:]

    if new_content == content:
        print(f"  SKIP (no change): {filepath}")
        return False

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"  OK: {filepath}")
    return True

def main():
    project_root = sys.argv[1] if len(sys.argv) > 1 else '.'
    os.chdir(project_root)
    print(f"Working dir: {os.getcwd()}")
    print()
    moved = 0
    for f in FILES:
        if process(f):
            moved += 1
    print()
    print(f"Done. Moved telemetry in {moved} / {len(FILES)} files.")

if __name__ == '__main__':
    main()
