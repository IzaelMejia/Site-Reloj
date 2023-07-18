import * as React from "react";
import Button from "@mui/material/Button";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const MenuPosition = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "lowercase",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "black",
      fontSize: 18,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>R</span>elojes
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="/marca/rolex" style={styles.link}>
            Rolex
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/marca/omega" style={styles.link}>
          Omega
          </Link >
        </MenuItem>
        <MenuItem>
          <Link to="/marca/richard mille" style={styles.link}>
            Richard Mille
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/marca/vacheron constantin" style={styles.link}>
            Vacheron Constantin
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuPosition;
