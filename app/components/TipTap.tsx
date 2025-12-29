"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

interface TipTapProps {
    content: string;
    onChange: (content: string) => void;
}

const TipTap = ({ content, onChange }: TipTapProps) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content,
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl max-w-none focus:outline-none min-h-[300px] bg-black border border-neutral-800 rounded-lg p-4 text-white',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    // Update content if it changes externally (e.g. initial load)
    useEffect(() => {
        if (editor && content && editor.getHTML() !== content) {
            // Avoid re-setting on every keystroke if managing state higher up
            // Use a check to prevent cursor jumping or only set if initial empty
            if (editor.isEmpty) {
                editor.commands.setContent(content);
            }
        }
    }, [content, editor]);

    if (!editor) {
        return null;
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2 border border-neutral-800 bg-neutral-900 p-2 rounded-lg">
                <button
                    onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBold().run(); }}
                    className={`px-3 py-1 rounded text-sm font-bold ${editor.isActive('bold') ? 'bg-white text-black' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
                >
                    Bold
                </button>
                <button
                    onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleItalic().run(); }}
                    className={`px-3 py-1 rounded text-sm italic ${editor.isActive('italic') ? 'bg-white text-black' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
                >
                    Italic
                </button>
                <button
                    onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 2 }).run(); }}
                    className={`px-3 py-1 rounded text-sm font-bold ${editor.isActive('heading', { level: 2 }) ? 'bg-white text-black' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
                >
                    H2
                </button>
                <button
                    onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleHeading({ level: 3 }).run(); }}
                    className={`px-3 py-1 rounded text-sm font-bold ${editor.isActive('heading', { level: 3 }) ? 'bg-white text-black' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
                >
                    H3
                </button>
                <button
                    onClick={(e) => { e.preventDefault(); editor.chain().focus().toggleBulletList().run(); }}
                    className={`px-3 py-1 rounded text-sm ${editor.isActive('bulletList') ? 'bg-white text-black' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}
                >
                    List
                </button>
            </div>
            <EditorContent editor={editor} />
        </div>
    );
};

export default TipTap;
