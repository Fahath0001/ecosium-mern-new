// SimpleRichTextEditor.jsx
import React, { useMemo, useState, useCallback } from 'react'
import { Slate, Editable, withReact, useSlate } from 'slate-react'
import { createEditor, Transforms, Text, Element as SlateElement } from 'slate'
import { withHistory } from 'slate-history'

// Initial value always defined correctly
const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'Type here...' }],
  },
]

// Toolbar button component
const ToolbarButton = ({ format, icon, toggleFormat, isActive }) => {
  return (
    <button
      onMouseDown={event => {
        event.preventDefault()
        toggleFormat(format)
      }}
      style={{
        fontWeight: isActive ? 'bold' : 'normal',
        marginRight: '8px',
        cursor: 'pointer',
      }}
    >
      {icon}
    </button>
  )
}

const SimpleRichTextEditor = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  const [value, setValue] = useState(initialValue)

  // Check if mark is active (bold/italic)
  const isMarkActive = (editor, format) => {
    const marks = Text.marks(editor)
    return marks ? marks[format] === true : false
  }

  // Toggle bold or italic marks
  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)
    if (isActive) {
      editor.removeMark(format)
    } else {
      editor.addMark(format, true)
    }
  }

  // Check if block type is active (for bullets)
  const isBlockActive = (editor, format) => {
    const [match] = Array.from(
      SlateElement.nodes(editor, {
        match: n => !Text.isText(n) && n.type === format,
      })
    )
    return !!match
  }

  // Toggle block type (bullets or paragraph)
  const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format)
    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : format },
      { match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n) }
    )
  }

  // Render custom element types: paragraph or bulleted-list or list-item
  const renderElement = useCallback(props => {
    const { element, attributes, children } = props
    switch (element.type) {
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      default:
        return <p {...attributes}>{children}</p>
    }
  }, [])

  // Render leaves (for bold/italic)
  const renderLeaf = useCallback(props => {
    let { children, leaf, attributes } = props
    if (leaf.bold) {
      children = <strong>{children}</strong>
    }
    if (leaf.italic) {
      children = <em>{children}</em>
    }
    return <span {...attributes}>{children}</span>
  }, [])

  return (
    <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
      <Toolbar editor={editor} toggleMark={toggleMark} toggleBlock={toggleBlock} />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Type here..."
        spellCheck
        autoFocus
      />
    </Slate>
  )
}

// Toolbar component with buttons
const Toolbar = ({ editor, toggleMark, toggleBlock }) => {
  // Check if bold, italic, bullet list active
  const isBoldActive = Text.marks(editor)?.bold === true
  const isItalicActive = Text.marks(editor)?.italic === true

  // For block, check the currently selected blocks
  const [match] = Array.from(
    SlateElement.nodes(editor, {
      match: n => !Text.isText(n) && n.type === 'bulleted-list',
    })
  )
  const isBulletActive = !!match

  return (
    <div style={{ marginBottom: '10px' }}>
      <ToolbarButton
        format="bold"
        icon="B"
        toggleFormat={format => toggleMark(editor, format)}
        isActive={isBoldActive}
      />
      <ToolbarButton
        format="italic"
        icon="I"
        toggleFormat={format => toggleMark(editor, format)}
        isActive={isItalicActive}
      />
      <ToolbarButton
        format="bulleted-list"
        icon="•"
        toggleFormat={format => toggleBlock(editor, format)}
        isActive={isBulletActive}
      />
    </div>
  )
}

export default SimpleRichTextEditor
