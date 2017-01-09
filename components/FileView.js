'use strict'

const React = require('react');
const Toolbar = require('./Toolbar');

const FileView = ({
  file,
  onChange,
  onAdd,
  onRemove
}) => (
  <div className="file-view">
    <Toolbar
      onAdd={onAdd}
      onRemove={onRemove}
    />
    <textarea
      className="file-view__text"
      placeholder="Type some text here..."
      value={file}
      onChange={onChange}
    />
  </div>
);

//our fileview component renders its file, onChange, onAdd, on Remove props in the arguments to the constant.
//we render a <div> with a className of file-view and a toolbar compoennt which we pass in a onAdd and onRemove prop.
//We render a textarea which has a placeholder and a value of the actual file prop and when we change the content in the textarea,
//when we change the text in the textarea we will trigger the onChange function which is its prop
module.exports = FileView;
