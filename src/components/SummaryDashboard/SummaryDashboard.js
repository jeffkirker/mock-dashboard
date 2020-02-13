import SummaryStats from './SummaryStats/SummaryStats';
import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({

//     appBarSpacer: theme.mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         height: '100vh',
//         overflow: 'auto',
//     },
// }));

class SummaryDashboard extends Component {
    // const classes = useStyles();

    render() {
        return this.props.repositories.map((repo) => {
            return <SummaryStats name={repo.name}/>
        });
    }
}

export default SummaryDashboard
