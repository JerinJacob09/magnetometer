import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import { FormControl, FormHelperText, Grid, Input, InputLabel, TextField, ThemeProvider } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Form = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { register, handleSubmit } = useForm();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const history = useNavigate();

  const onsubmit = (data) => {
    history("/output", {state: {data:data}})
  }
  

  return (<>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LensBlurIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MAGNETOMETER
          </Typography>

          
          <LensBlurIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MAGNETOMETER
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    {/* <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
        <Box
        sx={{
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
    
    </Box>
    </ThemeProvider> */}
    <form onSubmit={handleSubmit(onsubmit)}>
    <Grid
    container
    spacing={2}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '90vh' }}
    >
        <Grid item xs={6}>
        <Typography variant="h5" component="h6">
  Input
</Typography>
        </Grid>
        <Grid item xs={6}>
        
        </Grid>
    
    <Grid item xs={6}>
    

        <TextField
          id="standard-number"
          label="Reading 1"
          type="number"
          variant="standard"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          inputProps={register('reading_1')}
          onChange={(event) =>
            event.target.value < 0
                ? (event.target.value = 0)
                : event.target.value
        }
          required
        />
        <FormHelperText id="my-helper-text">in micro Tesla</FormHelperText>


    
    </Grid>
    <Grid item xs={6}>


        <TextField
          id="standard-number"
          label="Reading 2"
          type="number"
          variant="standard"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          inputProps={register('reading_2')}
          onChange={(event) =>
            event.target.value < 0
                ? (event.target.value = 0)
                : event.target.value
        }
          required
        />
        <FormHelperText id="my-helper-text">in micro Tesla</FormHelperText>


    </Grid>
    <Grid item xs={6}>


        <TextField
          id="standard-number"
          label="Reading 3"
          type="number"
          variant="standard"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          inputProps={register('reading_3')}
          onChange={(event) =>
            event.target.value < 0
                ? (event.target.value = 0)
                : event.target.value
        }
          required
        />
        <FormHelperText id="my-helper-text">in micro Tesla</FormHelperText>


    </Grid>
    <Grid item xs={6}>
    <Button variant="contained" type="submit">Submit</Button>
    </Grid>
    
    </Grid>
    </form>
  </>
  );
}

export default Form;