import React from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ChartTest from '../../Charts/ChartTest';
import DonutTest from '../../Charts/DonutTest';
import DoughnutChart from '../../Charts/DoughnutChart';
import LineChart from '../../Charts/LineChart';
const useStyles = makeStyles(theme => ({
  // root: {
  //   flexGrow: 1,
  // },

  line: {
    flexGrow: 2,
  },
  donut: {
    flexGrow: 1,
  },
  container: {
    // paddingTop: theme.spacing(4),
    // paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    // display: 'flex',
    overflow: 'auto',
    // flexDirection: 'column',
  },
  fixedHeight: {
    // height: 240,
  },
}));


const SummaryStats = (props) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  console.log("SummaryStats:", props);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container className={classes.root} spacing={6}>
        <Grid item xs={6}>
          <LineChart
            data={props.lineData}
            title={props.name}
            color="#3E517A" />
        </Grid>
        <Grid item xs={6}>

          <DoughnutChart
            data={props.doughnutData}
            title={props.name}
            colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']} />
        </Grid>
      </Grid>
    </Container>
  )

}

export default SummaryStats;
