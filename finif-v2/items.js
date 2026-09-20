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
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_001",
    "workflow": "Intake and Profiling",
    "task": "Complaint outcome analysis",
    "work_product": "complaint response outcomes complaint outcome analysis brief",
    "full_prompt": "The supplied material concerns complaint response outcomes.\n\nCompanies overwhelmingly provided timely responses, providing a timely response to 99.6% of the more\nthan 5.9 million complaints sent to them for review in 2025.\n24\n24 Complaints in which a company did not provide a response within 15 calendar days of the complaint being sent to\nthe company—or within 60 days if it requested more time—are reflected in the Consumer Complaint Database as\nnot having received a timely response.15 BUREAU OF CONSUMER FINANCIAL PROTECTION\nTABLE 1: HOW COMPANIES HAVE RESPONDED TO CONSUMER COMPLAINTS\nFinancial product\nor service Closed with\nmonetary\nrelief\nClosed with\nnon-monetary\nrelief\nClosed with\nexplanation\nAdmin\nresponse\nCompany\nreviewing\nCompany\ndid not\nprovide a\ntimely\nresponse\nAll <1% 37% 53% 9% <1% <1%\nCredit or consumer\nreporting\n<1% 40% 51% 10% <1% <1%\nDebt collection <1% 23% 66% 7% <1% 3%\nCredit card 12% 19% 63% 5% <1% <1%\nChecking or savings 10% 5% 83% 1% <1% <1%\nMoney transfer or\nservice, virtual\ncurrency\n2% 2% 94% <1% <1% 1%\nMortgage 2% 3% 91% 3% <1% 1%\nVehicle loan or lease 2% 6% 88% 2% <1% 2%\nStudent loan <1% 1% 66% <1% 1% 31%\n25\nPersonal loan 3% 4% 86% 2% <1% 4%\nPrepaid card 14% 7% 71% 3% <1% 5%\nDebt or credit\nmanagement\n3% 10% 76% 3% <1% 8%\nPayday loan 2% 2% 86% 5% <1% 5%\nTitle loan 2% 6% 88% <1% <1% 3%\nDeposit advance 3% 2% 84% 3% <1% 8%\n25 See discussion infra Section 4.8.16 BUREAU OF CONSUMER FINANCIAL PROTECTION\n4. Complaint types\nThis section summarizes the types of complaints and issues identified by consumers in 2025.\n\nPrepare a complaint outcome analysis brief based on the 2025 CFPB Consumer Response Annual Report. Keep the brief concise: for each financial product, highlight no more than three outcome categories, and order the product rows by timeliness failure rate from highest to lowest. For each product, classify its dominant complaint outcome into one of the report's response categories: monetary relief, non-monetary relief, explanation, administrative response, company reviewing, or no timely response. Use the exact outcome labels from the report, such as 'Closed with monetary relief' and 'Closed with explanation', without paraphrasing them. Ground every outcome claim in the report's overall timeliness metric of 99.6% timely responses and the product-level response table, citing those figures as the evidence for the analysis.",
    "target_constraint_count": 5,
    "sample_no": 21,
    "constraints": [
      {
        "no": 1,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief in a concise form with no more than three outcome categories highlighted per product and order product rows by timeliness failure rate from highest to lowest."
      },
      {
        "no": 2,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each financial product's dominant complaint outcome into one of the report's response categories: monetary relief, non-monetary relief, explanation, administrative response, company reviewing, or no timely response."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a complaint outcome analysis brief that summarizes how companies responded to consumer complaints by product."
      },
      {
        "no": 4,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the exact outcome labels from the report, such as 'Closed with monetary relief' and 'Closed with explanation', without paraphrasing them."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the report's overall timeliness metric and the product-level response table as the evidence for every outcome claim."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_002",
    "workflow": "Intake and Profiling",
    "task": "Complaint outcome analysis",
    "work_product": "credit reporting complaints complaint outcome analysis brief",
    "full_prompt": "Prepare a credit reporting complaints complaint outcome analysis brief using only the supplied CFPB consumer response annual report excerpt. Structure the brief with distinct sections for complaint volume, issue types, reported impacts, supporting records, and company responses. Present the analysis in a table that lists complaint issue categories, reported impacts, supporting records, and aggregate volume observations. Classify the complaint issue categories and reported outcomes using the categories described in the source, including inaccurate or incomplete information and the specific tradeline, public record, personal information, inquiry information, and collections problems. Identify the supporting records consumers cited or attached, such as police reports and FTC identity theft reports. Map each reported observation to the corresponding source evidence, including the 249% increase in the monthly average for the top issue compared with the prior two years and the most common complaint issue. Preserve the source figures and terms exactly, including the 249% increase and the named complaint issue categories. Do not introduce any outside facts or assumptions.\n\nThe supplied material concerns credit reporting complaints.\n\nFIGURE 9: MONTHLY COMPLAINT VOLUME FOR TYPES OF CREDIT OR CONSUMER REPORTING\nCOMPLAINTS\nIn 2025, the monthly average for the top issue, Incorrect information on your report, increased 249%\ncompared to the monthly average for the prior two years (Figure 10).\nFIGURE 10: MONTHLY COMPLAINT VOLUME FOR ISSUES OF CREDIT OR CONSUMER REPORTING\nCOMPLAINTS20 BUREAU OF CONSUMER FINANCIAL PROTECTION\nThe most common complaint was about inaccurate or incomplete information. Consumers reported\nproblems with tradeline information (e.g., account and payment statuses, outstanding balances), public\nrecord information (e.g., bankruptcies and legal records), personal information (e.g., addresses, phone\nnumbers), inquiry information (e.g., hard and soft inquires), and collections (e.g., third-party collections).\nConsumers reported they were unable to obtain jobs and apartments due to errors on their credit reports.\nIn many of these complaints, consumers assert that the inaccurate information stems from identity theft or\nfraud. In support of these claims, they cite to or attach police reports or FTC identity theft reports.\nIn response to complaints about inaccurate or incomplete information, NCRAs generally treated these\ncomplaints as a dispute or a block of information request, and they responded by detailing how\ninformation was verified, updated, removed, or otherwise not being reported. Other CRAs and furnishers\ntook similar actions or summarized the results of the prior reinvestigation or block request. Some CRAs\nand furnishers reported that although they attempted to contact the consumer, those attempts were\nunsuccessful.",
    "target_constraint_count": 12,
    "sample_no": 22,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured table with complaint issue categories, reported impacts, supporting records, and aggregate volume observations."
      },
      {
        "no": 2,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify the credit reporting complaint issue categories and reported outcomes using the categories described in the source."
      },
      {
        "no": 3,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify the supporting records consumers cited or attached, including police reports and FTC identity theft reports."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with distinct sections for complaint volume, issue types, reported impacts, supporting records, and company responses."
      },
      {
        "no": 5,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a complaint outcome analysis brief for credit reporting complaints as the named work product."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each reported observation in the brief to the corresponding source evidence, including the complaint volume increase and the most common complaint issue."
      },
      {
        "no": 7,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied CFPB report excerpt as the basis for all facts, comparisons, and classifications in the brief."
      },
      {
        "no": 8,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the source figures and terms exactly, including the 249% increase and the named complaint issue categories."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_003",
    "workflow": "Intake and Profiling",
    "task": "Complaint outcome analysis",
    "work_product": "credit card billing and service complaints complaint outcome analysis brief",
    "full_prompt": "The supplied material concerns credit card billing and service complaints.\n\nConsumers complained about billing error disputes. They stated billing errors were typically resolved in\nfavor of merchants despite documentation provided in support of their complaint. Some reported that\nbilling errors typically involved merchandise returns not being credited properly, unauthorized charges\nrelated to identity theft, and being charged more than receipts showed. Others reported having to contact\ncredit card issuers multiple times to resolve disputes prior to their complaint submission to the Bureau.\nSome companies investigated consumer dispute claims and settled in favor of consumers after further\ninvestigation. In other cases, they clarified the reason for the dispute denial in their responses, or stated no\nerror occurred.\nConsumers reported being dissatisfied with customer service interactions. They reported being transferred\nmultiple times to other associates or departments and receiving inconsistent information from company\nrepresentatives. They experienced extended wait times, disconnected calls, and repeated calls necessary to\nreport issues. Companies typically apologized for challenges consumers experienced with customer\nservice, and some reported that feedback would be sent to the appropriate internal office. In many\ncomplaints, however, companies determined that no wrongdoing occurred.\nConsumers reported that payments were applied inaccurately or later than expected, resulting in fees,\ninterest, and negative credit reporting. They also reported misapplication of payments such that lower\namounts were credited to their accounts or auto payments did not process as expected. In some instances,\nconsumers did not realize late payments were being reported until after they reviewed their credit reports.\n\nPrepare a credit card billing and service complaint outcome analysis brief using only the supplied CFPB annual report text. Organize the brief into an opening summary of complaint themes, followed by a section on company outcomes and a section on consumer-reported impacts. Present the analysis as a structured table with separate columns for complaint type, company outcome, and consumer-reported impact. Preserve the source terms for complaint types, such as merchandise returns not credited, unauthorized charges related to identity theft, and charges exceeding receipts, without paraphrasing them into different categories. Map each stated outcome category to the specific complaint behavior it describes in the source text. Classify each company response into the source-supplied outcome categories: settled in favor of consumer, clarified denial reason, stated no error occurred, or determined no wrongdoing occurred. Flag the gap where companies determined no wrongdoing occurred despite consumers reporting inaccurate or late payment application that led to fees, interest, and negative credit reporting. Do not introduce outside complaint statistics or regulatory interpretations.",
    "target_constraint_count": 10,
    "sample_no": 23,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the analysis as a structured table with separate columns for complaint type, company outcome, and consumer-reported impact."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the source terms for complaint types, such as merchandise returns not credited, unauthorized charges related to identity theft, and charges exceeding receipts, without paraphrasing them into different categories."
      },
      {
        "no": 3,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each stated outcome category to the specific complaint behavior it describes in the source text."
      },
      {
        "no": 4,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each company response into the source-supplied outcome categories: settled in favor of consumer, clarified denial reason, stated no error occurred, or determined no wrongdoing occurred."
      },
      {
        "no": 5,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a brief titled for credit card billing and service complaint outcome analysis."
      },
      {
        "no": 6,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied CFPB annual report text as the basis for all stated outcomes and impacts, without introducing outside complaint statistics or regulatory interpretations."
      },
      {
        "no": 7,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into an opening summary of complaint themes followed by a section on company outcomes and a section on consumer-reported impacts."
      },
      {
        "no": 8,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag the gap where companies determined no wrongdoing occurred despite consumers reporting inaccurate or late payment application that led to fees, interest, and negative credit reporting."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_004",
    "workflow": "Intake and Profiling",
    "task": "Complaint outcome analysis",
    "work_product": "student loan complaint outcomes complaint outcome analysis brief",
    "full_prompt": "Prepare a student loan complaint outcomes complaint outcome analysis brief using only the supplied CFPB annual report excerpt. Structure the brief with clear sections and include a table summarizing the reported outcome percentages. State that the analysis covers the 2025 reporting period and note the as-of date of March 2, 2026 for the pending complaint figures. Preserve the reported complaint counts, response rates, and outcome percentages exactly as stated in the source. Identify the no-response or untimely-response deficiency as a service gap in the complaint outcome analysis. Mark the pending-review complaints and any other unresolved or incomplete statuses as open or unknown items. Classify the most common issue by its reported issue category, and use the exact phrase 'Dealing with your lender or servicer' when naming that issue.\n\nThe supplied material concerns student loan complaint outcomes.\n\nThe CFPB received approximately 23,700 student loan complaints in 2025. It sent 21,500 (91%) of these\ncomplaints to companies for review and response, referred 6% to other regulatory agencies, and found 2%\nto be not actionable. As of March 2, 2026, 0.03% of student loan complaints were pending with the\nconsumer and 0.02% were pending with the CFPB.\nCompanies responded to 69% of student loan complaints sent to them for review and response. In 77% of\nthese complaints, consumers reported first attempting to resolve their issue with the company. Companies\nclosed 66% of them with an explanation, 0.2% with monetary relief, and 1% with non-monetary relief.\nThey provided an administrative response for 0.4% of complaints. Companies did not provide a timely\nresponse—or a response at all—for 31% of complaints.\n33 As of March 2, 2026, 1% of complaints were\npending review by the company.\nWhen submitting student loan complaints, consumers specify whether they are complaining about a\nfederal student loan or a private student loan. In 2025, consumers complained about federal student loans\nmore frequently than private student loans (see Figure 35).34\nFIGURE 35: STUDENT LOAN COMPLAINTS BY TYPE OF LOAN AND OUTCOMES\nConsumers also identify the issue that best describes the problem they experienced. The most common\nissue was Dealing with your lender or servicer (Figure 36).\n33 In 2025, companies reported that pending litigation over federal student loan repayment programs, as well as\nchanges in student loan servicing, resulted in untimely responses or no responses at all. See generally, Consumer\nFin. Prot. Bureau, Annual Report of the CFPB Private Education Student Loan Ombudsman (Jan. 2026),\nhttps://files.consumerfinance.gov/f/documents/cfpb_pelo-annual-report_2026-01.pdf (discussing student loan\ncomplaints and untimely responses).",
    "target_constraint_count": 8,
    "sample_no": 24,
    "constraints": [
      {
        "no": 1,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the reported no-response or untimely-response deficiency as a service gap in the complaint outcome analysis."
      },
      {
        "no": 2,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Mark the pending-review complaints and any other unresolved or incomplete statuses as open or unknown items."
      },
      {
        "no": 3,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify the most common issue by its reported issue category, Dealing with your lender or servicer."
      },
      {
        "no": 4,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground the entire brief only in the supplied CFPB annual report excerpt, without adding outside facts or assumptions."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the complaint outcome analysis as a structured brief with clear sections and a table summarizing the reported outcome percentages."
      },
      {
        "no": 6,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the as-of date for the pending complaint figures and the 2025 reporting period covered by the analysis."
      },
      {
        "no": 7,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the exact phrase 'Dealing with your lender or servicer' when naming the most common student loan complaint issue."
      },
      {
        "no": 8,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the reported complaint counts, response rates, and outcome percentages exactly as stated in the source."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_005",
    "workflow": "Intake and Profiling",
    "task": "Complaint intake evidence review",
    "work_product": "covered credit reporting complaint scope complaint intake evidence review brief",
    "full_prompt": "The supplied material concerns covered credit reporting complaint scope.\n\nCFPB complaints. Most often the reported relief is non-monetary (e.g., an NCRA reporting that\nit made changes to a consumer’s report).\nReporting requirements and scope\nThis report fulfills the FCRA Section 611(e)(5) reporting requirement, which directs the CFPB to\nsubmit to Congress an annual report regarding information gathered by the CFPB.\n10 This report\nsummarizes certain complaints about credit reporting inaccuracies that have been lodged\nagainst the NCRAs—specifically those where the consumer appears to have previously utilized\nFCRA dispute procedures—and the actions taken by NCRAs in response to these complaints.\nThis report proceeds through the following sections. Section 2 summarizes credit and consumer\nreporting complaints overall and situates complaints that are covered by FCRA Section 611(e).\nSection 3 provides more detail on how the NCRAs are responding to covered complaints and\ndescribes the actions they report having taken with respect to these complaints.\nData sources\nThis report uses CFPB complaint data collected during the consumer complaint process. This\nreport focuses primarily on CFPB complaint data from January 2024 through June 2025, but\nincludes data going back to 2020 to provide more context in some figures. The NCRAs have\nadditional response fields that are presented only on certain “covered” issues (see Figure 3).\nThese fields were introduced in 2012 to allow the CFPB to efficiently complete the data\ncollection required by FCRA Section 611(e). The NCRAs’ responses are summarized in section\n2.2 of this report.\n10 15 U.S.C. § 1681i(e)(5). Note the statutory language refers to the Federal Trade Commission (“Commission”) as the\nissuer of this report. However, that is likely a drafting error given the data is collected by the Bureau. 6 CONSUMER FINANCIAL PROTECTION BUREAU\n2. Complaint data\nFrom January 1, 2024, to June 30, 2025, the CFPB received more than 5.6 million complaints.\nMost of these complaints—almost 4.8 million—were about credit and consumer reporting.\n11 And\nmost credit reporting complaints—about 3.9 million—were about the three largest NCRAs\n(Equifax, Experian, and TransUnion). Complaints to NCRAs dominated the overall growth of\ncredit reporting complaints, with an almost 3,000% increase in NCRA complaints since January\n1, 2020.\nConsumers can also submit complaints about furnishers and other, more specialized CRAs.\nSome complaints are forwarded to other regulators because the named company does not\nparticipate in the CFPB’s complaint process (e.g., the company does not offer a consumer\nfinancial product or service, such as a utility company). These categories also increased since\nJanuary 1, 2020, by about 1,000% combined (Figure 2).\n\nPrepare a complaint intake evidence review brief covering the scope of credit reporting complaints. Structure the brief with clear headings for reporting requirements and scope, data sources, and complaint data. State that the source data covers the period from January 2024 through June 2025, while noting that some figures include data going back to 2020 for additional context. Preserve the exact complaint volume figures and growth percentages from the source, including the more than 5.6 million total complaints, almost 4.8 million credit and consumer reporting complaints, about 3.9 million complaints about the three largest NCRAs, and the almost 3,000% increase in NCRA complaints since January 1, 2020. Classify the complaint populations described in the source into covered NCRA complaints involving prior FCRA dispute procedures, complaints about furnishers and other specialized CRAs, and complaints forwarded to other regulators because the named company does not participate in the CFPB complaint process. Identify the covered complaint issue types, including credit reporting inaccuracies lodged against NCRAs where the consumer appears to have previously used FCRA dispute procedures, complaints about furnishers and specialized CRAs, and complaints forwarded to other regulators for non-participating companies. Explain the source-status caveat that the report is issued under FCRA Section 611(e)(5), which refers to the Federal Trade Commission as the issuer, but the source notes this is likely a drafting error because the data is collected by the CFPB.",
    "target_constraint_count": 6,
    "sample_no": 25,
    "constraints": [
      {
        "no": 1,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact complaint volume figures and growth percentages from the source, including the 5.6 million total complaints, 4.8 million credit and consumer reporting complaints, 3.9 million complaints about the three largest NCRAs, and the nearly 3,000% increase in NCRA complaints since January 1, 2020."
      },
      {
        "no": 2,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify the complaint populations described in the source into the categories of covered NCRA complaints involving prior FCRA dispute procedures, complaints about furnishers and other specialized CRAs, and complaints forwarded to other regulators because the named company does not participate in the CFPB complaint process."
      },
      {
        "no": 3,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the reporting period covered by the source data as January 2024 through June 2025, while noting that some figures include data going back to 2020 for additional context."
      },
      {
        "no": 4,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Explain the source-status caveat that the report is issued under FCRA Section 611(e)(5), which refers to the Federal Trade Commission as the issuer, but the source notes this is likely a drafting error because the data is collected by the CFPB."
      },
      {
        "no": 5,
        "tag": "RC3",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Identify the covered complaint issue types in the source, including credit reporting inaccuracies lodged against NCRAs where the consumer appears to have previously used FCRA dispute procedures, complaints about furnishers and specialized CRAs, and complaints forwarded to other regulators for non-participating companies."
      },
      {
        "no": 6,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Format the work product as a structured brief with clear headings for reporting requirements and scope, data sources, and complaint data."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_006",
    "workflow": "Intake and Profiling",
    "task": "Complaint intake evidence review",
    "work_product": "credit reporting complaint growth limitations complaint intake evidence review brief",
    "full_prompt": "Prepare a credit reporting complaint growth limitations complaint intake evidence review brief using only the supplied CFPB context. Structure the brief into clearly labeled sections, including at least a source basis section and a growth limitations section. In the source basis section, cite the specific CFPB reports and complaint process documents referenced in the context, such as the Annual report of credit and consumer reporting complaints and the Consumer Response Annual Report, and preserve their exact titles, citation references, complaint categories, and the January 1, 2020 baseline. In the growth limitations section, classify the complaint categories and growth factors identified in the context into the types described by the CFPB report, including complaints about furnishers and specialized CRAs, complaints forwarded to other regulators, and factors such as third-party use, finfluencers, repeat submissions, and AI agents. Use January 1, 2020 as the baseline period for discussing complaint volume growth. Do not introduce any outside facts or assumptions.\n\nThe supplied material concerns credit reporting complaint growth limitations.\n\nConsumers can also submit complaints about furnishers and other, more specialized CRAs.\nSome complaints are forwarded to other regulators because the named company does not\nparticipate in the CFPB’s complaint process (e.g., the company does not offer a consumer\nfinancial product or service, such as a utility company). These categories also increased since\nJanuary 1, 2020, by about 1,000% combined (Figure 2).\n11 The credit reporting industry is the subject of many complaints in part because of its market structure. See, e.g.,\nConsumer Fin. Prot. Bureau, Annual report of credit and consumer reporting complaints at Sec. 3 (Jan. 2022),\nhttps://files.consumerfinance.gov/f/documents/cfpb_fcra-611-e_report_2022-01.pdf (“2021 CFPB Report”)\n(discussing the difficulty of complaint volume comparisons to other products). The CFPB’s complaint form reflects\nthis market feature, allowing consumers to submit complaints to multiple companies in a single session. See, e.g.,\nConsumer Fin. Prot. Bureau, Consumer Response Annual Report (Mar. 2021),\nhttps://files.consumerfinance.gov/f/documents/cfpb_2020-consumer-response-annual-report_03-2021.pdf\n(“When submitting complaints, consumers identify the company or companies about which they are complaining.\nIn April 2017, in response to feedback from stakeholders and consumers, the Bureau made enhancements to\nimprove the user experience when submitting a complaint. Where consumers had previously had to go through the\nentire submission process separately for each company about which they were submitting a complaint, beginning in\nApril 2017 consumers could use one submission process to submit complaints about up to four companies. The\nBureau sends one complaint to each company the consumer identifies.”).7 CONSUMER FINANCIAL PROTECTION BUREAU\nFIGURE 2: COMPLAINT VOLUME BY COMPANY TYPES INDEXED TO JANUARY 2020\nThe CFPB previously described potential factors underlying the increase in complaint volume.12\nFor example, the CFPB discussed the increase in third parties using the complaint process,\nincluding credit repair organizations and those who offer credit advice online and on social\nmedia platforms (so called “finfluencers” or “FinTok”).13 The CFPB also described an increase in\nthe number of consumers coming to the CFPB’s process, an increase in the number of\ncomplaints submitted in a single session, and an increase in the number of consumers returning\nto the complaint process. New technologies, such as large language models and autonomous\nsoftware systems (“AI Agents”) only further complicate this area and create greater demands on\ngovernment and companies generally.14 All of these factors continue to remain relevant to the\ndramatic growth in complaint volume. The CFPB is exploring ways to institute reforms to\nimprove the complaint process and enhance the utility of the data to the marketplace.\n12 See, e.g., 2021 CFPB Report, supra note 11 at Sec. 3.1.\n13 See, e.g., Nikita Aggarwal, D. Bondy Valdovinos Kaye & Christopher K. Odinet, #Fintok and Financial Regulation,\n54 Ariz. St. L.J. 1035 (2022) (discussing how social media platforms have become new sites for influencing financial\nbehavior).",
    "target_constraint_count": 10,
    "sample_no": 26,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured brief with clearly labeled sections rather than unstructured prose."
      },
      {
        "no": 2,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Use January 1, 2020 as the baseline period for discussing complaint volume growth."
      },
      {
        "no": 3,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into named sections, including at least a source basis section and a growth limitations section."
      },
      {
        "no": 4,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify the complaint categories and growth factors identified in the context into the types described by the CFPB report."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground all findings exclusively in the supplied CFPB context without introducing outside facts or assumptions."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific CFPB reports and complaint process documents referenced in the context when presenting evidence."
      },
      {
        "no": 7,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named credit reporting complaint growth limitations complaint intake evidence review brief."
      },
      {
        "no": 8,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact report titles, citation references, complaint categories, and the January 1, 2020 baseline from the source text."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_007",
    "workflow": "Intake and Profiling",
    "task": "Consumer needs profiling",
    "work_product": "financial education audience segmentation consumer needs profiling brief",
    "full_prompt": "The supplied material concerns financial education audience segmentation.\n\nCouncil members the heads of each federal department, agency, or governmental entity\nidentified as administering programs related to abuse, neglect, or financial exploitation,\nsupports federal coordination on aging-related priorities. OA is member of the federal\nagencies working group, contributing expertise on the financial security of older adults.\n RAISE Family Caregivers Act. Under the act, the Secretary of Health and Human Services\ndevelops a national family caregiving strategy. OA is a member of the RAISE advisory\ncouncil, contributing expertise on the financial security of older adults and financial\ncaregiving.\n Supporting Grandparents Raising Grandchildren (SGRG) Act. The act established a\nfederal Advisory Council to identify, promote, and coordinate resources for grandparents and\nkinship caregivers. OA is a member of the SGRG advisory council, contributing expertise on\nthe financial security of older adults and financial caregiving.\n2.3 Youth financial education\nFinEd develops and implements a strategy to improve the financial literacy of consumers\nconsistent with the U.S. National Strategy for Financial Literacy1 through activities that provide\naccess to information on savings, debt, credit, borrowing, and other financial decisions.2\nOne of FinEd’s priorities is to develop and disseminate high-quality financial education\nresources for young people aged three to 21 to develop the financial skills of the next generation.\nFinEd works to ensure these resources are distributed through schools, communities, and\nhouseholds.\n\nPrepare a financial education audience segmentation consumer needs profiling brief using only the supplied federal financial education report excerpt. Structure the brief with an audience segmentation section and a consumer needs profiling section. In the audience segmentation section, present the segments as a structured list or table with segment names and associated needs. Cover the named audience topics of older adults, financial caregivers, and youth aged three to 21. For each segment, cite the specific federal coordination bodies and educational priorities described in the source, preserving the exact terms for the age range, governing acts, and coordination bodies. State that the source reflects federal coordination and educational strategy guidance rather than individual consumer records. Do not introduce outside facts or assumptions about the audiences.",
    "target_constraint_count": 13,
    "sample_no": 27,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a financial education audience segmentation consumer needs profiling brief as the named work product."
      },
      {
        "no": 2,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific federal coordination bodies and educational priorities from the source when describing audience segments."
      },
      {
        "no": 3,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the audience topics of older adults, financial caregivers, and youth aged three to 21 as named segments."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Structure the brief with an audience segmentation section and a consumer needs profiling section."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided context and do not introduce outside facts or assumptions about the audiences."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the source's exact terms for the age range, governing acts, and coordination bodies when profiling needs."
      },
      {
        "no": 7,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State that the source reflects federal coordination and educational strategy guidance rather than individual consumer records."
      },
      {
        "no": 8,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the audience segmentation as a structured list or table with segment names and associated needs."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_008",
    "workflow": "Intake and Profiling",
    "task": "Consumer needs profiling",
    "work_product": "payment scam exposure consumer needs profiling brief",
    "full_prompt": "Prepare a payment scam exposure consumer needs profiling brief using only the supplied CFPB financial literacy annual report excerpt. Organize the brief into clearly labeled sections: an introduction, affected consumer segments, complaint types, and reporting gaps. Present the profiling content as a structured table with rows for each consumer segment and columns for key profiling dimensions such as victim frequency, financial impact, and relevant scam types. Classify the complaint types described in the source into distinct scam and fraud categories, including impersonation scams like \"me to me\" scams and unauthorized transfers involving account takeover and identity theft. State the January 1, 2018 to December 31, 2023 period during which the CFPB observed the increase in P2P fraud complaints. Identify and mark missing or unknown data points that prevent a complete consumer needs profile, such as the fact that most fraud and scams go unreported to federal agencies. Cite the FTC and FBI sources referenced in the context when discussing victim demographics and financial impact. Do not introduce any outside facts or assumptions beyond the provided report.\n\nThe supplied material concerns payment scam exposure.\n\nFraud and scams present an ever-increasing problem for consumers, and no population is\nimmune. They affect young and older people, servicemembers, veterans, and their families.\nYoung adults are more frequent victims, while older adults are more heavily impacted financially\nwhen they are victims. Although the FTC4 and the Federal Bureau of Investigation (FBI)5\n4 See, e.g., Fed. Trade Comm’n., Consumer Advice, Top Scams of 2024, (Mar. 10, 2025),\nhttps://consumer.ftc.gov/consumer-alerts/2025/03/top-scams-2024.\n5 See, e.g., Fed. Bureau of Investigation, Internet Crime Report (2024),\nhttps://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf.\n11 CONSUMER FINANCIAL PROTECTION BUREAU\nreceived fraud and scam reports totaling $12.5 to $16.6 billion in 2024, the true cost could be six\nor seven times higher, because most fraud and scams6 go unreported to federal agencies.\nConsumers are increasingly describing issues related to fraud and scams in their complaints to\nthe CFPB. For example, as peer-to-peer (P2P) payment platforms have flourished in recent years,\nso have fraud and scams. Between January 1, 2018, and December 31, 2023, the CFPB saw a\nsignificant increase in the number of complaints about P2P services; a machine learning model\nestimated that about 38% of the complaints were about fraud, amounting to millions of dollars\nstolen from consumers. Complaints include impersonation scams like “me to me” scams as well\nas unauthorized transfers that involve account takeover and identity theft. Consumers also\ncomplained about P2P companies’ responses to fraud and scams, including unresponsive\ncustomer service.",
    "target_constraint_count": 10,
    "sample_no": 28,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the profiling brief as a structured table with rows for each consumer segment and columns for key profiling dimensions."
      },
      {
        "no": 2,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify and mark missing or unknown data points that prevent a complete consumer needs profile, such as unreported fraud and scam cases."
      },
      {
        "no": 3,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify the complaint types from the source into distinct scam and fraud categories, including impersonation scams and unauthorized transfers."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into clearly labeled sections, including an introduction, affected consumer segments, complaint types, and reporting gaps."
      },
      {
        "no": 5,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested payment scam exposure consumer needs profiling brief as the primary deliverable."
      },
      {
        "no": 6,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the January 1, 2018 to December 31, 2023 period during which the CFPB observed the increase in P2P fraud complaints."
      },
      {
        "no": 7,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the profiling brief solely on the provided CFPB report content without introducing outside facts or assumptions."
      },
      {
        "no": 8,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the FTC and FBI sources referenced in the context when discussing victim demographics and financial impact."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_009",
    "workflow": "Intake and Profiling",
    "task": "Consumer needs profiling",
    "work_product": "young adult financial vulnerability consumer needs profiling brief",
    "full_prompt": "The supplied material concerns young adult financial vulnerability.\n\nAmerica, (Mar. 11, 2026), https://consumerfed.org/wp-content/uploads/2026/03/The-Scam-Economy_The-True-Cost-of-Online-Scams.pdf. This report conservatively estimates the true cost of scams in America is at least $119\nbillion annually using an analysis of underreporting patterns documented by the Bureau of Justice Statistics (BJS)\nand other researchers, the FBI ITC 2024 data, and third-party research.\n7 See, e.g., FINRA Inv. Educ. Found., Can Educational Interventions Reduce Susceptibility to Financial Fraud?,\n(March 2021). https://www.finrafoundation.org/sites/finrafoundation/files/2024-10/can-educational-interventions-reduce-susceptibility-to-financial-fraud_0_0.pdf\n12 CONSUMER FINANCIAL PROTECTION BUREAU\nFraud and scams among young adults\nYoung adults, ages 20 to 29, are losing money to fraud and scams more often than people ages\n70 to 79.8 But young adults do not lose as much money, mainly because they do not have as\nmuch to lose. Despite being comfortable online, young people are more likely to be victims\nbecause they engage in riskier behaviors. Their lack of experience with personal finance makes\nthem more susceptible to fraudsters.9\nYoung people are more likely to lose money when shopping online via a payment app or service\nafter being contacted through social media.10 A survey of young people ages 16 to 34 found that\nthey are very likely to share personal information online. Two-fifths of young people share their\nfinancial and payment details online (42% of 16- to 24-year-olds and 46% of 25- to 34-year-olds). This opens them up to fraud and scams, including identity theft and fraudulent investment\noffers.\n\nPrepare a young adult financial vulnerability consumer needs profiling brief using only the supplied CFPB financial literacy annual report excerpt as your source. Organize the brief into named sections: Overview, Profile Factors, Vulnerability Drivers, and Implications. Present the core findings in a structured table with columns for profile factor, supporting evidence, and vulnerability implication. For each finding, map it to the specific source passage it came from, including the $119 billion annual scam cost estimate, the statement that young adults ages 20 to 29 lose money to fraud and scams more often than people ages 70 to 79, and the explanation that their lack of personal finance experience makes them more susceptible. Preserve all exact source figures, age ranges, and percentages, including the 42% of 16- to 24-year-olds and 46% of 25- to 34-year-olds who share financial and payment details online. Classify the vulnerability drivers identified in the source into the categories of behavioral risk, experience gap, and information-sharing exposure. Do not introduce any outside data, assumptions, or facts beyond what is provided in the excerpt.",
    "target_constraint_count": 9,
    "sample_no": 29,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the profiling brief as a structured table with columns for profile factor, supporting evidence, and vulnerability implication."
      },
      {
        "no": 2,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied CFPB report excerpt as the source of all facts and findings; do not introduce outside data or assumptions."
      },
      {
        "no": 3,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with named sections for overview, profile factors, vulnerability drivers, and implications."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named work product: a young adult financial vulnerability consumer needs profiling brief."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each stated finding to the specific source passage it came from, including the $119 billion scam cost estimate and the age 20-29 fraud victimization statement."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve exact source figures, age ranges, percentages, and terminology such as the $119 billion estimate and the 42% and 46% sharing rates without alteration."
      },
      {
        "no": 7,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify the young adult vulnerability drivers identified in the source into the categories of behavioral risk, experience gap, and information-sharing exposure."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_010",
    "workflow": "Intake and Profiling",
    "task": "Consumer needs profiling",
    "work_product": "financial education evaluation measures consumer needs profiling brief",
    "full_prompt": "Prepare a financial education evaluation measures consumer needs profiling brief based solely on the supplied CFPB annual report excerpt. Organize the brief into two named sections: Process Metrics and Impact Metrics. Within each section, present the evaluation measures as a checklist of metric items drawn from the excerpt, without introducing any outside facts. Preserve the exact FTC report titles, dates, and URLs when describing the source references for fraud and scam training and informational webinars aimed at older adults and servicemembers, and cite both FTC references where they appear. In the Process Metrics section, cover how the format and delivery of financial education content are gauged. In the Impact Metrics section, cover how changes in outcomes, such as increases in financial well-being scores or decreases in debt, are examined. Conclude the brief by noting what the CFPB learns through both types of metrics about what makes financial education effective and how financial education impacts financial well-being.\n\nThe supplied material concerns financial education evaluation measures.\n\n15 See e.g., Fed. Trade Comm’n, Protecting Older Consumers 2024-2025, (Dec. 1, 2025).\nhttps://www.ftc.gov/system/files/ftc_gov/pdf/P144400-OlderAdultsReportDec2025.pdf.\n16 See e.g., Fed. Trade Comm’n, Consumer Sentinel Network Data Book, (March (2025).\nhttps://www.ftc.gov/system/files/ftc_gov/pdf/csn-annual-data-book-2024.pdf.\n14 CONSUMER FINANCIAL PROTECTION BUREAU\nAs mentioned in previous sections, the CFPB also offered training and informational webinars\nrelated to fraud and scams to provide financial education to specific populations, including older\nadults and servicemembers.\n15 CONSUMER FINANCIAL PROTECTION BUREAU\n3. Optimizing and measuring\nfinancial education and financial\nwell-being\nFinEd develops and maintains a broad array of digital financial education resources, from youth\nfinancial education materials to the popular set of questions and answers, Ask CFPB. FinEd also\nengages with the research community to measure the effectiveness of financial education\nprograms and methods.\nTo understand the effectiveness of its financial education efforts, FinEd uses two types of\nevaluation: process and impact. Process metrics gauge the format and delivery of financial\neducation content. Impact metrics examine changes in outcomes, such as increases in financial\nwell-being scores or decreases in debt. Through both types of metrics, the CFPB learns about\nwhat makes financial education effective and how financial education impacts financial well-being.",
    "target_constraint_count": 8,
    "sample_no": 30,
    "constraints": [
      {
        "no": 1,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into named sections for process metrics and impact metrics."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact cited FTC report titles, dates, and URLs from the source material."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the profiling brief only on the supplied CFPB annual report excerpt without introducing outside facts."
      },
      {
        "no": 4,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the two FTC references when describing the source material for fraud and scam education targeting older adults and servicemembers."
      },
      {
        "no": 5,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested financial education evaluation measures consumer needs profiling brief as the named deliverable."
      },
      {
        "no": 6,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the evaluation measures as a checklist of process and impact metric items."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_011",
    "workflow": "Intake and Profiling",
    "task": "Borrower population profiling",
    "work_product": "student borrower market profile borrower population profiling brief",
    "full_prompt": "The supplied material concerns student borrower market profile.\n\nSecretary of the Treasury, the Secretary of Education, the Director of the CFPB, the\nCommittee on Banking, Housing and Urban Affairs and the Committee on Health,\nEducation, Labor and Pensions of the Senate and the Committee on Financial Services\nand the Committee on Education and Labor of the House of Representatives.\nThis report is drafted pursuant to the Act and covers the activities and effectiveness of the\nOmbudsman including compilation, presentation, analysis, and discussion of Bureau complaint\ndata from July 1, 2024, though June 30, 2025, as well as making appropriate recommendations\n5 12 U.S.C. § 5535.\n6 The Act also requires the establishment of a memorandum of understanding (“MOU”) with the student loan\nombudsman of the Department of Education to ensure coordination in providing assistance and serving borrowers\nseeking to resolve complaints related to their private education loans or federal student loans. The memorandum was\nestablished and signed on January 31, 2020. 5 CONSUMER FINANCIAL PROTECTION BUREAU\nbased on that data and other sources of information. This is the 13th required Annual\nOmbudsman Report. 6 CONSUMER FINANCIAL PROTECTION BUREAU\n2 Student Loan Complaint Data\nOver 46 million consumers have private and/or federal student loans, and of those,\napproximately 42 million consumers have federal student loans.7 At the end of AY 2024-2025,\nthe outstanding volume in the student loan market totaled approximately $1.85 trillion with\nfederal student loans comprising approximately $1.67 trillion (approximately 90 percent) and\nprivate student loans comprising approximately $181 billion (approximately 10 percent).8\nWhen consumers experience challenges with their student loans, they may file complaints with\nthe Bureau, the Department of Education, state or other federal agencies, their school, lender,\nand/or servicer. Complaints provide insight into the student loan market, including issues, that\nif unaddressed, may become larger and impact more consumers.\n\nPrepare a student borrower market profile borrower population profiling brief using only the supplied CFPB private education loan ombudsman report. Organize the brief into clearly labeled sections, using bullet points where appropriate. Cover the report basis, borrower counts, and market composition. Specify that the profile reflects the reporting period July 1, 2024 through June 30, 2025. Preserve the exact figures, dates, and market percentages from the report, including the approximately 46 million consumers with private and/or federal student loans, the approximately 42 million consumers with federal student loans, the approximately $1.85 trillion outstanding volume, the approximately $1.67 trillion federal portion at approximately 90 percent, and the approximately $181 billion private portion at approximately 10 percent. Map each profile figure or statement to the corresponding report passage and cite it. Do not introduce any outside student loan market data.",
    "target_constraint_count": 8,
    "sample_no": 31,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the profile as a structured brief with clearly labeled sections and bullet points."
      },
      {
        "no": 2,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied CFPB report content; do not introduce outside student loan market data."
      },
      {
        "no": 3,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact figures, dates, and market percentages from the report when profiling the borrower population."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into named sections covering the report basis, borrower counts, and market composition."
      },
      {
        "no": 5,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Specify the reporting period July 1, 2024 through June 30, 2025 as the time window for the profile."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each profile figure or statement to the corresponding report passage and cite it."
      },
      {
        "no": 7,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a borrower population profiling brief as the named deliverable."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_012",
    "workflow": "Intake and Profiling",
    "task": "Borrower population profiling",
    "work_product": "servicemember and private student loan complaints borrower population profiling brief",
    "full_prompt": "Prepare a borrower population profiling brief on servicemember and private student loan complaints using only the provided report excerpt. Structure the brief with two profile sections: one for servicemembers and one for non-servicemembers. State the exact reporting period covered by the complaint data. For every quantitative claim about complaint volumes, cite the specific figures and tables from the report, including the counts and percentages for private and federal student loans and all products. Classify the complaint categories available to consumers submitting private student loan complaints, listing each category named in the source. Keep the two borrower populations separate throughout the brief and do not combine their denominators or issue taxonomies.\n\nThe supplied material concerns servicemember and private student loan complaints.\n\nFIGURE 5.PRIVATE AND FEDERAL STUDENT LOAN COMPLAINT RESPONSE TIMELINESS AND OUTCOME\nFIGURE 6.STUDENT LOAN COMPLAINTS SUBMITTED BY SERVICEMEMBERS AND NON-SERVICEMEMBERS FOR PRIVATE AND FEDERAL STUDENT LOANS RECEIVED.\nServicemember Non-servicemember Total\n# % of total # % of total # % of total\nPrivate student loan 403 0.3% 4,097 0.1% 4,500 0.1%\nFederal student loan 1,396 1.1% 16,983 0.4% 18,379 0.4%\nTotal student loan 1,799 1.4% 21,080 0.4% 22,879 0.5%\nAll products 126,050 100.0% 4,745,904 100.0% 4,871,954 100.0%\nDuring the period of July 1, 2024 through June 30, 2025, approximately 1.4 percent (1,799 of\n126,050) of complaints submitted by servicemembers were private and federal student loan 15 CONSUMER FINANCIAL PROTECTION BUREAU\nrelated compared to 0.4 percent (21,080 of 4,745,904) of complaints submitted by non-servicemembers.\nThough numerically relatively small, there is a disproportionate impact on servicemembers\nindividually and in the aggregate. For perspective, 750 servicemembers with complaints\nregarding their financial well-being, in this case student loans, is the equivalent of an infantry\nbattalion.\n2.5 Private Student Loan Complaints\nFor the AY covering July 1, 2024 to June 30, 2025, the Bureau handled approximately 4,500\nprivate student loan complaints, an increase of 33 percent over the prior award year.\n2.5.1 Private Student Loan Complaints by Issues\nConsumers submitting student loan complaints may select from the following six complaint\ncategories: “Dealing with your lender or servicer,” Struggling to repay your loan,” “Getting a\nloan,” Problem with your credit report or score,” “Issue with income share agreement,” and\n“Issue where my lender is my school.”",
    "target_constraint_count": 5,
    "sample_no": 32,
    "constraints": [
      {
        "no": 1,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the exact reporting period covered by the complaint data."
      },
      {
        "no": 2,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific figures and tables from the report for every quantitative claim about complaint volumes."
      },
      {
        "no": 3,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify the complaint categories available to consumers submitting private student loan complaints."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into a profile section for servicemembers and a profile section for non-servicemembers."
      },
      {
        "no": 5,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named borrower population profiling brief as the deliverable."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_013",
    "workflow": "Intake and Profiling",
    "task": "Loan application intake requirements mapping",
    "work_product": "borrower identity and ownership fields loan application intake requirements mapping brief",
    "full_prompt": "The supplied material concerns borrower identity and ownership fields.\n\nSBA 7(a) Borrower Information Form OMB Control No.: 3245-0348\nFor use with all SBA 7(a) Loan Programs Expiration Date: 6/30/2027\nSBA Form 191\n9 (02/2025) 1 \nApplicant Business Legal Name (OC □ EPC□): \nOperating Business Legal Name (OC): \nDBA or Tradename (if applicable) \nBusiness TIN (EIN, SSN) \nPrimary Industry / NAICS Code (6 digit): Business Phone: \nUnique Entity ID used in SAM.gov, if any Year began operations: \nEntity Type \nCheck One: \n□ Sole proprietor\n□ Partnership\n□ C-Corp\n□ S-Corp\n□ LLC\n□ Other ______________________\nSpecial Ownership Type \n(Select all that apply): \n□ Employee Stock Ownership Plan (ESOP)\n□ 401(k) or ROBS 401(k) Trust\n□ Cooperative\n□ Native-American Tribal-Owned Business\n□ Other __________________________\nBusiness Address (Street, City, State, Zip Code) \nDo not use P.O. Box address \nProject Address, if different than Business Address \n(Street, City, State, Zip Code) Do not use P.O. Box address \nPrimary Contact Name \nPrimary Contact Email Address \n# of existing employees (including owners, all part-time, full-time and all employees of domestic and foreign \nAffiliates – do not convert to FTE) \n# of FTE jobs saved/retained because of the loan (including owners) \n# of new FTE jobs created because of the loan (including owners) \nPurpose of the loan (i.e., Purchase Real Estate; Construction; Equipment; Inventory; Eligible Debt Refinancing; Working Capital; etc.) \n□ Acquisition/installation of equipment $ . □ Purchase/Construction of Commercial Real Estate $ . \n□ Working Capital $ . □ Acquisition of inventory $ . \n□ Business acquisition (Change of Ownership) $ . □ Debt refinancing $ . \n□ Other: $ . □ Other: $ . \nApplicant Ownership (Mandatory) and Demographic Information – Identify all entities that own at least 20% of the Applicant, including the \nnatural persons who own those entities, and at least 51% of the Beneficial Owners (as defined in SOP 50 10) of the Applicant. Attach a separate \nsheet if necessary. \nOwner’s Legal Name \n(First name Last name) \nTitle Ownership % TIN (SSN/EIN) Home Address \n(Street, City, State, Zip Code - No P.O. Box)\n\nPrepare a borrower identity and ownership fields loan application intake requirements mapping brief based solely on the supplied SBA Form 1919. Organize the brief into clearly separated sections for borrower identity, entity classification, and ownership information. Present the intake requirements as a structured table with columns for required field, source instruction, and applicable intake condition. For every borrower identity or ownership intake requirement, map it to the specific SBA Form 1919 field or instruction that establishes it, using only the supplied form content and without introducing outside intake requirements or assumptions. When covering entity and special ownership details, classify each applicable entity type and special ownership type using the closed-set options shown on the form, such as sole proprietor, partnership, C-Corp, S-Corp, LLC, ESOP, 401(k) or ROBS 401(k) Trust, cooperative, Native-American Tribal-Owned Business, or Other.",
    "target_constraint_count": 7,
    "sample_no": 33,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each borrower identity or ownership intake requirement to the specific SBA Form 1919 field or instruction that establishes it."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a mapping brief for borrower identity and ownership fields on the loan application intake form."
      },
      {
        "no": 3,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into clearly separated sections for borrower identity, entity classification, and ownership information."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the intake requirements as a structured table with columns for required field, source instruction, and applicable intake condition."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the requirement mapping only on the supplied SBA Form 1919 content, without introducing outside intake requirements or assumptions."
      },
      {
        "no": 6,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each applicable entity type and special ownership type using the closed-set options shown on the form."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_015",
    "workflow": "Intake and Profiling",
    "task": "Loan application intake requirements mapping",
    "work_product": "applicant certifications loan application intake requirements mapping brief",
    "full_prompt": "The supplied material concerns applicant certifications.\n\nSBA Form 1919 (02/2025) 3 \n12. Is any sole proprietor, general partner, officer, director, or stockholder with a 10 percent or more interest in the Applicant, or a \nhousehold member of such individual, a member or employee of a Small Business Advisory Council or a SCORE volunteer? (13 CFR \n105.302(a)) \n□ □ \n13. Is the Applicant, any owner of the Applicant, or any business owned by them (Affiliates), presently involved in any legal action \n(including divorce)? If yes, provide details. □ □\n\nBy Signing Below, You Make the Following Representations, Authorizations, and Certifications: \nAPPLICANT CERTIFICATION \nBy signing this application, the Applicant certifies that it complies with all Loan Program Requirements as defined in 13 CFR § 120.10, including but not \nlimited to requirements in 13 CFR §§ 120.100, 120.110, 121.301, and 31 CFR § 285.13. The Applicant further certifies that the Applicant business is at \nleast 51 percent owned and controlled by persons who are citizens of the U.S. or are Lawful Permanent Residents and that all SBA loan proceeds will be \nused in accordance with Loan Program Requirements. SBA or the Lender may request additional information to determine that an Applicant fulfills any \neligibility requirement. By signing the application, the Applicant has certified that it fulfills all eligibility requirements. \nThe authorized representative of the Applicant and the Operating Company certifies to the following: \n• I have read the statements included in this form, including the Statements Required by Law and Executive Order, and I understand them. \n• I certify that the information provided in this application and the information provided in all supporting documents and forms is true and accurate \nin all material respects. The Applicant understands that knowingly making a false statement to obtain a guaranteed loan from SBA is punishable \nunder the law, including under 18 U.S.C. 1001 and 3571 by imprisonment of not more than five years and/or a fine of up to $250,000; under 15 \nU.S.C. 645 by imprisonment of not more than two years and/or a fine of not more than $5,000; and, if submitted to a federally insured institution, \nunder 18 U.S.C. 1014 by imprisonment of not more than thirty years and/or a fine of not more than $1,000,000. \n• I will comply, whenever applicable, with the hazard insurance, lead-based paint, civil rights or other limitations set forth in SBA Loan Program \nRequirements. \n• No holder of 50 percent or more of the ownership of the Applicant or OC is delinquent more than 60 days under the terms of any administrative \norder; court order; or repayment agreement requiring payment of child support. \n• Applicant and OC are current on all Federal, state, and local taxes, including but not limited to income taxes, payroll taxes, real estate taxes and \nsales taxes of the business, and will pay all Federal, state, and local taxes when they come due. \n• All 7(a) loan proceeds will be used only for the Applicant business as approved by the Lender and/or SBA. \n• I understand, acknowledge, agree, and consent that the Lender can share any tax information that I have provided and/or that the Lender has \nobtained from the Internal Revenue Service with SBA’s authorized representatives, including authorized representativ es of the SBA Office of \nInspector General, for the purpose of compliance with SBA Loan Program Requirements and all SBA reviews. \n• I acknowledge that the Lender will confirm the eligible loan amount using required documents submitted. \n• The Applicant, together with all affiliates, is small under the applicable small business size standard (13 CFR 121.201 and Section 3(a)(5) of the \nSmall Business Act [15 U.S.C. 631 et seq ]. SBA or the Lender may request additional information concerning the Applicant’s size based on \ninformation supplied in the application or any other source. \n• The Build America, Buy America Act (BABAA) requires that no federal financial assistance for “infrastructure” projects is provided “unless all \nof the iron, steel, manufactured products, and construction materials used in the project are produced in the United States.” Section 70914 of Public \nLaw No. 117-58, §§ 70901-52. The undersigned certifies that if any SBA loan proceeds are used directly or indirectly for an infrastructure project, \nthe iron, steel, manufactured products, and construction materials used in the construction of the infrastructure project are in full compliance with \nthe BABAA requirements including: 1. All iron and steel used in the project are produced in the United States; 2. All manufa ctured products \npurchased with SBA financial assistance must be produced in the United States; and 3. All construction materials used in the construction are \nmanufactured in the United States. And the Borrower will obtain from the Contractors, or Subcontractors, certifications, or affirmations as to their \ncompliance with BABAA requirements in the project. SBA encourages the purchase, to the extent feasible, of American -made equipment and \nsupplies. \n• The Applicant is not engaged and will not engage in any activity that is illegal under federal, state, or local law or that can reasonably be determined \nto support or facilitate any activity that is illegal under federal, state, or local law. \n• During the life of the loan, the real estate pledged as collateral for the loan or where the Borrower or OC conducts its business operations will not \nbe leased to or occupied by any business that Borrower or OC knows is engaged in any activity that is illegal under Federal, state or local law or \nany activity that can reasonably be determined to support, promote, or facilitate any activity that is illegal under Federal, state or local law. \n• If applicable, the Applicant(s), the ESOP (or equivalent trust), and/or the 401(k) plan are in compliance with all applicable IRS, Treasury, and \nDepartment of Labor requirements and will comply with all relevant operating and reporting requirements. \n• If the 7(a) loan request is for a Standard 7(a) loan (loan greater than $500,000), and if the loan will finance a change of ownership between existing \nowners (complete partner buyout), and if the 7(a) loan proceeds will finance more than 90% of the purchase price of the partner buyout, the \nremaining owner(s) must certify that they have been actively participating in the business operation and held the same or an increasing ownership \ninterest in the business for at least the past 24 months. For any real estate to be purchased by loan proceeds and pledged as collateral for the loan \nor where the Applicant or OC is conducting business operations, the Applicant or OC are currently and will remain in compliance with all local, \nstate, and Federal environmental laws and regulations and will continue to comply with these laws and regulations. Furthermore, they are unaware \nof any other actual or potential environmental hazards related to the collateral or business premises. They agree to fully indemnify Lender and \nSBA against all liabilities or losses arising from the contamination of the property before or during the term of the loan. \n• The Applicant and/or OC will reimburse Lender for out-of-pocket expenses incurred in the making and administration of the loan.\n\nPrepare an applicant certifications loan application intake requirements mapping brief using only the supplied SBA Form 1919 (02/2025) borrower information excerpt. Organize the brief into sections that separate applicant questions, certification statements, authorization and documentation requirements, and conditional thresholds. Map each intake requirement to the specific form question or certification statement that supports it, and identify the approval and authorization path, including who signs and what additional information SBA or the Lender may request. Classify each certification item by its profile category, such as ownership/control, legal status, or citizenship eligibility, and document the applicant profile factors required, including ownership percentage, control, citizenship, and legal status. Map conditional certification triggers, including advisory council or SCORE volunteer involvement, legal action, and ownership/citizenship status. Include the follow-up actions and information collection requirements triggered by the certifications, and list the records and documentation required to support them. Connect each certification requirement to the governing form question or statement and the resulting intake action or documentation need. Map the $500,000 loan amount threshold and the 90% purchase price threshold for the partner buyout certification, and map the 24-month active participation and ownership continuity period required for that certification. State that the source is a blank SBA Form 1919 (02/2025) certification template rather than a completed applicant record. Do not conclude that the applicant is eligible or that all certifications are satisfied; only map the requirements and note that additional information may be requested.",
    "target_constraint_count": 15,
    "sample_no": 34,
    "constraints": [
      {
        "no": 1,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the approval and authorization path for certifications, including who signs and what additional information may be requested."
      },
      {
        "no": 2,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Map conditional certification triggers for SBA Form 1919, including advisory council or SCORE volunteer involvement, legal action, and ownership/citizenship status."
      },
      {
        "no": 3,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each applicant certification item by its profile category, such as ownership/control, legal status, or citizenship eligibility."
      },
      {
        "no": 4,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the exact term 'applicant certifications loan application intake requirements mapping brief' as the deliverable title and preserve the certification wording from the form."
      },
      {
        "no": 5,
        "tag": "RC4",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Include the follow-up actions and information collection requirements triggered by the certifications, such as requesting additional eligibility information."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific SBA Form 1919 questions and certification statements that support each mapped intake requirement."
      },
      {
        "no": 7,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State the source status of the form as a blank SBA Form 1919 (02/2025) certification template rather than a completed applicant record."
      },
      {
        "no": 8,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "List the records and documentation required to support the certifications, including any additional information SBA or the Lender may request."
      },
      {
        "no": 9,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named applicant certifications loan application intake requirements mapping brief."
      },
      {
        "no": 10,
        "tag": "RC6",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Document the applicant profile factors required by the certifications, including ownership percentage, control, citizenship, and legal status."
      },
      {
        "no": 11,
        "tag": "DB4",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Avoid concluding that the applicant is eligible or that all certifications are satisfied; only map the requirements and note that additional information may be requested."
      },
      {
        "no": 12,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into sections that separate applicant questions, certification statements, authorization and documentation requirements, and conditional thresholds."
      },
      {
        "no": 13,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each certification requirement to the governing form question or statement and the resulting intake action or documentation need."
      },
      {
        "no": 14,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Map the $500,000 loan amount threshold and the 90% purchase price threshold for the partner buyout certification."
      },
      {
        "no": 15,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Map the 24-month active participation and ownership continuity period required for the partner buyout certification."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_016",
    "workflow": "Intake and Profiling",
    "task": "Loan application intake requirements mapping",
    "work_product": "co-applicant submissions and owner definitions loan application intake requirements mapping brief",
    "full_prompt": "Prepare a co-applicant submissions and owner definitions loan application intake requirements mapping brief using only the supplied SBA Form 1919 text. Organize the brief into distinct sections for co-applicant submissions and owner definitions, and present the mapping as a structured requirements brief, such as a labeled list or table. State the source status of the form, including that submission of the requested information is required for SBA or the Lender to determine eligibility and that failure to submit would affect that determination. Preserve the form's stated purpose and the statutory authorization reference under section 7(a)(1)(B) of the Small Business Act, 15 U.S.C. 636(a)(1)(B), without altering their terms. Cover the form's stated purpose and the topics it collects, including the Small Business Applicant and its owners, the loan request, existing indebtedness, and current or previous government financing. Map each requirement to the corresponding form language, such as the purpose statement, instructions, or owner definition bullet points. Include the requirement that each co-Applicant submit a separate, signed SBA Form 1919 to the SBA Participating Lender, with the authorized representative completing and signing it. Preserve the 20% ownership threshold for limited partners, corporation owners, and LLC members in the owner definitions. If the NAICS Code reporting condition applies, state that Applicants must match the business activity code provided on their IRS income tax filings. Do not introduce outside facts or assumptions.\n\nThe supplied material concerns co-applicant submissions and owner definitions.\n\nSBA Form 1919 (02/2025) 5 \nPurpose of this form: \nThe purpose of this form is to collect information about the Small Business Applicant (“Applicant”) and its owners, the loan request, existing indebtedness, \ninformation about current or previous government financing, and certain other topics. The information also facilitates background checks as authorized by \nsection 7(a)(1)(B) of the Small Business Act, 15 U.S.C. 636(a)(1)(B). Submission of the requested information is required for SBA or the Lender to \ndetermine eligibility for financial assistance. Failure to submit the information would affect that determination. \nInstructions for completing this form: \nA separate SBA Form 1919 for each co-Applicant(e.g., EPC and OC) must be completed and signed by the authorized representative of the Applicant and \nsubmitted to your SBA Participating Lender. The amounts of the “Purpose of the loan” sections across all SBA Forms 1919 should equal the total amount \nof the loan request. Submission of the requested information is required to make a determination regarding eligibility for financial assistance. \nFor purposes of reporting NAICS Code, Applicants must match the business activity code provided on their IRS income tax filings, if applicable. \nAll parties listed below are considered Owners of the Applicant: \n• For a sole proprietorship, the sole proprietor; \n• For a partnership, all general partners, and all limited partners owning 20% or more of the equity of the firm; \n• For a corporation, all owners of 20% or more of the corporation; \n• For limited liability companies, all members owning 20% or more of the company; and \n• Any Trustor (if the Applicant is owned by a trust).",
    "target_constraint_count": 13,
    "sample_no": 35,
    "constraints": [
      {
        "no": 1,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State the source status of the form, including that submission of the requested information is required for SBA or the Lender to determine eligibility and that failure to submit would affect that determination."
      },
      {
        "no": 2,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Preserve the 20% ownership threshold for limited partners, corporation owners, and LLC members in the owner definitions."
      },
      {
        "no": 3,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the form's stated purpose and the statutory authorization reference under section 7(a)(1)(B) of the Small Business Act, 15 U.S.C. 636(a)(1)(B), without altering their terms."
      },
      {
        "no": 4,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Include the requirement that each co-Applicant submit a separate, signed SBA Form 1919 to the SBA Participating Lender, with the authorized representative completing and signing it."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a structured requirements brief, such as a table or labeled list, that separates co-applicant submission requirements from owner definitions."
      },
      {
        "no": 6,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the mapping solely on the supplied SBA Form 1919 text and do not introduce outside facts or assumptions."
      },
      {
        "no": 7,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the form's stated purpose and the topics it collects, including the Small Business Applicant and its owners, the loan request, existing indebtedness, and current or previous government financing."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into distinct sections for co-applicant submissions and owner definitions."
      },
      {
        "no": 9,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each requirement to the corresponding form language, such as the purpose statement, instructions, or owner definition bullet points."
      },
      {
        "no": 10,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named work product: a co-applicant submissions and owner definitions loan application intake requirements mapping brief."
      },
      {
        "no": 11,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "If the NAICS Code reporting condition applies, state that Applicants must match the business activity code provided on their IRS income tax filings."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_017",
    "workflow": "Intake and Profiling",
    "task": "Loan application intake requirements mapping",
    "work_product": "demographic information and privacy notices loan application intake requirements mapping brief",
    "full_prompt": "The supplied material concerns demographic information and privacy notices.\n\nFor purposes of reporting (optional) demographic information: \nPurpose. Veteran/sex/race/ethnicity data is collected for program reporting purposes only. \nDescription. This form requests information about each of the Applicant’s owners. Add additional sheets if necessary.\n\n1. Owner’s Legal Name. Insert the full name of the owner. \n2. Owner’s Position. Identify the owner’s position; for example, sole proprietor; general partner; owner; officer; director; or member. \nStatements Required by Law and Executive Order \nThis application and any assistance provided pursuant to this application is subject to the following laws, regulations, and Executive Orders: \nPaperwork Reduction Act – You are not required to respond to this collection of information unless it displays a currently valid OMB Control Number. \nThe estimated time for completing this application, including gathering data needed, is 31 minutes. Comments about this time or the information requested \nshould be sent to: Small Business Administration, Director, Records Management Division, 409 3rd St., SW, Washington DC 20416 , and/or SBA Desk \nOfficer, Office of Management and Budget, New Exe cutive Office Building, Washington DC 20503. PLEASE DO NOT SEND FORMS TO THESE \nADDRESSES. \nFederal Funding Accountability and Transparency Act of 2006, as amended (31 U.S.C. 6101 Note) - SBA routinely publishes information related to \nthis loan application (e.g., name and address of Borrower, amount of loan) on USAspending.gov, as required by the Federal Funding Accountability and \nTransparency Act of 2006, as amended. \nPrivacy Act (5 U.S.C. 552a); Collection of Social Security Number (31 U.S.C. 7701) \nAuthorities and Purpose for Collecting Information: SBA is collecting the information on this form, including social security numbers (SSNs) and other \npersonal information, to make a character and credit eligibility decision in connection with you or your company’s application for SBA assistance. SBA \nmay also use SSNs and other taxpayer identification numbers(TINs) for the purpose of collecting and reporting on any delinquent fees or other amounts \nowed SBA. Under the provisions of 31 U.S.C. 7701, the Administrator shall require a person applying for a loan under the program to provide that person’s \nTIN; therefore, the A pplicant business and any guarantor of the loan must provide their SSN s or other TINs in order to do business with SBA and not \nproviding your SSN or TIN will impact the loan decision. \nSBA also determines eligibility of the Applicant business in accordance with regulations under 13 CFR 120.110(n). SBA is specifically authorized to verify \nyour criminal history, or lack thereof, pursuant to section 7(a)(1)(B), of the Small Business Act, 15 USC Section 636(a)(1)(B). In addition, for all forms of \nassistance, SBA is authorized to make all investigations necessary to ensure that a person has not engaged in acts that viola te or will violate the Small \nBusiness Act, 15 U.S.C. 634(b)(11). SBA also uses the SSN to distinguish the Applicant and its owners of the Applicant from other individuals with the \nsame or similar name or other personal identifiers. This use is permitted under Executive Order 9397. \nRoutine Uses: Some of the information collected may be checked against criminal history indices of the Federal Bureau of Investigation. Whe n the \ninformation collected indicates a violation or potential violation of law, whether civil, criminal, or administrative in natu re, SBA may refer it to the \nappropriate agency, whether Federal, State, local, or foreign, charged with responsibility for or otherwise involved in investigation, prosecution, enforcement \nor prevention of such violations. See SBA’s Privacy Act System of Records, at 74 Fed. Reg. 14890 (2009) and 82 Fed. Reg. 23026 (2021) (as amended \nfrom time to time) for other published routine uses for the collected information.\n\nPrepare a loan application intake requirements mapping brief for demographic information and privacy notices using only the supplied SBA Form 1919 borrower information context. Organize the brief into clearly separated sections for demographic information and privacy notices. Present the mapped intake requirements as an organized brief or table that separates demographic information from privacy notice obligations. In the demographic section, document the demographic data elements and owner profile information requested by the form, including the optional veteran, sex, race, and ethnicity reporting data and the owner legal name and position fields. State the source status of these disclosures, including that demographic reporting is optional and collected for program reporting purposes only. In the privacy notice section, cover the governing laws, regulations, executive orders, and collection authorities that control the requested information, including the Paperwork Reduction Act, Privacy Act, 31 U.S.C. 7701, 13 CFR 120.110(n), and Executive Order 9397. Connect each intake requirement to the governing law, executive order, or authority that creates it. Identify the approval or authorization authorities that govern collection and use of the requested information. Specify the conditional consequence that failing to provide an SSN or TIN will impact the loan decision. Avoid stating that submission of the form guarantees approval or any other outcome not supported by the source. Preserve the exact legal citations, statutory references, and defined purposes as they appear in the source. State the estimated completion time of 31 minutes and any related deadline or period disclosed on the form. Indicate where comments about the time or information requested should be sent, including the Small Business Administration Director, Records Management Division address and the SBA Desk Officer, Office of Management and Budget address, and list these records management and OMB desk officer destinations for comments as disclosed on the form.",
    "target_constraint_count": 14,
    "sample_no": 36,
    "constraints": [
      {
        "no": 1,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the approval or authorization authorities that govern collection and use of the requested information."
      },
      {
        "no": 2,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the estimated completion time and any related deadline or period disclosed on the form."
      },
      {
        "no": 3,
        "tag": "DB3",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Indicate where comments about the time or information requested should be sent, including the records management and OMB desk officer addresses."
      },
      {
        "no": 4,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Specify the conditional consequence that failing to provide an SSN or TIN will impact the loan decision."
      },
      {
        "no": 5,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact legal citations, statutory references, and defined purposes as they appear in the source."
      },
      {
        "no": 6,
        "tag": "DB4",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Avoid stating that submission of the form guarantees approval or any other outcome not supported by the source."
      },
      {
        "no": 7,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into clearly separated sections for demographic information and privacy notices."
      },
      {
        "no": 8,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each intake requirement to the governing law, executive order, or authority that creates it."
      },
      {
        "no": 9,
        "tag": "RC6",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Document the demographic data elements and owner profile information requested by the form."
      },
      {
        "no": 10,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "List the records management and OMB desk officer destinations for comments as disclosed on the form."
      },
      {
        "no": 11,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied SBA Form 1919 borrower information context when mapping the intake requirements."
      },
      {
        "no": 12,
        "tag": "RC7",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the governing laws, regulations, executive orders, and collection authorities that control the requested information."
      },
      {
        "no": 13,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State the source status of the disclosures, including that demographic reporting is optional and collected for program reporting purposes only."
      },
      {
        "no": 14,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapped intake requirements as an organized brief or table that separates demographic information from privacy notice obligations."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_018",
    "workflow": "Intake and Profiling",
    "task": "Loan application intake requirements mapping",
    "work_product": "financial record access and borrower notices loan application intake requirements mapping brief",
    "full_prompt": "Prepare a loan application intake requirements mapping brief for financial record access and borrower notices using only the supplied SBA Form 1919 borrower information text. Do not introduce outside legal or program facts. Preserve exact statutory, regulatory, and Executive Order citations, monetary thresholds, and named agencies from the source. Organize the brief by distinct governing requirement area and keep the mapped requirements concise, without imposing an external word count or ranking. For each mapped requirement, connect it to the governing statute, regulation, or Executive Order that authorizes it and to the resulting borrower action or consequence. Cover the borrower-facing risks and consequences described in the source, including loss of future SBA eligibility, federal debt collection actions, flood insurance ineligibility, and environmental compliance obligations. Identify the circumstances under which SBA may refer or transfer borrower financial records or delinquent debt to other government authorities, collection agencies, credit bureaus, or the Department of Justice.\n\nThe supplied material concerns financial record access and borrower notices.\n\nSBA Form 1919 (02/2025) 6 \nRight to Financial Privacy Act of 1978 (12 U.S.C. § 3401 et seq.) – As required by the Right of Financial Privacy Act of 1978, SBA provides this notice \nof SBA's right to access financial records held by financial institutions that are or have been doing business with you or your business, including any financial \ninstitutions participating in a loan or loan guarantee. The law provides that SBA shall have a right of access to your financial records in connection with its \nconsideration or administration of assistance to you in the form of a Government loan or loan guaranty agreement. SBA is required to provide a certificate \nof its compliance with the Act to a financial institution in connection with its first request for access to your financial r ecords, after which no further \ncertification is required for subsequent access. The law also provides that SBA's access rights continue for the term of any approved loan or loan guaranty \nagreement. \nNo further notice to you of SBA's access rights is required during the term of any such agreement. The law also authorizes SB A to transfer to another \nGovernment authority any financial records included in an application for a loan, or concerning an approved loan or loan guarantee, as necessary to process, \nservice or foreclose on a loan or loan guarantee or to collect on a defaulted loan or loan guarantee. No other transfer of yo ur financial records to another \nGovernment authority will be permitted by SBA except as required or permitted by law. \nDisclosure of Information – Requests for information about another party may be denied unless SBA has the written permission of the individual to release \nthe information to the requestor or unless the information is subject to disclosure under the Freedom of Information Act. The Privacy Act authorizes SBA \nto make certain “routine uses” of information protected by that Act. One such routine use is the disclosure of information maintained in SBA’s system of \nrecords when this information indicates a violation or potential violation of law, whether civil, criminal, or administrative in nature. Specifically, SBA may \nrefer the information to the appropriate agency, whether Federal, State, local or foreign, charged with responsibility for, o r otherwise involved in \ninvestigation, prosecution, enforcement or prevention of such violations. Another routine use is disclosure to other Federal agencies conducting background \nchecks but only to the extent the information is relevant to the requesting agencies’ function. See, 74 F.R. 14890 (2009), and as amended from time to time \nfor additional background and other routine uses. \nDebt Collection Act of 1982 and Debt Collection Improvement Act of 1996 (5 U.S.C. § 5514 note and 31 U.S.C. § 3701 et seq.) – These laws require \nSBA to aggressively collect any loan or other payments which become delinquent. SBA must obtain your taxpayer identification number when you apply \nfor a loan. If you receive a loan, and do not make payments as they come due, SBA may take one or more of the following actions: \n• Report the status of your loan(s) or other debt owed to SBA to credit bureaus \n• Hire a collection agency to collect your loan or other delinquent debt \n• Offset your income tax refund or other amounts due to you from the Federal Government \n• Suspend or debar you or your company from doing business with the Federal Government \n• Refer your loan or other delinquent debt to the Department of Justice or other attorneys for litigation \n• Foreclose on collateral or take other action permitted in the loan instruments \n• If you default on an SBA loan and fail to fully reimburse SBA for any resulting loss, refer you to the computer database of delinquent Federal debtors \nmaintained by the Department of Housing and Urban Development, or other Federal agency, which may disqual ify you from receiving financial \nassistance from other Federal agencies. In addition, unless SBA is reimbursed in full for the loss, you will not be eligible for additional SBA financial \nassistance. \nFreedom of Information Act (5 U.S.C. 552) -- This law provides, with some exceptions, that SBA must supply information reflected in agency files and \nrecords to a person requesting it. Information about approved loans that is generally released includes, among other things, statistics on our loan programs \n(individual Borrowers are not identified in the statistics) and other information such as the names of the Borrowers, the amount of the loan, and the type of \nloan. Proprietary data on a Borrower would not routinely be made available to third parties. All requests under this Act are to be addressed to the SBA’s \nFreedom of Information/Privacy Acts Office and be identified as a Freedom of Information request. \nFlood Disaster Protection Act (42 U.S.C. 4011) -- Regulations have been issued by the Federal Insurance Administration (FIA) and by SBA implementing \nthis Act and its amendments. These regulations prohibit SBA from making certain loans in an FIA designated floodplain unless Federal Flood insurance is \npurchased as a condition of the loan. Failure to maintain the required level of flood insu rance makes the Applicant ineligible for any financial assistance \nfrom SBA, including disaster assistance. \nExecutive Orders -- Floodplain Management and Wetland Protection (42 F.R. 26951 and 42 F.R. 26961) -- SBA discourages settlement in or \ndevelopment of a floodplain or a wetland. This statement is to notify all SBA loan Applicants that such actions are hazardous to both life and property and \nshould be avoided. The additional cost of flood preventive construction must be considered in addition to the possible loss of all assets and investments due \nto a future flood. \nExecutive Order 11738 -- Environmental Protection (38 F.R. 25161) – The Executive Order charges the SBA with administering its loan programs in a \nmanner that will result in effective enforcement of the Clean Air Act, the Federal Water Pollution Act and other environmental protection legislation. SBA \nmust, therefore, impose conditions on some loans. By acknowledging receipt of this form and presenting the application, all Applicant small businesses \nborrowing $100,000 or more in direct funds stipulate to the following: \n• That any facility used, or to be used, by the subject firm is not cited on the EPA list of Violating Facilities. \n• That subject firm will comply with all the requirements of Section 114 of the Clean Air Act (42 U.S.C.7414) and Section 308 of the Water Act (33 \nU.S.C. § 1318) relating to inspection, monitoring, entry, reports and information, as well as all other requirements specified in Section 114 and Section \n308 of the respective Acts, and all regulations and guidelines issued thereunder. \n• That subject firm will notify SBA of the receipt of any communication from the Director of the Environmental Protection Agency indicating that a \nfacility utilized, or to be utilized, by subject firm is under consideration to be listed on the EPA List of Violating Facilities.",
    "target_constraint_count": 6,
    "sample_no": 37,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base all mapped requirements solely on the provided SBA Form 1919 borrower information text and do not introduce outside legal or program facts."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact statutory, regulatory, and Executive Order citations, monetary thresholds, and named agencies from the source text when mapping requirements."
      },
      {
        "no": 3,
        "tag": "RC8",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the borrower-facing risks and consequences described in the source, including loss of future SBA eligibility, federal debt collection actions, flood insurance ineligibility, and environmental compliance obligations."
      },
      {
        "no": 4,
        "tag": "DB3",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the circumstances under which SBA may refer or transfer borrower financial records or delinquent debt to other government authorities, collection agencies, credit bureaus, or the Department of Justice."
      },
      {
        "no": 5,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each mapped requirement to the governing statute, regulation, or Executive Order that authorizes it and to the resulting borrower action or consequence."
      },
      {
        "no": 6,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief by distinct governing requirement area and keep the mapped requirements concise, without imposing an external word count or ranking."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t1_020",
    "workflow": "Intake and Profiling",
    "task": "Customer relationship profiling",
    "work_product": "Blue Harbor onboarding record customer relationship profiling brief",
    "full_prompt": "Prepare a Blue Harbor onboarding record customer relationship profiling brief for Blue Harbor Logistics Holdings LLC using only the supplied onboarding activity profile. Structure the brief with clear sections for entity identity, ownership and control, authorized actors, financial profile, risk parameters, and supporting documentation. Use the exact terms and labels from the profile, such as 'Blue Harbor Logistics Holdings LLC', 'moderate', 'primary signer', and 'prohibited usage', without paraphrasing key terminology. Map each profile element to the specific section or data point in the supplied onboarding activity profile from which it is drawn. Connect the observed transactions, expected pattern, entity profile, ownership, authority, balance-sheet data, risk parameters, and supporting files into a coherent relationship profile without presenting them as disconnected fragments. Identify and list all risk-related issues, prohibited usages, and missing or absent supporting documentation present in the profile. Cover the monitoring note, risk parameters, and documentation status as governance and control elements relevant to the relationship. Discuss the identified risks and impacts, including the liquidity minimum, risk setting, prohibited usage, and the fuel surcharge recovery lag. Compare the stated liquidity minimum of $1,119,250.00 against the available cash balance of $2,035,000.00 and note whether the threshold is met. Classify the entity type, ownership structure, authorized actor roles, and risk setting using the categories provided in the profile. Flag any prohibited usage restrictions, missing documentation, or absent authority evidence as gaps or exceptions requiring attention. If the profile contains prohibited usage categories or missing required documentation, include a corresponding flag or follow-up action in the brief.\n\nThe supplied material concerns Blue Harbor onboarding record.\n\nONBOARDING ACTIVITY PROFILE\n\nObserved relationship as at 2026-04-15\n\nRECENT FLOWS FIRST\nObserved on | Payment rail | Amount | Counterparty description\n--- | --- | --- | ---\n2026-04-03 | incoming ACH | $279,500.00 | customer receipts batch\n2026-04-06 | domestic wire | $134,700.00 | equipment supplier\n2026-04-11 | international wire | $55,500.00 | overseas vendor\n\nEXPECTED PATTERN\nMonthly credits $3,826,666.67; monthly debits $3,482,266.67; domestic wires 39; international wires 6. Products requested: operating cash management, credit facility review, investment-policy reporting. Anticipated source: operating revenue and documented owner equity.\n\nWHO THE CLIENT IS\nBlue Harbor Logistics Holdings LLC was formed in Virginia on 2009-05-26 and operates in regional freight and warehousing. Tax identifier: XX-XXX0010. Principal location: 231 Commerce Way, Suite 203, Virginia.\n\nWHO CONTROLS IT\n— Marcus Vale holds 44.0% and acts as Chief Executive Officer.\n— Iris Chen holds 36.0% and acts as Chief Operating Officer.\n— Harbor Employee Trust holds 20.0% and acts as Employee trust.\n\nWHO MAY ACT\n— Marcus Vale: primary signer (verified).\n— Avery Chen: finance contact only (not verified).\n\nBALANCE-SHEET PROFILE\nCash / A/R / inventory: $2,035,000.00 / $8,420,000.00 / $640,000.00\nSenior debt: $11,700,000.00\nAnnual revenue / EBITDA: $45,920,000.00 / $4,010,000.00\n\nRISK PARAMETERS\nBusiness objective: fleet replacement and consolidation of equipment notes\nLiquidity minimum: $1,119,250.00\nRisk setting: moderate\nProhibited usage: cryptocurrency transfers, bearer instruments, undocumented third-party payments\nMonitoring note: Fuel surcharge recovery lagged diesel-cost changes by an average of 43 days in Q4 2025.\n\nSUPPORTING FILES\ncertificate of formation—present, 2009-05-26; ownership schedule—present, 2025-12-31; 2025 financial statements—present, 2025-12-31; secondary contact authority evidence—absent; current insurance certificate—absent",
    "target_constraint_count": 12,
    "sample_no": 38,
    "constraints": [
      {
        "no": 1,
        "tag": "RC3",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Identify and list all risk-related issues, prohibited usages, and missing or absent supporting documentation present in the profile."
      },
      {
        "no": 2,
        "tag": "RC7",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the monitoring note, risk parameters, and documentation status as governance and control elements relevant to the relationship."
      },
      {
        "no": 3,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect the observed transactions, expected pattern, entity profile, ownership, authority, balance-sheet data, risk parameters, and supporting files into a coherent relationship profile without presenting them as disconnected fragments."
      },
      {
        "no": 4,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied onboarding activity profile as the source of facts; do not introduce outside information or assumptions."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each profile element to the specific section or data point in the supplied onboarding activity profile from which it is drawn."
      },
      {
        "no": 6,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the exact terms and labels from the profile, such as 'Blue Harbor Logistics Holdings LLC', 'moderate', 'primary signer', and 'prohibited usage', without paraphrasing key terminology."
      },
      {
        "no": 7,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Structure the brief with clear sections corresponding to the profile areas, including entity identity, ownership and control, authorized actors, financial profile, risk parameters, and supporting documentation."
      },
      {
        "no": 8,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag any prohibited usage restrictions, missing documentation, or absent authority evidence as gaps or exceptions requiring attention."
      },
      {
        "no": 9,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "If the profile contains prohibited usage categories or missing required documentation, include a corresponding flag or follow-up action in the brief."
      },
      {
        "no": 10,
        "tag": "RC8",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Discuss the identified risks and impacts, including the liquidity minimum, risk setting, prohibited usage, and the fuel surcharge recovery lag."
      },
      {
        "no": 11,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Compare the stated liquidity minimum of $1,119,250.00 against the available cash balance of $2,035,000.00 and note whether the threshold is met."
      },
      {
        "no": 12,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify the entity type, ownership structure, authorized actor roles, and risk setting using the categories provided in the profile."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_001",
    "workflow": "Research and Due Diligence",
    "task": "Financial statement trend analysis",
    "work_product": "BA reported profitability financial statement trend analysis brief",
    "full_prompt": "The supplied material concerns BA reported profitability.\n\nEntity: THE BOEING COMPANY\nINCOME STATEMENT (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nRevenues | 62,286,000,000 | 66,608,000,000 | 77,794,000,000 | 66,517,000,000 | 89,463,000,000\nCostOfRevenue | 59,237,000,000 | 63,078,000,000 | 70,070,000,000 | 68,508,000,000 | 85,174,000,000\nGrossProfit | 3,049,000,000 | 3,530,000,000 | 7,724,000,000 | -1,991,000,000 | 4,289,000,000\nOperatingIncomeLoss | -2,870,000,000 | -3,519,000,000 | -773,000,000 | -10,707,000,000 | 4,281,000,000\nNetIncomeLoss | -4,202,000,000 | -4,935,000,000 | -2,222,000,000 | -11,817,000,000 | 2,235,000,000\nIncomeTaxExpenseBenefit | -743,000,000 | 31,000,000 | 237,000,000 | -381,000,000 | 397,000,000\nResearchAndDevelopmentExpense | 2,249,000,000 | 2,852,000,000 | 3,377,000,000 | 3,812,000,000 | 3,615,000,000\nEarningsPerShareBasic (USD/shares) | -7.15 | -8.3 | -3.67 | -18.36 | 2.49\n\nPrepare a BA reported profitability financial statement trend analysis brief using only the supplied Boeing annual income statement data for fiscal years 2021 through 2025. Begin with a concise summary of profitability trends, then present a structured table showing each reported line item across the five fiscal years, preserving the exact reported figures and fiscal year labels without alteration. Cite the specific line items and years from the supplied table when discussing trends. Independently verify the reported gross profit, operating income, and net income figures against revenues and costs where derivable, and calculate year-over-year percentage changes for revenues, gross profit, operating income, and net income. Do not introduce any external facts or assumptions beyond the supplied income statement data.",
    "target_constraint_count": 12,
    "sample_no": 39,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied Boeing income statement data without introducing external facts or assumptions."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named BA reported profitability financial statement trend analysis brief."
      },
      {
        "no": 3,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific income statement line items and fiscal years from the supplied table when discussing trends."
      },
      {
        "no": 4,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported figures and fiscal year labels from the supplied income statement without alteration."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the trend analysis in a structured table format showing each line item across the fiscal years."
      },
      {
        "no": 6,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Independently verify the reported gross profit, operating income, and net income figures against revenues and costs where derivable."
      },
      {
        "no": 7,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate year-over-year percentage changes for revenues, gross profit, operating income, and net income."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a summary of profitability trends followed by the supporting table and calculations."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_002",
    "workflow": "Research and Due Diligence",
    "task": "Balance sheet structure analysis",
    "work_product": "BA balance sheet position balance sheet structure analysis brief",
    "full_prompt": "Prepare a balance sheet structure analysis brief for THE BOEING COMPANY using only the supplied annual 10-K balance sheet data. Organize the brief into a summary section followed by a detailed analysis section. Present the detailed analysis as a structured table covering the five fiscal year-end dates from FY2021 through FY2025 shown in the supplied balance sheet. In the table, include the reported balance sheet line items for Assets, Liabilities, StockholdersEquity, AssetsCurrent, LiabilitiesCurrent, CashAndCashEquivalentsAtCarryingValue, AccountsReceivableNetCurrent, LongTermDebt, and OtherLiabilitiesNoncurrent, using the exact reported figures, concept names, and fiscal-year labels as they appear in the supplied balance sheet. For each fiscal year, calculate the current ratio, debt-to-assets ratio, and equity-to-assets ratio using the supplied asset, liability, current asset, current liability, long-term debt, and equity figures, and show the calculated metrics alongside the source figures. Tie each reported figure and calculated metric back to the specific balance sheet line item and fiscal year from which it was taken. Do not introduce external market, industry, or company information beyond the supplied balance sheet data.\n\nThe supplied material concerns BA balance sheet position.\n\nEntity: THE BOEING COMPANY\nBALANCE SHEET (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nAssets | 138,552,000,000 | 137,100,000,000 | 137,012,000,000 | 156,363,000,000 | 168,235,000,000\nLiabilities | 153,398,000,000 | 152,948,000,000 | 154,240,000,000 | 160,277,000,000 | 162,778,000,000\nStockholdersEquity | -14,999,000,000 | -15,883,000,000 | -17,233,000,000 | -3,908,000,000 | 5,454,000,000\nAssetsCurrent | 108,666,000,000 | 109,523,000,000 | 109,275,000,000 | 127,998,000,000 | 128,459,000,000\nLiabilitiesCurrent | 81,992,000,000 | 90,052,000,000 | 95,827,000,000 | 97,078,000,000 | 108,115,000,000\nCashAndCashEquivalentsAtCarryingValue | 8,052,000,000 | 14,614,000,000 | 12,691,000,000 | 13,801,000,000 | 10,921,000,000\nAccountsReceivableNetCurrent | 2,641,000,000 | 2,517,000,000 | 2,649,000,000 | 2,631,000,000 | 2,921,000,000\nLongTermDebt | 57,921,000,000 | 56,794,000,000 | 52,055,000,000 | 53,625,000,000 | 53,848,000,000\nOtherLiabilitiesNoncurrent | 1,750,000,000 | 2,211,000,000 | 2,332,000,000 | 2,318,000,000 | 2,432,000,000",
    "target_constraint_count": 9,
    "sample_no": 40,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the analysis as a structured table showing the requested balance sheet line items and calculated metrics for each fiscal year."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a balance sheet structure analysis brief for BA."
      },
      {
        "no": 3,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Cover the five annual period-end dates from FY2021 through FY2025 shown in the supplied balance sheet."
      },
      {
        "no": 4,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use the exact reported figures, concept names, and fiscal-year labels as they appear in the supplied balance sheet."
      },
      {
        "no": 5,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into a summary section followed by a detailed analysis section."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Tie each reported figure and calculated metric back to the specific balance sheet line item and fiscal year from which it was taken."
      },
      {
        "no": 7,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the current ratio, debt-to-assets ratio, and equity-to-assets ratio for each fiscal year using the supplied asset, liability, current asset, current liability, long-term debt, and equity figures."
      },
      {
        "no": 8,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the analysis only on the supplied balance sheet data and do not introduce external market, industry, or company information."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_004",
    "workflow": "Research and Due Diligence",
    "task": "Financial statement trend analysis",
    "work_product": "CAT reported profitability financial statement trend analysis brief",
    "full_prompt": "Prepare a CAT reported profitability financial statement trend analysis brief using only the supplied CATERPILLAR INC annual income statement data for fiscal years ending 2021-12-31 through 2025-12-31. Structure the brief so it first identifies the five reporting periods, then addresses revenue and cost trends, followed by profitability metrics and observed changes in operating income and earnings per share. Present the trend analysis in a table showing the reported values and calculated changes for each fiscal year from 2021 through 2025. For revenues, operating income, and earnings per share, calculate the year-over-year changes and percentage changes across the five fiscal years shown. Independently recalculate the reported operating income and EPS values from the source inputs where possible, and verify that any derived changes or percentages tie back to the stated annual figures. Preserve every reported figure, concept name, fiscal-year date, and USD or USD/shares unit exactly as given in the source when restating or discussing the income statement data. Cite the specific income statement concepts and fiscal-year values from the source when describing each trend or calculation. Do not introduce outside figures, assumptions, or unsupported profitability information.\n\nThe supplied material concerns CAT reported profitability.\n\nEntity: CATERPILLAR INC\nINCOME STATEMENT (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nRevenues | 50,971,000,000 | 59,427,000,000 | 67,060,000,000 | 64,809,000,000 | 67,589,000,000\nCostOfRevenue | 35,513,000,000 | 41,350,000,000 | 42,767,000,000 | 40,199,000,000 | 44,752,000,000\nCostOfGoodsAndServicesSold | — | 413,000,000 | 160,000,000 | 33,000,000 | 49,000,000\nOperatingIncomeLoss | 6,878,000,000 | 7,904,000,000 | 12,966,000,000 | 13,072,000,000 | 11,151,000,000\nIncomeTaxExpenseBenefit | 1,742,000,000 | 2,067,000,000 | 2,781,000,000 | 2,629,000,000 | 2,768,000,000\nResearchAndDevelopmentExpense | 1,686,000,000 | 1,814,000,000 | 2,108,000,000 | 2,107,000,000 | 2,148,000,000\nEarningsPerShareBasic (USD/shares) | 11.93 | 12.72 | 20.24 | 22.17 | 18.9",
    "target_constraint_count": 12,
    "sample_no": 41,
    "constraints": [
      {
        "no": 1,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve every reported figure, concept name, fiscal-year date, and USD/shares unit exactly as given in the source when restating or discussing the income statement data."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested CAT reported profitability financial statement trend analysis brief as the named work product."
      },
      {
        "no": 3,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Structure the brief with a clear sequence that presents the reporting period, revenue and cost trends, profitability metrics, and any observed changes in operating income and EPS."
      },
      {
        "no": 4,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Independently recalculate the reported operating income and EPS values from the source inputs where possible, and verify that any derived changes or percentages tie back to the stated annual figures."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied CAT income statement data for the trend analysis and do not introduce outside figures, assumptions, or unsupported profitability information."
      },
      {
        "no": 6,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate year-over-year changes and percentage changes for revenues, operating income, and EPS across the five fiscal years shown."
      },
      {
        "no": 7,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the trend analysis in a table that shows the reported values and calculated changes for each fiscal year from 2021 through 2025."
      },
      {
        "no": 8,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific income statement concepts and fiscal-year values from the source when describing each trend or calculation."
      },
      {
        "no": 9,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Anchor the trend analysis to the five fiscal-year reporting periods from FY2021 through FY2025 and compare only those annual periods."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_005",
    "workflow": "Research and Due Diligence",
    "task": "Balance sheet structure analysis",
    "work_product": "CAT balance sheet position balance sheet structure analysis brief",
    "full_prompt": "The supplied material concerns CAT balance sheet position.\n\nEntity: CATERPILLAR INC\nBALANCE SHEET (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nAssets | 82,793,000,000 | 81,943,000,000 | 87,476,000,000 | 87,764,000,000 | 98,585,000,000\nLiabilities | 66,277,000,000 | 66,052,000,000 | 67,973,000,000 | 68,270,000,000 | 77,267,000,000\nStockholdersEquityOther | -35,000,000 | -44,000,000 | -4,000,000 | 2,000,000 | 5,000,000\nAssetsCurrent | 43,455,000,000 | 43,785,000,000 | 46,949,000,000 | 45,682,000,000 | 52,485,000,000\nLiabilitiesCurrent | 29,847,000,000 | 31,531,000,000 | 34,728,000,000 | 32,272,000,000 | 36,558,000,000\nCashAndCashEquivalentsAtCarryingValue | 9,254,000,000 | 7,004,000,000 | 6,978,000,000 | 6,889,000,000 | 9,980,000,000\nAccountsReceivableNetCurrent | 8,477,000,000 | 8,856,000,000 | 9,310,000,000 | 9,282,000,000 | 10,920,000,000\nInventoryNet | 14,038,000,000 | 16,270,000,000 | 16,565,000,000 | 16,827,000,000 | 18,135,000,000\nLongTermDebtNoncurrent | 26,033,000,000 | 25,714,000,000 | 24,472,000,000 | 27,351,000,000 | 30,696,000,000\n\nPrepare a balance sheet structure analysis brief for Caterpillar Inc. using only the provided annual 10-K balance sheet data. Structure the brief with distinct sections covering asset composition, liability composition, and equity position. Present all monetary values in whole US dollars with no decimal places, and order the fiscal years chronologically from 2021-12-31 to 2025-12-31. Preserve the exact reported balance sheet figures, line-item labels, fiscal year-end dates, and USD denomination from the source. Map each stated balance sheet observation to the corresponding fiscal-year column and reported line item in the source table. Recalculate the difference between total assets and total liabilities for each fiscal year and verify it against the reported StockholdersEquityOther values. Compute the current ratio for each fiscal year using AssetsCurrent and LiabilitiesCurrent. Anchor the analysis to the five fiscal year-end periods from 2021-12-31 through 2025-12-31, and do not introduce any external information or assumptions.",
    "target_constraint_count": 9,
    "sample_no": 42,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a named balance sheet structure analysis brief for Caterpillar."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported balance sheet figures, line-item labels, fiscal year-end dates, and USD denomination from the source."
      },
      {
        "no": 3,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Anchor the analysis to the five fiscal year-end periods from 2021-12-31 through 2025-12-31."
      },
      {
        "no": 4,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each stated balance sheet observation to the corresponding fiscal-year column and reported line item in the source table."
      },
      {
        "no": 5,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Recalculate the difference between total assets and total liabilities for each fiscal year and verify it against the reported StockholdersEquityOther values."
      },
      {
        "no": 6,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Structure the brief with distinct sections covering asset composition, liability composition, and equity position."
      },
      {
        "no": 7,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present all monetary values in whole US dollars with no decimal places and order the fiscal years chronologically from 2021 to 2025."
      },
      {
        "no": 8,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Compute the current ratio for each fiscal year using AssetsCurrent and LiabilitiesCurrent."
      },
      {
        "no": 9,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided Caterpillar balance sheet data without introducing external information or assumptions."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_006",
    "workflow": "Research and Due Diligence",
    "task": "Cash flow movement analysis",
    "work_product": "CAT cash flows cash flow movement analysis brief",
    "full_prompt": "Prepare a CAT cash flows cash flow movement analysis brief using only the supplied Caterpillar Inc. annual 10-K cash flow data for fiscal years ending 2021-12-31 through 2025-12-31. Preserve the exact reported concept names, figures, fiscal years, and USD units as shown in the source. Organize the brief into a heading, a source data section, and a movement analysis section. In the source data section, cite the specific line items and fiscal years used for every figure. In the movement analysis section, present a table showing each concept, each fiscal year, and the calculated year-over-year change for operating, investing, and financing activities as well as payments to acquire property, plant, and equipment for each consecutive fiscal year from FY2021 through FY2025. Independently recalculate the net change in cash for each fiscal year by summing net cash provided by or used in operating, investing, and financing activities, and compare that result with the movement implied by the reported figures, noting any differences. Do not introduce external figures or assumptions.\n\nThe supplied material concerns CAT cash flows.\n\nEntity: CATERPILLAR INC\nCASH FLOW (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nNetCashProvidedByUsedInOperatingActivities | 7,198,000,000 | 7,766,000,000 | 12,885,000,000 | 12,035,000,000 | 11,739,000,000\nNetCashProvidedByUsedInInvestingActivities | -3,084,000,000 | -2,541,000,000 | -5,871,000,000 | -2,453,000,000 | -4,707,000,000\nNetCashProvidedByUsedInFinancingActivities | -4,188,000,000 | -7,281,000,000 | -6,932,000,000 | -9,565,000,000 | -3,899,000,000\nPaymentsToAcquirePropertyPlantAndEquipment | 1,093,000,000 | 1,296,000,000 | 1,597,000,000 | 1,988,000,000 | 2,821,000,000",
    "target_constraint_count": 15,
    "sample_no": 43,
    "constraints": [
      {
        "no": 1,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported cash flow figures, concept names, fiscal years, and USD units as shown in the source."
      },
      {
        "no": 2,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the year-over-year change in each cash flow concept for each consecutive fiscal year from FY2021 through FY2025."
      },
      {
        "no": 3,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific source line items and fiscal years used for every figure and calculation in the brief."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the cash flow movement analysis as a table showing each concept, each fiscal year, and the calculated year-over-year changes."
      },
      {
        "no": 5,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into a heading, a source data section, and a movement analysis section."
      },
      {
        "no": 6,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Independently recalculate the net change in cash for each fiscal year by summing operating, investing, and financing activities and compare it with the movement implied by the reported figures."
      },
      {
        "no": 7,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested CAT cash flows cash flow movement analysis brief."
      },
      {
        "no": 8,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied CAT cash flow data and do not introduce external figures or assumptions."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_007",
    "workflow": "Research and Due Diligence",
    "task": "Financial statement trend analysis",
    "work_product": "CRM reported profitability financial statement trend analysis brief",
    "full_prompt": "The supplied material concerns CRM reported profitability.\n\nEntity: Salesforce, Inc.\nINCOME STATEMENT (USD, annual 10-K values)\nConcept (as reported) | FY end 2022-01-31 | FY end 2023-01-31 | FY end 2024-01-31 | FY end 2025-01-31 | FY end 2026-01-31\n--- | --- | --- | --- | --- | ---\nRevenueFromContractWithCustomerExcludingAssessedTax | 26,492,000,000 | 31,352,000,000 | 34,857,000,000 | 37,895,000,000 | 41,525,000,000\nCostOfGoodsAndServicesSold | 7,026,000,000 | 8,360,000,000 | 8,541,000,000 | 8,643,000,000 | 9,270,000,000\nGrossProfit | 19,466,000,000 | 22,992,000,000 | 26,316,000,000 | 29,252,000,000 | 32,255,000,000\nOperatingIncomeLoss | 548,000,000 | 1,030,000,000 | 5,011,000,000 | 7,205,000,000 | 8,331,000,000\nNetIncomeLoss | 1,444,000,000 | 208,000,000 | 4,136,000,000 | 6,197,000,000 | 7,457,000,000\nIncomeTaxExpenseBenefit | 88,000,000 | 452,000,000 | 814,000,000 | 1,241,000,000 | 2,063,000,000\nResearchAndDevelopmentExpense | 4,465,000,000 | 5,055,000,000 | 4,906,000,000 | 5,493,000,000 | 5,993,000,000\nEarningsPerShareBasic (USD/shares) | 1.51 | 0.21 | 4.25 | 6.44 | 7.85\n\nPrepare a CRM reported profitability financial statement trend analysis brief for Salesforce, Inc. using only the supplied annual income statement data for fiscal years ending 2022-01-31 through 2026-01-31. Present the brief as a structured table with a row for each reported financial statement line item and columns for each fiscal year. Preserve the exact source figures, concept names, fiscal year end dates, and USD units as reported. For each fiscal year, calculate the gross profit margin using the reported gross profit and revenue figures, and independently verify the reported gross profit by recalculating it as revenue minus cost of goods and services sold. Include the resulting margin and any verification discrepancies in the brief.",
    "target_constraint_count": 5,
    "sample_no": 44,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the trend analysis brief as a structured table with a row for each financial statement line item and columns for each fiscal year."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a CRM reported profitability financial statement trend analysis brief as the named deliverable."
      },
      {
        "no": 3,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact source figures, concept names, fiscal year end dates, and USD units as reported in the income statement."
      },
      {
        "no": 4,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the gross profit margin for each fiscal year using the reported gross profit and revenue figures."
      },
      {
        "no": 5,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Independently verify the reported gross profit for each fiscal year by recalculating it as revenue minus cost of goods and services sold."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_008",
    "workflow": "Research and Due Diligence",
    "task": "Balance sheet structure analysis",
    "work_product": "CRM balance sheet position balance sheet structure analysis brief",
    "full_prompt": "Prepare a CRM balance sheet position balance sheet structure analysis brief for Salesforce, Inc. using only the provided annual balance sheet data for the fiscal years ending 2022-01-31, 2023-01-31, 2024-01-31, 2025-01-31, and 2026-01-31. Do not introduce any external figures or assumptions. Organize the brief with a summary of the overall balance sheet structure followed by the detailed analysis. Present the detailed analysis as a table showing each reported balance sheet line item—Assets, Liabilities, StockholdersEquity, AssetsCurrent, LiabilitiesCurrent, CashAndCashEquivalentsAtCarryingValue, AccountsReceivableNetCurrent, LongTermDebtNoncurrent, and LongTermDebt—across the five fiscal years, and label each column with the corresponding as-of date. Preserve all source figures, concept labels, fiscal year dates, and USD values exactly as reported without alteration or rounding, and cite the source balance sheet line items and fiscal years for every figure or derived metric presented. For each fiscal year, recalculate the accounting identity Assets = Liabilities + StockholdersEquity and confirm whether the reported figures tie out. Calculate the year-over-year percentage change for each reported balance sheet line item between consecutive fiscal years and include these calculations in the brief.\n\nThe supplied material concerns CRM balance sheet position.\n\nEntity: Salesforce, Inc.\nBALANCE SHEET (USD, annual 10-K values)\nConcept (as reported) | FY end 2022-01-31 | FY end 2023-01-31 | FY end 2024-01-31 | FY end 2025-01-31 | FY end 2026-01-31\n--- | --- | --- | --- | --- | ---\nAssets | 95,209,000,000 | 98,849,000,000 | 99,823,000,000 | 102,928,000,000 | 112,305,000,000\nLiabilities | 37,078,000,000 | 40,490,000,000 | 40,177,000,000 | 41,755,000,000 | 53,163,000,000\nStockholdersEquity | 58,131,000,000 | 58,359,000,000 | 59,646,000,000 | 61,173,000,000 | 59,142,000,000\nAssetsCurrent | 22,850,000,000 | 26,395,000,000 | 29,074,000,000 | 29,727,000,000 | 28,222,000,000\nLiabilitiesCurrent | 21,788,000,000 | 25,891,000,000 | 26,631,000,000 | 27,980,000,000 | 37,118,000,000\nCashAndCashEquivalentsAtCarryingValue | 5,464,000,000 | 7,016,000,000 | 8,472,000,000 | 8,848,000,000 | 7,327,000,000\nAccountsReceivableNetCurrent | 9,739,000,000 | 10,755,000,000 | 11,414,000,000 | 11,945,000,000 | 14,339,000,000\nLongTermDebtNoncurrent | 10,592,000,000 | 9,419,000,000 | 8,427,000,000 | 8,433,000,000 | 10,439,000,000\nLongTermDebt | 10,596,000,000 | 10,601,000,000 | 9,426,000,000 | 8,433,000,000 | 14,439,000,000",
    "target_constraint_count": 10,
    "sample_no": 45,
    "constraints": [
      {
        "no": 1,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve all source figures, concept labels, fiscal year dates, and USD values exactly as reported without alteration or rounding."
      },
      {
        "no": 2,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the source balance sheet line items and fiscal years for every figure or derived metric presented in the brief."
      },
      {
        "no": 3,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Recalculate the accounting identity Assets = Liabilities + StockholdersEquity for each fiscal year and confirm whether the reported figures tie out."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the balance sheet structure analysis as a table showing each balance sheet line item across the five fiscal years."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided Salesforce, Inc. balance sheet data and do not introduce external figures or assumptions."
      },
      {
        "no": 6,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the year-over-year percentage change for each reported balance sheet line item between consecutive fiscal years."
      },
      {
        "no": 7,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the as-of dates for the five fiscal year ends and use them to label each column in the analysis."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a summary of the overall balance sheet structure followed by the detailed line-item table and calculations."
      },
      {
        "no": 9,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a CRM balance sheet position balance sheet structure analysis brief as the named work product."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_009",
    "workflow": "Research and Due Diligence",
    "task": "Cash flow movement analysis",
    "work_product": "CRM cash flows cash flow movement analysis brief",
    "full_prompt": "The supplied material concerns CRM cash flows.\n\nEntity: Salesforce, Inc.\nCASH FLOW (USD, annual 10-K values)\nConcept (as reported) | FY end 2022-01-31 | FY end 2023-01-31 | FY end 2024-01-31 | FY end 2025-01-31 | FY end 2026-01-31\n--- | --- | --- | --- | --- | ---\nNetCashProvidedByUsedInOperatingActivities | 6,000,000,000 | 7,111,000,000 | 10,234,000,000 | 13,092,000,000 | 14,996,000,000\nNetCashProvidedByUsedInInvestingActivities | -14,536,000,000 | -1,989,000,000 | -1,327,000,000 | -3,163,000,000 | -8,590,000,000\nNetCashProvidedByUsedInFinancingActivities | 7,838,000,000 | -3,562,000,000 | -7,477,000,000 | -9,429,000,000 | -8,079,000,000\nPaymentsToAcquirePropertyPlantAndEquipment | 717,000,000 | 798,000,000 | 736,000,000 | 658,000,000 | 594,000,000\n\nPrepare a CRM cash flows cash flow movement analysis brief for Salesforce, Inc. using only the supplied annual 10-K cash flow data. Anchor the analysis to the five fiscal-year periods ending January 31, 2022 through January 31, 2026, and use those as-of dates as the review window for all cash flow movements. Structure the brief with named sections: an opening entity and period identification, a cash flow movement table, and a closing summary of observed movements. Present the analysis as a table showing each concept's values across the five fiscal years, with year-over-year movement calculations displayed alongside the original figures. For each concept—NetCashProvidedByUsedInOperatingActivities, NetCashProvidedByUsedInInvestingActivities, NetCashProvidedByUsedInFinancingActivities, and PaymentsToAcquirePropertyPlantAndEquipment—calculate the arithmetic difference between consecutive fiscal years and map each movement observation to the specific source concept and fiscal-year column, citing the concept name and year for every figure used. Preserve the exact reported figures, concept labels, fiscal-year dates, currency unit, and negative signs from the source without alteration or rounding. Do not introduce any outside data, estimates, or assumptions about Salesforce's cash flows.",
    "target_constraint_count": 14,
    "sample_no": 46,
    "constraints": [
      {
        "no": 1,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Anchor the analysis to the exact five fiscal-year periods ending January 31, 2022 through January 31, 2026, and use those as-of dates as the review window for all cash flow movements."
      },
      {
        "no": 2,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each cash flow movement observation to the specific source concept and fiscal-year column from the supplied statement, citing the concept name and year for every figure used."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the cash flow figures provided in the supplied context and do not introduce any outside data, estimates, or assumptions about Salesforce's cash flows."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the cash flow movement analysis as a table showing each concept's values across the five fiscal years, with movement calculations displayed alongside the original figures."
      },
      {
        "no": 5,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Structure the brief with named sections: an opening entity and period identification, a cash flow movement table, and a closing summary of observed movements."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported figures, concept labels, fiscal-year dates, currency unit, and negative signs from the source without alteration or rounding."
      },
      {
        "no": 7,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named work product: a CRM cash flows cash flow movement analysis brief for Salesforce, Inc."
      },
      {
        "no": 8,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate year-over-year movement amounts for each cash flow concept using the reported annual values, showing the arithmetic difference between consecutive fiscal years."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_010",
    "workflow": "Research and Due Diligence",
    "task": "Financial statement trend analysis",
    "work_product": "CVS reported profitability financial statement trend analysis brief",
    "full_prompt": "Prepare a CVS reported profitability financial statement trend analysis brief using only the supplied CVS Health Corporation income statement data for fiscal years ending 2021-12-31 through 2025-12-31. Organize the brief with a dedicated section for profitability trends. Present the trend analysis in a structured table format. In the table, show the reported revenues for each fiscal year and cite the income statement revenue figures as the source for the revenue trend. Calculate the year-over-year percentage change in revenues for each fiscal year from FY2022 through FY2025. Verify the reported operating income and net income figures against the underlying income statement data. Preserve the exact reported revenue figures without alteration. Identify and explicitly mark the missing related-party transaction revenue data for FY2023 through FY2025.\n\nThe supplied material concerns CVS reported profitability.\n\nEntity: CVS HEALTH CORPORATION\nINCOME STATEMENT (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nRevenues | 292,111,000,000 | 322,467,000,000 | 357,776,000,000 | 372,809,000,000 | 402,067,000,000\nRelatedPartyTransactionOtherRevenuesFromTransactionsWithRelatedParty | 79,000,000 | 87,000,000 | — | — | —\nCostOfGoodsAndServicesSold | 175,803,000,000 | 196,892,000,000 | 217,098,000,000 | 206,287,000,000 | 221,167,000,000\nOperatingIncomeLoss | 13,310,000,000 | 7,954,000,000 | 13,743,000,000 | 8,516,000,000 | 4,660,000,000\nNetIncomeLoss | 8,001,000,000 | 4,311,000,000 | 8,344,000,000 | 4,614,000,000 | 1,768,000,000\nIncomeTaxExpenseBenefit | 2,548,000,000 | 1,509,000,000 | 2,805,000,000 | 1,562,000,000 | 408,000,000\nEarningsPerShareBasic (USD/shares) | 6.07 | 3.29 | 6.49 | 3.67 | 1.4",
    "target_constraint_count": 12,
    "sample_no": 47,
    "constraints": [
      {
        "no": 1,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify and explicitly mark the missing related-party transaction revenue data for FY2023-FY2025."
      },
      {
        "no": 2,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the trend analysis in a structured table format."
      },
      {
        "no": 3,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the income statement revenue figures as the source for the revenue trend."
      },
      {
        "no": 4,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Verify the reported operating income and net income figures against the underlying income statement data."
      },
      {
        "no": 5,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the year-over-year percentage change in revenues for each fiscal year from FY2022 through FY2025."
      },
      {
        "no": 6,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a dedicated section for profitability trends."
      },
      {
        "no": 7,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Cover the five fiscal years from FY2021 through FY2025."
      },
      {
        "no": 8,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a CVS reported profitability financial statement trend analysis brief."
      },
      {
        "no": 9,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported revenue figures without alteration."
      },
      {
        "no": 10,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied CVS income statement data and do not introduce external financial information."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_011",
    "workflow": "Research and Due Diligence",
    "task": "Balance sheet structure analysis",
    "work_product": "CVS balance sheet position balance sheet structure analysis brief",
    "full_prompt": "The supplied material concerns CVS balance sheet position.\n\nEntity: CVS HEALTH CORPORATION\nBALANCE SHEET (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nAssets | 232,999,000,000 | 228,275,000,000 | 249,728,000,000 | 253,215,000,000 | 253,538,000,000\nLiabilities | 157,618,000,000 | 156,506,000,000 | 173,092,000,000 | 177,485,000,000 | 178,156,000,000\nStockholdersEquity | 75,075,000,000 | 71,469,000,000 | 76,461,000,000 | 75,560,000,000 | 75,214,000,000\nAssetsCurrent | 60,008,000,000 | 65,633,000,000 | 67,858,000,000 | 68,645,000,000 | 74,714,000,000\nLiabilitiesCurrent | 67,807,000,000 | 69,421,000,000 | 79,189,000,000 | 84,609,000,000 | 88,692,000,000\nCashAndCashEquivalentsAtCarryingValue | 9,408,000,000 | 12,945,000,000 | 8,196,000,000 | 8,586,000,000 | 8,453,000,000\nAccountsReceivableNetCurrent | 24,431,000,000 | 27,276,000,000 | 35,227,000,000 | 36,469,000,000 | 39,779,000,000\nInventoryNet | 17,760,000,000 | 19,090,000,000 | 18,025,000,000 | 18,107,000,000 | 19,246,000,000\nOtherLiabilitiesNoncurrent | 1,904,000,000 | 6,730,000,000 | 6,211,000,000 | 5,431,000,000 | 4,777,000,000\n\nPrepare a CVS balance sheet position balance sheet structure analysis brief using only the supplied CVS annual balance sheet data. Open with a concise summary of the overall balance sheet position, then present the analysis for the five fiscal years ending December 31, 2021 through December 31, 2025. Include a table showing the reported balance sheet line items and year-end values, preserving the exact dollar figures and fiscal-year labels from the source. Cite the specific line items used for each structural observation. Verify that total assets equal total liabilities plus stockholders equity for each fiscal year, calculate the current ratio for each year using current assets and current liabilities, and compare the balance sheet structure across the five years to identify the largest year-over-year change in total assets. Do not introduce outside facts or assumptions.",
    "target_constraint_count": 10,
    "sample_no": 48,
    "constraints": [
      {
        "no": 1,
        "tag": "QV6",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Compare the balance sheet structure across the five fiscal years and identify the largest year-over-year change in total assets."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested CVS balance sheet position balance sheet structure analysis brief."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the brief only on the supplied CVS balance sheet data and do not introduce outside facts or assumptions."
      },
      {
        "no": 4,
        "tag": "FP6",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Open the brief with a concise summary of the overall balance sheet position before presenting detailed structure analysis."
      },
      {
        "no": 5,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Clearly state that the analysis covers the five fiscal years ending December 31, 2021 through December 31, 2025."
      },
      {
        "no": 6,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Verify that total assets equal total liabilities plus stockholders equity for each fiscal year."
      },
      {
        "no": 7,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific balance sheet line items used for each structural observation."
      },
      {
        "no": 8,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported dollar figures and fiscal-year labels from the supplied balance sheet."
      },
      {
        "no": 9,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the balance sheet line items and year-end values in a table."
      },
      {
        "no": 10,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the current ratio for each fiscal year using current assets and current liabilities."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_012",
    "workflow": "Research and Due Diligence",
    "task": "Cash flow movement analysis",
    "work_product": "CVS cash flows cash flow movement analysis brief",
    "full_prompt": "Prepare a cash flow movement analysis brief for CVS Health Corporation using only the supplied annual cash flow disclosures. Cover the fiscal years ending 2021-12-31 through 2025-12-31. Preserve the exact reported figures and concept names for NetCashProvidedByUsedInOperatingActivities, NetCashProvidedByUsedInInvestingActivities, NetCashProvidedByUsedInFinancingActivities, and PaymentsToAcquirePropertyPlantAndEquipment. For each of these line items, calculate the year-over-year change between consecutive fiscal years and present the movement analysis in a neutral, analytical tone suitable for a financial analysis brief. Do not introduce any figures or facts beyond those provided.\n\nThe supplied material concerns CVS cash flows.\n\nEntity: CVS HEALTH CORPORATION\nCASH FLOW (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nNetCashProvidedByUsedInOperatingActivities | 18,265,000,000 | 16,177,000,000 | 13,426,000,000 | 9,107,000,000 | 10,639,000,000\nNetCashProvidedByUsedInInvestingActivities | -5,261,000,000 | -5,047,000,000 | -20,889,000,000 | -7,613,000,000 | -5,871,000,000\nNetCashProvidedByUsedInFinancingActivities | -11,356,000,000 | -10,516,000,000 | 2,683,000,000 | -1,135,000,000 | -4,940,000,000\nPaymentsToAcquirePropertyPlantAndEquipment | 2,520,000,000 | 2,727,000,000 | 3,031,000,000 | 2,781,000,000 | 2,832,000,000",
    "target_constraint_count": 5,
    "sample_no": 49,
    "constraints": [
      {
        "no": 1,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported cash flow figures, concept names, and annual periods from the source without changing their values."
      },
      {
        "no": 2,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate year-over-year changes for each reported cash flow line item across the annual periods."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a cash flow movement analysis brief for CVS."
      },
      {
        "no": 4,
        "tag": "FP5",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use a neutral, analytical tone appropriate for a financial analysis brief."
      },
      {
        "no": 5,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Anchor the analysis to the annual fiscal periods FY2021 through FY2025 shown in the source."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_013",
    "workflow": "Research and Due Diligence",
    "task": "Financial statement trend analysis",
    "work_product": "DAL reported profitability financial statement trend analysis brief",
    "full_prompt": "The supplied material concerns DAL reported profitability.\n\nEntity: DELTA AIR LINES, INC.\nINCOME STATEMENT (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nRevenueFromContractWithCustomerExcludingAssessedTax | 29,899,000,000 | 50,582,000,000 | 58,048,000,000 | 61,643,000,000 | 63,364,000,000\nOperatingIncomeLoss | 1,886,000,000 | 3,661,000,000 | 5,521,000,000 | 5,995,000,000 | 5,822,000,000\nNetIncomeLoss | 280,000,000 | 1,318,000,000 | 4,609,000,000 | 3,457,000,000 | 5,005,000,000\nIncomeTaxExpenseBenefit | 118,000,000 | 596,000,000 | 999,000,000 | 1,201,000,000 | 1,180,000,000\nEarningsPerShareBasic (USD/shares) | 0.44 | 2.07 | 7.21 | 5.39 | 7.72\n\nPrepare a DAL reported profitability financial statement trend analysis brief using only the supplied Delta Air Lines annual 10-K income statement data for fiscal years 2021 through 2025. Organize the brief with a dedicated trend analysis section and include a table presenting the profitability metrics by fiscal year. In the table and narrative, cite the specific income statement concepts and fiscal years for each figure, and preserve the exact reported amounts and fiscal year labels without alteration. Verify the reported operating income and net income figures for each fiscal year against the source values. Calculate year-over-year percentage changes for revenue, operating income, net income, and basic earnings per share across the five fiscal years, and present those changes as part of the trend analysis. Do not introduce any external figures, assumptions, or data beyond the supplied income statement.",
    "target_constraint_count": 11,
    "sample_no": 50,
    "constraints": [
      {
        "no": 1,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Anchor the trend analysis to the five fiscal years FY2021 through FY2025 as reported in the annual 10-K income statement."
      },
      {
        "no": 2,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Verify the reported operating income and net income figures for each fiscal year against the source income statement values."
      },
      {
        "no": 3,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate year-over-year percentage changes for revenue, operating income, net income, and basic EPS across the five fiscal years."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a dedicated trend analysis section that presents the profitability metrics across the five fiscal years."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied Delta Air Lines income statement data; do not introduce external figures or assumptions."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific income statement concepts and fiscal years when presenting each profitability figure."
      },
      {
        "no": 7,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported amounts and fiscal year labels from the source income statement without alteration."
      },
      {
        "no": 8,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested DAL reported profitability financial statement trend analysis brief as the deliverable."
      },
      {
        "no": 9,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Include a table presenting the profitability metrics by fiscal year to support the trend analysis."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_014",
    "workflow": "Research and Due Diligence",
    "task": "Balance sheet structure analysis",
    "work_product": "DAL balance sheet position balance sheet structure analysis brief",
    "full_prompt": "Prepare a balance sheet structure analysis brief for Delta Air Lines, Inc. using only the supplied annual 10-K balance sheet data. Cover the five fiscal years ended December 31, 2021 through December 31, 2025. Begin with a short opening summary of the balance sheet position, then present a structured table. In the table, calculate the current ratio for each fiscal year using AssetsCurrent and LiabilitiesCurrent, and cite the source line items used for each calculation. Verify that total Assets equals the sum of LiabilitiesCurrent, LiabilitiesNoncurrent, and StockholdersEquity for each fiscal year, and note any discrepancy. Preserve the exact reported figures and concept names from the source. Close with a brief structural observation section describing the main balance sheet trends shown by the table.\n\nThe supplied material concerns DAL balance sheet position.\n\nEntity: DELTA AIR LINES, INC.\nBALANCE SHEET (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nAssets | 72,459,000,000 | 72,288,000,000 | 73,644,000,000 | 75,372,000,000 | 81,317,000,000\nLiabilitiesCurrent | 20,966,000,000 | 25,940,000,000 | 26,418,000,000 | 26,670,000,000 | 27,624,000,000\nStockholdersEquity | 3,887,000,000 | 6,582,000,000 | 11,105,000,000 | 15,293,000,000 | 20,853,000,000\nAssetsCurrent | 15,940,000,000 | 13,011,000,000 | 10,269,000,000 | 9,844,000,000 | 10,968,000,000\nCashAndCashEquivalentsAtCarryingValue | 7,933,000,000 | 3,266,000,000 | 2,741,000,000 | 3,069,000,000 | 4,310,000,000\nAirlineRelatedInventoryNet | 1,098,000,000 | 1,424,000,000 | 1,314,000,000 | 1,428,000,000 | 1,601,000,000\nLongTermDebtNoncurrent | 23,582,000,000 | 19,326,000,000 | 15,985,000,000 | 13,546,000,000 | 11,936,000,000\nLongTermDebt | 25,084,000,000 | 21,381,000,000 | 18,610,000,000 | 15,347,000,000 | 13,308,000,000\nLiabilitiesNoncurrent | 47,606,000,000 | 39,766,000,000 | 36,121,000,000 | 33,409,000,000 | 32,840,000,000",
    "target_constraint_count": 13,
    "sample_no": 51,
    "constraints": [
      {
        "no": 1,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the current ratio for each fiscal year using current assets and current liabilities."
      },
      {
        "no": 2,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied Delta Air Lines balance sheet data without adding external financial information or assumptions."
      },
      {
        "no": 3,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Present the analysis for the five fiscal years ending December 31, 2021 through December 31, 2025."
      },
      {
        "no": 4,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported balance sheet figures and concept names as shown in the source."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the source balance sheet line items when presenting each calculated ratio or structural observation."
      },
      {
        "no": 6,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested balance sheet structure analysis brief for the Delta Air Lines balance sheet position."
      },
      {
        "no": 7,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Format the analysis as a structured table showing the calculated ratios and supporting balance sheet figures by fiscal year."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a short opening summary followed by the table and a closing structural observation section."
      },
      {
        "no": 9,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Verify that total assets equal the sum of total liabilities and stockholders' equity for each fiscal year."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_016",
    "workflow": "Research and Due Diligence",
    "task": "Balance sheet structure analysis",
    "work_product": "JNJ balance sheet position balance sheet structure analysis brief",
    "full_prompt": "Prepare a balance sheet structure analysis brief for Johnson & Johnson using only the provided annual 10-K balance sheet data. Organize the brief into distinct sections covering assets, liabilities, and liquidity-related balance sheet components. Present the analysis in a tabular format, and cite the reported fiscal-year-end periods and balance sheet concepts as the source evidence. Preserve the exact reported figures, concept names, and fiscal-year-end dates without introducing outside facts or assumptions. Cover the five reported fiscal-year-end periods from FY2022 through FY2025. For each reported fiscal year-end, calculate the liabilities-to-assets ratio using the reported total liabilities and total assets, and independently recalculate the ratio from the source figures to verify the result.\n\nThe supplied material concerns JNJ balance sheet position.\n\nEntity: Johnson & Johnson\nBALANCE SHEET (USD, annual 10-K values)\nConcept (as reported) | FY end 2022-01-02 | FY end 2023-01-01 | FY end 2023-12-31 | FY end 2024-12-29 | FY end 2025-12-28\n--- | --- | --- | --- | --- | ---\nAssets | 182,018,000,000 | 187,378,000,000 | 167,558,000,000 | 180,104,000,000 | 199,210,000,000\nLiabilities | 107,995,000,000 | 110,574,000,000 | 98,784,000,000 | 108,614,000,000 | 117,666,000,000\nAssetsCurrent | 60,979,000,000 | 55,294,000,000 | 53,495,000,000 | 55,893,000,000 | 55,624,000,000\nLiabilitiesCurrent | 45,226,000,000 | 55,802,000,000 | 46,282,000,000 | 50,321,000,000 | 54,126,000,000\nCashAndCashEquivalentsAtCarryingValue | 14,487,000,000 | 12,889,000,000 | 21,859,000,000 | 24,105,000,000 | 19,709,000,000\nAccountsReceivableNetCurrent | 15,283,000,000 | 14,039,000,000 | 14,873,000,000 | 14,842,000,000 | 17,178,000,000\nInventoryNet | 10,387,000,000 | 10,268,000,000 | 11,181,000,000 | 12,444,000,000 | 14,191,000,000\nLongTermDebtNoncurrent | 29,985,000,000 | 26,886,000,000 | 25,881,000,000 | 30,651,000,000 | 39,438,000,000\nLongTermDebt | 32,116,000,000 | 28,437,000,000 | 27,350,000,000 | 32,400,000,000 | 41,438,000,000",
    "target_constraint_count": 14,
    "sample_no": 52,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a balance sheet structure analysis brief for Johnson & Johnson."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported figures, concept names, and fiscal-year-end dates from the source balance sheet data."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the analysis only on the provided Johnson & Johnson balance sheet data without introducing outside facts or assumptions."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the balance sheet structure analysis in a tabular format."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the fiscal-year-end periods and reported balance sheet concepts as the source evidence for the analysis."
      },
      {
        "no": 6,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into distinct sections covering assets, liabilities, and liquidity-related balance sheet components."
      },
      {
        "no": 7,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Independently recalculate the liabilities-to-assets ratio for each reported fiscal year-end from the source figures."
      },
      {
        "no": 8,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Cover the five reported fiscal-year-end periods from FY2022 through FY2025 as the analysis timeframe."
      },
      {
        "no": 9,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the liabilities-to-assets ratio for each reported fiscal year-end using the reported total liabilities and total assets."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_017",
    "workflow": "Research and Due Diligence",
    "task": "Cash flow movement analysis",
    "work_product": "JNJ cash flows cash flow movement analysis brief",
    "full_prompt": "The supplied material concerns JNJ cash flows.\n\nEntity: Johnson & Johnson\nCASH FLOW (USD, annual 10-K values)\nConcept (as reported) | FY end 2022-01-02 | FY end 2023-01-01 | FY end 2023-12-31 | FY end 2024-12-29 | FY end 2025-12-28\n--- | --- | --- | --- | --- | ---\nNetCashProvidedByUsedInOperatingActivities | 23,410,000,000 | 21,194,000,000 | 22,791,000,000 | 24,266,000,000 | 24,530,000,000\nNetCashProvidedByUsedInInvestingActivities | -8,683,000,000 | -12,371,000,000 | 878,000,000 | -18,599,000,000 | -23,588,000,000\nNetCashProvidedByUsedInFinancingActivities | -14,047,000,000 | -8,871,000,000 | -15,825,000,000 | -3,132,000,000 | -5,539,000,000\nPaymentsToAcquirePropertyPlantAndEquipment | 3,652,000,000 | 4,009,000,000 | 4,543,000,000 | 4,424,000,000 | 4,832,000,000\n\nPrepare a cash flow movement analysis brief for Johnson & Johnson using only the supplied annual cash flow statement data. Begin with a summary section that highlights the overall direction of operating, investing, and financing cash flows across the reported fiscal periods, then follow with a detailed movement analysis section. In the detailed section, present a structured table that lists each reported line item—NetCashProvidedByUsedInOperatingActivities, NetCashProvidedByUsedInInvestingActivities, NetCashProvidedByUsedInFinancingActivities, and PaymentsToAcquirePropertyPlantAndEquipment—alongside its exact reported values for each fiscal year end from 2022-01-02 through 2025-12-28. For each line item, calculate and show the year-over-year change between consecutive fiscal periods, and map each movement observation to its corresponding line item and fiscal year in the source. Preserve all reported figures, line item names, and fiscal period labels exactly as they appear in the supplied data, without introducing any outside facts or assumptions.",
    "target_constraint_count": 15,
    "sample_no": 53,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the analysis solely on the supplied JNJ cash flow data without introducing outside facts or assumptions."
      },
      {
        "no": 2,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each cash flow movement observation to the corresponding line item and fiscal year in the supplied statement."
      },
      {
        "no": 3,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate year-over-year changes for each reported cash flow line item across the available fiscal periods."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the cash flow movement analysis as a structured table showing each line item and its period values and changes."
      },
      {
        "no": 5,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a summary section followed by the detailed movement analysis section."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported figures, line item names, and fiscal period labels from the source without alteration."
      },
      {
        "no": 7,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a cash flow movement analysis brief as the named deliverable for JNJ."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_018",
    "workflow": "Research and Due Diligence",
    "task": "Financial statement trend analysis",
    "work_product": "JPM reported profitability financial statement trend analysis brief",
    "full_prompt": "Prepare a concise trend analysis brief for JPMorgan Chase & Co.'s reported profitability using only the supplied annual income statement data for fiscal years 2021 through 2025. Structure the brief with distinct sections for revenue trends, net income trends, and a summary observation. Present the trend data in a table showing each fiscal year and its reported values, citing the underlying income statement line items. Preserve the exact reported dollar amounts and fiscal-year labels from the income statement without alteration. Calculate year-over-year percentage changes in reported revenues for fiscal years 2022 through 2025, and include these calculations in the revenue trends section. Do not introduce any outside financial information or assumptions beyond the provided data.\n\nThe supplied material concerns JPM reported profitability.\n\nEntity: JPMORGAN CHASE & CO\nINCOME STATEMENT (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nRevenues | 121,649,000,000 | 128,695,000,000 | 158,104,000,000 | 177,556,000,000 | 182,447,000,000\nRevenuesNetOfInterestExpense | 121,649,000,000 | 128,695,000,000 | 158,104,000,000 | 177,556,000,000 | 182,447,000,000\nNetIncomeLoss | 48,334,000,000 | 37,676,000,000 | 49,552,000,000 | 58,471,000,000 | 57,048,000,000\nIncomeTaxExpenseBenefit | 11,228,000,000 | 8,490,000,000 | 12,060,000,000 | 16,610,000,000 | 15,547,000,000\nEarningsPerShareBasic (USD/shares) | 15.39 | 12.1 | 16.25 | 19.79 | 20.05",
    "target_constraint_count": 14,
    "sample_no": 54,
    "constraints": [
      {
        "no": 1,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Use the five annual reporting periods FY2021 through FY2025 as the trend analysis window."
      },
      {
        "no": 2,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate year-over-year percentage changes in reported revenues for FY2022 through FY2025."
      },
      {
        "no": 3,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Structure the brief with distinct sections for revenue trends, net income trends, and a summary observation."
      },
      {
        "no": 4,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported dollar amounts and fiscal-year labels from the income statement without alteration."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the underlying income statement line items when presenting trend figures."
      },
      {
        "no": 6,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the trend data in a table format showing each fiscal year and its reported values."
      },
      {
        "no": 7,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a concise trend analysis brief as the named work product."
      },
      {
        "no": 8,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided JPM income statement data, without introducing outside financial information or assumptions."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_019",
    "workflow": "Research and Due Diligence",
    "task": "Balance sheet structure analysis",
    "work_product": "JPM balance sheet position balance sheet structure analysis brief",
    "full_prompt": "The supplied material concerns JPM balance sheet position.\n\nEntity: JPMORGAN CHASE & CO\nBALANCE SHEET (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nAssets | 3,743,567,000,000 | 3,665,743,000,000 | 3,875,393,000,000 | 4,002,814,000,000 | 4,424,900,000,000\nLiabilities | 3,449,440,000,000 | 3,373,411,000,000 | 3,547,515,000,000 | 3,658,056,000,000 | 4,062,462,000,000\nStockholdersEquity | 294,127,000,000 | 292,332,000,000 | 327,878,000,000 | 344,758,000,000 | 362,438,000,000\nAccountsPayableAndAccruedLiabilitiesCurrentAndNoncurrent | 262,755,000,000 | 300,141,000,000 | 290,307,000,000 | 280,672,000,000 | 316,794,000,000\n\nPrepare a JPM balance sheet position balance sheet structure analysis brief using only the supplied JPMorgan Chase & Co. annual balance sheet data for fiscal years 2021 through 2025. Write the brief in a neutral, analyst-style tone appropriate for a due diligence audience. For each fiscal year, cite the specific line items and preserve the exact reported dollar amounts without rounding or alteration. Calculate the ratio of liabilities to total assets for each year and present each ratio as a percentage with two decimal places. Independently verify that the sum of liabilities and stockholders' equity equals total assets for each fiscal year, noting any discrepancies. Cover all five fiscal year periods from FY2021 through FY2025 as given in the source. Do not introduce any external facts, assumptions, or data beyond the provided balance sheet figures.",
    "target_constraint_count": 9,
    "sample_no": 55,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific balance sheet line items and fiscal year values from the supplied JPMorgan data when presenting figures."
      },
      {
        "no": 2,
        "tag": "FP5",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Write the brief in a neutral, analyst-style tone appropriate for a due diligence audience."
      },
      {
        "no": 3,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact reported dollar amounts and fiscal year labels from the source without rounding or alteration."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named deliverable: a JPM balance sheet position balance sheet structure analysis brief."
      },
      {
        "no": 5,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate the ratio of liabilities to assets for each fiscal year from the supplied figures."
      },
      {
        "no": 6,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Cover the five fiscal year periods from FY2021 through FY2025 as given in the source."
      },
      {
        "no": 7,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided JPMorgan balance sheet data and do not introduce external facts or assumptions."
      },
      {
        "no": 8,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the calculated liability-to-asset ratios as percentages with two decimal places."
      },
      {
        "no": 9,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Verify that the sum of liabilities and stockholders' equity equals total assets for each fiscal year."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t2_020",
    "workflow": "Research and Due Diligence",
    "task": "Cash flow movement analysis",
    "work_product": "JPM cash flows cash flow movement analysis brief",
    "full_prompt": "Prepare a JPM cash flows cash flow movement analysis brief using only the supplied JPMorgan Chase & Co. annual cash flow data for the fiscal years ending 2021-12-31 through 2025-12-31. Write in a neutral, analytical tone suitable for an internal research and due diligence audience. Base the analysis exclusively on the provided operating, investing, and financing cash flow amounts, without introducing external facts or assumptions. Calculate the year-over-year change in net cash provided by or used in operating activities, investing activities, and financing activities for each consecutive fiscal year pair from FY2021 through FY2025. Preserve the exact fiscal year labels, concept names, and as-reported USD amounts from the source data, and cite the fiscal year period covered by each movement calculation so every change can be tied back to the source. Present the analysis in a structured table with rows for each cash flow activity and columns showing each fiscal year amount and the corresponding year-over-year change. Finally, verify that the calculated movements reconcile arithmetically with the as-reported operating, investing, and financing cash flow figures.\n\nThe supplied material concerns JPM cash flows.\n\nEntity: JPMORGAN CHASE & CO\nCASH FLOW (USD, annual 10-K values)\nConcept (as reported) | FY end 2021-12-31 | FY end 2022-12-31 | FY end 2023-12-31 | FY end 2024-12-31 | FY end 2025-12-31\n--- | --- | --- | --- | --- | ---\nNetCashProvidedByUsedInOperatingActivities | 78,084,000,000 | 107,119,000,000 | 12,974,000,000 | -42,012,000,000 | -147,782,000,000\nNetCashProvidedByUsedInInvestingActivities | -129,344,000,000 | -137,819,000,000 | 67,643,000,000 | -163,403,000,000 | -265,565,000,000\nNetCashProvidedByUsedInFinancingActivities | 275,993,000,000 | -126,257,000,000 | -25,571,000,000 | 63,447,000,000 | 269,533,000,000",
    "target_constraint_count": 9,
    "sample_no": 56,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named JPM cash flows cash flow movement analysis brief."
      },
      {
        "no": 2,
        "tag": "FP5",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Write in a neutral, analytical tone suitable for an internal research and due diligence audience."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the analysis only on the supplied JPMorgan Chase cash flow data, without introducing external facts or assumptions."
      },
      {
        "no": 4,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Analyze cash flow movements across the five fiscal years ending 2021-12-31 through 2025-12-31."
      },
      {
        "no": 5,
        "tag": "QV1",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Calculate year-over-year changes in net cash provided by or used in operating, investing, and financing activities for each consecutive fiscal year pair."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact fiscal year labels, concept names, and as-reported USD amounts from the supplied cash flow data."
      },
      {
        "no": 7,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the fiscal year period covered by each movement calculation so each change can be tied back to the source data."
      },
      {
        "no": 8,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the cash flow movement analysis in a structured table format with rows for each cash flow activity and columns for each fiscal year or year-over-year change."
      },
      {
        "no": 9,
        "tag": "QV2",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Verify that the calculated year-over-year movements reconcile arithmetically with the as-reported operating, investing, and financing cash flow amounts."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_001",
    "workflow": "Decision and Structuring",
    "task": "Credit product decision evidence assessment",
    "work_product": "BNPL origination growth and user-count caveats credit product decision evidence assessment brief",
    "full_prompt": "The supplied material concerns BNPL origination growth and user-count caveats.\n\n2022), https://www.consumerfinance.gov/data-research/research-reports/buy-now-pay-later-market-trends-and-consumer-impacts/.\n6 Consumer Financial Protection Bureau, Consumer Use of Buy Now, Pay Later (March 2023),\nhttps://files.consumerfinance.gov/f/documents/cfpb_consumer-use-of-buy-now-pay-later_2023-03.pdf.\n7 Consumer Financial Protection Bureau, Consumer Use of Buy Now, Pay Later and Other Unsecured Debt (January\n2025), https://files.consumerfinance.gov/f/documents/cfpb_BNPL_Report_2025_01.pdf.4 CONSUMER FINANCIAL PROTECTION BUREAU\nfrom other products that the companies may offer, including products that the companies and\nothers may characterize as BNPL. 5 CONSUMER FINANCIAL PROTECTION BUREAU\n2. Key Findings\nThe following trends were observed from the data collected from six large BNPL firms:\n• The volume of BNPL loans continues to grow, albeit at a slower pace than in\nprevious years. From 2022 to 2023, the number of loans made by the lenders we\nsurveyed increased by 23 percent, and the total dollar amount of loans originated\nincreased by 26 percent when adjusted for inflation, representing slower rates of growth\nthan in prior years (see Table 1).\n• The number of BNPL users has expanded in recent years. The six firms in our\nsample reported a combined 53.6 million consumers who took out at least one BNPL\nloan in 2023, a 12 percent increase from 2022 (see Table 2). Since lenders do not\nnecessarily know if a user has BNPL loans from other lenders, these metrics do not\naccount for users who may have taken a BNPL loan across multiple lenders and thus\nlikely overestimate the number of BNPL users.\n\nPrepare a BNPL origination growth and user-count caveats credit product decision evidence assessment brief using only the supplied CFPB aggregate report. Structure the brief into distinct sections separating growth metrics, user-count metrics, and caveats, and present the assessment as a structured brief with clearly labeled findings and caveats. In the growth metrics section, cite the specific report figures showing that from 2022 to 2023 the number of loans increased by 23 percent and the total dollar amount of loans originated increased by 26 percent when adjusted for inflation, representing slower growth than in prior years. In the user-count metrics section, cite the combined 53.6 million consumers who took out at least one BNPL loan in 2023, a 12 percent increase from 2022. In the caveats section, identify the limitation that these user-count metrics likely overestimate the number of unique BNPL users because lenders do not necessarily know if a user has BNPL loans from other lenders, so the metrics do not account for users who may have taken a BNPL loan across multiple lenders.",
    "target_constraint_count": 10,
    "sample_no": 57,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific report figures and source references for the loan volume growth, dollar origination growth, and user-count increase."
      },
      {
        "no": 2,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied CFPB aggregate report as the evidentiary basis for the brief."
      },
      {
        "no": 3,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the assessment as a structured brief with clearly labeled findings and caveats."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into distinct sections separating growth metrics, user-count metrics, and caveats."
      },
      {
        "no": 5,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the BNPL origination growth and user-count caveats credit product decision evidence assessment brief as the named deliverable."
      },
      {
        "no": 6,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify the limitation that the user-count metric likely overestimates unique users due to multi-lender BNPL loans."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_002",
    "workflow": "Decision and Structuring",
    "task": "Credit product decision evidence assessment",
    "work_product": "BNPL survey coverage and measurement limits credit product decision evidence assessment brief",
    "full_prompt": "Prepare a BNPL survey coverage and measurement limits credit product decision evidence assessment brief based solely on the supplied CFPB report. Organize the brief into two named sections: 'Survey Coverage' and 'Measurement Limits'. Present the brief as a structured table with defined columns for each evidence point. In the Survey Coverage section, state the survey period covered by the collected data, and cite the specific data points collected from each firm, including number of unique users, number of loans originated, dollar amount of loans originated, number of loans assessed at least one late fee, dollar amount of late fees assessed, dollar amount of late fees collected, number of loans charged-off, and dollar amount of loans charged-off. In the Measurement Limits section, identify the sample representativeness limitation disclosed in the source, noting that the sample is not necessarily representative of the entire BNPL market, and preserve the reported sample share of approximately 40 percent of the overall point-of-sale financing market in 2023 as well as the note that dollar values have been adjusted for inflation. Do not introduce any information beyond what is contained in the supplied report.\n\nThe supplied material concerns BNPL survey coverage and measurement limits.\n\nThe CFPB obtained summary data from six large firms about their BNPL loans for each of the\ncalendar years 2019-2023. We estimate that the six firms represented approximately 40 percent\nof the overall point-of-sale financing market in 2023, which includes the “pay-in-four” BNPL\nloans that are the subject of this spotlight as well as other forms of short-term financing, such as\npoint-of-sale installment loans and credit card installment plans. The sample’s estimated share\nof the market is provided as a percent of the overall point-of-sale financing market because we\nare not aware of any estimate limited to the “pay-in-four” BNPL market. Our sample is not\nnecessarily representative of the entire BNPL market.\nFor each firm in our sample, we collected the following aggregate data points:8\n1. Number of unique users\n2. Number of loans originated9\n3. Dollar amount of loans originated\n4. Number of loans that were assessed at least one late fee\n5. Dollar amount of late fees assessed\n6. Dollar amount of late fees collected\n7. Number of loans charged-off\n8. Dollar amount of loans charged-off\nIn addition to tracking and analyzing the change in the above data points for our sample across\nthe survey period, we also used the data to calculate other key metrics such as average yearly\nBNPL loans per unique user at an individual company, and the ratio of late fees and charge-offs\nto total origination volume. Further, the firms in our sample provided de-identified, aggregate,\nsummary data exclusively about their user base and loan portfolio. All data is aggregated and\naveraged over the portfolio of loans. We did not collect data at the loan or account level. As such,\nall metrics regarding the number of unique users and their usage patterns are limited to a given\nconsumer’s BNPL usage at a given firm in our sample, and do not account for consumers that\nhave taken out loans with two or more BNPL lenders. Note that the various dollar values in this\nspotlight have been adjusted for inflation.10 The Appendix provides the non-inflation adjusted\nnominal dollar values.\n8 Some of these data points were previously collected and reported in our 2022 Market Trends report data collection.",
    "target_constraint_count": 14,
    "sample_no": 58,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured table with defined columns."
      },
      {
        "no": 2,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the survey period covered by the collected data."
      },
      {
        "no": 3,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific data points collected from each firm."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named evidence assessment brief."
      },
      {
        "no": 5,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify the sample representativeness limitation disclosed in the source."
      },
      {
        "no": 6,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Restrict all statements in the brief to information contained in the supplied CFPB report."
      },
      {
        "no": 7,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the reported sample share and inflation-adjustment note exactly as stated."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into named sections for coverage and measurement limits."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_003",
    "workflow": "Decision and Structuring",
    "task": "Loan approval package requirements mapping",
    "work_product": "ESOP general eligibility and guarantees loan approval package requirements mapping brief",
    "full_prompt": "The supplied material concerns ESOP general eligibility and guarantees.\n\nSBA Form 1920 (Revised 09/20) P a g e | 3 \nBusiness Acquisition (Change of Ownership) \n( Asset or Stock ) $ $ $ $ \nPay off SBA Loan\n( SID / Other Lender / Both) $ $ $ $ \nPay Notes Payable\n( SID / Other Lender / Both) $ $ $ $ \nPay Accounts Payable $ $ $ $ \nSBA Guarantee Fee $ $ $ $\nOther (explain): $ $ $ $ \nTotal (sum of last column should match sum of first \n3 across): $ $ $ $ \nIs any portion of the Applicant’s equity injection funded by a Rollover as Business Start-Up “ROBS”? \nIf “Yes” the Applicant and the 401(k) plan must be in compliance with all applicable IRS, Treasury, and Department of Labor requirements. \nYes No \nF. Employee Stock Ownership Plan (“ESOP”) - N/A Complete if the Small Business Applicant is a Qualified Employee Trust or equivalent \ntrust. (13 CFR §§ 120.351- 354 ) All questions below must be answered “Yes” to be eligible.)\n• The Qualified Employee Trust (or equivalent trust) meets the requirements and conditions for an ESOP prescribed \nin all applicable IRS, Treasury and Department of Labor regulations AND the small business will provide the \nfunds needed by the trust to repay the loan and will provide adequate collateral.\nYes No \n• Loan will help finance the growth of the Qualified Employee Trust's employer's small business or will purchase \nownership or voting control of the employer. Yes No \n• Loan proceeds will be used either (a) by the Qualified Employee Trust to purchase: 1) qualified employer \nsecurities; or 2) a controlling interest (51% or more) in the employer (ownership and control will vest in the trust \nby the time the loan is repaid), or (b) by the employer small business concern for the sole purpose of making a loan \nto the Qualified Employee Trust that results in the Qualified Employees Trust owning a controlling interest (51% \nor more) of the small business concern.\nYes No \nG. General Eligibility (If either of the statements below are answered “No,” the request is not eligible for an SBA guaranty.)\n• Small Business Applicant is (1) an operating business (except for loans to Eligible Passive Companies under 13 \nCFR § 120.111), (2) organized for profit, (3) located in the United States and its territories or possessions, (4) \nsmall (as defined by 13 CFR Part 121), and (5) able to demonstrate a need for the desired credit.\nYes No \n• The Small Business Applicant's products and/or services are available to the public. \nAND\n• Lender has reviewed the small business applicant and has determined it is an eligible business (including, but not \nlimited to whether the business is an ineligible type of business under 13 CFR § 120.110).\nYes No \nH. Credit Not Reasonably Available Elsewhere (If the statements below are answered \"No,\" the request is not eligible for an SBA guaranty)\n• Lender has assessed the Small Business Applicant's access to credit outside of this SBA-guaranteed loan, and \ndetermined that such credit is not available elsewhere on reasonable commercial terms from non-Federal non-\nState, and non-local government sources AND\nYes No \n• Lender's Credit Memo includes the credit elsewhere analysis and specifically identifies the factors in the present \nfinancing that meet credit elsewhere, including an analysis of the personal liquidity of the principal(s), and the loan \nfile contains supporting documentation for the Lender's determination.\nYes No \nI. Required Guarantors\nThe Lender has verified that all owners with an interest of 20% or more in the Small Business Applicant will guarantee the \nloan, including each 20% or more owner of the EPC and each 20% or more owner of the OC in an EPC/OC structure. The \n20% threshold includes a spouse when the combined ownership of both spouses is 20% or more. Only ESOPs and/or eligi-\nble 401(k) Plans are excluded from this requirement.\nYes No\n\nPrepare a neutral, lender-facing loan approval package requirements mapping brief for ESOP general eligibility and guarantees based solely on the supplied SBA Form 1920 lender application text. Present the mapped requirements in a concise, ordered format without adding unsupported length or ranking. For each governing standard or eligibility statement, connect the standard to its resulting action, such as stating that if any required statement is answered No, the request is not eligible for an SBA guaranty. Identify the required documentation and records, including the lender credit memo with the credit elsewhere analysis and the supporting loan file documentation. Preserve the exact regulatory citations, thresholds, and terms from the form, including 13 CFR §§ 120.351-354, 13 CFR § 120.111, 13 CFR Part 121, 13 CFR § 120.110, the 20% ownership threshold for required guarantors, and the 51% controlling interest threshold for ESOP loan proceeds. Classify each mapped requirement into the form's categories: ESOP-specific eligibility, general eligibility, credit not reasonably available elsewhere, and required guarantors. Identify the lender's approval and verification responsibilities, including reviewing business eligibility and verifying required guarantors. Indicate the required eligibility determination for each mapped requirement, such as whether a No answer makes the request not eligible for an SBA guaranty, and flag the conditions that would constitute a deficiency or ineligibility gap. Map each requirement to the corresponding form section or statement. Cover the applicant and trust profile factors required for ESOP eligibility, including the Qualified Employee Trust, employer small business, ownership or voting control, and loan proceeds use. State the conditional triggers in the form, such as if any portion of the equity injection is funded by ROBS, then the applicant and 401(k) plan must comply with IRS, Treasury, and Department of Labor requirements.",
    "target_constraint_count": 15,
    "sample_no": 59,
    "constraints": [
      {
        "no": 1,
        "tag": "FP5",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Write the brief in a neutral, lender-facing compliance tone suitable for an internal loan approval package review."
      },
      {
        "no": 2,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapped requirements in a concise, ordered format without adding unsupported length or ranking."
      },
      {
        "no": 3,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each governing standard or eligibility statement to the resulting action, such as ineligibility for an SBA guaranty when a required statement is answered No."
      },
      {
        "no": 4,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify the required documentation and records, including the lender credit memo and supporting loan file documentation."
      },
      {
        "no": 5,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact regulatory citations, thresholds, and terms from the form, such as 13 CFR §§ 120.351-354, 13 CFR § 120.111, 13 CFR Part 121, and 13 CFR § 120.110."
      },
      {
        "no": 6,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each mapped requirement into the form's categories, such as ESOP-specific eligibility, general eligibility, credit not reasonably available elsewhere, and required guarantors."
      },
      {
        "no": 7,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied SBA Form 1920 text as the basis for the requirements mapping and do not introduce outside SBA rules or assumptions."
      },
      {
        "no": 8,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the approval and verification responsibilities assigned to the lender, including reviewing business eligibility and verifying required guarantors."
      },
      {
        "no": 9,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the 20% ownership threshold for required guarantors and the 51% controlling interest threshold for ESOP loan proceeds."
      },
      {
        "no": 10,
        "tag": "DB1",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Indicate the required eligibility determination for each mapped requirement, such as whether a No answer makes the request not eligible for an SBA guaranty."
      },
      {
        "no": 11,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag the conditions that would constitute a deficiency or ineligibility gap, specifically any required statement answered No."
      },
      {
        "no": 12,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each requirement to the corresponding form section or statement, such as the ESOP section, General Eligibility section, Credit Not Reasonably Available Elsewhere section, and Required Guarantors section."
      },
      {
        "no": 13,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested loan approval package requirements mapping brief as the named work product."
      },
      {
        "no": 14,
        "tag": "RC6",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the applicant and trust profile factors required for ESOP eligibility, including the Qualified Employee Trust, employer small business, ownership or voting control, and loan proceeds use."
      },
      {
        "no": 15,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the conditional triggers in the form, such as if any portion of the equity injection is funded by ROBS, then the applicant and 401(k) plan must comply with IRS, Treasury, and DOL requirements."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_004",
    "workflow": "Decision and Structuring",
    "task": "Loan approval package requirements mapping",
    "work_product": "character citizenship debt and size eligibility loan approval package requirements mapping brief",
    "full_prompt": "Prepare a loan approval package requirements mapping brief for character, citizenship, debt, and size eligibility using only the supplied SBA Form 1920 lender application excerpt. Organize the brief into the following sections: Character Determination, Citizenship, Prior Loss to Government/Delinquent Federal Debt, and Size Analysis. In each section, map the eligibility requirements exactly as stated on the form, using the form's own terminology such as \"character,\" \"citizenship,\" \"debt,\" and \"size.\" State the quantitative thresholds: misdemeanors fully dispositioned more than 6 months ago with no convictions for crimes against a minor; at least 51% ownership and control by U.S. citizens or lawful permanent residents; LPR status verification for any owner with 20% or more ownership interest; tangible net worth not in excess of $15 million; and average net income after federal income taxes for the preceding 2 completed fiscal years not in excess of $5.0 million. State the time windows: disposition more than 6 months ago, disposition within the last 6 months, average annual receipts over the last three completed fiscal years, and average net income for the preceding 2 completed fiscal years. For character determination, identify the required actions and documentation: retain the original Character Determination Package with all required supporting information and court documentation in the loan file; if the disclosed crime includes a felony, a crime against a minor, or a case dispositioned within the last 6 months, submit all required documents electronically to SBA at OCA912@SBA.gov and receive an SBA clearance letter. Flag each condition that makes the loan not eligible, including formal criminal charges, current parole or probation, deferred prosecution, conditional discharge, order of protection, sex offender registry, prior government loss, delinquent federal debt, and failure to meet citizenship or size standards. For each eligibility area, state the required Yes/No determination and the resulting eligibility decision as specified by the form. Cite the relevant form fields and regulatory references, including 13 CFR § 120.110(q), 31 CFR § 285.13(g), 13 CFR § 121.104, and 13 CFR § 121.201. Map each conditional trigger to its required action: if only misdemeanors fully dispositioned more than 6 months ago with no crimes against a minor are disclosed, submission to SBA is not required; otherwise submission and an SBA clearance letter are required. Identify the required SBA approval path for character determination as electronic submission to OCA912@SBA.gov and receipt of an SBA clearance letter before eligibility can be confirmed. List the records and documentation required for the loan file, including the original Character Determination Package and the SBA clearance letter.\n\nThe supplied material concerns character citizenship debt and size eligibility.\n\nSBA Form 1920 (Revised 09/20) P a g e | 4 \nJ. Character Determination (For those individuals who are required to execute Section II of SBA Form 1919) For any individual answering \naffirmatively to the question of conviction(s) Lender must retain in its loan file the original Character Determination Package, including all \nrequired supporting information and court documentation.\n• Lender has verified that no individual completing SBA Form 1919 is subject to an indictment, criminal infor-\nmation, arraignment, or other means by which formal criminal charges are brought. \n(If the answer to the statement is No, the loan is not eligible.)\nYes No \n• Lender has verified that no individual is currently on parole or probation. \n(If currently on parole or probation, deferred prosecution, conditional discharge, order of protection, or who is on \na sex offender registry, the loan is not eligible).\nYes No \n• Lender has confirmed that all disclosed crimes were misdemeanors, fully dispositioned by the court more than 6 \nmonths ago and there were no convictions for crimes against a minor. \n(If no, submission to SBA of the Character Determination Package is not required.)\nYes No \n• Lender has confirmed that disclosed crime(s) included felony(ies) convictions or crimes against a minor; or was a \ncase that was dispositioned by the court within the last 6 months. Lender must have submitted all required docu-\nments electronically to SBA at OCA912@SBA.gov and received an SBA clearance letter. \n(If the answer is \"No,\" the loan is not eligible.)\nYes No \nK. Citizenship - The business must be at least 51% owned and controlled by U.S. citizens and/or those who have LPR status from USCIS to be \neligible for SBA Guaranty\n• U. S. Citizen Yes No \nOR\n• Lawful Permanent Resident (LPR) status verified with the USCIS (applies to any owner with 20% or more owner-\nship interest) Yes No \nL. Prior Loss to Government/Delinquent Federal Debt (If \"Yes,\" loan is not eligible, unless waived by SBA for good cause.) 13 CFR § \n120.110(q) and 31 CFR § 285.13(g)\n• Applicant previously defaulted on a Federal loan or federally assisted financing that resulted in the Federal \ngovernment, or any of its departments or agencies, sustaining a loss (a compromise agreement under which the \nFederal agency/department accepted less than the full amount owed is also considered a loss).\nYes No \n• Another business owned, operated, and/or controlled by the Applicant or any Associate of the Applicant \npreviously defaulted on a Federal loan (or guaranteed a loan which was defaulted) and caused the Federal \ngovernment, or any of its agencies or departments to sustain a loss in any of its programs (a compromise agree-\nment under which the Federal agency/department accepted less than the full amount owed is also considered a \nloss). \nYes No \n• The Applicant or any of the guarantors is currently delinquent on a nontax debt to the Federal Government \n(a Federal debt that is the subject of, or has been discharged in, a bankruptcy proceeding, or has been released or \ncompromised by the Federal agency/department is not considered delinquent).\nYes No \nM. Size Analysis\nIf the Applicant is an existing business that is applying for an SBA loan to acquire another business, the two businesses are combined to determine \nwhether or not the Small Business Applicant is small. If an application is for an EPC/OC, refer to the size determinations under the EPC rule in the \ncurrent SOP 50 10. If the Small Business Applicant has Affiliates, please provide a list, including Affiliate name and tax ID #, and discuss possible \nbases of affiliation. If affiliation exists, complete a Size Analysis for each Affiliate.\nUse this size standard \nPrimary Industry \nNAICS Code \nAverage annual receipts over the last three completed fiscal years per Federal Tax Returns (exclude \naffiliates) 13 CFR § 121.104 $ \nSBA Size Standard based on NAICS (The size standards are found in 13 CFR § 121.201)\nNumber of Employees \nOR Use the Alternative size standard \nTangible Net Worth is (not in excess of $15 million) and $ \nAverage net income after Federal Income Taxes (excluding any carry over losses) for preceding 2 \ncompleted fiscal years is not in excess of $5.0 million. (The alternative size standard is found at §3(a) \nof the Small Business Act.)\n$",
    "target_constraint_count": 13,
    "sample_no": 60,
    "constraints": [
      {
        "no": 1,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the named eligibility topics from the form: character determination, citizenship, prior loss to government/delinquent federal debt, and size analysis."
      },
      {
        "no": 2,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the exact terminology from the assignment and form, including \"character,\" \"citizenship,\" \"debt,\" \"size,\" and \"loan approval package requirements mapping.\""
      },
      {
        "no": 3,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the quantitative thresholds for character and size eligibility: misdemeanors fully dispositioned more than 6 months ago, 51% ownership/control by U.S. citizens or LPRs, 20% ownership interest for LPR verification, $15 million tangible net worth, and $5.0 million average net income."
      },
      {
        "no": 4,
        "tag": "RC4",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Identify the required actions and documentation when a character determination is triggered: retain the Character Determination Package and submit required documents to SBA at OCA912@SBA.gov to receive an SBA clearance letter."
      },
      {
        "no": 5,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag each condition that makes the loan not eligible: formal criminal charges, current parole or probation, deferred prosecution, conditional discharge, order of protection, sex offender registry, felony or crime against a minor, disposition within the last 6 months, prior government loss, delinquent federal debt, or failure to meet citizenship or size standards."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific form fields and regulatory references, such as the character determination section, citizenship section, prior loss section, size analysis section, 13 CFR § 120.110(q), 31 CFR § 285.13(g), 13 CFR § 121.104, and 13 CFR § 121.201."
      },
      {
        "no": 7,
        "tag": "DB1",
        "family": "DB",
        "check_type": "计划约束",
        "text": "For each eligibility area, state the required Yes/No determination and the resulting eligibility decision as specified by the form."
      },
      {
        "no": 8,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Map each conditional trigger to its required action: if a disclosed crime is a felony, crime against a minor, or dispositioned within the last 6 months, submission to SBA is required; if only misdemeanors dispositioned more than 6 months ago with no crimes against a minor, submission is not required."
      },
      {
        "no": 9,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the required SBA approval path for character determination: electronic submission to OCA912@SBA.gov and receipt of an SBA clearance letter before eligibility can be confirmed."
      },
      {
        "no": 10,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the time windows and periods: misdemeanors fully dispositioned more than 6 months ago, cases dispositioned within the last 6 months, average annual receipts over the last three completed fiscal years, and average net income for the preceding 2 completed fiscal years."
      },
      {
        "no": 11,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested loan approval package requirements mapping brief covering character, citizenship, debt, and size eligibility."
      },
      {
        "no": 12,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "List the records and documentation required for the loan file: the original Character Determination Package with supporting information and court documentation, and the SBA clearance letter for required submissions."
      },
      {
        "no": 13,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into sections for character determination, citizenship, prior loss to government/delinquent federal debt, and size analysis, with a clear mapping of requirements in each section."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_005",
    "workflow": "Decision and Structuring",
    "task": "Loan approval package requirements mapping",
    "work_product": "occupancy acquisition and valuation conditions loan approval package requirements mapping brief",
    "full_prompt": "The supplied material concerns occupancy acquisition and valuation conditions.\n\nSBA Form 1920 (Revised 09/20) P a g e | 5 \nThe combined size calculation of Applicant and its Affiliates meets the size standard for the Applicant's primary industry or \nthe size standard for the primary industry of the Applicant and its Affiliates, whichever is higher (13 CFR § 121.104); Yes No \nOR\nThe combined size calculation of Applicant and its Affiliates meets the alternative size standard. Yes No \nIf size standard is exceeded by no more than 25%, Applicant agrees to use the loan proceeds within a labor surplus area. Yes No \nN. Occupancy and Leasing Requirements 13 CFR § 120.131 (If any of the statements below cannot be answered \"Yes,\" then the loan is not \neligible.) N/A \nConstruction of a new building or refinancing of a short-term construction loan.\nIf checked, answer the following:\n• Applicant (or Operating Company(ies)) will permanently occupy at least 60% of the Rentable Property for the \nterm of the loan; lease long term no more than 20% of the Rentable Property to one or more tenants; plans to \noccupy within 3 years and all of it no later than 10 years. \nYes No \n• Loan proceeds will be used to renovate or improve the Rentable Property for the Applicant (or Operating \nCompany(ies)) only. Yes No \nOR\nAcquisition, renovation, reconstruction of an existing building.\nIf checked, answer the following:\n• Applicant (or Operating Company(ies)) will occupy at least 51% of the Rentable Property. Yes No \n• Loan proceeds will not be used to remodel or convert any rental space in the property. Yes No \nO. Business Acquisition / Change of Ownership 13 CFR § 120. 202. Complete this section for all changes of ownership (including between \nexisting owners) N/A \nIf part of the Use of Proceeds will be used to fund or refinance a change in ownership: \n• The change will promote the sound development or preserve the existence of the Applicant business. \n(If \"No,\" the loan is not eligible.) Yes No \n• The change is between existing owners of the small business and will result in 100% ownership by the remaining \nowner(s) or is the purchase of 100% of a business resulting in a new owner and meets the requirements set forth in \nthe SOP 50 10. (If \"No,\" the loan is not eligible.) \nYes No \n• The loan proceeds will not pay off an SBA-guaranteed loan of the seller with the same Lender. \n(If \"No,\" application may not be processed under delegated authority.) Yes No \n• The portion of the loan proceeds allocated to the change of ownership will not exceed the value of the business as \nstated in the required business valuation. (If \"No,\" the loan is not eligible.) Yes No \n• If the loan is an International Trade loan or Export Express loan, the Lender has followed the requirements of SOP \n50 10 for changes of ownership financed by those types of loans. (If \"No,\" the loan is not eligible.) Yes No \nWill a business broker receive a commission from the sale of the business paid by the Applicant? \n(If Yes, complete below) Yes No \nName of Business Broker Firm Representative\nBroker Address Commission $ \nP. Type of Business Valuation - (use worksheet to determine what type of business valuation is required)\nTotal Purchase Price to be paid to seller per purchase contract: $ \nLess down payment paid to Seller: -$ \nSource & Type of Injection: Less buyer injection: -$ \nTotal Amount being Financed (including 7(a), 504, Seller or Other financing) (A): $ \nAppraised Value of Commercial Real Estate being financed in purchase of and/or with the business \n(B): -$ \nAppraised Value of equipment being financed in the purchase of the business (C): -$ \nValue of intangible assets to be Financed (A) – (B) – (C) = (D): $ \nIf the value of (D) above is $250,000 or less AND there is not a close relationship between Buyer & Seller, you have \nobtained an internally prepared business valuation that supports the value being paid for the business? \nOR Included\n\nPrepare a loan approval package requirements mapping brief for the occupancy acquisition and valuation conditions shown in SBA Form 1920. Organize the brief into named sections separating the occupancy and leasing requirements from the related eligibility and valuation conditions. Use only the supplied SBA Form 1920 text and do not add outside regulatory interpretations or assumptions. Preserve the exact regulatory citations and wording from the form, including the references to 13 CFR § 121.104 and 13 CFR § 120.131, and map each extracted requirement to the specific form language or section from which it was taken. Use the exact form terminology for the occupancy and leasing conditions, including the labels for the construction and acquisition scenarios. State the $250,000 intangible asset threshold and the condition under which an internally prepared business valuation is sufficient. Include the occupancy timing deadlines of occupying within 3 years and all of the property no later than 10 years. Flag that any occupancy or leasing statement that cannot be answered Yes makes the loan ineligible. Specify the conditional requirement that construction or refinancing of a short-term construction loan triggers the 60% permanent occupancy, 20% long-term lease, and 3-year/10-year occupancy plan conditions. Identify any occupancy or leasing statements that are marked N/A or otherwise not answered so that unresolved eligibility items are visible. Indicate the eligibility determination required for each occupancy and leasing statement as eligible or ineligible based on the Yes/No answers.",
    "target_constraint_count": 11,
    "sample_no": 61,
    "constraints": [
      {
        "no": 1,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into named sections that separate the occupancy and leasing requirements from the related eligibility and valuation conditions."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact regulatory citations and wording of the occupancy and leasing requirements as they appear in the form."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Derive the requirements mapping only from the supplied SBA Form 1920 text without adding outside regulatory interpretations or assumptions."
      },
      {
        "no": 4,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each extracted requirement to the specific form language or section from which it was taken."
      },
      {
        "no": 5,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the exact form terminology for the occupancy and leasing conditions, including the labels for construction and acquisition scenarios."
      },
      {
        "no": 6,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the $250,000 intangible asset threshold and the condition under which an internally prepared business valuation is sufficient."
      },
      {
        "no": 7,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Include the occupancy timing deadlines of occupying within 3 years and all of the property no later than 10 years."
      },
      {
        "no": 8,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag that any occupancy or leasing statement that cannot be answered Yes makes the loan ineligible."
      },
      {
        "no": 9,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Specify the conditional requirement that construction or refinancing of a short-term construction loan triggers the 60% permanent occupancy, 20% long-term lease, and 3-year/10-year occupancy plan conditions."
      },
      {
        "no": 10,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify any occupancy or leasing statements that are marked N/A or otherwise not answered so that unresolved eligibility items are visible."
      },
      {
        "no": 11,
        "tag": "DB1",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Indicate the eligibility determination required for each occupancy and leasing statement as eligible or ineligible based on the Yes/No answers."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_006",
    "workflow": "Decision and Structuring",
    "task": "Loan approval package requirements mapping",
    "work_product": "refinancing CAPLine and export eligibility loan approval package requirements mapping brief",
    "full_prompt": "Prepare a mapping brief for the loan approval package requirements for refinancing, CAPLine, and export eligibility using the supplied SBA Form 1920 excerpt. Present the requirements as a structured table or checklist with separate sections for debt refinancing, franchise/license/jobber/membership agreements, CAPLine, and export loan programs. For each requirement, state the governing standard or rule that triggers it, such as 13 CFR § 120 and SOP 50 10, and preserve the form's exact terms, thresholds, and references, including the $250,000 business valuation trigger and the $4,000,000 ITL working capital guaranteed amount. Classify each CAPLine and export eligibility question as seasonal, builders, contract, working capital, exporter, or ITL, and state the eligibility decision or evaluation required for each question, including whether a 'No' answer makes the request ineligible for an SBA guaranty. Show the conditional consequences stated in the form, such as a 'No' answer making a CAPLine or export loan request ineligible. Identify any time windows or deadlines, including the requirement that an independent business valuation be obtained prior to closing or disbursement for delegated loans. List the supporting documentation required for each debt being refinanced, including the complete business debt schedule and copies of notes, security agreements, leases, or credit card statements. Flag any approval or escalation steps required by the form, including the instruction to submit franchise-related documents to the LGPC. Include the follow-up actions the lender must take, such as explaining franchise eligibility determinations in the credit memo and submitting required documents to the LGPC. Mark any fields or conditions that are not applicable or cannot be determined from the blank form, using the form's N/A convention where appropriate. Keep the brief concise and structured so that each mapped requirement is presented as a distinct, countable item without unnecessary expansion.\n\nThe supplied material concerns refinancing CAPLine and export eligibility.\n\nSBA Form 1920 (Revised 09/20) P a g e | 6 \nIf the value of (D) above is over $250,000 OR there is a close relationship between Buyer & Seller (as described in \nSOP 50 10), you have obtained an independent business valuation from a qualified source that supports the value being \npaid for the business? (For loans processed under Lender's delegated authority, the independent business valuation has \nbeen or will be obtained prior to closing/disbursement.)\nIncluded \nQ. Debt Refinancing - for each debt being refinanced. The Lender must address in the credit memo that the eligible debt refinance and processing \nmethod is compliant with 13 CFR § 120 and SOP 50 10 N/A \nInclude a COMPLETE BUSINESS DEBT SCHEDULE that matches the most current interim business \nfinancial statement. Included \nObtain copy of all supporting documentation for each debt to be refinanced (e.g., note, security agreement, \nlease). For credit card debt provide a copy of the most recent credit card statement evidencing the name the \ndebt is in and the current balance. (Lenders must follow the procedures as outlined in the current SOP 50 10 \nfor documenting their files completely for any debt being refinanced.)\nIncluded for each debt being \nrefinanced\nR. Franchise/License/Jobber/Membership or Similar Agreement N/A \n• Does the Applicant operate under a Franchise/License/Jobber/Membership or similar Agreement? \n(If \"Yes,\" answer the following questions.) Yes No \nTradename under the Agreement: Franchise Identifier Code \n(if applicable): \nFor non-delegated loans, if the Applicant's brand is not on the SBA Franchise Directory, Lender has determined that the brand does not \nmeet the FTC definition of a franchise but is eligible for SBA financial assistance. Lender has explained its determination in its Credit \nMemo and will submit a copy of the agreement and any other document the franchisor requires the franchisee to execute with their loan \ndocumentation to the LGPC.\nFor non-delegated loans, if the Applicant's brand is not on the SBA Franchise Directory, Lender has determined that the brand does not \nmeet the FTC definition of a franchise but is eligible for SBA financial assistance. Lender has explained its determination in its Credit \nMemo and will submit a copy of the agreement and any other document the franchisor requires the franchisee to execute with their loan \ndocumentation to the LGPC.\nS. CAPLine - If the loan is a CAPLine, please complete the following. Applicant must meet SBA Loan Program Requirements in \nSOP 50 10. If either of the questions below are answered \"No,\" the request is not eligible for an SBA guaranty. N/A \nSeasonal Applicant has been in operation for at least 12 calendar months and is able to demonstrate a \ndefinite pattern of seasonal activity. Yes No \nBuilders Applicant is a construction contractor or homebuilder under NAICS codes 236220, 236115, \n236116, or 236118 with a demonstrated managerial and technical ability in profitable construction \nor renovation, will either perform the construction/renovation work or manage the job with at least \none supervisory employee on the job site during the entire construction phase, will conduct prompt \nand significant renovations, as defined in SOP 50 10, and has demonstrated a successful \nperformance record in bidding and completing construction/renovation at a profit within the \nestimated construction period, is able to demonstrate prior prompt payments to suppliers and \nsubcontractors, and the prior successful performance have been of comparable type and size to the \nproposed project.\nYes No \nContract Applicant is able to demonstrate an ability to operate profitably based upon the prior completion of \nsimilar contracts, possesses the overall ability to bid, accurately project costs, perform the specific \ntype of work required by the contract(s), and has the finan-cial capacity and technical expertise to \ncomplete the contract on time and at a profit.\nYes No \nWorking Capital Applicant generates accounts receivable (not notes receivable) and/or has inventory. Yes No \nT. Export Loan Programs If the question below is answered \"No,\" the loan is not eligible for an SBA Guaranty. N/A \n• Is the Applicant an exporter (direct or indirect) or will it become one as a result of this loan? Yes No \n• Projected export sales supported by this loan: $ \nInternational Trade Loan (ITL) (If any question below is answered \"No,\" loan is not eligible for IT.) N/A \n• The loan proceeds will be used solely for the purpose of 1) financing the acquisition, construction, renovation, \nmodernization, improvement, or expansion of productive facilities or equipment to be used in the United States in \nthe production of goods and services involved in international trade, and to develop and penetrate foreign \nmarkets; 2) the refinancing of existing indebtedness that is not structured with reasonable terms and conditions, \nincluding any debt that qualifies for refinancing under the Debt Refinance section above; or 3) working capital (of \nup to $4,000,000 guaranteed amount) when IT loan is for working capital.\nYes No \n• The small business concern has demonstrated either 1) the loan proceeds will be used to expand existing export \nmarkets or develop new export markets; or 2) it is confronting increased competition with foreign firms in the \nrelevant market and is injured by such competition.\nYes No",
    "target_constraint_count": 15,
    "sample_no": 62,
    "constraints": [
      {
        "no": 1,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Identify any time windows or deadlines in the form, such as the requirement that an independent business valuation be obtained prior to closing or disbursement for delegated loans."
      },
      {
        "no": 2,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Keep the brief concise and structured so that each mapped requirement is presented as a distinct, countable item without unnecessary expansion."
      },
      {
        "no": 3,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag any approval or escalation steps required by the form, including the instruction to submit franchise-related documents to the LGPC."
      },
      {
        "no": 4,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each CAPLine and export eligibility question as seasonal, builders, contract, working capital, exporter, or ITL based on the form's categories."
      },
      {
        "no": 5,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "List the supporting documentation required for each debt being refinanced, including the complete business debt schedule and copies of notes, security agreements, leases, or credit card statements."
      },
      {
        "no": 6,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a mapping brief that organizes the approval package requirements for refinancing, CAPLine, and export eligibility."
      },
      {
        "no": 7,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the form's exact terms, thresholds, and references, including the $250,000 valuation trigger, 13 CFR § 120, SOP 50 10, and the $4,000,000 ITL working capital guaranteed amount."
      },
      {
        "no": 8,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Show the conditional consequences stated in the form, such as a 'No' answer making a CAPLine or export loan request ineligible for an SBA guaranty."
      },
      {
        "no": 9,
        "tag": "RC4",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Include the follow-up actions the lender must take, such as explaining franchise eligibility determinations in the credit memo and submitting required documents to the LGPC."
      },
      {
        "no": 10,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Identify the quantitative thresholds in the form, including the $250,000 business valuation trigger and the $4,000,000 ITL working capital guaranteed amount."
      },
      {
        "no": 11,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a structured table or checklist that separates refinancing, CAPLine, and export eligibility requirements."
      },
      {
        "no": 12,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Mark any fields or conditions that are not applicable or cannot be determined from the blank form, using the form's N/A convention where appropriate."
      },
      {
        "no": 13,
        "tag": "DB1",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the eligibility decision or evaluation required for each CAPLine and export loan question, including whether a 'No' answer makes the request ineligible."
      },
      {
        "no": 14,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the named topics in the form: debt refinancing, franchise/license/jobber/membership agreements, CAPLine seasonal/builders/contract/working capital categories, and export loan programs including ITL."
      },
      {
        "no": 15,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each requirement to the governing standard or rule that triggers it, such as linking the debt refinance compliance statement to 13 CFR § 120 and SOP 50 10."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_011",
    "workflow": "Decision and Structuring",
    "task": "Loan eligibility conditional decision mapping",
    "work_product": "ESOP general eligibility and guarantees loan eligibility conditional decision mapping brief",
    "full_prompt": "The supplied material concerns ESOP general eligibility and guarantees.\n\nSBA Form 1920 (Revised 09/20) P a g e | 3 \nBusiness Acquisition (Change of Ownership) \n( Asset or Stock ) $ $ $ $ \nPay off SBA Loan\n( SID / Other Lender / Both) $ $ $ $ \nPay Notes Payable\n( SID / Other Lender / Both) $ $ $ $ \nPay Accounts Payable $ $ $ $ \nSBA Guarantee Fee $ $ $ $\nOther (explain): $ $ $ $ \nTotal (sum of last column should match sum of first \n3 across): $ $ $ $ \nIs any portion of the Applicant’s equity injection funded by a Rollover as Business Start-Up “ROBS”? \nIf “Yes” the Applicant and the 401(k) plan must be in compliance with all applicable IRS, Treasury, and Department of Labor requirements. \nYes No \nF. Employee Stock Ownership Plan (“ESOP”) - N/A Complete if the Small Business Applicant is a Qualified Employee Trust or equivalent \ntrust. (13 CFR §§ 120.351- 354 ) All questions below must be answered “Yes” to be eligible.)\n• The Qualified Employee Trust (or equivalent trust) meets the requirements and conditions for an ESOP prescribed \nin all applicable IRS, Treasury and Department of Labor regulations AND the small business will provide the \nfunds needed by the trust to repay the loan and will provide adequate collateral.\nYes No \n• Loan will help finance the growth of the Qualified Employee Trust's employer's small business or will purchase \nownership or voting control of the employer. Yes No \n• Loan proceeds will be used either (a) by the Qualified Employee Trust to purchase: 1) qualified employer \nsecurities; or 2) a controlling interest (51% or more) in the employer (ownership and control will vest in the trust \nby the time the loan is repaid), or (b) by the employer small business concern for the sole purpose of making a loan \nto the Qualified Employee Trust that results in the Qualified Employees Trust owning a controlling interest (51% \nor more) of the small business concern.\nYes No \nG. General Eligibility (If either of the statements below are answered “No,” the request is not eligible for an SBA guaranty.)\n• Small Business Applicant is (1) an operating business (except for loans to Eligible Passive Companies under 13 \nCFR § 120.111), (2) organized for profit, (3) located in the United States and its territories or possessions, (4) \nsmall (as defined by 13 CFR Part 121), and (5) able to demonstrate a need for the desired credit.\nYes No \n• The Small Business Applicant's products and/or services are available to the public. \nAND\n• Lender has reviewed the small business applicant and has determined it is an eligible business (including, but not \nlimited to whether the business is an ineligible type of business under 13 CFR § 120.110).\nYes No \nH. Credit Not Reasonably Available Elsewhere (If the statements below are answered \"No,\" the request is not eligible for an SBA guaranty)\n• Lender has assessed the Small Business Applicant's access to credit outside of this SBA-guaranteed loan, and \ndetermined that such credit is not available elsewhere on reasonable commercial terms from non-Federal non-\nState, and non-local government sources AND\nYes No \n• Lender's Credit Memo includes the credit elsewhere analysis and specifically identifies the factors in the present \nfinancing that meet credit elsewhere, including an analysis of the personal liquidity of the principal(s), and the loan \nfile contains supporting documentation for the Lender's determination.\nYes No \nI. Required Guarantors\nThe Lender has verified that all owners with an interest of 20% or more in the Small Business Applicant will guarantee the \nloan, including each 20% or more owner of the EPC and each 20% or more owner of the OC in an EPC/OC structure. The \n20% threshold includes a spouse when the combined ownership of both spouses is 20% or more. Only ESOPs and/or eligi-\nble 401(k) Plans are excluded from this requirement.\nYes No\n\nPrepare an ESOP general eligibility and guarantees loan eligibility conditional decision mapping brief using only the supplied SBA Form 1920 excerpt. Organize the brief into four sections: ESOP eligibility, general eligibility, credit not reasonably available elsewhere, and required guarantors. Within each section, present the mapping as a table or matrix with one row per condition. For every Yes/No statement, classify it as an ESOP-specific requirement, general eligibility requirement, credit-elsewhere requirement, or guarantor requirement, and state the resulting eligibility decision or action when the answer is Yes and when it is No. Where the form says a No answer makes the request ineligible, flag that outcome as a disqualifying gap. Preserve the form's exact regulatory citations, percentages, and terms, including the 51 percent controlling-interest threshold and the 20 percent ownership threshold for required guarantors, including the spousal combined-ownership rule and the exclusion for ESOPs and eligible 401(k) plans. For each mapped condition, cite the specific SBA Form 1920 statement that supports it, and connect that governing statement to the evidence required and the resulting eligibility action in one chain. Identify the lender review, credit memo, supporting documentation, and guarantor-verification steps that must be completed before eligibility can be confirmed. Do not introduce any outside SBA rules, regulatory interpretations, or assumptions beyond the supplied form text.",
    "target_constraint_count": 15,
    "sample_no": 63,
    "constraints": [
      {
        "no": 1,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the ESOP eligibility topics, general eligibility statements, credit-elsewhere requirements, and required guarantor provisions from the form."
      },
      {
        "no": 2,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the lender review, credit memo, supporting documentation, and guarantor-verification steps required before eligibility can be confirmed."
      },
      {
        "no": 3,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Apply the 20 percent ownership threshold and the 51 percent controlling-interest threshold exactly as stated."
      },
      {
        "no": 4,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Map each Yes/No condition to its resulting eligibility outcome, including the disqualifying effect of a No answer where stated."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied SBA Form 1920 text and the assignment; do not introduce outside SBA rules or assumptions."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the form's exact terms, regulatory citations, percentages, and Yes/No answer structure without alteration."
      },
      {
        "no": 7,
        "tag": "DB1",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the required eligibility decision for each general-eligibility and credit-elsewhere statement based on its Yes/No result."
      },
      {
        "no": 8,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each governing statement to the evidence required and the resulting eligibility action in one chain."
      },
      {
        "no": 9,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag any No answer to a statement that the form says makes the request ineligible as a deficiency or disqualifying gap."
      },
      {
        "no": 10,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested ESOP general eligibility and guarantees loan eligibility conditional decision mapping brief."
      },
      {
        "no": 11,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each condition as an ESOP-specific requirement, general eligibility requirement, credit-elsewhere requirement, or guarantor requirement."
      },
      {
        "no": 12,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into distinct sections for ESOP eligibility, general eligibility, credit elsewhere, and required guarantors."
      },
      {
        "no": 13,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific SBA Form 1920 statement or provision supporting each mapped condition and outcome."
      },
      {
        "no": 14,
        "tag": "RC6",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Document the applicant profile factors required by the form, including ESOP trust status, ownership interest, spousal ownership, and guarantor exclusions."
      },
      {
        "no": 15,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the conditional decision mapping as a structured table or matrix linking each condition, threshold, evidence step, and outcome."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_013",
    "workflow": "Decision and Structuring",
    "task": "Loan eligibility conditional decision mapping",
    "work_product": "occupancy acquisition and valuation conditions loan eligibility conditional decision mapping brief",
    "full_prompt": "The supplied material concerns occupancy acquisition and valuation conditions.\n\nSBA Form 1920 (Revised 09/20) P a g e | 5 \nThe combined size calculation of Applicant and its Affiliates meets the size standard for the Applicant's primary industry or \nthe size standard for the primary industry of the Applicant and its Affiliates, whichever is higher (13 CFR § 121.104); Yes No \nOR\nThe combined size calculation of Applicant and its Affiliates meets the alternative size standard. Yes No \nIf size standard is exceeded by no more than 25%, Applicant agrees to use the loan proceeds within a labor surplus area. Yes No \nN. Occupancy and Leasing Requirements 13 CFR § 120.131 (If any of the statements below cannot be answered \"Yes,\" then the loan is not \neligible.) N/A \nConstruction of a new building or refinancing of a short-term construction loan.\nIf checked, answer the following:\n• Applicant (or Operating Company(ies)) will permanently occupy at least 60% of the Rentable Property for the \nterm of the loan; lease long term no more than 20% of the Rentable Property to one or more tenants; plans to \noccupy within 3 years and all of it no later than 10 years. \nYes No \n• Loan proceeds will be used to renovate or improve the Rentable Property for the Applicant (or Operating \nCompany(ies)) only. Yes No \nOR\nAcquisition, renovation, reconstruction of an existing building.\nIf checked, answer the following:\n• Applicant (or Operating Company(ies)) will occupy at least 51% of the Rentable Property. Yes No \n• Loan proceeds will not be used to remodel or convert any rental space in the property. Yes No \nO. Business Acquisition / Change of Ownership 13 CFR § 120. 202. Complete this section for all changes of ownership (including between \nexisting owners) N/A \nIf part of the Use of Proceeds will be used to fund or refinance a change in ownership: \n• The change will promote the sound development or preserve the existence of the Applicant business. \n(If \"No,\" the loan is not eligible.) Yes No \n• The change is between existing owners of the small business and will result in 100% ownership by the remaining \nowner(s) or is the purchase of 100% of a business resulting in a new owner and meets the requirements set forth in \nthe SOP 50 10. (If \"No,\" the loan is not eligible.) \nYes No \n• The loan proceeds will not pay off an SBA-guaranteed loan of the seller with the same Lender. \n(If \"No,\" application may not be processed under delegated authority.) Yes No \n• The portion of the loan proceeds allocated to the change of ownership will not exceed the value of the business as \nstated in the required business valuation. (If \"No,\" the loan is not eligible.) Yes No \n• If the loan is an International Trade loan or Export Express loan, the Lender has followed the requirements of SOP \n50 10 for changes of ownership financed by those types of loans. (If \"No,\" the loan is not eligible.) Yes No \nWill a business broker receive a commission from the sale of the business paid by the Applicant? \n(If Yes, complete below) Yes No \nName of Business Broker Firm Representative\nBroker Address Commission $ \nP. Type of Business Valuation - (use worksheet to determine what type of business valuation is required)\nTotal Purchase Price to be paid to seller per purchase contract: $ \nLess down payment paid to Seller: -$ \nSource & Type of Injection: Less buyer injection: -$ \nTotal Amount being Financed (including 7(a), 504, Seller or Other financing) (A): $ \nAppraised Value of Commercial Real Estate being financed in purchase of and/or with the business \n(B): -$ \nAppraised Value of equipment being financed in the purchase of the business (C): -$ \nValue of intangible assets to be Financed (A) – (B) – (C) = (D): $ \nIf the value of (D) above is $250,000 or less AND there is not a close relationship between Buyer & Seller, you have \nobtained an internally prepared business valuation that supports the value being paid for the business? \nOR Included\n\nPrepare an occupancy acquisition and valuation conditions loan eligibility conditional decision mapping brief using only the supplied SBA Form 1920 excerpt. For each condition in the Occupancy and Leasing Requirements section, classify it as a required eligibility condition or an alternative path based on the Yes/No structure, and state whether a No answer makes the loan not eligible. Where the form marks an item N/A or leaves it unchecked, treat the response as unresolved rather than as an eligibility failure. Apply the $250,000 intangible asset threshold to determine whether the internal business valuation pathway is available, and incorporate the 3-year and 10-year occupancy deadlines as time conditions affecting eligibility under the new construction or short-term construction loan path. Use the exact terms eligible, not eligible, Yes, No, and N/A when stating outcomes. Preserve the cited CFR references and the exact percentage and timing figures from the occupancy, leasing, and business acquisition standards without changing their values. Do not add external regulatory requirements or assumptions.",
    "target_constraint_count": 8,
    "sample_no": 64,
    "constraints": [
      {
        "no": 1,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each occupancy acquisition condition as either a required eligibility condition or an alternative path based on the Yes/No structure in the form."
      },
      {
        "no": 2,
        "tag": "EG4",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Indicate where a condition cannot be answered Yes or No because the form marks it N/A or leaves it unchecked, and treat such missing responses as unresolved rather than as eligibility failures."
      },
      {
        "no": 3,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Apply the $250,000 intangible asset threshold to determine whether the internal business valuation pathway is available."
      },
      {
        "no": 4,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Incorporate the 3-year and 10-year occupancy deadlines as time conditions that affect eligibility under the new construction or short-term construction loan path."
      },
      {
        "no": 5,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the exact terminology 'eligible', 'not eligible', 'Yes', 'No', and 'N/A' when stating condition outcomes."
      },
      {
        "no": 6,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Build the conditional decision mapping only from the supplied SBA Form 1920 excerpt and do not add external regulatory requirements or assumptions."
      },
      {
        "no": 7,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag any condition that would make the loan not eligible when the required answer is not Yes, including the occupancy and leasing statements that explicitly state this consequence."
      },
      {
        "no": 8,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the cited CFR references and the exact percentage and timing figures from the occupancy, leasing, and business acquisition standards without paraphrasing them into different values."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_019",
    "workflow": "Decision and Structuring",
    "task": "Credit approval supporting evidence specification",
    "work_product": "ESOP general eligibility and guarantees credit approval supporting evidence specification brief",
    "full_prompt": "The supplied material concerns ESOP general eligibility and guarantees.\n\nSBA Form 1920 (Revised 09/20) P a g e | 3 \nBusiness Acquisition (Change of Ownership) \n( Asset or Stock ) $ $ $ $ \nPay off SBA Loan\n( SID / Other Lender / Both) $ $ $ $ \nPay Notes Payable\n( SID / Other Lender / Both) $ $ $ $ \nPay Accounts Payable $ $ $ $ \nSBA Guarantee Fee $ $ $ $\nOther (explain): $ $ $ $ \nTotal (sum of last column should match sum of first \n3 across): $ $ $ $ \nIs any portion of the Applicant’s equity injection funded by a Rollover as Business Start-Up “ROBS”? \nIf “Yes” the Applicant and the 401(k) plan must be in compliance with all applicable IRS, Treasury, and Department of Labor requirements. \nYes No \nF. Employee Stock Ownership Plan (“ESOP”) - N/A Complete if the Small Business Applicant is a Qualified Employee Trust or equivalent \ntrust. (13 CFR §§ 120.351- 354 ) All questions below must be answered “Yes” to be eligible.)\n• The Qualified Employee Trust (or equivalent trust) meets the requirements and conditions for an ESOP prescribed \nin all applicable IRS, Treasury and Department of Labor regulations AND the small business will provide the \nfunds needed by the trust to repay the loan and will provide adequate collateral.\nYes No \n• Loan will help finance the growth of the Qualified Employee Trust's employer's small business or will purchase \nownership or voting control of the employer. Yes No \n• Loan proceeds will be used either (a) by the Qualified Employee Trust to purchase: 1) qualified employer \nsecurities; or 2) a controlling interest (51% or more) in the employer (ownership and control will vest in the trust \nby the time the loan is repaid), or (b) by the employer small business concern for the sole purpose of making a loan \nto the Qualified Employee Trust that results in the Qualified Employees Trust owning a controlling interest (51% \nor more) of the small business concern.\nYes No \nG. General Eligibility (If either of the statements below are answered “No,” the request is not eligible for an SBA guaranty.)\n• Small Business Applicant is (1) an operating business (except for loans to Eligible Passive Companies under 13 \nCFR § 120.111), (2) organized for profit, (3) located in the United States and its territories or possessions, (4) \nsmall (as defined by 13 CFR Part 121), and (5) able to demonstrate a need for the desired credit.\nYes No \n• The Small Business Applicant's products and/or services are available to the public. \nAND\n• Lender has reviewed the small business applicant and has determined it is an eligible business (including, but not \nlimited to whether the business is an ineligible type of business under 13 CFR § 120.110).\nYes No \nH. Credit Not Reasonably Available Elsewhere (If the statements below are answered \"No,\" the request is not eligible for an SBA guaranty)\n• Lender has assessed the Small Business Applicant's access to credit outside of this SBA-guaranteed loan, and \ndetermined that such credit is not available elsewhere on reasonable commercial terms from non-Federal non-\nState, and non-local government sources AND\nYes No \n• Lender's Credit Memo includes the credit elsewhere analysis and specifically identifies the factors in the present \nfinancing that meet credit elsewhere, including an analysis of the personal liquidity of the principal(s), and the loan \nfile contains supporting documentation for the Lender's determination.\nYes No \nI. Required Guarantors\nThe Lender has verified that all owners with an interest of 20% or more in the Small Business Applicant will guarantee the \nloan, including each 20% or more owner of the EPC and each 20% or more owner of the OC in an EPC/OC structure. The \n20% threshold includes a spouse when the combined ownership of both spouses is 20% or more. Only ESOPs and/or eligi-\nble 401(k) Plans are excluded from this requirement.\nYes No\n\nPrepare a credit approval supporting evidence specification brief for ESOP general eligibility and guarantees using only the supplied SBA Form 1920 language. Present the brief as a structured table or matrix with columns for requirement area, required evidence, and applicable condition or threshold. Identify the applicant profile factors and related conditions that the evidence specification must address, including ROBS-funded equity injection, ESOP trust status, employer relationship, controlling-interest ownership, and guarantor ownership interests. Specify the 20% ownership threshold and the 51% controlling-interest threshold as quantitative conditions that must be evidenced in the credit approval file. Ground the entire supporting evidence specification only in the supplied SBA Form 1920 language and do not introduce external regulatory or lender requirements beyond what the form states. Identify the approval-related attestations and lender review responsibilities that the evidence specification must support, including lender determinations of eligibility, credit elsewhere analysis, and guarantor verification. Classify each required evidence item according to the form section or eligibility category to which it belongs, such as ROBS, ESOP, general eligibility, credit elsewhere, or required guarantors.",
    "target_constraint_count": 6,
    "sample_no": 65,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured table or matrix with columns for requirement area, required evidence, and applicable condition or threshold."
      },
      {
        "no": 2,
        "tag": "RC6",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Identify the applicant profile factors and related conditions that the evidence specification must address, including ROBS-funded equity injection, ESOP trust status, employer relationship, controlling-interest ownership, and guarantor ownership interests."
      },
      {
        "no": 3,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Specify the 20% ownership threshold and the 51% controlling-interest threshold as quantitative conditions that must be evidenced in the credit approval file."
      },
      {
        "no": 4,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground the entire supporting evidence specification only in the supplied SBA Form 1920 language and do not introduce external regulatory or lender requirements beyond what the form states."
      },
      {
        "no": 5,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the approval-related attestations and lender review responsibilities that the evidence specification must support, including lender determinations of eligibility, credit elsewhere analysis, and guarantor verification."
      },
      {
        "no": 6,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each required evidence item according to the form section or eligibility category to which it belongs, such as ROBS, ESOP, general eligibility, credit elsewhere, or required guarantors."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t3_020",
    "workflow": "Decision and Structuring",
    "task": "Credit approval supporting evidence specification",
    "work_product": "character citizenship debt and size eligibility credit approval supporting evidence specification brief",
    "full_prompt": "Prepare a credit approval supporting evidence specification brief for SBA loan eligibility covering the four required topics: Character Determination, Citizenship, Prior Loss to Government/Delinquent Federal Debt, and Size Analysis. Present the brief as a structured specification, such as a table or checklist, with separate sections for each topic. Use the exact labels and terminology from SBA Form 1920, and cite the specific form provisions for each requirement. For each eligibility criterion, specify the required supporting evidence, the conditional trigger and resulting action, and the decision outcome of eligible or not eligible. Preserve the exact terms, conditions, citations, thresholds, and deadlines from the form. Include the quantitative thresholds and time windows, such as the six-month court disposition period and the no-crimes-against-a-minor condition. Identify the required approval or escalation path for character determination cases, including submission to SBA at OCA912@SBA.gov and receipt of an SBA clearance letter when applicable. List the records and documentation that must be retained or submitted, including the Character Determination Package and court documentation. Connect each eligibility criterion to the governing rule and the resulting approval action so that facts, rules, and decisions are not presented as disconnected fragments.\n\nThe supplied material concerns character citizenship debt and size eligibility.\n\nSBA Form 1920 (Revised 09/20) P a g e | 4 \nJ. Character Determination (For those individuals who are required to execute Section II of SBA Form 1919) For any individual answering \naffirmatively to the question of conviction(s) Lender must retain in its loan file the original Character Determination Package, including all \nrequired supporting information and court documentation.\n• Lender has verified that no individual completing SBA Form 1919 is subject to an indictment, criminal infor-\nmation, arraignment, or other means by which formal criminal charges are brought. \n(If the answer to the statement is No, the loan is not eligible.)\nYes No \n• Lender has verified that no individual is currently on parole or probation. \n(If currently on parole or probation, deferred prosecution, conditional discharge, order of protection, or who is on \na sex offender registry, the loan is not eligible).\nYes No \n• Lender has confirmed that all disclosed crimes were misdemeanors, fully dispositioned by the court more than 6 \nmonths ago and there were no convictions for crimes against a minor. \n(If no, submission to SBA of the Character Determination Package is not required.)\nYes No \n• Lender has confirmed that disclosed crime(s) included felony(ies) convictions or crimes against a minor; or was a \ncase that was dispositioned by the court within the last 6 months. Lender must have submitted all required docu-\nments electronically to SBA at OCA912@SBA.gov and received an SBA clearance letter. \n(If the answer is \"No,\" the loan is not eligible.)\nYes No \nK. Citizenship - The business must be at least 51% owned and controlled by U.S. citizens and/or those who have LPR status from USCIS to be \neligible for SBA Guaranty\n• U. S. Citizen Yes No \nOR\n• Lawful Permanent Resident (LPR) status verified with the USCIS (applies to any owner with 20% or more owner-\nship interest) Yes No \nL. Prior Loss to Government/Delinquent Federal Debt (If \"Yes,\" loan is not eligible, unless waived by SBA for good cause.) 13 CFR § \n120.110(q) and 31 CFR § 285.13(g)\n• Applicant previously defaulted on a Federal loan or federally assisted financing that resulted in the Federal \ngovernment, or any of its departments or agencies, sustaining a loss (a compromise agreement under which the \nFederal agency/department accepted less than the full amount owed is also considered a loss).\nYes No \n• Another business owned, operated, and/or controlled by the Applicant or any Associate of the Applicant \npreviously defaulted on a Federal loan (or guaranteed a loan which was defaulted) and caused the Federal \ngovernment, or any of its agencies or departments to sustain a loss in any of its programs (a compromise agree-\nment under which the Federal agency/department accepted less than the full amount owed is also considered a \nloss). \nYes No \n• The Applicant or any of the guarantors is currently delinquent on a nontax debt to the Federal Government \n(a Federal debt that is the subject of, or has been discharged in, a bankruptcy proceeding, or has been released or \ncompromised by the Federal agency/department is not considered delinquent).\nYes No \nM. Size Analysis\nIf the Applicant is an existing business that is applying for an SBA loan to acquire another business, the two businesses are combined to determine \nwhether or not the Small Business Applicant is small. If an application is for an EPC/OC, refer to the size determinations under the EPC rule in the \ncurrent SOP 50 10. If the Small Business Applicant has Affiliates, please provide a list, including Affiliate name and tax ID #, and discuss possible \nbases of affiliation. If affiliation exists, complete a Size Analysis for each Affiliate.\nUse this size standard \nPrimary Industry \nNAICS Code \nAverage annual receipts over the last three completed fiscal years per Federal Tax Returns (exclude \naffiliates) 13 CFR § 121.104 $ \nSBA Size Standard based on NAICS (The size standards are found in 13 CFR § 121.201)\nNumber of Employees \nOR Use the Alternative size standard \nTangible Net Worth is (not in excess of $15 million) and $ \nAverage net income after Federal Income Taxes (excluding any carry over losses) for preceding 2 \ncompleted fiscal years is not in excess of $5.0 million. (The alternative size standard is found at §3(a) \nof the Small Business Act.)\n$",
    "target_constraint_count": 14,
    "sample_no": 66,
    "constraints": [
      {
        "no": 1,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "The brief must cover the four required eligibility topics: character determination, citizenship, prior loss to government or delinquent federal debt, and size analysis."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact terms, conditions, citations, thresholds, and deadlines from SBA Form 1920 without paraphrasing them into different standards."
      },
      {
        "no": 3,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "For each eligibility criterion, specify the conditional trigger and the resulting action when the condition is present or absent."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a credit approval supporting evidence specification brief that is usable as a supporting evidence specification for credit approval."
      },
      {
        "no": 5,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the required approval or escalation path for character determination cases, including submission to SBA and receipt of an SBA clearance letter when applicable."
      },
      {
        "no": 6,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each eligibility criterion to the governing rule or task standard and the resulting approval action without presenting facts, rules, and decisions as disconnected fragments."
      },
      {
        "no": 7,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Specify the quantitative thresholds for character determination, including the six-month disposition period and the no-crimes-against-a-minor condition."
      },
      {
        "no": 8,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "List the records and documentation that must be retained or submitted, including the Character Determination Package and court documentation."
      },
      {
        "no": 9,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured specification, such as a table or checklist, with separate sections for each eligibility topic."
      },
      {
        "no": 10,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific SBA Form 1920 provisions for each supporting evidence requirement so that each requirement is traceable to the form."
      },
      {
        "no": 11,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the exact labels and terminology from SBA Form 1920, such as Character Determination, Citizenship, Prior Loss to Government/Delinquent Federal Debt, and Size Analysis."
      },
      {
        "no": 12,
        "tag": "RC4",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Include the required follow-up actions, such as submission to SBA at OCA912@SBA.gov and obtaining an SBA clearance letter, when applicable."
      },
      {
        "no": 13,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Specify the relevant time windows, including the six-month court disposition period and any required submission deadlines."
      },
      {
        "no": 14,
        "tag": "DB1",
        "family": "DB",
        "check_type": "计划约束",
        "text": "For each eligibility criterion, state the required decision or evaluation outcome, such as eligible or not eligible, based on the form's conditions."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_001",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "marketing alert authority and review scope compliance requirement mapping brief",
    "full_prompt": "The supplied material concerns marketing alert authority and review scope.\n\nApril 17, 2024\n\nInitial Observations Regarding Advisers Act Marketing Rule Compliance*\n\nI. Introduction\n\nThe Division of Examinations is issuing this Risk Alert to provide investment advisers, investors, and other market participants with information regarding investment advisers’ compliance with amended Rule 206(4)-1 (the “Marketing Rule”) under the Investment Advisers Act of 1940 (“Advisers Act”).1 While the Division continues to focus on advisers’ compliance with the Marketing Rule,2 the staff is sharing these preliminary observations to encourage accurate completion of the Marketing Rule items contained in Form ADV and to promote compliance with Advisers Act Rule 206(4)-7 (the “Compliance Rule”), Advisers Act Rule 204-2 (the “Books and Records Rule”), and the Marketing Rule’s “General Prohibitions.”3\n\nII. Observations Regarding Compliance Rule, Books and Records Rule and Form ADV\n\nThe staff reviewed whether investment advisers had adopted and implemented written policies and procedures reasonably designed to prevent violations by the advisers and their supervised persons of the Advisers Act and the rules thereunder, including the Marketing Rule.4 * This Risk Alert represents the views of the staff of the Division of Examinations (the “Division”). This Risk Alert is not a rule, regulation, or statement of the Securities and Exchange Commission (the “SEC” or the “Commission”). The Commission has neither approved nor disapproved the content of this Risk Alert. This Risk Alert, like all staff statements, has no legal force or effect; it does not alter or amend applicable law, and it creates no new or additional obligations for any person.\n\nPrepare a marketing alert authority and review scope compliance requirement mapping brief using only the supplied SEC Division of Examinations Risk Alert dated April 17, 2024, regarding investment advisers’ compliance with amended Rule 206(4)-1. Do not introduce any outside rules, interpretations, or assumptions. Where the Risk Alert identifies the governing standard, cite that governing standard text when mapping each compliance requirement. Produce the brief as a table or matrix that links each compliance requirement identified in the Risk Alert to its source text and to the applicable review scope element. Organize the brief into separate sections covering alert authority, review scope, and mapped compliance requirements. The brief should reflect the Risk Alert's observations regarding the Marketing Rule, the Compliance Rule, the Books and Records Rule, and Form ADV, while preserving the alert's stated status as staff guidance with no legal force or effect.",
    "target_constraint_count": 7,
    "sample_no": 67,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the mapping brief only on the supplied SEC Risk Alert and do not introduce outside rules, interpretations, or assumptions."
      },
      {
        "no": 2,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing standard text from the Risk Alert when mapping Marketing Rule compliance requirements."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named marketing alert authority and review scope compliance requirement mapping brief."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a table or matrix that links each compliance requirement to its source text and review scope element."
      },
      {
        "no": 5,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into distinct sections for alert authority, review scope, and mapped compliance requirements."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_002",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "advertising policy tailoring and recordkeeping compliance requirement mapping brief",
    "full_prompt": "Prepare an advertising policy tailoring and recordkeeping compliance requirement mapping brief using only the supplied SEC risk alert text. Organize the brief into sections for policy tailoring requirements and recordkeeping requirements, followed by a deficiency or gap section. Present the mapping as a table or matrix with separate columns for requirement, source evidence, and compliance area. Cover the advertising areas named in the risk alert: general prohibitions, testimonials, endorsements, third-party ratings, and preservation and maintenance of advertisements and related documents such as questionnaires or surveys used in preparing third-party ratings. For each mapped requirement, cite the specific governing standard or source passage from the risk alert and state the source status, making clear that the Marketing Rule Adopting Release and Commission statements are guidance rather than binding rule text. Preserve the exact wording of key source terms and references, including the quoted compliance standard and the Marketing Rule Adopting Release and Commission statements. Flag the observed deficiencies from the risk alert as gaps that advertising policies and procedures should address, and connect each mapped requirement to the governing standard or deficiency evidence that supports it.\n\nThe supplied material concerns advertising policy tailoring and recordkeeping.\n\n[Continues under: A. Compliance Rule]\n\n• Were not tailored to address advisers’ specific advertisements (e.g., policies and procedures to address the General Prohibitions, and advertising requirements for testimonials, endorsements, and third-party ratings utilized by advisers in advertisements).\n\n• Did not adequately address the preservation and maintenance of advertisements and related documents, such as copies of any questionnaires or surveys used in the preparation of a third-party rating (in the event the adviser has received such documents) included or appearing in any advertisement.\n\nstated that “… for these compliance policies and procedures to be effective, they should include objective and testable means reasonably designed to prevent violations of the final rule in the advertisements the adviser disseminates. Advisers can establish such… objective and testable compliance policies and procedures through a variety of tools.”).\n\n5 See id (Although the Division observed that many advisers required preapproval of advertisements before dissemination, the Marketing Rule Adopting Release states that advisers may test through a variety of tools, including, for example, “reviewing a sample of advertisements based on risk or pre-approving templates.”).\n\n6 See SEC, Compliance Programs of Investment Companies and Investment Advisers, Rel. No. IA-2204 (Dec. 24, 2003) (The Commission stated that “policies and procedures should be designed to prevent violations from occurring, detect violations that have occurred, and correct promptly any violations that have occurred.” (Internal citations omitted.) As part of this process, “[w]here appropriate, advisers’ policies and procedures should employ, among other methods of detection, compliance tests that analyze information over time in order to identify unusual patterns.”).",
    "target_constraint_count": 15,
    "sample_no": 68,
    "constraints": [
      {
        "no": 1,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each mapped advertising compliance requirement to the governing standard or deficiency evidence from the risk alert that supports it."
      },
      {
        "no": 2,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied risk alert text as the source for all mapped requirements and observations."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested advertising policy tailoring and recordkeeping compliance requirement mapping brief."
      },
      {
        "no": 4,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific governing standard and source-status passages from the risk alert for each mapped requirement."
      },
      {
        "no": 5,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State the source status of the risk alert passages, including that the adopting release and Commission statements are guidance rather than binding rule text."
      },
      {
        "no": 6,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a structured table or matrix with separate columns for requirement, source evidence, and compliance area."
      },
      {
        "no": 7,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag the observed deficiencies from the risk alert as gaps that advertising policies and procedures should address."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into sections for policy tailoring requirements and recordkeeping requirements, with a final deficiency or gap section."
      },
      {
        "no": 9,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the specific advertising areas named in the risk alert, including general prohibitions, testimonials, endorsements, third-party ratings, and preservation of related documents."
      },
      {
        "no": 10,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact wording of key source terms and references, including the quoted compliance standard and the Marketing Rule Adopting Release and Commission statements."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_004",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "marketing general prohibitions compliance requirement mapping brief",
    "full_prompt": "Prepare a marketing general prohibitions compliance requirement mapping brief using only the supplied SEC staff risk alert excerpt. Present the brief as a structured table with columns for requirement, source, observed deficiency, and compliance implication. State clearly that the source is staff guidance and does not create new legal obligations. In the table, flag the observed untrue statements of material fact and unsubstantiated statements of material fact as deficiencies or gaps against the general prohibitions. Cover the general prohibition against referencing specific investment advice provided by the adviser in a manner that is not fair and balanced. For each observed deficiency, connect it to the specific Advisers Act Rule 206(4)-1 provision cited in the excerpt and the resulting compliance requirement. Identify the specific issue type of untrue statements of material fact and unsubstantiated statements of material fact as observed deficiencies.\n\nThe supplied material concerns marketing general prohibitions.\n\n[Continues under: III. Observations Regarding Compliance with the Marketing Rule’s General Prohibitions]\n\n• Referencing specific investment advice provided by the adviser in a manner that is not fair and balanced.\n\n• Including or excluding performance results, or presenting performance time periods, in a manner that is not fair and balanced.\n\n• Providing information that is otherwise materially misleading.\n\nA. Observations Related to the Marketing Rule’s General Prohibitions The staff observed the following deficiencies related to the Marketing Rule’s General\n\nProhibitions:11\n\nUntrue statements of material fact12 and unsubstantiated statements of material fact.13 The staff observed advertisements that included statements of material fact that appeared to be untrue. In 10 See Advisers Act Rule 206(4)-1(a).\n\n11 See Advisers Act Rule 206(4)-1(a). While the staff references the General Prohibitions, these findings may be violations of multiple prohibitions in the Marketing Rule and other provisions of the Advisers Act.\n\n12 See Advisers Act Rule 206(4)-1(a)(1).",
    "target_constraint_count": 6,
    "sample_no": 69,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping brief as a structured table with columns for requirement, source, observed deficiency, and compliance implication."
      },
      {
        "no": 2,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State that the source is staff guidance and does not create new legal obligations."
      },
      {
        "no": 3,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag the observed untrue and unsubstantiated statements of material fact as deficiencies or gaps against the general prohibitions."
      },
      {
        "no": 4,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the general prohibition against referencing specific investment advice in a manner that is not fair and balanced."
      },
      {
        "no": 5,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each observed deficiency to the specific Advisers Act Rule 206(4)-1 provision cited and the resulting compliance requirement."
      },
      {
        "no": 6,
        "tag": "RC3",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Identify the specific issue type of untrue statements of material fact and unsubstantiated statements of material fact as observed deficiencies."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_005",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "inaccurate claims and omitted material facts compliance requirement mapping brief",
    "full_prompt": "The supplied material concerns inaccurate claims and omitted material facts.\n\n[Continues under: Prohibitions:11]\n\n• Advertisements describing material facts about advisory services or products offered that were inaccurate, including: (1) referencing certain investment mandates of the advisers in advertisements when there were no such mandates used by the firms (e.g., ESG mandates);14 (2) claiming that investment processes were validated by professional institutions when they were not; (3) stating that the adviser considered certain risk tolerances when recommending investment strategies when all clients were placed into the same strategy without consideration of risk tolerances; (4) referencing a list of approved securities that did not exist; (5) referencing formalized securities screening processes that did not exist; and (6) misrepresenting the advisers’ client base, such as describing the adviser as a “private fund adviser” when the firm did not advise any private funds.\n\n• Advertisements publicizing the receipt of certain awards or accolades that were not received.\n\nOmission of material facts or misleading inference. The staff observed advertisements that appeared to omit material facts necessary to make the statements made, in light of the circumstances under which they were made, not misleading.15 The staff also observed advertisements that included information that could have reasonably caused untrue or misleading implications or inferences to be drawn concerning material facts relating to the advisers. 16 For example: this requirement is met. However, if an adviser is unable to substantiate the material claims of fact made in an advertisement when the Commission demands it, we will presume that the adviser did not have a reasonable basis for its belief.”).\n\nPrepare a compliance requirement mapping brief on inaccurate claims and omitted material facts in investment adviser advertisements, using only the supplied SEC staff risk-alert guidance as the basis. Organize the brief into distinct sections that separate the governing standard, observed deficiencies, and mapped compliance requirements. Present the mapping as a table with columns for the observed issue, governing standard, and corresponding compliance requirement. Cite the governing prohibition on advertisements describing material facts about advisory services or products inaccurately when mapping each related requirement. Preserve the exact examples of inaccurate claims and omissions from the source, including publicizing awards or accolades that were not received and unsupported material claims, without altering their meaning. Identify the compliance deficiency illustrated by the example where an adviser stated it considered client risk tolerances while placing all clients into the same strategy without such consideration. Classify advertisements containing information that could reasonably cause untrue or misleading implications about material facts as a misleading-inference category within the mapping. Separate the staff's observed omissions of material facts from the compliance requirements inferred from those observations. Do not introduce outside rules, regulations, or assumptions beyond the supplied guidance.",
    "target_constraint_count": 11,
    "sample_no": 70,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a brief that maps the supplied SEC staff guidance to compliance requirements concerning inaccurate claims and omitted material facts in adviser advertisements."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact examples of inaccurate claims and omissions from the source, including unreceived awards and unsupported material claims, without altering their meaning."
      },
      {
        "no": 3,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the compliance deficiency illustrated by the example where an adviser stated it considered client risk tolerances while placing all clients into the same strategy without such consideration."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into distinct sections that separate the governing standard, observed deficiencies, and mapped compliance requirements."
      },
      {
        "no": 5,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify advertisements containing information that could reasonably cause untrue or misleading implications about material facts as a misleading-inference category within the compliance mapping."
      },
      {
        "no": 6,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied SEC staff guidance as the basis for the compliance requirement mapping, without introducing outside rules or assumptions."
      },
      {
        "no": 7,
        "tag": "EG3",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Separate the staff's observed omissions of material facts from the compliance requirements inferred from those observations in the mapping."
      },
      {
        "no": 8,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing prohibition on inaccurate descriptions of material facts about advisory services or products when mapping each related compliance requirement."
      },
      {
        "no": 9,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the compliance requirement mapping as a table with columns for the observed issue, governing standard, and corresponding compliance requirement."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_006",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "misleading performance and endorsement claims compliance requirement mapping brief",
    "full_prompt": "Prepare a concise compliance requirement mapping brief on misleading performance and endorsement claims using only the supplied SEC staff guidance excerpt. Begin with a short source-status note clarifying that the material is staff guidance describing observed deficiencies, not a binding rule or formal legal conclusion. Then map the observed advertising deficiencies into the following explicit categories in this order: untrue or misleading performance claims, improper SEC registration implications, misleading third-party ratings, and misleading testimonials. For each category, connect the cited deficiency to the compliance concern it illustrates and then to the resulting requirement or prohibition, rather than presenting facts, rules, and conclusions separately. Also identify the investor-protection and regulatory risks raised by each deficiency, including risks from misleading performance information, implied SEC approval or endorsement, flawed award or rating methodologies, and testimonials presented without context. Keep the brief to no more than 350 words and do not import any external rules, cases, or assumptions beyond the supplied excerpt.\n\nThe supplied material concerns misleading performance and endorsement claims.\n\n[Continues under: Prohibitions:11]\n\n• Advertisements that contained untrue or misleading performance claims, including: (1) advertising cumulative profits that the advisers believed were not achievable or were impossible to achieve without unlimited money to invest, (2) presenting performance information that did not provide adequate disclosure regarding the share classes included in the performance returns, (3) using lower fees in calculations for net of fees performance returns than were offered to the intended audience, and (4) omitting material information regarding fees and expenses used in calculating returns.\n\n• Advertisements cited SEC registration beyond factual statements as to advisers’ registration status in a way to imply that SEC registration was representative of a particular level of skill or ability, or that the SEC had either approved or passed upon the advisers’ business practices. The staff also observed advisers including the SEC logo on their websites with the purpose of implying that the websites or the advisers had been approved or endorsed by the SEC.\n\n• Advertisements contained third-party ratings: (1) implying the advisers were the sole top recipients of certain awards when the awards went to multiple recipients or the advisers were not the top recipients; and (2) indicating that the advisers were highly rated by various organizations without disclosing that the methodologies for such ratings were based primarily or solely on factors that were not related to the quality of investment advice, such as assets under management, the number of clients, or that adviser personnel nominated fellow employees for such awards.17\n\n• Advertisements included testimonials that were misleading. For example, advisers included testimonials from clients of a third-party product on the advisers’ websites without any disclosures explaining the context of the testimonials, implying that the testimonials were about the advisers’ services rather than the third-party product.",
    "target_constraint_count": 6,
    "sample_no": 71,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground the requirement mapping exclusively in the supplied SEC staff guidance excerpt, without importing external rules, cases, or assumptions."
      },
      {
        "no": 2,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping brief in a specified order and with a defined maximum length so the deliverable is concise and auditable."
      },
      {
        "no": 3,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State the source status of the SEC material as staff guidance describing observed deficiencies, not a binding rule or formal legal conclusion."
      },
      {
        "no": 4,
        "tag": "RC8",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Identify the investor-protection and regulatory risks raised by the observed advertising deficiencies, including misleading performance, improper SEC registration implications, flawed third-party ratings, and misleading testimonials."
      },
      {
        "no": 5,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each observed advertising deficiency to the governing compliance concern it illustrates, then to the resulting requirement or prohibition, rather than listing facts, rules, and conclusions separately."
      },
      {
        "no": 6,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each cited advertising practice into the explicit deficiency categories supplied in the guidance: untrue or misleading performance claims, improper SEC registration implications, misleading third-party ratings, and misleading testimonials."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_008",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "performance periods and presentation balance compliance requirement mapping brief",
    "full_prompt": "Prepare a compliance requirement mapping brief on performance periods and presentation balance using only the supplied SEC Risk Alert. Organize the brief into clear sections, and present the mapping in a structured format such as a table or checklist. Map each relevant fair-and-balanced performance presentation requirement to the specific Risk Alert passages and the cited Advisers Act Rule 206(4)-1(a)(6) and 206(4)-1(a)(7) references, preserving those rule citations exactly. Flag the observed deficiencies involving inclusion or exclusion of performance results or time periods in non-fair-and-balanced ways as compliance gaps to address. Do not import any outside regulatory requirements or assumptions beyond the supplied text.\n\nThe supplied material concerns performance periods and presentation balance.\n\n[Continues under: Prohibitions:11]\n\nInclusion or exclusion of performance results or time periods in manners that were not fair and balanced.22 The staff observed advertisements that included or excluded certain performance results or presented performance time periods in manners that were not fair and balanced. For example:\n\n• Advertisements that did not disclose the time period or did not disclose whether the returns were calculated for the same time period as additional performance information included in the same advertisement.\n\n• Advertisements that included or excluded certain performance results in manners that were not fair and balanced, such as advertisements that included the performance of only realized investment information in the total net return figure and excluded unrealized investments.\n\nAdvertisements that were otherwise materially misleading.23 The staff observed advertisements that appeared to otherwise be materially misleading, such as presenting disclosures in an unreadable font on websites or in videos.\n\nIV. Conclusion\n\nIn sharing these staff observations, the Division encourages advisers to reflect upon their own practices, policies, and procedures and to implement any appropriate modifications to their training, supervisory, oversight, and compliance programs.\n\n22 See Advisers Act Rule 206(4)-1(a)(6).\n\n23 See Advisers Act Rule 206(4)-1(a)(7).\n\nThis Risk Alert is intended to highlight for firms risks and issues that Division staff has identified.\n\n[Continues under: IV. Conclusion]\n\nIn addition, this Risk Alert describes risks that firms may consider to (1) assess their supervisory, compliance, and/or other risk management systems related to these risks, and (2) make any changes, as may be appropriate, to address or strengthen such systems. Other risks besides those described in this Risk Alert may be appropriate to consider, and some issues discussed in this Risk Alert may not be relevant to a particular firm’s business. The adequacy of supervisory, compliance and other risk management systems can be determined only with reference to the profile of each specific firm and other facts and circumstances.",
    "target_constraint_count": 9,
    "sample_no": 72,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground the brief only in the supplied SEC Risk Alert text and avoid importing outside regulatory requirements or assumptions."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the cited Advisers Act Rule 206(4)-1(a)(6) and 206(4)-1(a)(7) references exactly when mapping the fair-and-balanced performance presentation requirements."
      },
      {
        "no": 3,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into clear sections that map the relevant compliance requirements, observed deficiencies, and supervisory expectations."
      },
      {
        "no": 4,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific Risk Alert passages and rule references that support each mapped requirement, especially the fair-and-balanced performance presentation observations."
      },
      {
        "no": 5,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag the observed deficiencies involving inclusion or exclusion of performance results or time periods in non-fair-and-balanced ways as compliance gaps to address."
      },
      {
        "no": 6,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested performance periods and presentation balance compliance requirement mapping brief."
      },
      {
        "no": 7,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping in a structured format, such as a table or checklist, with requirements aligned to the supporting Risk Alert observations."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_010",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "compliance plan review and failure consequences compliance requirement mapping brief",
    "full_prompt": "Prepare a compliance requirement mapping brief for the OCC safety and soundness compliance plan review process, using only the provided rule text. Present the brief as a structured table with columns for requirement, governing provision, consequence, and timing, written in a neutral, regulator-facing tone. For each mapped requirement, cite the specific OCC provision. Include the 30-day review period within which the OCC must provide written notice of plan approval or seek additional information. Identify the listed deficiency that arises when a national bank or Federal savings association fails to submit an acceptable plan within the time specified or fails in any material respect to implement a compliance plan. Distinguish the supervisory actions triggered by failure to submit a plan versus failure to implement a plan. Flag the specific compliance deficiency created by such failure, and state the OCC's required supervisory escalation to require correction of the deficiency by order and to take further actions under section 39(e)(2)(B).\n\nThe supplied material concerns compliance plan review and failure consequences.\n\n[Continues under: § 30.4 Filing of safety and soundness compliance plan.]\n\n(c) Review of safety and soundness compliance plans. Within 30 days after receiving a safety and soundness compliance plan under this part, the OCC shall provide written notice to the national bank or Federal savings association of whether the plan has been approved or seek additional information from the bank or savings association regarding the plan. The OCC may extend the time within which notice regarding approval of a plan will be provided.\n\n(d) Failure to submit or implement a compliance plan —(1) Supervisory actions. If a national bank or Federal savings association fails to submit an acceptable plan within the time specified by the OCC or fails in any material respect to implement a compliance plan, then the OCC shall, by order, require the bank or savings association to correct the deficiency and may take further actions provided in section 39(e)(2)(B). Pursuant to section 39(e)(3), the OCC may be required to take certain actions if the national bank or Federal savings association commenced operations or experienced a change in control within the previous 24-month period, or the bank or savings association experienced extraordinary growth during the previous 18-month period.",
    "target_constraint_count": 9,
    "sample_no": 73,
    "constraints": [
      {
        "no": 1,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag the specific compliance deficiency created when a bank fails to submit an acceptable plan or materially fails to implement a compliance plan."
      },
      {
        "no": 2,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping brief as a structured table with columns for requirement, governing provision, consequence, and timing."
      },
      {
        "no": 3,
        "tag": "DB3",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the OCC's required supervisory escalation when a compliance plan deficiency is not corrected."
      },
      {
        "no": 4,
        "tag": "FP5",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Write the brief in a neutral, regulator-facing tone suitable for an OCC compliance review audience."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific OCC provision for each mapped requirement in the brief."
      },
      {
        "no": 6,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Distinguish the supervisory actions triggered when a bank fails to submit a plan versus when it fails to implement a plan."
      },
      {
        "no": 7,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Include the 30-day OCC review period for compliance plan approval or information requests."
      },
      {
        "no": 8,
        "tag": "RC3",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Identify the listed failure-to-implement deficiency as a covered issue in the mapping."
      },
      {
        "no": 9,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground all mapped requirements and consequences solely in the provided OCC rule text without external additions."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_011",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "credit interest rate and asset growth standards compliance requirement mapping brief",
    "full_prompt": "The supplied material concerns credit interest rate and asset growth standards.\n\n[Continues under: Appendix A to Part 30—Interagency Guidelines Establishing Standards for Safety and Soundness]\n\n1. Are commensurate with the types of loans the institution will make and consider the terms and conditions under which they will be made;\n\n2. Consider the nature of the markets in which loans will be made;\n\n3. Provide for consideration, prior to credit commitment, of the borrower's overall financial condition and resources, the financial responsibility of any guarantor, the nature and value of any underlying collateral, and the borrower's character and willingness to repay as agreed;\n\n4. Establish a system of independent, ongoing credit review and appropriate communication to management and to the board of directors;\n\n5. Take adequate account of concentration of credit risk; and\n\n6. Are appropriate to the size of the institution and the nature and scope of its activities.\n\nE. Interest rate exposure. An institution should:\n\n1. Manage interest rate risk in a manner that is appropriate to the size of the institution and the complexity of its assets and liabilities; and\n\n2. Provide for periodic reporting to management and the board of directors regarding interest rate risk with adequate information for management and the board of directors to assess the level of risk.\n\nF. Asset growth. An institution's asset growth should be prudent and consider:\n\n1. The source, volatility and use of the funds that support asset growth;\n\n2. Any increase in credit risk or interest rate risk as a result of growth; and\n\n3. The effect of growth on the institution's capital.\n\nPrepare a compliance requirement mapping brief covering the credit interest rate and asset growth standards established in the supplied Appendix A to Part 30 excerpt. Use only the provided rule text as your source; do not introduce any outside regulatory references or assumptions. Organize the brief into two named sections: one for interest rate exposure and one for asset growth. Within each section, present the mapped requirements as a table with three columns: standard area, specific requirement, and corresponding rule language. For each mapped requirement, cite the exact governing standard language from the excerpt so that every entry can be traced to the source text. The brief should be complete for both standards covered by the excerpt and should not include requirements that are not present in the supplied material.",
    "target_constraint_count": 6,
    "sample_no": 74,
    "constraints": [
      {
        "no": 1,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into named sections corresponding to the two standards covered by the rule text: credit interest rate exposure and asset growth."
      },
      {
        "no": 2,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied Appendix A rule text as the source for all mapped requirements, without adding outside regulatory references or assumptions."
      },
      {
        "no": 3,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific governing standard language from the Appendix A excerpt for each mapped requirement."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapped requirements as a structured table with columns for the standard area, the specific requirement, and the corresponding rule language."
      },
      {
        "no": 5,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested compliance requirement mapping brief as the named deliverable."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_012",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "information security governance compliance requirement mapping brief",
    "full_prompt": "Prepare an information security governance compliance requirement mapping brief. Use only the supplied Appendix B to Part 30 rule text and do not introduce external requirements or assumptions. State that the mapped requirements come from the Interagency Guidelines Establishing Information Security Standards under Appendix B to Part 30. Organize the brief into sections covering program establishment, objectives, board involvement, and risk assessment. Present the mapping as a structured table or matrix linking each compliance requirement to its source provision in the rule text. For each mapped requirement, cite the governing standard as the source evidence. Preserve the exact terms and obligations from the cited standard, including the requirement that the information security program be comprehensive, written, and appropriate to the size and complexity of the institution and the nature and scope of its activities.\n\nThe supplied material concerns information security governance.\n\n[Continues under: Appendix B to Part 30—Interagency Guidelines Establishing Information Security Standards]\n\nA. Information Security Program. Each national bank or Federal savings association shall implement a comprehensive written information security program that includes administrative, technical, and physical safeguards appropriate to the size and complexity of the national bank or Federal savings association and the nature and scope of its activities. While all parts of the national bank or Federal savings association are not required to implement a uniform set of policies, all elements of the information security program must be coordinated.\n\nB. Objectives. A national bank's or Federal savings association's information security program shall be designed to:\n\n1. Ensure the security and confidentiality of customer information;\n\n2. Protect against any anticipated threats or hazards to the security or integrity of such information;\n\n3. Protect against unauthorized access to or use of such information that could result in substantial harm or inconvenience to any customer; and\n\n4. Ensure the proper disposal of customer information and consumer information.\n\nA. Involve the Board of Directors. The board of directors or an appropriate committee of the board of each national bank or Federal savings association shall:\n\n1. Approve the national bank's or Federal savings association's written information security program; and\n\n2. Oversee the development, implementation, and maintenance of the national bank's or Federal savings association's information security program, including assigning specific responsibility for its implementation and reviewing reports from management.\n\nB. Assess Risk. Each national bank or Federal savings association shall:\n\n1. Identify reasonably foreseeable internal and external threats that could result in unauthorized disclosure, misuse, alteration, or destruction of customer information or customer information systems.",
    "target_constraint_count": 11,
    "sample_no": 75,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a named information security governance compliance requirement mapping brief."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact terms and obligations from the cited governing standard, including the requirement that the information security program be comprehensive, written, and appropriate to size, complexity, and scope."
      },
      {
        "no": 3,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing standard as the source evidence for each mapped compliance requirement."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a structured table or matrix linking each requirement to its source provision."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied rule text and do not introduce external requirements or assumptions."
      },
      {
        "no": 6,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State that the mapped requirements come from interagency guidelines establishing information security standards under Appendix B to Part 30."
      },
      {
        "no": 7,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into sections covering program establishment, objectives, board involvement, and risk assessment."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_013",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "security testing and service providers compliance requirement mapping brief",
    "full_prompt": "The supplied material concerns security testing and service providers.\n\n[Continues under: Appendix B to Part 30—Interagency Guidelines Establishing Information Security Standards]\n\ng. Response programs that specify actions to be taken when the national bank or Federal savings association suspects or detects that unauthorized individuals have gained access to customer information systems, including appropriate reports to regulatory and law enforcement agencies; and\n\nh. Measures to protect against destruction, loss, or damage of customer information due to potential environmental hazards, such as fire and water damage or technological failures.\n\n2. Train staff to implement the national bank's or Federal savings association's information security program.\n\n3. Regularly test the key controls, systems and procedures of the information security program. The frequency and nature of such tests should be determined by the national bank's or Federal savings association's risk assessment. Tests should be conducted or reviewed by independent third parties or staff independent of those that develop or maintain the security programs.\n\n4. Develop, implement, and maintain, as part of its information security program, appropriate measures to properly dispose of customer information and consumer information in accordance with each of the requirements of this paragraph III.\n\nD. Oversee Service Provider Arrangements. Each national bank or Federal savings association shall:\n\n1. Exercise appropriate due diligence in selecting its service providers;\n\n2. Require its service providers by contract to implement appropriate measures designed to meet the objectives of these Guidelines; and\n\n3. Where indicated by the national bank's or Federal savings association's risk assessment, monitor its service providers to confirm that they have satisfied their obligations as required by section D.2. As part of this monitoring, a national bank or Federal savings association should review audits, summaries of test results, or other equivalent evaluations of its service providers.\n\nPrepare a compliance requirement mapping brief for security testing and service providers. Use only the provided rule text as the basis for the mapping and do not introduce outside requirements or assumptions. Begin the brief with a concise summary of the mapped compliance requirements and end with the required oversight actions for service providers. Write in a neutral, compliance-oriented tone suitable for a risk and compliance review audience. In the mapping, preserve the exact terminology and obligations from the source, including the distinction between national banks and Federal savings associations and the specific service provider duties. Connect each mapped requirement to the governing standard and the action it requires, showing the evidence-rule-action chain for security testing and service provider oversight. State the conditional monitoring trigger: when the bank's risk assessment indicates it, the bank must monitor service providers to confirm they have satisfied their contractual obligations. Identify the required reporting action for detected unauthorized access to customer information systems, namely making appropriate reports to regulatory and law enforcement agencies. Include the required oversight actions for service providers: exercising due diligence in selection, requiring contractual implementation of appropriate measures, and monitoring where indicated by the risk assessment.",
    "target_constraint_count": 8,
    "sample_no": 76,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided rule text as the basis for the compliance mapping; do not introduce outside requirements or assumptions."
      },
      {
        "no": 2,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the conditional monitoring trigger: when the bank's risk assessment indicates it, the bank must monitor service providers to confirm they have satisfied their contractual obligations."
      },
      {
        "no": 3,
        "tag": "DB3",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the required reporting action for detected unauthorized access to customer information systems, namely making appropriate reports to regulatory and law enforcement agencies."
      },
      {
        "no": 4,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each mapped requirement to the governing standard and the action it requires, showing the evidence-rule-action chain for security testing and service provider oversight."
      },
      {
        "no": 5,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve exact terminology and obligations from the source, including the distinction between national banks and Federal savings associations and the specific service provider duties."
      },
      {
        "no": 6,
        "tag": "FP6",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Open the brief with a concise summary of the mapped compliance requirements and close with the required oversight actions for service providers."
      },
      {
        "no": 7,
        "tag": "RC4",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Include the required oversight actions for service providers: exercising due diligence in selection, requiring contractual implementation of appropriate measures, and monitoring where indicated by the risk assessment."
      },
      {
        "no": 8,
        "tag": "FP5",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Write the brief in a neutral, compliance-oriented tone suitable for a risk and compliance review audience."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_014",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "customer incident notification compliance requirement mapping brief",
    "full_prompt": "Prepare a customer incident notification compliance requirement mapping brief using only the supplied guidance text. Organize the brief into clear sections, and present the mapping in a table or structured list that pairs each requirement with its source condition and timing. Begin by stating that the guidance continues under Appendix B to Part 30, the Interagency Guidelines Establishing Information Security Standards, and cite that governing standard when mapping the requirements. Preserve the exact terminology and definitions from the source, including the definition of sensitive customer information as a customer's name, address, or telephone number in conjunction with a social security number, driver's license number, account number, credit or debit card number, or a personal identification number or password that would permit access to the customer's account, and including any combination of components that would allow someone to log onto or access the customer's account, such as user name and password or password and account number. Classify the information elements that constitute sensitive customer information according to that definition. Cover the topics of the governing standard, the sensitive customer information definition, the investigation trigger, and the customer notification obligation. Map the requirement chain from evidence of unauthorized access to the governing standard to the resulting action: when a financial institution becomes aware of an incident of unauthorized access to sensitive customer information, it should conduct a reasonable investigation to promptly determine the likelihood that the information has been or will be misused; if the institution determines that misuse has occurred or is reasonably possible, it should notify the affected customer as soon as possible. Include the conditional trigger that customer notice may be delayed if an appropriate law enforcement agency determines that notification will interfere with a criminal investigation and provides a written request for the delay, and that the institution should notify its customers as soon as notification will no longer interfere with the investigation. Capture the timing requirement that affected customers should be notified as soon as possible after the institution determines misuse has occurred or is reasonably possible. Do not introduce external rules or assumptions.\n\nThe supplied material concerns customer incident notification.\n\n[Continues under: Appendix B to Part 30—Interagency Guidelines Establishing Information Security Standards]\n\nWhen a financial institution becomes aware of an incident of unauthorized access to sensitive customer information, the institution should conduct a reasonable investigation to promptly determine the likelihood that the information has been or will be misused. If the institution determines that misuse of its information about a customer has occurred or is reasonably possible, it should notify the affected customer as soon as possible. Customer notice may be delayed if an appropriate law enforcement agency determines that notification will interfere with a criminal investigation and provides the institution with a written request for the delay. However, the institution should notify its customers as soon as notification will no longer interfere with the investigation.\n\nUnder the Guidelines, an institution must protect against unauthorized access to or use of customer information that could result in substantial harm or inconvenience to any customer. Substantial harm or inconvenience is most likely to result from improper access to sensitive customer information because this type of information is most likely to be misused, as in the commission of identity theft. For purposes of this Guidance, sensitive customer information means a customer's name, address, or telephone number, in conjunction with the customer's social security number, driver's license number, account number, credit or debit card number, or a personal identification number or password that would permit access to the customer's account. Sensitive customer information also includes any combination of components of customer information that would allow someone to log onto or access the customer's account, such as user name and password or password and account number.",
    "target_constraint_count": 14,
    "sample_no": 77,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a brief titled as a customer incident notification compliance requirement mapping brief."
      },
      {
        "no": 2,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact terminology and definitions from the source, including the sensitive customer information definition and the referenced Interagency Guidelines title."
      },
      {
        "no": 3,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify the information elements that constitute sensitive customer information according to the source definition."
      },
      {
        "no": 4,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State the source status of the guidance, including that it continues under Appendix B to Part 30 and reflects the Interagency Guidelines Establishing Information Security Standards."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied guidance text to map the notification requirements without introducing external rules or assumptions."
      },
      {
        "no": 6,
        "tag": "DB3",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the customer notification obligation that arises when an institution becomes aware of an incident of unauthorized access to sensitive customer information."
      },
      {
        "no": 7,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Capture the timing requirement that affected customers should be notified as soon as possible after the institution determines misuse has occurred or is reasonably possible."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into a clear structure with sections that map the notification requirements."
      },
      {
        "no": 9,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing standard reference, Appendix B to Part 30, when mapping the notification requirements."
      },
      {
        "no": 10,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the compliance requirement mapping in a table or structured list format that pairs each requirement with its source condition and timing."
      },
      {
        "no": 11,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Include the conditional trigger that notification may be delayed when a law enforcement agency provides a written request that notification would interfere with a criminal investigation."
      },
      {
        "no": 12,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the topics of the governing standard, the sensitive customer information definition, the investigation trigger, and the customer notification obligation."
      },
      {
        "no": 13,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect the evidence of unauthorized access, the governing standard, and the resulting notification action in a single requirement chain."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_015",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "mortgage refinancing and abusive terms compliance requirement mapping brief",
    "full_prompt": "The supplied material concerns mortgage refinancing and abusive terms.\n\n[Continues under: Appendix C to Part 30—OCC Guidelines Establishing Standards for Residential Mortgage Lending Practices]\n\n2. Loan Flipping. Repeat refinancings under circumstances where the relative terms of the new and refinanced loan and the cost of the new loan do not provide a tangible economic benefit to the borrower.\n\n3. Refinancing of Special Mortgages. Refinancing of a special subsidized mortgage that contains terms favorable to the borrower with a loan that does not provide a tangible economic benefit to the borrower relative to the refinanced loan.\n\n4. Encouragement of Default. Encouraging a borrower to breach a contract and default on an existing loan prior to and in connection with the consummation of a loan that refinances all or part of the existing loan.\n\nB. Prudent Consideration of Certain Loan Terms, Conditions and Features. Certain loan terms, conditions and features, may, under particular circumstances, be susceptible to abusive, predatory, unfair or deceptive practices, yet may be appropriate and acceptable risk mitigation measures, consistent with safe and sound lending, and benefit customers under other circumstances. A national bank or Federal savings association should prudently consider the circumstances, including the characteristics of a targeted market and applicable consumer and safety and soundness safeguards, under which the national bank or Federal savings association will engage directly or indirectly in making residential mortgage loans with the following loan terms, conditions and features:\n\n1. Financing single premium credit life, disability or unemployment insurance.\n\n2. Negative amortization, involving a payment schedule in which regular periodic payments cause the principal balance to increase.\n\n3. Balloon payments in short-term transactions.\n\nPrepare a mortgage refinancing and abusive terms compliance requirement mapping brief using only the supplied OCC Appendix C to Part 30 guidelines. Identify the source as OCC guidelines under Appendix C to Part 30 establishing standards for residential mortgage lending practices. Map each governing standard in the source's sequence as a separate entry. For each entry, classify the practice as either a prohibited refinancing practice or a loan term, condition, or feature requiring prudent consideration. For repeat refinancings, state the conditional treatment: if the relative terms and cost of the new loan do not provide a tangible economic benefit to the borrower, then the practice is identified as loan flipping. Cover the risk characterization that certain loan terms and features may be susceptible to abusive, predatory, unfair, or deceptive practices under particular circumstances. Do not introduce requirements beyond those stated in the supplied text.",
    "target_constraint_count": 6,
    "sample_no": 78,
    "constraints": [
      {
        "no": 1,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the conditional treatment of repeat refinancings: if the relative terms and cost of the new loan do not provide a tangible economic benefit to the borrower, then the practice is identified as loan flipping."
      },
      {
        "no": 2,
        "tag": "RC8",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the risk characterization that certain loan terms and features may be susceptible to abusive, predatory, unfair, or deceptive practices under particular circumstances."
      },
      {
        "no": 3,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify the source as OCC guidelines under Appendix C to Part 30 establishing standards for residential mortgage lending practices."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a compliance requirement mapping brief for mortgage refinancing and abusive terms."
      },
      {
        "no": 5,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each listed practice into the categories of prohibited refinancing practices or loan terms, conditions, and features requiring prudent consideration."
      },
      {
        "no": 6,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a structured brief with a separate entry for each governing standard and a clear ordering by the source's sequence."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_016",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "mortgage corrective action and governance scope compliance requirement mapping brief",
    "full_prompt": "Prepare a mortgage corrective action and governance scope compliance requirement mapping brief using only the supplied OCC guideline text. Organize the brief into two named sections: one for corrective action scope and one for governance scope. Within each section, present the compliance requirement mapping as a table or matrix with columns for the requirement, the governing source, and the required corrective action or governance obligation. Map each stated requirement to the specific governing standard text in the OCC guidelines, preserving the exact regulatory terms and legal references, including the references to Appendix C to Part 30 and Appendix D to Part 30. State the source status of the OCC guidelines as minimum standards for residential mortgage lending practices and heightened standards for large insured institutions. Cover the named topics of monitoring compliance with applicable law and lending standards, periodic monitoring and evaluation of customer complaints, and appropriate corrective action steps. For the corrective action scope, state the conditional trigger: when failures to comply with applicable law or lending standards occur, corrective action steps become required. For each compliance requirement, connect the governing rule text to the resulting corrective action or governance obligation as a single evidence-rule-action chain. Flag any corrective action or governance obligation that would constitute a gap or deficiency if absent from a mortgage lending program.\n\nThe supplied material concerns mortgage corrective action and governance scope.\n\n[Continues under: Appendix C to Part 30—OCC Guidelines Establishing Standards for Residential Mortgage Lending Practices]\n\nF. Monitoring and Corrective Action. A national bank's or Federal savings association's consumer residential mortgage lending activities should include appropriate monitoring of compliance with applicable law and the bank's or savings association's lending standards and practices, periodic monitoring and evaluation of the nature, quantity and resolution of customer complaints, and appropriate evaluation of the effectiveness of the bank's or savings association's standards and practices in accomplishing the objectives set forth in these Guidelines. The bank's or savings association's activities also should include appropriate steps for taking corrective action in response to failures to comply with applicable law and the bank's or savings association's lending standards, and for making adjustments to the bank's or savings association's activities as may be appropriate to enhance their effectiveness or to reflect changes in business practices, market conditions, or the bank's or savings association's lines of business, residential mortgage loan programs, or customer base.\n\nAppendix D to Part 30—OCC Guidelines Establishing Heightened Standards for Certain Large Insured National Banks, Insured Federal Savings Associations, and Insured Federal Branches\n\n1. The OCC expects a covered bank, as that term is defined in paragraph I.E. to establish and implement a risk governance framework to manage and control the covered bank's risk-taking activities.\n\n2. This appendix establishes minimum standards for the design and implementation of a covered bank's risk governance framework and minimum standards for the covered bank's board of directors in providing oversight to the framework's design and implementation (Guidelines). These standards are in addition to any other applicable requirements in law or regulation.",
    "target_constraint_count": 14,
    "sample_no": 79,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each stated requirement to the specific governing standard text in the OCC guidelines."
      },
      {
        "no": 2,
        "tag": "DB5",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Flag any corrective action or governance obligation that would constitute a gap or deficiency if absent from a mortgage lending program."
      },
      {
        "no": 3,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into a named structure with distinct sections for corrective action scope and governance scope."
      },
      {
        "no": 4,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied OCC guideline text as the source for all requirement mapping."
      },
      {
        "no": 5,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact regulatory terms and legal references from the OCC guidelines when stating each requirement."
      },
      {
        "no": 6,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the conditional trigger for corrective action: when failures to comply with applicable law or lending standards occur, corrective action steps become required."
      },
      {
        "no": 7,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each compliance requirement to the governing rule text and the resulting corrective action or governance obligation as a single evidence-rule-action chain."
      },
      {
        "no": 8,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the named topics of monitoring compliance, evaluating customer complaints, and corrective action adjustments."
      },
      {
        "no": 9,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State the source status of the OCC guidelines as minimum standards for residential mortgage lending practices and heightened standards for large insured institutions."
      },
      {
        "no": 10,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the compliance requirement mapping as a table or matrix with requirement, source, and corrective action columns."
      },
      {
        "no": 11,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named work product: a mortgage corrective action and governance scope compliance requirement mapping brief."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_017",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "risk strategic planning compliance requirement mapping brief",
    "full_prompt": "The supplied material concerns risk strategic planning.\n\n[Continues under: Appendix D to Part 30—OCC Guidelines Establishing Heightened Standards for Certain Large Insured National Banks, Insured Federal Savings Associations, and Insured Federal Branches]\n\nD. Strategic Plan. The Chief Executive Officer should be responsible for the development of a written strategic plan with input from front line units, independent risk management, and internal audit. The board of directors should evaluate and approve the strategic plan and monitor management's efforts to implement the strategic plan at least annually. The strategic plan should cover, at a minimum, a three-year period and:\n\n1. Contain a comprehensive assessment of risks that currently have an impact on the covered bank or that could have an impact on the covered bank during the period covered by the strategic plan;\n\n2. Articulate an overall mission statement and strategic objectives for the covered bank, and include an explanation of how the covered bank will achieve those objectives;\n\n3. Include an explanation of how the covered bank will update, as necessary, the risk governance framework to account for changes in the covered bank's risk profile projected under the strategic plan; and\n\n4. Be reviewed, updated, and approved, as necessary, due to changes in the covered bank's risk profile or operating environment that were not contemplated when the strategic plan was developed.\n\nPrepare a risk strategic planning compliance requirement mapping brief using only the supplied OCC guideline text from Appendix D to Part 30, Strategic Plan. Organize the brief into sections that separately address the governing standard, responsible parties, required strategic plan contents, and review and update triggers. Present the mapped requirements in a table or matrix that links each requirement to its source provision. For each requirement, state the exact operative terms, roles, and timing language from the guideline without altering their meaning. Include the requirement that the strategic plan cover at least a three-year period and that the board evaluate and approve the plan and monitor implementation at least annually. Identify the source as OCC guidelines establishing heightened standards for certain large insured national banks, insured federal savings associations, and insured federal branches. Do not introduce any outside requirements or assumptions.",
    "target_constraint_count": 11,
    "sample_no": 80,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a risk strategic planning compliance requirement mapping brief as the named deliverable."
      },
      {
        "no": 2,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the strategic plan's required three-year minimum coverage period and the board's annual evaluation and monitoring cadence."
      },
      {
        "no": 3,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each compliance requirement to the specific OCC guideline language from the strategic plan section."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into clear sections that separate the governing standard, responsible parties, required plan contents, and review and update triggers."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapped requirements in a table or matrix format that links each requirement to its source provision."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact operative terms, roles, and timing language from the OCC guideline without altering their meaning."
      },
      {
        "no": 7,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the mapping only on the supplied OCC guideline text and do not introduce outside requirements or assumptions."
      },
      {
        "no": 8,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Identify the source as OCC guidelines establishing heightened standards for certain large insured national banks, insured federal savings associations, and insured federal branches."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_018",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "risk appetite and concentration limits compliance requirement mapping brief",
    "full_prompt": "Prepare a risk appetite and concentration limits compliance requirement mapping brief based solely on the OCC heightened standards guidelines excerpt provided. The brief must map the requirements for a risk appetite statement and for concentration and front line unit risk limits. Use the exact term \"risk appetite statement\" when describing the comprehensive written statement required by the guidelines. For the risk appetite statement, map the requirement that quantitative limits incorporate sound stress testing processes, as appropriate, and address earnings, capital, and liquidity. For concentration and front line unit risk limits, map the requirement that they limit excessive risk taking and, when aggregated, not exceed the limits in the risk appetite statement. Include the conditional requirement that, where aggregate risk appetite limits cannot be disaggregated and applied at the front line unit level, limits should reasonably reflect the aggregate level of risk the board of directors and executive management are willing to accept. Also include the requirement that limits be set at levels that take into account appropriate capital and liquidity buffers and prompt management and the board of directors to reduce risk before the covered bank's risk profile jeopardizes the adequacy of its earnings, liquidity, and capital.\n\nThe supplied material concerns risk appetite and concentration limits.\n\n[Continues under: Appendix D to Part 30—OCC Guidelines Establishing Heightened Standards for Certain Large Insured National Banks, Insured Federal Savings Associations, and Insured Federal Branches]\n\nE. Risk Appetite Statement. A covered bank should have a comprehensive written statement that articulates the covered bank's risk appetite and serves as the basis for the risk governance framework. The risk appetite statement should include both qualitative components and quantitative limits. The qualitative components should describe a safe and sound risk culture and how the covered bank will assess and accept risks, including those that are difficult to quantify. Quantitative limits should incorporate sound stress testing processes, as appropriate, and address the covered bank's earnings, capital, and liquidity. The covered bank should set limits at levels that take into account appropriate capital and liquidity buffers and prompt management and the board of directors to reduce risk before the covered bank's risk profile jeopardizes the adequacy of its earnings, liquidity, and capital. 4\n\n4 Where possible, covered banks should establish aggregate risk appetite limits that can be disaggregated and applied at the front line unit level. However, where this is not possible, covered banks should establish limits that reasonably reflect the aggregate level of risk that the board of directors and executive management are willing to accept.\n\nF. Concentration and Front Line Unit Risk Limits. The risk governance framework should include concentration risk limits and, as applicable, front line unit risk limits, for the relevant risks. Concentration and front line unit risk limits should limit excessive risk taking and, when aggregated across such units, provide that these risks do not exceed the limits established in the covered bank's risk appetite statement.",
    "target_constraint_count": 5,
    "sample_no": 81,
    "constraints": [
      {
        "no": 1,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the required topics of risk appetite statement and concentration/front line unit risk limits."
      },
      {
        "no": 2,
        "tag": "FP4",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use the term \"risk appetite statement\" when referring to the comprehensive written statement required by the guidelines."
      },
      {
        "no": 3,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the conditional requirement that, where aggregate risk appetite limits cannot be disaggregated to front line units, limits should reasonably reflect the aggregate risk the board and executive management are willing to accept."
      },
      {
        "no": 4,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Include the requirement that limits be set at levels accounting for capital and liquidity buffers and prompting risk reduction before the risk profile jeopardizes earnings, liquidity, and capital adequacy."
      },
      {
        "no": 5,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a compliance requirement mapping brief as the named deliverable."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_019",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "board independence compliance requirement mapping brief",
    "full_prompt": "The supplied material concerns board independence.\n\n[Continues under: Appendix D to Part 30—OCC Guidelines Establishing Heightened Standards for Certain Large Insured National Banks, Insured Federal Savings Associations, and Insured Federal Branches]\n\nC. Exercise Independent Judgment. When providing active oversight under paragraph III.B. of these Guidelines, each member of the board of directors should exercise sound, independent judgment.\n\nD. Include Independent Directors. To promote effective, independent oversight of the covered bank's management, at least two members of the board of directors: 6\n\n6 This provision does not supersede other regulatory requirements regarding the composition of the Board that apply to Federal savings associations. These institutions must continue to comply with such other requirements.\n\n1. Should not be an officer or employee of the parent company or covered bank and has not been an officer or employee of the parent company or covered bank during the previous three years;\n\n2. Should not be a member of the immediate family, as defined in § 225.41(b)(3) of the Board of Governors of the Federal Reserve System's Regulation Y (12 CFR 225.41(b)(3)), of a person who is, or has been within the last three years, an executive officer of the parent company or covered bank, as defined in § 215.2(e)(1) of Regulation O (12 CFR 215.2(e)(1)); and\n\n3. Should qualify as an independent director under the listing standards of a national securities exchange, as demonstrated to the satisfaction of the OCC.\n\nPrepare a board independence compliance requirement mapping brief using only the supplied OCC guideline text. Begin with a concise summary of the board independence requirements, then organize the brief into distinct sections: one covering the expectation that each board member exercise sound, independent judgment when providing active oversight, and another covering the requirement that at least two board members qualify as independent directors. For each identified requirement, map it to the specific guideline provision from which it is drawn. In the independent-director section, state the conditional requirement that at least two board members must not be an officer or employee of the parent company or covered bank, and have not been such an officer or employee during the previous three years; must not be an immediate family member, as defined in 12 CFR 225.41(b)(3), of a person who is or has been within the last three years an executive officer as defined in 12 CFR 215.2(e)(1); and must qualify as an independent director under the listing standards of a national securities exchange as demonstrated to the OCC's satisfaction. Include the three-year lookback period applicable to the officer, employee, and immediate-family disqualifications. Also note that the two-independent-director provision does not supersede other regulatory requirements regarding board composition that apply to Federal savings associations, which must continue to comply with those other requirements.",
    "target_constraint_count": 8,
    "sample_no": 82,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each identified board independence requirement to the specific guideline provision from which it is drawn."
      },
      {
        "no": 2,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the conditional requirement that at least two board members must meet the enumerated independence criteria."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Derive the brief exclusively from the supplied OCC guideline text without introducing outside requirements."
      },
      {
        "no": 4,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Include the three-year lookback period applicable to officer, employee, and immediate-family independence disqualifications."
      },
      {
        "no": 5,
        "tag": "FP6",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Begin the brief with a concise summary of the board independence compliance requirements before detailing the mapped provisions."
      },
      {
        "no": 6,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Note that the two-independent-director provision does not supersede other board composition requirements applicable to Federal savings associations."
      },
      {
        "no": 7,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover both the independent-judgment expectation and the minimum independent-director composition requirement."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into distinct sections for the independent-judgment expectation and the independent-director composition criteria."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t4_020",
    "workflow": "Risk and Compliance Review",
    "task": "Compliance requirement mapping",
    "work_product": "risk factor disclosure requirements compliance requirement mapping brief",
    "full_prompt": "Prepare a compliance requirement mapping brief for risk factor disclosure requirements under § 229.105 (Item 105) of Regulation S-K. Present the brief as a structured mapping table. Organize the brief into sections covering the governing standard, conditional triggers, placement, and thresholds. Base the mapping solely on the supplied § 229.105 text without introducing external requirements. Map each mapped requirement to the specific rule provision or anchor text that supports it. Preserve the exact rule citations, captions, and threshold figures from the source text. State that the source is current rule text under Regulation S-K Item 105. Classify each disclosure requirement as unconditional or conditional based on the rule text. Cover the required topics of risk factor captions, generic risk factors, plain English, and placement. Identify the 15-page and two-page thresholds and the consequences of exceeding them. State the conditional requirement triggered when the risk factor discussion exceeds 15 pages.\n\nThe supplied material concerns risk factor disclosure requirements.\n\n§ 229.105 (Item 105) Risk factors.\n\n(a) Where appropriate, provide under the caption “Risk Factors” a discussion of the material factors that make an investment in the registrant or offering speculative or risky. This discussion must be organized logically with relevant headings and each risk factor should be set forth under a subcaption that adequately describes the risk. The presentation of risks that could apply generically to any registrant or any offering is discouraged, but to the extent generic risk factors are presented, disclose them at the end of the risk factor section under the caption “General Risk Factors.”\n\n(b) Concisely explain how each risk affects the registrant or the securities being offered. If the discussion is longer than 15 pages, include in the forepart of the prospectus or annual report, as applicable, a series of concise, bulleted or numbered statements that is no more than two pages summarizing the principal factors that make an investment in the registrant or offering speculative or risky. If the risk factor discussion is included in a registration statement, it must immediately follow the summary section required by § 229.503 (Item 503 of Regulation S-K). If you do not include a summary section, the risk factor section must immediately follow the cover page of the prospectus or the pricing information section that immediately follows the cover page. Pricing information means price and price-related information that you may omit from the prospectus in an effective registration statement based on Rule 430A (§ 230.430A of this chapter). The registrant must furnish this information in plain English. See § 230.421(d) of Regulation C of this chapter.",
    "target_constraint_count": 13,
    "sample_no": 83,
    "constraints": [
      {
        "no": 1,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the conditional requirement triggered when the risk factor discussion exceeds 15 pages."
      },
      {
        "no": 2,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured mapping table."
      },
      {
        "no": 3,
        "tag": "DB6",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Classify each disclosure requirement as unconditional or conditional based on the rule text."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a compliance requirement mapping brief as the named deliverable."
      },
      {
        "no": 5,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Identify the 15-page and two-page thresholds and the consequences of exceeding them."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact rule citations, captions, and threshold figures from the source text."
      },
      {
        "no": 7,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into sections covering governing standard, conditional triggers, placement, and thresholds."
      },
      {
        "no": 8,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the mapping solely on the supplied § 229.105 text without introducing external requirements."
      },
      {
        "no": 9,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each mapped requirement to the specific rule provision or anchor text that supports it."
      },
      {
        "no": 10,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the required topics of risk factor captions, generic risk factors, plain English, and placement."
      },
      {
        "no": 11,
        "tag": "EG6",
        "family": "EG",
        "check_type": "计划约束",
        "text": "State that the source is current rule text under Regulation S-K Item 105."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_001",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Financial reporting review",
    "work_product": "reported performance measures financial reporting review brief",
    "full_prompt": "The supplied material concerns reported performance measures.\n\nU.S.C. § 1116), the Annual Performance Report is the primary document for comprehensive\norganizational performance reporting. An agency’s Annual Performance Report compares actual\nperformance results to the goals, objectives, and outcomes established in the Agency Strategic\nPlan and Annual Performance Plans, and it contains comprehensive, detailed performance\nreporting and information required by OMB Circular A-11, Part 6.\nTABLE 1: CFPB PERFORMANCE METRICS\nPerformance Measures\nFY 2025\nTarget\nFY 2025\nActual\nNumber of people who use the CFPB's educational resources on web\nand in print\n12.5 million 15.5 million\nNumber of days to route complaints to company 2 days <1 day\nPercent of company responses that are timely 98% 99.6%\nPercent of all public enforcement actions (that were not voluntarily\ndismissed or withdrawn from) that were successfully resolved through\nlitigation, a settlement, issuance of a default judgment, or other means\n75% 100%\nPercent of EEO counseling and investigations processed within\nregulatory timeframes\n95% 96%\nNumber of published research products 18 34\nFuture Action\nIn alignment with statutory requirements and OMB guidance, the CFPB is transitioning to a\nnew strategic plan that will be released in February 2026. With that transition, a selection of\ncurrent measures will be retired, and new measures will be instituted. Those new measures will\nalso be released in February as part of the 2027 Annual Performance Plan.\n\nPrepare a financial reporting review brief covering the reported performance measures in the provided CFPB Annual Performance Report excerpt. Base the brief solely on the supplied report text and do not bring in outside performance data or assumptions. Open with a concise framing of the report's purpose, then present a section on the reported performance measures. For each measure listed in the CFPB performance metrics table—educational resource usage, complaint routing days, timely company responses, public enforcement actions, EEO counseling and investigations processing, and published research products—compare the FY 2025 actual against the stated FY 2025 target and state whether the target was met, exceeded, or missed, tying each observation to the specific target and actual figures shown in the table. Close with a note on the future action described in the report, including the February 2026 strategic plan transition and the planned retirement and introduction of performance measures. Use a neutral, reviewer-oriented tone throughout, avoiding promotional or evaluative language beyond the reported results.",
    "target_constraint_count": 7,
    "sample_no": 84,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the review brief solely on the provided CFPB performance report excerpt without introducing outside performance data or assumptions."
      },
      {
        "no": 2,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Evaluate each reported FY 2025 actual against its stated FY 2025 target and note whether the target was met, exceeded, or missed."
      },
      {
        "no": 3,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Note the February 2026 strategic plan transition timing and its relationship to the retirement and introduction of performance measures."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a clear opening framing, a section covering the reported performance measures, and a closing note on future action."
      },
      {
        "no": 5,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover each reported performance measure listed in the CFPB table, including educational resource usage, complaint routing days, timely company responses, public enforcement actions, EEO processing, and published research products."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Tie each performance observation back to the specific target and actual figures shown in the CFPB performance metrics table."
      },
      {
        "no": 7,
        "tag": "FP5",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Use a neutral, reviewer-oriented tone suitable for a financial reporting review brief, avoiding promotional or evaluative language beyond the reported results."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_002",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Financial reporting review",
    "work_product": "financial statement scope and limitations financial reporting review brief",
    "full_prompt": "Prepare a financial statement scope and limitations financial reporting review brief based solely on the provided CFPB financial report excerpt. Organize the brief into two clearly labeled sections: one covering the scope of the financial statements and one covering their limitations. In the scope section, state that the financial statements present the financial position and results of operations of the CFPB pursuant to Dodd-Frank Act Section 1017(a)(4)(B), prepared from the books and records of the CFPB in accordance with generally accepted accounting principles for the Federal Government and following OMB general presentation guidance. In the limitations section, reproduce the relevant limitation language from the excerpt, including that the statements are prepared using the same books and records, that the financial and performance data are reliable and complete, and that the statements should be read with the understanding that they are for a component of the U.S. Government, a sovereign entity. Cite the specific excerpt language used for each section. Do not introduce any outside facts or assumptions beyond the provided excerpt.\n\nThe supplied material concerns financial statement scope and limitations.\n\nFraud Risks in Federal Programs.\nFraud Risk Governance, (2) Fraud Risk Management, (3) Fraud Control Activities, (4) Fraud\nInvestigation and Corrective Action, and (5) Fraud Monitoring Activities to determine\nenhancements to the CFPB’s fraud risk management activities. The evaluation highlighted areas\nof focus for the CFPB as it continues its efforts to develop a framework of anti-fraud practices.\nLimitations of the financial statements\nThe financial statements contained in this report have been prepared to present the financial\nposition and results of operations of the CFPB pursuant to the requirements of the Dodd-Frank\nAct Section 1017(a)(4)(B). While the statements have been prepared from the books and records\nof the CFPB, in accordance with generally accepted accounting principles for the Federal\nGovernment, and follow the general presentation guidance provided by OMB, the statements\nare prepared using the same books and records. The financial and performance data in this\nreport are reliable and complete. The statements should be read with the understanding that\nthey are for a component of the U.S. Government, a sovereign entity.",
    "target_constraint_count": 8,
    "sample_no": 85,
    "constraints": [
      {
        "no": 1,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into a section on scope of the financial statements and a separate section on limitations of the financial statements."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a financial statement scope and limitations financial reporting review brief as the named deliverable."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the brief only on the provided CFPB financial report excerpt without introducing outside facts or assumptions."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured review brief with clearly labeled scope and limitations sections."
      },
      {
        "no": 5,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact governing standard language from the excerpt, including the reference to Dodd-Frank Act Section 1017(a)(4)(B) and generally accepted accounting principles for the Federal Government."
      },
      {
        "no": 6,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific excerpt language on limitations of the financial statements when describing the scope and limitations."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_003",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Financial reporting review",
    "work_product": "internal control reporting limitations financial reporting review brief",
    "full_prompt": "The supplied material concerns internal control reporting limitations.\n\nWe are required to communicate with those charged with governance regarding, among other\nmatters, the planned scope and timing of the audit, significant audit findings, and certain\ninternal control-related matters that we identified during the financial statement audit.\nDefinition and Inherent Limitations of Internal Control over Financial Reporting\nAn entity’s internal control over financial reporting is a process effected by those charged with\ngovernance, management, and other personnel. The objectives of internal control over financial\nreporting are to provide reasonable assurance that\n• transactions are properly recorded, processed, and summarized to permit the preparation of\nfinancial statements in accordance with U.S. generally accepted accounting principles, and\nassets are safeguarded against loss from unauthorized acquisition, use, or disposition, and\n• transactions are executed in accordance with provisions of applicable laws, including those\ngoverning the use of budget authority, regulations, contracts, and grant agreements,\nnoncompliance with which could have a material effect on the financial statements.\nBecause of its inherent limitations, internal control over financial reporting may not prevent, or\ndetect and correct, misstatements due to fraud or error. We also caution that projecting any\nevaluation of effectiveness to future periods is subject to the risk that controls may become\ninadequate because of changes in conditions, or that the degree of compliance with the policies\nor procedures may deteriorate.\n\nPrepare a brief on internal control reporting limitations for a financial reporting review, using only the supplied guidance text and not importing any outside standards, examples, or assumptions. The brief should be structured with distinct sections covering the definition of internal control over financial reporting, its objectives, and its inherent limitations. In the objectives section, preserve the source's description faithfully, including the reasonable assurance standard and the listed objectives that transactions are properly recorded, processed, and summarized to permit preparation of financial statements in accordance with U.S. generally accepted accounting principles, that assets are safeguarded against loss from unauthorized acquisition, use, or disposition, and that transactions are executed in accordance with applicable laws, regulations, contracts, and grant agreements where noncompliance could have a material effect on the financial statements. In the limitations section, avoid stating that an evaluation of effectiveness can be projected to future periods without acknowledging the risk that controls may become inadequate because of changes in conditions or that the degree of compliance with policies or procedures may deteriorate. Also note that internal control may not prevent, or detect and correct, misstatements due to fraud or error because of its inherent limitations.",
    "target_constraint_count": 7,
    "sample_no": 86,
    "constraints": [
      {
        "no": 1,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the brief solely on the supplied guidance text without importing outside standards, examples, or assumptions."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a brief that explicitly addresses internal control reporting limitations for a financial reporting review."
      },
      {
        "no": 3,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the source's description of the objectives of internal control over financial reporting, including the reasonable assurance standard and the listed transaction, asset, and compliance objectives."
      },
      {
        "no": 4,
        "tag": "DB4",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Avoid stating that internal control effectiveness can be projected to future periods without the risk that controls may become inadequate or compliance may deteriorate."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured brief format with clear sections rather than unstructured prose."
      },
      {
        "no": 6,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into distinct sections covering the definition, objectives, and inherent limitations of internal control over financial reporting."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_004",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Financial reporting review",
    "work_product": "reporting entity and consolidation boundaries financial reporting review brief",
    "full_prompt": "Prepare a structured financial reporting review brief on the CFPB's reporting entity and consolidation boundaries. Base the brief solely on the supplied governing text, without introducing any external facts or assumptions. The brief must include distinct labeled sections covering the governing standard, the source status of the consolidation provision, and the applicable authority. In the governing standard section, identify the Dodd-Frank Act as the governing rule and state that the CFPB was established as an independent bureau within the Federal Reserve System and is an Executive agency as defined in section 105 of Title 5, United States Code. In the source status section, state that Section 1017 of the Dodd-Frank Act provides that the CFPB financial statements are not to be consolidated with the financial statements of either the Board of Governors of the Federal Reserve or the Federal Reserve System. In the applicable authority section, summarize the authorities the Dodd-Frank Act grants the CFPB to ensure consumer financial products and services operate with timely and understandable information, protection from unfair, deceptive, or abusive acts and practices and from discrimination, regular identification and reduction of outdated or unduly burdensome regulations, consistent enforcement of federal consumer financial law to promote fair competition, and transparent and efficient markets to facilitate access and innovation.\n\nThe supplied material concerns reporting entity and consolidation boundaries.\n\n111-203 (Dodd-Frank Act). The CFPB was established as an independent bureau within the\nFederal Reserve System. The CFPB is an Executive agency as defined in section 105 of Title 5,\nUnited States Code. Section 1017 of the Dodd-Frank Act provides that the CFPB financial\nstatements are not to be consolidated with the financial statements of either the Board of\nGovernors (BOG) of the Federal Reserve or the Federal Reserve System.\nThe Dodd-Frank Act authorizes the CFPB to exercise its authorities to ensure that, with\nrespect to consumer financial products and services:\n Consumers are provided with timely and understandable information to make\nresponsible decisions about financial transactions;\n Consumers are protected from unfair, deceptive, or abusive acts and practices and from\ndiscrimination;\n Outdated, unnecessary, or unduly burdensome regulations are regularly identified and\naddressed in order to reduce unwarranted regulatory burdens;\n Federal consumer financial law is enforced consistently in order to promote fair\ncompetition; and\n Markets for consumer financial products and services operate transparently and\nefficiently to facilitate access and innovation.",
    "target_constraint_count": 5,
    "sample_no": 87,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured document with distinct labeled sections."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named reporting entity and consolidation boundaries financial reporting review brief."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the brief solely on the supplied CFPB governing text without introducing external facts or assumptions."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Include required sections covering the governing standard, source status, and applicable authority."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_005",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Financial reporting review",
    "work_product": "employee benefit reporting responsibilities financial reporting review brief",
    "full_prompt": "The supplied material concerns employee benefit reporting responsibilities.\n\nSystem (CSRS), or CSRS Offset); however, a few transferees from OTS are in a non-Title 5 plan\n(i.e., Pentegra Defined Benefit Plan). Transferees from the Federal Reserve were allowed to\nremain in the Federal Reserve System retirement program or to affirmatively elect into the\nappropriate Title 5 retirement plan during that same timeframe. For those employees who\nelected to enroll in an alternative retirement plan, the enrollment became effective in January\n2013.\nThe CFPB does not report on its financial statements’ information pertaining to the retirement\nplans covering its employees. Reporting amounts such as plan assets, accumulated plan\nbenefits, and related unfunded liabilities, if any, is the responsibility of the Federal Reserve\nSystem, OCC, or OPM as the administrator of their respective plans. In all cases, the CFPB pays\nany employer contributions required by the plans. Refer to the chart below for information on\nwhich agency administers each of the retirement plans for the CFPB employees.\nOCC, OTS, and FDIC also offered other agency-only savings plans to employees. Any transferees\nwho participated in such plans are allowed to continue their participation as long as they remain\nenrolled in their current retirement plans. In such cases, the CFPB pays any employer\ncontributions. Employees who elect to enroll in the Federal Reserve System retirement plan will\nnot be allowed to continue their participation in either the Title 5 Thrift Savings Plan or the\nOCC, OTS, and FDIC agency savings plans.\nThe CFPB has also reimbursed the transferring agencies for administrative costs pursuant to\nMOU with the transferring agencies. These costs are reflected as expenses in the CFPB’s\nfinancial statements.\n\nPrepare a brief reviewing the CFPB's employee benefit reporting responsibilities for financial reporting. Use only the provided context as your source. Organize the brief with clear headings that separate reporting responsibilities, retirement plan administration, and employer contribution obligations, and present each responsibility as a labeled bullet point. When describing which retirement plans cover CFPB employees, cite the specific plan descriptions from the provided context, preserving the exact retirement plan names, agency names, and enrollment conditions as stated. Include the fact that the CFPB does not report on its financial statements information pertaining to the retirement plans covering its employees, and that reporting amounts such as plan assets, accumulated plan benefits, and related unfunded liabilities is the responsibility of the Federal Reserve System, OCC, or OPM as the administrator of their respective plans. Note the January 2013 effective date for enrollment in an alternative retirement plan. State that employees who elect to enroll in the Federal Reserve System retirement plan will not be allowed to continue participation in the Title 5 Thrift Savings Plan or the OCC, OTS, and FDIC agency savings plans.",
    "target_constraint_count": 10,
    "sample_no": 88,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific retirement plan descriptions from the provided context when describing which retirement plans cover CFPB employees."
      },
      {
        "no": 2,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the brief as a structured summary with labeled sections or bullet points for each reporting responsibility."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a brief that fulfills the requested employee benefit reporting responsibilities financial reporting review deliverable."
      },
      {
        "no": 4,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact retirement plan names, agency names, and enrollment conditions as stated in the context."
      },
      {
        "no": 5,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Note the January 2013 effective date for enrollment in an alternative retirement plan."
      },
      {
        "no": 6,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a clear heading structure that separates reporting responsibilities, plan administration, and employer contribution obligations."
      },
      {
        "no": 7,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided context as the source for all statements in the brief."
      },
      {
        "no": 8,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State that employees who elect to enroll in the Federal Reserve System retirement plan will not be allowed to continue participation in the Title 5 Thrift Savings Plan or the OCC, OTS, and FDIC agency savings plans."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_006",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Financial reporting review",
    "work_product": "fund availability and sequestration financial reporting review brief",
    "full_prompt": "Prepare a fund availability and sequestration financial reporting review brief based solely on the supplied CFPB financial report text. Structure the brief with separate sections for the Bureau Fund and the CPF. For each fund, state the governing availability rule, the specific sequestered amount, and the fiscal-year availability window. Apply the $100,000 cash disbursement threshold and the stated sequestration amounts as the quantitative reference points. If a fund was sequestered in fiscal year 2025, state that it was not available for obligation or allocation in fiscal year 2025 and that it will become available in fiscal year 2026. Map each availability and sequestration statement to the relevant portion of the supplied text. Limit the brief to the material fund availability and sequestration elements without adding unrelated reporting commentary.\n\nThe supplied material concerns fund availability and sequestration.\n\n$100,000. The CFPB requests cash disbursement from the Bureau Fund at the FRBNY to the\nCFPB’s Fund Balance with Treasury based on projections of future cash outlays.\nFunds obtained by, transferred to, or credited to the Bureau Fund are immediately available to\nthe CFPB less sequestered funds. The funds are under the control of the Director, and shall\nremain available until expended, to pay for the expenses of the CFPB in carrying out its duties\nand responsibilities. Bureau Funds include $29.4 million that was sequestered in fiscal year\n2025. These funds are not available for obligation in fiscal year 2025 but will become available\nto the CFPB in fiscal year 2026. In fiscal year 2024, $43.6 million was sequestered and was\nunavailable for obligation in fiscal year 2024 but became available for obligation in fiscal year\n2025.\nAmounts in the CPF are immediately available to the CFPB less sequestered funds. The funds\nare under the control of the Director, and shall remain available until expended, for payments to\nvictims of activities for which civil penalties have been imposed. To the extent that such victims\ncannot be located, or such payments are otherwise not practicable, the CFPB may use funds in\nthe CPF for the purpose of consumer education and financial literacy programs. CPF funds\ninclude $10.0 million that was sequestered in fiscal year 2025. These funds are not available for\nallocation in fiscal year 2025 but will become available to the CFPB in fiscal year 2026. In fiscal\nyear 2024, $9.7 million was sequestered and was unavailable for allocation in the fiscal year\n2024 but became available for allocation in fiscal year 2025.",
    "target_constraint_count": 8,
    "sample_no": 89,
    "constraints": [
      {
        "no": 1,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the fiscal-year availability windows for sequestered Bureau Fund and CPF amounts, including when each sequestered amount becomes available for obligation or allocation."
      },
      {
        "no": 2,
        "tag": "FP3",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Limit the brief to the material fund availability and sequestration elements without adding unrelated reporting commentary."
      },
      {
        "no": 3,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the review as a structured brief with clearly separated sections for Bureau Fund and CPF availability and sequestration status."
      },
      {
        "no": 4,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground all statements in the supplied CFPB financial report text and do not introduce outside facts or assumptions about the CFPB's fund availability."
      },
      {
        "no": 5,
        "tag": "QV4",
        "family": "QV",
        "check_type": "计划约束",
        "text": "Apply the $100,000 cash disbursement threshold and the specific sequestration amounts as the quantitative reference points for the review."
      },
      {
        "no": 6,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested fund availability and sequestration financial reporting review brief as the named work product."
      },
      {
        "no": 7,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "If a fund is sequestered in fiscal year 2025, state that it is not available for obligation or allocation in fiscal year 2025 and will become available in fiscal year 2026."
      },
      {
        "no": 8,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each availability and sequestration statement in the brief to the relevant portion of the supplied CFPB financial report text."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_007",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Trade confirmation requirements mapping",
    "work_product": "broker remuneration confirmations trade confirmation requirements mapping brief",
    "full_prompt": "The supplied material concerns broker remuneration confirmations.\n\n[Continues under: § 240.10b-10 Confirmation of transactions.]\n\n(D) The source and amount of any other remuneration received or to be received by the broker in connection with the transaction: Provided, however, that if, in the case of a purchase, the broker was not participating in a distribution, or in the case of a sale, was not participating in a tender offer, the written notification may state whether any other remuneration has been or will be received and the fact that the source and amount of such other remuneration will be furnished upon written request of such customer; or\n\n(ii) If the broker or dealer is acting as principal for its own account:\n\n(A) In the case where such broker or dealer is not a market maker in an equity security and, if, after having received an order to buy from a customer, the broker or dealer purchased the equity security from another person to offset a contemporaneous sale to such customer or, after having received an order to sell from a customer, the broker or dealer sold the security to another person to offset a contemporaneous purchase from such customer, the difference between the price to the customer and the dealer's contemporaneous purchase (for customer purchases) or sale price (for customer sales); or\n\n(B) In the case of any other transaction in an NMS stock as defined by § 242.600 of this chapter, or an equity security that is traded on a national securities exchange and that is subject to last sale reporting, the reported trade price, the price to the customer in the transaction, and the difference, if any, between the reported trade price and the price to the customer.\n\nPrepare a broker remuneration confirmations trade confirmation requirements mapping brief using only the supplied regulatory text from § 240.10b-10. Organize the brief into clearly labeled sections corresponding to the distinct remuneration scenarios in the rule, and present the mapping as a table that aligns each requirement with its applicable condition and required disclosure content. For each stated remuneration requirement, cite the specific provision in the supplied rule text that imposes it. Include the conditional disclosure alternative available when, in the case of a purchase, the broker was not participating in a distribution, or in the case of a sale, was not participating in a tender offer, and specify what the written notification may state under that condition. Do not introduce any requirements from outside the supplied text.",
    "target_constraint_count": 7,
    "sample_no": 90,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each stated remuneration requirement to the specific provision in the supplied rule text."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a broker remuneration confirmations trade confirmation requirements mapping brief."
      },
      {
        "no": 3,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Specify the conditional disclosure alternative available when the broker is not participating in a distribution for a purchase or a tender offer for a sale."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into clearly labeled sections corresponding to the distinct remuneration scenarios in the rule."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a table that aligns each requirement with its applicable condition and disclosure content."
      },
      {
        "no": 6,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the mapping only on the supplied regulatory text without importing external requirements."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_009",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Trade confirmation requirements mapping",
    "work_product": "security futures confirmations trade confirmation requirements mapping brief",
    "full_prompt": "The supplied material concerns security futures confirmations.\n\n[Continues under: § 240.10b-10 Confirmation of transactions.]\n\n(i) The date the transaction was executed, the identity of the single security or narrow-based security index underlying the contract for the security futures product, the number of contracts of such security futures product purchased or sold, the price, and the delivery month;\n\n(ii) The source and amount of any remuneration received or to be received by the broker or dealer in connection with the transaction, including, but not limited to, markups, commissions, costs, fees, and other charges incurred in connection with the transaction, provided, however, that if no remuneration is to be paid for an initiating transaction until the occurrence of the corresponding liquidating transaction, that the broker or dealer may disclose the amount of remuneration only on the confirmation for the liquidating transaction;\n\n(iii) The fact that information about the time of the execution of the transaction, the identity of the other party to the contract, and whether the broker or dealer is acting as agent for such customer, as agent for some other person, as agent for both such customer and some other person, or as principal for its own account, and if the broker or dealer is acting as principal, whether it is engaging in a block transaction or an exchange of security futures products for physical securities, will be available upon written request of the customer; and\n\n(iv) Whether payment for order flow is received by the broker or dealer for such transactions, the amount of this payment and the fact that the source and nature of the compensation received in connection with the particular transaction will be furnished upon written request of the customer; provided, however, that brokers or dealers that do not receive payment for order flow have no disclosure obligation under this paragraph.\n\nPrepare a trade confirmation requirements mapping brief for security futures confirmations under the supplied rule text. Use only the supplied rule text as the source; do not introduce outside requirements. Organize the brief into clearly separated sections for each confirmation requirement, and present the mapping as a table with columns for the requirement, the governing provision, and the required disclosure content. Cover each disclosure topic specified in the rule, including the execution date, the identity of the single security or narrow-based security index underlying the contract, the number of contracts purchased or sold, the price, the delivery month, the source and amount of any remuneration received or to be received, whether payment for order flow is received and its amount, and the fact that information about execution time, counterparty identity, agency or principal capacity, block transactions, and exchanges of security futures products for physical securities will be available upon written request. For each requirement, map it to the specific governing rule text and cite the relevant provision, and preserve the exact terms, dates, and disclosure elements from the governing rule text when stating each requirement. Connect each evidence element to the governing rule provision and the resulting confirmation disclosure requirement in a single chain. State the conditional disclosure rule for initiating transactions where no remuneration is to be paid until the occurrence of the corresponding liquidating transaction, namely that the broker or dealer may disclose the amount of remuneration only on the confirmation for the liquidating transaction.",
    "target_constraint_count": 15,
    "sample_no": 91,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a trade confirmation requirements mapping brief for security futures confirmations."
      },
      {
        "no": 2,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Map each confirmation requirement to the specific governing rule text and cite the relevant provision."
      },
      {
        "no": 3,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact terms, dates, and disclosure elements from the governing rule text when stating each requirement."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into clearly separated sections for each confirmation requirement."
      },
      {
        "no": 5,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each evidence element to the governing rule provision and the resulting confirmation disclosure requirement in a single chain."
      },
      {
        "no": 6,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied rule text as the source for the mapping; do not introduce outside requirements."
      },
      {
        "no": 7,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a table with columns for the requirement, the governing provision, and the required disclosure content."
      },
      {
        "no": 8,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover each disclosure topic specified in the rule, including execution date, underlying security or index, contract count, price, delivery month, remuneration, order flow payment, and written-request information."
      },
      {
        "no": 9,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State the conditional disclosure rule for initiating transactions where remuneration is deferred until the corresponding liquidating transaction."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_011",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Records preservation requirements mapping",
    "work_product": "record retention applicability records preservation requirements mapping brief",
    "full_prompt": "The supplied material concerns record retention applicability.\n\n§ 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.\n\nThis section applies to the following types of entities: A member of a national securities exchange who transacts a business in securities directly with others than members of a national securities exchange; a broker or dealer who transacts a business in securities through the medium of a member of a national securities exchange; a broker or dealer, including an OTC derivatives dealer as that term is defined in § 240.3b-12, registered pursuant to section 15 of the Act (15 U.S.C. 78 o ); a security-based swap dealer registered pursuant to section 15F of the Act (15 U.S.C. 78 o -10) that is also a broker or dealer, including an OTC derivatives dealer, registered pursuant to section 15 of the Act; and a major security-based swap participant registered pursuant to section 15F of the Act that is also a broker or dealer, including an OTC derivatives dealer, registered pursuant to section 15 of the Act. Section 240.18a-6 (rather than this section) applies to the following types of entities: A security-based swap dealer registered pursuant to section 15F of the Act that is not also a broker or dealer, including an OTC derivatives dealer, registered pursuant to section 15 of the Act; and a major security-based swap participant registered pursuant to section 15F of the Act that is not also a broker or dealer, including an OTC derivatives dealer, registered pursuant to section 15 of the Act.\n\nPrepare a record retention applicability records preservation requirements mapping brief based solely on the supplied text of § 240.17a-4. Organize the brief into clearly labeled sections that separate the governing standard, the entity types covered by § 240.17a-4, the entity types instead subject to § 240.18a-6, and the resulting applicability mapping. Present the entity-to-section mapping in a table or matrix format that shows each entity type and the applicable retention section. For each mapped requirement, cite the governing standard so the source of the applicability determination is traceable. Preserve the exact statutory references, entity descriptions, and section numbers as they appear in the supplied rule text, and do not introduce outside facts or assumptions. Cover the required topic of which entity types are subject to § 240.17a-4 and which are instead subject to § 240.18a-6. If an entity is a security-based swap dealer or major security-based swap participant that is not also a broker or dealer, map it to § 240.18a-6 rather than § 240.17a-4.",
    "target_constraint_count": 11,
    "sample_no": 92,
    "constraints": [
      {
        "no": 1,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into named sections that separate the governing standard, covered entities, excluded entities, and the resulting applicability mapping."
      },
      {
        "no": 2,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the required topic of which entity types are subject to § 240.17a-4 and which are instead subject to § 240.18a-6."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied § 240.17a-4 text and do not introduce outside facts or assumptions about record retention requirements."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested record retention applicability records preservation requirements mapping brief as the named work product."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the entity-to-section mapping in a table or matrix format that shows each entity type and the applicable retention section."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact statutory references, entity descriptions, and section numbers as they appear in the supplied rule text."
      },
      {
        "no": 7,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing standard anchor for each mapped requirement so the source of each applicability determination is traceable."
      },
      {
        "no": 8,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "If an entity is a security-based swap dealer or major security-based swap participant that is not also a broker or dealer, map it to § 240.18a-6 rather than § 240.17a-4."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_012",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Records preservation requirements mapping",
    "work_product": "record retention periods records preservation requirements mapping brief",
    "full_prompt": "Prepare a record retention periods records preservation requirements mapping brief based only on the supplied text of § 240.17a-4. Open with a heading and an introductory sentence identifying § 240.17a-4 as the governing standard. Then provide a mapping section in table format with one row per record category and columns for retention period and record description. Cover the six-year retention category and the three-year retention category as separate topics. For the six-year category, state that the retention period is not less than six years, with the first two years in an easily accessible place, and list the records required to be made pursuant to § 240.17a-3(a)(1) through (3), (5), and (21) and (22), and analogous records created pursuant to § 240.17a-3(e). For the three-year category, state that the retention period is not less than three years, with the first two years in an easily accessible place, and list the records required to be made pursuant to § 240.17a-3(a)(4), (6) through (11), (16), (18) through (20), and (25) through (31), and analogous records created pursuant to § 240.17a-3(e), as well as all check books, bank statements, cancelled checks and cash reconciliations, and all bills receivable or payable relating to the business. Preserve the exact statutory references and retention-period wording, including the two-year easily accessible place requirement. Cite the specific rule provisions and record references from the supplied text for each mapping. If a record falls within the § 240.17a-3(a)(1) through (3), (5), and (21) and (22) group, map it to the six-year retention period; if it falls within the other listed groups, map it to the three-year retention period. Do not add retention periods or record categories from outside sources.\n\nThe supplied material concerns record retention periods.\n\n[Continues under: § 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.]\n\n(a) Every member, broker or dealer subject to § 240.17a-3 must preserve for a period of not less than 6 years, the first two years in an easily accessible place, all records required to be made pursuant to § 240.17a-3(a)(1) through (3), (5), and (21) and (22), and analogous records created pursuant to § 240.17a-3(e).\n\n(b) Every member, broker or dealer subject to § 240.17a-3 must preserve for a period of not less than three years, the first two years in an easily accessible place:\n\n(1) All records required to be made pursuant to § 240.17a-3(a)(4), (6) through (11), (16), (18) through (20), and (25) through (31), and analogous records created pursuant to § 240.17a-3(e).\n\n(2) All check books, bank statements, cancelled checks and cash reconciliations.\n\n(3) All bills receivable or payable (or copies thereof), paid or unpaid, relating to the member, broker or dealer's business as such.",
    "target_constraint_count": 13,
    "sample_no": 93,
    "constraints": [
      {
        "no": 1,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the six-year retention category and the three-year retention category as separate topics, including the records listed under each."
      },
      {
        "no": 2,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a table with one row per record category and columns for retention period and record description."
      },
      {
        "no": 3,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the applicable retention periods of not less than six years and not less than three years, including the first two years in an easily accessible place."
      },
      {
        "no": 4,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into a heading, an introductory sentence identifying § 240.17a-4, and a mapping section."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific rule provisions and record references from the supplied text for each retention-period mapping."
      },
      {
        "no": 6,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied § 240.17a-4 text and do not add retention periods or record categories from outside sources."
      },
      {
        "no": 7,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a record retention periods records preservation requirements mapping brief as the named deliverable."
      },
      {
        "no": 8,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "List the records required to be preserved, including check books, bank statements, cancelled checks, cash reconciliations, and bills receivable or payable, without omitting any cited record group."
      },
      {
        "no": 9,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact statutory references and retention-period wording from the source, including the two-year easily accessible place requirement."
      },
      {
        "no": 10,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "If a record falls within the § 240.17a-3(a)(1) through (3), (5), and (21) and (22) group, map it to the six-year retention period; if it falls within the other listed groups, map it to the three-year retention period."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_013",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Records preservation requirements mapping",
    "work_product": "communications and financial documentation records preservation requirements mapping brief",
    "full_prompt": "The supplied material concerns communications and financial documentation.\n\n[Continues under: § 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.]\n\n(4) Originals of all communications received and copies of all communications sent (and any approvals thereof) by the member, broker or dealer (including inter-office memoranda and communications) relating to its business as such, including all communications which are subject to rules of a self-regulatory organization of which the member, broker or dealer is a member regarding communications with the public. As used in this paragraph (b)(4), the term communications includes sales scripts and recordings of telephone calls required to be maintained pursuant to section 15F(g)(1) of the Act (15 U.S.C. 78 o -10(g)(1)).\n\n(5) All trial balances, computations of aggregate indebtedness and net capital (and working papers in connection therewith), financial statements, branch office reconciliations, and internal audit working papers, relating to the member, broker or dealer's business as such.\n\n(6) All guarantees of accounts and all powers of attorney and other evidence of the granting of any discretionary authority given in respect of any account, and copies of resolutions empowering an agent to act on behalf of a corporation.\n\n(7) All written agreements (or copies thereof) entered into by such member, broker or dealer relating to its business as such, including agreements with respect to any account. Written agreements with respect to a security-based swap customer or non-customer, including governing documents or any document establishing the terms and conditions of the customer's or non-customer's security-based swaps must be maintained with the customer's or non-customer's account records.\n\nPrepare a records preservation requirements mapping brief covering communications and financial documentation. Use only the supplied text from § 240.17a-4 as your source, and organize the brief into two sections: one for communications records and one for financial documentation records. Within each section, present a mapping table that links each record type to its preservation obligation, citing the specific rule provision and quoted language for every requirement. Preserve the exact rule language and document categories without paraphrasing the legal references. Ensure the brief covers all named record categories appearing in the supplied text, including originals of communications received and copies of communications sent, approvals, inter-office memoranda, sales scripts, telephone call recordings, trial balances, computations of aggregate indebtedness and net capital, working papers, financial statements, branch office reconciliations, internal audit working papers, guarantees of accounts, powers of attorney, evidence of discretionary authority, corporate resolutions, and written agreements, including security-based swap customer or non-customer agreements and governing documents. List each specific record or document that the rule requires to be preserved, and do not add any requirements from outside the provided material.",
    "target_constraint_count": 15,
    "sample_no": 94,
    "constraints": [
      {
        "no": 1,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "List the specific records and documents identified in the cited rule text that must be preserved."
      },
      {
        "no": 2,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into distinct sections separating communications records from financial documentation records."
      },
      {
        "no": 3,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact rule language and document categories from the cited text without paraphrasing the legal references."
      },
      {
        "no": 4,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the named record categories in the rule, including communications, trial balances, net capital computations, financial statements, reconciliations, audit working papers, guarantees, powers of attorney, discretionary authority evidence, and written agreements."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific rule provision and quoted text for each preservation requirement identified."
      },
      {
        "no": 6,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a records preservation requirements mapping brief as the named deliverable."
      },
      {
        "no": 7,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied rule text as the source for all preservation requirements, without introducing outside regulations or assumptions."
      },
      {
        "no": 8,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the preservation requirements in a mapping table format that links each record type to its corresponding preservation obligation."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_014",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Records preservation requirements mapping",
    "work_product": "system notices preservation records preservation requirements mapping brief",
    "full_prompt": "Prepare a records preservation requirements mapping brief for system notices. Use only the provided rule text from § 240.17a-4. Present the mapping as a table with columns for governing rule citation, record or notice type, and preservation requirement. For each row, cite the specific regulatory paragraph, such as § 240.17a-4(b)(11), and connect the preservation requirement to the governing rule and the record or notice type it covers. Organize the brief into a heading, the mapping table, and a closing note describing the scope of the mapped requirements.\n\nThe supplied material concerns system notices preservation.\n\n[Continues under: § 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.]\n\n(9) The records required to be made pursuant to § 240.15c3-3(d)(5) and (o) or § 240.18a-4, as applicable.\n\n(10) The records required to be made pursuant to § 240.15c3-4 and the results of the periodic reviews conducted pursuant to § 240.15c3-4(d).\n\n(11) All notices relating to an internal broker-dealer system provided to the customers of the broker or dealer that sponsors such internal broker-dealer system, as defined in paragraph (a)(16)(ii)(A) of § 240.17a-3. Notices, whether written or communicated through the internal broker-dealer trading system or other automated means, must be preserved under this paragraph (b)(11) if they are provided to all customers with access to an internal broker-dealer system, or to one or more classes of customers. Examples of notices to be preserved under this paragraph (b)(11) include, but are not limited to, notices addressing hours of system operations, system malfunctions, changes to system procedures, maintenance of hardware and software, and instructions pertaining to access to the internal broker-dealer system.\n\n(12) The records required to be made pursuant to § 240.15c3-1e(c)(4)(vi) or § 240.18a-1(e)(2)(iii)(F)( 2 ), as applicable.",
    "target_constraint_count": 7,
    "sample_no": 95,
    "constraints": [
      {
        "no": 1,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each preservation requirement to the governing rule citation and the specific record or notice type it covers."
      },
      {
        "no": 2,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided rule text and do not introduce outside requirements or assumptions."
      },
      {
        "no": 3,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested records preservation requirements mapping brief."
      },
      {
        "no": 4,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a table with columns for governing rule, record or notice type, and preservation requirement."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific regulatory paragraph for each mapped requirement."
      },
      {
        "no": 6,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into a heading, the mapping table, and a closing note on the scope of the mapped requirements."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_015",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Records preservation requirements mapping",
    "work_product": "creditworthiness and conduct records records preservation requirements mapping brief",
    "full_prompt": "The supplied material concerns creditworthiness and conduct records.\n\n[Continues under: § 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.]\n\n(13) The written policies and procedures the broker-dealer establishes, documents, maintains, and enforces to assess creditworthiness for the purpose of § 240.15c3-1(c)(2)(vi)(E), (c)(2)(vi)(F)( 1 ) and ( 2 ), and (c)(2)(vi)(H) or § 240.18a-1(c)(1)(vi)( 2 ), as applicable.\n\n(14) A copy of information required to be reported under §§ 242.901 through 242.909 of this chapter (Regulation SBSR).\n\n(15) Copies of documents, communications, disclosures, and notices related to business conduct standards as required under §§ 240.15Fh-1 through 240.15Fh-6 and 240.15Fk-1.\n\n(16) Copies of documents used to make a reasonable determination with respect to special entities, including information relating to the financial status, the tax status, the investment or financing objectives of the special entity as required under section 15F(h)(4)(C) and (5)(A) of the Act (15 U.S.C. 78 o -10(h)(4)(C) and (5)(A)).\n\n(17) The written probability of default determination, relied upon by such broker or dealer, pursuant to § 242.101(c)(2)(i) or § 242.102(d)(2)(i) of this chapter (Rule 101 or Rule 102 of Regulation M), as applicable.\n\nPrepare a records preservation requirements mapping brief for creditworthiness and conduct records. Base the brief exclusively on the supplied excerpt from § 240.17a-4 and do not introduce any external requirements or assumptions. Organize the brief with a heading for the records preservation requirements mapping and distinct sections for each record category. Present the mapping in a table or matrix that pairs each record category with its governing rule citation. For each mapped requirement, cite the specific rule provision and record description from the supplied text, and list the records and documents that must be preserved. Cover the following record categories: written policies and procedures for assessing creditworthiness under § 240.15c3-1(c)(2)(vi)(E), (c)(2)(vi)(F)(1) and (2), and (c)(2)(vi)(H) or § 240.18a-1(c)(1)(vi)(2); information required to be reported under §§ 242.901 through 242.909 (Regulation SBSR); documents, communications, disclosures, and notices related to business conduct standards under §§ 240.15Fh-1 through 240.15Fh-6 and 240.15Fk-1; documents used to make a reasonable determination with respect to special entities, including financial status, tax status, and investment or financing objectives under section 15F(h)(4)(C) and (5)(A) of the Act; and the written probability of default determination under § 242.101(c)(2)(i) or § 242.102(d)(2)(i). Preserve the exact statutory and regulatory citations, record descriptions, and terminology as they appear in the source text.",
    "target_constraint_count": 13,
    "sample_no": 96,
    "constraints": [
      {
        "no": 1,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named records preservation requirements mapping brief as the requested deliverable."
      },
      {
        "no": 2,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the record categories listed in the rule text, including creditworthiness policies and procedures, Regulation SBSR information, business conduct documents, special entity documents, and probability of default determinations."
      },
      {
        "no": 3,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific rule provisions and record descriptions from the supplied text for each mapped requirement."
      },
      {
        "no": 4,
        "tag": "EG7",
        "family": "EG",
        "check_type": "计划约束",
        "text": "List the records and documents that must be preserved under each mapped requirement."
      },
      {
        "no": 5,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping in a table or matrix format that pairs each record category with its governing rule citation."
      },
      {
        "no": 6,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact statutory and regulatory citations, record descriptions, and terminology as they appear in the source text."
      },
      {
        "no": 7,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base the mapping exclusively on the supplied rule text without introducing external requirements or assumptions."
      },
      {
        "no": 8,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a heading for the records preservation requirements mapping and distinct sections for each record category."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_017",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Records preservation requirements mapping",
    "work_product": "manuals unusual activity reports and controls records preservation requirements mapping brief",
    "full_prompt": "The supplied material concerns manuals unusual activity reports and controls.\n\n[Continues under: § 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.]\n\n(7) Each compliance, supervisory, and procedures manual, including any updates, modifications, and revisions to the manual, describing the policies and practices of the member, broker or dealer with respect to compliance with applicable laws and rules, and supervision of the activities of each natural person associated with the member, broker or dealer until three years after the termination of the use of the manual.\n\n(8) All reports produced to review for unusual activity in customer accounts until eighteen months after the date the report was generated. In lieu of maintaining the reports, a member, broker or dealer may produce promptly the reports upon request by a representative of a securities regulatory authority. If a report was generated in a computer system that has been changed in the most recent eighteen month period in a manner such that the report cannot be reproduced using historical data in the same format as it was originally generated, the report may be produced by using the historical data in the current system, but must be accompanied by a record explaining each system change which affected the reports. If a report is generated in a computer system that has been changed in the most recent eighteen month period in a manner such that the report cannot be reproduced in any format using historical data, the member, broker or dealer must promptly produce upon request a record of the parameters that were used to generate the report at the time specified by a representative of a securities regulatory authority, including a record of the frequency with which the reports were generated.\n\n(9) All records required pursuant to § 240.17a-3(a)(23) until three years after the termination of the use of the risk management controls documented therein.\n\nPrepare a records preservation requirements mapping brief for manuals, unusual activity reports, and risk management controls records using only the supplied text of § 240.17a-4. Organize the brief into separate sections for manuals, unusual activity reports, and risk management controls records, and present the mapping as a table with columns for record category, governing provision, retention period, and special conditions. For each preservation requirement identified, cite the specific regulatory provision and state the applicable retention period exactly as provided in the rule. Include the alternative preservation condition for unusual activity reports when a report generated in a computer system that has been changed in the most recent eighteen month period cannot be reproduced in its original format, covering the permitted use of historical data in the current system with an accompanying explanatory record and the fallback requirement to produce a record of the parameters used to generate the report.",
    "target_constraint_count": 10,
    "sample_no": 97,
    "constraints": [
      {
        "no": 1,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific regulatory provision for each preservation requirement identified."
      },
      {
        "no": 2,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the applicable retention period for each record category."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the supplied rule text as the basis for the mapping."
      },
      {
        "no": 4,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the requested records preservation requirements mapping brief."
      },
      {
        "no": 5,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Include the alternative preservation condition for unusual activity reports when a report cannot be reproduced in its original format."
      },
      {
        "no": 6,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with separate sections for manuals, unusual activity reports, and risk management controls records."
      },
      {
        "no": 7,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact retention periods and system-change conditions from the rule text."
      },
      {
        "no": 8,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a table with columns for record category, governing provision, retention period, and special conditions."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_018",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Records preservation requirements mapping",
    "work_product": "electronic record access and backups records preservation requirements mapping brief",
    "full_prompt": "Prepare an electronic record access and backups records preservation requirements mapping brief based solely on the supplied SEC Rule 17a-4 text. Organize the brief with two sections: one headed \"Electronic Record Access Requirements\" and one headed \"Backup and Redundancy Requirements.\" Within each section, present the mapped requirements in a structured table with columns for the requirement, the specific rule provision cited from the supplied text, and the preservation obligation. Preserve the exact rule citation and terminology from the provided SEC Rule 17a-4 text when mapping each requirement, and cite the specific provision for every mapped requirement. For the backup and redundancy section, include the conditional trigger that applies when the original electronic recordkeeping system becomes temporarily or permanently inaccessible. Connect each mapped requirement to the governing rule text and its corresponding preservation obligation so that the rule, evidence, and obligation are presented together rather than as disconnected fragments.\n\nThe supplied material concerns electronic record access and backups.\n\n[Continues under: § 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.]\n\n(iv) Have the capacity to readily download and transfer copies of a record and its audit trail (if applicable) in both a human readable format and in a reasonably usable electronic format and to readily download and transfer the information needed to locate the electronic record, as required by the staffs of the Commission, the self-regulatory organizations of which the member, broker, or dealer is a member, or any State securities regulator having jurisdiction over the member, broker, or dealer; and\n\n(v)(A) Include a backup electronic recordkeeping system that meets the other requirements of this paragraph (f) and that retains the records required to be maintained and preserved pursuant to § 240.17a-3 and in accordance with this section in a manner that will serve as a redundant set of records if the original electronic recordkeeping system is temporarily or permanently inaccessible; or\n\n(B) Have other redundancy capabilities that are designed to ensure access to the records required to be maintained and preserved pursuant to § 240.17a-3 and this section.\n\n(3) A member, broker, or dealer using an electronic recordkeeping system must:\n\n(i) At all times have available, for examination by the staffs of the Commission, the self-regulatory organizations of which the member, broker, or dealer is a member, or any State securities regulator having jurisdiction over the member, broker, or dealer, facilities for immediately producing the records preserved by means of the electronic recordkeeping system and for producing copies of those records.",
    "target_constraint_count": 10,
    "sample_no": 98,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping as a structured table with explicit columns for requirement, source provision, and preservation obligation."
      },
      {
        "no": 2,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Ground all mapped requirements solely in the provided rule text without introducing outside rules or assumptions."
      },
      {
        "no": 3,
        "tag": "EG5",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Preserve the exact rule citation and terminology from the provided SEC Rule 17a-4 text when mapping requirements."
      },
      {
        "no": 4,
        "tag": "DB2",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Map the conditional trigger that applies when the original electronic recordkeeping system becomes temporarily or permanently inaccessible."
      },
      {
        "no": 5,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the specific provision of the supplied rule text for each mapped requirement."
      },
      {
        "no": 6,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief with a heading for electronic record access requirements and a separate heading for backup and redundancy requirements."
      },
      {
        "no": 7,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce the named electronic record access and backups records preservation requirements mapping brief."
      },
      {
        "no": 8,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Connect each mapped requirement to the governing rule text and the corresponding preservation obligation without presenting them as disconnected fragments."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_019",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Records preservation requirements mapping",
    "work_product": "electronic audit and indexing records preservation requirements mapping brief",
    "full_prompt": "The supplied material concerns electronic audit and indexing.\n\n[Continues under: § 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.]\n\n(ii) Be ready at all times to provide, and immediately provide, any record stored by means of the electronic recordkeeping system that the staffs of the Commission, the self-regulatory organizations of which the member, broker, or dealer is a member, or any State securities regulator having jurisdiction over the member, broker, or dealer may request.\n\n(iii) For a broker-dealer operating pursuant to paragraph (f)(2)(i)(B) of this section, the member, broker, or dealer must have in place an audit system providing for accountability regarding inputting of records required to be maintained and preserved pursuant to § 240.17a-3 and this section to the electronic recordkeeping system and inputting of any changes made to every original and duplicate record maintained and preserved thereby.\n\n(A) At all times, a member, broker, or dealer must be able to have the results of such audit system available for examination by the staffs of the Commission and the self-regulatory organization of which the broker or dealer is a member.\n\n(B) The audit results must be preserved for the time required for the audited records.\n\n(iv) Organize, maintain, keep current, and provide promptly upon request by the staffs of the Commission, the self-regulatory organizations of which the member, broker, or dealer is a member, or any State securities regulator having jurisdiction over the member, broker, or dealer all information necessary to access and locate records preserved by means of the electronic recordkeeping system.\n\nPrepare an electronic audit and indexing records preservation requirements mapping brief based solely on the supplied text from § 240.17a-4. Organize the brief into a requirements mapping that separates the preservation, audit-system, availability, and access-and-location obligations in the rule. Cover each required topic area stated in the rule: the obligation to be ready at all times to provide, and immediately provide, any electronically stored record upon request by Commission staff, applicable self-regulatory organization staff, or state securities regulators; the audit-system requirement for broker-dealers operating under paragraph (f)(2)(i)(B), including accountability for inputting records required to be maintained and preserved under § 240.17a-3 and this section and for inputting changes to original and duplicate records; the requirement that audit results be available for examination and be preserved for the same time required for the audited records; and the obligation to organize, maintain, keep current, and provide promptly upon request all information necessary to access and locate preserved records. For the audit-system requirement, connect the governing standard in § 240.17a-4 to the triggering condition for broker-dealers operating under paragraph (f)(2)(i)(B) and show how that condition gives rise to the accountability and preservation obligations. Do not introduce any external regulatory requirements or assumptions.",
    "target_constraint_count": 6,
    "sample_no": 99,
    "constraints": [
      {
        "no": 1,
        "tag": "FP1",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Organize the brief into a requirements mapping structure that separates the preservation, audit-system, availability, and access-and-location obligations in the supplied rule text."
      },
      {
        "no": 2,
        "tag": "DB3",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify the requirement to be ready at all times to provide, and immediately provide, any electronically stored record upon request by Commission staff, applicable self-regulatory organization staff, or state securities regulators."
      },
      {
        "no": 3,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Base every mapped requirement solely on the supplied rule text and do not introduce external regulatory requirements or assumptions."
      },
      {
        "no": 4,
        "tag": "DB9",
        "family": "DB",
        "check_type": "计划约束",
        "text": "For the audit-system requirement, connect the governing standard in § 240.17a-4 to the triggering condition for broker-dealers operating under paragraph (f)(2)(i)(B), and show how that condition gives rise to the accountability and preservation obligations."
      },
      {
        "no": 5,
        "tag": "RC2",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Cover the required topic areas stated in the rule, including electronic record availability, audit-system accountability for record input and changes, audit-result preservation, and organization of access-and-location information."
      },
      {
        "no": 6,
        "tag": "QV5",
        "family": "QV",
        "check_type": "计划约束",
        "text": "State the retention period rule for audit results as preservation for the same time required for the audited records."
      }
    ]
  },
  {
    "review_batch_id": "test300-9dee12ca7ed8",
    "item_id": "test300_t5_020",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Records preservation requirements mapping",
    "work_product": "record access undertakings records preservation requirements mapping brief",
    "full_prompt": "Prepare a brief titled 'Record Access Undertakings Records Preservation Requirements Mapping Brief' using only the provided text from § 240.17a-4. Present the mapping as a table with columns for requirement element, governing text, and responsible party. For each mapped requirement, cite § 240.17a-4 as the governing standard. The brief must identify that the undertakings must be signed by a designated executive officer or designated third party, reflecting the required approval or authorization path. It must also state that the undersigned must furnish information promptly to the U.S. Securities and Exchange Commission, any self-regulatory organization of which the member, broker, or dealer is a member, and any state securities regulator having jurisdiction over the member, broker, or dealer upon reasonable request. Do not add any requirements from outside the provided text.\n\nThe supplied material concerns record access undertakings.\n\n[Continues under: § 240.17a-4 Records to be preserved by certain exchange members, brokers and dealers.]\n\n(v)(A) Have at all times filed with the designated examining authority for the member, broker, or dealer the following undertakings with respect to such records signed by either a designated executive officer or designated third party (hereinafter, the “undersigned”):\n\nThe undersigned hereby undertakes to furnish promptly to the U.S. Securities and Exchange Commission (“Commission”), its designees or representatives, any self- regulatory organization of which [Name of the Member, Broker, or Dealer] is a member, or any State securities regulator having jurisdiction over [Name of the Member, Broker, or Dealer], upon reasonable request, such information as is deemed necessary by the staff of the Commission, any self-regulatory organization of which [Name of the Member, Broker, or Dealer] is a member, or any State securities regulator having jurisdiction over [Name of the Member, Broker, or Dealer], and to download copies of a record and its audit trail (if applicable) preserved by means of an electronic recordkeeping system of [Name of the Member, Broker, or Dealer] into both a human readable format and a reasonably usable electronic format in the event of a failure on the part of [Name of the Member, Broker, or Dealer] to download a requested record or its audit trail (if applicable). Furthermore, the undersigned hereby undertakes to take reasonable steps to provide access to the information preserved by means of an electronic recordkeeping system of [Name of the Member, Broker, or Dealer], including, as appropriate, downloading any record required to be maintained and preserved by [Name of the Member, Broker, or Dealer] pursuant to §§ 240.17a-3 and 240.17a-4 in a format acceptable to the staff of the Commission, any self-regulatory organization of which [Name of the Member, Broker, or Dealer] is a member, or any State securities regulator having jurisdiction over [Name of the Member, Broker, or Dealer]. Specifically, the undersigned will take reasonable steps to, in the event of a failure on the part of [Name of the Member, Broker, or Dealer] to download the record into a human readable format or a reasonably usable electronic format and after reasonable notice to [Name of the Member, Broker, or Dealer], download the record into a human readable format or a reasonably usable electronic format at the request of the staffs of the Commission, any self-regulatory organization of which [Name of the Member, Broker, or Dealer] is a member, or any State securities regulator having jurisdiction over [Name of the Member, Broker, or Dealer].",
    "target_constraint_count": 6,
    "sample_no": 100,
    "constraints": [
      {
        "no": 1,
        "tag": "FP2",
        "family": "FP",
        "check_type": "计划约束",
        "text": "Present the mapping brief as a table with columns for requirement element, governing text, and responsible party."
      },
      {
        "no": 2,
        "tag": "RC1",
        "family": "RC",
        "check_type": "计划约束",
        "text": "Produce a brief titled 'Record Access Undertakings Records Preservation Requirements Mapping Brief'."
      },
      {
        "no": 3,
        "tag": "DB7",
        "family": "DB",
        "check_type": "计划约束",
        "text": "Identify that the undertakings must be signed by a designated executive officer or designated third party, reflecting the required approval or authorization path."
      },
      {
        "no": 4,
        "tag": "EG2",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Cite the governing standard § 240.17a-4 for each mapped requirement."
      },
      {
        "no": 5,
        "tag": "EG1",
        "family": "EG",
        "check_type": "计划约束",
        "text": "Use only the provided rule text as the source for the mapping and do not add outside requirements."
      },
      {
        "no": 6,
        "tag": "DB3",
        "family": "DB",
        "check_type": "计划约束",
        "text": "State that the undersigned must furnish information promptly to the Commission, self-regulatory organizations, and state securities regulators upon reasonable request."
      }
    ]
  }
];
