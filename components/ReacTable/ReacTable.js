import React from 'react';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
import SelectField from '../SelectField/SelectField';
import SearchField from '../SearchField/SearchField';

import DataMixin from '../DataMixin/DataMixin';

import './ReacTable.scss';

var ReacTable = React.createClass({

  mixins: [ DataMixin ],

  render() {
    var page = this.buildPage();

    return (
      <div className={this.props.className}>
        <div className="table-top">
          <div className="table-pagesize">
            <SelectField
              id="page-menu"
              label="Page size:"
              value={this.state.pageLength}
              options={this.props.pageLengthOptions}
              onChange={this.onPageLengthChange}
            />
          </div>
          <div className="table-search">
            <SearchField
              id="search-field"
              label="Search:"
              value={this.state.filterValues.globalSearch}
              onChange={this.onFilter.bind(this, 'globalSearch')}
            />
          </div>
        </div>
        <Table
          dataArray={page.data}
          columns={this.props.columns}
          keys={this.props.keys}
          buildRowOptions={this.props.buildRowOptions}
          sortBy={this.state.sortBy}
          onSort={this.onSort}
        />
        <div className="table-pagination">
          <Pagination
            className="pagination"
            currentPage={page.currentPage}
            totalPages={page.totalPages}
            onChangePage={this.onChangePage}
          />
        </div>

      </div>
    );
  },
});

module.exports = ReacTable;
