import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../Assets/TaxCopilate.svg";
import Profile from "../../Assets/profile.svg";
import "./navbar.scss";
import { clearSession } from "../../utils/sessionManagement";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 300,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));
  return (
    <div className="navbar-container">
      <span className="logo-container">
        <span className="logo-image">
          <img src={logo} alt="logo" />
        </span>

        <span className="taxcopilot-container">
          <span className="tax-heading">TAX-LLM-RnD</span>
        </span>
      </span>

      <span className="button-container">
        <span className="menu-tab-container">
          <li key="Upload Documents" className="tab-li">
            <Link to="/indianlaw" className="tab">
              <HtmlTooltip
                title={
                  <ul
                    style={{
                      height: "7.5vw",
                      fontSize: "0.9vw",
                      color: "black",
                      listStyleType: "none",
                      fontWeight: "bold",
                    }}
                  >
                    <li>Legal Statute Identification</li>
                    <br />
                    <li>Semantic Segmentation</li>
                    <br />
                    <li>Court Judgement Prediction</li>
                    <br />
                    <li>Summary</li>
                  </ul>
                }
                placement="bottom-start"
              >
                <Button title="indian law">
                  <h2
                    style={{
                      fontSize: "1.5vw",
                      fontWeight: "bold",
                      color: "black",
                      textTransform: "none",
                    }}
                  >
                    Indian Law
                  </h2>
                </Button>
              </HtmlTooltip>
            </Link>
          </li>
        </span>
        {/* Use Button component for the profile with Menu */}
        <Button onClick={handleMenuClick}>
          <span className="image-span">
            <img src={Profile} alt="logo" />
          </span>
        </Button>
        <Menu
          id="profile-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            onClick={handleMenuClose}
            style={{
              height: "2vw",
              width: "5vw",
              backgroundColor: "#0ab7cc",
              display:"flex",
              justifyContent: "center",
              fontSize: "1vw",
              fontWeight: "bold",
            }}
          >
            <p
              onClick={() => {
                clearSession();
                localStorage.removeItem("Token");
                navigate("/");
              }}
            >
              Logout
            </p>
          </MenuItem>
        </Menu>
      </span>
    </div>
  );
};

export default Navbar;
