// Usage: node scripts/search-pool.mjs queries.json out.json  (queries.json: {key:[q1,q2]})
import { readFileSync, writeFileSync } from "fs";
for (const l of readFileSync(".env.local","utf8").split("\n")) { const i=l.indexOf("="); if(i>0&&!process.env[l.slice(0,i)]) process.env[l.slice(0,i)]=l.slice(i+1).trim(); }
const M="www.amazon.com", TAG=process.env.AMAZON_PAAPI_PARTNER_TAG;
const tok=(await (await fetch("https://api.amazon.com/auth/o2/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({grant_type:"client_credentials",client_id:process.env.AMAZON_PAAPI_ACCESS_KEY,client_secret:process.env.AMAZON_PAAPI_SECRET_KEY,scope:"creatorsapi::default"})})).json()).access_token;
if(!tok){console.error("token failed");process.exit(1)}
const Q=JSON.parse(readFileSync(process.argv[2],"utf8")), out={};
for (const [k,qs] of Object.entries(Q)) { out[k]=[]; const seen=new Set();
  for (const q of qs) { let d;
    for (let t=0;t<3;t++){ const r=await fetch("https://creatorsapi.amazon/catalog/v1/searchItems",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${tok}`,"x-marketplace":M},body:JSON.stringify({keywords:q,marketplace:M,partnerTag:TAG,itemCount:10,resources:["images.primary.large","itemInfo.title","itemInfo.features","itemInfo.byLineInfo","offersV2.listings.price","customerReviews.starRating","customerReviews.count"]})}); d=await r.json(); if(r.ok) break; await new Promise(s=>setTimeout(s,1500)); }
    for (const i of (d.searchResult?.items||d.itemsResult?.items||[])) { const a=i.asin||i.itemId; if(seen.has(a)) continue; seen.add(a);
      out[k].push({asin:a,url:i.detailPageURL,title:i.itemInfo?.title?.displayValue,brand:i.itemInfo?.byLineInfo?.brand?.displayValue,price:i.offersV2?.listings?.[0]?.price?.money?.amount??null,img:i.images?.primary?.large?.url,rating:i.customerReviews?.starRating?.value??null,reviews:i.customerReviews?.count??null,features:i.itemInfo?.features?.displayValues||[]}); }
    await new Promise(s=>setTimeout(s,1100)); }
  console.error(k,out[k].length); }
writeFileSync(process.argv[3],JSON.stringify(out,null,1));
