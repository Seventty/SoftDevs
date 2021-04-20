
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import pages from '../static/pages';
import useWindowPosition from '../hooks/useWindowPosition';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  exploreIcon: {
    color: '#fff',
    fontSize: '3em'
  }
}));
export default function PagesToVisit() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="page-to-visit">
      <ImageCard page={pages[0]} checked={checked} icon={<HomeIcon/>}/>
      <ExploreIcon className={classes.exploreIcon}/>
      <ImageCard page={pages[1]} checked={checked} icon={<ShoppingCartIcon/>}/>
    </div>
  );
}