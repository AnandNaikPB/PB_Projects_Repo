# Imports
import openai
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains.llm import LLMChain
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from glob import glob
from PyPDF2 import PdfReader
from langchain.document_loaders import PyPDFLoader
import os
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.text_splitter import NLTKTextSplitter
import nltk
from pprint import pprint
from langchain.text_splitter import LatexTextSplitter

os.environ["OPENAI_API_KEY"] = "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"


def text_summary(context):
    llm = OpenAI(temperature=0)

    template = """
        Context:{context}

        The provided context contains information about a case law. Please consider a case law as a judgment issued by a court, in which the judge listens to the arguments of the assessee and the assessing officer. The judge takes note of the arguments and rebuttals presented by both parties. After considering all the arguments, the judge delivers a final judgment. In this judgment, the judge either rejects or confirms one of the arguments made by the assessee or the assessing officer or provides their own interpretation.
        
        You are a tax professional assisting legal counsel in preparing for a hearing before the court. Your task is to summarize the provided case law in great detail, considering all technicalities and the arguments discussed in the order.
        
        Please note that the case law may include multiple arguments from both the Assessee and the Assessing Officer. It's important to consider all the arguments of the assessee and assessing officer separately in bullet points. Additionally, keep in mind that the court, in its final verdict, may refer to the arguments of the assessee or assessing officer and either agree or disagree with them. Please incorporate the final arguments of the court for the final verdict in a logical order while addressing the following points:
        
        1. Include the case name, all parties involved, the assessment year, all relevant sections of the Income-tax act, assessment orders, and how they are connected to the case.
        
        2. Provide a detailed account of all the facts presented by both parties.
        
        3. Thoroughly cover all the issues discussed in the case, along with all the arguments provided by both parties. This should include the arguments of the assessee, arguments of the officer, any rebuttals from the assessee, and any rebuttals from the officer.
        
        4. Include all relevant past case laws mentioned in the current case law. Provide the details of each of these past case laws and explain how each of them is related to the present case, addressing each case individually.
        
        5. Ensure that no facts, issues, arguments, or past case laws discussed in the case are overlooked.
        
        6. Provide a comprehensive explanation of all the reasoning provided by the judge as per the Income-tax act, which led to the final conclusion/verdict mentioned in the judgment.
        
        7. Be sure to mention the party in whose favor the judgment was passed.

        8. Output text should be normal text do not generate list.

    """
    summary_prompt = PromptTemplate.from_template(template=template)
    summary_chain = LLMChain(llm=llm, prompt=summary_prompt, verbose=False)

    return summary_chain.run(context)


def txt_summary():
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=600,  # Set your desired chunk size
        chunk_overlap=100,
        separators=[".", "\n"],
        length_function=len,
        is_separator_regex=True,
    )
    chunks = text_splitter.split_text(data)

    results = []

    for chunk in chunks:
        result = text_summary(chunk)
        results.append(result)

    return print(results)


if __name__ == "__main__":
    data = """
        The captioned appeal is filed by the Revenue and the CO is filed by the Assessee against the order of
        the Learned Commissioner of Income Tax (Appeals)- 3 Ahmedabad, [Ld. CIT (A) in short] dated
        20/06/2017 arising in the matter of assessment order passed under s. 143(3) r.w.s. 147 of the
        Income Tax Act, 1961 (here-in-after referred to as "the Act") dated 10/03/2016. The assessee has
        filed ITA no.1932/Ahd/2017 with CO No.133/Ahd/2019 Asstt. Year 2008-09 Cross Objection in the
        Revenue's appeals bearing ITA no. 1932/AHD/2017 for the Assessment Year 2008-2009.
        2. The Revenue has raised the following grounds of appeal:
        1. On the facts and in the circumstances of the case and in law, the Ld.CIT(A) has
        erred in law and/or on facts in deleting the addition of Rs.2,62,33,800/- made on
        account of deemed devident u/s. 2(22)(e) of the I.T. Act, 1961.
        2. On the facts and in the circumstances of the case and in law, the Ld.CIT(A) ought
        to have upheld the order of the A.O.
        3. It is, therefore, prayed that the order of the Ld.CIT(A) be set aside and that of the
        A.O be restored to the above extent.
        3. The only issue raised by the Revenue is that the learned CIT (A) erred in deleting the addition
        made by the AO amounting to 2,62,33,800/- on account of deemed dividend under section
        2(22)(e) of the Act.
        4. Briefly stated facts are that the assessee in the present case is an individual and having income
        from salary, rent, interest and short term capital gain. The assessee, among other companies, is a
        registered shareholder and carrying voting rights not less than 10% in the companies as detailed
        under:
        S. No.
        1
        4.1
        Name of the company
        JP Iscon Pvt. Ltd (Formerly JP Infrastructure Pvt. 22
        Ltd.)
        % of
        M/s JP Infrastructure Pvt. Ltd. in the year under consideration has advanced
        loan amounting for 28,02,234/- and 2,34,31,566/- to Dev Infratrade Pvt. Ltd. and Gujarat mall
        Management Company Pvt. Ltd. respectively. Accordingly, the AO was of the view that such
        transaction of advancing the loan to the companies as ITA no.1932/Ahd/2017 with CO
        No.133/Ahd/2019 Asstt. Year 2008-09 discussed above falls within the parameters of deemed
        dividend as provided under section 2(22)(e) of the Act.
        4.2 However, the assessee contended that there is no accumulated profit in the company namely JP
        Infrastructure Pvt. Ltd. at the time of advancing the loans to the aforesaid parties/entities. As per
        the assessee an amount of 12,56,02,,890/- has already been treated as deemed dividend in the
        A.Y. 2007-08. Accordingly, if such amount is adjusted against the accumulated profit of
        4,47,60,173/- available with the company at the time of advancing loan to the companies as
        discussed above, the accumulated profit of JP infrastructure becomes negative. Accordingly, the
        assessee claimed that in the absence of accumulated profit in the books of the company namely JP
        infrastructure Pvt. Ltd, the question of treating the impugned advances as deemed dividend does
        not arise.
    """
    txt_summary()
