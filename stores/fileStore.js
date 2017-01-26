'use strict';

const Store = require('./Store');

class FileStore extends Store {
  constructor(initialState = [ '' ]) {
    super (initialState);
    this.state = initialState
  }


  updateFile(index, newFile) {
    var newState = this.state.slice()
    newState.splice(index,1,newFile)
    this.setState(newState)
  }

  addFile(){
    const files = this.getState().concat('');
    this.setState(files);
    // this.setState([...this.state, ""])
  }


  removeFile(index){
    var newState = this.state.slice();
    newState.splice(index,1);
    if (newState.length === 0) {
      newState = [ '' ]
    }
    this.setState(newState);
  }
}

module.exports = new FileStore();
