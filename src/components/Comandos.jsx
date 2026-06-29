import comandos from "../../docs_varchr/04_comandos_varchr.md?raw";
import comandosImage from "../../docs_varchr/img_varchr/comandos_varchr.png";
import MarkdownViewer from "./MarkdownViewer";

export default function Comandos() {
  return (
    <MarkdownViewer
      content={comandos}
      imageMap={{
        "./img_varchr/comandos_varchr.png": comandosImage,
        "img_varchr/comandos_varchr.png": comandosImage,
      }}
    />
  );
}