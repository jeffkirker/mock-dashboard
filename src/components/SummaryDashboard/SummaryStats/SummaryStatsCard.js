import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SummaryStats from './SummaryStats'
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChartTest from '../../Charts/ChartTest';
import DonutTest from '../../Charts/DonutTest';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 345,
  },
  header: {
    textAlign: 'left',
    paddingLeft: '40px',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

var cardStyle = {
  display: 'block',
  width: '100%',
  // transitionDuration: '0.3s',
  // height: '30vw',
  marginBottom: '24px'
}

export default function SummaryCard(props) {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      <Card className={classes.root} style={cardStyle}>

        <CardHeader
          className={classes.header}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.name}
        />

        <CardContent>
          <Container maxWidth="lg" className={classes.container}>
            <Grid container className={classes.root} spacing={6}>
              <Grid item xs={6}>
                {/* <Paper className={fixedHeightPaper}> */}
                <ChartTest />
                {/* </Paper> */}
              </Grid>
              <Grid item xs>
                {/* <Paper className={fixedHeightPaper}> */}
                <DonutTest />
                {/* </Paper> */}
              </Grid>
            </Grid>
          </Container>
        </CardContent>
      </Card>

    </div>

  );
}

