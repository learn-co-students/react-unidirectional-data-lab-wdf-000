'use strict';

const React = require('react');
const { shallow, mount } = require('enzyme');
const sinon = require('sinon');

const Sidebar = require('../components/Sidebar');

describe('<Sidebar />', function() {
  context('when files prop is an empty array', function() {
    it('should render empty list', function() {
      const wrapper = shallow(<Sidebar files={[]} />);
      expect(wrapper.children().length).toBe(0);
    });
  });

  it('should render ul', function() {
    const wrapper = shallow(<Sidebar files={[]} />);
    expect(wrapper.type()).toBe('ul');
  });

  it('should have class "sidebar', function() {
    const wrapper = shallow(<Sidebar files={[]} />);
    expect(wrapper.hasClass('sidebar')).toBe(true);
  });

  it('should render one SidebarItem per file', function() {
    const files = ['first file', 'second file'];
    const wrapper = shallow(<Sidebar files={files} />);
    expect(wrapper.children().length).toBe(2);
    expect(wrapper.childAt(0).prop('file')).toBe(files[0]);
    expect(wrapper.childAt(1).prop('file')).toBe(files[1]);
  });

  it('should pass isSelected to selected <SidebarItem />', function() {
    const files = ['first file', 'second file', 'third file'];
    const wrapper = shallow(<Sidebar files={files} selectedFileIndex={1} />);
    expect(wrapper.childAt(0).prop('isSelected')).toBe(false);
    expect(wrapper.childAt(1).prop('isSelected')).toBe(true);
    expect(wrapper.childAt(2).prop('isSelected')).toBe(false);
  });

  context('when clicking a <SidebarItem />', function() {
    it('should preventDefault and call props.onSelect', function() {
      const onSelect = sinon.spy();
      //onSelect is a fucntion we are spying on
      const wrapper = shallow(<Sidebar files={['first file']} onSelect={onSelect} />);
      //wrapper is equal to the child component sidebar
      const onClick = wrapper.childAt(0).prop('onClick');
      //const onClick is equal to the wrapper first child at index 0 and its prop onclick
      const ev = {
        preventDefault: sinon.spy(),
      };

      //const ev is a hash that prevent deafult to the function sinon test creates
      onClick(ev);
      sinon.assert.calledOnce(ev.preventDefault);
      //the function onSelect sinon created calls ev.key of preventDefault once
      sinon.assert.calledOnce(onSelect);
      //calls on onSelect prop once and passes a index of the child
      sinon.assert.calledWith(onSelect, 0);
    });
  });
});
