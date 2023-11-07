import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./uploadDoc.scss";
import Button from "@mui/material/Button";
import { pdfjs } from "react-pdf";
import apiClient, { setHeader } from "../../utils/apiClient";

const API_CONFIG = {
  legalStatutesIdentification: {
    method: "POST",
    url: "extract_legal_sections_text",
    data: {},
  },
  sematicSegmentaion: {
    method: "POST",
    url: "extract_semantic_segmentation",
    data: {},
  },
  summary: {
    method: "POST",
    url: "extract_summary",
    data: {},
  },
};

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const UploadDoc = ({ isCourtJudgementTrue }) => {
  // const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [preview, setPreview] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [LSI, setLSI] = useState("");
  const [summary, setSummary] = useState("");
  const [SemanticSegmentationPreview, setSemanticSegmentationPreview] =
    useState(false);

  // const iconStyle = { fontSize: "20px", cursor: "pointer" };

  const SubmitbuttonStyles = {
    backgroundColor: "#153359",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "white",
    },
    borderRadius: "0.5vw",
    boxShadow: "none",
    width: "14vw",
    height: "3.125vw",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    fontSize: "1vw",
  };

  const PreviewClearbuttonStyles = {
    backgroundColor: "#153359",
    color: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "white",
    },
    borderRadius: "0.5vw",
    boxShadow: "none",
    width: "14vw",
    height: "3.125vw",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    fontSize: "1vw",
  };

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;

    setQuery(newQuery);
  };
  // console.log("query", query);

  var bodyFormData = new FormData();
  bodyFormData.append("text", query);

  const handlePreview = () => {
    const sentences = query.split(/[.?!](?=\s|$)/);

    const filteredSentences = sentences.filter(
      (sentence) => sentence.trim() !== ""
    );

    // Merge paragraphs into a single paragraph
    const mergedQuery = filteredSentences.join(" ");

    setPreview(mergedQuery);

    console.log("bodyFormData", bodyFormData);
    const apiPayload = { ...API_CONFIG.legalStatutesIdentification };
    apiPayload.data = bodyFormData;
    console.log("payload", apiPayload);
    setHeader(sessionStorage.getItem("jwtToken"));
    apiClient(apiPayload)
      .then((res) => {
        console.log("/////", res);
        setLSI(res?.data?.result);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("TOKEN",sessionStorage.getItem("jwtToken"));
    setSemanticSegmentationPreview(true);
  };

  const summaryHandler = () => {
    const apiPayload = { ...API_CONFIG.summary };
    apiPayload.data = bodyFormData;
    setHeader(sessionStorage.getItem("jwtToken"));
    apiClient(apiPayload)
      .then((res) => {
        setSummary(res?.data?.result);
      })
      .catch((error) => {
        console.log("Error in summary API call:", error);
      });
  };

  const semanticSegmentationHandler = () => {
    const apiPayload = { ...API_CONFIG.sematicSegmentaion };
    apiPayload.data = bodyFormData;
    setHeader(sessionStorage.getItem("jwtToken"));
    apiClient(apiPayload)
      .then((res) => {
        setSemanticSegmentationPreview(res?.data);
      })
      .catch((error) => {
        console.log("Error in semantic segmentation api call : ", error);
      });
  };

  const handleClearPreview = () => {
    setPreview("");
    setLSI("");
    setQuery("");
    setPdfFile(null);
    setSummary("");
    setSemanticSegmentationPreview("");
  };

  const handleAllClicks = () => {
    handlePreview();
    summaryHandler();
    semanticSegmentationHandler();
  };

  const handleSemanticSegmentation = () => {
    const categories = SemanticSegmentationPreview?.result || [];

    const extractedData = categories.map((obj, index) => {
      const sentence = Object.keys(obj)[0].replace(/\d+\.\n\n/, "");
      const category = Object.values(obj)[0];

      // Define background colors based on categories
      const backgroundColor =
        category === "Facts"
          ? "#f79458"
          : category === "Ruling of Lower Court"
          ? "#f8837d"
          : category === "Precedent"
          ? "#f3f989"
          : category === "Statutes"
          ? "#b5f69e"
          : category === "Ratio of Decision"
          ? "#72f4dc"
          : category === "Arguments"
          ? "#6dcff2"
          : category === "Ruling of Present Court"
          ? "#d7b4f0"
          : "transparent";

      const isMatch = query
        .toLowerCase()
        .split(". ")
        .some((userSentence) => sentence.toLowerCase().includes(userSentence));
      // console.log(`match ${userSentence}`);
      console.log(
        /*  "query lowercase: " + query.toLowerCase().split(". "), */

        "sentences",
        sentence
      );

      return (
        <span
          key={sentence}
          style={{
            backgroundColor: isMatch ? backgroundColor : "transparent",
            borderRadius: "1vw",
            lineHeight: "2.5",
            padding: "0.5vw",
          }}
        >
          {`${sentence}`}
          {sentence && (
            <span
              style={{
                color: "black",
                fontWeight: "bold",
                backgroundColor: "white",
                borderRadius: "1vw",
                lineHeight: "2.5",
                padding: "0.15vw 0.75vw 0.15vw 0.75vw",
              }}
            >{`${category}`}</span>
          )}
        </span>
      );
    });

    return <div className="semantic-segmentation-preview">{extractedData}</div>;
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const data = await readPDF(file);
        setQuery(data);
        setPreview(data);
      } catch (error) {
        console.error("Error reading PDF:", error);
      }
    }
  };

  const readPDF = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const pdfData = new Uint8Array(e.target.result);
        pdfjs
          .getDocument({ data: pdfData })
          .promise.then((pdf) => {
            const numPages = pdf.numPages;
            let text = "";

            const getPageText = (pageNum) => {
              return pdf.getPage(pageNum).then((page) => {
                return page.getTextContent().then((textContent) => {
                  const pageText = textContent.items
                    .map((item) => item.str)
                    .join(" ");
                  text += pageText;
                });
              });
            };

            const promises = [];
            for (let i = 1; i <= numPages; i++) {
              promises.push(getPageText(i));
            }

            Promise.all(promises)
              .then(() => {
                resolve(text);
              })
              .catch((err) => {
                reject(err);
              });
          })
          .catch((err) => {
            reject(err);
          });
      };

      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <div className="indianlaw-container">
      <div className="input-preview-container">
        <div className="input-container">
          <div className="input-preview-title">
            <span> Enter Your Query </span>
          </div>
          <input
            type="file"
            class="custom-file-input"
            accept=".txt, .pdf"
            onChange={onFileChange}
          />
          <p>(Or)</p>
          <div className="add-query">
            <textarea
              placeholder="Write/Paste your Case Query"
              value={query}
              onChange={handleQueryChange}
              className="paster"
            />
          </div>
          <div className="btn-sub">
            <Button
              style={SubmitbuttonStyles}
              variant="contained"
              onClick={handleAllClicks}
            >
              Submit
            </Button>
          </div>
        </div>

        <div className="preview-container">
          <div className="input-preview-title">
            <span> Preview your Content </span>
          </div>
          <div
            className="prev-content"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 0 1vw 0",
              height: "7.5vw",
            }}
          >
            {!pdfFile && preview && (
              <div className="text-prev" placeholder="Here is your Preview">
                {preview}
              </div>
            )}
          </div>
          <div className="clear-button">
            <Button
              style={PreviewClearbuttonStyles}
              onClick={handleClearPreview}
            >
              Clear Preview
            </Button>
          </div>
        </div>
      </div>

      <div className="results-container">
        <div className="lsi-container">
          <div className="result-title" style={{ paddingTop: "1vw" }}>
            <span>Legal Statute Identification</span>
          </div>
          <div className="notes">
            <ul>
              {LSI &&
                LSI.split(". ").map((item, index) => (
                  <li key={index}>{item.replace(".", "").trim()}</li>
                ))}
            </ul>
          </div>
        </div>

        <div className="semantic-segmentation-container">
          <div className="result-title" style={{ paddingTop: "1vw" }}>
            <span> Semantic Segmentation </span>
          </div>
          <div className="prev-content">
            {SemanticSegmentationPreview && handleSemanticSegmentation()}
          </div>
        </div>

        <div className="summary-container">
          <div className="result-title" style={{ paddingTop: "1vw" }}>
            <span> Summary </span>
          </div>
          <div className="prev-content">
            {summary && (
              <div className="prev-item" placeholder="Summary">
                {summary}
              </div>
            )}
          </div>
        </div>

        <div className="court-judgement-container">
          <div className="result-title" style={{ paddingTop: "1vw" }}>
            <span> Court Judgement Prediction : </span>

            <span
              style={{ color: isCourtJudgementTrue === true ? "green" : "red" }}
            >
              {isCourtJudgementTrue === true
                ? "Accepted "
                : isCourtJudgementTrue === false
                ? "Not Accepted "
                : "NA "}
            </span>
            <span>
              {isCourtJudgementTrue === true ? (
                <span
                  style={{
                    color: "green",
                    border: "1px solid green",
                    borderRadius: "1vw",
                  }}
                >
                  ✔
                </span>
              ) : isCourtJudgementTrue === false ? (
                <span
                  style={{
                    color: "red",
                    border: "1px solid red",
                    borderRadius: "1vw",
                  }}
                >
                  ✘
                </span>
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDoc;
