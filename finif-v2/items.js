window.FINIF_ITEMS = [
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 1,
    "item_id": "prototype20_t1_001",
    "workflow": "Intake and Profiling",
    "task": "Complaint intake analysis",
    "work_product": "consumer complaint profile",
    "full_prompt": "The following excerpts discuss consumer complaints reported to the CFPB.\n\nConsumers complained about billing error disputes. They stated billing errors were typically resolved in\nfavor of merchants despite documentation provided in support of their complaint. Some reported that\nbilling errors typically involved merchandise returns not being credited properly, unauthorized charges\nrelated to identity theft, and being charged more than receipts showed. Others reported having to contact\ncredit card issuers multiple times to resolve disputes prior to their complaint submission to the Bureau.\nSome companies investigated consumer dispute claims and settled in favor of consumers after further\ninvestigation. In other cases, they clarified the reason for the dispute denial in their responses, or stated no\nerror occurred.\nConsumers reported being dissatisfied with customer service interactions. They reported being transferred\nmultiple times to other associates or departments and receiving inconsistent information from company\nrepresentatives. They experienced extended wait times, disconnected calls, and repeated calls necessary to\nreport issues. Companies typically apologized for challenges consumers experienced with customer\nservice, and some reported that feedback would be sent to the appropriate internal office. In many\ncomplaints, however, companies determined that no wrongdoing occurred.\nConsumers reported that payments were applied inaccurately or later than expected, resulting in fees,\ninterest, and negative credit reporting. They also reported misapplication of payments such that lower\namounts were credited to their accounts or auto payments did not process as expected. In some instances,\nconsumers did not realize late payments were being reported until after they reviewed their credit reports.\n\n---\n\nThe CFPB received approximately 23,700 student loan complaints in 2025. It sent 21,500 (91%) of these\ncomplaints to companies for review and response, referred 6% to other regulatory agencies, and found 2%\nto be not actionable. As of March 2, 2026, 0.03% of student loan complaints were pending with the\nconsumer and 0.02% were pending with the CFPB.\nCompanies responded to 69% of student loan complaints sent to them for review and response. In 77% of\nthese complaints, consumers reported first attempting to resolve their issue with the company. Companies\nclosed 66% of them with an explanation, 0.2% with monetary relief, and 1% with non-monetary relief.\nThey provided an administrative response for 0.4% of complaints. Companies did not provide a timely\nresponse—or a response at all—for 31% of complaints.\n33 As of March 2, 2026, 1% of complaints were\npending review by the company.\nWhen submitting student loan complaints, consumers specify whether they are complaining about a\nfederal student loan or a private student loan. In 2025, consumers complained about federal student loans\nmore frequently than private student loans (see Figure 35).34\nFIGURE 35: STUDENT LOAN COMPLAINTS BY TYPE OF LOAN AND OUTCOMES\nConsumers also identify the issue that best describes the problem they experienced. The most common\nissue was Dealing with your lender or servicer (Figure 36).\n33 In 2025, companies reported that pending litigation over federal student loan repayment programs, as well as\nchanges in student loan servicing, resulted in untimely responses or no responses at all. See generally, Consumer\nFin. Prot. Bureau, Annual Report of the CFPB Private Education Student Loan Ombudsman (Jan. 2026),\nhttps://files.consumerfinance.gov/f/documents/cfpb_pelo-annual-report_2026-01.pdf (discussing student loan\ncomplaints and untimely responses).\n\nPrepare a consumer complaint profile using only the supplied CFPB annual report excerpts. Organize the profile into clearly labeled sections covering complaint issues, company responses, and consumer impacts. For every issue, outcome, or deficiency stated, tie it to the specific supporting excerpt from the supplied report, and preserve the report's exact figures, percentages, dates, issue labels, and outcome terms without alteration. Distinguish consumer-reported allegations from company determinations or report observations, and do not present allegations as established facts. Explicitly identify any gaps in the supplied data, including unresolved or pending complaint statuses and missing response information. Flag deficiencies or gaps identified in the report, such as untimely company responses and unresolved billing errors. Classify complaints into the report's issue categories, including billing error disputes, customer service problems, and payment application issues. State the relevant reporting period and as-of date for the complaint data, including the March 2, 2026 pending-complaint status date. Compare federal and private student loan complaint volumes using the report's stated finding that federal loans were complained about more frequently. Do not introduce outside facts or assumptions.",
    "target_constraint_count": 13,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "The profile must rely only on the supplied CFPB annual report excerpts and must not introduce outside facts or assumptions."
      },
      {
        "no": 2,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Every complaint issue, outcome, or deficiency stated in the profile must be tied to the specific supporting excerpt from the supplied report."
      },
      {
        "no": 3,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "The profile must explicitly identify any gaps in the supplied data, such as unresolved or pending complaint statuses and missing response information."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "The consumer complaint profile must be organized into clearly labeled sections separating complaint issues, company responses, and consumer impacts."
      },
      {
        "no": 5,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "The profile must flag deficiencies or gaps identified in the supplied report, such as untimely company responses and unresolved billing errors."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "The profile must preserve the report's exact figures, percentages, dates, issue labels, and outcome terms without alteration."
      },
      {
        "no": 7,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "The profile must state the relevant reporting period and as-of date for the complaint data, including the March 2, 2026 pending-complaint status date."
      },
      {
        "no": 8,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "The profile must classify complaints into the report's issue categories, such as billing error disputes, customer service problems, and payment application issues."
      },
      {
        "no": 9,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "The response must produce a consumer complaint profile as the named deliverable."
      },
      {
        "no": 10,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "The profile must be presented as a structured summary with clear headings or labeled subsections rather than unstructured prose."
      },
      {
        "no": 11,
        "tag": "QV6",
        "family": "QV",
        "check_type": "计划约束",
        "text": "The profile must compare federal and private student loan complaint volumes using the report's stated finding that federal loans were complained about more frequently."
      },
      {
        "no": 12,
        "tag": "EG3",
        "family": "EG",
        "check_type": "计划约束",
        "text": "The profile must distinguish consumer-reported allegations from company determinations or report observations, without presenting allegations as established facts."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 2,
    "item_id": "prototype20_t1_002",
    "workflow": "Intake and Profiling",
    "task": "Loan application intake",
    "work_product": "missing-document checklist",
    "full_prompt": "Prepare a missing-document checklist for SBA 7(a) loan application intake using only the supplied SBA Form 1919 Borrower Information Form. Organize the checklist into clearly labeled sections that group related borrower information fields. For each checklist item, preserve the exact field name and terminology used on the form, and map the item to the corresponding form field or section from which it is derived. Classify each item according to its SBA Form 1919 field category, such as applicant business information, entity classification, address details, employee counts, loan purpose, or ownership information. Ensure the checklist covers all required topics from the form, including applicant business legal name, operating business legal name, DBA or tradename, business TIN, primary industry or NAICS code, business phone, Unique Entity ID, year operations began, entity type, special ownership type, business address, project address, primary contact name and email, number of existing employees, number of FTE jobs saved or retained, number of new FTE jobs created, purpose of the loan, loan use amounts, and applicant ownership and demographic information. Include the separate ownership sheet as a required supporting document when ownership information cannot fit on the main form. Present the final output as a structured checklist with checkboxes or itemized entries.\n\nThe application material is an excerpt from SBA Form 1919.\n\nSBA 7(a) Borrower Information Form OMB Control No.: 3245-0348\nFor use with all SBA 7(a) Loan Programs Expiration Date: 6/30/2027\nSBA Form 191\n9 (02/2025) 1 \nApplicant Business Legal Name (OC □ EPC□): \nOperating Business Legal Name (OC): \nDBA or Tradename (if applicable) \nBusiness TIN (EIN, SSN) \nPrimary Industry / NAICS Code (6 digit): Business Phone: \nUnique Entity ID used in SAM.gov, if any Year began operations: \nEntity Type \nCheck One: \n□ Sole proprietor\n□ Partnership\n□ C-Corp\n□ S-Corp\n□ LLC\n□ Other ______________________\nSpecial Ownership Type \n(Select all that apply): \n□ Employee Stock Ownership Plan (ESOP)\n□ 401(k) or ROBS 401(k) Trust\n□ Cooperative\n□ Native-American Tribal-Owned Business\n□ Other __________________________\nBusiness Address (Street, City, State, Zip Code) \nDo not use P.O. Box address \nProject Address, if different than Business Address \n(Street, City, State, Zip Code) Do not use P.O. Box address \nPrimary Contact Name \nPrimary Contact Email Address \n# of existing employees (including owners, all part-time, full-time and all employees of domestic and foreign \nAffiliates – do not convert to FTE) \n# of FTE jobs saved/retained because of the loan (including owners) \n# of new FTE jobs created because of the loan (including owners) \nPurpose of the loan (i.e., Purchase Real Estate; Construction; Equipment; Inventory; Eligible Debt Refinancing; Working Capital; etc.) \n□ Acquisition/installation of equipment $ . □ Purchase/Construction of Commercial Real Estate $ . \n□ Working Capital $ . □ Acquisition of inventory $ . \n□ Business acquisition (Change of Ownership) $ . □ Debt refinancing $ . \n□ Other: $ . □ Other: $ . \nApplicant Ownership (Mandatory) and Demographic Information – Identify all entities that own at least 20% of the Applicant, including the \nnatural persons who own those entities, and at least 51% of the Beneficial Owners (as defined in SOP 50 10) of the Applicant. Attach a separate \nsheet if necessary. \nOwner’s Legal Name \n(First name Last name) \nTitle Ownership % TIN (SSN/EIN) Home Address \n(Street, City, State, Zip Code - No P.O. Box)",
    "target_constraint_count": 15,
    "constraints": [
      {
        "no": 1,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the checklist into clearly labeled sections that group related borrower information fields."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a missing-document checklist as the named work product."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied SBA Form 1919 content as the source of checklist items."
      },
      {
        "no": 4,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact field names and terminology from the SBA Form 1919 when listing required items."
      },
      {
        "no": 5,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each checklist item according to the SBA Form 1919 field category it belongs to, such as entity type or ownership information."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each checklist item to the corresponding SBA Form 1919 field or section it is derived from."
      },
      {
        "no": 7,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover all required topics from the SBA Form 1919, including applicant business information, entity classification, address details, employee counts, loan purpose, and ownership demographics."
      },
      {
        "no": 8,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Include the separate ownership sheet as a required supporting document when ownership information cannot fit on the main form."
      },
      {
        "no": 9,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the output as a structured checklist format with checkboxes or itemized entries."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 3,
    "item_id": "prototype20_t1_003",
    "workflow": "Intake and Profiling",
    "task": "KYC onboarding",
    "work_product": "account-opening controls checklist",
    "full_prompt": "The account-opening material below comes from the SEC AML source tool.\n\n[Continues under: This guide was last updated on December 19, 2025.]\n\nrisk based procedures for conducting ongoing customer due diligence. These should include, but not be limited to procedures to: (1) identify and verify the identity of customers, (2) understand the nature and purpose of customer relationships to be able to develop a risk profile, and (3) conduct ongoing monitoring to identify and report suspicious transactions as well as maintain and update customer information, including beneficial ownership information for legal entity customers.\n\nAML Program Rule: 31 C.F.R. § 1023.210 .\n\nAdopting Releases: Customer Due Diligence Requirements for Financial Institutions, 81 Fed. Reg. 29398 (May 11, 2016); Anti-Money Laundering Programs for Financial Institutions, 67 Fed. Reg. 21110 (Apr. 29, 2002).\n\nSEC Order Approving FINRA AML Compliance Program Rule: Exchange Act Release No. 60645 (Sept. 10, 2009); see also 74 Fed. Reg. 47630 (Sept. 16, 2009).\n\nPrepare an account-opening controls checklist for KYC onboarding using only the supplied rule text and guidance. Present the checklist as a structured document with labeled sections corresponding to the required customer due diligence procedure areas: (1) identify and verify the identity of customers, (2) understand the nature and purpose of customer relationships to develop a risk profile, and (3) conduct ongoing monitoring to identify and report suspicious transactions and maintain and update customer information, including beneficial ownership information for legal entity customers. For each control item, cite the governing AML program rule at 31 C.F.R. § 1023.210 and the relevant adopting releases, including Customer Due Diligence Requirements for Financial Institutions, 81 Fed. Reg. 29398 (May 11, 2016), and Anti-Money Laundering Programs for Financial Institutions, 67 Fed. Reg. 21110 (Apr. 29, 2002). State the source status of these citations, and preserve the exact rule citation, adopting release citations, and procedural wording from the supplied material. Do not add outside requirements or assumptions.",
    "target_constraint_count": 13,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing AML program rule and adopting releases when stating each control requirement."
      },
      {
        "no": 2,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the deliverable as a structured checklist with discrete control items."
      },
      {
        "no": 3,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the three required CDD procedure areas: customer identification and verification, understanding the nature and purpose of the relationship, and ongoing monitoring and information updating."
      },
      {
        "no": 4,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State the source status of the cited standards, including the rule citation and adopting release references."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied rule text and guidance as the basis for the controls; do not introduce outside requirements."
      },
      {
        "no": 6,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named account-opening controls checklist as the requested work product."
      },
      {
        "no": 7,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact rule citation, adopting release citations, and procedural wording from the source."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the checklist into labeled sections corresponding to the required CDD procedure areas."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 4,
    "item_id": "prototype20_t1_004",
    "workflow": "Intake and Profiling",
    "task": "KYC onboarding",
    "work_product": "tax documentation checklist",
    "full_prompt": "Prepare a tax documentation checklist for KYC onboarding. Label the deliverable exactly as a tax documentation checklist. Draw the checklist content only from the supplied Form W-9 excerpt, and limit the checklist to no more than 10 distinct items. Cover the required topics of TIN, name matching, and backup withholding certification. Preserve the Form W-9 requirement that the TIN must match the name on line 1 to avoid backup withholding. Classify TIN documentation into the categories of SSN for individuals and EIN for entities. Include a conditional item requiring the customer to cross out certification item 2 if the IRS has notified them that they are currently subject to backup withholding. Avoid stating that completing the checklist establishes a customer's tax status or certifies the customer's TIN as correct.\n\nThe relevant Form W-9 excerpt follows.\n\nPart I Taxpayer Identification Number (TIN)\nEnter your TIN in the appropriate box. The TIN provided must match the name given on line 1 to avoid \nbackup withholding. For individuals, this is generally your social security number (SSN). However, for a \nresident alien, sole proprietor, or disregarded entity, see the instructions for Part I, later. For other \nentities, it is your employer identification number (EIN). If you do not have a number, see How to get a \nTIN, later.\nNote: If the account is in more than one name, see the instructions for line 1. See also What Name and \nNumber To Give the Requester for guidelines on whose number to enter.\nSocial security number\n– –\nor\nEmployer identification number \n–\n\nPart II Certification\nUnder penalties of perjury, I certify that:\n1. The number shown on this form is my correct taxpayer identification number (or I am waiting for a number to be issued to me); and\n2. I am not subject to backup withholding because (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue \nService (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am \nno longer subject to backup withholding; and\n3. I am a U.S. citizen or other U.S. person (defined below); and\n4. The FATCA code(s) entered on this form (if any) indicating that I am exempt from FATCA reporting is correct.\nCertification instructions. You must cross out item 2 above if you have been notified by the IRS that you are currently subject to backup withholding \nbecause you have failed to report all interest and dividends on your tax return. For real estate transactions, item 2 does not apply. For mortgage interest paid, \nacquisition or abandonment of secured property, cancellation of debt, contributions to an individual retirement arrangement (IRA), and, generally, payments \nother than interest and dividends, you are not required to sign the certification, but you must provide your correct TIN. See the instructions for Part II, later.\nSign \nHere\nSignature of \nU.S. person Date\nGeneral Instructions",
    "target_constraint_count": 9,
    "constraints": [
      {
        "no": 1,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the exact term 'tax documentation checklist' to label the deliverable."
      },
      {
        "no": 2,
        "tag": "DB4",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Avoid stating that completing the checklist establishes a customer's tax status or certifies the customer's TIN as correct."
      },
      {
        "no": 3,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Limit the checklist to no more than 10 distinct items."
      },
      {
        "no": 4,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Draw the checklist content only from the supplied Form W-9 excerpt."
      },
      {
        "no": 5,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Include a conditional item requiring the customer to cross out certification item 2 if the IRS has notified them that they are currently subject to backup withholding."
      },
      {
        "no": 6,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify TIN documentation into the categories of SSN for individuals and EIN for entities."
      },
      {
        "no": 7,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a named tax documentation checklist as the requested deliverable."
      },
      {
        "no": 8,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the Form W-9 requirement that the TIN must match the name on line 1 to avoid backup withholding."
      },
      {
        "no": 9,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the required topics of TIN, name matching, and backup withholding certification."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 5,
    "item_id": "prototype20_t2_001",
    "workflow": "Research and Due Diligence",
    "task": "Financial statement analysis",
    "work_product": "financial analysis summary",
    "full_prompt": "The financial disclosures below are excerpts from Apple’s annual report.\n\nYears ended\nSeptember 28, 2024 | September 30, 2023 | September 24, 2022\nTotal shareholders’ equity, beginning balances | $ | 62,146 | $ | 50,672 | $ | 63,090\nCommon stock and additional paid-in capital:\nBeginning balances | 73,812 | 64,849 | 57,365\nCommon stock issued | 1,423 | 1,346 | 1,175\nCommon stock withheld related to net share settlement of equity awards | ( 3,993 ) | ( 3,521 ) | ( 2,971 )\nShare-based compensation | 12,034 | 11,138 | 9,280\nEnding balances | 83,276 | 73,812 | 64,849\nRetained earnings/(Accumulated deficit):\nBeginning balances | ( 214 ) | ( 3,068 ) | 5,562\nNet income | 93,736 | 96,995 | 99,803\nDividends and dividend equivalents declared | ( 15,218 ) | ( 14,996 ) | ( 14,793 )\nCommon stock withheld related to net share settlement of equity awards | ( 1,612 ) | ( 2,099 ) | ( 3,454 )\nCommon stock repurchased | ( 95,846 ) | ( 77,046 ) | ( 90,186 )\nEnding balances | ( 19,154 ) | ( 214 ) | ( 3,068 )\nAccumulated other comprehensive income/(loss):\nBeginning balances | ( 11,452 ) | ( 11,109 ) | 163\nOther comprehensive income/(loss) | 4,280 | ( 343 ) | ( 11,272 )\nEnding balances | ( 7,172 ) | ( 11,452 ) | ( 11,109 )\nTotal shareholders’ equity, ending balances | $ | 56,950 | $ | 62,146 | $ | 50,672\nDividends and dividend equivalents declared per share or RSU | $ | 0.98 | $ | 0.94 | $ | 0.90\n\n---\n\n2023\nAdjusted Cost | Unrealized Gains | Unrealized Losses | Fair Value | Cash and Cash Equivalents | Current Marketable Securities | Non-Current Marketable Securities\nCash | $ | 28,359 | $ | — | $ | — | $ | 28,359 | $ | 28,359 | $ | — | $ | —\nLevel 1:\nMoney market funds | 481 | — | — | 481 | 481 | — | —\nMutual funds and equity securities | 442 | 12 | ( 26 ) | 428 | — | 428 | —\nSubtotal | 923 | 12 | ( 26 ) | 909 | 481 | 428 | —\nLevel 2 (1) :\nU.S. Treasury securities | 19,406 | — | ( 1,292 ) | 18,114 | 35 | 5,468 | 12,611\nU.S. agency securities | 5,736 | — | ( 600 ) | 5,136 | 36 | 271 | 4,829\nNon-U.S. government securities | 17,533 | 6 | ( 1,048 ) | 16,491 | — | 11,332 | 5,159\nCertificates of deposit and time deposits | 1,354 | — | — | 1,354 | 1,034 | 320 | —\nCommercial paper | 608 | — | — | 608 | — | 608 | —\nCorporate debt securities | 76,840 | 6 | ( 5,956 ) | 70,890 | 20 | 12,627 | 58,243\nMunicipal securities | 628 | — | ( 26 ) | 602 | — | 192 | 410\nMortgage- and asset-backed securities | 22,365 | 6 | ( 2,735 ) | 19,636 | — | 344 | 19,292\nSubtotal | 144,470 | 18 | ( 11,657 ) | 132,831 | 1,125 | 31,162 | 100,544\nTotal (3) | $ | 173,752 | $ | 30 | $ | ( 11,683 ) | $ | 162,099 | $ | 29,965 | $ | 31,590 | $ | 100,544\n\nPrepare a financial analysis summary for Apple Inc. using only the two provided disclosures. Structure the summary into clearly labeled sections, one covering the statement of shareholders' equity and one covering the marketable securities disclosures, and present the figures in a table or comparable structured format. State the fiscal years covered by the shareholders' equity statement and use those periods as the analysis frame. Reproduce all dollar amounts, signs, and line-item labels exactly as they appear in the source disclosures. Independently recalculate the ending balances and subtotals in the shareholders' equity statement and the marketable securities table to verify that the reported figures tie out. Compute the year-over-year changes in total shareholders' equity and the net unrealized gain or loss on marketable securities. Map each analytical statement or calculated figure to the specific source line item or table from which it was derived. Do not introduce any outside financial data or assumptions.",
    "target_constraint_count": 10,
    "constraints": [
      {
        "no": 1,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the fiscal years covered by the shareholders' equity statement and use those periods as the analysis frame."
      },
      {
        "no": 2,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the summary into clearly labeled sections for the statement of shareholders' equity and the marketable securities disclosures."
      },
      {
        "no": 3,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Reproduce all dollar amounts, signs, and line-item labels exactly as they appear in the source disclosures."
      },
      {
        "no": 4,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the analysis solely on the two supplied disclosures without introducing outside financial data or assumptions."
      },
      {
        "no": 5,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Independently recalculate the ending balances and subtotals in the shareholders' equity statement and the marketable securities table to verify that the reported figures tie out."
      },
      {
        "no": 6,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the analysis in a structured format, including a table or comparable layout for the financial figures."
      },
      {
        "no": 7,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each analytical statement or calculated figure to the specific source line item or table from which it was derived."
      },
      {
        "no": 8,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a financial analysis summary as the named deliverable."
      },
      {
        "no": 9,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Compute the year-over-year changes in total shareholders' equity and the net unrealized gain or loss on marketable securities."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 6,
    "item_id": "prototype20_t2_002",
    "workflow": "Research and Due Diligence",
    "task": "Industry and market research",
    "work_product": "peer benchmark evidence pack",
    "full_prompt": "Prepare a peer benchmark evidence pack based solely on the supplied Microsoft 10-K disclosure excerpt. Organize the pack into clearly separated sections for product portfolio, productivity and collaboration tools, and devices. Present the evidence pack as a structured evidence table with rows for each disclosed product or service category and columns for product name, category description, and source basis. The pack must compile the disclosed product and service evidence from the supplied Microsoft disclosure. Preserve the exact product names and category descriptions as disclosed in the Microsoft text, including operating systems, cross-device productivity and collaboration applications, server applications, business solution applications, desktop and server management tools, software development tools, video games, PCs, tablets, gaming and entertainment consoles, other intelligent devices, and related accessories. Use only the supplied Microsoft disclosure as the evidence source and do not add external market data, competitor information, or unsupported assumptions. For each product or service category included in the evidence pack, cite the specific Microsoft disclosure passage that supports it.\n\nThe company disclosure for this request is the following Microsoft excerpt.\n\nOur products include operating systems, cross-device productivity and collaboration applications, server applications, business solution applications, desktop and server management tools, software development tools, and video games. We also design and sell devices, including PCs, tablets, gaming and entertainment consoles, other intelligent devices, and related accessories.\n\nTo achieve our vision, our research and development efforts focus on three interconnected ambitions:\n\nReinvent Productivity and Business Processes\n\nAt Microsoft, we provide technology and resources to help our customers create a secure, productive work environment. Our family of products plays a key role in the ways the world works, learns, and connects.\n\nOur growth depends on securely delivering continuous innovation and advancing our leading productivity and collaboration tools and services, including Microsoft 365, LinkedIn, and Dynamics 365. Microsoft 365 is an AI first platform that brings together Office, Windows, Copilot, and Enterprise Mobility + Security to help organizations empower their employees. Copilot for Microsoft 365 combines AI with business data in the Microsoft Graph and Microsoft 365 applications. Microsoft Teams is a comprehensive platform for communication and collaboration, with meetings, calling, chat, file collaboration, and the ability to bring all of the applications teams use into a single place. Microsoft Viva is an employee experience platform that brings together communications, knowledge, learning, resources, and insights.",
    "target_constraint_count": 9,
    "constraints": [
      {
        "no": 1,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the peer benchmark evidence pack into clearly separated sections for product portfolio, productivity and collaboration tools, and devices."
      },
      {
        "no": 2,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the peer benchmark evidence pack as a structured evidence table with rows for each disclosed product or service category and columns for product name, category description, and source basis."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a peer benchmark evidence pack that compiles the disclosed product and service evidence from the supplied Microsoft disclosure."
      },
      {
        "no": 4,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact product names and category descriptions as disclosed in the Microsoft text, including operating systems, productivity and collaboration applications, server applications, business solution applications, desktop and server management tools, software development tools, video games, PCs, tablets, gaming and entertainment consoles, and related accessories."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied Microsoft disclosure as the evidence source and do not add external market data, competitor information, or unsupported assumptions."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific Microsoft disclosure passages for each product or service category included in the evidence pack."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 7,
    "item_id": "prototype20_t2_003",
    "workflow": "Research and Due Diligence",
    "task": "Financial statement analysis",
    "work_product": "reported-facts extract",
    "full_prompt": "Caterpillar’s reported income-statement figures are reproduced below.\n\nEntity: CATERPILLAR INC\nINCOME STATEMENT (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nRevenues | 50,971,000,000 | 59,427,000,000 | 67,060,000,000 | 64,809,000,000 | 67,589,000,000\nCostOfRevenue | 35,513,000,000 | 41,350,000,000 | 42,767,000,000 | 40,199,000,000 | 44,752,000,000\nCostOfGoodsAndServicesSold | — | 413,000,000 | 160,000,000 | 33,000,000 | 49,000,000\nOperatingIncomeLoss | 6,878,000,000 | 7,904,000,000 | 12,966,000,000 | 13,072,000,000 | 11,151,000,000\nIncomeTaxExpenseBenefit | 1,742,000,000 | 2,067,000,000 | 2,781,000,000 | 2,629,000,000 | 2,768,000,000\nResearchAndDevelopmentExpense | 1,686,000,000 | 1,814,000,000 | 2,108,000,000 | 2,107,000,000 | 2,148,000,000\nEarningsPerShareBasic (USD/shares) | 11.93 | 12.72 | 20.24 | 22.17 | 18.9\n\nPrepare a reported-facts extract for Caterpillar Inc.'s annual income statement. Use only the provided income statement context and do not introduce outside facts or assumptions. Present the extract as a table with rows for each reported concept and columns for each fiscal year, organized into clear sections so the reported facts are easy to trace. Preserve and state the exact fiscal-year period labels and as-of dates shown in the source. For each extracted figure, verify that it matches the source value exactly, including all digits and units, and cite the source income statement so every fact can be traced to the disclosure. Explicitly mark any missing value, such as the CostOfGoodsAndServicesSold figure for FY2021, as not reported rather than omitting or estimating it.",
    "target_constraint_count": 10,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a reported-facts extract as the named work product."
      },
      {
        "no": 2,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Explicitly mark the missing CostOfGoodsAndServicesSold value for FY2021 and any other absent figures as not reported."
      },
      {
        "no": 3,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Preserve and state the exact fiscal-year period labels and as-of dates for the reported figures."
      },
      {
        "no": 4,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Verify that the extracted reported figures match the source values exactly, including all digits and units."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the source income statement for each extracted fact so every figure can be traced to the disclosure."
      },
      {
        "no": 6,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided income statement context and do not introduce outside facts or assumptions."
      },
      {
        "no": 7,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the extract into a clear reported-facts structure with distinct sections for each concept or period grouping."
      },
      {
        "no": 8,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the extract as a table with rows for each reported concept and columns for each fiscal year."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 8,
    "item_id": "prototype20_t2_004",
    "workflow": "Research and Due Diligence",
    "task": "Consumer credit market analysis",
    "work_product": "market analysis brief",
    "full_prompt": "Prepare a market analysis brief using only the supplied CFPB excerpt on consumer credit card purchase volumes. Structure the brief with clear sections, beginning with a market observation section and followed by a comparison section. In the market observation section, summarize the finding that consumers in all credit score tiers spend more in the first few months after opening accounts with promotional interest rates than accounts without promotions, and that average purchase volumes for both card types become very similar three years after account opening. In the comparison section, compare purchase volume patterns for cards with and without introductory APR promotions across the first 36 months after origination, citing the Figure 32 panels and the promotional-versus-non-promotional spending observation. Clearly separate the observed purchase volume findings from the explanatory caveat that introductory promotional interest rates are just one factor that could affect early spending habits. Do not introduce outside credit card market data or assumptions beyond the supplied excerpt.\n\nThe market evidence is the following excerpt from the CFPB credit card report.\n\nConsumers in all credit score tiers spend higher amounts in the first few months after opening\naccounts with promotional interest rates than accounts without these promotions. Comparing\nboth panels in Figure 32, which show purchase volumes on cards with and without introductory\npromotional interest rates in their first 36 months after origination. We observe higher spending\nlevels by cardholders with promotional accounts in the first three months than cardholders\nwithout promotional accounts during this time. However, average purchase volumes for both\ntypes of cards are very similar to each other three years after account opening.94\n94 We note that introductory promotional interest rates are just one factor that could be affecting different spending\nhabits in the first months after origination in these two groups. For example, there may be differences in the share of\naccounts that pursue rewards-based welcome bonuses—61.5 percent of credit card offers with introductory\npromotional interest rates come with rewards-based welcome bonuses, compared to 20 percent of credit card offers\nwithout introductory promotional interest rates, based on data from Competiscan.\n35%\n60%\n55%\n40%\n0%\n10%\n20%\n30%\n40%\n50%\n60%\n70%\nBelow-prime Prime Prime plus Superprime56 CONSUMER FINANCIAL PROTECTION BUREAU\nFIGURE 32\nAverage purchase volume by month since origination on\ngeneral purpose cards by origination credit score (Y-14)\nPANEL A: WITH INTRODUCTORY APR PROMOTIONS\nPANEL B: WITHOUT INTRODUCTORY APR PROMOTIONS\nConsumers with promotional interest rate cards tend to carry relatively high average balances,95\nwith balances highest during the months typically associated with promotional periods. Recall\n95 See Section 4.1.2 for more on revolving balances.",
    "target_constraint_count": 8,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground the brief solely in the supplied CFPB excerpt, without importing outside credit card market data or assumptions."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the brief as a market analysis brief rather than a generic summary."
      },
      {
        "no": 3,
        "tag": "QV6",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Compare purchase volume patterns for cards with and without introductory APR promotions across the first 36 months after origination."
      },
      {
        "no": 4,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the Figure 32 comparison and the promotional-versus-non-promotional spending observation when presenting the purchase volume findings."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the market analysis in a structured brief format, such as a concise analytical brief rather than unstructured prose."
      },
      {
        "no": 6,
        "tag": "EG3",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Separate the observed purchase volume findings from the explanatory caveat that introductory APR is only one possible factor."
      },
      {
        "no": 7,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into clearly identifiable sections, including at least an opening market observation and a comparison section."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 9,
    "item_id": "prototype20_t3_001",
    "workflow": "Decision and Structuring",
    "task": "Credit memo drafting",
    "work_product": "internal credit memo",
    "full_prompt": "The supplied lending guidance consists of the following FDIC manual excerpts.\n\n[Continues under: General]\n\nCommercial lending policies generally address acquisition of credit information, such as property, operating and cash flow statements; factors that might determine the need for collateral acquisition ; acceptable collateral margins ; perfecting liens on collateral ; lending terms, and charge offs.\n\nAccounts Receivable Financing\n\nAccounts receivable financing is a specialized area of commercial lending in which borrowers assign their interests in accounts receivable to the lender as collateral.\n\nTypical characteristics of accounts receivable borrowers are those businesses that are growing rapidly and need year-round financing in amounts too large to justify unsecured credit, those that are nonseasonal and need year-round financing because working capital and profits are insufficient to permit periodic cleanups, those whose working capital is inadequate for the volume of sales and type of operation, and those whose previous unsecu red borrowings are no longer warranted because of various credit factors.\n\nSeveral advantages of accounts receivable financing from the borrower's viewpoint are: it is an efficient way to finance an expanding operation because borrowing capacity expands as sales increase; it permits the borrower to take advantage of purchase discounts because the company receives immediate cash on its sales and is able to pay trade creditors on a satisfactory basis; it insures a revolving, expanding line of credit; and actual interest paid may be no more than that for a fixed amount unsecured loan.\n\n---\n\nCredit Analysis\n\nEffective underwriting and management of leveraged lending risk is highly dependent on the quality of analysis employed during the approval process as well as ongoing monitoring. An institution’s a nalysis of leveraged lending transactions typically ensures that:\n\n• C ash flow analyses do not rely on overly optimistic or unsubstantiated projections of sales, margins, and merger and acquisition synergies;\n\n• Liquidity analyses include performance metrics appropriate for the borrower’s industry; predictability of the borrower’s cash flow; measurement of the borrower’s operating cash needs; and ability to meet debt maturities;\n\n• Projections exhibit an adequate margin for unanticipated merger-related integration costs;\n\n• Projections are stress tested for one or two downside scenarios, including a covenant breach;\n\n• Transactions are reviewed at least quarterly to determine variance from plan, the related risk implications, and the accuracy of risk ratings and accrual status;\n\n• Enterprise and collateral valuations are independently derived or validated outside of the origination function, are timely, and consider potential value erosion;\n\n• Collateral liquidation and asset sale estimates are based on current market conditions and trends;\n\n• Potential collateral shortfalls are identified and factored into risk rating and accrual decisions;\n\n• Contingency plans anticipate changing conditions in debt or equity markets when exposures rely on refinancing or the issuance of new equity; and\n\n• The borrower is adequately protected from interest rate and foreign exchange risk.\n\nDraft an internal credit memo for a commercial lending decision. Begin with an opening statement that frames the purpose of the credit analysis. Organize the memo into clearly labeled sections. In the memo, describe the commercial lending policies that address acquisition of credit information, factors determining the need for collateral, acceptable collateral margins, perfecting liens, lending terms, and charge-offs, preserving the exact terms and requirements as stated in the source guidance. Include a section on accounts receivable financing that explains how borrowers assign accounts receivable as collateral and lists the borrower-side advantages, such as expanding borrowing capacity with sales, taking advantage of purchase discounts, and maintaining a revolving line of credit. For leveraged lending transactions, map each credit analysis expectation to the specific guidance passage from which it is drawn, and cover the analysis and monitoring controls, including the requirement that transactions be reviewed at least quarterly to determine variance from plan, risk implications, and accuracy of risk ratings and accrual status. Also state that projections should be stress tested for one or two downside scenarios, including a covenant breach. Ensure the memo remains an internal credit memo suitable for internal use.",
    "target_constraint_count": 8,
    "constraints": [
      {
        "no": 1,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact source terms and requirements from the cited guidance passages without altering their meaning."
      },
      {
        "no": 2,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the credit memo content in a structured, sectioned format suitable for internal use."
      },
      {
        "no": 3,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Include the quarterly review interval for leveraged lending transactions as a monitoring requirement."
      },
      {
        "no": 4,
        "tag": "RC5",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover borrower-side advantages of accounts receivable financing as an alternative financing option."
      },
      {
        "no": 5,
        "tag": "RC7",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Include the analysis and monitoring controls expected for leveraged lending transactions."
      },
      {
        "no": 6,
        "tag": "FP6",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Begin the memo with an opening statement that frames the credit analysis purpose."
      },
      {
        "no": 7,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each stated credit analysis expectation to the specific guidance passage from which it is drawn."
      },
      {
        "no": 8,
        "tag": "QV7",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Include the requirement to stress test projections for one or two downside scenarios, including a covenant breach."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 10,
    "item_id": "prototype20_t3_002",
    "workflow": "Decision and Structuring",
    "task": "Credit product structuring analysis",
    "work_product": "product decision brief",
    "full_prompt": "Prepare a credit product structuring analysis in the form of a product decision brief using only the provided CFPB aggregate data on BNPL loans from six large firms for calendar years 2019 through 2023. Organize the brief into clearly labeled sections covering the market data, calculated metrics, limitations, and structuring considerations; use tables where appropriate for aggregate metrics. Base all analysis and conclusions solely on the supplied data without introducing external market facts or assumptions. Using the aggregate data points described, calculate the average yearly BNPL loans per unique user and the ratios of late fees and charge-offs to total origination volume. Explicitly state that the sample is not necessarily representative of the entire BNPL market and that no estimate limited to the pay-in-four BNPL market is available. Also describe the limitation that usage metrics are confined to a consumer's BNPL activity at a single sampled firm and do not capture consumers who used multiple BNPL lenders. Frame the entire analysis over the 2019-2023 review period.\n\nThe BNPL market material follows.\n\nThe CFPB obtained summary data from six large firms about their BNPL loans for each of the\ncalendar years 2019-2023. We estimate that the six firms represented approximately 40 percent\nof the overall point-of-sale financing market in 2023, which includes the “pay-in-four” BNPL\nloans that are the subject of this spotlight as well as other forms of short-term financing, such as\npoint-of-sale installment loans and credit card installment plans. The sample’s estimated share\nof the market is provided as a percent of the overall point-of-sale financing market because we\nare not aware of any estimate limited to the “pay-in-four” BNPL market. Our sample is not\nnecessarily representative of the entire BNPL market.\nFor each firm in our sample, we collected the following aggregate data points:8\n1. Number of unique users\n2. Number of loans originated9\n3. Dollar amount of loans originated\n4. Number of loans that were assessed at least one late fee\n5. Dollar amount of late fees assessed\n6. Dollar amount of late fees collected\n7. Number of loans charged-off\n8. Dollar amount of loans charged-off\nIn addition to tracking and analyzing the change in the above data points for our sample across\nthe survey period, we also used the data to calculate other key metrics such as average yearly\nBNPL loans per unique user at an individual company, and the ratio of late fees and charge-offs\nto total origination volume. Further, the firms in our sample provided de-identified, aggregate,\nsummary data exclusively about their user base and loan portfolio. All data is aggregated and\naveraged over the portfolio of loans. We did not collect data at the loan or account level. As such,\nall metrics regarding the number of unique users and their usage patterns are limited to a given\nconsumer’s BNPL usage at a given firm in our sample, and do not account for consumers that\nhave taken out loans with two or more BNPL lenders. Note that the various dollar values in this\nspotlight have been adjusted for inflation.10 The Appendix provides the non-inflation adjusted\nnominal dollar values.\n8 Some of these data points were previously collected and reported in our 2022 Market Trends report data collection.",
    "target_constraint_count": 7,
    "constraints": [
      {
        "no": 1,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Explicitly state that the sample is not necessarily representative of the entire BNPL market and that no estimate limited to the pay-in-four BNPL market is available."
      },
      {
        "no": 2,
        "tag": "RC8",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Describe the limitation that usage metrics are confined to a consumer's BNPL activity at a single sampled firm and do not capture consumers who used multiple BNPL lenders."
      },
      {
        "no": 3,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the product decision brief as a structured document with clearly labeled sections and, where appropriate, tables for aggregate metrics."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into named sections covering market data, calculated metrics, limitations, and structuring considerations."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base all analysis and conclusions solely on the provided CFPB aggregate data without introducing external market facts or assumptions."
      },
      {
        "no": 6,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the average yearly BNPL loans per unique user and the ratios of late fees and charge-offs to total origination volume using the aggregate data points described."
      },
      {
        "no": 7,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Frame the analysis over the calendar years 2019 through 2023 as the review period for the aggregate data."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 11,
    "item_id": "prototype20_t3_003",
    "workflow": "Decision and Structuring",
    "task": "Loan approval package",
    "work_product": "loan approval package checklist",
    "full_prompt": "The application excerpt below is from SBA Form 1920.\n\nSBA Form 1920 (Revised 09/20) P a g e | 4 \nJ. Character Determination (For those individuals who are required to execute Section II of SBA Form 1919) For any individual answering \naffirmatively to the question of conviction(s) Lender must retain in its loan file the original Character Determination Package, including all \nrequired supporting information and court documentation.\n• Lender has verified that no individual completing SBA Form 1919 is subject to an indictment, criminal infor-\nmation, arraignment, or other means by which formal criminal charges are brought. \n(If the answer to the statement is No, the loan is not eligible.)\nYes No \n• Lender has verified that no individual is currently on parole or probation. \n(If currently on parole or probation, deferred prosecution, conditional discharge, order of protection, or who is on \na sex offender registry, the loan is not eligible).\nYes No \n• Lender has confirmed that all disclosed crimes were misdemeanors, fully dispositioned by the court more than 6 \nmonths ago and there were no convictions for crimes against a minor. \n(If no, submission to SBA of the Character Determination Package is not required.)\nYes No \n• Lender has confirmed that disclosed crime(s) included felony(ies) convictions or crimes against a minor; or was a \ncase that was dispositioned by the court within the last 6 months. Lender must have submitted all required docu-\nments electronically to SBA at OCA912@SBA.gov and received an SBA clearance letter. \n(If the answer is \"No,\" the loan is not eligible.)\nYes No \nK. Citizenship - The business must be at least 51% owned and controlled by U.S. citizens and/or those who have LPR status from USCIS to be \neligible for SBA Guaranty\n• U. S. Citizen Yes No \nOR\n• Lawful Permanent Resident (LPR) status verified with the USCIS (applies to any owner with 20% or more owner-\nship interest) Yes No \nL. Prior Loss to Government/Delinquent Federal Debt (If \"Yes,\" loan is not eligible, unless waived by SBA for good cause.) 13 CFR § \n120.110(q) and 31 CFR § 285.13(g)\n• Applicant previously defaulted on a Federal loan or federally assisted financing that resulted in the Federal \ngovernment, or any of its departments or agencies, sustaining a loss (a compromise agreement under which the \nFederal agency/department accepted less than the full amount owed is also considered a loss).\nYes No \n• Another business owned, operated, and/or controlled by the Applicant or any Associate of the Applicant \npreviously defaulted on a Federal loan (or guaranteed a loan which was defaulted) and caused the Federal \ngovernment, or any of its agencies or departments to sustain a loss in any of its programs (a compromise agree-\nment under which the Federal agency/department accepted less than the full amount owed is also considered a \nloss). \nYes No \n• The Applicant or any of the guarantors is currently delinquent on a nontax debt to the Federal Government \n(a Federal debt that is the subject of, or has been discharged in, a bankruptcy proceeding, or has been released or \ncompromised by the Federal agency/department is not considered delinquent).\nYes No \nM. Size Analysis\nIf the Applicant is an existing business that is applying for an SBA loan to acquire another business, the two businesses are combined to determine \nwhether or not the Small Business Applicant is small. If an application is for an EPC/OC, refer to the size determinations under the EPC rule in the \ncurrent SOP 50 10. If the Small Business Applicant has Affiliates, please provide a list, including Affiliate name and tax ID #, and discuss possible \nbases of affiliation. If affiliation exists, complete a Size Analysis for each Affiliate.\nUse this size standard \nPrimary Industry \nNAICS Code \nAverage annual receipts over the last three completed fiscal years per Federal Tax Returns (exclude \naffiliates) 13 CFR § 121.104 $ \nSBA Size Standard based on NAICS (The size standards are found in 13 CFR § 121.201)\nNumber of Employees \nOR Use the Alternative size standard \nTangible Net Worth is (not in excess of $15 million) and $ \nAverage net income after Federal Income Taxes (excluding any carry over losses) for preceding 2 \ncompleted fiscal years is not in excess of $5.0 million. (The alternative size standard is found at §3(a) \nof the Small Business Act.)\n$\n\nPrepare a loan approval package checklist based solely on the supplied SBA Form 1920 excerpt. Present it as a checklist with yes/no verification items ordered to follow the form's sequence, beginning with Character Determination and proceeding through Citizenship, Prior Loss to Government or Delinquent Federal Debt, and Size Analysis. Each item must map to the corresponding SBA Form 1920 requirement or instruction and be classified according to the eligibility category it supports: character eligibility, citizenship eligibility, prior federal debt eligibility, or size eligibility. For every item, the checklist must support a binary eligible or not eligible determination based on the stated criteria. Include conditional triggers that change the required action when a disclosed crime is a felony, involves a minor, or was disposed of within the last six months; in those cases, the checklist must require electronic submission to SBA and receipt of an SBA clearance letter before approval. The checklist must also capture the lender's follow-up actions and documentation retention obligations, including retaining the original Character Determination Package and submitting required documents electronically when applicable. Flag any item that would make the loan ineligible or require an SBA waiver or clearance as an exception or gap, and connect each item to the governing criterion and resulting approval action or required clearance. Preserve exact thresholds, time periods, regulatory citations, and the submission address from the form, including the six-month disposition window, 51% ownership requirement, $15 million tangible net worth limit, $5.0 million average net income limit, and OCA912@SBA.gov.",
    "target_constraint_count": 14,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Produce the deliverable as a checklist with explicit yes/no verification items."
      },
      {
        "no": 2,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Include the requirement that felony convictions, crimes against a minor, or court dispositions within the last 6 months require electronic submission to SBA and receipt of an SBA clearance letter before approval."
      },
      {
        "no": 3,
        "tag": "RC4",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Require the checklist to capture the lender's follow-up actions and documentation retention obligations for character determination, including retaining the original Character Determination Package and submitting required documents electronically when applicable."
      },
      {
        "no": 4,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Order the checklist items to follow the sequence of the SBA Form 1920 sections, beginning with Character Determination and proceeding through Citizenship, Prior Loss to Government, and Size Analysis."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each checklist item to the corresponding SBA Form 1920 requirement or instruction from the supplied form excerpt."
      },
      {
        "no": 6,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each verification item according to the eligibility category it supports, such as character eligibility, citizenship eligibility, prior federal debt eligibility, or size eligibility."
      },
      {
        "no": 7,
        "tag": "DB1",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Require each checklist item to support a binary eligible or not eligible determination based on the form's stated criteria."
      },
      {
        "no": 8,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Include conditional triggers that change the required action when a disclosed crime is a felony, involves a minor, or was disposed of within the last six months."
      },
      {
        "no": 9,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the checklist solely on the supplied SBA Form 1920 excerpt without introducing external SBA requirements or assumptions."
      },
      {
        "no": 10,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a named loan approval package checklist as the required deliverable."
      },
      {
        "no": 11,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag any checklist item that would make the loan ineligible or require an SBA waiver or clearance as an exception or gap."
      },
      {
        "no": 12,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each checklist item to the governing SBA Form 1920 criterion and the resulting approval action or required clearance."
      },
      {
        "no": 13,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the four named review areas in the form excerpt: Character Determination, Citizenship, Prior Loss to Government or Delinquent Federal Debt, and Size Analysis."
      },
      {
        "no": 14,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact thresholds, time periods, regulatory citations, and submission address from the form, including the six-month disposition window, 51% ownership requirement, $15 million tangible net worth limit, $5.0 million average net income limit, and OCA912@SBA.gov."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 12,
    "item_id": "prototype20_t3_004",
    "workflow": "Decision and Structuring",
    "task": "Credit memo drafting",
    "work_product": "credit and structuring data pack",
    "full_prompt": "Prepare a credit and structuring data pack for Northbridge Specialty Foods LLC in a neutral, credit-analyst tone suitable for internal credit committee review. Present the pack as a structured table-based document with clearly labeled sections. Cover the requested revolving credit facility, historical financial performance, base-case forecast, downside case, collateral snapshot, and open diligence items. Cite the specific source fields and figures used for each section. Recalculate the stated revenue growth and pro forma leverage figures against the underlying financial data, and compute the pro forma debt-to-EBITDA leverage using the full draw amount and FY2025 EBITDA. Quantify the EBITDA impact of the downside scenario relative to the base case. Separate observed financial data from management's stated response and other unverified statements, and avoid representing the downside case or management response as verified. Flag the unresolved diligence gaps as open exceptions or deficiencies requiring resolution before credit approval. Describe the key credit risks arising from the downside case, customer concentration, and unresolved diligence items.\n\nThe supplied credit request and financial information follow.\n\nCREDIT REQUEST AND FINANCIAL INFORMATION\n\nBorrower: Northbridge Specialty Foods LLC\n\nREQUESTED FACILITY\nFacility | Amount | Pricing | Maturity\n--- | --- | --- | ---\nRevolving Credit | $6,500,000.00 | SOFR + 3.10% | 2030-06-30\nPurpose: seasonal working capital and refinancing of the existing revolver. Sponsor support proposed: $0.00.\n\nHISTORICAL FINANCIAL PERFORMANCE\nPeriod | Revenue | EBITDA | Cash interest | Capital expenditure\n--- | --- | --- | --- | ---\nFY2024 | $18,640,000.00 | $2,150,442.48 | $326,600.00 | $577,840.00\nFY2025 | $21,180,000.00 | $2,430,000.00 | $340,400.00 | $720,120.00\n\nThe supplied figures show revenue growth of 13.63%. At full draw, pro forma debt is $11,100,000.00, or 4.57x FY2025 EBITDA.\n\nBASE-CASE FORECAST\nPeriod | Revenue | EBITDA\n--- | --- | ---\nFY2026 | $22,874,400.00 | $2,600,100.00\nFY2027 | $24,357,000.00 | $2,818,800.00\nFY2028 | $25,839,600.00 | $3,037,500.00\n\nDOWNSIDE CASE\nRevenue is 12.0% below base and gross margin contracts by 2.0 points; estimated EBITDA is $1,749,600.00. Management's stated response is: Hiring pause and reduction of discretionary capital expenditure; not independently verified.\n\nCOLLATERAL SNAPSHOT\nCash | Eligible receivables | Inventory | Equipment value | Appraisal date\n--- | --- | --- | --- | ---\n$1,125,400.00 | $3,148,800.00 | $2,260,000.00 | $2,925,000.00 | 2025-09-30\n\nOPEN DILIGENCE ITEMS\n- Confirm payoff amount for existing senior debt.\n- Validate the latest accounts-receivable aging against the general ledger.\n- Customer concentration: the largest grocery chain represented 24.6% of 2025 revenue.\n- Obtain evidence for any sponsor support shown in the request.",
    "target_constraint_count": 11,
    "constraints": [
      {
        "no": 1,
        "tag": "FP5",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Write the data pack in a neutral, credit-analyst tone suitable for internal credit committee review."
      },
      {
        "no": 2,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag the unresolved diligence gaps as open exceptions or deficiencies requiring resolution before credit approval."
      },
      {
        "no": 3,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the pro forma debt-to-EBITDA leverage using the full draw amount and FY2025 EBITDA."
      },
      {
        "no": 4,
        "tag": "DB4",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Avoid stating that the downside case or management response is verified, and do not represent unresolved diligence items as confirmed facts."
      },
      {
        "no": 5,
        "tag": "QV7",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Quantify the EBITDA impact of the downside scenario relative to the base case."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific source fields and figures used for facility terms, financial performance, scenarios, collateral, and diligence items."
      },
      {
        "no": 7,
        "tag": "RC8",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Describe the key credit risks arising from the downside case, customer concentration, and unresolved diligence items."
      },
      {
        "no": 8,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the requested facility, historical financial performance, base-case forecast, downside case, collateral snapshot, and open diligence items."
      },
      {
        "no": 9,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Recalculate the stated revenue growth and pro forma leverage figures against the underlying financial data."
      },
      {
        "no": 10,
        "tag": "EG3",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Separate observed financial data from management's stated response and other unverified statements."
      },
      {
        "no": 11,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the credit and structuring data pack as a structured table-based pack with clearly labeled sections."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 13,
    "item_id": "prototype20_t4_001",
    "workflow": "Risk and Compliance Review",
    "task": "AML red-flag review",
    "work_product": "BSA/AML examination finding",
    "full_prompt": "The following FDIC manual excerpts discuss payable-through accounts and related controls.\n\nBenefits Associated with Payable Through Accounts\n\nWhile the objectives of U.S. financial institutions marketing PTAs and the foreign banks which subscribe to the PTA service may vary, essentially three benefits currently drive provider and user interest:\n\n• PTAs permit U.S. financial institutions to attract dollar deposits from the home market of foreign banks without jeopardizing the foreign bank's relationship with its clients.\n\n• PTAs provide fee income potential for both the U.S.\n\nPTA provider and the foreign bank.\n\n• Foreign banks can offer their customers efficient and low-cost access to the U.S. banking system.\n\nRisks Associated with Payable Through Accounts\n\nThe PTA arrangement between a U.S. banking entity and a foreign bank may be subject to the following risks:\n\n• Money Laundering risk – the risk of possible illegal or improper conduct flowing through the PTAs.\n\n• OFAC risk – the risk that the U.S. banking entity does not know the ultimate PTA customers which could facilitate the completion of sanctioned or blocked transactions.\n\n• Credit risk - the risk the foreign bank will fail to perform according to the terms and conditions of the PTA agreement, either due to bankruptcy or other financial difficulties.\n\n• Settlement risk - the risk that arises when the U.S.\n\nbanking entity pays out funds before it can be certain that it will receive the corresponding deposit from the foreign bank.\n\n• Country risk - the risk the foreign bank will be unable to fulfill its international obligations due to domestic strife, revolution, or political disturbances.\n\n• Regulatory risk - the risk that deposit and withdrawal transactions through the PTA may violate State and/or Federal laws and regulations.\n\n---\n\nDSC Risk Management Manual of Examination Policies 8.1-23 Bank Secrecy Act (10-2025)\n\nUnless a U.S. banking entity is able to identify adequately, and understand the transactions of the ultimate users of the foreign bank's account maintained at the U.S. banking entity, there is a potential for serious illegal conduct.\n\nBecause of the possibility of illicit activities being conducted through PTAs at U.S. banking entities, financial institution regulators believe it is inconsistent with the principles of safe and sound banking for U.S. banking entities to offer PTA service s without developing and maintaining policies and procedures designed to guard against the possible improper or illegal use of PTA facilities.\n\nPolicy Recommendations\n\nPolicies and procedures must be fashioned to enable each U.S. banking entity offering PTA services to foreign banks to:\n\n• Identify sufficiently the ultimate users of its foreign bank PTAs, including obtaining (or having the ability to obtain) substantially the same type of information on the ultimate users as the U.S. banking entity obtains for its domestic customers.\n\n• Review the foreign bank's own procedures for identifying and monitoring sub- account holders, as well as the relevant statutory and regulatory requirements placed on the foreign bank to identify and monitor the transactions of its own customers by its home country supervisory authorities.\n\n• Monitor account activities conducted in the PTAs with foreign banks and report suspicious or unusual activity in accordance with Federal regulations.\n\nTermination of PTAs It is recommended the U.S. banking entity terminate a PTA with a foreign bank as expeditiously as possible in the following situations:\n\n• Adequate information about the ultimate users of the PTAs cannot be obtained.\n\n---\n\n[Continues under: Policy Recommendations]\n\n• The U.S. banking entity cannot adequately rely on the home country supervisor to require the foreign bank to identify and monitor the transactions of its own customers.\n\n• The U.S. banking entity is unable to ensure that its PTAs are not being used for money laundering or other illicit purposes.\n\n• The U.S. banking entity identifies ongoing suspicious and unusual activities dominating the PTA transactions.\n\nPrivate Banking Activities\n\nPrivate banking has proven to be a profitable operation and is a fast -growing business in U.S. financial institutions.\n\nAlthough the financial service industry does not use a standard definition for private banking, it is generally held that private bankin g services include an array of all inclusive deposit account, lending, investment, trust, and cash management services offered to high net worth customers and their business interests. Not all financial institutions operate private banking departments, but they typically offer special attention to their best customers and ensure greater privacy concerning the transactions and activities of these customers. Smaller institutions may offer similar services to certain customers while not specifically referring to this activity as private banking.\n\nConfidentiality is a vital element in administering private banking relationships. Although customers may choose private banking services to manage their assets, they may also seek confidential ownership of their assets or a safe, legal haven for their capital. When acting as a fiduciary, financial institutions may have statutory, contractual, or ethical obligations to uphold customer confidentiality.\n\nTypically, a private banking department will service a financial institution’s wealthy foreign customers, as these customers may be conducting more complex transactions and using services that facilitate international transactions.\n\nBecause of these attributes, private banking also appeals to money launderers.\n\nPrepare a BSA/AML examination finding for payable-through accounts and private banking using only the supplied DSC Risk Management Manual of Examination Policies guidance. Organize the finding into named sections in a clear order, and present it in a structured examination-finding format. Begin by stating that the cited manual is examination guidance, not a direct rule or regulation. Identify the red flags and required controls from the guidance, and cite the specific source passages supporting each one. Preserve the exact names of the risk categories, policy recommendations, and termination conditions as stated in the source. Classify each identified concern into the risk categories named in the guidance, including money laundering, OFAC, credit, settlement, country, and regulatory risk. Flag as a deficiency or gap any situation where the entity cannot identify ultimate users, cannot rely on the home country supervisor, cannot ensure that PTAs are not used for illicit purposes, or identifies ongoing suspicious activity dominating PTA transactions. For each identified condition, connect it to the governing policy recommendation and the resulting required action. State that a PTA should be terminated as expeditiously as possible when adequate information about the ultimate users cannot be obtained. Do not introduce any external facts or assumptions beyond the supplied guidance.",
    "target_constraint_count": 12,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite specific source passages for each identified red flag and required control."
      },
      {
        "no": 2,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the finding into named sections with a clear order."
      },
      {
        "no": 3,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the finding in a structured examination-finding format."
      },
      {
        "no": 4,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State that the cited policy manual is examination guidance, not a direct rule or regulation."
      },
      {
        "no": 5,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Require the finding to state that a PTA should be terminated when adequate ultimate-user information cannot be obtained."
      },
      {
        "no": 6,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each identified condition to the governing policy recommendation and the resulting required action."
      },
      {
        "no": 7,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each identified concern into the risk categories named in the guidance, such as money laundering, OFAC, credit, settlement, country, or regulatory risk."
      },
      {
        "no": 8,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a BSA/AML examination finding as the final work product."
      },
      {
        "no": 9,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag any situation where the entity cannot identify ultimate users, cannot rely on the home country supervisor, cannot ensure PTAs are not used for illicit purposes, or identifies ongoing suspicious activity as a deficiency or gap."
      },
      {
        "no": 10,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact names, risk labels, policy recommendations, and termination conditions as stated in the source guidance."
      },
      {
        "no": 11,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the finding only on the supplied guidance and do not introduce external facts or assumptions."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 14,
    "item_id": "prototype20_t4_002",
    "workflow": "Risk and Compliance Review",
    "task": "AML red-flag review",
    "work_product": "virtual-currency red-flag memo",
    "full_prompt": "Prepare a virtual-currency red-flag memo using only the supplied FinCEN advisory content, without adding outside facts or assumptions. Organize the memo with clear sections separating the governing standard, source status, and red-flag observations, and present the red-flag observations as a structured checklist. In the governing-standard section, classify unregistered peer-to-peer exchangers as money services businesses and cover the requirement that, as explained in FinCEN's May 9, 2019 guidance, they must comply with all MSB requirements under the Bank Secrecy Act and its implementing regulations. Preserve the source's exact terms and descriptions for P2P exchangers and their MSB obligations, and cite the governing-standard and source-status passages when presenting the MSB classification and BSA obligations. In the red-flag section, flag the observed deficiency that unregistered entities may fraudulently represent themselves as individual account holders or misrepresent the nature of their business to conceal money transmission activity and avoid MSB AML/CFT requirements.\n\nThe reference material is the following FinCEN advisory excerpt.\n\nUnregistered Peer-to-Peer (P2P) Exchangers\n\nP2P exchangers are individuals or entities offering to exchange fiat currencies for virtual currencies or one virtual currency for another virtual currency. P2P exchangers usually operate informally, typically advertising and marketing their services through online classified advertisements, online forums, social media, and through word of mouth. P2P exchangers may provide their services online, or may arrange to meet prospective customers in person to purchase or sell virtual currency.\n\nSender\n\nCVC Address\n\nReceiver\n\nCVC\n\nNetwork\n\nPrivate Key\n\nReceiver CVC\n\nAddress Embedded\n\nCash\n\nWallet\n\n(Receives\n\n(Sends CVC\n\nfor cash) As explained in FinCEN’s recent Guidance issued on May 9, 2019, in undertaking these activities, P2P exchangers function as MSBs and, therefore, must comply with all requirements for MSBs under the Bank Secrecy Act (BSA) and its implementing regulations.\n\n7. See U.S. Department of Justice Press Release, “AlphaBay, the Largest Online ‘Dark Market,’ Shut Down,” July 20, 2017.\n\n8. See 2019 CVC Guidance, at 14-15.\n\nFinCEN is aware of cases in which unregistered entities fraudulently represent themselves as individual account holders or misrepresent the nature of their business to conceal their money transmission activity and avoid MSB AML/ CFT requirements.",
    "target_constraint_count": 14,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the memo in a structured checklist format with distinct red-flag items."
      },
      {
        "no": 2,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag the observed deficiency that unregistered entities may misrepresent themselves as individual account holders or conceal money transmission activity."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named virtual-currency red-flag memo as the required deliverable."
      },
      {
        "no": 4,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the source's exact terms and descriptions for P2P exchangers and their MSB obligations."
      },
      {
        "no": 5,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the governing standard that P2P exchangers function as MSBs and must comply with BSA requirements."
      },
      {
        "no": 6,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State the source status that the MSB characterization is based on FinCEN's May 9, 2019 guidance."
      },
      {
        "no": 7,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the memo with clear sections separating the governing standard, source status, and red-flag observations."
      },
      {
        "no": 8,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify unregistered P2P exchangers as MSBs under the governing standard."
      },
      {
        "no": 9,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied FinCEN advisory content without adding outside facts or assumptions."
      },
      {
        "no": 10,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing standard and source-status passages when presenting the MSB classification and BSA obligations."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 15,
    "item_id": "prototype20_t4_003",
    "workflow": "Risk and Compliance Review",
    "task": "Fair lending risk review",
    "work_product": "fair lending risk brief",
    "full_prompt": "The reporting material below is excerpted from the CFPB fair lending report.\n\n5536(a)(1)(A); and Federal Debt\nCollection Procedure, 28 U.S.C.\n§§ 3301–3308\nStipulated Final\nJudgment and Order\nentered on November\n7, 202410 Since the\nend of this reporting\nperiod, the CFPB also\nfiled a joint Rule\n60(b)(6) Motion for\nRelief from and\nVacatur of the\nStipulated Final\nJudgment and Order\nto better align with\ncurrent priorities.11\n2.2.1 ECOA referrals to Department of Justice\nBy law, the CFPB must refer to DOJ any matter when it has reason to believe that a creditor has\nengaged in a pattern or practice of lending discrimination in violation of ECOA.12 The CFPB may\nrefer other potential ECOA violations to DOJ as well.13 In 2024, the CFPB referred four matters\nto DOJ pursuant to 15 U.S.C. § 1691e(g). More information on these referrals can be found in\nSection 7.1.6 of this report.\n2.2.2 Implementing enforcement orders\nWhen an enforcement action is resolved through a public enforcement order, the CFPB\n(together with other government entities, when relevant) takes steps to ensure that the\nrespondent or defendant complies with the requirements of the order. Depending on the specific\nrequirements of individual public enforcement orders, the CFPB may take steps to ensure that\nborrowers who are eligible for compensation receive remuneration and that the defendant has\ncomplied with the injunctive provisions of the order, including implementing a comprehensive\nfair lending compliance management system.\n8 https://files.consumerfinance.gov/f/documents/cfpb_townstone-financial_complaint_2020-07.pdf.\n9 https://files.consumerfinance.gov/f/documents/cfpb_townstone-amended-complaint_2020-11.pdf.\n10 https://files.consumerfinance.gov/f/documents/cfpb_Townstone-Stipulated-Final-Judgment-and-Order_2024_11.pdf.\n\nPrepare a fair lending risk brief based solely on the supplied CFPB fair lending annual report excerpt. The brief must cite the specific governing standard, source status, and referral procedure from the excerpt when discussing the legal basis, status, and DOJ referral process. State the 2024 reporting period and the four DOJ referrals made in 2024 pursuant to 15 U.S.C. § 1691e(g). Cover the governing standard, source status, and ECOA referral procedure topics. Explain the CFPB's obligation to refer matters to DOJ when it has reason to believe a creditor engaged in a pattern or practice of lending discrimination in violation of ECOA. Connect the governing legal standard, source status, and referral procedure to the resulting enforcement and compliance actions without presenting them as disconnected fragments. Present the brief in a concise, ordered format with clear separation between legal basis, source status, referral activity, and enforcement-order implementation.",
    "target_constraint_count": 6,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific governing standard, source status, and referral procedure from the supplied CFPB report excerpt when discussing the legal basis, status, and DOJ referral process."
      },
      {
        "no": 2,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the 2024 reporting period and the four DOJ referrals made in 2024 pursuant to 15 U.S.C. § 1691e(g)."
      },
      {
        "no": 3,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the governing standard, source status, and ECOA referral procedure topics in the brief."
      },
      {
        "no": 4,
        "tag": "DB3",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Explain the CFPB's obligation to refer matters to DOJ when it has reason to believe a creditor engaged in a pattern or practice of lending discrimination in violation of ECOA."
      },
      {
        "no": 5,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect the governing legal standard, source status, and referral procedure to the resulting enforcement and compliance actions without presenting them as disconnected fragments."
      },
      {
        "no": 6,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the fair lending risk brief in a concise, ordered format with clear separation between legal basis, source status, referral activity, and enforcement-order implementation."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 16,
    "item_id": "prototype20_t4_004",
    "workflow": "Risk and Compliance Review",
    "task": "stress testing",
    "work_product": "stress-test scenario review",
    "full_prompt": "Prepare a stress-test scenario review grounded only in the supplied Board scenario-design text. Structure the review as a table with one row per identified scenario-design consideration and columns separating the governing basis, the stated macroeconomic or financial condition, and the source-status caveat. Identify exactly three scenario-design considerations, ordered from the most directly stated governing basis to the most clearly framed as non-predictive context. For each consideration, state the governing basis cited in the text, the relevant macroeconomic or financial condition described, and any caveat indicating that the summary should not be interpreted as an assessment of likely future developments. Include the scenario component reflecting the Board's expectation that scenario severity generally will be higher during economic expansions or periods when asset values have increased or to avoid adding sources of procyclicality through the stress test. Do not introduce outside facts or assumptions beyond the supplied text.\n\nThe supplied scenario-design discussion follows.\n\n[Continues under: Severely Adverse Scenario]\n\nTherefore, in accordance with both the Board's 2019 Scenario Design Policy Statement, as well as the Board's Proposed 2025 Scenario Design Policy Statement, the Board's scenario design approach is informed by current macroeconomic and financial conditions, which are summarized here for the purposes of the design of the final severely adverse scenario. The current unemployment rate is near the consensus forecast of the long-run natural unemployment rate in the January 2026 Blue Chip Economic Indicators . As discussed in the previous section, the final 2026 baseline scenario paths for GDP growth and inflation see GDP growth rising and inflation remaining somewhat above the FOMC's 2 percent longer-run inflation goal. 17 Equity prices have increased about 16 percent from the fourth quarter of 2024 through the fourth quarter of 2025 and about 41 percent over the past two years. While house prices have remained largely flat over the past two years, they are about 37 percent higher than their level five years ago. Commercial real estate prices have remained relatively stable since early 2024 after significant declines in 2023, and the BBB spread remains low relative to its historical series. This summary of current macroeconomic and financial conditions should not be interpreted as an assessment of likely future developments but informs the design of the severely adverse scenario, consistent with the Board's expectation that scenario severity generally will be higher during economic expansions or periods when asset values have increased or to avoid adding sources of procyclicality through the stress test.",
    "target_constraint_count": 5,
    "constraints": [
      {
        "no": 1,
        "tag": "QV7",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Identify the stress scenario component described in the context that reflects the Board's expectation that severity is generally higher during economic expansions or periods when asset values have increased."
      },
      {
        "no": 2,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the review with exactly three identified scenario-design considerations, ordered from the most directly stated governing basis to the most clearly framed as non-predictive context."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the review as a named stress-test scenario review deliverable."
      },
      {
        "no": 4,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground all observations and conclusions solely in the supplied scenario-design text without introducing outside facts or assumptions."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Format the review as a structured table with one row per identified scenario-design consideration and columns separating the governing basis, the stated macroeconomic or financial condition, and the source-status caveat."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 17,
    "item_id": "prototype20_t5_001",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Financial reporting review",
    "work_product": "operations and financial report",
    "full_prompt": "The following passage is from the CFPB financial report.\n\nU.S.C. § 1116), the Annual Performance Report is the primary document for comprehensive\norganizational performance reporting. An agency’s Annual Performance Report compares actual\nperformance results to the goals, objectives, and outcomes established in the Agency Strategic\nPlan and Annual Performance Plans, and it contains comprehensive, detailed performance\nreporting and information required by OMB Circular A-11, Part 6.\nTABLE 1: CFPB PERFORMANCE METRICS\nPerformance Measures\nFY 2025\nTarget\nFY 2025\nActual\nNumber of people who use the CFPB's educational resources on web\nand in print\n12.5 million 15.5 million\nNumber of days to route complaints to company 2 days <1 day\nPercent of company responses that are timely 98% 99.6%\nPercent of all public enforcement actions (that were not voluntarily\ndismissed or withdrawn from) that were successfully resolved through\nlitigation, a settlement, issuance of a default judgment, or other means\n75% 100%\nPercent of EEO counseling and investigations processed within\nregulatory timeframes\n95% 96%\nNumber of published research products 18 34\nFuture Action\nIn alignment with statutory requirements and OMB guidance, the CFPB is transitioning to a\nnew strategic plan that will be released in February 2026. With that transition, a selection of\ncurrent measures will be retired, and new measures will be instituted. Those new measures will\nalso be released in February as part of the 2027 Annual Performance Plan.\n\nPrepare an operations and financial report reviewing the CFPB's FY 2025 performance reporting. Organize the report into a titled executive summary, a performance results section, and a future transition section. Base every statement and calculation only on the supplied CFPB performance report text, and do not introduce outside facts or assumptions. The report itself is the required deliverable. Cite the governing standard that the Annual Performance Report compares actual performance results to the goals, objectives, and outcomes established in the Agency Strategic Plan and Annual Performance Plans and contains reporting required by OMB Circular A-11, Part 6. State the February 2026 timing for the new strategic plan and that the new measures will also be released in February as part of the 2027 Annual Performance Plan. Present the FY 2025 target versus actual performance measures in a table with columns for performance measure, FY 2025 target, and FY 2025 actual, using the supplied Table 1 figures exactly. In the performance results section, summarize how each actual result compared with its target and identify the measures that met or exceeded target. In the future transition section, describe the planned retirement of selected current measures and the institution of new measures.",
    "target_constraint_count": 7,
    "constraints": [
      {
        "no": 1,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the report into a titled executive summary, a performance results section, and a future transition section."
      },
      {
        "no": 2,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base every statement and calculation only on the supplied CFPB performance report text."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested operations and financial report as the named deliverable."
      },
      {
        "no": 4,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing standard that the Annual Performance Report compares actual results to strategic goals, objectives, and outcomes and follows OMB Circular A-11, Part 6."
      },
      {
        "no": 5,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the February 2026 timing for the new strategic plan and the February 2026 release of new measures in the 2027 Annual Performance Plan."
      },
      {
        "no": 6,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the FY 2025 target versus actual performance measures in a table with columns for performance measure, FY 2025 target, and FY 2025 actual."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 18,
    "item_id": "prototype20_t5_002",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Reconciliation",
    "work_product": "books-and-records retention standard",
    "full_prompt": "Prepare a books-and-records retention standard for reconciliation-related records using only the supplied regulatory text from § 240.17a-4. Organize the standard into clearly labeled sections that separate the governing obligation, the applicable retention periods, and the covered record categories. Present the requirements in a structured checklist or table format that maps each record category to its applicable retention period. Preserve the exact regulatory references, retention periods, and record categories from the source without alteration. Cover the distinct retention categories and record types listed in the source, including the six-year preservation requirement for records made pursuant to § 240.17a-3(a)(1) through (3), (5), and (21) and (22), and analogous records created pursuant to § 240.17a-3(e), and the three-year preservation requirement for records made pursuant to § 240.17a-3(a)(4), (6) through (11), (16), (18) through (20), and (25) through (31), and analogous records created pursuant to § 240.17a-3(e). State the applicable retention periods and accessibility timeframes exactly as specified in the source, including the six-year and three-year periods and the requirement that the first two years be kept in an easily accessible place. Identify the specific records and documents that must be preserved under the standard, including check books, bank statements, cancelled checks, cash reconciliations, and bills receivable or payable, paid or unpaid, relating to the member, broker or dealer's business as such. Do not introduce outside regulatory requirements or assumptions.\n\nThe record-retention provisions supplied for this request follow.\n\n[Continues under: § 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.]\n\n(a) Every member, broker or dealer subject to § 240.17a-3 must preserve for a period of not less than 6 years, the first two years in an easily accessible place, all records required to be made pursuant to § 240.17a-3(a)(1) through (3), (5), and (21) and (22), and analogous records created pursuant to § 240.17a-3(e).\n\n(b) Every member, broker or dealer subject to § 240.17a-3 must preserve for a period of not less than three years, the first two years in an easily accessible place:\n\n(1) All records required to be made pursuant to § 240.17a-3(a)(4), (6) through (11), (16), (18) through (20), and (25) through (31), and analogous records created pursuant to § 240.17a-3(e).\n\n(2) All check books, bank statements, cancelled checks and cash reconciliations.\n\n(3) All bills receivable or payable (or copies thereof), paid or unpaid, relating to the member, broker or dealer's business as such.",
    "target_constraint_count": 11,
    "constraints": [
      {
        "no": 1,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact regulatory references, retention periods, and record categories from the source text without alteration."
      },
      {
        "no": 2,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the distinct retention categories and record types listed in the source, including the six-year and three-year preservation requirements."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the retention standard solely on the supplied rule text without introducing outside regulatory requirements or assumptions."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a books-and-records retention standard as the named work product."
      },
      {
        "no": 5,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the standard into clearly labeled sections that separate the governing obligation, retention periods, and covered record categories."
      },
      {
        "no": 6,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the retention requirements in a structured checklist or table format that maps each record category to its applicable retention period."
      },
      {
        "no": 7,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the applicable retention periods and accessibility timeframes exactly as specified in the source, including the six-year and three-year periods and the two-year easily accessible place requirement."
      },
      {
        "no": 8,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify the specific records and documents that must be preserved under the standard, including check books, bank statements, cancelled checks, cash reconciliations, and bills receivable or payable."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 19,
    "item_id": "prototype20_t5_003",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Debt collection operations review",
    "work_product": "collection operations report",
    "full_prompt": "The debt-collection reporting excerpt is reproduced below.\n\n34 This case concerns the FDCPA’s prohibition on the\ncollection of “any amount (including any interest, fee, charge, or expense incidental to the\nprincipal obligation) unless such amount is expressly authorized by the agreement creating the\ndebt or permitted by law.”35 The CFPB’s and FTC’s brief argued that this provision bars debt\ncollectors from collecting pay-to-pay or “convenience” fees—fees imposed for making a payment\nonline or by phone—unless the agreement creating the debt expressly authorizes such fees, or a\nlaw affirmatively authorizes them.\n33 CFPB, Brief of Amicus Curiae Consumer Financial Protection Bureau in Support of Plaintiff-Appellant,\nCarrasquillo v. CICA Collection Agency, Inc., No. 23-1225 (Jan. 2024),\nhttps://files.consumerfinance.gov/f/documents/cfpb_carrasquillo-v-cica-amicus-brief_2024-01.pdf.\n34 CFPB, Brief of Amici Curiae Consumer Financial Protection Bureau and Federal Trade Commission in Support of\nPlaintiffs-Appellees, Glover and Booze v. Ocwen Loan Servicing, LLC, Nos. 23-12578, 23-12579 (Feb. 2024),\nhttps://files.consumerfinance.gov/f/documents/cfpb_amicus-brief-glover-and-booze-v-ocwen_2024-02.pdf.\n\nPrepare a collection operations report reviewing debt collection practices against the governing FDCPA standard. The report must be written in a neutral, compliance-oriented tone suitable for internal operational review. Use only the supplied FDCPA standard and the assigned review; do not add external legal interpretations or unsupported operational facts. Base the review on the supplied excerpt: the FDCPA prohibits collection of any amount incidental to the principal obligation, including interest, fees, charges, or expenses, unless the amount is expressly authorized by the agreement creating the debt or permitted by law. When citing this standard, quote or closely preserve the exact language on incidental amounts and the requirement of express authorization or legal permission, and cite the supplied FDCPA excerpt as the source. Identify the operational trigger for prohibited collection of convenience fees: if a debt collector collects such a fee and the debt agreement does not expressly authorize it and no law affirmatively permits it, the collection is prohibited. Connect the governing prohibition to the required operational action by explaining that collecting a convenience fee without express authorization or legal permission violates the FDCPA standard and must be addressed in collection operations.",
    "target_constraint_count": 6,
    "constraints": [
      {
        "no": 1,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Specify the operational trigger for prohibited collection of convenience fees when the debt agreement does not expressly authorize them and no law affirmatively permits them."
      },
      {
        "no": 2,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect the governing FDCPA prohibition to the required operational action by explaining how collection of a convenience fee without express authorization or legal permission violates the standard and must be addressed."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the collection operations report solely on the supplied FDCPA standard and the assigned review, without adding external legal interpretations or unsupported operational facts."
      },
      {
        "no": 4,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact FDCPA language on amounts incidental to the principal obligation and the requirement of express authorization or legal permission when citing the governing standard."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the supplied FDCPA prohibition excerpt as the source whenever the report references the governing standard on collecting incidental amounts."
      },
      {
        "no": 6,
        "tag": "FP5",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Write the collection operations report in a neutral, compliance-oriented tone suitable for internal operational review."
      }
    ]
  },
  {
    "review_batch_id": "staged20-range5-15-expert-9fc7a314b1fd-natural-v1",
    "sample_no": 20,
    "item_id": "prototype20_t5_004",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Trade / loan / investment execution check",
    "work_product": "confirmation content standard",
    "full_prompt": "Prepare a confirmation content standard for security futures transaction execution checks under SEC Rule 10b-10. Ground the standard only in the supplied rule text and do not add outside regulatory requirements. Organize the standard as a structured checklist or table with labeled sections for each required confirmation element. For each element, cite the governing rule section and the specific confirmation requirement, and preserve the exact terms, conditions, and disclosure triggers stated in the rule. Clearly identify the source as current regulatory rule text under SEC Rule 10b-10 and avoid presenting it as optional guidance. Connect each required confirmation element to the governing rule provision and the corresponding disclosure obligation without treating them as disconnected fragments. Include the date the transaction was executed, the identity of the single security or narrow-based security index, the number of contracts purchased or sold, the price, and the delivery month. Include the source and amount of any remuneration received or to be received, including markups, commissions, costs, fees, and other charges. State the conditional disclosure trigger that applies when no remuneration is to be paid for an initiating transaction until the occurrence of the corresponding liquidating transaction, in which case the amount of remuneration may be disclosed only on the confirmation for the liquidating transaction. Include the fact that information about the time of execution, the identity of the other party, and the broker-dealer's capacity will be available upon written request. Include whether payment for order flow is received, the amount of such payment, and the fact that the source and nature of compensation will be furnished upon written request, while noting that brokers or dealers that do not receive payment for order flow have no disclosure obligation under this paragraph.\n\nThe supplied transaction-confirmation provisions follow.\n\n[Continues under: § 240.10b-10 Confirmation of transactions.]\n\n(i) The date the transaction was executed, the identity of the single security or narrow-based security index underlying the contract for the security futures product, the number of contracts of such security futures product purchased or sold, the price, and the delivery month;\n\n(ii) The source and amount of any remuneration received or to be received by the broker or dealer in connection with the transaction, including, but not limited to, markups, commissions, costs, fees, and other charges incurred in connection with the transaction, provided, however, that if no remuneration is to be paid for an initiating transaction until the occurrence of the corresponding liquidating transaction, that the broker or dealer may disclose the amount of remuneration only on the confirmation for the liquidating transaction;\n\n(iii) The fact that information about the time of the execution of the transaction, the identity of the other party to the contract, and whether the broker or dealer is acting as agent for such customer, as agent for some other person, as agent for both such customer and some other person, or as principal for its own account, and if the broker or dealer is acting as principal, whether it is engaging in a block transaction or an exchange of security futures products for physical securities, will be available upon written request of the customer; and\n\n(iv) Whether payment for order flow is received by the broker or dealer for such transactions, the amount of this payment and the fact that the source and nature of the compensation received in connection with the particular transaction will be furnished upon written request of the customer; provided, however, that brokers or dealers that do not receive payment for order flow have no disclosure obligation under this paragraph.",
    "target_constraint_count": 12,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing rule section and the specific confirmation elements when stating each required content item."
      },
      {
        "no": 2,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify the source as current regulatory rule text under SEC Rule 10b-10 and avoid presenting it as optional guidance."
      },
      {
        "no": 3,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each required confirmation element to the governing rule provision and the corresponding disclosure obligation without treating them as disconnected fragments."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a named confirmation content standard work product."
      },
      {
        "no": 5,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the standard into labeled sections corresponding to the required confirmation elements."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact terms, conditions, and disclosure triggers stated in the rule when describing each content requirement."
      },
      {
        "no": 7,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the confirmation content standard as a structured checklist or table."
      },
      {
        "no": 8,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the content standard solely on the supplied rule text without adding outside regulatory requirements."
      },
      {
        "no": 9,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the conditional disclosure trigger for remuneration when no payment is due until a corresponding liquidating transaction occurs."
      }
    ]
  }
];
