'use strict';

const fileStore = require('../stores/fileStore');
const FileStore = fileStore.constructor;
const Store = require('../stores/Store');

describe('fileStore', function() {
  it('should be an object', function() {
    expect(typeof fileStore).toBe('object');
  });

  it('should be an instance of FileStore', function() {
    expect(fileStore.constructor.name).toBe('FileStore');
  });

  it('should be an instance of Store', function() {
    expect(fileStore instanceof Store).toBe(true);
  });

  it('should store files as an array', function() {
    expect(fileStore.getState().constructor).toBe(Array);
  });

  it('should by default contain at least one file', function() {
    expect(fileStore.getState().length).toBeGreaterThan(0);
  });

  it('should store files as an array of string', function() {
    fileStore.getState().forEach((file) => {
      expect(typeof file).toBe('string');
    });
  });

  describe('#updateFile', function() {
    it('should update the file at the passed in index', function() {
      const instance = new FileStore(['hello', 'world']);
      //instance is equal to an instance which points to a new Filestone object
      const prevState = instance.getState();
      //prevstate is equal to the insance prev state
      expect(prevState).toEqual(['hello', 'world']);
      //we want to updat the prevstate with the new state

      instance.updateFile(1, 'mars');
      //updateFile function is given an argument of an index and the actual file
      const nextState = instance.getState();
      //this constant is equal to of the old state. or current state to be precise
      expect(nextState).toEqual(['hello', 'mars']);
      //i need to get the current state, find the state of the index of 1 and then update the state value with the file.
    });

    it('should not mutate store state, but create a new copy', function() {
      const instance = new FileStore(['hello', 'world']);
      const prevState = instance.getState();
      instance.updateFile(1, 'mars');
      const nextState = instance.getState();

      expect(nextState).toNotBe(prevState);
    });
  });

  describe('#addFile', function() {
    it('should append empty string to store', function() {
      //should append an empty string to the store state
      const instance = new FileStore([]);
      //coonst instance is equal to a new fiel store object which is an array
      instance.addFile();
      //we calll on filestore.addFile
      instance.addFile();
      expect(instance.getState()).toEqual(['', '']);
      //at the point we expect filestores state to equal to array of two empty strings
    });

    it('should not mutate store state, but create a new copy', function() {
      //do not mutate original copy
      const instance = new FileStore([]);
      //new fielstore array obj
      const prevState = instance.getState();
      //prevstate is equal to the current instance state
      instance.addFile();
      //when i call on the instance addfile function
      expect(instance.getState()).toNotBe(prevState);
      //except the instance get state not to equal prevstate
    });
  });

  describe('#removeFile', function() {
    context('when there is only one file left', function() {
      it('should empty remaining file', function() {
        const instance = new FileStore(['only file']);
        instance.removeFile();
        expect(instance.getState()).toEqual(['']);
      });
    });

    it('it should remove file at specified index', function() {
      const instance = new FileStore(['first', 'second', 'third']);
      instance.removeFile(2);
      expect(instance.getState()).toEqual(['first', 'second']);
      instance.removeFile(0);
      expect(instance.getState()).toEqual(['second']);
    });
  });
});
