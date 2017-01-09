 'use strict';
const Store = require('./Store');

class FileStore extends Store {
  constructor(initialState = ['']){
    super(initialState);
    this.state = initialState

  }
  updateFile(index, value){
   var updatedFile = this.state.slice()
   updatedFile.splice(index,1,value)
   this.setState(updatedFile)
 }

 addFile(){
  this.setState([...this.state,''])
 }

  removeFile(index){
  if(this.state.length == 1){
   this.setState([''])
 }else{
  var afterRemove = this.state.slice()
  afterRemove.splice(index,1)
  this.setState(afterRemove)
    }
  }
 }

module.exports = new FileStore;
