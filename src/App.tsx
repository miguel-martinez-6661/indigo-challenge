import React, { useMemo, useState } from 'react';
import { splitNextLines, transpileCode } from './helpers';

const styles = {
  container: {
    padding: '20px',
    height: '90rem',
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    height: '80%',
  },
  codeContainer: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    borderShadow: '5px 5px 5px #ccc',
    backgroundColor: '#ffffff',
    width: '45%',
  },
  outputContainer: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
    backgroundColor: '#ffffff',
    borderShadow: '5px 5px 5px #ccc',
    width: '45%',
  },
  textarea: {
    border: 'none',
    outline: 'none',
    width: '98%',
    height: '95%',
    maxWidth: '98%',
    overlay: 'none',
    borderRadius: '5px',
  },
};

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
