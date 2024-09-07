import { AppBar, Container, Toolbar, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import { useNavigate } from 'react-router-dom';

const Output = () => {
    const location = useLocation();
    const data = location.state.data;
    const columns = [
        { field: 'id', headerName: 'Location', width: 150 },
        { field: 'availability', headerName: 'Availability', width: 150 },
      ];

    const is_cat_present = (input) => {
        if (input>=52 && input<=80 ){
            return 'No'
        }
        else if(input>=37 && input<51){
            return 'Yes'
        }
        return 'Sensor malfunction'
    }
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/', {replace: true})
    }
      
      const rows = [
        { id: "Lot 1", availability: is_cat_present(data['reading_1'])},
        { id: "Lot 2", availability: is_cat_present(data['reading_2']) },
        { id: "Lot 3", availability: is_cat_present(data['reading_3']) }
      ];
    return (
        <>
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LensBlurIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
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
    <form onSubmit={handleBack}>
    <Grid
    container
    spacing={2}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '90vh' }}
    >
        <Grid item xs={6}>
            <DataGrid
                rows={rows}
                columns={columns}
                
                disableRowSelectionOnClick
            />
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" type="submit">Back</Button>
        </Grid>
    </Grid>
    </form>
  </>
    );
}

export default Output;