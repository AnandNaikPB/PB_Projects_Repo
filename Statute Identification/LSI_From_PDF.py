# Imports
import openai
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains.llm import LLMChain
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
import json
from glob import glob
from PyPDF2 import PdfReader
from langchain.document_loaders import PyPDFLoader
import os

os.environ["OPENAI_API_KEY"] = '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'

def extract_legal_sections(usr_input1):
    llm = OpenAI(temperature=0)

    template = """
        You are an attorney.
        you will be given a text and from that text you have extract Legal sections.
        Only extract the section and do not make up or lie about the section.
        In this context, section refers to legal sections of the law, such as the statutes, regulations, and other laws so keep that in mind.
        Print the output only once "Predictions" and value format. If Sections are not mentioned then say so.

        Input: {usr_input}
    """
    entity_extraction_prompt = PromptTemplate.from_template(template=template)
    # print("Prompt Length",len(entity_extraction_prompt))
    entity_extraction_chain = LLMChain(
        llm=llm,
        prompt=entity_extraction_prompt,
        verbose=False
    )

    return entity_extraction_chain.run(usr_input1)

def from_pdf(path):
    # path = '/home/anand.naik/PB_Projects/Statute Identification/Case1.pdf'
    loader = PyPDFLoader(path)
    pages = loader.load()
    prediction = (extract_legal_sections(pages))
    prediction = prediction.replace("Predictions:", "")
    return prediction

if __name__ == '__main__':
    from_pdf('/home/anand.naik/PB_Projects/Statute Identification/Dcit_Central_Circle_2_4_vs_Shri_Jateen_Madanlal_Gupta_on_2_February_2021.PDF')

    
