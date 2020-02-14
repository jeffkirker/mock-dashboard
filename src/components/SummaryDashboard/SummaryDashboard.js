import SummaryStats from './SummaryStats/SummaryStats';
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';

class SummaryDashboard extends Component {
    render() {
        // console.log("Summary:", this.props.repositories[0].doughnutData);
        return this.props.repositories.map((repo, key) => {
            console.log("Summary:", repo.doughnutData);
            return <SummaryStats
                name={repo.name}
                key={repo.key}
                doughnutData={repo.doughnutData}
                lineData={repo.lineData} />
        });
    }
}

export default SummaryDashboard
