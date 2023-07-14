import {
  Box,
  Grid,
  Button,
  TextField
} from "@mui/material";
import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material';




const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorE2, setAnchorE2] = useState<null | HTMLElement>(null);
  const [anchorE3, setAnchorE3] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };


  return (
    <div>
      <Box m={4} sx={{ flexGrow: 1 }}>
        <Grid
          spacing={4}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >

          <Grid item md={2}>
            <Button variant="contained"
              style={{ margin: "2px", marginLeft: "12px" }}>Login
            </Button>
          </Grid>
          <Grid item md={6}>

            <TextField
              required
              fullWidth
              size="small"
              id="search"
              label="Global Search"
              name="projectName"
            />


          </Grid>
          <Grid item md={4} className="header-right-grid">

            <Button style={{ margin: "2px", marginRight: "4px" }} variant="outlined">Notifications</Button>
            <Button variant="contained"
              style={{ margin: "2px" }}>Profile
            </Button>


          </Grid>

        </Grid>

        <div>
          <AppBar  >
            <Toolbar >

              <div>
                <Button
                  color="inherit"

                  onClick={handleClick}
                >
                  Field
                </Button>
                <Menu
                  id="dropdown-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Add</MenuItem>
                  <MenuItem onClick={handleClose}>Edit</MenuItem>
                  <MenuItem onClick={handleClose}>Emport</MenuItem>
                </Menu>
                <Button color="inherit" onClick={handleClick2}>
                  Water Management
                </Button>

                <Menu
                  id="dropdown-menu"
                  anchorEl={anchorE2}
                  keepMounted
                  open={Boolean(anchorE2)}
                  onClose={handleClose2}
                >
                  <MenuItem onClick={handleClose2}>Pump</MenuItem>
                  <MenuItem onClick={handleClose2}>TDI</MenuItem>
                  <MenuItem onClick={handleClose2}>Tile Maps</MenuItem>
                  <MenuItem onClick={handleClose2}>Assment</MenuItem>
                </Menu>

                <Button color="inherit" onClick={handleClick3}>
                  Analyze
                </Button>
                <Menu
                  id="dropdown-menu"
                  anchorEl={anchorE3}
                  keepMounted
                  open={Boolean(anchorE3)}
                  onClose={handleClose3}
                >
                  <MenuItem onClick={handleClose3}>Yield</MenuItem>
                  <MenuItem onClick={handleClose3}>Soils</MenuItem>
                  <MenuItem onClick={handleClose3}>Plant Dates</MenuItem>
                </Menu>

              </div>
            </Toolbar>
          </AppBar>
        </div>

      </Box>
    </div>
  )
}

export default Header;