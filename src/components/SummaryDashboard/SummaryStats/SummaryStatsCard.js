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

const useStyles = makeStyles({
  root: {
    minWidth: 345,
  },
  header: {
      textAlign: 'left',
      paddingLeft: '40px',
  }
});

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
      {/* <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
        <Box flexGrow={2} p={1} bgcolor="grey.300">
          <ChartTest />
        </Box>
        <Box flexGrow={1} p={1} bgcolor="grey.300">
          <DonutTest/>
        </Box>
      </Box> */}
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
            <SummaryStats />
        </CardContent>
    </Card>
    </div>
   
  );
}

 
