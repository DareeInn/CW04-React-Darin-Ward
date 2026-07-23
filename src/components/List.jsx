import React, { Component } from 'react';

class List extends Component {
  render() {
    const { items } = this.props;

    if (items.length === 0) {
      return (
        <p className="empty-message">
          No produce matches the selected filters.
        </p>
      );
    }

    return (
      <ul className="produce-list">
        {items.map((item) => (
          <li key={item.name} className="produce-item">
            <span>{item.name}</span>
            <span className={`type-badge ${item.type.toLowerCase()}`}>
              {item.type}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
