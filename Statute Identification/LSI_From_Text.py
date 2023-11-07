# # Imports
# import openai
# from langchain.llms import OpenAI
# from langchain.prompts import PromptTemplate
# from langchain.chains.llm import LLMChain
# from langchain.chat_models import ChatOpenAI
# from langchain.prompts import ChatPromptTemplate
# from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
# import json
# from glob import glob
# from PyPDF2 import PdfReader
# from langchain.document_loaders import PyPDFLoader
# import os

# os.environ["OPENAI_API_KEY"] = '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'

# def extract_legal_sections(usr_input1):
#     llm = OpenAI(temperature=0)

#     template = """
#         You are an attorney.
#         you will be given a text and from that text you have extract Legal sections.
#         Only extract the section and do not make up or lie about the section.
#         In this context, section refers to legal sections of the law, such as the statutes, regulations, and other laws so keep that in mind.
#         Print the output only once "Predictions" and value format. If Sections are not mentioned then say so.

#         Input: {usr_input}
#     """
#     entity_extraction_prompt = PromptTemplate.from_template(template=template)
#     # print("Prompt Length",len(entity_extraction_prompt))
#     entity_extraction_chain = LLMChain(
#         llm=llm,
#         prompt=entity_extraction_prompt,
#         verbose=False
#     )

#     return entity_extraction_chain.run(usr_input1)

# def from_text(textip):
#     prediction = (extract_legal_sections(textip))
#     prediction=prediction.replace("Predictions:","")
#     return prediction



# # if __name__ == '__main__':
# #     paragraph = """
# #     Case Description:
# #     1 07.08.2019 76 sdas Allowed C.R.M. 7154 of 2019 In Re:- An application for anticipatory
# #     bail under Section 438 of the Code of Criminal Procedure filed on 05.08.2019 in connection
# #     with Baduria Police Station Case No. 506 of 2018 dated 02.12.2018 under Sections
# #     448/323/324/308/354B/506/34 of the Indian Penal Code.
# #     Accordingly, we direct that in the event of arrest the petitioner shall be released on bail upon
# #     furnishing a bond of Rs.10,000/-, with two sureties of like amount each, to the satisfaction of
# #     the arresting officer and also be subject to the conditions as laid down under Section 438(2)
# #     of the Code of Criminal Procedure, 1973 and on further condition that the petitioner shall
# #     appear before the court below and pray for regular bail within four weeks from date.
# #     This application for anticipatory bail is, thus, allowed.
# #     (Manojit Mandal, J.) (Joymalya Bagchi, J.)
# #     """

# #     from_text(paragraph)
    

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

def split_text_into_chunks(text, chunk_size=4000):
    chunks = [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]
    return chunks

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

    # Split text into chunks
    text_chunks = split_text_into_chunks(usr_input1)

    # Process each chunk separately
    predictions = []
    for chunk in text_chunks:
        entity_extraction_chain = LLMChain(
            llm=llm,
            prompt=entity_extraction_prompt,
            verbose=False
        )
        prediction = entity_extraction_chain.run(chunk)
        predictions.append(prediction)

    # Combine the results if needed
    combined_result = "\n".join(predictions)
    return combined_result

def from_text(textip):
    prediction = extract_legal_sections(textip)
    prediction = prediction.replace("Predictions:", "")
    return prediction


# if __name__ == '__main__':
#     paragraph = """
#     Case Description:
#     1 07.08.2019 76 sdas Allowed C.R.M. 7154 of 2019 In Re:- An application for anticipatory
#     bail under Section 438 of the Code of Criminal Procedure filed on 05.08.2019 in connection
#     with Baduria Police Station Case No. 506 of 2018 dated 02.12.2018 under Sections
#     448/323/324/308/354B/506/34 of the Indian Penal Code.
#     Accordingly, we direct that in the event of arrest the petitioner shall be released on bail upon
#     furnishing a bond of Rs.10,000/-, with two sureties of like amount each, to the satisfaction of
#     the arresting officer and also be subject to the conditions as laid down under Section 438(2)
#     of the Code of Criminal Procedure, 1973 and on further condition that the petitioner shall
#     appear before the court below and pray for regular bail within four weeks from date.
#     This application for anticipatory bail is, thus, allowed.
#     (Manojit Mandal, J.) (Joymalya Bagchi, J.)
#     """

#     from_text(paragraph)
