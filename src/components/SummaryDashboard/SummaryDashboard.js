import SummaryStats from './SummaryStats/SummaryStats';
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SummaryCard from './SummaryStats/SummaryStatsCard'

class SummaryDashboard extends Component {


    render() {
        return this.props.repositories.map((repo) => {
            return <SummaryCard name={repo.name}/>
        });
    }
}

export default SummaryDashboard
