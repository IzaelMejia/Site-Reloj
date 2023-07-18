import { AppBar, Container, Toolbar } from "@mui/material";
import MenuPositions from "../MenuPositions/MenuPositions";
import { Link } from "react-router-dom";
import "./ResponsiveNavigation.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const styles = {
  linkButton: {
    textDecoration: "none",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  
};

const ResponsiveNavigation = () => {
  return (
    <AppBar position="static" className="ResponsiveNavigation blackBackground">

      <Container maxWidth="xl">
        <Toolbar disableGutters className="ResponsiveNavigationContainer">   
          <Link to="/" style={styles.linkButton}>
            Home
          </Link>
          <MenuPositions />
          <Link to="/about" style={styles.linkButton}>
            About
          </Link>
          <Link to="/contact" style={styles.linkButton}>
            Contact
          </Link>
          <Link to="/shop" style={styles.linkButton}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ShoppingCartIcon />
            </div>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveNavigation;
