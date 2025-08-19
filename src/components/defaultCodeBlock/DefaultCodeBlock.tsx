type TCodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language = "ts" }: TCodeBlockProps) {
  return (
    <pre
      className={`w-full overflow-x-auto rounded-[32px] bg-gray-900 px-[30.8px] py-[23.1px] text-left font-mono text-sm leading-relaxed`}
    >
      <code
        className={`language-${language} text-bg block text-left whitespace-pre`}
      >
        {code}
      </code>
    </pre>
  );
}
