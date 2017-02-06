'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, ev) {
    ev.preventDefault();
    this.props.onSelect(index);

  }

  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
        {files.map((file, i) => (
          <SidebarItem key={i} isSelected={selectedFileIndex === i} onClick={this.handleClick.bind(null, i)} file={file}/>
        ))}
      </ul>
    );
  }
}

module.exports = Sidebar;
