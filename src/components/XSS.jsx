import xss from "../../docs_varchr/03_xss_varchr.md?raw";
import xssImage from "../../docs_varchr/img_varchr/xss_varchr.png";
import MarkdownViewer from "./MarkdownViewer";

export default function XSS() {
  return (
    <MarkdownViewer
      content={xss}
      imageMap={{
        "./img_varchr/xss_varchr.png": xssImage,
        "img_varchr/xss_varchr.png": xssImage,
      }}
    />
  );
}