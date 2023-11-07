import React, { useState } from "react";
import "./generateNote.scss";
import { Button, IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const NoteGeneratedHeader = () => {
  return (
    <div className="note-generated-header">
      <p>Research Note</p>
      <div>
        <IconButton className="generate-icons">
          <ContentCopyIcon />
        </IconButton>
        <IconButton className="generate-icons">
          <FileDownloadOutlinedIcon />
        </IconButton>
        <IconButton className="generate-icons">
          <MessageOutlinedIcon />
        </IconButton>
        <Button variant="contained" className="note-button">
          {" "}
          Add to library
        </Button>
      </div>
    </div>
  );
};

const NoteGeneratedContent = () => {
  return (
    <div className="note-generated">
      <div className="note-generated-title">Lorem Ipsum</div>
      <div className="note-generated-body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sint,
        architecto commodi, nihil, voluptate dolor saepe iste nisi culpa eius
        praesentium ratione sapiente pariatur. Earum dolorum perspiciatis rerum?
        Quos nulla ut amet nisi impedit dolore repudiandae error minus vitae
        officiis! Rerum, ullam. Ratione magnam laboriosam harum libero
        voluptatum accusamus ab?
      </div>
    </div>
  );
};

const NoteGenerated = () => {
  return (
    <>
      <NoteGeneratedHeader />
      <NoteGeneratedContent />
    </>
  );
};

const GenerateNote = () => {
  const [showNote, setShowNote] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        className="note-button"
        onClick={() => setShowNote(true)}
      >
        Generate Research Note
      </Button>
      {showNote ? <NoteGenerated /> : <></>}
    </>
  );
};

export default GenerateNote;
