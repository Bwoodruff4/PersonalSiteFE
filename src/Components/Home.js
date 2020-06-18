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
        <Grid container spacing={1} direction="column" alignItems="center" style={{ minHeight: '100vh' }}>   
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"grey"}}>
                    <CardContent>
                        <Typography variant="h2" component="h1" align="center" style={{color:"white"}}>
                        Blake Woodruff
                        </Typography>
                        <Typography variant="h3" component="h1" align="center" style={{color:"white", fontStyle:"italic"}}>
                        Engineer
                        </Typography>
                        <Typography variant="h5" component="h1" align="center" style={{color:"white", fontStyle:"italic"}}>
                        Good at logic, terrible at styling
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>      
        </Grid>
    )
    
}
