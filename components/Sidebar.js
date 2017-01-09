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
    this.props.onSelect(index)
  }

  render() {
    const { files, selectedFileIndex } = this.props;

    return (
      <ul className="sidebar">
        {
          files.map((file, i) => (
            <SidebarItem
              isSelected={selectedFileIndex === i}
              key={i}
              file={file}
              onClick={this.handleClick.bind(null, i)}
            />
          ))
        }

      </ul>
    );
  }
}

//in the sidebar component we set up constants for its files and selectedFileIndex props. as long as the props are the same as the component name
//in our return function which gets calledo nly once evenery time an update to state or prop takes place, we iterate over all of the files props we have and for each file in the array of files we create a sidebar componenet which takes in a prop of isselected which is equal to a true of false depending on the slectedFileIndex is equal to the index of the file. the key is equal to the index and fild is equal to the actual file string we are iterating over with an onClick event function which vokes the handleClick fucntion which passes an argument of the index as the paraperter. when the handleClick function is evoked because of the clickevent, then we prevent the default route and call ok the onSelect prop with a parater of the index.
//=> go over to the onSelect prop

module.exports = Sidebar;
