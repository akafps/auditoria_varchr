import prompts from "../../docs_varchr/09_prompts_varchr.md?raw";
import MarkdownViewer from "./MarkdownViewer";

export default function Prompts() {
  return <MarkdownViewer content={prompts} />;
}