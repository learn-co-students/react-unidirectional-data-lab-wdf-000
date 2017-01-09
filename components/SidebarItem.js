'use strict'

const React = require('react');
const classNames = require('classnames');


class SidebarItem extends React.Component {


  static getTitle (file) {
    // Find first non-empty line and use as title.
    return file.split('\n').find(line => line.length);
  }

  render() {
    return (
      <li className={this.props.isSelected ? 'sidebar__item--selected' : 'sidebar__item'}>
        <a className='sidebar__link' onClick= {this.props.onClick}>
        {this.props.file ? SidebarItem.getTitle(this.props.file) : 'Untitled'}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;
