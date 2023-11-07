from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from LSI_From_PDF import from_pdf

app = Flask(__name__)
CORS(app)

# Set your OpenAI API key as an environment variable
os.environ["OPENAI_API_KEY"] = "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"


@app.route("/api/extract_legal_sections_pdf", methods=["POST"])
def extract_legal_sections_pdf_api():
    # try:
    # Assuming the user provides a PDF file using the "file" field in a form-data POST request
    pdf_file = request.files["file"]

    # Save the PDF file to a temporary location
    pdf_file_path = (
        "/home/anand.naik/PB_Projects/Statute Identification/filesfolder/temp.pdf"
    )

    pdf_file.save(pdf_file_path)

    # Call the from_pdf function to extract legal sections
    result = from_pdf(pdf_file_path)

    # Remove the temporary PDF file
    os.remove(pdf_file_path)

    return jsonify({"result": result})
    # except Exception as e:
    # return jsonify({"error": str(e)})


if __name__ == "__main__":
    # Run Flask app on port 5000
    app.run(debug=True, port=5000)
