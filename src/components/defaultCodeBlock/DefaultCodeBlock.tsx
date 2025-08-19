type TCodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language = "ts" }: TCodeBlockProps) {
  return (
    <pre
      className={`w-full overflow-x-auto rounded-[32px] bg-gray-900 px-[44px] py-[33px] text-left font-mono text-sm leading-relaxed text-gray-100`}
    >
      <code className={`language-${language} block text-left whitespace-pre`}>
        {code}
      </code>
    </pre>
  );
}
