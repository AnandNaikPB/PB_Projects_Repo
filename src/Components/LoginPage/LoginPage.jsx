import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import taxImage from "../../Assets/TaxCopilat_1.png";
// import Navbar from "../Navbar/Navbar";

const lightTheme = createTheme({
  palette: {
    mode: "light", // Set the light mode here
  },
  typography: {
    // Customize typography as needed
  },
});

function LoginFinal() {
  return (
    <>
      {/* <Navbar /> */}
      <div
        className="loginForm"
        style={{ textAlign: "center", margin: "80px" }}
      >
        <img src={taxImage} alt="TextLogo" />
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Container>
            <Box
              sx={{
                width: 300,
                mx: "auto",
                my: 4,
                py: 3,
                px: 2,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                borderRadius: "16px", // Use MUI's border radius scale
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Customize shadow
                backgroundColor: "white", // Set background color to white
              }}
            >
              <div>
                <Typography
                  variant="h5"
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <b>Login</b>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-5px", // Adjust the offset as needed
                      left: "50%", // Center the border line under the text
                      transform: "translateX(-50%)", // Center the border line horizontally
                      width: "145px", // Adjust the width of the border line
                      borderBottom: "4px solid yellow", // Set the border color to yellow
                    }}
                  ></div>
                </Typography>
              </div>

              {/* <FormControl>
                <TextField
                  variant="outlined"
                  name="email"
                  type="email"
                  label="Email ID"
                  sx={{
                    width: "100%",
                    padding: "10px", // Adjust padding as needed
                    borderRadius: "5px", // Set the desired border radius
                    borderColor: "white", // Set the border color
                  }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  variant="outlined"
                  name="password"
                  type="password"
                  label="Password"
                  sx={{
                    width: "100%",
                    padding: "10px", // Adjust padding as needed
                    borderRadius: "5px", // Set the desired border radius
                    borderColor: "white", // Set the border color
                    color: "white",
                  }}
                />
              </FormControl> */}
              <TextField
                variant="outlined"
                name="email"
                type="email"
                // label="Email ID"
                placeholder="Email ID"
                sx={{
                  width: "100%",
                  padding: "10px", // Adjust padding as needed
                  borderRadius: "32px", // Set the desired border radius
                  borderColor: "white", // Set the border color
                }}
              />

              <TextField
                variant="outlined"
                name="password"
                type="password"
                // label="Password"
                placeholder="Email ID"
                sx={{
                  width: "100%",
                  padding: "10px", // Adjust padding as needed
                  borderRadius: "32px", // Set the desired border radius
                  borderColor: "white", // Set the border color
                  color: "white",
                }}
              />

              <Link
                href="/forgotpassword"
                sx={{
                  textDecoration: "none",
                  textAlign: "right",
                  color: "white",
                }}
              >
                Forgot password?
              </Link>

              <Button
                sx={{
                  mt: 1, // margin top
                  backgroundColor: "yellow",
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "bold",
                  justifyContent: "center",
                  width: "100%",
                  borderRadius: "31.31px",
                  textTransform: "none",
                }}
              >
                Login
              </Button>

              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "30px",
                  color: "white",
                  alignSelf: "center",
                  mt: 2, // margin top
                }}
              >
                <span style={{ fontSize: "16px" }}>
                  Don't have an account?{" "}
                </span>
                <Link
                  href="/sign-up"
                  sx={{
                    textDecoration: "none",
                    fontSize: "16px",
                    color: "yellow",
                    fontWeight: "bold",
                  }}
                >
                  Sign up
                </Link>
              </Typography>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </>
  );
}

export default LoginFinal;
