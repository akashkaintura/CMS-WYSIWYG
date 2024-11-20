import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

const WYSIWYGEditor = ({ value, onChange }) => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const [content, setContent] = useState(value || [
        { type: "paragraph", children: [{ text: "Start editing..." }] },
    ]);

    const handleChange = (newValue) => {
        setContent(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <Slate editor={editor} value={content} onChange={handleChange}>
            <Editable placeholder="Enter some text..." />
        </Slate>
    );
};

export default WYSIWYGEditor;
