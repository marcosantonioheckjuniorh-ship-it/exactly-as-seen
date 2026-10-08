import { defineTool } from "@lovable.dev/mcp-js";

const about = {
  nature: "Protótipo / demonstração independente e não oficial, sem vínculo com bancos ou instituições.",
  payments: "Nenhuma cobrança real é feita; o checkout é apenas demonstrativo.",
  data: "As respostas dos visitantes ficam somente no navegador de cada pessoa e podem ser apagadas a qualquer momento.",
  neverAsked: "Nunca são solicitados senhas, códigos, PIN, SMS ou dados de cartão.",
};

export default defineTool({
  name: "get_demo_info",
  title: "Get demo info",
  description: "Explain what this demo is, its privacy rules and that it makes no real charges.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: "text", text: JSON.stringify(about) }], structuredContent: about }),
});
