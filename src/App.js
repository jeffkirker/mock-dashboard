import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import SummaryDashboard from './components/SummaryDashboard/SummaryDashboard';

class App extends Component {
  //TODO: Create function that fetches repositories
  // This is just filler values
  state = {
    repositories: [
      { name: 'TestRepo1' },
      { name: 'TestRepo2' },
      { name: 'TestRepo3' }
    ],
    showSummary: true
  };

  render() {
    return (
      <div className="App">
        <Dashboard 
        repositories={this.state.repositories}
        showSummary={this.state.repositories}/>

      </div>
    );
  }
}

export default App;
