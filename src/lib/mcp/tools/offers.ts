import { defineTool } from "@lovable.dev/mcp-js";
import { OFFER_CONFIG, priceLabel } from "../../funnel/model";

export default defineTool({
  name: "get_offers",
  title: "Get offers",
  description: "Return the demo's configured offers, benefits and prices (prices may be not yet defined).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const offers = Object.entries(OFFER_CONFIG).map(([id, o]) => ({ id, name: o.name, price: o.price, priceLabel: priceLabel(o.price), benefits: [...o.benefits] }));
    return { content: [{ type: "text", text: JSON.stringify(offers) }], structuredContent: { offers } };
  },
});
