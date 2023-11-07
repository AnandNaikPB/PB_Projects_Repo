import React, { useState, useEffect } from "react"; // , { , useState }
import "./research.scss";
// import GenerateNote from "./GenrateNote";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Grid,
  InputBase,
  ListItemText,
  Typography,
  Paper,
  MenuItem,
  Card,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";

// import { MenuItem } from "@mui/base";

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 0,
  marginTop: 0,
  width: "100%",
  borderBottom: `1px solid "#eaecef"`,
  border: `1px solid #000000`,
  "& input ": {
    borderRadius: 0,
    backgroundColor: "#fff",
    padding: 8,
    border: `1px solid "#eaecef"`,
    fontSize: 16,
  },
}));

const Research = () => {
  const [domainLabels, setDomainLabels] = useState([]);
  const [topicLabels, setTopicLabels] = useState([]);
  const [dataSetLabels, setDataSetLabels] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const [valueDomain, setValueDomain] = useState([]);
  const [valueTopic, setValueTopic] = useState([]);
  const [valueDataSet, setValueDataSet] = useState([]);

  useEffect(() => {
    setDomainLabels(["Direct Tax", "Indirect Tax", "Transfer Pricing"]);
    setTopicLabels(["Topic1", "Topic2", "Topic3"]);
    setDataSetLabels(["KNS", "Case Laws", "Submissions"]);
  }, []);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeDomain = (event, domain) => {
    if (valueDomain.includes(domain)) {
      const newarray = valueDomain.filter((item) => item !== domain);
      setValueDomain(newarray);
    } else {
      setValueDomain((prevState) => [...prevState, domain]);
    }
  };
  console.log("value Domain values : ", valueDomain);

  const handleChangeTopic = (event, topic) => {
    if (valueTopic.includes(topic)) {
      const newarray = valueTopic.filter((item) => item === topic);
      setValueTopic(newarray);
    } else {
      const newarray = [...valueTopic, topic];
      setValueTopic(newarray);
    }
  };
  console.log("value topic : ", valueTopic);

  const domainSearch = (e) => {
    if (e.target.value === "") {
      setDomainLabels(["label1", "label2", "label3", "label4", "label5"]);
    } else {
      const newArray = domainLabels.filter((item) =>
        item.toLowerCase().includes(e.target.value)
      );
      setDomainLabels(newArray);
    }
  };

  const topicSearch = (e) => {
    if (e.target.value === "") {
      setTopicLabels(["Topic1", "Topic2", "Topic3", "Topic4", "Topic5"]);
    } else {
      const newArray = topicLabels.filter((item) =>
        item.toLowerCase().includes(e.target.value)
      );
      setTopicLabels(newArray);
    }
  };

  const handleChangeDataSet = (event, dataset) => {
    if (valueDataSet.includes(dataset)) {
      const newarray = valueDataSet.filter((item) => item !== dataset);
      setValueDataSet(newarray);
    } else {
      setValueDataSet((prevState) => [...prevState, dataset]);
    }
  };

  console.log("data set values :", valueDataSet);

  const [displaySearch, setDispalySearch] = useState(false);
  console.log(displaySearch);

  const onSearch = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    setDispalySearch(true);
  };
  console.log(valueDataSet);

  const datasetSearch = (e) => {
    if (e.target.value === "") {
      setDomainLabels([
        "DataSet1",
        "DataSet2",
        "DataSet3",
        "DataSet4",
        "Dataset5",
      ]);
    } else {
      const newArray = dataSetLabels.filter((item) =>
        item.toLowerCase().includes(e.target.value)
      );
      setDataSetLabels(newArray);
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className=" research-container">
        <Grid container spacing={2} className="research-grid-container">
          <Grid item xs={2} className="filter-component">
            <Box className="filter-title">
              <h2>Filter</h2>
            </Box>
            <Box>
              <Accordion
                className="accordion-container"
                expanded={expanded === "panel1"}
                onChange={handleChangeAccordion("panel1")}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ marginTop: 0 }}>Domain</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  <StyledInput
                    autoFocus
                    placeholder="Filter labels"
                    onChange={(e) => domainSearch(e)}
                  ></StyledInput>
                  <div className="accordion-options">
                    {domainLabels.map((domain) => (
                      <MenuItem
                        className="menu-item"
                        key={domain}
                        value={domain}
                        onClick={(e) => handleChangeDomain(e, domain)}
                      >
                        <ListItemText primary={domain}></ListItemText>
                        <Checkbox
                          checked={valueDomain.includes(domain)}
                          sx={{
                            color: "#000000",
                            "&.Mui-checked": {
                              color: "#000000",
                            },
                          }}
                        ></Checkbox>
                      </MenuItem>
                    ))}{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="accordion-container"
                expanded={expanded === "panel2"}
                onChange={handleChangeAccordion("panel2")}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ marginTop: 0 }}>Topic</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  <StyledInput
                    autoFocus
                    placeholder="Filter labels"
                    onChange={(e) => topicSearch(e)}
                  ></StyledInput>
                  <div className="accordion-options">
                    {topicLabels.map((topic) => (
                      <MenuItem
                        className="menu-item"
                        key={topic}
                        value={topic}
                        onClick={(e) => handleChangeTopic(e, topic)}
                      >
                        <ListItemText primary={topic}></ListItemText>
                        <Checkbox
                          checked={valueTopic.includes(topic)}
                          sx={{
                            color: "#000000",
                            "&.Mui-checked": {
                              color: "#000000",
                            },
                          }}
                        ></Checkbox>
                      </MenuItem>
                    ))}{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="accordion-container"
                expanded={expanded === "panel3"}
                onChange={handleChangeAccordion("panel3")}
              >
                <AccordionSummary
                  className="accordion-summary"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ marginTop: 0 }}>DataSet</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordion-details">
                  {" "}
                  <StyledInput
                    autoFocus
                    placeholder="Filter labels"
                    onChange={(e) => datasetSearch(e)}
                  ></StyledInput>
                  <div className="accordion-options">
                    {dataSetLabels.map((dataset) => (
                      <MenuItem
                        className="menu-item"
                        key={dataset}
                        value={dataset}
                        onClick={(e) => handleChangeDataSet(e, dataset)}
                      >
                        <ListItemText primary={dataset}></ListItemText>{" "}
                        <Checkbox
                          checked={valueDataSet.includes(dataset)}
                          sx={{
                            color: "#000000",
                            "&.Mui-checked": {
                              color: "#000000",
                            },
                          }}
                        ></Checkbox>
                      </MenuItem>
                    ))}{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item xs={10} className="search-component">
            <h1>
              <span>Get </span>&nbsp;help with research
            </h1>
            <Box
              component="form"
              className="searchbar-container"
              onSubmit={(e) => onSearch(e)}
            >
              <Paper className="search-input-wraper">
                <InputBase className="search-input" placeholder="Search here" />
              </Paper>
              <Button type="submit" className="search-btn">
                Search
              </Button>
            </Box>
            <div className="outer-div">
              <div className="results-container">
                <div className="search-heading">
                  <h2>Search Results</h2>
                </div>
                <div className="cards-container">
                  <Card className="search-cards">
                    <div className="check-container">
                      <Checkbox></Checkbox>
                      <span className="upper-txt" style={{ color: "#153359" }}>
                        Indirect Tax | ISD vs Charge | KNS
                      </span>
                    </div>
                    <div className="case-heading " style={{ color: "#153359" }}>
                      Principal Commissioner of Income-tax vs. Ansal Properties
                      a...
                    </div>
                    <div className="case-details">
                      <p>
                        Lörem ipsum jåktig innovationshöjd de possa
                        klimatångest. Seliga fajyng divis pönat. Zorra tigt.
                        Okare serat än arade: därför att kostymrasist. Nigt
                        tåbegt sevaskade heteronas. Ninat dessade sespen. Du kan
                        vara drabbad.
                      </p>
                    </div>
                  </Card>
                  <Card className="search-cards">
                    <div className="check-container">
                      <Checkbox></Checkbox>
                      <span className="upper-txt" style={{ color: "#00923E" }}>
                        Indirect Tax | ISD vs Charge | KNS
                      </span>
                    </div>
                    <div className="case-heading " style={{ color: "#00923E" }}>
                      Cornerstone Property Investments (P.) Ltd. vs. Income-tax
                      Of...
                    </div>
                    <div className="case-details">
                      <p>
                        Lörem ipsum jåktig innovationshöjd de possa
                        klimatångest. Seliga fajyng divis pönat. Zorra tigt.
                        Okare serat än arade: därför att kostymrasist. Nigt
                        tåbegt sevaskade heteronas. Ninat dessade sespen. Du kan
                        vara drabbad.
                      </p>
                    </div>
                  </Card>
                  <Card className="search-cards">
                    <div className="check-container">
                      <Checkbox></Checkbox>
                      <span className="upper-txt" style={{ color: "#00A3B7" }}>
                        Indirect Tax | ISD vs Charge | KNS
                      </span>
                    </div>
                    <div className="case-heading " style={{ color: "#00A3B7" }}>
                      Cornerstone Property Investments (P.) Ltd. vs. Income-tax
                      Of...
                    </div>
                    <div className="case-details">
                      <p>
                        Lörem ipsum jåktig innovationshöjd de possa
                        klimatångest. Seliga fajyng divis pönat. Zorra tigt.
                        Okare serat än arade: därför att kostymrasist. Nigt
                        tåbegt sevaskade heteronas. Ninat dessade sespen. Du kan
                        vara drabbad.
                      </p>
                    </div>
                  </Card>
                  <Card className="search-cards">
                    <div className="check-container">
                      <Checkbox></Checkbox>
                      <span className="upper-txt" style={{ color: "#153359" }}>
                        Indirect Tax | ISD vs Charge | KNS
                      </span>
                    </div>
                    <div className="case-heading " style={{ color: "#153359" }}>
                      Principal Commissioner of Income-tax vs. Ansal Properties
                      a...
                    </div>
                    <div className="case-details">
                      <p>
                        Lörem ipsum jåktig innovationshöjd de possa
                        klimatångest. Seliga fajyng divis pönat. Zorra tigt.
                        Okare serat än arade: därför att kostymrasist. Nigt
                        tåbegt sevaskade heteronas. Ninat dessade sespen. Du kan
                        vara drabbad.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
              <div className="selected-results-container">
                <span>Selected Results Display:</span>
                <div className="display-bar">
                  <div
                    className="case-law-bar"
                    style={{ background: "#153359" }}
                  >
                    <span className="laws-heading" style={{ color: "white" }}>
                      {" "}
                      Principal Commissioner of Income-tax ..
                    </span>
                    <span>
                      <ClearIcon style={{ color: "white" }} />
                    </span>
                  </div>
                  <div
                    className="case-law-bar"
                    style={{ background: "#00923E" }}
                    // #00A3B7
                  >
                    <span className="laws-heading" style={{ color: "white" }}>
                      {" "}
                      Principal Commissioner of Income-tax ..
                    </span>
                    <span>
                      <ClearIcon style={{ color: "white" }} />
                    </span>
                  </div>
                  <div
                    className="case-law-bar"
                    style={{ background: "#00A3B7" }}
                    // #00A3B7
                  >
                    <span className="laws-heading" style={{ color: "white" }}>
                      {" "}
                      Principal Commissioner of Income-tax ..
                    </span>
                    <span>
                      <ClearIcon style={{ color: "white" }} />
                    </span>
                  </div>
                  <div></div>
                </div>
              </div>
              {/*
            {displaySearch ? <SearchResult /> : <> </>
            {displaySearch ? <div style={{ "width" : "10px", "height":"inherit", "backgroundColor":"black",}}></div> : <></>}  */}
            </div>
          </Grid>
        </Grid>
        {/* {displaySearch ? <GenerateNote /> : <> </>} */}
      </Box>
    </>
  );
};

export default Research;
