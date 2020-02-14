import React from 'react'
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ChartTest from '../../Charts/ChartTest';
import DonutTest from '../../Charts/DonutTest';

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

    return (
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
              <Grid item xs={12} sm={6} className={classes.line}>
                {/* <Paper className={fixedHeightPaper}> */}
                  <ChartTest />                    
                {/* </Paper> */}
              </Grid>
                <Grid item xs className={classes.donut}>
                  {/* <Paper className={fixedHeightPaper}> */}
                    <DonutTest />
                  {/* </Paper> */}
                </Grid>
            </Grid>
        </Container>
    )
}

export default SummaryStats;
