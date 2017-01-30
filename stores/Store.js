'use strict';

class Store {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  addListener(listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter((eachListener) => {
        return listener !== eachListener;
      });
    }
    return removeListener;
  }

  setState(state) {
    this.state = state;
    this.listeners.forEach((listener) => {
      listener(state);
    });
  }

  getState() {
    return this.state;
  }

}

module.exports = Store;
