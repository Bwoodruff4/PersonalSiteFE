import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Background from './Components/Background'
import Experience from './Components/Experience'
import Articles from './Components/Articles'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'

const backgroundURL = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"

const useStyles = makeStyles({
  background: {
    backgroundImage: `url(${backgroundURL})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    maxWidth: "100%",
    height: "100vh",
    overflow: "hidden",
    scroll: "no"
  },
});

function App() {
  const classes = useStyles()

  return (
    <Router>
      <NavBar color="primary"/>
      <Container className={classes.background}>
      <Grid container spacing={0} direction="column" style={{height: "100vh"}} >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Background" exact component={Background} />
          <Route path="/Experience" exact component={Experience} />
          <Route path="/Articles" exact component={Articles} />
        </Switch>
      </Grid>
      </Container>
    </Router>
  );
}

export default App;
