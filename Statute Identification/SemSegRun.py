# Imports
import openai
import json
import os
import nltk
import spacy
from langchain.llms import OpenAI
from langchain.prompts import PromptTemplate
from langchain.chains.llm import LLMChain
from langchain.text_splitter import SpacyTextSplitter

os.environ["OPENAI_API_KEY"] = "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"


def SemanticSegmentation(usr_input1):
    llm = OpenAI(temperature=0)

    template = """
        As a Legal Researcher, categorize the provided text into the following legal categories: Arguments, Precedent, Statutes, Facts, Ratio of Decision, Ruling of Lower Court, and Ruling of Present Court.
        Your response should be in JSON file format with two keys: 'input' for the input text and 'category' for the corresponding category.
        The JSON output should strictly include only these two keys.

        Example statutes are provided here["Section 304B, Indian Penal Code (IPC)", "Section 201, IPC", "Section 302, IPC"]
        
        Please format your response in a clear and readable dictionary structure having keys as input and values 
        
        Input: {usr_input1}

    """
    sem_seg_prompt = PromptTemplate.from_template(template=template)
    # print("Prompt Length",len(entity_extraction_prompt))
    sem_seg_chain = LLMChain(llm=llm, prompt=sem_seg_prompt, verbose=False)

    return sem_seg_chain.run(usr_input1)


data = """ M/S. Mahimananda Mishra vs Assistant Commissioner Of Income on 10 January, 2023
Orissa High Court
M/S. Mahimananda Mishra vs Assistant Commissioner Of Income on 10 January, 2023
IN THE HIGH COURT OF ORISSA AT CUTTACK
ITA No.18 of 2018
M/s. Mahimananda Mishra
....
Appellant
Mr. Saswat Kumar Acharya, Advocate
-versus-
Assistant Commissioner of Income
....
Respondent
Tax, Circle-1(1), Cuttack
Mr. Radheshyam Chimanka, Senior Standing Counsel for the
Revenue Department
CORAM:
THE CHIEF JUSTICE
JUSTICE M.S. RAMAN
ORDER
10.01.2023 Order No.
05. 1. The present appeal by the Assessee is directed against an order dated 10th October, 2017
passed by the Income Tax Appellate Tribunal, Cuttack Bench, Cuttack (ITAT) in ITA
No.52/CTK/2016 for the Assessment Year (AY) 2011-12.
2. While admitting the present appeal on 27th July 2022, the following question was framed for
consideration:
"Whether the deemed dividend paid by the Orissa Stevedores Ltd. should be taxed in the hands of
Mr. Mahimananda Mishra, the Individual Director who holds shares therein or in the hands of the
appellant firm of which he is a partner?"
3. This Court has heard the submissions of Mr. Saswat Kumar Acharya, learned counsel for the
Appellant and Mr. Radheshyam Chimanka, learned Senior Standing Counsel for the Revenue
Department.
4. The facts relevant for the present appeal as set out in the assessment order is that the Assessee is
a Firm engaged in the business of labour contract under the name and style M/s. Mahimananda
Mishra. Admittedly, the said Firm has four partners one of whom is Mr. Mahimananda Mishra
having contributed 20% of the shares of the Firm. There are three other partners as well.
5. Mr. Mishra also happens to be the Director of M/s. Orissa Stevedores Ltd. (OSL) and in OSL, he
holds 36.95% shares.
6. During the AY in question, OSL gave a unsecured loan of Rs.3,75,78,685/- to the Firm i.e. M/s.
Mahimananda Mishra. Of this, Rs.1,74,04,185/- was received as cash. The Assessing Officer (AO)
Indian Kanoon - http://indiankanoon.org/doc/156300627/
1M/S. Mahimananda Mishra vs Assistant Commissioner Of Income on 10 January, 2023
proceeded to treat the above unsecured loan as a deemed dividend in the hands of the Firm and
added it to the income of the Firm invoking Section 2(22)(e) of the Income Tax Act, 1961 (Act).
7. When the Assessee took the matter in appeal to the Commissioner of Income Tax (Appeals),
Cuttack [CIT(A)], it was noted by the CIT(A) in the order dated 16th November, 2015 allowing the
appeal that in terms of Section 2(22)(e) of the Act, the amount could be treated as deemed dividend
only in the hands of shareholder since he is the beneficial owner of the shares in OSL.
8. Section 2(22)(e) of the Act reads as under:
"2. (22). xxx
(e) any payment by a company, not being a company in which the public are
substantially interested, of any sum (whether as representing a part of the assets of
the company or otherwise) made after the 31st day of May, 1987, by way of advance
or loan to a shareholder, being a person who is the beneficial owner of shares (not
being shares entitled to a fixed rate of dividend whether with or without a right to
participate in profits) holding not less than ten per cent of the voting power, or to any
concern in which such shareholder is a member or a partner and in which he has a
substantial interest (hereafter in this clause referred to as the said concern) or any
payment by any such company on behalf, or for the individual benefit, of any such
shareholder, to the extent to which the company in either case possesses accumulated
profits;"
9. A plain reading of the above provision indicates that the taxing of the deemed dividend has to be
in the hands of the shareholder of OSL. In the present case, admittedly it is Mr. Mishra in his
individual capacity who holds 36.95% of the paid-up share capital of the OSL. On the other hand,
M/s. Mahimananda Mishra, the Firm, does not hold any shares in OSL. Consequently, this Court
finds that the CIT (A) was right in his conclusion in para 6, which reads as under:
"6. Thus, the amount should be treated as deemed dividend u/s.2(22)(e) of the Act in
the hands of Shri Mahimananda Mishra as discussed above. The AO is directed to
take remedial measures accordingly."
10. The ITAT in the impugned order has, in the considered view of this Court, needlessly remanded
the matter to the CIT (A) on the ground that it was not clear whether deemed dividend should be
taxed in the hands of Assessee's partner or in the hands of the Assessee. Since the plain reading of
Section 2(22)(e) of the Act makes it clear that the deemed dividend is to be taxed in the hands of
individual shareholder and not an entity which does not hold shares in OSL, the question of
remanding the matter to the CIT(A) did not arise.
11. For the aforementioned reasons, the question framed by this Court is answered in favour of the
Assessee and against the Department by holding that the deemed dividend should be taxed in the
hands of Mr. Mahimananda Mishra, the individual Director of OSL and not in the hands of the
Indian Kanoon - http://indiankanoon.org/doc/156300627/
2M/S. Mahimananda Mishra vs Assistant Commissioner Of Income on 10 January, 2023
Appellant-Assessee, the Firm.
12. The Court re-affirms the conclusion reached in para 6 of the order of the CIT(A). The impugned
order of the ITAT is set aside.
13. The appeal is accordingly disposed of.
(Dr. S. Muralidhar) Chief Justice (M.S. Raman) Judge M. Panda"""


def ss_from_text(data):
    text_splitter = SpacyTextSplitter(
        chunk_size=1000, chunk_overlap=50, separator="\n\n", pipeline="sentencizer"
    )

    chunks = text_splitter.split_text(data)
    # Initialize a list to store the results.
    results = []

    # Iterate over the chunks and apply the "extraction_statutes" function to each chunk.
    for chunk in chunks:
        result = SemanticSegmentation(chunk)  # Replace with your actual function
        results.append(result)

    return print(results)


if __name__ == "__main__":
    ss_from_text(data)
