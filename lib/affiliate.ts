export const AMAZON_TAG = "adulttricyclespro-20";

const ASIN_RE = /^(B0[A-Z0-9]{8}|\d{9}[\dX])$/;

export function isValidAsin(asin: string | undefined): asin is string {
  return !!asin && ASIN_RE.test(asin);
}

/** Only real ASINs produce a link; anything else returns undefined so no fake URL is rendered. */
export function buildAmazonUrl(asin: string | undefined): string | undefined {
  return isValidAsin(asin) ? `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}` : undefined;
}

/**
 * Applies our tag to amazon.* URLs only. Other merchants are returned unchanged:
 * an Amazon tag must never be added to a non-Amazon link.
 */
export function withAmazonTag(url: string): string {
  try {
    const u = new URL(url);
    if (!/(^|\.)amazon\.[a-z.]+$/i.test(u.hostname)) return url;
    u.searchParams.set("tag", AMAZON_TAG);
    return u.toString();
  } catch {
    return url;
  }
}

export const DISCLOSURE_SHORT =
  "As an Amazon Associate, Adult Tricycles Pro earns from qualifying purchases. This never changes the price you pay.";

export const DISCLOSURE_FULL =
  "Adult Tricycles Pro is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate we earn from qualifying purchases. Commissions do not decide which products we cover or how we describe them.";
