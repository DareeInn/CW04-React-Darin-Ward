import React, { Component } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import FilteredList from './components/FilteredList';

const produce = [
  { name: 'Apple', type: 'Fruit' },
  { name: 'Banana', type: 'Fruit' },
  { name: 'Carrot', type: 'Vegetable' },
  { name: 'Broccoli', type: 'Vegetable' },
  { name: 'Orange', type: 'Fruit' },
  { name: 'Spinach', type: 'Vegetable' }
];

class App extends Component {
  render() {
    return (
      <main className="App">
        <div className="app-container">
          <HelloWorld />
          <Counter />
          <FilteredList items={produce} />

          <footer>
            <p>Created by Darin Ward • CW-04 React Assignment</p>
          </footer>
        </div>
      </main>
    );
  }
}

export default App;
