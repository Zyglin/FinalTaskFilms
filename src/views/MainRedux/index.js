import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useStyles from './style';

const MainRedux = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const cabinetName = mail => {
    if (mail !== undefined) {
      const arrEmail = mail.split('@');
      return arrEmail[0];
    }
    return 'defaultValue';
  };
  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleMenuClose() {
    setAnchorEl(null);
  }

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          iTechArtFilms
        </Typography>
        <div className={classes.grow} />
        <div>{props.mail}</div>
        <div className={classes.sectionDesktop}>
          <IconButton edge="end" aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit" onClick={handleProfileMenuOpen}>
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={props.onHandleClick}>Logout {props.mail}</MenuItem>
        <MenuItem onClick={props.onHandleClickCabinet}>{cabinetName(props.mail)}'s Own Cabinet</MenuItem>
      </Menu>
    </AppBar>
  );
};
MainRedux.propTypes = {
  onHandleClick: PropTypes.func,
  onHandleClickCabinet: PropTypes.func,
  mail: PropTypes.string,
};

export default MainRedux;
