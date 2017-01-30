'use strict'

const React = require('react');
const Sidebar = require('./Sidebar');
const FileView = require('./FileView');
const Toolbar = require('./Toolbar');

const fileStore = require('../stores/fileStore');
const actions = require('../actions');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      files: fileStore.getState(),
      selectedFileIndex: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }


  componentDidMount() {
    // TODO
    this.removeListener = fileStore.addListener((files) => {
      this.setState({files});
    }); 
  }

  componentWillUnmount() {
    // TODO
    this.removeListener();
  }

  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    // TODO Dispatch action
    actions.updateFile(selectedFileIndex, ev.target.value);
  }

  handleSelect(selectedFileIndex) {
    // TODO Update selectedFileIndex state
    this.setState({selectedFileIndex: selectedFileIndex}); 
  }

  handleAdd(ev) {
    ev.preventDefault();
    // TODO Dispatch action
    actions.addFile();
  }

  handleRemove(ev) {
    ev.preventDefault()
    // TODO Dispatch action
    actions.removeFile(this.state.selectedFileIndex);
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

module.exports = App;
