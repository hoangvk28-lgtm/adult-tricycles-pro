#!/usr/bin/env bash
# Usage: scripts/amazon-ratings.sh ASIN [ASIN...]
# Reads the public product page for internal product selection only
# (ratings are never displayed on the site).
for a in "$@"; do
  h=$(curl -s -L --compressed -A "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36" -H "Accept-Language: en-US,en;q=0.9" "https://www.amazon.com/dp/$a")
  r=$(grep -o 'id="acrPopover"[^>]*title="[^"]*' <<<"$h" | head -1 | sed 's/.*title="//')
  c=$(grep -o 'id="acrCustomerReviewText"[^>]*>[^<]*' <<<"$h" | head -1 | sed 's/.*>//')
  b=$(grep -o '[0-9.K+]* bought in past month' <<<"$h" | head -1)
  cap=$(grep -c "captcha" <<<"$h")
  echo "$a | ${r:-?} | ${c:-?} | ${b:--} | captcha:$cap"
  sleep ${RATE_SLEEP:-2}
done
