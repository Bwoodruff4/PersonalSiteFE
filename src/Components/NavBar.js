import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import MenuDrawer from './MenuDrawer'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mediaButtons: {
    marginLeft: 'auto',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
            <MenuDrawer edge="start" className={classes.menuButton} color="inherit" aria-label="menu"/>
            <div className={classes.mediaButtons}>
              <IconButton color="inherit" href="https://github.com/Bwoodruff4"> 
                <GitHubIcon />
              </IconButton>
              <IconButton color="inherit" href="https://www.linkedin.com/in/blakewoodruffengineer/">
                <LinkedInIcon />
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
