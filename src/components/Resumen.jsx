import React from "react";
import resumen from "../../docs_varchr/01_resumen_varchr.md?raw";
import MarkdownViewer from "./MarkdownViewer";

export default function Resumen() {
  return <MarkdownViewer content={resumen} />;
}