import React from 'react';
import { fade, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { green, } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import mainLogo from '../image/mainLogo.png'

const Nav = styled.div`
    margin-bottom:50px;
    .MuiToolbar-root{
        height:80px;
    .routerColor{color:#fff;}
    }
    .exitColor{color:#fff;}
    .mainLink{width:80%; display:block;}
    .logoImg{width:100%;}
`
const margin = {
  marginRight: "10px",
  color: "#fff",
  fontWeight: "bold"
}
const svg = {
  fontSize: "2rem"
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    width:'180px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

//초록 버튼
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function PrimarySearchAppBar({ login, onLoginClick }) {
  const loginMove = () => {
    alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.")
  }

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}

    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Nav className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon style={svg} />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className="mainLink"><img src={mainLogo} alt={"mainLogo"} className={"logoImg"}/></Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <ThemeProvider theme={theme} >
              {login ?
                <Link to="/quiz">
                <Button variant="contained" color="secondary" className={classes.margin} style={margin}>
                  Create
                </Button>
              </Link> 
              :
              <Link to="/login">
                <Button variant="contained" color="secondary" className={classes.margin} onClick={loginMove} style={margin}>
                  Create
                </Button>
              </Link> 
            }
              
              
            </ThemeProvider>

            {login ?
              <>
                <ThemeProvider theme={theme} >
                  <Button variant="contained" color="primary" onClick={onLoginClick} className={classes.margin} style={margin}>
                    <div to="/logIn" className={"routerColor"}>LogOut</div>
                  </Button>
                </ThemeProvider>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle style={svg} />
                </IconButton>
              </>

              :

              <ThemeProvider theme={theme} >
                <Button variant="contained" color="primary" className={classes.margin} style={margin}>
                  <Link to="/logIn" className={"routerColor"}>LogIn</Link>
                </Button>
              </ThemeProvider>
            }

          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Nav>
  );
}