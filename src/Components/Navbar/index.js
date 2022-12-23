import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Logout } from '@mui/icons-material';
import { Container, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';


// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }));

const StyledAppBar = styled(AppBar)(({theme}) => ({
  background: theme.palette.primary.dark
}))

export default function Navbar() {
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters={true}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "block", letterSpacing:"2px" }}
          >
            <Link to="/">
            EXCHANGE</Link>
          </Typography>
          <Tooltip title="Logout">
          <IconButton onClick={handleLogout}>
            <Logout sx={{ color:"#fff" }} />
          </IconButton>
          </Tooltip>
        </Toolbar>
        </Container>
      </StyledAppBar>
    </Box>
  );
}