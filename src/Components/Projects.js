import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Youtube from 'react-youtube';

const useStyles = makeStyles({
    root: {
      minWidth: 500,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Projects() {
    const classes = useStyles()

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      }
    
    const videoOnReady = (event) => {
        event.target.pauseVideo()
    }
    
    return (
        <Grid container spacing={0} direction="column" alignItems="center" style={{ minHeight: '100vh' }}>   
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"grey"}}>
                    <CardContent>
                        <Youtube videoId="52HgsMW0BbM" opts={opts} onReady={videoOnReady}/>
                    </CardContent>
                </Card>
            </Grid>      
        </Grid>
    )
}

// https://youtu.be/52HgsMW0BbM
