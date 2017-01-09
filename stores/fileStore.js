'use strict';

const Store = require('./Store');

class FileStore extends Store {


  updateFile(index, file) {
    const files = this.getState().slice();
    files.splice(index, 1, file);
    this.setState(files);
  }
  //now we will update the file
  //we create a copy of the state
  //we change the value of the index in the array to the file value and set the state of of the store to
  //the new state, we called unpon the setState store function which will evoke all its listeners to be updated with the state of the store

  addFile() {
    const files = this.getState().concat('');
    this.setState(files);
  }
  //constant files is equal to the state with an added concat string which means we have a new state with a string added to the end of the array and set the state of the store to the new array evoking all its listeners to update their state

  removeFile(index) {
    if (this.state.length === 1) {
      return this.setState(['']);
    }

    const files = this.getState().slice()
    files.splice(index, 1);
    this.setState(files);
  }
}

module.exports = new FileStore(['']);
