import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddArtist = () => {
  const [value, setValue] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent SSR hydration issues and StrictMode double invoke

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      className="w-[500px]"
      placeholder="Start typing here..."
    />
  );
};

export default AddArtist;
