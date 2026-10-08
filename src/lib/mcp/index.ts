import { defineMcp } from "@lovable.dev/mcp-js";
import funnelSteps from "./tools/funnel-steps";
import offers from "./tools/offers";
import about from "./tools/about";

export default defineMcp({
  name: "exactly-as-seen",
  title: "Exactly As Seen",
  version: "0.1.0",
  instructions: "Public read-only tools describing an unofficial demo funnel (Brazil, BRL). It makes no real charges and holds no visitor data.",
  tools: [funnelSteps, offers, about],
});
