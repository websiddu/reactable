/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import ReacTable from '../components/ReacTable';

var data = require('../components/Data').data;

var columns = [
  { title: 'First Name', prop: 'first_name'  },
  { title: 'Last Name', prop: 'last_name'  },
  { title: 'Street', prop: 'street'  },
  { title: 'City', prop: 'city' },
  { title: 'State', prop: 'state' },
  { title: 'Zip', prop: 'zip' }
];

export default class extends Component {
  render() {
    return (
      <div>
        <h1> ReacTable </h1>
        <ReacTable
          className="container"
          keys="id"
          columns={columns}
          initialData={data}
          initialPageLength={25}
          initialSortBy={{ prop: 'city', order: 'desc' }}
          pageLengthOptions={[ 5, 10, 25, 50, 75, 100 ]}
        />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
