import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ipsumParagraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
];

function BasicCard({ image, title }) {
  const randomIndex = Math.floor(Math.random() * ipsumParagraphs.length);
  const randomIpsum = ipsumParagraphs[randomIndex];

  return (
    <Card
      sx={{
        width: 350,
        height: 350,
        // padding: 5,
        marginBottom: 4,
        borderRadius: 5,
        boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.75)",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "yellow",
        },
      }}
    >
      <CardContent>
        {image && (
          <img
            /* style={{height: 50, width: 40}} */ src={image}
            alt="Word of the Day"
          />
        )}
        <Typography variant="h5" component="div">
          <b>{title}</b>
        </Typography>
        <hr style={{ marginRight: "20px" }} />
        <Typography variant="body2">
          <p>{randomIpsum}</p>
        </Typography>
        <Typography variant="h5" component="div">
          <b>{title}</b>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BasicCard;
