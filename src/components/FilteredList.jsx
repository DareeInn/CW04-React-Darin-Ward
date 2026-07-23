import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      type: 'All'
    };
  }

  onSearch = (event) => {
    this.setState({
      search: event.target.value.toLowerCase()
    });
  };

  onFilter = (eventKey) => {
    this.setState({
      type: eventKey
    });
  };

  filterItem = (item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(this.state.search);

    const matchesType =
      this.state.type === 'All' || item.type === this.state.type;

    return matchesSearch && matchesType;
  };

  render() {
    const filteredItems = this.props.items.filter(this.filterItem);

    return (
      <section className="card">
        <h2>Produce Finder</h2>

        <p className="section-description">
          Search by name and select a produce category.
        </p>

        <div className="filter-controls">
          <div className="search-group">
            <label htmlFor="produce-search">Search produce</label>

            <input
              id="produce-search"
              type="search"
              value={this.state.search}
              onChange={this.onSearch}
              placeholder="Try Apple or Carrot"
              aria-label="Search produce by name"
            />
          </div>

          <div className="dropdown-group">
            <span className="control-label">Filter by type</span>

            <DropdownButton
              id="produce-filter"
              title={this.state.type}
              onSelect={this.onFilter}
              variant="dark"
            >
              <Dropdown.Item eventKey="All">All</Dropdown.Item>
              <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
              <Dropdown.Item eventKey="Vegetable">
                Vegetables
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <p className="results-summary" aria-live="polite">
          Showing {filteredItems.length} of {this.props.items.length} items
        </p>

        <List items={filteredItems} />
      </section>
    );
  }
}

export default FilteredList;
