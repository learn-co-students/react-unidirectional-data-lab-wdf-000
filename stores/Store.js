'use strict';

class Store {

  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  //my store instantiates the initial state and since filestore instantiates with a epmty string in an array obj, the initial state is the array. this.listeners is an array of functions which sets this state to all its listeners.

  addListener(listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners
        .filter(l => listener !== l);
    };
    return removeListener;
  }

  //the add listeners function take in the callback function and pushes the function into the listners array
  //we also add a remove listeners constant which is set to point to a arrow function what removes each listener from the listeners array. the constant is the return value from this function. in our app component we are setting a constant which equals to the return value of const removeListener and we call the function in componentwillunmount

  setState(state) {
    this.state = state;
    for (const listener of this.listeners) {
      listener.call(this, state);
    }
  }

  //every single time the state is changed with set state, our components functions will be set to the state passed.

  getState() {
    return this.state;
  }
  //returns the state

}

module.exports = Store;
