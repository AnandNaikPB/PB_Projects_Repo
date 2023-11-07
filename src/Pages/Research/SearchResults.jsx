// import React, {useState, useEffect } from "react";
// import "./searchResults.scss";
//  import { useDispatch, useSelector } from "react-redux";
// import {
// Box,
// Checkbox,
//  Modal,
// // Fade,
// Typography,
// Button,
// // Backdrop,
//  } from "@mui/material";
// import closeIcon from "@mui/icons-material/close";
// import { getDocumentDetailApicall } from "./documentDetailApicall";


//  const SearchResult = (props) => { const [handleModal, setHandleModal] = useState(false);


// const { data: searchData } = useSelector((state) => state.searchData);
// const dispatch = useDispatch(); 19 // const [mapIdToParentId, setMapIdToParentId] = useState({});

// //console.log(mapIdToParentId); //console.log(Object.keys (mapIdToParentId));

// useEffect (() => { let tempobj= {...props.mapIdToParentId }; searchData.data.content.map((x) => {

// tempobj[x.id] = {
// parent_id: x.parent_id,
// text: x.title,
// dataset: x.dataset,
