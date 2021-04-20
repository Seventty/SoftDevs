import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, Collapse } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 340,
    WebkitFilter: 'grayscale(100%) blur(1px)',
    filter: 'grayscale(100%) blur(1px)',
    WebkitTransition: '.3s ease-in-out',
    transition: '.3s ease-in-out',
    '&:hover': {
      WebKitFilter: 'grayscale(0)',
      filter: 'grayscale(0)'
    },
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
    display: 'inline-block'
  },
  button: {
    margin: '10px',
    background: '#000',
    color: '#fff'
  },
});

export default function ImageCard({ page, checked, icon }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={page.imageUrl}
          title="SoftDevs"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {page.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {page.description}
          </Typography>
        </CardContent>
        <Button 
          variant="outlined" 
          className={classes.button}  
            startIcon={icon}
          >
            {page.buttonTitle}
        </Button>
      </Card>
    </Collapse>
  );
}