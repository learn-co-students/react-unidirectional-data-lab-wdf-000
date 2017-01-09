'use strict'

const React = require('react');
const classNames = require('classnames');

// Find first non-empty line and use as title.
const getTitle = file =>
  file.split('\n').find(line => line.length);

const SidebarItem = ({ file = '', isSelected, onClick }) => (
  <li className={classNames('sidebar__item', {
    'sidebar__item--selected': isSelected
  })}>
    <a href='#' onClick={onClick} className='sidebar__link'>
      {getTitle(file) || <em>Untitled</em>}
    </a>
  </li>
);
//fun part*** how in the world is this being rendered
//we have a constant called SidebarItem which is equal to a hash with a file equaling to a empty string by default, a isSelected arguments, and an onclick argument which are its props. this is ES6 syntax, remember. This is also a dumb component (pure component) so we do not need to extend to the react component class and inheret unnessisay functions every time we render this component. we create a li tag which has a classname that is set to a conditional function that is theis isSelected is true then the classname is sidebar__item--slected or its sidebar__item. we have a a href and a onclick function that is equal to the onClick prop and the isSelected prop, and the file is the file passed or by default is an empty string.
//the value of the file sidebar item is euqal to either the getTitle function which should return the entire file value or untitled in the <em> tag<em>
//ok lets say we click the a tag, this points to the onclick callback function which is on the sidebar component => go to the sidebar component
module.exports = SidebarItem;
