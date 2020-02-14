import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import classes from './SummaryStats.css'
import Deposits from '../../Deposits';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ChartTest from '../../Charts/ChartTest';
import DonutTest from '../../Charts/DonutTest';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));


const SummaryStats = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container className={classes.root} spacing={6}>
        <Grid item xs={6}>
          <ChartTest />
        </Grid>
        <Grid item xs={6}>
          <DonutTest />
        </Grid>
      </Grid>
    </Container>
  )
}

export default SummaryStats;
