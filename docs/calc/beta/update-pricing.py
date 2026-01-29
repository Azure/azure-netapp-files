#!/usr/bin/env python3
"""Fetch Azure NetApp Files pricing data and save to pricing-data.json."""

import json
import ssl
import urllib.request
import urllib.parse
from datetime import datetime, timezone

OUTPUT_FILE = "pricing-data.js"
AZURE_PRICING_URL = "https://prices.azure.com/api/retail/prices"
FILTER = "serviceName eq 'Azure NetApp Files' and type eq 'Consumption'"

# SSL context (skip verification for compatibility)
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE


def fetch_all_pricing_data():
    """Fetch all pages of pricing data from Azure API."""
    all_items = []
    filter_param = urllib.parse.quote(FILTER)
    url = f"{AZURE_PRICING_URL}?$filter={filter_param}"

    page = 1
    while url:
        print(f"Fetching page {page}...")
        req = urllib.request.Request(url)
        req.add_header("User-Agent", "Mozilla/5.0")

        with urllib.request.urlopen(req, timeout=60, context=ssl_context) as response:
            data = json.loads(response.read().decode("utf-8"))

        items = data.get("Items", [])
        all_items.extend(items)
        print(f"  Retrieved {len(items)} items (total: {len(all_items)})")

        url = data.get("NextPageLink")
        page += 1

    return all_items


def main():
    print(f"Fetching Azure NetApp Files pricing data...")
    start = datetime.now(timezone.utc)

    items = fetch_all_pricing_data()

    output = {"Items": items, "Count": len(items)}

    with open(OUTPUT_FILE, "w") as f:
        f.write("var pricingData = ")
        json.dump(output, f)
        f.write(";")

    elapsed = (datetime.now(timezone.utc) - start).total_seconds()
    print(f"Done! Saved {len(items)} items to {OUTPUT_FILE} in {elapsed:.1f}s")


if __name__ == "__main__":
    main()
