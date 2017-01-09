
'use strict'

const React = require('react');
const Sidebar = require('./Sidebar');
const FileView = require('./FileView');

const fileStore = require('../stores/fileStore');
const actions = require('../actions');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: fileStore.getState(),
      selectedFileIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  //in my app component i set the componenet state to files which retrieves the store state array files. this is so many components can contain a single state object which reoccures thoughtout the files in my state. a storage which makes sure a certain state object is reused consistantly throughout all my components which require that state object. I also bind my functions with my componenet self.

  componentDidMount() {
    this.removeListener = fileStore.addListener((files) => {
      this.setState({ files });
    });
  }

  //when the component is initally loaded we evoke the store addlistner function and use a callback which take an argument and gets the state of the listner to that argument as a callback function

  componentWillUnmount() {
    this.removeListener();
  }

  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    actions.updateFile(selectedFileIndex, ev.target.value)
  }
  //const selectedfileindex is equal to the state of the component
  //we evoke the actions.updatedFile function and pass in the the state and the value of the event which is the text in the file

  handleSelect(selectedFileIndex) {
    this.setState({ selectedFileIndex });
  }

  //in handleSlect we setState of the selectedFileIndex to the integer. this is es6 syntax. if the key and value are the same name we can assign them this way.Since the file slected has changed for the fileView prop of file, now the fileView component will rerender


  handleAdd(ev) {
    ev.preventDefault();
    actions.addFile();
  }
  //when we add a file we wil hit the actions.addfile function

  handleRemove(ev) {
    ev.preventDefault();
    const { selectedFileIndex } = this.state;
    actions.removeFile(selectedFileIndex);
    this.setState({ selectedFileIndex: 0 });
  }

  render() {
    const { files, selectedFileIndex } = this.state;
    const file = files[selectedFileIndex];

    return (
      <div className="app">
        <Sidebar
          files={files}
          selectedFileIndex={selectedFileIndex}
          onSelect={this.handleSelect}
        />
        <FileView
          file={file}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}
//we have a const files, selec,.... which is a shorthand for writing const from each obj element that matches the obj in this case the componenet state.
//our file constant is equal to a the file with the index of the selectedFileIndex
//the return value of the componenet is as follows:
//the sidebar component takes in props of files all files, a selectedfileindex, anditsonselctprop is equal to the handleselectfunction.
//=> go over to sidebar component


//the sidebar onSelect prop is set to be a pointer to the handleselect function

//onChange for the fileview function is a app component level function
module.exports = App;
