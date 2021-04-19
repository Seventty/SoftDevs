import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton } from "@material-ui/core";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import SortIcon from '@material-ui/icons/Sort';

const Header = () => {
  return ( 
    <div>
      <AppBar>
        <h1>SoftDevs</h1>
        <IconButton>
          <AllInclusiveIcon/>
        </IconButton>
      </AppBar>
    </div>
   );
}
 
export default Header;