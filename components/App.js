const React = require('react');
const Sidebar = require('./Sidebar');
const FileView = require('./FileView');
const Toolbar = require('./Toolbar');
const fileStore = require('../stores/fileStore');
const actions = require('../actions');

  class App extends React.Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
     this.handleSelect = this.handleSelect.bind(this)
     this.handleRemove = this.handleRemove.bind(this)
     this.listener = this.listener.bind(this)
    this.state = {
       files: fileStore.getState(),
       selectedFileIndex: 0
     };
   }

  listener(files){
     this.setState({ files })
   }

    componentDidMount() {
    // TODO
     this.removeListener = fileStore.addListener((files) => {
       this.setState({files});
    });
    }

    componentWillUnmount() {
      // TODO
     this.removeListener()
    }

   shouldComponentUpdate (nextState) {
   return nextState.files !== this.state.files;
 }

    handleChange(ev) {
      const { selectedFileIndex } = this.state;
      // TODO Dispatch action
    }

    handleSelect(selectedFileIndex) {
      // TODO Update selectedFileIndex state
    // actions.updateFile(selectedFileIndex)
    selectedFileIndex.preventDefault()
     this.props.onSelect
    }

    handleAdd(ev) {
      ev.preventDefault();
      // TODO Dispatch action
     actions.addFile()
    }

    handleRemove(ev) {
      ev.preventDefault()
      // TODO Dispatch action
     actions.removeFile(ev.target.value)
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
     ></FileView>
        </div>
      );
    }
 }

 module.exports = App;
