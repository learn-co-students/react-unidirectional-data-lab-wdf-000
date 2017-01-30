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
    const { files, selectedFileIndex, onSelect } = this.props;

    return (
      <ul className="sidebar">
        {files.map((file, index)=>{
          return <SidebarItem key={index} file={file} onClick={this.handleClick.bind(null, index)} isSelected={selectedFileIndex === index}/>
        })}
      </ul>
    );
  }
}

module.exports = Sidebar;
