import SummaryStats from './SummaryStats/SummaryStats';
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';

class SummaryDashboard extends Component {
    render() {
        // console.log("Summary:", this.props.repositories[0].doughnutData);
        if (Array.isArray(this.props.repositories) && this.props.repositories.length){
            return this.props.repositories.map((repo, key) => {
                console.log("Summary:", repo.doughnutData);
                return <SummaryStats
                name={repo.name}
                key={repo.key}
                doughnutData={repo.doughnutData}
                lineData={repo.lineData} />
            });
        }
        else {
            return (
                <div>
                    No Matching Repo Found
                </div>
            )
        }
    }
}

export default SummaryDashboard
