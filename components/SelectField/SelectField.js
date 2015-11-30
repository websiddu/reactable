import React, { Component } from 'react';

import './SelectField.scss';

class SelectField extends Component {

  constructor(...props) {
    super(...props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    var {id, options, label, value} = this.props;
    var mappedOpts =
      options.map((item) => <option key={item} value={item}>{item}</option>);

    return (
      <div className="pagesize">
        <label htmlFor={id}>{label}</label>
        <br/>
        <select id={id} value={value} onChange={this.onChange}>
          {mappedOpts}
        </select>
      </div>
    );
  }

}

module.exports = SelectField;
