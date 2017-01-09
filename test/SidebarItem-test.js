'use strict';

const React = require('react');
const { shallow, mount } = require('enzyme');
const sinon = require('sinon');

const SidebarItem = require('../components/SidebarItem');

describe('<SidebarItem />', function() {
  it('should render li', function() {
    const wrapper = shallow(<SidebarItem />);
    expect(wrapper.type()).toBe('li');
  });

  it('should have "sidebar__item" class', function() {
    const wrapper = shallow(<SidebarItem />);
    expect(wrapper.hasClass('sidebar__item')).toBe(true);
  });

  it('should contain a.sidebar__link', function() {
    const wrapper = shallow(<SidebarItem />);
    expect(wrapper.childAt(0).type()).toBe('a');
    expect(wrapper.childAt(0).hasClass('sidebar__link')).toBe(true);
  });

  context('when isSelected prop is true', function() {
    it('should have "sidebar__item--selected" class', function() {
      const wrapper = shallow(<SidebarItem isSelected />);
      expect(wrapper.hasClass('sidebar__item--selected')).toBe(true);
    });
  });

  context('when isSelected prop is false', function() {
    it('should not have "sidebar__item--selected" class', function() {
      const wrapper = shallow(<SidebarItem />);
      expect(wrapper.hasClass('sidebar__item--selected')).toBe(false);
    });
  });

  context('when li.sidebar__item > a.sidebar__link is clicked', function() {
    it('should call onClick prop handler', function() {
      const onClick = sinon.spy();
      //const is equal to spy function created
      const wrapper = shallow(<SidebarItem onClick={onClick} />);
      //const wrapper is equal to the sidebar child componenet
      wrapper.find('a.sidebar__link').simulate('click');
      //we find the a link wit the class of sidebar link and stimulate a click event.
      sinon.assert.calledOnce(onClick);
      //onlick is called with the onClick prop of the parent
    });
  });

  it('should show first line of file in li.sidebar__item > a.sidebar__link', function() {
    const file = 'first line\nsecond line';
    //const file is equal to a string more like a textbox text with line splits
    const wrapper = shallow(<SidebarItem file={file} />);
    //wrapper is pointing to the sidebaritem child component.
    expect(wrapper.find('a.sidebar__link').text()).toBe('first line');
    //the test espects to find the innerhtml of the a link to b the first line on the file object.
  });

  context('when file is empty', function() {
    it('should show untitled placeholder in li.sidebar__item > a.sidebar__link > em', function() {
      const wrapper = shallow(<SidebarItem file={''} />);
      expect(wrapper.find('a.sidebar__link > em').text()).toBe('Untitled');
    });
  });
});
