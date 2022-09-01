import { H1Text, H2Text, Hr, NEXT_LINE } from './types';

const splitNextLines = (text: string) => {
  return text.split('\n');
};

const transpileCode = (value: string[]) => {
  const newLines = value
    .map((line) => {
      let newLine = line;
      if (line.startsWith('##')) {
        newLine = `${H2Text.START}${line.substring(2)}${H2Text.END}`;
      } else if (line.startsWith('#')) {
        newLine = `${H1Text.START}${line.substring(1)}${H1Text.END}`;
      } else if (line.startsWith('---')) {
        newLine = `${Hr.START}${line.substring(3)}`;
      }
      return `${NEXT_LINE.START}${newLine}${NEXT_LINE.END}`;
    })
    .join('');
  return newLines;
};

export { splitNextLines, transpileCode };
