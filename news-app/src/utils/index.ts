export default function truncateText(text: string, maxLines: number): string {
  const lines: string[] = text.split("\n");

  if (lines.length <= maxLines) {
    return text;
  }

  const truncatedLines: string[] = lines.slice(0, maxLines);

  let truncatedText: string = truncatedLines.join("\n");

  truncatedText = truncatedText.replace(/\.\s*\.\s*\.\s*$/, '');

  const sentences: string[] = truncatedText.split(/[.!?]/);

  if (sentences.length > 1) {
    sentences.pop();
  }

  const finalText: string = sentences.join('.') + (sentences.length ? '.' : '');

  return finalText;
}
