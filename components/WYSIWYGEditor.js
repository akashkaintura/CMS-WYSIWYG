import React, { useMemo, useState } from 'react';
import { createEditor, Node } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

const WYSIWYGEditor = ({ value, onChange }) => {
    const editor = useMemo(() => withReact(createEditor()), []);

    const defaultValue = [
        {
            type: 'paragraph',
            children: [{ text: 'Start editing...' }],
        },
    ];

    const [content, setContent] = useState(() =>
        Node.isNodeList(value) ? value : defaultValue
    );
    console.log('Editor initial value:', value || defaultValue);


    const handleChange = (newValue) => {

        setContent(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <Slate editor={editor} value={content} onChange={handleChange}>
            <Editable placeholder="Type your content here..." />
        </Slate>
    );
};

export default WYSIWYGEditor;
