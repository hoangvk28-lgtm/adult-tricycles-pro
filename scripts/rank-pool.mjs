// Usage: node scripts/rank-pool.mjs queries.json out.json
// queries.json: {key: [q1, q2]}. Runs each query with several sort orders, then
// fetches Best Sellers Rank for every ASIN and sorts the pool by it (lower = sells more).
// The Creators API does not return star ratings/review counts for this account,
// so sales rank is the popularity signal we rely on.
import { readFileSync, writeFileSync } from "fs";
for (const l of readFileSync(".env.local", "utf8").split("\n")) { const i = l.indexOf("="); if (i > 0 && !process.env[l.slice(0, i)]) process.env[l.slice(0, i)] = l.slice(i + 1).trim(); }
const M = "www.amazon.com", TAG = process.env.AMAZON_PAAPI_PARTNER_TAG;
const tok = (await (await fetch("https://api.amazon.com/auth/o2/token", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ grant_type: "client_credentials", client_id: process.env.AMAZON_PAAPI_ACCESS_KEY, client_secret: process.env.AMAZON_PAAPI_SECRET_KEY, scope: "creatorsapi::default" }) })).json()).access_token;
if (!tok) { console.error("token failed"); process.exit(1); }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function call(op, body) {
  for (let t = 0; t < 3; t++) {
    const r = await fetch(`https://creatorsapi.amazon/catalog/v1/${op}`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok}`, "x-marketplace": M }, body: JSON.stringify({ marketplace: M, partnerTag: TAG, ...body }) });
    const d = await r.json(); if (r.ok) return d; await sleep(1500);
  }
  return {};
}
const RES = ["images.primary.large", "itemInfo.title", "itemInfo.features", "itemInfo.byLineInfo", "offersV2.listings.price", "browseNodeInfo.websiteSalesRank", "browseNodeInfo.browseNodes.salesRank"];
const Q = JSON.parse(readFileSync(process.argv[2], "utf8")), out = {};
for (const [k, qs] of Object.entries(Q)) {
  const asins = new Set();
  for (const q of qs) for (const sortBy of (process.env.SORTS || "Relevance,AvgCustomerReviews,Featured").split(",")) {
    const d = await call("searchItems", { keywords: q, sortBy, itemCount: 10, resources: ["itemInfo.title"] });
    for (const i of d.searchResult?.items || []) asins.add(i.asin);
    await sleep(1100);
  }
  const items = [];
  const list = [...asins];
  for (let i = 0; i < list.length; i += 10) {
    const d = await call("getItems", { itemIds: list.slice(i, i + 10), resources: RES });
    for (const it of d.itemsResult?.items || []) {
      const nodes = it.browseNodeInfo?.browseNodes || [];
      const node = nodes.find((n) => n.salesRank);
      items.push({
        asin: it.asin, title: it.itemInfo?.title?.displayValue, brand: it.itemInfo?.byLineInfo?.brand?.displayValue,
        price: it.offersV2?.listings?.[0]?.price?.money?.amount ?? null, img: it.images?.primary?.large?.url,
        salesRank: it.browseNodeInfo?.websiteSalesRank?.salesRank ?? null,
        categoryRank: node ? `#${node.salesRank} in ${node.displayName}` : null,
        features: it.itemInfo?.features?.displayValues || [],
      });
    }
    await sleep(1100);
  }
  items.sort((a, b) => (a.salesRank ?? 1e9) - (b.salesRank ?? 1e9));
  out[k] = items;
  console.error(k, items.length);
}
writeFileSync(process.argv[3], JSON.stringify(out, null, 1));
