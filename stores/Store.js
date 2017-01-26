'use strict';

class Store {
  constructor(initialState) {

    this.state = initialState;

    this.listeners = []
  }

  getState(){
    return this.state
  }




  addListener(listener){
    this.listeners.push(listener);
    const removeListener = () => {
      const index = this.listeners.indexOf(listener)
      this.listeners.splice(index, 1)
    }
    return removeListener

  }


  setState(newState){
    this.state = newState;
    this.listeners.forEach((l) => l.call(this, newState))
    }


}

module.exports = Store;
