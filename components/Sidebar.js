'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
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
        { files ? files.map((file, i) => <SidebarItem key={i} file={file} isSelected={i === selectedFileIndex} onClick={this.handleClick.bind(null, i)}/>) : null }
      </ul>
    );
  }
}

module.exports = Sidebar;
