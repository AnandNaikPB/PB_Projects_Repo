from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from LSI_From_Text import from_text
import PyPDF2

# Your existing code for extract_legal_sections and from_text functions

app = Flask(__name__)
CORS(app)


@app.route("/api/extract_legal_sections_text", methods=["POST"])
def extract_legal_sections_api():
    try:
        user_input = request.json["text"]
        result = from_text(user_input)
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/api/extract_legal_sections_pdf", methods=["POST"])
def extract_legal_sections_pdf_api():
    try:
        # Assuming the user provides a PDF file using the "file" field in a form-data POST request
        pdf_file = request.files["file"]

        # Save the PDF file to a temporary location
        pdf_file_path = (
            "/home/anand.naik/PB_Projects/Statute Identification/filesfolder/temp.pdf"
        )

        pdf_file.save(pdf_file_path)

        # Extract the content of the PDF file
        with open(pdf_file_path, "rb") as f:
            pdf_reader = PyPDF2.PdfReader(f)
            pdf_content = pdf_reader.getPage(0).extractText()

        # Call the from_text function to extract legal sections
        result = from_text(pdf_content)

        # Remove the temporary PDF file
        os.remove(pdf_file_path)

        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/api/fetch_pdf_content", methods=["POST"])
def fetch_pdf_content():

    # Get the PDF file from the request
    pdf_file = request.form["pdf_file"]

    # Read the PDF file
    with open(pdf_file.filename, "rb") as f:
        pdf_reader = PyPDF2.PdfReader(f)
        pdf_content = pdf_reader.getPage(0).extractText()

    # Return the PDF content as JSON
    return jsonify({"pdf_content": pdf_content})


if __name__ == "__main__":
    # Set your OpenAI API key as an environment variable
    os.environ["OPENAI_API_KEY"] = "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"

    # Run Flask app on port 5001
    app.run(debug=True, port=5001)
