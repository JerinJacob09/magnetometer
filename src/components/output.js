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

      const getAvailabilityForLot3 = (reading_1, reading_2, reading_3) => {
        if (reading_1 < reading_3 && reading_3 < (reading_2 + 5)) {
            return 'Yes';
        } else if (reading_3 > reading_2) {
            return 'No';
        }
        return 'Sensor malfunction';
    };
      
      const rows = [
        { id: "Normal Reading", availability: is_cat_present(data['reading_1'])},
        { id: "One Car Reading", availability: is_cat_present(data['reading_2']) },
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