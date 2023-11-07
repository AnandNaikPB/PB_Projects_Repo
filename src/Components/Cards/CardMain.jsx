import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./cardmain.scss";

function BasicCard({ image, title }) {
  return (
    <Card
      sx={{
        width: 350,
        height: 330,
        marginBottom: 4,
        borderRadius: 5,
        boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.75)",
        transition: "background-color 0.3s",
        "&:hover": {
          // backgroundColor: "yellow",
          backgroundColor: "#0AB7CC",
        },
      }}
    >
      <CardContent style={{ paddingLeft: "40px" }}>
        {image && (
          <img src={image} alt="Word of the Day" className="img-wrapper " />
        )}

        <hr
          className="hr-line"
          //   style={{
          //     marginRight: "20px",
          //     backgroundColor: " yellow",
          //     color: " yellow",
          //     height: "5px ",
          //     boxShadow: " none",
          //     borderStyle: "none",
          //   }}
        />

        <Typography variant="h5" className="title-container">
          <b>{title}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BasicCard;
