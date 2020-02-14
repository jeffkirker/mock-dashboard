import SummaryStats from './SummaryStats/SummaryStats';
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';

class SummaryDashboard extends Component {


    render() {
        return this.props.repositories.map((repo) => {
            return <SummaryStats name={repo.name}/>
        });
    }
}

export default SummaryDashboard
