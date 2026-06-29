import sqli from "../../docs_varchr/02_sqli_varchr.md?raw";
import sqliImage from "../../docs_varchr/img_varchr/sqli_varchr.png";
import MarkdownViewer from "./MarkdownViewer";

export default function InyeccionSQL() {
  return (
    <MarkdownViewer
      content={sqli}
      imageMap={{
        "./img_varchr/sqli_varchr.png": sqliImage,
        "img_varchr/sqli_varchr.png": sqliImage,
      }}
    />
  );
}