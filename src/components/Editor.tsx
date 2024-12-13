'use client'

import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import styles from './Editor.module.scss'
import { Button } from './ui/button';
import { SelectBlock } from './SelectBlock';

const CodeEditor: React.FC = () => {
    const [code, setCode] = useState<string>('')
    const [language, setLanguage] = useState<string>('javascript')
    const [theme, setTheme] = useState<string>('vs-dark')

    const [output, setOutput] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleEditorChange = (value: string | undefined) => {
        if (value !== undefined) {
            setCode(value);
        }
    };

    const handleRunCode = async () => {
        setOutput(null);
        setError(null);

        const response = await fetch('/api/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ language, code }),
        });

        console.log(response);

        const data = await response.json();

        if (data.status === 'success') {
            setOutput(data.output);
        } else {
            setError(data.error);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.mainBlock}>
                <SelectBlock language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />

                <div className={styles.editor}>
                    <div className={styles.editorBlock}>
                        <Editor
                            language={language}
                            value={code}
                            onChange={handleEditorChange}
                            theme={theme}
                            options={{
                                selectOnLineNumbers: true,
                                automaticLayout: true,
                            }}
                        />
                    </div>

                    <div className={styles.editorOutput}>
                        {output && <pre>Вывод: {output}</pre>}
                        {error && <pre style={{ color: 'red' }}>Ошибка: {error}</pre>}
                    </div>
                </div>

                <Button className={styles.submitButton} onClick={handleRunCode}>
                    Запустить код
                </Button>
            </div>
        </div>
    );
};

export default CodeEditor;