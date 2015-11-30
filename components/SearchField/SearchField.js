import React, { Component } from 'react';

import './SearchField.scss';

class SearchField extends Component {

  constructor(...props) {
    super(...props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="search">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <br />
        <input
          id={this.props.id}
          type="search"
          placeholder="Search for fields.. e.g. holland"
          value={this.props.value}
          onChange={this.onChange}
        />
      </div>
    );
  }

}

module.exports = SearchField;
