// // import React, { useState, useEffect, useCallback } from "react";
// import "./bioBot.scss";

// import { Button, Col, Input, Row, Spin } from "antd";

// import { useSpeechSynthesis } from "react-speech-kit";

// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import ScrollableFeed from "react-scrollable-feed";

// import sendIcon from "../../assets/input-send-btn.svg";

// import History from "./History";

// // import { useDispatch } from "react-redux";
// import Summary from "./Summary";
// // import axios from "axios";
// // import { useLocation, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
// import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
// import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
// import speaking from "../../assets/speak_wave.gif";
// import { TextField } from "@mui/material";

// let conversation = [];

// const TaxbotChat = () => {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const dispatch = useDispatch();

// //   const urlParams = new URLSearchParams(location.search);

// //   const [text, setText] = useState();
// //   const [summary, setSummary] = useState("");

// //   const [open, setOpen] = useState(false);

// //   const [typing, setTyping] = useState(false);
// //   const [updatedText, setUpdatedText] = useState([]);
// //   const [updatedResp, setUpdatedResp] = useState([
// //     {
// //       role: "assistant",
// //       content: `I’m BioBot, your creative and helpful collaborator. I am trained on Medical Guidelines and FDA drug labels. \n\n How can I help you today?`,
// //     },
// //   ]);

// //   const { speak, cancel } = useSpeechSynthesis();

// //   let isTyping = false;
// //   const [transcription, setTranscription] = useState("");
// //   const [isRecording, setIsRecording] = useState(false);
// //   const [audioStream, setAudioStream] = useState(null);
// //   const [loading, setLoading] = useState("");
// //   const [count, setCount] = useState(0);
// //   const [isPaused, setIsPaused] = useState(true);
// //   const [pauseIndex, setPauseIndex] = useState(-1);
// //   const [chatID, setChatID] = useState(urlParams.get("chatID") || "");
// //   const [chatHistory, setChatHistory] = useState([]);
// //   const [oldMsgs, setOldMsgs] = useState([]);

// //   const token = process.env.REACT_APP_BIO_BOT_TOKEN;
// //   const config = {
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //       // Access-Control-Allow-Origin: *
// //     },
// //   };

// //   const handleSubmit = async (e, endpoint) => {
// //     if (e) {
// //       if (e.key === "Enter" && !e.shiftKey) {
// //         e.preventDefault(); // Prevent the default line break behavior for simple Enter key press
// //       }

// //       if (e.key !== "Enter") {
// //         return;
// //       }

// //       if (e.key === "Enter" && e.shiftKey) {
// //         return;
// //       }
// //     }

// //     if (text === "" && endpoint !== "summerize") {
// //       return;
// //     }

// //     setLoading(endpoint);
// //     if (text !== "") {
// //       setUpdatedText({ role: "user", content: text });
// //       if (oldMsgs.length > 0) {
// //         conversation = [...oldMsgs, { role: "user", content: text }];
// //       } else {
// //         conversation = [
// //           ...updatedResp.slice(1),
// //           { role: "user", content: text },
// //         ];
// //       }
// //     }
// //     setOldMsgs([]);
// //     const bodyParameters = { chatID: chatID, messages: conversation };

// //     setTyping(true);

// //     axios
// //       .post(
// //         `${process.env.REACT_APP_BIO_BOT_BACKEND_URL}/${endpoint}`,
// //         bodyParameters,
// //         config
// //       )
// //       .then(function (response) {
// //         setLoading(null);

// //         if (urlParams.get("chatID") !== response?.data?.chatID) {
// //           urlParams.set("chatID", response?.data?.chatID);
// //           navigate(`${location.pathname}?${urlParams.toString()}`);
// //           // getHistoryCardsData();
// //         }

// //         setChatID(response?.data?.chatID);

// //         conversation = [
// //           ...conversation,
// //           {
// //             role: "assistant",
// //             content: response?.data?.choices[0]?.message?.content,
// //           },
// //         ];

// //         if (endpoint === "summerize") {
// //           setSummary(response?.data?.choices[0]?.message?.content);
// //           setOpen(true);
// //         } else {
// //           setUpdatedText({
// //             role: "assistant",
// //             content: response?.data?.choices[0]?.message?.content,
// //           });
// //         }
// //         setTyping(false);
// //       })
// //       .catch(function (error) {
// //         console.log(error);
// //         setLoading(null);

// //         setUpdatedText({
// //           role: "assistant",
// //           content:
// //             "Sorry, the server is currently under maintenance. Please try again later.",
// //         });
// //         setTyping(false);
// //       });

// //     setText("");
// //   };

// //   const getHistoryCardsData = (chatId) => {
// //     const bodyParameters = {};
// //     setChatID(chatId);
// //     axios
// //       .get(
// //         `${process.env.REACT_APP_BIO_BOT_BACKEND_URL}/${"gets"}`,
// //         bodyParameters,
// //         config
// //       )
// //       .then(function (response) {
// //         setLoading(false);
// //         setChatHistory(response.data.chats);
// //       })
// //       .catch(function (error) {
// //         console.log(error);
// //       });
// //   };

// //   const {
// //     transcript,
// //     listening,
// //     resetTranscript,
// //     browserSupportsSpeechRecognition,
// //   } = useSpeechRecognition();

// //   useEffect(() => {
// //     setUpdatedResp([...updatedResp, updatedText]);
// //   }, [updatedText]);

// //   useEffect(() => {
// //     if (audioStream) {
// //       audioStream.getTracks().forEach((track) => track.stop());
// //     }
// //   }, [!listening]);

// //   const handlePlay = (type, idx, content) => {
// //     setPauseIndex(idx);

// //     if (type === "play") {
// //       speak({
// //         text: content,
// //         // voice: "Google UK English Male",
// //         rate: 0.9,
// //         pitch: 1,
// //       });
// //       setIsPaused(true);
// //     } else {
// //       setIsPaused(false);
// //       cancel();
// //     }
// //   };

// //   const actionHandler = {
// //     onSearch: (searchInfo, searchUserJourney) => {
// //       searchUserJourney.setSuccess();
// //       return searchUserJourney.AppStates.SEARCH_RESULTS;
// //     },

// //     onManageOrder: (orderInfo, orderManagementUserJourney) => {
// //       orderManagementUserJourney.setViewSuccess();
// //       return orderManagementUserJourney.AppStates.VIEW_ORDER;
// //     },
// //   };

// //   if (!browserSupportsSpeechRecognition) {
// //     return <span>Browser doesn't support speech recognition.</span>;
// //   }

// //   const show = async () => {};

// //   let mediaRecorder;
// //   const handleChange = (event) => {
// //     setText(event?.target?.value);
// //   };
// //   const handleVoiceSpeech = async () => {
// //     SpeechRecognition.startListening();
// //     setIsRecording(true);

// //     try {
// //       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
// //       setAudioStream(stream);

// //       mediaRecorder = new MediaRecorder(stream);

// //       mediaRecorder.ondataavailable = async (event) => {
// //         if (event.data.size > 0) {
// //           const audioBlob = new Blob([event.data], { type: "audio/mp3" });
// //           let token =
// //             "Bearer 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";

// //           let headers = {
// //             Authorization: token,
// //             "Content-Type": "multipart/form-data",
// //           };

// //           const formData = new FormData();
// //           formData.append("audio", audioBlob, "audio.mp3");
// //           let data = {
// //             file: audioBlob,
// //             model: "whisper-1",
// //             language: "en",
// //           };
// //           const response = await axios.post(
// //             "https://api.openai.com/v1/audio/transcriptions",
// //             // formData,
// //             data,
// //             { headers }
// //             // {
// //             //   headers: {
// //             //     "Authorization": `Bearer ${token}`,
// //             //     "Content-Type": "multipart/form-data",
// //             //   },
// //             // }
// //           );

// //           setText(response.data.text);
// //         }
// //       };

// //       mediaRecorder.start();
// //     } catch (error) {
// //       console.error("Error starting recording:", error);
// //       setIsRecording(false);
// //     }
// //   };
// //   const stopRecording = () => {
// //     setIsRecording(false);

// //     if (audioStream) {
// //       audioStream.getTracks().forEach((track) => track.stop());
// //     }
// //   };

//   return (
//     <>
//       <div className="biobot-chat">
//         <Row gutter={32}>
//           <Col
//             xl={6}
//             className="history-box"
//             style={
//               {
//                 // background: "#ffffffcc",
//                 // opacity: "0.2",
//               }
//             }
//           >
//             <History
//               setUpdatedResp={setUpdatedResp}
//               setUpdatedText={setUpdatedText}
//               getHistoryCardsData={getHistoryCardsData}
//               chatHistory={chatHistory}
//               setChatHistory={setChatHistory}
//               setChatID={setChatID}
//               setOldMsgs={setOldMsgs}
//             />
//           </Col>
//           <Col className="chat-box" xl={18}>
//             <div className="quest-ans">
//               <ScrollableFeed className="feed">
//                 {updatedResp !== null &&
//                   updatedResp?.map((ele, idx) =>
//                     ele?.role === "assistant" ? (
//                       <>
//                         <div className="chat-answ">
//                           <div className="answer">
//                             {/* {" "}
//                         {idx !== updatedResp - 1 ? (
//                           <div>
//                             <ReactTypingEffect
//                               speed={40}
//                               eraseSpeed={0}
//                               eraseDelay={10000000000000}
//                               text={ele?.content}
//                               cursor={typingFinished ? "" : "|"}
//                               onComplete={handleTypingFinish}
//                             />
//                           </div>
//                         ) : ( */}
//                             <pre className="ans-pre">{ele?.content}</pre>
//                             {/* )} */}
//                             <div className="play-pause-btn">
//                               {/* {idx > 1 && ( */}
//                               <>
//                                 {isPaused && pauseIndex === idx ? (
//                                   <PauseCircleOutlineIcon
//                                     onClick={() =>
//                                       handlePlay("pause", idx, null)
//                                     }
//                                   />
//                                 ) : (
//                                   <PlayCircleOutlineIcon
//                                     onClick={() =>
//                                       handlePlay("play", idx, ele?.content)
//                                     }
//                                   />
//                                 )}
//                               </>
//                               {/* // )} */}
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     ) : (
//                       <>
//                         {ele?.content !== undefined && (
//                           <div className="chat-quest">
//                             <div className="question">
//                               <pre className="ques-pre">{ele?.content}</pre>
//                             </div>
//                           </div>
//                         )}
//                       </>
//                     )
//                   )}
//               </ScrollableFeed>
//             </div>
//             <div className="search-container">
//               <div className="search-box">
//                 <TextField
//                   className="input-box"
//                   hiddenLabel
//                   multiline
//                 //   value={text}
//                   placeholder="Type your query here "
//                   // label="Text"
//                   // rows={4}
//                   // defaultValue="Normal"
//                   // variant="filled"
//                 //   disabled={typing}
//                 //   onKeyDown={(e) => {
//                 //     handleSubmit(e, "chat");
//                 //   }}
//                 //   onChange={handleChange}
//                 />

//                 {listening ? (
//                   <img src={speaking} alt="speaking" className="speaking"></img>
//                 ) : (
//                   <FontAwesomeIcon
//                     onClick={handleVoiceSpeech}
//                     icon={faMicrophone}
//                     style={{ color: "#153359" }}
//                     className="microphone"
//                   />
//                 )}

//                 {loading === "chat" ? (
//                   <img
//                     style={{ width: "4.5%" }}
//                     src={require("../../assets/loader.gif")}
//                     alt=""
//                   />
//                 ) : (
//                   <img
//                     style={{ cursor: "pointer" }}
//                     src={sendIcon}
//                     alt=""
//                     onClick={(e) => {
//                       handleSubmit(null, "chat");
//                     }}
//                   />
//                 )}
//               </div>

//               <Button
//                 disabled={conversation.length < 2}
//                 loading={loading === "summerize"}
//                 className="summaryBtn"
//                 onClick={(e) => handleSubmit(null, "summerize")}
//               >
//                 {"Summary"}
//               </Button>
//             </div>
//           </Col>
//         </Row>
//       </div>

//       <Summary open={open} setOpen={setOpen} data={summary}></Summary>
//     </>
//   );
// };

// export default TaxbotChat;
