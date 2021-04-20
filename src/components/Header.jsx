import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar,  Collapse} from "@material-ui/core";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'; //Infinite icon
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme)=> ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  colorText1: {
    color: "#ffffff"
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem"
  },
  container: {
    textAlign: 'center',
  },
  goDown: {
    color: "#ffffff",
    fontSize: "2rem"
  }
}));
const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return ( 
    <div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
          <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>SoftDevs</h1>
          <IconButton>
            <AllInclusiveIcon className={classes.icon}/>
          </IconButton>
          </Toolbar>
        </AppBar>
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
          <div className={classes.container}>
            <h1 className={classes.title}>
              “Hellow Dev”
            </h1>
            <Scroll to="page-to-visit" smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown}/>
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
    </div>
   );
}
 
export default Header;