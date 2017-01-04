'use strict'

const React = require('react');
const SidebarItem = require('./SidebarItem');

class Sidebar extends React.Component {
  constructor(){
    super();
    this.selector = this.selector.bind(this)
  }
  selector(index, ev){
    ev.preventDefault();
    this.props.onSelect(index);
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;
    return (
      <ul className="sidebar">
        {files.map((item,index)=> <SidebarItem key={index} file={item} onClick={this.selector.bind(null,index)} isSelected={index === this.props.selectedFileIndex ? true : false}/>)}
      </ul>
    );
  }
}

module.exports = Sidebar;
