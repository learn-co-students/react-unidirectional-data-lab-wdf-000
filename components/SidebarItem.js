'use strict'

const React = require('react');
const classNames = require('classnames');
  const getTitle = file => {
    // Find first non-empty line and use as title.
   return file.split('\n').find(line => line.length);

  }

class SidebarItem extends React.Component {

  render() {
    const {file, isSelected, onClick} = this.props;
    return (
      <li className={isSelected ? 'sidebar__item--selected': 'sidebar__item'}>
        <a className='sidebar__link' onClick={onClick}>
          {file ? getTitle(file) : <em>Untitled</em>}
        </a>
      </li>
    );
  }
}

module.exports = SidebarItem;


