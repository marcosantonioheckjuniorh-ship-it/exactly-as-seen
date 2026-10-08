import { defineTool } from "@lovable.dev/mcp-js";
import { steps, objectives, incomes, professions } from "../../funnel/model";

export default defineTool({
  name: "get_funnel_steps",
  title: "Get funnel steps",
  description: "List the demo journey's steps in order and the answer options for each question.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = { steps: [...steps], objectives: [...objectives], incomes: [...incomes], professions: [...professions] };
    return { content: [{ type: "text", text: JSON.stringify(data) }], structuredContent: data };
  },
});
