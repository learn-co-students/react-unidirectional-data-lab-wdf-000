'use strict'

const React = require('react');
const Sidebar = require('./Sidebar');
const FileView = require('./FileView');
const Toolbar = require('./Toolbar');

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
  componentDidMount() {
         this.removeListener = fileStore.addListener((files) => {
        this.setState({ files });
      });
  }
  componentWillUnmount() {
    this.removeListener();
  }
  handleChange(ev) {
    const { selectedFileIndex } = this.state;
    // TODO Dispatch action
    actions.updateFile(selectedFileIndex, ev.target.value)
  }
  handleSelect(selectedFileIndex) {
    // TODO Update selectedFileIndex state
    this.setState({ selectedFileIndex });
  }
  handleAdd(ev) {
    ev.preventDefault();
    // TODO Dispatch action
    actions.addFile();
  }
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

module.exports = App;
