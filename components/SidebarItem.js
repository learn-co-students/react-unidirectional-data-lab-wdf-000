'use strict'

const React = require('react');
const classNames = require('classnames');

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    this.getTitle = this.getTitle.bind(this)
  }
  getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }
  render() {
    // const classes = classNames({
    //   'sidebar__item': true
    // })
    return (
      <li className={classNames({'sidebar__item': true, 'sidebar__item--selected': this.props.isSelected})} >
        <a className="sidebar__link" onClick={this.props.onClick}>{ this.props.file ? this.getTitle(this.props.file) : <em>Untitled</em>}</a>
      </li>
    );
  }
}

module.exports = SidebarItem;
