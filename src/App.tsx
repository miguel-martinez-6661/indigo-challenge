import React, { useMemo, useState } from 'react';
import { splitNextLines, transpileCode } from './helpers';
import styles from './styles';

const App = () => {
  const [textareaValue, setTextareaValue] = useState<string>('# Markdown syntax guide');

  const transpiledText: string = useMemo(() => {
    return transpileCode(splitNextLines(textareaValue));
  }, [textareaValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Markdown Previewer</h2>
      <div style={styles.subContainer}>
        <div style={styles.codeContainer}>
          <textarea style={styles.textarea} onChange={handleChange} value={textareaValue} />
        </div>
        <div style={styles.outputContainer} dangerouslySetInnerHTML={{ __html: transpiledText }} />
      </div>
    </div>
  );
};

export default App;
