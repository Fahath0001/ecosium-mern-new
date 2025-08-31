import React, { useCallback, useMemo, useState } from 'react'
import { Slate, Editable, withReact } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'

// Fallback initial value
const fallbackInitialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'Type here...' }],
  },
]

const RichTextEditor = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  // Always initialize with fallbackInitialValue
  const [value, setValue] = useState(fallbackInitialValue)

  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  const handleChange = newValue => {
    // Only update state with a valid array of elements
    if (Array.isArray(newValue) && newValue.length > 0) {
      setValue(newValue)
    }
  }

  return (
    <Slate editor={editor} value={value} onChange={handleChange}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text..."
        spellCheck
        autoFocus
      />
    </Slate>
  )
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'code':
      return (
        <pre {...attributes}>
          <code>{children}</code>
        </pre>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf.italic) {
    children = <em>{children}</em>
  }
  return <span {...attributes}>{children}</span>
}

export default RichTextEditor
