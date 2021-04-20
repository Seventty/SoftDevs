
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import pages from '../static/pages';
import useWindowPosition from '../hooks/useWindowPosition';
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
}));
export default function PagesToVisit() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="page-to-visit">
      <ImageCard page={pages[0]} checked={checked} />
      <ImageCard page={pages[1]} checked={checked} />
    </div>
  );
}