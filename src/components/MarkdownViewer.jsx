import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer({ content, imageMap = {} }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        img: ({ src, alt, ...props }) => {
          const resolvedSrc = src && (imageMap[src] || imageMap[`./${src}`] || src);
          return <img src={resolvedSrc} alt={alt} {...props} />;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}