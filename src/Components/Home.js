import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default function Home() {
    const classes = useStyles()
    return (
        <Grid container spacing={0} direction="column" alignItems="center" style={{ minHeight: '100vh' }}>   
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"grey"}}>
                    <CardContent>
                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                    </Typography> */}
                    <Typography variant="h3" component="h1" align="center">
                    Blake Woodruff
                    </Typography>
                    {/* <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography> */}
                    </CardContent>
                    {/* <CardActions>
                    <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </Grid>      
        </Grid>
    )
    
}
