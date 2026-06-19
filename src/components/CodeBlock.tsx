import { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

type Token = {
  text: string;
  className?: string;
};

const CSS_VALUE_PATTERNS: { regex: RegExp; className: string }[] = [
  { regex: /^\/\*.*?\*\//, className: 'code-token-comment' },
  { regex: /^\/\/.*/, className: 'code-token-comment' },
  { regex: /^(["'`])(?:\\.|(?!\1).)*\1/, className: 'code-token-string' },
  { regex: /^#[0-9a-fA-F]{3,8}\b/, className: 'code-token-color' },
  { regex: /^-?\d+(?:\.\d+)?(?:px|rem|em|%|deg|vh|vw|s|ms)?\b/, className: 'code-token-number' },
  { regex: /^(linear-gradient|radial-gradient|conic-gradient|url|rgba?|hsla?|calc|var|min|max|clamp)\b(?=\()/, className: 'code-token-function' },
  { regex: /^[a-z-]+(?=\s*:)/, className: 'code-token-property' },
  { regex: /^(flex-start|flex-end|space-between|space-around|space-evenly|inline-flex|no-repeat|wrap-reverse|row-reverse|column-reverse|flex|grid|block|none|wrap|nowrap|row|column|center|stretch|auto|cover|contain|repeat|fixed|scroll|transparent|white|black|solid|dashed)\b/, className: 'code-token-keyword' },
  { regex: /^[{}:;(),]/, className: 'code-token-punctuation' },
];

const HTML_PATTERNS: { regex: RegExp; className: string }[] = [
  { regex: /^<!--.*?-->/, className: 'code-token-comment' },
  { regex: /^<\/?[a-zA-Z][\w-]*/, className: 'code-token-tag' },
  { regex: /^[a-zA-Z_:][\w:.-]*(?==)/, className: 'code-token-attr' },
  { regex: /^(["']).*?\1/, className: 'code-token-string' },
  { regex: /^[<>/=]/, className: 'code-token-punctuation' },
];

function tokenizeWithPatterns(line: string, patterns: { regex: RegExp; className: string }[]) {
  const tokens: Token[] = [];
  let remaining = line;

  while (remaining.length > 0) {
    const match = patterns
      .map((pattern) => ({ ...pattern, match: remaining.match(pattern.regex) }))
      .find(({ match }) => match?.[0]);

    if (match?.match?.[0]) {
      tokens.push({ text: match.match[0], className: match.className });
      remaining = remaining.slice(match.match[0].length);
      continue;
    }

    tokens.push({ text: remaining[0] });
    remaining = remaining.slice(1);
  }

  return tokens;
}

function tokenizeCssLine(line: string) {
  const propertyMatch = line.match(/^(\s*)([a-z-]+)(\s*:)/);
  if (propertyMatch) {
    const [, indent, property, separator] = propertyMatch;
    const rest = line.slice(propertyMatch[0].length);

    return [
      { text: indent },
      { text: property, className: 'code-token-property' },
      { text: separator, className: 'code-token-punctuation' },
      ...tokenizeWithPatterns(rest, CSS_VALUE_PATTERNS),
    ];
  }

  const braceIndex = line.indexOf('{');
  if (braceIndex > -1) {
    const selector = line.slice(0, braceIndex);
    const rest = line.slice(braceIndex);

    return [
      { text: selector, className: 'code-token-selector' },
      ...tokenizeWithPatterns(rest, CSS_VALUE_PATTERNS),
    ];
  }

  return tokenizeWithPatterns(line, CSS_VALUE_PATTERNS);
}

function detectLanguage(code: string, fallback: string) {
  const trimmed = code.trim();
  if (trimmed.startsWith('<') || trimmed.includes('</')) {
    return 'html';
  }

  return fallback;
}

export function CodeBlock({ code, language = 'css' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const detectedLanguage = detectLanguage(code, language);
  const lines = code.split('\n');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-block-shell group">
      <div className="code-block-header">
        <div className="flex items-center gap-2">
          <span className="code-window-dot bg-[#EF4444]" />
          <span className="code-window-dot bg-[#F59E0B]" />
          <span className="code-window-dot bg-[#10B981]" />
        </div>
        <span className="code-language-label">{detectedLanguage}</span>
        <button
          onClick={handleCopy}
          className="code-copy-button"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check size={16} style={{ color: 'var(--success)' }} />
          ) : (
            <Clipboard size={16} />
          )}
        </button>
      </div>
      {copied && (
        <div className="code-copy-toast">
          Copied!
        </div>
      )}
      <pre className={`code-block language-${detectedLanguage}`}>
        <code className="font-mono">
          {lines.map((line, lineIndex) => {
            const tokens = detectedLanguage === 'html'
              ? tokenizeWithPatterns(line, HTML_PATTERNS)
              : tokenizeCssLine(line);

            return (
              <span className="code-line" key={`${lineIndex}-${line}`}>
                <span className="code-line-number">{lineIndex + 1}</span>
                <span className="code-line-content">
                  {tokens.map((token, tokenIndex) => (
                    <span className={token.className} key={`${lineIndex}-${tokenIndex}`}>
                      {token.text}
                    </span>
                  ))}
                </span>
              </span>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
