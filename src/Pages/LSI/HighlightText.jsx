import React from "react";

const HighlightText = ({ query, jsonCategories }) => {
  // Check if the query variable is undefined
  if (!query) {
    return null;
  }

  // Split the query into sentences
  const sentences = query.split(/[.?!](?=\s|$)/);

  // Highlight the sentences
  const highlighted = sentences.map((sentence) => {
    const trimmedSentence = sentence.trim();

    // Check if the sentence matches any key in the JSON data
    const category = jsonCategories[trimmedSentence];

    // Assign color based on the category
    const backgroundColor =
      category === "Facts"
        ? "blue"
        : category === "Ruling of Lower Court"
        ? "green"
        : category === "Precedent"
        ? "red"
        : category === "Statute"
        ? "purple"
        : category === "Ratio of decision"
        ? "orange"
        : category === "Argument"
        ? "brown"
        : category === "Ruling of Present Court"
        ? "yellow"
        : "transperent";

    return (
      <span
        key={sentence}
        style={{
          backgroundColor,
          borderRadius: "10px",
          lineHeight: "2.5",
          padding: "0.5vw 0.5vw 0.5vw 0.5vw",
        }}
      >
        {`${sentence}`}
        {sentence && (
          <span
            style={{ color: "white", fontWeight: "bold" }}
          >{` ${category}`}</span>
        )}
      </span>
    );
  });

  return <div>{highlighted}</div>;
};

export default HighlightText;


