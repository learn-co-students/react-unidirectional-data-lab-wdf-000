'use strict'

const React = require('react');
const Toolbar = require('./Toolbar');

class FileView extends React.Component {
  render() {
    return (
      <div className="file-view">
        <Toolbar onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
        <textarea className='file-view__text' value={this.props.file} onChange={this.props.onChange}/>
      </div>
    );
  }
}

module.exports = FileView;
