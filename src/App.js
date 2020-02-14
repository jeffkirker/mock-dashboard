import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    // Test repos with randomly generated data
    this.state = {
      repositories: [
        { name: 'TestRepo3', key: 'afndsj', lineData: this.getRandomDateArray(15), doughnutData: this.getRandomArray(6)},
        { name: 'TestRepo2', key: 'kfskdg', lineData: this.getRandomDateArray(15), doughnutData: this.getRandomArray(6)},
        { name: 'TestRepo1', key: 'afdagd', lineData: this.getRandomDateArray(15), doughnutData: this.getRandomArray(6)},
      ],
      showSummary: true
    };
  }

  // Data generation
  getRandomArray(numItems) {
    // Create random array of objects
    let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let data = [];
    for (var i = 0; i < numItems; i++) {
      data.push({
        label: names[i],
        value: Math.round(11 * Math.random())
      });
    }
    return data;
  }

  getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2018-05-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for (var i = 0; i < numItems; i++) {
      data.push({
        time: new Date(baseTime + i * dayMs),
        value: Math.round(11 * Math.random())
      });
    }
    return data;
  }


  //TODO: Create function that fetches repositories
 

  render() {
    console.log(this.state.repositories[0].doughnutData);
    return (
      <div className="App">
        <Dashboard
          repositories={this.state.repositories}
          showSummary={this.state.repositories} 
          />
      </div>
    );
  }
}

export default App;
