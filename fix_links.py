#!/usr/bin/env python3
"""Fix Amazon affiliate links: replace /dp/ASIN links with search-based /s?k= links."""
import re, os, glob, subprocess, sys

def extract_product_name_from_context(content, url):
    """Find the markdown link text for a given URL."""
    # Match [link text](url)
    escaped = re.escape(url)
    m = re.search(r'\[([^\]]+)\]\(' + escaped, content)
    if m:
        return m.group(1)
    return None

def make_search_url(product_name):
    """Convert product name to Amazon search URL."""
    # Clean up the name for search
    query = product_name.lower().strip()
    # Remove special chars except alphanumeric and spaces
    query = re.sub(r'[^a-z0-9\s]', '', query)
    query = re.sub(r'\s+', '+', query.strip())
    return f"https://www.amazon.com/s?k={query}&tag=violetmama-20"

def fix_file(filepath):
    """Fix all Amazon dp links in a file. Returns count of fixes."""
    with open(filepath, 'r') as f:
        content = f.read()
    
    original = content
    fixes = 0
    
    # Pattern 1: [text](https://www.amazon.com/dp/XXXXX?tag=violetmama-20)
    # Pattern 2: [text](https://www.amazon.com/Some-Product-Name/dp/XXXXX?tag=violetmama-20)
    # Also handle amzn.to or other variants with /dp/
    
    pattern = r'\[([^\]]+)\]\((https://www\.amazon\.com/[^\)]*?/dp/[A-Z0-9]+\?tag=violetmama-20)\)'
    for m in re.finditer(pattern, content):
        link_text = m.group(1)
        old_url = m.group(2)
        new_url = make_search_url(link_text)
        content = content.replace(old_url, new_url)
        fixes += 1
        print(f"  Fixed: [{link_text}] → {new_url}")

    # Pattern for simple /dp/ without product name in path
    pattern2 = r'\[([^\]]+)\]\((https://www\.amazon\.com/dp/[A-Z0-9]+\?tag=violetmama-20)\)'
    for m in re.finditer(pattern2, content):
        link_text = m.group(1)
        old_url = m.group(2)
        new_url = make_search_url(link_text)
        content = content.replace(old_url, new_url)
        fixes += 1
        print(f"  Fixed: [{link_text}] → {new_url}")

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
    
    return fixes

def process_branch(branch_name):
    """Checkout branch, fix links, amend commit, force push."""
    local = branch_name.replace('origin/', '')
    print(f"\n{'='*60}")
    print(f"Processing: {branch_name}")
    
    # Checkout
    r = subprocess.run(['git', 'checkout', '-B', local, branch_name], capture_output=True, text=True)
    if r.returncode != 0:
        print(f"  ERROR checking out: {r.stderr}")
        return 0
    
    # Find all markdown/mdx files
    total_fixes = 0
    for pattern in ['**/*.md', '**/*.mdx']:
        for filepath in glob.glob(pattern, recursive=True):
            if 'node_modules' in filepath:
                continue
            fixes = fix_file(filepath)
            if fixes > 0:
                total_fixes += fixes
                print(f"  {filepath}: {fixes} links fixed")
    
    if total_fixes > 0:
        subprocess.run(['git', 'add', '-A'], capture_output=True)
        subprocess.run(['git', 'commit', '--amend', '--no-edit'], capture_output=True)
        r = subprocess.run(['git', 'push', 'origin', local, '--force'], capture_output=True, text=True)
        if r.returncode != 0:
            print(f"  Push error: {r.stderr}")
        else:
            print(f"  ✅ Pushed {total_fixes} fixes")
    else:
        print(f"  No /dp/ links found")
    
    return total_fixes

branches = [
    'origin/blog/art-supplies-toddlers',
    'origin/blog/batch-cooking-meals',
    'origin/blog/homeschool-rhythm',
    'origin/blog/homeschool-supplies',
    'origin/blog/natural-living-budget',
    'origin/blog/nature-books-toddlers',
    'origin/blog/snowbird-life',
    'origin/blog/sunscreen-kids',
    'origin/blog/tech-stack',
    'origin/blog/weekly-eats',
    'origin/add-affiliate-links',
]

os.chdir('/Users/julie/.openclaw/workspace/projects/content-strategy/spirited-roots2')

grand_total = 0
results = {}
for b in branches:
    count = process_branch(b)
    results[b] = count
    grand_total += count

print(f"\n{'='*60}")
print("SUMMARY")
for b, c in results.items():
    print(f"  {b}: {c} links fixed")
print(f"  TOTAL: {grand_total} links fixed")
