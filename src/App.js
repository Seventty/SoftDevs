import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import PagesToVisit from './components/PagesToVisit';
import './App.css';


const useStyles = makeStyles((theme)=> ({
  root: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/Img1.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '5% 50%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg1md.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Header/>
      <PagesToVisit/>
      
    </div>
  )
}

