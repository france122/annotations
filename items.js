window.FINIF_ITEMS = [
  {
    "sample_no": 1,
    "item_id": "tonight_hard_line_228",
    "workflow": "Decision and Structuring",
    "task": "DCF valuation / pricing analysis",
    "work_product": "WACC sensitivity briefing",
    "instruction": "Draft a WACC-only sensitivity briefing for BluePeak Solar. Hold terminal growth constant, recalculate implied equity value per share for the 8.25%, 9.25%, and 10.25% WACC cases, rank the cases from most favorable to least favorable for equity holders, state whether the current price sits above or below the base case, cite visible material labels, and avoid calling the briefing a fairness opinion. Produce the WACC sensitivity briefing under an audit-ready reconciliation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; for any comparison, ranking, alternative, scenario, or trade-off, state the comparison basis, source inputs, result, and decision implication; for any stress, sensitivity, shock, downside, or scenario test, keep the assumption, horizon, source inputs, formula or comparison, and final result tied together; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the WACC sensitivity briefing with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Use at least four numbered list items in the 1. / 2. / 3. style for checks, blockers, steps, or required actions. Keep the full response between 220 and 520 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Assignment 228 - WACC sensitivity briefing\n\nInput record\nKYC QA packet -- BluePeak Solar is a fictional utility-scale solar developer. Backlog is $1.9 billion, contracted revenue is concentrated in three states, and management disclosed interconnection-delay risk.\n\nName for this material: handoff checklist. Content: Base enterprise value at 9.25% WACC is $2.48 billion. Net debt is $610 million. Diluted shares are 95 million. Current share price is $18.25. WACC sensitivity: at 8.25% EV is $2.92 billion; at 10.25% EV is $2.12 billion. Terminal growth is held constant at 2.25%.\n\noperations readiness rule\nTitle: Investment Committee Question\nThe committee wants a WACC-only sensitivity briefing. Do not change terminal growth, and do not present the output as a full fairness opinion.\n\nWhat to deliver\nComplete the work product as follows: a WACC-only sensitivity briefing for BluePeak Solar. Hold terminal growth constant, recalculate implied equity value per share for the 8.25%, 9.25%, and 10.25% WACC cases, rank the cases from most favorable to least favorable for equity holders, state whether the current price sits above or below the base case, cite the source labels, and avoid calling the briefing a fairness opinion.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nDraft a WACC-only sensitivity briefing for BluePeak Solar. Hold terminal growth constant, recalculate implied equity value per share for the 8.25%, 9.25%, and 10.25% WACC cases, rank the cases from most favorable to least favorable for equity holders, state whether the current price sits above or below the base case, cite visible material labels, and avoid calling the briefing a fairness opinion. Produce the WACC sensitivity briefing under an audit-ready reconciliation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; for any comparison, ranking, alternative, scenario, or trade-off, state the comparison basis, source inputs, result, and decision implication; for any stress, sensitivity, shock, downside, or scenario test, keep the assumption, horizon, source inputs, formula or comparison, and final result tied together; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the WACC sensitivity briefing with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Use at least four numbered list items in the 1. / 2. / 3. style for checks, blockers, steps, or required actions. Keep the full response between 220 and 520 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "KYC QA packet",
        "title": "BluePeak Solar Business Excerpt",
        "content": "BluePeak Solar is a fictional utility-scale solar developer. Backlog is $1.9 billion, contracted revenue is concentrated in three states, and management disclosed interconnection-delay risk.",
        "provenance": false
      },
      {
        "label": "handoff checklist",
        "title": "BluePeak Base DCF Case",
        "content": "Base enterprise value at 9.25% WACC is $2.48 billion. Net debt is $610 million. Diluted shares are 95 million. Current share price is $18.25. WACC sensitivity: at 8.25% EV is $2.92 billion; at 10.25% EV is $2.12 billion. Terminal growth is held constant at 2.25%.",
        "provenance": false
      },
      {
        "label": "operations readiness rule",
        "title": "Investment Committee Question",
        "content": "The committee wants a WACC-only sensitivity briefing. Do not change terminal growth, and do not present the output as a full fairness opinion.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Decision and Boundary",
        "tag": "DB4",
        "check_type": "LLM",
        "text": "The response must avoid calling the briefing a fairness opinion."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 3,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 4,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 5,
        "family": "Quantitative Verification",
        "tag": "QV6",
        "check_type": "LLM",
        "text": "For every requested comparison, ranking, alternative, scenario, or trade-off, the response must state the comparison basis, source inputs, result, and decision implication rather than listing options without a supported ordering or boundary."
      },
      {
        "no": 6,
        "family": "Quantitative Verification",
        "tag": "QV7",
        "check_type": "LLM",
        "text": "For every requested stress, sensitivity, shock, downside, or scenario test, the response must keep the assumption, horizon, source inputs, formula or comparison, and final result tied together; it must not present the scenario result as a base-case fact."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include at least four ordered-list items using numeric list markers."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must be between 220 and 520 words."
      }
    ]
  },
  {
    "sample_no": 2,
    "item_id": "tonight_hard_line_253",
    "workflow": "Decision and Structuring",
    "task": "Credit memo drafting",
    "work_product": "collateral shortfall credit memo",
    "instruction": "Write a collateral shortfall credit memo for Lakeshore Plastics Co. Use a two-column table for current collateral value and required cure amount, calculate collateral coverage and the dollar shortfall to full coverage, decide whether to release, release with substitute collateral, or deny the lien release, and list acceptable cure options. Use only the context and cite visible material labels. Produce the collateral shortfall credit memo under an audit-ready disclosure-review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; separate source-stated facts from reviewer inferences, assumptions, customer statements, or management assertions; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the collateral shortfall credit memo with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Use at least four numbered list items in the 1. / 2. / 3. style for checks, blockers, steps, or required actions. Keep the full response between 220 and 520 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Analyst packet 253 for Credit memo drafting\n\nCompletion instructions\nFor the final response, handle this assignment: a collateral shortfall credit memo for Lakeshore Plastics Co. Use a two-column table for current collateral value and required cure amount, calculate collateral coverage and the dollar shortfall to full coverage, decide whether to release, release with substitute collateral, or deny the lien release, and list acceptable cure options. Rely only on the materials above and cite the source labels.\n\nSource materials\nName for this material: conditional hold matrix. Content: Borrower: Lakeshore Plastics Co., a fictional injection-molding business. Outstanding term loan balance is $4.8 million. Most recent appraisal values machinery at $3.2 million and eligible receivables at $1.1 million. The prior memo assumed $6.0 million of collateral value. Borrower asks to release a secondary lien on two molding machines to finance replacement equipment.\n\ntrigger policy\nTitle: Collateral Protection Policy\nCollateral shortfall memos must calculate collateral coverage as collateral value divided by outstanding loan balance, calculate dollar shortfall to 100% coverage, decide release, release with substitute collateral, or deny, and list cure options. Collateral releases are not permitted when collateral coverage is below 100% unless substitute collateral or principal paydown restores coverage at or above 100%. Credit Committee approval is required for any collateral release denial override.\n\nowner assignment guide; accordance with ASC Topic 932, Extractive Activities - Oil life of the underlying asset. This is often represented as the In evaluating collateral valuations for RBL “reserve tail tests” that are based on the economic half-life facilities, banks often utilize alternative discount rates. For of the reserves or the cash flow remaining after projected creditworthy borrowers and during more benign operating loan payout. cycles, a 9 percent discount rate is commonly used. higher-risk borrowers or during volatile or declining market Loan durations should be fairly short-term and directly tied cycles for O&G, higher discount rates are typically used. If to the economic life of the asset (generally 50 to 60 percent a discount rate is selected that significantly differs from of the economic life of the proved reserves or the proved generally accepted discount rates, examiners should assess reserves’ half-life). The terms generally depend on the management’s documentation supporting its rationale. projected and actual reserve production (reserve run data), Some banks may use multiple discount rates under certain as well as the type and range of collateral (PDP, PDNP, or An example may include establishing a PUD). A reasonable portion of the estimated revenues standard discount rate for performing credits and a higher should remain after the debt has fully amortized (reserve rate for higher risk facilities. tail). Borrowing bases should be re-determined at least semiannually, subject to an updated reserve engineering Prudent management regularly evaluates, and updates as Covenants necessary, its pricing assumptions for RBL, commonly referred to as the institution’s price deck. The price deck is Appropriate use of covenants is imperative in managing a forecast used to derive cash flow and collateral value credit risk for O&G loans. Lenders typically require assumptions, and typically is approved by the board of financial covenants to instill discipline in the lending directors or a specifically designated board committee. relationship, including the borrower’s leverage position, Pricing assumptions typically represent the most significant repayment capacity, and liquidity. Loans (3-2026) 3.2-14 RMS Manual of Examination Policies Federal Deposit Insurance Corporation designed covenants limit cash distributions to management should be able to demonstrate the ability to owners/shareholders, and include standard performance and streamline operations, maintain reasonable production, financial reporting requirements. Examples of commonly manage working capital, strategically reduce CAPEX, and used ratios/covenants for evaluating E&P companies make sound divestitures to ensure repayment of debt. include Free Cash Flow (FCF), Interest Coverage, Fixed management should evaluate the borrower’s cost cycle, Charge Coverage, Current Ratio, Quick Ratio, Senior which reflects not only the ability to generate cash flow Debt/EBITDA(X), and Total Debt/EBITDA(X). The from production, but also the CAPEX necessary to replace calculation of earnings before interest, taxes, depreciation, depleted reserves. Working capital management is and amortization (EBITDA) typically incorporates critically important, as delinquent payments to vendors can maintenance CAPEX (X) due to its impact on the amount result in a negative working capital position (due to of projected FCF that is available after debt service to accounts payable increasing) and an increased leverage support operations. ratio. Hedging Financial analysis typically includes the following: When used properly, hedging may be an effective tool to • Adequacy of operating cash flows to service existing help protect the borrower and the lender from sharp total debt; commodity price declines by providing a stable cash flow • Overall compliance with financial covenants, including E&P companies frequently use hedging borrowing base limitations as detailed in the loan instruments such as futures contracts, swaps, collars, and agreement; put options to reduce price risk exposure. Generally, hedges • Reasonableness of the company’s budget assumptions should be limited to no more than 85 percent of projected and projections; Counterparties are typically limited to • Comparison of borrower provided production reputable, financially sound companies that are approved in projections with actual results; accordance with the institution’s O&G loan policy. If the • Working capital, tangible net worth, and leverage hedges are taken as collateral or part of the borrowing base, positions; and the advance rate and any limitations on the hedging position • Impact of capital expenses and recent acquisitions. should be documented in the loan agreement. sold or monetized, the proceeds of such are generally O&G Loan Policy Guidelines applied to the respective debt. The O&G loan policy should provide sufficient guidance to Borrower and Financial Analysis loan officers, clearly convey appropriate policy limitations and monitoring procedures, and detail appropriate Management should have a clear understanding of the underwriting standards and practices. overall financial health of the borrower that includes an should clearly indicate those industry segments (Upstream, assessment of the borrower’s ability to maintain operations Midstream, Downstream, and Support/Services) the board through adverse market conditions. E&P companies in chooses to lend to and include guidance on each of those sound financial condition should have strong cash flow segments. from reliable revenue sources and well-controlled operating Companies should also have adequate sources of For institutions engaged in RBL, appropriate policies liquidity and effective working capital management, sound address reserve measurement and valuation analysis,\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nWrite a collateral shortfall credit memo for Lakeshore Plastics Co. Use a two-column table for current collateral value and required cure amount, calculate collateral coverage and the dollar shortfall to full coverage, decide whether to release, release with substitute collateral, or deny the lien release, and list acceptable cure options. Use only the context and cite visible material labels. Produce the collateral shortfall credit memo under an audit-ready disclosure-review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; separate source-stated facts from reviewer inferences, assumptions, customer statements, or management assertions; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the collateral shortfall credit memo with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Use at least four numbered list items in the 1. / 2. / 3. style for checks, blockers, steps, or required actions. Keep the full response between 220 and 520 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "conditional hold matrix",
        "title": "Lakeshore Collateral Revaluation",
        "content": "Borrower: Lakeshore Plastics Co., a fictional injection-molding business. Outstanding term loan balance is $4.8 million. Most recent appraisal values machinery at $3.2 million and eligible receivables at $1.1 million. The prior memo assumed $6.0 million of collateral value. Borrower asks to release a secondary lien on two molding machines to finance replacement equipment.",
        "provenance": false
      },
      {
        "label": "trigger policy",
        "title": "Collateral Protection Policy",
        "content": "Collateral shortfall memos must calculate collateral coverage as collateral value divided by outstanding loan balance, calculate dollar shortfall to 100% coverage, decide release, release with substitute collateral, or deny, and list cure options. Collateral releases are not permitted when collateral coverage is below 100% unless substitute collateral or principal paydown restores coverage at or above 100%. Credit Committee approval is required for any collateral release denial override.",
        "provenance": false
      },
      {
        "label": "owner assignment guide",
        "title": "FDIC Loan Administration Reference Excerpt",
        "content": "accordance with ASC Topic 932, Extractive Activities - Oil life of the underlying asset. This is often represented as the In evaluating collateral valuations for RBL “reserve tail tests” that are based on the economic half-life facilities, banks often utilize alternative discount rates. For of the reserves or the cash flow remaining after projected creditworthy borrowers and during more benign operating loan payout. cycles, a 9 percent discount rate is commonly used. higher-risk borrowers or during volatile or declining market Loan durations should be fairly short-term and directly tied cycles for O&G, higher discount rates are typically used. If to the economic life of the asset (generally 50 to 60 percent a discount rate is selected that significantly differs from of the economic life of the proved reserves or the proved generally accepted discount rates, examiners should assess reserves’ half-life). The terms generally depend on the management’s documentation supporting its rationale. projected and actual reserve production (reserve run data), Some banks may use multiple discount rates under certain as well as the type and range of collateral (PDP, PDNP, or An example may include establishing a PUD). A reasonable portion of the estimated revenues standard discount rate for performing credits and a higher should remain after the debt has fully amortized (reserve rate for higher risk facilities. tail). Borrowing bases should be re-determined at least semiannually, subject to an updated reserve engineering Prudent management regularly evaluates, and updates as Covenants necessary, its pricing assumptions for RBL, commonly referred to as the institution’s price deck. The price deck is Appropriate use of covenants is imperative in managing a forecast used to derive cash flow and collateral value credit risk for O&G loans. Lenders typically require assumptions, and typically is approved by the board of financial covenants to instill discipline in the lending directors or a specifically designated board committee. relationship, including the borrower’s leverage position, Pricing assumptions typically represent the most significant repayment capacity, and liquidity. Loans (3-2026) 3.2-14 RMS Manual of Examination Policies Federal Deposit Insurance Corporation designed covenants limit cash distributions to management should be able to demonstrate the ability to owners/shareholders, and include standard performance and streamline operations, maintain reasonable production, financial reporting requirements. Examples of commonly manage working capital, strategically reduce CAPEX, and used ratios/covenants for evaluating E&P companies make sound divestitures to ensure repayment of debt. include Free Cash Flow (FCF), Interest Coverage, Fixed management should evaluate the borrower’s cost cycle, Charge Coverage, Current Ratio, Quick Ratio, Senior which reflects not only the ability to generate cash flow Debt/EBITDA(X), and Total Debt/EBITDA(X). The from production, but also the CAPEX necessary to replace calculation of earnings before interest, taxes, depreciation, depleted reserves. Working capital management is and amortization (EBITDA) typically incorporates critically important, as delinquent payments to vendors can maintenance CAPEX (X) due to its impact on the amount result in a negative working capital position (due to of projected FCF that is available after debt service to accounts payable increasing) and an increased leverage support operations. ratio. Hedging Financial analysis typically includes the following: When used properly, hedging may be an effective tool to • Adequacy of operating cash flows to service existing help protect the borrower and the lender from sharp total debt; commodity price declines by providing a stable cash flow • Overall compliance with financial covenants, including E&P companies frequently use hedging borrowing base limitations as detailed in the loan instruments such as futures contracts, swaps, collars, and agreement; put options to reduce price risk exposure. Generally, hedges • Reasonableness of the company’s budget assumptions should be limited to no more than 85 percent of projected and projections; Counterparties are typically limited to • Comparison of borrower provided production reputable, financially sound companies that are approved in projections with actual results; accordance with the institution’s O&G loan policy. If the • Working capital, tangible net worth, and leverage hedges are taken as collateral or part of the borrowing base, positions; and the advance rate and any limitations on the hedging position • Impact of capital expenses and recent acquisitions. should be documented in the loan agreement. sold or monetized, the proceeds of such are generally O&G Loan Policy Guidelines applied to the respective debt. The O&G loan policy should provide sufficient guidance to Borrower and Financial Analysis loan officers, clearly convey appropriate policy limitations and monitoring procedures, and detail appropriate Management should have a clear understanding of the underwriting standards and practices. overall financial health of the borrower that includes an should clearly indicate those industry segments (Upstream, assessment of the borrower’s ability to maintain operations Midstream, Downstream, and Support/Services) the board through adverse market conditions. E&P companies in chooses to lend to and include guidance on each of those sound financial condition should have strong cash flow segments. from reliable revenue sources and well-controlled operating Companies should also have adequate sources of For institutions engaged in RBL, appropriate policies liquidity and effective working capital management, sound address reserve measurement and valuation analysis,",
        "provenance": true
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "LLM",
        "text": "The memo must use a two-column table for current collateral value and required cure amount."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB2",
        "check_type": "LLM",
        "text": "The memo must not support a collateral release below 100% coverage unless substitute collateral or principal paydown restores coverage."
      },
      {
        "no": 3,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The memo must use only the provided context."
      },
      {
        "no": 4,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 5,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 6,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 7,
        "family": "Evidence and Grounding",
        "tag": "EG3",
        "check_type": "LLM",
        "text": "The response must separate source-stated facts from reviewer inferences, assumptions, customer statements, or management assertions; it must not present inferred conclusions as source facts."
      },
      {
        "no": 8,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "If approval, authorization, authority evidence, or a review prerequisite controls the outcome, the response must name the required approver or prerequisite and must not imply approval while that prerequisite is missing."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 12,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include at least four ordered-list items using numeric list markers."
      },
      {
        "no": 13,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must be between 220 and 520 words."
      }
    ]
  },
  {
    "sample_no": 3,
    "item_id": "tonight_hard_line_260",
    "workflow": "Decision and Structuring",
    "task": "DCF valuation / pricing analysis",
    "work_product": "missing market quote hold note",
    "instruction": "Classify the Lakeview municipal bond pricing request. Check whether any required current market input is present, list the missing pricing evidence, decide between proceed and hold, cite the procedure and request documents, draft the internal next-step request for evidence, and do not provide an estimated client price if the task is on hold. Produce the missing market quote hold note under an audit-ready reconciliation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; use only packet-supported category, status, classification, or risk-level labels; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the missing market quote hold note with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Keep the missing market quote hold note to between four and nine non-empty paragraphs, counting any table or list as part of the paragraph where it appears. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Case file 260: missing market quote hold note\nCase inputs\nvaluation sensitivity extract -- Portfolio manager requests pricing for Lakeview 3.25% municipal bonds due 2036. The request includes coupon, maturity, and par amount of $2 million, but no market quote, evaluated price, yield curve input, credit spread, or comparable trade.\n\nName for this material: CFO review question. Content: A municipal bond pricing analysis requires at least one of the following current market inputs: executable quote, evaluated price, benchmark yield plus spread, or comparable trade. Without any current market input, the analyst must place the task on hold and request missing pricing evidence.\n\nterminal growth worksheet\nTitle: Client Communication Boundary\nDo not provide an estimated price to the client when the pricing analysis is on hold for missing market inputs.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nWhat to deliver\nComplete the work product as follows: the Lakeview municipal bond pricing request. Check whether any required current market input is present, list the missing pricing evidence, decide between proceed and hold, cite the procedure and request documents, draft the internal next-step request for evidence, and do not provide an estimated client price if the task is on hold.\n\nFinal work-product request\nClassify the Lakeview municipal bond pricing request. Check whether any required current market input is present, list the missing pricing evidence, decide between proceed and hold, cite the procedure and request documents, draft the internal next-step request for evidence, and do not provide an estimated client price if the task is on hold. Produce the missing market quote hold note under an audit-ready reconciliation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; use only packet-supported category, status, classification, or risk-level labels; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the missing market quote hold note with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Keep the missing market quote hold note to between four and nine non-empty paragraphs, counting any table or list as part of the paragraph where it appears. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "valuation sensitivity extract",
        "title": "Lakeview Municipal Bond Request",
        "content": "Portfolio manager requests pricing for Lakeview 3.25% municipal bonds due 2036. The request includes coupon, maturity, and par amount of $2 million, but no market quote, evaluated price, yield curve input, credit spread, or comparable trade.",
        "provenance": false
      },
      {
        "label": "CFO review question",
        "title": "Municipal Pricing Procedure",
        "content": "A municipal bond pricing analysis requires at least one of the following current market inputs: executable quote, evaluated price, benchmark yield plus spread, or comparable trade. Without any current market input, the analyst must place the task on hold and request missing pricing evidence.",
        "provenance": false
      },
      {
        "label": "terminal growth worksheet",
        "title": "Client Communication Boundary",
        "content": "Do not provide an estimated price to the client when the pricing analysis is on hold for missing market inputs.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Decision and Boundary",
        "tag": "DB6",
        "check_type": "LLM",
        "text": "The response must decide between proceed and hold."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB2",
        "check_type": "LLM",
        "text": "The response must not provide an estimated client price if the task is on hold."
      },
      {
        "no": 3,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 4,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 5,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 6,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; it must not round, rename, or paraphrase them in a way that changes the controlling source meaning."
      },
      {
        "no": 7,
        "family": "Decision and Boundary",
        "tag": "DB6",
        "check_type": "LLM",
        "text": "When the task requires classification, status, or risk-level labeling, the response must use the explicit category labels supported by the packet and must not substitute a softer or unlisted label."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must use between four and nine non-empty paragraphs."
      }
    ]
  },
  {
    "sample_no": 4,
    "item_id": "tonight_hard_swapin_016",
    "workflow": "Decision and Structuring",
    "task": "DCF valuation / pricing analysis",
    "work_product": "NAV premium discount analysis",
    "instruction": "Prepare the Harbor Bond Fund NAV premium/discount pricing note. Calculate the current-day premium or discount, calculate the prior-day premium or discount, compute the day-over-day change in basis points, test the current-day result against the 0.50% escalation threshold, cite visible material labels for prices, NAVs, and policy, and label the escalation status as escalate or no escalate. Produce the NAV premium discount analysis under an audit-ready controller review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; use only packet-supported category, status, classification, or risk-level labels; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the NAV premium discount analysis with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Structure the NAV premium discount analysis with at least three level-2 Markdown headings that start with ##. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Review file 97: NAV premium discount analysis\n\nAnalyst instructions\nThe answer needs to cover this request: Prepare the Harbor Bond Fund NAV premium/discount pricing note. Calculate the current-day premium or discount, calculate the prior-day premium or discount, compute the day-over-day change in basis points, test the current-day result against the 0.50% escalation threshold, cite visible material labels for prices, NAVs, and policy, and label the escalation status as escalate or no escalate.\n\nSource materials\nfund pricing file -- Harbor Bond Fund reports market price of $24.18 and NAV of $24.06 as of 2026-06-10. Prior day market price was $24.05 and prior day NAV was $24.04.\n\nName for this material: premium discount policy. Content: Premium or discount equals market price divided by NAV minus 1. A premium or discount greater than 0.50% in absolute value must be escalated to ETF Capital Markets.\n\ndesk output request (Desk Output Request)\nThe desk wants a pricing note with current day and prior day premium or discount, change in basis points, and escalation status.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nPrepare the Harbor Bond Fund NAV premium/discount pricing note. Calculate the current-day premium or discount, calculate the prior-day premium or discount, compute the day-over-day change in basis points, test the current-day result against the 0.50% escalation threshold, cite visible material labels for prices, NAVs, and policy, and label the escalation status as escalate or no escalate. Produce the NAV premium discount analysis under an audit-ready controller review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; use only packet-supported category, status, classification, or risk-level labels; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the NAV premium discount analysis with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Structure the NAV premium discount analysis with at least three level-2 Markdown headings that start with ##. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "fund pricing file",
        "title": "Harbor Bond Fund Pricing File",
        "content": "Harbor Bond Fund reports market price of $24.18 and NAV of $24.06 as of 2026-06-10. Prior day market price was $24.05 and prior day NAV was $24.04.",
        "provenance": false
      },
      {
        "label": "premium discount policy",
        "title": "ETF Premium Discount Policy",
        "content": "Premium or discount equals market price divided by NAV minus 1. A premium or discount greater than 0.50% in absolute value must be escalated to ETF Capital Markets.",
        "provenance": false
      },
      {
        "label": "desk output request",
        "title": "Desk Output Request",
        "content": "The desk wants a pricing note with current day and prior day premium or discount, change in basis points, and escalation status.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 2,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 3,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 4,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; it must not round, rename, or paraphrase them in a way that changes the controlling source meaning."
      },
      {
        "no": 5,
        "family": "Decision and Boundary",
        "tag": "DB6",
        "check_type": "LLM",
        "text": "When the task requires classification, status, or risk-level labeling, the response must use the explicit category labels supported by the packet and must not substitute a softer or unlisted label."
      },
      {
        "no": 6,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP1",
        "check_type": "rule",
        "text": "The response must use at least three level-2 Markdown headings."
      }
    ]
  },
  {
    "sample_no": 5,
    "item_id": "tonight_hard_line_067",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Reconciliation",
    "work_product": "cash ledger break table",
    "instruction": "Build a cash ledger break table for Oakline Treasury Sweep. Start from the bank statement and internal cash ledger balances, subtract only the documented deposit in transit, compute the adjusted cash variance, apply the $100 open-break threshold, assign the owner, include an aging bucket, and list the records that must remain traceable. Use only the provided materials and do not mark the item reconciled if the adjusted break remains above threshold. Produce the cash ledger break table under an audit-ready compliance escalation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the cash ledger break table with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Structure the cash ledger break table with at least three level-2 Markdown headings that start with ##. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Review file 67: Reconciliation\n\nAnalyst instructions\nThe answer needs to cover this request: a cash ledger break table for Oakline Treasury Sweep. Start from the bank statement and internal cash ledger balances, subtract only the documented deposit in transit, compute the adjusted cash variance, apply the $100 open-break threshold, assign the owner, include an aging bucket, and list the records that must remain traceable. Use only the provided materials and do not mark the item reconciled if the adjusted break remains above threshold.\n\nMaterials supplied\ndraw request package (Oakline Cash Ledger Extract)\nAccount: Oakline Treasury Sweep. Reconciliation date: 2026-05-29. Internal cash ledger closing balance: $1,245,880.40. Bank statement closing balance: $1,246,130.40. Open deposit in transit: $150.00. No approved write-off memo is attached. Cash break owner in the operations matrix: Treasury Operations.\n\nconstruction schedule -- Cash variance equals bank statement balance minus internal cash ledger balance, adjusted only for documented timing items. A cash item is Open when the adjusted absolute variance is greater than $100. Items over $100 with no write-off memo must not be marked reconciled. The workpaper must show ledger balance, bank balance, documented timing item, adjusted variance, status, owner, and aging bucket.\n\nName for this material: inspection evidence. Content: § 240.17a–4 17 CFR Ch. Finding Aids section of the printed volume through (31), and analogous records and at www.govinfo.gov. created pursuant to § 240.17a–3(e). (2) All check books, bank statements, § 240.17a–4 Records to be preserved by certain exchange members, brokers cancelled checks and cash reconcili- (3) All bills receivable or payable (or This section applies to the following copies thereof), paid or unpaid, relating types of entities: A member of a na- to the member, broker or dealer’s busi- tional securities exchange who trans- ness as such. acts a business in securities directly (4) Originals of all communications with others than members of a na- received and copies of all communica- tional securities exchange; a broker or tions sent (and any approvals thereof) dealer who transacts a business in se- by the member, broker or dealer (in- curities through the medium of a mem- cluding inter-office memoranda and ber of a national securities exchange; a communications) relating to its busi- broker or dealer, including an OTC de- ness as such, including all communica- rivatives dealer as that term is defined tions which are subject to rules of a in § 240.3b–12, registered pursuant to self-regulatory organization of which section 15 of the Act (15 U.S.C. the member, broker or dealer is a security-based swap dealer registered pursuant to section 15F of the Act (15 member regarding communications 78o–10) that is also a broker or with the public. As used in this para- dealer, including an OTC derivatives graph (b)(4), the term communications dealer, registered pursuant to section includes sales scripts and recordings of 15 of the Act; and a major security- telephone calls required to be main- based swap participant registered pur- tained pursuant to section 15F(g)(1) of suant to section 15F of the Act that is the Act (15 U.S.C. also a broker or dealer, including an (5) All trial balances, computations OTC derivatives dealer, registered pur- of aggregate indebtedness and net cap- suant to section 15 of the Act. Section ital (and working papers in connection 240.18a–6 (rather than this section) ap- therewith), financial statements, plies to the following types of entities: branch office reconciliations, and in- A security-based swap dealer registered ternal audit working papers, relating pursuant to section 15F of the Act that to the member, broker or dealer’s busi- is not also a broker or dealer, including ness as such. an OTC derivatives dealer, registered (6) All guarantees of accounts and all pursuant to section 15 of the Act; and a powers of attorney and other evidence major security-based swap participant of the granting of any discretionary registered pursuant to section 15F of authority given in respect of any ac- the Act that is not also a broker or count, and copies of resolutions em- dealer, including an OTC derivatives powering an agent to act on behalf of a dealer, registered pursuant to section corporation. 15 of the Act. (7) All written agreements (or copies (a) Every member, broker or dealer thereof) entered into by such member, subject to § 240.17a–3 must preserve for broker or dealer relating to its busi- a period of not less than 6 years, the ness as such, including agreements first two years in an easily accessible with respect to any account.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nBuild a cash ledger break table for Oakline Treasury Sweep. Start from the bank statement and internal cash ledger balances, subtract only the documented deposit in transit, compute the adjusted cash variance, apply the $100 open-break threshold, assign the owner, include an aging bucket, and list the records that must remain traceable. Use only the provided materials and do not mark the item reconciled if the adjusted break remains above threshold. Produce the cash ledger break table under an audit-ready compliance escalation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the cash ledger break table with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Structure the cash ledger break table with at least three level-2 Markdown headings that start with ##. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "draw request package",
        "title": "Oakline Cash Ledger Extract",
        "content": "Account: Oakline Treasury Sweep. Reconciliation date: 2026-05-29. Internal cash ledger closing balance: $1,245,880.40. Bank statement closing balance: $1,246,130.40. Open deposit in transit: $150.00. No approved write-off memo is attached. Cash break owner in the operations matrix: Treasury Operations.",
        "provenance": false
      },
      {
        "label": "construction schedule",
        "title": "Cash Reconciliation Procedure REC-CASH",
        "content": "Cash variance equals bank statement balance minus internal cash ledger balance, adjusted only for documented timing items. A cash item is Open when the adjusted absolute variance is greater than $100. Items over $100 with no write-off memo must not be marked reconciled. The workpaper must show ledger balance, bank balance, documented timing item, adjusted variance, status, owner, and aging bucket.",
        "provenance": false
      },
      {
        "label": "inspection evidence",
        "title": "Books and Records Traceability Excerpt",
        "content": "§ 240.17a–4 17 CFR Ch. Finding Aids section of the printed volume through (31), and analogous records and at www.govinfo.gov. created pursuant to § 240.17a–3(e). (2) All check books, bank statements, § 240.17a–4 Records to be preserved by certain exchange members, brokers cancelled checks and cash reconcili- (3) All bills receivable or payable (or This section applies to the following copies thereof), paid or unpaid, relating types of entities: A member of a na- to the member, broker or dealer’s busi- tional securities exchange who trans- ness as such. acts a business in securities directly (4) Originals of all communications with others than members of a na- received and copies of all communica- tional securities exchange; a broker or tions sent (and any approvals thereof) dealer who transacts a business in se- by the member, broker or dealer (in- curities through the medium of a mem- cluding inter-office memoranda and ber of a national securities exchange; a communications) relating to its busi- broker or dealer, including an OTC de- ness as such, including all communica- rivatives dealer as that term is defined tions which are subject to rules of a in § 240.3b–12, registered pursuant to self-regulatory organization of which section 15 of the Act (15 U.S.C. the member, broker or dealer is a security-based swap dealer registered pursuant to section 15F of the Act (15 member regarding communications 78o–10) that is also a broker or with the public. As used in this para- dealer, including an OTC derivatives graph (b)(4), the term communications dealer, registered pursuant to section includes sales scripts and recordings of 15 of the Act; and a major security- telephone calls required to be main- based swap participant registered pur- tained pursuant to section 15F(g)(1) of suant to section 15F of the Act that is the Act (15 U.S.C. also a broker or dealer, including an (5) All trial balances, computations OTC derivatives dealer, registered pur- of aggregate indebtedness and net cap- suant to section 15 of the Act. Section ital (and working papers in connection 240.18a–6 (rather than this section) ap- therewith), financial statements, plies to the following types of entities: branch office reconciliations, and in- A security-based swap dealer registered ternal audit working papers, relating pursuant to section 15F of the Act that to the member, broker or dealer’s busi- is not also a broker or dealer, including ness as such. an OTC derivatives dealer, registered (6) All guarantees of accounts and all pursuant to section 15 of the Act; and a powers of attorney and other evidence major security-based swap participant of the granting of any discretionary registered pursuant to section 15F of authority given in respect of any ac- the Act that is not also a broker or count, and copies of resolutions em- dealer, including an OTC derivatives powering an agent to act on behalf of a dealer, registered pursuant to section corporation. 15 of the Act. (7) All written agreements (or copies (a) Every member, broker or dealer thereof) entered into by such member, subject to § 240.17a–3 must preserve for broker or dealer relating to its busi- a period of not less than 6 years, the ness as such, including agreements first two years in an easily accessible with respect to any account.",
        "provenance": true
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The table must use only the provided materials."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB4",
        "check_type": "LLM",
        "text": "The table must not mark the item reconciled if the adjusted break remains above threshold."
      },
      {
        "no": 3,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 4,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 5,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 6,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; it must not round, rename, or paraphrase them in a way that changes the controlling source meaning."
      },
      {
        "no": 7,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "If approval, authorization, authority evidence, or a review prerequisite controls the outcome, the response must name the required approver or prerequisite and must not imply approval while that prerequisite is missing."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP1",
        "check_type": "rule",
        "text": "The response must use at least three level-2 Markdown headings."
      }
    ]
  },
  {
    "sample_no": 6,
    "item_id": "tonight_hard_line_326",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Reconciliation",
    "work_product": "FX cash difference analysis",
    "instruction": "Write an FX cash difference analysis for Ridgeway Global Balanced Fund. Convert the EUR cash balance using the control FX rate, compare that recomputed USD value with the internal ledger USD equivalent, show the impact of the ledger rate versus the control rate, test the $500 FX-break threshold, and cite the document that supplied each rate. Produce the FX cash difference analysis under an audit-ready diligence challenge posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; keep hypothetical, projected, target, testimonial, endorsement, ranking, sales-claim, and performance language inside the boundary supported by the packet; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the FX cash difference analysis with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Desk note 326: FX cash difference analysis\nEvidence in the file\nintake notes\nTitle: Ridgeway FX Cash Sources\nFund: Ridgeway Global Balanced Fund. As-of date: 2026-06-02. EUR cash per custodian: EUR 725,000. Internal ledger USD equivalent: $789,250. Operations FX rate used by the ledger: 1.0880 USD/EUR. Reconciliation control rate: 1.0900 USD/EUR. FX difference owner: Fund Accounting.\n\nprofile sufficiency standard; For foreign-currency cash, recompute USD equivalent using the control FX rate and compare it with the internal ledger USD equivalent. Differences greater than $500 are open FX breaks. The analysis must show foreign amount, ledger rate, control rate, recomputed USD value, USD difference, threshold conclusion, owner, and source-rate citation.\n\nfirm checklist\nSEA Rule 17a-4 recordkeeping excerpt: operations workpapers should remain traceable to the books and records used in the review, including ledgers, blotters, confirmations, account records, memoranda, written agreements, and related communications. For this synthetic reconciliation task, the excerpt is used only as a record-retention and traceability source.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nWork product needed\nThe reviewer needs the following: an FX cash difference analysis for Ridgeway Global Balanced Fund. Convert the EUR cash balance using the control FX rate, compare that recomputed USD value with the internal ledger USD equivalent, show the impact of the ledger rate versus the control rate, test the $500 FX-break threshold, and cite the document that supplied each rate.\n\nFinal work-product request\nWrite an FX cash difference analysis for Ridgeway Global Balanced Fund. Convert the EUR cash balance using the control FX rate, compare that recomputed USD value with the internal ledger USD equivalent, show the impact of the ledger rate versus the control rate, test the $500 FX-break threshold, and cite the document that supplied each rate. Produce the FX cash difference analysis under an audit-ready diligence challenge posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; keep hypothetical, projected, target, testimonial, endorsement, ranking, sales-claim, and performance language inside the boundary supported by the packet; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the FX cash difference analysis with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "intake notes",
        "title": "Ridgeway FX Cash Sources",
        "content": "Fund: Ridgeway Global Balanced Fund. As-of date: 2026-06-02. EUR cash per custodian: EUR 725,000. Internal ledger USD equivalent: $789,250. Operations FX rate used by the ledger: 1.0880 USD/EUR. Reconciliation control rate: 1.0900 USD/EUR. FX difference owner: Fund Accounting.",
        "provenance": false
      },
      {
        "label": "profile sufficiency standard",
        "title": "Foreign-Currency Cash Reconciliation Policy",
        "content": "For foreign-currency cash, recompute USD equivalent using the control FX rate and compare it with the internal ledger USD equivalent. Differences greater than $500 are open FX breaks. The analysis must show foreign amount, ledger rate, control rate, recomputed USD value, USD difference, threshold conclusion, owner, and source-rate citation.",
        "provenance": false
      },
      {
        "label": "firm checklist",
        "title": "Records Excerpt",
        "content": "SEA Rule 17a-4 recordkeeping excerpt: operations workpapers should remain traceable to the books and records used in the review, including ledgers, blotters, confirmations, account records, memoranda, written agreements, and related communications. For this synthetic reconciliation task, the excerpt is used only as a record-retention and traceability source.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 2,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 3,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 4,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; it must not round, rename, or paraphrase them in a way that changes the controlling source meaning."
      },
      {
        "no": 5,
        "family": "Decision and Boundary",
        "tag": "DB8",
        "check_type": "LLM",
        "text": "The response must not convert hypothetical, projected, target, testimonial, endorsement, ranking, or sales-claim language into a current, certain, approved, or substantiated performance claim unless the packet supports that boundary."
      },
      {
        "no": 6,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include a Markdown table with columns Evidence, Test, Result, and Action."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must be between 180 and 430 words."
      }
    ]
  },
  {
    "sample_no": 7,
    "item_id": "tonight_hard_swapin_027",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Board / regulatory reporting",
    "work_product": "product governance committee report",
    "instruction": "Write a product governance committee report for Newbridge Advisory Platform. Classify each watched product as Continue, Watch with conditions, or Suspend new sales, apply the complaint, concentration, and training triggers, list required conditions or actions, and avoid stating that any product has been terminated. Produce the product governance committee report under an audit-ready credit committee posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; use only packet-supported category, status, classification, or risk-level labels; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the product governance committee report with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Case file 274: Product governance committee report\n\nReviewer request\nPlease complete this request: Write a product governance committee report for Newbridge Advisory Platform. Classify each watched product as Continue, Watch with conditions, or Suspend new sales, apply the complaint, concentration, and training triggers, list required conditions or actions, and avoid stating that any product has been terminated.\n\nEvidence in the file\nproduct governance metrics -- Entity: Newbridge Advisory Platform. Period: May 2026. Products under watch: Structured Note Series A, Non-traded REIT Income Fund. Complaints: Structured Note Series A has 7 complaints; Non-traded REIT Income Fund has 2 complaints. Sales concentration: Structured Note Series A 18% of new sales; watch threshold 15%. Training completion for Non-traded REIT Income Fund: 88%; required 95%.\n\nName for this material: governance committee rules. Content: The committee report must classify each watched product as Continue, Watch with conditions, or Suspend new sales. Suspend new sales is required if both complaint count exceeds 5 and sales concentration exceeds 15%. Watch with conditions is required for training completion below 95%.\n\naction log (Action Log)\nProposed conditions: additional representative training, updated risk disclosure, and sales supervision review. No product termination decision has been approved.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nWrite a product governance committee report for Newbridge Advisory Platform. Classify each watched product as Continue, Watch with conditions, or Suspend new sales, apply the complaint, concentration, and training triggers, list required conditions or actions, and avoid stating that any product has been terminated. Produce the product governance committee report under an audit-ready credit committee posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; use only packet-supported category, status, classification, or risk-level labels; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the product governance committee report with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "product governance metrics",
        "title": "Product Governance Metrics",
        "content": "Entity: Newbridge Advisory Platform. Period: May 2026. Products under watch: Structured Note Series A, Non-traded REIT Income Fund. Complaints: Structured Note Series A has 7 complaints; Non-traded REIT Income Fund has 2 complaints. Sales concentration: Structured Note Series A 18% of new sales; watch threshold 15%. Training completion for Non-traded REIT Income Fund: 88%; required 95%.",
        "provenance": false
      },
      {
        "label": "governance committee rules",
        "title": "Governance Committee Rules",
        "content": "The committee report must classify each watched product as Continue, Watch with conditions, or Suspend new sales. Suspend new sales is required if both complaint count exceeds 5 and sales concentration exceeds 15%. Watch with conditions is required for training completion below 95%.",
        "provenance": false
      },
      {
        "label": "action log",
        "title": "Action Log",
        "content": "Proposed conditions: additional representative training, updated risk disclosure, and sales supervision review. No product termination decision has been approved.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Decision and Boundary",
        "tag": "DB4",
        "check_type": "LLM",
        "text": "The report must avoid stating that any product has been terminated."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 3,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 4,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 5,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; it must not round, rename, or paraphrase them in a way that changes the controlling source meaning."
      },
      {
        "no": 6,
        "family": "Decision and Boundary",
        "tag": "DB6",
        "check_type": "LLM",
        "text": "When the task requires classification, status, or risk-level labeling, the response must use the explicit category labels supported by the packet and must not substitute a softer or unlisted label."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include at least two Markdown blockquote lines."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must contain at least eight complete sentences."
      }
    ]
  },
  {
    "sample_no": 8,
    "item_id": "tonight_hard_swapin_047",
    "workflow": "Execution, Monitoring, Reporting, and Operations",
    "task": "Trade / loan / investment execution check",
    "work_product": "allocation implementation variance table",
    "instruction": "Prepare an allocation implementation variance table for Riverton Family IPS. Recalculate each executed sleeve as a percentage of total portfolio value, compare it with the approved target, compute percentage-point variance, flag sleeves outside the 1.0 percentage-point tolerance, test the alternatives restriction, and conclude Implemented as approved or Implementation exception. Use visible material labels for the target and executed amounts. Produce the allocation implementation variance table under an audit-ready controller review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the allocation implementation variance table with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Review file 481: Allocation implementation variance table\n\nAnalyst instructions\nThe answer needs to cover this request: Prepare an allocation implementation variance table for Riverton Family IPS. Recalculate each executed sleeve as a percentage of total portfolio value, compare it with the approved target, compute percentage-point variance, flag sleeves outside the 1.0 percentage-point tolerance, test the alternatives restriction, and conclude Implemented as approved or Implementation exception. Use visible material labels for the target and executed amounts.\n\nMaterials supplied\nriverton approved allocation -- Riverton Family IPS implementation approval for 2026-06-20: total portfolio value 4,000,000. Approved allocation: Core equity 1,800,000 target 45.0%; municipal bonds 1,400,000 target 35.0%; alternatives 600,000 target 15.0%; cash 200,000 target 5.0%. Client restriction: alternatives must not exceed 15.0%.\n\nName for this material: riverton executed allocation. Content: Executed allocation: Core equity 1,760,000; municipal bonds 1,360,000; alternatives 720,000; cash 160,000. Implementation tolerance is plus or minus 1.0 percentage point from approved target. Any sleeve outside tolerance or violating a client restriction is an Implementation exception.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nPrepare an allocation implementation variance table for Riverton Family IPS. Recalculate each executed sleeve as a percentage of total portfolio value, compare it with the approved target, compute percentage-point variance, flag sleeves outside the 1.0 percentage-point tolerance, test the alternatives restriction, and conclude Implemented as approved or Implementation exception. Use visible material labels for the target and executed amounts. Produce the allocation implementation variance table under an audit-ready controller review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the allocation implementation variance table with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "riverton approved allocation",
        "title": "Riverton Approved Allocation",
        "content": "Riverton Family IPS implementation approval for 2026-06-20: total portfolio value 4,000,000. Approved allocation: Core equity 1,800,000 target 45.0%; municipal bonds 1,400,000 target 35.0%; alternatives 600,000 target 15.0%; cash 200,000 target 5.0%. Client restriction: alternatives must not exceed 15.0%.",
        "provenance": false
      },
      {
        "label": "riverton executed allocation",
        "title": "Riverton Executed Allocation",
        "content": "Executed allocation: Core equity 1,760,000; municipal bonds 1,360,000; alternatives 720,000; cash 160,000. Implementation tolerance is plus or minus 1.0 percentage point from approved target. Any sleeve outside tolerance or violating a client restriction is an Implementation exception.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "The response must use visible material labels for the target and executed amounts."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 3,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 4,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 5,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "If approval, authorization, authority evidence, or a review prerequisite controls the outcome, the response must name the required approver or prerequisite and must not imply approval while that prerequisite is missing."
      },
      {
        "no": 6,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include a Markdown table with columns Evidence, Test, Result, and Action."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must be between 180 and 430 words."
      }
    ]
  },
  {
    "sample_no": 9,
    "item_id": "tonight_hard_line_311",
    "workflow": "Intake and Profiling",
    "task": "Client risk profiling",
    "work_product": "risk profile evidence map",
    "instruction": "Prepare a risk profile evidence map for Noah Singh's account review. For each profile conclusion, map it to the supporting field or say unsupported; include no narrative paragraphs; and flag any conclusion that relies on advisor memory rather than a document. Produce the risk profile evidence map under an audit-ready operations handoff posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; for any comparison, ranking, alternative, scenario, or trade-off, state the comparison basis, source inputs, result, and decision implication; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the risk profile evidence map with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Review request 311 - Client risk profiling\n\nAnswer requirements\nUse the file contents to address this: a risk profile evidence map for Noah Singh's account review. For each profile conclusion, map it to the supporting field or say unsupported; include no narrative paragraphs; and flag any conclusion that relies on advisor memory rather than a document.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nReview packet contents\ninvestment memo excerpt; Know Your Customer | FINRA.org FINRA Data provides non-commercial use of data, specifically the ability to save data views and create and manage a Bond Watchlist. For Industry Professionals Registered representatives can fulfill Continuing Education requirements, view their industry CRD record and perform other compliance tasks. Firm compliance professionals can access filings and requests, run reports and submit support tickets. For Case Participants Arbitration and mediation case participants and FINRA neutrals can view case information and submit documents through this Dispute Resolution Portal. Need Help? | Check System Status Log In to other FINRA systems Rules & Guidance R&G Section 1 FINRA Manual Interpreting the Rules Frequently Asked Questions Interpretive Questions R&G Section 2 The Rulemaking Process Rule Filing Status Report Requests for Comments Regulatory Policy Agenda Rulebook Consolidation R&G Section 3 Adjudications & Decisions National Adjudicatory Council (NAC) Office of Hearing Officers (OHO) R&G Section 4 Enforcement Disciplinary Actions Online Monthly Disciplinary Actions Individuals Barred by FINRA Registration, Exams & CE Registration section 1 Registration Capital Acquisition Brokers Registration Section 2 Qualification Exams Securities Industry Essentials Exam (SIE) Continuing Education (CE) View a Regulatory Element Learning Plan Registration Section 3 Registration Systems Financial Professional Gateway (FinPro) Financial Industry Networking Directory (FIND) Events & Training Events & Training Section 1 Upcoming Events FINRA Crypto and Blockchain Education Program FINRA Certified Regulatory and Compliance Professional (CRCP)® Program Financial Learning Experience (FLEX) Technical & Navigational Webinars Filing & Reporting Filing & Reporting Section 1 FINRA Gateway Financial Intelligence Fusion Center (FIFC) Market Transparency Reporting Tools Regulatory Filing Systems Compliance Tools Compliance Tools Section 1 Anti-Money Laundering Template Cybersecurity Checklist Weekly Update Email Archive Membership Application Program (MAP) Tools For Investors For Investors Section 1 Investor Insights For Investors Section 2 Investing Investment Strategies Working With an Investment Professional Safeguard Your Identity For Investors Section 3 For the Military FINRA Securities Helpline for Seniors Dispute Resolution Services Avenues for Recovery of Losses FINRA Data provides non-commercial use of data, specifically the ability to save data views and create and manage a Bond Watchlist. For Industry Professionals Registered representatives can fulfill Continuing Education requirements, view their industry CRD record and perform other compliance tasks. Firm compliance professionals can access filings and requests, run reports and submit support tickets. For Case Participants Arbitration and mediation case participants and FINRA neutrals can view case information and submit documents through this Dispute Resolution Portal. Need Help? | Check System Status Log In to other FINRA systems Font Awesome fontawesome.com --> Every member shall use reasonable diligence, in regard to the opening and maintenance of every account, to know (and retain) the essential facts concerning every customer and concerning the authority of each person acting on behalf of such customer. • • • Supplementary Material: -------------- For purposes of this Rule, facts \"essential\" to \"knowing the customer\" are those required to (a) effectively service the customer's account, (b) act in accordance with any special handling instructions for the account, (c) understand the authority of each person acting on behalf of the customer, and (d) comply with applicable laws, regulations, and rules. Adopted by SR-FINRA-2010-039 and amended by SR-FINRA-2011-016 eff. Selected Notices: 11-02 , 11-25 , 12-25 . Regulatory Notice 12-25 Additional Guidance on FINRA’s New Suitability Rule Regulatory Notice 11-25 New Implementation Date for and Additional Guidance on the Consolidated FINRA Rules Governing Know-Your-Customer and Suitability Obligations Regulatory Notice 11-02 SEC Approves Consolidated FINRA Rules Governing Know-Your-Customer and Suitability Obligations Book traversal links for 2090. Prohibited Conditions Relating to Expungement of Customer Dispute TRANSACTIONS WITH CUSTOMERS › Disclaimer: The summary and detailed topics are only available for 40 FINRA Rules and have been applied as part of the FINRA Rulebook Search Tool™ (FIRST™) prototype. is for informational purposes only and does not provide regulatory or compliance advice. You should always review the relevant rule text and the related guidance to understand your regulatory obligations. Usage or reliance on this tool is not a defense to a failure to comply with FINRA Main Navigation Registration, Exams & CE Securities Helpline for Seniors ® 844-574-3577 (Mon-Fri 9am-5pm ET) File a Regulatory Tip To report on abuse or fraud in the industry Arbitration & Mediation FINRA operates the largest securities dispute resolution forum in the United States\n\nscenario standard\nClient: Noah Singh. Documented fields: objective income with capital preservation; risk tolerance conservative; time horizon 4 years; liquidity need 30% within 12 months; income USD 74,000; liquid net worth USD 180,000. Advisor memory note: 'I remember Noah said he might accept more equity risk.' No signed update or meeting note supports the memory note. Draft conclusion: client is moderate risk because he accepts more equity risk. Draft conclusion: profile has elevated liquidity need. Draft conclusion: account authority is client only.\n\ncommittee boundary: Evidence maps must connect each profile conclusion to a specific supporting field or mark it Unsupported. Advisor memory without a dated note, signed form, or recorded field is not documentary support. Evidence maps should not use narrative paragraphs. If a conclusion is unsupported, flag it for follow-up instead of treating it as established.\n\nFinal work-product request\nPrepare a risk profile evidence map for Noah Singh's account review. For each profile conclusion, map it to the supporting field or say unsupported; include no narrative paragraphs; and flag any conclusion that relies on advisor memory rather than a document. Produce the risk profile evidence map under an audit-ready operations handoff posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; for any comparison, ranking, alternative, scenario, or trade-off, state the comparison basis, source inputs, result, and decision implication; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the risk profile evidence map with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "investment memo excerpt",
        "title": "FINRA Rule 2090 Know Your Customer",
        "content": "Know Your Customer | FINRA.org FINRA Data provides non-commercial use of data, specifically the ability to save data views and create and manage a Bond Watchlist. For Industry Professionals Registered representatives can fulfill Continuing Education requirements, view their industry CRD record and perform other compliance tasks. Firm compliance professionals can access filings and requests, run reports and submit support tickets. For Case Participants Arbitration and mediation case participants and FINRA neutrals can view case information and submit documents through this Dispute Resolution Portal. Need Help? | Check System Status Log In to other FINRA systems Rules & Guidance R&G Section 1 FINRA Manual Interpreting the Rules Frequently Asked Questions Interpretive Questions R&G Section 2 The Rulemaking Process Rule Filing Status Report Requests for Comments Regulatory Policy Agenda Rulebook Consolidation R&G Section 3 Adjudications & Decisions National Adjudicatory Council (NAC) Office of Hearing Officers (OHO) R&G Section 4 Enforcement Disciplinary Actions Online Monthly Disciplinary Actions Individuals Barred by FINRA Registration, Exams & CE Registration section 1 Registration Capital Acquisition Brokers Registration Section 2 Qualification Exams Securities Industry Essentials Exam (SIE) Continuing Education (CE) View a Regulatory Element Learning Plan Registration Section 3 Registration Systems Financial Professional Gateway (FinPro) Financial Industry Networking Directory (FIND) Events & Training Events & Training Section 1 Upcoming Events FINRA Crypto and Blockchain Education Program FINRA Certified Regulatory and Compliance Professional (CRCP)® Program Financial Learning Experience (FLEX) Technical & Navigational Webinars Filing & Reporting Filing & Reporting Section 1 FINRA Gateway Financial Intelligence Fusion Center (FIFC) Market Transparency Reporting Tools Regulatory Filing Systems Compliance Tools Compliance Tools Section 1 Anti-Money Laundering Template Cybersecurity Checklist Weekly Update Email Archive Membership Application Program (MAP) Tools For Investors For Investors Section 1 Investor Insights For Investors Section 2 Investing Investment Strategies Working With an Investment Professional Safeguard Your Identity For Investors Section 3 For the Military FINRA Securities Helpline for Seniors Dispute Resolution Services Avenues for Recovery of Losses FINRA Data provides non-commercial use of data, specifically the ability to save data views and create and manage a Bond Watchlist. For Industry Professionals Registered representatives can fulfill Continuing Education requirements, view their industry CRD record and perform other compliance tasks. Firm compliance professionals can access filings and requests, run reports and submit support tickets. For Case Participants Arbitration and mediation case participants and FINRA neutrals can view case information and submit documents through this Dispute Resolution Portal. Need Help? | Check System Status Log In to other FINRA systems Font Awesome fontawesome.com --> Every member shall use reasonable diligence, in regard to the opening and maintenance of every account, to know (and retain) the essential facts concerning every customer and concerning the authority of each person acting on behalf of such customer. • • • Supplementary Material: -------------- For purposes of this Rule, facts \"essential\" to \"knowing the customer\" are those required to (a) effectively service the customer's account, (b) act in accordance with any special handling instructions for the account, (c) understand the authority of each person acting on behalf of the customer, and (d) comply with applicable laws, regulations, and rules. Adopted by SR-FINRA-2010-039 and amended by SR-FINRA-2011-016 eff. Selected Notices: 11-02 , 11-25 , 12-25 . Regulatory Notice 12-25 Additional Guidance on FINRA’s New Suitability Rule Regulatory Notice 11-25 New Implementation Date for and Additional Guidance on the Consolidated FINRA Rules Governing Know-Your-Customer and Suitability Obligations Regulatory Notice 11-02 SEC Approves Consolidated FINRA Rules Governing Know-Your-Customer and Suitability Obligations Book traversal links for 2090. Prohibited Conditions Relating to Expungement of Customer Dispute TRANSACTIONS WITH CUSTOMERS › Disclaimer: The summary and detailed topics are only available for 40 FINRA Rules and have been applied as part of the FINRA Rulebook Search Tool™ (FIRST™) prototype. is for informational purposes only and does not provide regulatory or compliance advice. You should always review the relevant rule text and the related guidance to understand your regulatory obligations. Usage or reliance on this tool is not a defense to a failure to comply with FINRA Main Navigation Registration, Exams & CE Securities Helpline for Seniors ® 844-574-3577 (Mon-Fri 9am-5pm ET) File a Regulatory Tip To report on abuse or fraud in the industry Arbitration & Mediation FINRA operates the largest securities dispute resolution forum in the United States",
        "provenance": true
      },
      {
        "label": "scenario standard",
        "title": "Synthetic Account Review Notes - Noah Singh",
        "content": "Client: Noah Singh. Documented fields: objective income with capital preservation; risk tolerance conservative; time horizon 4 years; liquidity need 30% within 12 months; income USD 74,000; liquid net worth USD 180,000. Advisor memory note: 'I remember Noah said he might accept more equity risk.' No signed update or meeting note supports the memory note. Draft conclusion: client is moderate risk because he accepts more equity risk. Draft conclusion: profile has elevated liquidity need. Draft conclusion: account authority is client only.",
        "provenance": false
      },
      {
        "label": "committee boundary",
        "title": "Synthetic Evidence Mapping Standard",
        "content": "Evidence maps must connect each profile conclusion to a specific supporting field or mark it Unsupported. Advisor memory without a dated note, signed form, or recorded field is not documentary support. Evidence maps should not use narrative paragraphs. If a conclusion is unsupported, flag it for follow-up instead of treating it as established.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "LLM",
        "text": "The response must include no narrative paragraphs."
      },
      {
        "no": 2,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must not treat advisor memory without a dated note, signed form, or recorded field as documentary support."
      },
      {
        "no": 3,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 4,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 5,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 6,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "If approval, authorization, authority evidence, or a review prerequisite controls the outcome, the response must name the required approver or prerequisite and must not imply approval while that prerequisite is missing."
      },
      {
        "no": 7,
        "family": "Quantitative Verification",
        "tag": "QV6",
        "check_type": "LLM",
        "text": "For every requested comparison, ranking, alternative, scenario, or trade-off, the response must state the comparison basis, source inputs, result, and decision implication rather than listing options without a supported ordering or boundary."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include a Markdown table with columns Evidence, Test, Result, and Action."
      },
      {
        "no": 12,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must be between 180 and 430 words."
      }
    ]
  },
  {
    "sample_no": 10,
    "item_id": "tonight_hard_swapin_049",
    "workflow": "Intake and Profiling",
    "task": "Service scope explanation",
    "work_product": "client wording conversion",
    "instruction": "Rewrite the internal draft into client-appropriate wording for Greenline Studio LLC. use only the provided materials. Remove internal jargon and threatening language, accurately list the missing authority and ownership information, and explain that review cannot continue until required information is received. Do not say KYC failed, legal will reject the account, or that a final decision has been made. Produce the client wording conversion under an audit-ready diligence challenge posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any approval, rejection, hold, escalation, exception, classification, recommendation, or boundary, name the controlling trigger and why a softer or opposite outcome is not supported; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; keep hypothetical, projected, target, testimonial, endorsement, ranking, sales-claim, and performance language inside the boundary supported by the packet; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the client wording conversion with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Case file 654: Client wording conversion\n\nReviewer request\nPlease complete this request: Rewrite the internal draft into client-appropriate wording for Greenline Studio LLC. use only the provided materials. Remove internal jargon and threatening language, accurately list the missing authority and ownership information, and explain that review cannot continue until required information is received. Do not say KYC failed, legal will reject the account, or that a final decision has been made.\n\nEvidence in the file\nfinra rule (FINRA Rule 2090 Know Your Customer)\nFINRA Rule 2090 says a member must use reasonable diligence, when opening and maintaining an account, to know and retain the essential facts concerning every customer and the authority of each person acting on behalf of the customer. Essential facts include facts needed to service the account, follow special handling instructions, understand authority, and comply with applicable laws, regulations, and rules.\n\ninternal -- Internal draft says: 'Account is blocked because KYC failed. Client has not proven authority and BO file is deficient. Tell them legal will reject it unless they send the missing papers today.' File facts: Greenline Studio LLC provided articles of organization and W-9. Missing: manager consent authorizing account opening; beneficial-owner percentages for two members; residential address for control person Nia Patel. Screening is not complete. No legal review has occurred.\n\nName for this material: client wording policy. Content: Client communications must avoid internal jargon such as KYC failed, BO file, blocked, deficient, and legal will reject. Staff may say the file is not yet complete, specify the missing items, and explain that review cannot continue until required information is received. Staff must not threaten rejection, state a legal conclusion, or imply a final decision before review is complete.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nRewrite the internal draft into client-appropriate wording for Greenline Studio LLC. use only the provided materials. Remove internal jargon and threatening language, accurately list the missing authority and ownership information, and explain that review cannot continue until required information is received. Do not say KYC failed, legal will reject the account, or that a final decision has been made. Produce the client wording conversion under an audit-ready diligence challenge posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any approval, rejection, hold, escalation, exception, classification, recommendation, or boundary, name the controlling trigger and why a softer or opposite outcome is not supported; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; keep hypothetical, projected, target, testimonial, endorsement, ranking, sales-claim, and performance language inside the boundary supported by the packet; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the client wording conversion with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "finra rule",
        "title": "FINRA Rule 2090 Know Your Customer",
        "content": "FINRA Rule 2090 says a member must use reasonable diligence, when opening and maintaining an account, to know and retain the essential facts concerning every customer and the authority of each person acting on behalf of the customer. Essential facts include facts needed to service the account, follow special handling instructions, understand authority, and comply with applicable laws, regulations, and rules.",
        "provenance": false
      },
      {
        "label": "internal",
        "title": "Synthetic Internal Draft - Greenline Studio LLC",
        "content": "Internal draft says: 'Account is blocked because KYC failed. Client has not proven authority and BO file is deficient. Tell them legal will reject it unless they send the missing papers today.' File facts: Greenline Studio LLC provided articles of organization and W-9. Missing: manager consent authorizing account opening; beneficial-owner percentages for two members; residential address for control person Nia Patel. Screening is not complete. No legal review has occurred.",
        "provenance": false
      },
      {
        "label": "client wording policy",
        "title": "Synthetic Client Wording Policy",
        "content": "Client communications must avoid internal jargon such as KYC failed, BO file, blocked, deficient, and legal will reject. Staff may say the file is not yet complete, specify the missing items, and explain that review cannot continue until required information is received. Staff must not threaten rejection, state a legal conclusion, or imply a final decision before review is complete.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The rewritten wording must use only the provided context."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB2",
        "check_type": "LLM",
        "text": "The wording must explain that review cannot continue until required information is received."
      },
      {
        "no": 3,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "LLM",
        "text": "The wording must not say KYC failed, BO file, blocked, deficient, or legal will reject."
      },
      {
        "no": 4,
        "family": "Decision and Boundary",
        "tag": "DB4",
        "check_type": "LLM",
        "text": "The wording must not state or imply that a final decision has been made."
      },
      {
        "no": 5,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 6,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 7,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "Every approval, rejection, hold, escalation, exception, classification, recommendation, or boundary must name the controlling active-case trigger and state why a softer or opposite outcome is not supported."
      },
      {
        "no": 8,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "If approval, authorization, authority evidence, or a review prerequisite controls the outcome, the response must name the required approver or prerequisite and must not imply approval while that prerequisite is missing."
      },
      {
        "no": 9,
        "family": "Decision and Boundary",
        "tag": "DB8",
        "check_type": "LLM",
        "text": "The response must not convert hypothetical, projected, target, testimonial, endorsement, ranking, or sales-claim language into a current, certain, approved, or substantiated performance claim unless the packet supports that boundary."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 12,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 13,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include at least two Markdown blockquote lines."
      },
      {
        "no": 14,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must contain at least eight complete sentences."
      }
    ]
  },
  {
    "sample_no": 11,
    "item_id": "tonight_hard_swapin_057",
    "workflow": "Intake and Profiling",
    "task": "Client risk profiling",
    "work_product": "onboarding hold note for profile authority gap",
    "instruction": "Create a short onboarding hold note for Victor Chen's profile, focused on whether missing trusted-contact and authority information affects use of the profile. Separate servicing facts from recommendation-use blockers and identify the single fastest document request. Produce the onboarding hold note for profile authority gap under an audit-ready credit committee posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any approval, rejection, hold, escalation, exception, classification, recommendation, or boundary, name the controlling trigger and why a softer or opposite outcome is not supported; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the onboarding hold note for profile authority gap with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Case file 514: Onboarding hold note for profile authority gap\n\nReviewer request\nPlease complete this request: Create a short onboarding hold note for Victor Chen's profile, focused on whether missing trusted-contact and authority information affects use of the profile. Separate servicing facts from recommendation-use blockers and identify the single fastest document request.\n\nEvidence in the file\nfinra rule -- FINRA Rule 2090 states that every member shall use reasonable diligence, in regard to the opening and maintenance of every account, to know and retain the essential facts concerning every customer and concerning the authority of each person acting on behalf of such customer. Essential facts are those required to service the customer's account, act in accordance with any special handling instructions, understand the authority of each person acting on behalf of the customer, and comply with applicable laws, regulations, and rules.\n\nName for this material: profile file. Content: Client: Victor Chen. Individual account. Profile date: 2026-05-19. Objective: capital preservation with income. Risk tolerance: conservative. Liquidity need: 20% within one year. Time horizon: 3 years. Investment experience: bank CDs and bond funds. Trusted contact: blank. Durable power of attorney: client mentioned daughter may have POA, but no document is on file. Account authority field: client only. Advisor wants to use the profile for a new income recommendation tomorrow.\n\ncontact intake procedure (Synthetic Authority and Trusted Contact Intake Procedure)\nA missing trusted contact does not by itself block profile completion. An unresolved third-party authority statement blocks use of the profile for new recommendations until the authority status is documented or the client confirms no third-party authority. Servicing may continue under the current profile if the client-only authority field is on file and no third party attempts to act. Intake hold notes must separate servicing status from recommendation-use status.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nCreate a short onboarding hold note for Victor Chen's profile, focused on whether missing trusted-contact and authority information affects use of the profile. Separate servicing facts from recommendation-use blockers and identify the single fastest document request. Produce the onboarding hold note for profile authority gap under an audit-ready credit committee posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any approval, rejection, hold, escalation, exception, classification, recommendation, or boundary, name the controlling trigger and why a softer or opposite outcome is not supported; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the onboarding hold note for profile authority gap with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "finra rule",
        "title": "FINRA Rule 2090 Know Your Customer",
        "content": "FINRA Rule 2090 states that every member shall use reasonable diligence, in regard to the opening and maintenance of every account, to know and retain the essential facts concerning every customer and concerning the authority of each person acting on behalf of such customer. Essential facts are those required to service the customer's account, act in accordance with any special handling instructions, understand the authority of each person acting on behalf of the customer, and comply with applicable laws, regulations, and rules.",
        "provenance": false
      },
      {
        "label": "profile file",
        "title": "Synthetic Profile File - Victor Chen",
        "content": "Client: Victor Chen. Individual account. Profile date: 2026-05-19. Objective: capital preservation with income. Risk tolerance: conservative. Liquidity need: 20% within one year. Time horizon: 3 years. Investment experience: bank CDs and bond funds. Trusted contact: blank. Durable power of attorney: client mentioned daughter may have POA, but no document is on file. Account authority field: client only. Advisor wants to use the profile for a new income recommendation tomorrow.",
        "provenance": false
      },
      {
        "label": "contact intake procedure",
        "title": "Synthetic Authority and Trusted Contact Intake Procedure",
        "content": "A missing trusted contact does not by itself block profile completion. An unresolved third-party authority statement blocks use of the profile for new recommendations until the authority status is documented or the client confirms no third-party authority. Servicing may continue under the current profile if the client-only authority field is on file and no third party attempts to act. Intake hold notes must separate servicing status from recommendation-use status.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Decision and Boundary",
        "tag": "DB2",
        "check_type": "LLM",
        "text": "The response must not treat a missing trusted contact alone as a profile-completion blocker."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 3,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 4,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "Every approval, rejection, hold, escalation, exception, classification, recommendation, or boundary must name the controlling active-case trigger and state why a softer or opposite outcome is not supported."
      },
      {
        "no": 5,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "If approval, authorization, authority evidence, or a review prerequisite controls the outcome, the response must name the required approver or prerequisite and must not imply approval while that prerequisite is missing."
      },
      {
        "no": 6,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include at least two Markdown blockquote lines."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must contain at least eight complete sentences."
      }
    ]
  },
  {
    "sample_no": 12,
    "item_id": "tonight_hard_swapin_065",
    "workflow": "Intake and Profiling",
    "task": "Counterparty / issuer profile construction",
    "work_product": "commodity hedging counterparty profile",
    "instruction": "Profile Moss River Dairy Cooperative for commodity hedging intake using only the supplied context. Summarize commodity exposure, hedge purpose, expected notional, collateral terms, financial capacity, operational contacts, and documentation gaps. Compute expected notional as a percentage of annual commodity purchases, flag Treasury review triggers and documentation gaps, cite visible material labels for concerns, and do not authorize hedge execution. Produce the commodity hedging counterparty profile under an audit-ready operations handoff posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the commodity hedging counterparty profile with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Assignment 551: Commodity hedging counterparty profile\n\nCompletion instructions\nFor the final response, handle this assignment: Profile Moss River Dairy Cooperative for commodity hedging intake using only the supplied context. Summarize commodity exposure, hedge purpose, expected notional, collateral terms, financial capacity, operational contacts, and documentation gaps. Compute expected notional as a percentage of annual commodity purchases, flag Treasury review triggers and documentation gaps, cite visible material labels for concerns, and do not authorize hedge execution.\n\nMaterials supplied\nName for this material: counterparty intake standard. Content: A commodity hedging counterparty profile must cover legal identity, commodity exposure, hedge purpose, expected notional, collateral terms, margin threshold, financial capacity, operational contacts, and documentation gaps. If expected notional exceeds 25% of annual commodity purchases or collateral threshold exceeds $2 million, the profile must flag a Treasury review trigger. Missing operational contacts or unsigned collateral support annex must be listed as gaps. The profile must not authorize hedge execution.\n\nhedge counterparty file (Synthetic Hedge Counterparty File - Moss River Dairy Cooperative)\nCounterparty: Moss River Dairy Cooperative. Commodity exposure: purchases milk feed inputs and natural gas for processing. Hedge purpose: lock in natural gas costs for winter season. Annual commodity purchases: $64 million. Expected hedge notional: $18 million. Collateral terms: $3 million unsecured threshold proposed; daily margin after threshold. Financial capacity: FY2025 EBITDA $9.4 million, cash $5.8 million. Operational contacts: treasury contact listed; back-office settlement contact missing. Documentation: ISDA signed, collateral support annex in draft and unsigned.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nProfile Moss River Dairy Cooperative for commodity hedging intake using only the supplied context. Summarize commodity exposure, hedge purpose, expected notional, collateral terms, financial capacity, operational contacts, and documentation gaps. Compute expected notional as a percentage of annual commodity purchases, flag Treasury review triggers and documentation gaps, cite visible material labels for concerns, and do not authorize hedge execution. Produce the commodity hedging counterparty profile under an audit-ready operations handoff posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the commodity hedging counterparty profile with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "counterparty intake standard",
        "title": "Synthetic Commodity Hedging Counterparty Intake Standard",
        "content": "A commodity hedging counterparty profile must cover legal identity, commodity exposure, hedge purpose, expected notional, collateral terms, margin threshold, financial capacity, operational contacts, and documentation gaps. If expected notional exceeds 25% of annual commodity purchases or collateral threshold exceeds $2 million, the profile must flag a Treasury review trigger. Missing operational contacts or unsigned collateral support annex must be listed as gaps. The profile must not authorize hedge execution.",
        "provenance": false
      },
      {
        "label": "hedge counterparty file",
        "title": "Synthetic Hedge Counterparty File - Moss River Dairy Cooperative",
        "content": "Counterparty: Moss River Dairy Cooperative. Commodity exposure: purchases milk feed inputs and natural gas for processing. Hedge purpose: lock in natural gas costs for winter season. Annual commodity purchases: $64 million. Expected hedge notional: $18 million. Collateral terms: $3 million unsecured threshold proposed; daily margin after threshold. Financial capacity: FY2025 EBITDA $9.4 million, cash $5.8 million. Operational contacts: treasury contact listed; back-office settlement contact missing. Documentation: ISDA signed, collateral support annex in draft and unsigned.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The response must use only the provided materials."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB4",
        "check_type": "LLM",
        "text": "The response must not provide hedge execution."
      },
      {
        "no": 3,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 4,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 5,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 6,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; it must not round, rename, or paraphrase them in a way that changes the controlling source meaning."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include a Markdown table with columns Evidence, Test, Result, and Action."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must be between 180 and 430 words."
      }
    ]
  },
  {
    "sample_no": 13,
    "item_id": "tonight_hard_line_231",
    "workflow": "Research and Due Diligence",
    "task": "Background screening",
    "work_product": "adverse media recency screen",
    "instruction": "Make an adverse media recency screen for Pinecrest Data Centers. Put each media item into Current, Historical, or Outside review window, apply the High-review or Medium-review severity rule where applicable, cite the date and visible material labels, and state whether the pending claim alone is enough for High-review. Keep older items as context. Produce the adverse media recency screen under an audit-ready operations handoff posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared. Open the adverse media recency screen with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Review request 231 - Background screening\n\nReview packet contents\nrepo collateral file; Pinecrest Data Centers is a fictional counterparty, issuer, vendor, or project party used for a synthetic background screening benchmark item. Screening scope covers entity-level and role-title-level only. The pack intentionally excludes dates of birth, residential addresses, government identifiers, account numbers, and other private personal identifiers.\n\ncounterparty accepted value\nSynthetic screening findings: Timeline as of 2026-05-30: 2024-03-11 cooling outage article with customer credits; 2025-08-09 cybersecurity audit-delay article with no breach allegation; 2026-04-30 pending customer claim for service-level penalties of USD 2.4 million. Sanctions, PEP, and regulatory screens show no hits.\n\ncollateral procedure: Media within 12 months is Current; older than 12 months and up to 36 months is Historical. Current adverse media with a pending monetary claim above USD 1.0 million is High-review. Historical items are retained as context but do not alone drive High-review.\n\nCompletion instructions: Use the file contents to address this: an adverse media recency screen for Pinecrest Data Centers. Put each media item into Current, Historical, or Outside review window, apply the High-review or Medium-review severity rule where applicable, cite the date and visible material labels, and state whether the pending claim alone is enough for High-review. Keep older items as context.\n\nFinal work-product request\nMake an adverse media recency screen for Pinecrest Data Centers. Put each media item into Current, Historical, or Outside review window, apply the High-review or Medium-review severity rule where applicable, cite the date and visible material labels, and state whether the pending claim alone is enough for High-review. Keep older items as context. Produce the adverse media recency screen under an audit-ready operations handoff posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared. Open the adverse media recency screen with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "repo collateral file",
        "title": "Pinecrest Data Centers Background Screening Scope",
        "content": "Pinecrest Data Centers is a fictional counterparty, issuer, vendor, or project party used for a synthetic background screening benchmark item. Screening scope covers entity-level and role-title-level only. The pack intentionally excludes dates of birth, residential addresses, government identifiers, account numbers, and other private personal identifiers.",
        "provenance": false
      },
      {
        "label": "counterparty accepted value",
        "title": "Pinecrest Data Centers Screening Findings",
        "content": "Synthetic screening findings: Timeline as of 2026-05-30: 2024-03-11 cooling outage article with customer credits; 2025-08-09 cybersecurity audit-delay article with no breach allegation; 2026-04-30 pending customer claim for service-level penalties of USD 2.4 million. Sanctions, PEP, and regulatory screens show no hits.",
        "provenance": false
      },
      {
        "label": "collateral procedure",
        "title": "Adverse Media Recency Screen Rule",
        "content": "Media within 12 months is Current; older than 12 months and up to 36 months is Historical. Current adverse media with a pending monetary claim above USD 1.0 million is High-review. Historical items are retained as context but do not alone drive High-review.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The response must use only the supplied documents."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 3,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 4,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 5,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 6,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include a Markdown table with columns Evidence, Test, Result, and Action."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must be between 180 and 430 words."
      }
    ]
  },
  {
    "sample_no": 14,
    "item_id": "tonight_hard_line_339",
    "workflow": "Research and Due Diligence",
    "task": "Earnings review",
    "work_product": "forecast revision note",
    "instruction": "Prepare a forecast revision note for Lattice Health Software. reference Apple material labeled media screen packet only as a comparable benchmark for the difference between target growth and a large public-company growth profile. Use only the provided documents, cite visible material labels for figures and management statements, and Use sections called Reported quarter, Guidance cut bridge, Apple comparison, and Questions for management. Calculate current-quarter revenue growth, gross-margin basis-point change, EPS growth, the full-year guidance midpoint reduction, and how much of the cut is explained by the two cited items. State whether the guidance cut is fully explained by cited items. Do not call the guidance cut fully explained if a residual remains. Produce the forecast revision note under an audit-ready compliance escalation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; for any comparison, ranking, alternative, scenario, or trade-off, state the comparison basis, source inputs, result, and decision implication; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the forecast revision note with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Control ticket 339: Earnings review\n\nAvailable materials\nmedia screen packet (Apple Inc. Q1 2025 Form 10-Q Benchmark Excerpt)\nSECURITIES AND EXCHANGE COMMISSION ☒ QUARTERLY REPORT PURSUANT TO SECTION 13 OR 15(d) OF THE SECURITIES EXCHANGE ACT OF 1934 For the quarterly period ended December 28, 2024 ☐ TRANSITION REPORT PURSUANT TO SECTION 13 OR 15(d) OF THE SECURITIES EXCHANGE ACT OF 1934 For the transition period from to . Commission File Number: 001-36743 (Exact name of Registrant as specified in its charter) California 94-2404110 (State or other jurisdiction of incorporation or organization) (I.R.S. Employer Identification No.) Cupertino , California (Address of principal executive offices) (Zip Code) (Registrant’s telephone number, including area code) Securities registered pursuant to Section 12(b) of the Act: Title of each class Trading symbol(s) Name of each exchange on which registered Common Stock, $0.00001 par value per share AAPL The Nasdaq Stock Market LLC 0.000% Notes due 2025 — The Nasdaq Stock Market LLC 0.875% Notes due 2025 — The Nasdaq Stock Market LLC 1.625% Notes due 2026 — The Nasdaq Stock Market LLC 2.000% Notes due 2027 — The Nasdaq Stock Market LLC 1.375% Notes due 2029 — The Nasdaq Stock Market LLC 3.050% Notes due 2029 — The Nasdaq Stock Market LLC 0.500% Notes due 2031 — The Nasdaq Stock Market LLC 3.600% Notes due 2042 — The Nasdaq Stock Market LLC Indicate by check mark whether the Registrant (1) has filed all reports required to be filed by Section 13 or 15(d) of the Securities Exchange Act of 1934 during the preceding 12 months (or for such shorter period that the Registrant was required to file such reports), and (2) has been subject to such filing requirements for the past 90 days. Indicate by check mark whether the Registrant has submitted electronically every Interactive Data File required to be submitted pursuant to Rule 405 of Regulation S-T (§232.405 of this chapter) during the preceding 12 months (or for such shorter period that the Registrant was required to submit such files). Indicate by check mark whether the Registrant is a large accelerated filer, an accelerated filer, a non-accelerated filer, a smaller reporting company, or an emerging growth company. See the definitions of “large accelerated filer,” “accelerated filer,” “smaller reporting company,” and “emerging growth company” in Rule 12b-2 of the Exchange Act. Large accelerated filer ☒ Accelerated filer ☐ Non-accelerated filer ☐ Smaller reporting company ☐ Emerging growth company ☐ If an emerging growth company, indicate by check mark if the Registrant has elected not to use the extended transition period for complying with any new or revised financial accounting standards provided pursuant to Section 13(a) of the Exchange Act. ☐ Indicate by check mark whether the Registrant is a shell company (as defined in Rule 12b-2 of the Exchange Act). 15,022,073,000 shares of common stock were issued and outstanding as of January 17, 2025 . For the Fiscal Quarter Ended December 28, 2024 Management’s Discussion and Analysis of Financial Condition and Results of Operations Quantitative and Qualitative Disclosures About Market Risk Controls and Procedures Unregistered Sales of Equity Securities and Use of Proceeds Defaults Upon Senior Securities Mine Safety Disclosures PART I — FINANCIAL INFORMATION CONDENSED CONSOLIDATED STATEMENTS OF OPERATIONS (Unaudited) (In millions, except number of shares, which are reflected in thousands, and per-share amounts) Products $ 97,960 $ 96,458 Services 26,340 23,117 Total net sales 124,300 119,575 Products 59,447 58,440 Total cost of sales 66,025 64,720 Gross margin 58,275 54,855 Research and development 8,268 7,696 Selling, general and administrative 7,175 6,786 Total operating expenses 15,443 14,482 Operating income 42,832 40,373 Other income/(expense), net ( 248 ) ( 50 ) Income before provision for income taxes 42,584 40,323 Provision for income taxes 6,254 6,407 Net income $ 36,330 $ 33,916 Diluted $ 2.40 $ 2.18 Shares used in computing earnings per share: Basic 15,081,724 15,509,763 Diluted 15,150,865 15,576,641 See accompanying Notes to Condensed Consolidated Financial Statements. Apple Inc. | Q1 2025 Form 10-Q | 1\n\nrecency rule -- Synthetic earnings release for Lattice Health Software, a fictional healthcare SaaS vendor. Quarter ended March 31, 2026. Revenue was $52.5 million versus $49.0 million in the prior-year quarter. Gross margin was 67.8% versus 69.1%, and diluted EPS was $0.16 versus $0.20. Management lowered full-year revenue guidance from $224.0 million to $216.0 million at the midpoint, citing a $5.5 million customer onboarding slip and $2.0 million of lower professional services demand.\n\nName for this material: severity matrix. Content: Internal instruction: a guidance bridge should start from the reported quarter, bridge to the next-period or full-year midpoint, identify the largest bridge item, and mark unsupported bridge amounts as open questions.\n\nRequested output: The answer needs to cover this request: a forecast revision note for Lattice Health Software. reference Apple material labeled media screen packet only as a comparable benchmark for the difference between target growth and a large public-company growth profile. Rely only on the materials above, cite the source labels for figures and management statements, and Use sections called Reported quarter, Guidance cut bridge, Apple comparison, and Questions for management. Calculate current-quarter revenue growth, gross-margin basis-point change, EPS growth, the full-year guidance midpoint reduction, and how much of the cut is explained by the two cited items. State whether the guidance cut is fully explained by cited items. Do not call the guidance cut fully explained if a residual remains.\n\nFinal work-product request\nPrepare a forecast revision note for Lattice Health Software. reference Apple material labeled media screen packet only as a comparable benchmark for the difference between target growth and a large public-company growth profile. Use only the provided documents, cite visible material labels for figures and management statements, and Use sections called Reported quarter, Guidance cut bridge, Apple comparison, and Questions for management. Calculate current-quarter revenue growth, gross-margin basis-point change, EPS growth, the full-year guidance midpoint reduction, and how much of the cut is explained by the two cited items. State whether the guidance cut is fully explained by cited items. Do not call the guidance cut fully explained if a residual remains. Produce the forecast revision note under an audit-ready compliance escalation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; for any comparison, ranking, alternative, scenario, or trade-off, state the comparison basis, source inputs, result, and decision implication; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the forecast revision note with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "media screen packet",
        "title": "Apple Inc. Q1 2025 Form 10-Q Benchmark Excerpt",
        "content": "SECURITIES AND EXCHANGE COMMISSION ☒ QUARTERLY REPORT PURSUANT TO SECTION 13 OR 15(d) OF THE SECURITIES EXCHANGE ACT OF 1934 For the quarterly period ended December 28, 2024 ☐ TRANSITION REPORT PURSUANT TO SECTION 13 OR 15(d) OF THE SECURITIES EXCHANGE ACT OF 1934 For the transition period from to . Commission File Number: 001-36743 (Exact name of Registrant as specified in its charter) California 94-2404110 (State or other jurisdiction of incorporation or organization) (I.R.S. Employer Identification No.) Cupertino , California (Address of principal executive offices) (Zip Code) (Registrant’s telephone number, including area code) Securities registered pursuant to Section 12(b) of the Act: Title of each class Trading symbol(s) Name of each exchange on which registered Common Stock, $0.00001 par value per share AAPL The Nasdaq Stock Market LLC 0.000% Notes due 2025 — The Nasdaq Stock Market LLC 0.875% Notes due 2025 — The Nasdaq Stock Market LLC 1.625% Notes due 2026 — The Nasdaq Stock Market LLC 2.000% Notes due 2027 — The Nasdaq Stock Market LLC 1.375% Notes due 2029 — The Nasdaq Stock Market LLC 3.050% Notes due 2029 — The Nasdaq Stock Market LLC 0.500% Notes due 2031 — The Nasdaq Stock Market LLC 3.600% Notes due 2042 — The Nasdaq Stock Market LLC Indicate by check mark whether the Registrant (1) has filed all reports required to be filed by Section 13 or 15(d) of the Securities Exchange Act of 1934 during the preceding 12 months (or for such shorter period that the Registrant was required to file such reports), and (2) has been subject to such filing requirements for the past 90 days. Indicate by check mark whether the Registrant has submitted electronically every Interactive Data File required to be submitted pursuant to Rule 405 of Regulation S-T (§232.405 of this chapter) during the preceding 12 months (or for such shorter period that the Registrant was required to submit such files). Indicate by check mark whether the Registrant is a large accelerated filer, an accelerated filer, a non-accelerated filer, a smaller reporting company, or an emerging growth company. See the definitions of “large accelerated filer,” “accelerated filer,” “smaller reporting company,” and “emerging growth company” in Rule 12b-2 of the Exchange Act. Large accelerated filer ☒ Accelerated filer ☐ Non-accelerated filer ☐ Smaller reporting company ☐ Emerging growth company ☐ If an emerging growth company, indicate by check mark if the Registrant has elected not to use the extended transition period for complying with any new or revised financial accounting standards provided pursuant to Section 13(a) of the Exchange Act. ☐ Indicate by check mark whether the Registrant is a shell company (as defined in Rule 12b-2 of the Exchange Act). 15,022,073,000 shares of common stock were issued and outstanding as of January 17, 2025 . For the Fiscal Quarter Ended December 28, 2024 Management’s Discussion and Analysis of Financial Condition and Results of Operations Quantitative and Qualitative Disclosures About Market Risk Controls and Procedures Unregistered Sales of Equity Securities and Use of Proceeds Defaults Upon Senior Securities Mine Safety Disclosures PART I — FINANCIAL INFORMATION CONDENSED CONSOLIDATED STATEMENTS OF OPERATIONS (Unaudited) (In millions, except number of shares, which are reflected in thousands, and per-share amounts) Products $ 97,960 $ 96,458 Services 26,340 23,117 Total net sales 124,300 119,575 Products 59,447 58,440 Total cost of sales 66,025 64,720 Gross margin 58,275 54,855 Research and development 8,268 7,696 Selling, general and administrative 7,175 6,786 Total operating expenses 15,443 14,482 Operating income 42,832 40,373 Other income/(expense), net ( 248 ) ( 50 ) Income before provision for income taxes 42,584 40,323 Provision for income taxes 6,254 6,407 Net income $ 36,330 $ 33,916 Diluted $ 2.40 $ 2.18 Shares used in computing earnings per share: Basic 15,081,724 15,509,763 Diluted 15,150,865 15,576,641 See accompanying Notes to Condensed Consolidated Financial Statements. Apple Inc. | Q1 2025 Form 10-Q | 1",
        "provenance": true
      },
      {
        "label": "recency rule",
        "title": "Lattice Health Software Earnings Source Excerpt",
        "content": "Synthetic earnings release for Lattice Health Software, a fictional healthcare SaaS vendor. Quarter ended March 31, 2026. Revenue was $52.5 million versus $49.0 million in the prior-year quarter. Gross margin was 67.8% versus 69.1%, and diluted EPS was $0.16 versus $0.20. Management lowered full-year revenue guidance from $224.0 million to $216.0 million at the midpoint, citing a $5.5 million customer onboarding slip and $2.0 million of lower professional services demand.",
        "provenance": false
      },
      {
        "label": "severity matrix",
        "title": "Guidance Bridge Review Instruction",
        "content": "Internal instruction: a guidance bridge should start from the reported quarter, bridge to the next-period or full-year midpoint, identify the largest bridge item, and mark unsupported bridge amounts as open questions.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Format and Presentation",
        "tag": "FP1",
        "check_type": "LLM",
        "text": "Use sections called Reported quarter, Guidance cut bridge, Apple comparison, and Questions for management."
      },
      {
        "no": 2,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The output must use only the provided documents."
      },
      {
        "no": 3,
        "family": "Decision and Boundary",
        "tag": "DB4",
        "check_type": "LLM",
        "text": "Do not call the guidance cut fully explained if a residual remains."
      },
      {
        "no": 4,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 5,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 6,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 7,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; it must not round, rename, or paraphrase them in a way that changes the controlling source meaning."
      },
      {
        "no": 8,
        "family": "Quantitative Verification",
        "tag": "QV6",
        "check_type": "LLM",
        "text": "For every requested comparison, ranking, alternative, scenario, or trade-off, the response must state the comparison basis, source inputs, result, and decision implication rather than listing options without a supported ordering or boundary."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 12,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include at least two Markdown blockquote lines."
      },
      {
        "no": 13,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must contain at least eight complete sentences."
      }
    ]
  },
  {
    "sample_no": 15,
    "item_id": "tonight_hard_line_356",
    "workflow": "Research and Due Diligence",
    "task": "Investment due diligence",
    "work_product": "diligence closeout decision grid",
    "instruction": "Produce a diligence closeout decision grid for Atlas Senior Living. Use only the supplied documents, cite visible material labels, and classify each closeout item as Closed, Open, Disputed, or Waiver required. Include audited financials, quality-of-earnings add-back dispute, facility license renewals, employee litigation schedule, insurance certificate, and lender consent. Calculate disputed add-back as a percentage of base-case EBITDA before the add-back, identify the missing licenses and pending lender consent as closing blockers, and do not state that diligence is complete while blockers remain. Produce the diligence closeout decision grid under an audit-ready reconciliation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared; use only packet-supported category, status, classification, or risk-level labels; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the diligence closeout decision grid with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Desk note 356: diligence closeout decision grid\nAvailable materials\nrepo collateral file -- Atlas Senior Living is a fictional assisted-living facility operator. Proposed investment is $55 million preferred equity. Closeout log: audited 2025 financials received; quality-of-earnings report received with a $3.6 million EBITDA add-back dispute; state license renewals received for 11 of 13 facilities; employee litigation schedule not received; insurance certificate received; lender consent for change of control pending. Base-case EBITDA is $22 million before the disputed add-back.\n\nName for this material: counterparty accepted value. Content: A diligence closeout decision grid must classify each item as Closed, Open, Disputed, or Waiver required. Missing facility licenses and pending lender consent are closing blockers. A disputed EBITDA add-back must be shown separately from base EBITDA. The grid must not state that diligence is complete while blockers remain.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nWork product needed\nComplete the work product as follows: a diligence closeout decision grid for Atlas Senior Living. Rely only on the materials above, cite the source labels, and classify each closeout item as Closed, Open, Disputed, or Waiver required. Include audited financials, quality-of-earnings add-back dispute, facility license renewals, employee litigation schedule, insurance certificate, and lender consent. Calculate disputed add-back as a percentage of base-case EBITDA before the add-back, identify the missing licenses and pending lender consent as closing blockers, and do not state that diligence is complete while blockers remain.\n\nFinal work-product request\nProduce a diligence closeout decision grid for Atlas Senior Living. Use only the supplied documents, cite visible material labels, and classify each closeout item as Closed, Open, Disputed, or Waiver required. Include audited financials, quality-of-earnings add-back dispute, facility license renewals, employee litigation schedule, insurance certificate, and lender consent. Calculate disputed add-back as a percentage of base-case EBITDA before the add-back, identify the missing licenses and pending lender consent as closing blockers, and do not state that diligence is complete while blockers remain. Produce the diligence closeout decision grid under an audit-ready reconciliation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared; use only packet-supported category, status, classification, or risk-level labels; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the diligence closeout decision grid with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "repo collateral file",
        "title": "Atlas Senior Living Investment Closeout Log",
        "content": "Atlas Senior Living is a fictional assisted-living facility operator. Proposed investment is $55 million preferred equity. Closeout log: audited 2025 financials received; quality-of-earnings report received with a $3.6 million EBITDA add-back dispute; state license renewals received for 11 of 13 facilities; employee litigation schedule not received; insurance certificate received; lender consent for change of control pending. Base-case EBITDA is $22 million before the disputed add-back.",
        "provenance": false
      },
      {
        "label": "counterparty accepted value",
        "title": "Closeout Decision Rule",
        "content": "A diligence closeout decision grid must classify each item as Closed, Open, Disputed, or Waiver required. Missing facility licenses and pending lender consent are closing blockers. A disputed EBITDA add-back must be shown separately from base EBITDA. The grid must not state that diligence is complete while blockers remain.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The output must use only the supplied documents."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB5",
        "check_type": "LLM",
        "text": "The missing licenses and pending lender consent must be identified as closing blockers."
      },
      {
        "no": 3,
        "family": "Decision and Boundary",
        "tag": "DB4",
        "check_type": "LLM",
        "text": "The grid must not state that diligence is complete while blockers remain."
      },
      {
        "no": 4,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 5,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 6,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 7,
        "family": "Decision and Boundary",
        "tag": "DB6",
        "check_type": "LLM",
        "text": "When the task requires classification, status, or risk-level labeling, the response must use the explicit category labels supported by the packet and must not substitute a softer or unlisted label."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include a Markdown table with columns Evidence, Test, Result, and Action."
      },
      {
        "no": 12,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must be between 180 and 430 words."
      }
    ]
  },
  {
    "sample_no": 16,
    "item_id": "tonight_hard_swapin_076",
    "workflow": "Research and Due Diligence",
    "task": "Investment due diligence",
    "work_product": "investment thesis diligence note",
    "instruction": "Prepare a thesis diligence note for HarborGrid Storage. Use only the supplied documents, cite visible material labels for material facts, and divide the note into Thesis, Supporting evidence, Contradictory or incomplete evidence, Scenario math, Gating assumptions, and Provisional view. Recalculate the enterprise value implied by the preferred equity stake, compare base/downside/upside EBITDA, and treat pending permits, missing consents, and the non-binding tax-credit buyer as unresolved diligence. Do not describe the investment as approved or guaranteed. Produce the investment thesis diligence note under an audit-ready controller review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; separate source-stated facts from reviewer inferences, assumptions, customer statements, or management assertions; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the investment thesis diligence note with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Review file 841: Investment thesis diligence note\n\nAnalyst instructions\nThe answer needs to cover this request: Prepare a thesis diligence note for HarborGrid Storage. Use only the supplied documents, cite visible material labels for material facts, and divide the note into Thesis, Supporting evidence, Contradictory or incomplete evidence, Scenario math, Gating assumptions, and Provisional view. Recalculate the enterprise value implied by the preferred equity stake, compare base/downside/upside EBITDA, and treat pending permits, missing consents, and the non-binding tax-credit buyer as unresolved diligence. Do not describe the investment as approved or guaranteed.\n\nMaterials supplied\nstorage investment snapshot -- HarborGrid Storage is a fictional grid-scale battery developer. Proposed investment: $48.0 million preferred equity for a 22% fully diluted stake. Signed offtake covers 310 MW of a planned 520 MW portfolio. Base-case next-year EBITDA is $18.0 million; downside EBITDA is $10.5 million if two permits slip; upside EBITDA is $24.0 million if all projects reach commercial operation before peak summer demand.\n\nName for this material: harborgrid risk register. Content: Open risks: Eastfield and Mesa permits are pending; interconnection deposits lack letters of credit; tax-credit transfer buyer has provided a non-binding indication only; two leases require landlord consent. CFO expects permit approval by Q3 but provided no written agency correspondence.\n\ncommittee diligence standard (Investment Committee Diligence Standard)\nA thesis diligence note must identify thesis, supporting and weakening evidence, gating assumptions, and scenario math. Pending permits, missing consents, and non-binding indications must be unresolved diligence. Do not state guaranteed returns or final investment approval.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nPrepare a thesis diligence note for HarborGrid Storage. Use only the supplied documents, cite visible material labels for material facts, and divide the note into Thesis, Supporting evidence, Contradictory or incomplete evidence, Scenario math, Gating assumptions, and Provisional view. Recalculate the enterprise value implied by the preferred equity stake, compare base/downside/upside EBITDA, and treat pending permits, missing consents, and the non-binding tax-credit buyer as unresolved diligence. Do not describe the investment as approved or guaranteed. Produce the investment thesis diligence note under an audit-ready controller review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; separate source-stated facts from reviewer inferences, assumptions, customer statements, or management assertions; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the investment thesis diligence note with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include one Markdown table for the audit trail whose header contains the columns Evidence, Test, Result, and Action. Keep the full response between 180 and 430 words. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "storage investment snapshot",
        "title": "HarborGrid Storage Investment Snapshot",
        "content": "HarborGrid Storage is a fictional grid-scale battery developer. Proposed investment: $48.0 million preferred equity for a 22% fully diluted stake. Signed offtake covers 310 MW of a planned 520 MW portfolio. Base-case next-year EBITDA is $18.0 million; downside EBITDA is $10.5 million if two permits slip; upside EBITDA is $24.0 million if all projects reach commercial operation before peak summer demand.",
        "provenance": false
      },
      {
        "label": "harborgrid risk register",
        "title": "HarborGrid Risk Register",
        "content": "Open risks: Eastfield and Mesa permits are pending; interconnection deposits lack letters of credit; tax-credit transfer buyer has provided a non-binding indication only; two leases require landlord consent. CFO expects permit approval by Q3 but provided no written agency correspondence.",
        "provenance": false
      },
      {
        "label": "committee diligence standard",
        "title": "Investment Committee Diligence Standard",
        "content": "A thesis diligence note must identify thesis, supporting and weakening evidence, gating assumptions, and scenario math. Pending permits, missing consents, and non-binding indications must be unresolved diligence. Do not state guaranteed returns or final investment approval.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The output must use only the supplied documents."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB4",
        "check_type": "LLM",
        "text": "The note must not describe the investment as approved or guaranteed."
      },
      {
        "no": 3,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 4,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 5,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 6,
        "family": "Evidence and Grounding",
        "tag": "EG3",
        "check_type": "LLM",
        "text": "The response must separate source-stated facts from reviewer inferences, assumptions, customer statements, or management assertions; it must not present inferred conclusions as source facts."
      },
      {
        "no": 7,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "If approval, authorization, authority evidence, or a review prerequisite controls the outcome, the response must name the required approver or prerequisite and must not imply approval while that prerequisite is missing."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include a Markdown table with columns Evidence, Test, Result, and Action."
      },
      {
        "no": 12,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must be between 180 and 430 words."
      }
    ]
  },
  {
    "sample_no": 17,
    "item_id": "tonight_hard_line_124",
    "workflow": "Risk and Compliance Review",
    "task": "Regulatory issue escalation",
    "work_product": "exam-finding escalation response outline",
    "instruction": "Prepare an exam-finding escalation response outline for ESC-2016 with headings Finding summary, Client impact, Validation plan, Response deadline, Owner, and Open issues. cite visible material labels, decide whether CCO, CFO, and Legal escalation is required, preserve the June 15 2026 response deadline, identify validation gaps, and do not promise a final restitution amount. Produce the exam-finding escalation response outline under an audit-ready reconciliation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared. Open the exam-finding escalation response outline with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Queue item 124: exam-finding escalation response outline\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nWorking file contents\npricing request file -- Rule 206(4)-7 requires registered investment advisers to adopt and implement written policies and procedures reasonably designed to prevent violations of the Advisers Act, review those policies and procedures at least annually for adequacy and effectiveness, and designate a chief compliance officer responsible for administering them. A compliance escalation packet should distinguish a policy deficiency from a concluded legal violation unless the materials state that management has reached that conclusion.\n\nName for this material: market input procedure. Content: Issue type: regulatory exam fee finding. Intake facts: sample review identified 22 client accounts with advisory fee billing errors from 2025 Q4 through 2026 Q1. Estimated excess fees: $38,900. Management agrees the calculation is directionally correct but has not completed account-by-account validation. Response due date in exam letter: 2026-06-15. Missing facts: final restitution amount, root cause, whether similar accounts outside the sample are affected, and draft response owner.\n\nhold/proceed rule\nTitle: Beacon Vale Advisors Escalation Policy Excerpt\nRegulatory examination findings with client fee impact must be escalated to the CCO, CFO, and Legal. The response outline must include finding summary, client impact, validation plan, response deadline, owner, and open issues. Do not promise a final restitution amount before validation is complete.\n\nDecision support request\nComplete the work product as follows: an exam-finding escalation response outline for ESC-2016 with headings Finding summary, Client impact, Validation plan, Response deadline, Owner, and Open issues. Cite the source labels, decide whether CCO, CFO, and Legal escalation is required, preserve the June 15 2026 response deadline, identify validation gaps, and do not promise a final restitution amount.\n\nFinal work-product request\nPrepare an exam-finding escalation response outline for ESC-2016 with headings Finding summary, Client impact, Validation plan, Response deadline, Owner, and Open issues. cite visible material labels, decide whether CCO, CFO, and Legal escalation is required, preserve the June 15 2026 response deadline, identify validation gaps, and do not promise a final restitution amount. Produce the exam-finding escalation response outline under an audit-ready reconciliation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; identify any active breach, exception, waiver need, deficiency, unresolved inconsistency, control gap, or non-compliance indicator rather than treating the workflow as cleared. Open the exam-finding escalation response outline with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "pricing request file",
        "title": "Investment Advisers Act Compliance Program Rule Excerpt",
        "content": "Rule 206(4)-7 requires registered investment advisers to adopt and implement written policies and procedures reasonably designed to prevent violations of the Advisers Act, review those policies and procedures at least annually for adequacy and effectiveness, and designate a chief compliance officer responsible for administering them. A compliance escalation packet should distinguish a policy deficiency from a concluded legal violation unless the materials state that management has reached that conclusion.",
        "provenance": false
      },
      {
        "label": "market input procedure",
        "title": "Beacon Vale Advisors Issue Intake ESC-2016",
        "content": "Issue type: regulatory exam fee finding. Intake facts: sample review identified 22 client accounts with advisory fee billing errors from 2025 Q4 through 2026 Q1. Estimated excess fees: $38,900. Management agrees the calculation is directionally correct but has not completed account-by-account validation. Response due date in exam letter: 2026-06-15. Missing facts: final restitution amount, root cause, whether similar accounts outside the sample are affected, and draft response owner.",
        "provenance": false
      },
      {
        "label": "hold/proceed rule",
        "title": "Beacon Vale Advisors Escalation Policy Excerpt",
        "content": "Regulatory examination findings with client fee impact must be escalated to the CCO, CFO, and Legal. The response outline must include finding summary, client impact, validation plan, response deadline, owner, and open issues. Do not promise a final restitution amount before validation is complete.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The response must use only the supplied documents."
      },
      {
        "no": 2,
        "family": "Format and Presentation",
        "tag": "FP1",
        "check_type": "LLM",
        "text": "The outline must use headings Finding summary, Client impact, Validation plan, Response deadline, Owner, and Open issues."
      },
      {
        "no": 3,
        "family": "Decision and Boundary",
        "tag": "DB4",
        "check_type": "LLM",
        "text": "The response must not promise a final restitution amount."
      },
      {
        "no": 4,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 5,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 6,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 7,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; it must not round, rename, or paraphrase them in a way that changes the controlling source meaning."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include at least two Markdown blockquote lines."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must contain at least eight complete sentences."
      }
    ]
  },
  {
    "sample_no": 18,
    "item_id": "tonight_hard_line_205",
    "workflow": "Risk and Compliance Review",
    "task": "AML red-flag review",
    "work_product": "rapid round-dollar transfer alert",
    "instruction": "Analyze AML-RF-021 as a rapid round-dollar transfer alert. Count incoming and outgoing transfers, calculate total funds in and out, identify same-beneficiary concentration, cite profile mismatches, decide whether escalation is warranted, and list invoice or relationship documents still needed. Produce the rapid round-dollar transfer alert under an audit-ready disclosure-review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; for any deadline, review window, date count, aging bucket, retention period, or as-of-date test, show source dates, formula or comparison, timing status, and business implication; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the rapid round-dollar transfer alert with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Keep the rapid round-dollar transfer alert to between four and nine non-empty paragraphs, counting any table or list as part of the paragraph where it appears. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Matter 205 - AML red-flag review\n\nWork product needed\nFor the final response, handle this assignment: aML-RF-021 as a rapid round-dollar transfer alert. Count incoming and outgoing transfers, calculate total funds in and out, identify same-beneficiary concentration, cite profile mismatches, decide whether escalation is warranted, and list invoice or relationship documents still needed.\n\nReference materials\nName for this material: wrap-fee conversion file. Content: implement AML programs and suspicious activity monitoring and reporting requirements for broker- 3 Rule 17a-8 under the Securities Exchange Act of 1934 (“Exchange Act”) requires broker- The views expressed herein are those of the staff of the Division of Examinations. This Risk Alert is not a rule, regulation, or statement of the Securities and Exchange Commission (the “SEC” or the “Commission”). Commission has neither approved nor disapproved the content of this Risk Alert. This Risk Alert has no legal force or effect: it does not alter or amend applicable law, and it creates no new or additional obligations for any This document was prepared by EXAMS staff and is not legal advice. This Risk Alert discusses certain issues identified in select examinations of a number of broker-dealers completed during the past several years. This Risk Alert does not discuss all types of deficiencies or weaknesses that have been identified by staff. §§ 1829b, 1951-1959; 31 U.S.C. §§ 5311-5314, 5316-5332. AML regulations, which are located at Chapter X, impose a number of additional requirements, such as with respect to customer identification programs, beneficial ownership and customer due diligence, and wire transfer recordkeeping, that this Risk Alert does not discuss. The AML Program Rule and SAR Rule, now codified at 31 C.F.R. § 1023.210 and § 1023.320, respectively, were adopted in 2002 and have since been amended. See, e.g., Financial Crimes Enforcement Network, Confidentiality of Suspicious Activity Reports, 75 Fed. 3, 2010) (amending 31 C.F.R. § 1023.320); Financial Crimes Enforcement Network, Customer Due Diligence Requirements for Financial Institutions, 81 Fed. 29398 (May 11, 2016) (amending 31 C.F.R. organizations’ rules also contain AML requirements. See, e.g., FINRA Rule 3310. dealers to comply with the reporting, recordkeeping, and record retention requirements of the BSA, including those regarding Suspicious Activity Reports (“SARs”). AML Policies and Procedures and Internal Controls Under the AML Program Rule, a broker-dealer is required to establish and implement policies, procedures, and internal controls reasonably designed to, among other things, identify and report suspicious transactions as required by the BSA and its implementing regulations. should be tailored to address the risks associated with a firm’s particular business, taking into account factors such as size, location, activities, customers, and other risks of (or vulnerabilities to) money Moreover, in order to be able to identify suspicious transactions, a broker-dealer should look for indicators of illicit activities (generally referred to as “red flags”) and incorporate those red flags into its policies and procedures. Awareness by firm personnel of red flags and how to respond to those red flags, including escalating awareness of the red flags to appropriate firm personnel, will help ensure that a firm is in a position to identify the circumstances that warrant further due diligence and possible Suspicious Activity Reporting The SAR Rule requires broker-dealers to file with FinCEN a report of any suspicious transaction relevant to a possible violation of law or regulation. Generally, a broker-dealer must file a SAR for any transaction involving funds or other assets of at least $5,000 that are conducted or attempted by, at, or through the broker-dealer and for which the broker-dealer knows, suspects, or has reason to suspect that, among other things, the transaction (or pattern of transactions of which the transaction is a part): (1) involves funds derived from illegal activity or is intended or conducted to hide or disguise funds or assets derived from illegal activity as part of a plan to violate or evade any federal law or (2) is designed to evade any requirements set forth in regulations implementing the BSA; (3) has no business purpose or apparent lawful purpose or is not the sort in which the particular customer would normally be expected to engage, and the broker-dealer knows of no reasonable explanation for the transaction after examining the available facts, including the background and possible purpose of the transaction; or (4) involves use of the broker-dealer to facilitate criminal activity. A broker-dealer is expected to conduct due diligence in determining whether to file a SAR on particular transactions based on the facts existing at the time. Under the SAR Rule’s objective “knows, suspects, or has reason to suspect” standard, a SAR is required if, on the facts existing at the time, a reasonable broker-dealer in similar circumstances would have suspected the transaction was subject to SAR The failure to file a SAR or maintain records as required by the SAR Rule would be a violation of Section 17(a) of the Exchange Act and Rule 17a-8. Alpine Securities Corp., 982 F.3d 68 (2d Cir. broker-dealer’s failure to follow its own AML procedures could also constitute a failure to “document accurately” its AML compliance program in violation of Section 17(a) and Rule 17a-8. 5 A broker-dealer must file a SAR “no later than 30 calendar days after the date of the initial detection … of facts that may constitute a basis for filing a SAR.” 6 In its SAR filing instructions (and various advisories), FinCEN has provided guidance that filers include a clear, complete, and concise narrative of the activity, including what was unusual or irregular that caused\n\ntransaction-cost history\nTitle: Round-Dollar Alert AML-RF-021\nCustomer: Zinc Harbor LLC. Over five business days, the account received four round-dollar incoming wires of $75,000 each from unrelated senders and sent four outgoing wires of $74,500 each to the same foreign beneficiary. KYC expected domestic revenue under $50,000 monthly. No invoices or beneficiary relationship documents are in the file.\n\nservice expectation note; The reviewer must count incoming and outgoing transfers, calculate total in and total out, identify same-beneficiary concentration, and decide whether rapid round-dollar movement should be escalated.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nAnalyze AML-RF-021 as a rapid round-dollar transfer alert. Count incoming and outgoing transfers, calculate total funds in and out, identify same-beneficiary concentration, cite profile mismatches, decide whether escalation is warranted, and list invoice or relationship documents still needed. Produce the rapid round-dollar transfer alert under an audit-ready disclosure-review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; for any deadline, review window, date count, aging bucket, retention period, or as-of-date test, show source dates, formula or comparison, timing status, and business implication; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the rapid round-dollar transfer alert with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Keep the rapid round-dollar transfer alert to between four and nine non-empty paragraphs, counting any table or list as part of the paragraph where it appears. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "wrap-fee conversion file",
        "title": "SEC Risk Alert on Broker-Dealer AML Compliance Issues",
        "content": "implement AML programs and suspicious activity monitoring and reporting requirements for broker- 3 Rule 17a-8 under the Securities Exchange Act of 1934 (“Exchange Act”) requires broker- The views expressed herein are those of the staff of the Division of Examinations. This Risk Alert is not a rule, regulation, or statement of the Securities and Exchange Commission (the “SEC” or the “Commission”). Commission has neither approved nor disapproved the content of this Risk Alert. This Risk Alert has no legal force or effect: it does not alter or amend applicable law, and it creates no new or additional obligations for any This document was prepared by EXAMS staff and is not legal advice. This Risk Alert discusses certain issues identified in select examinations of a number of broker-dealers completed during the past several years. This Risk Alert does not discuss all types of deficiencies or weaknesses that have been identified by staff. §§ 1829b, 1951-1959; 31 U.S.C. §§ 5311-5314, 5316-5332. AML regulations, which are located at Chapter X, impose a number of additional requirements, such as with respect to customer identification programs, beneficial ownership and customer due diligence, and wire transfer recordkeeping, that this Risk Alert does not discuss. The AML Program Rule and SAR Rule, now codified at 31 C.F.R. § 1023.210 and § 1023.320, respectively, were adopted in 2002 and have since been amended. See, e.g., Financial Crimes Enforcement Network, Confidentiality of Suspicious Activity Reports, 75 Fed. 3, 2010) (amending 31 C.F.R. § 1023.320); Financial Crimes Enforcement Network, Customer Due Diligence Requirements for Financial Institutions, 81 Fed. 29398 (May 11, 2016) (amending 31 C.F.R. organizations’ rules also contain AML requirements. See, e.g., FINRA Rule 3310. dealers to comply with the reporting, recordkeeping, and record retention requirements of the BSA, including those regarding Suspicious Activity Reports (“SARs”). AML Policies and Procedures and Internal Controls Under the AML Program Rule, a broker-dealer is required to establish and implement policies, procedures, and internal controls reasonably designed to, among other things, identify and report suspicious transactions as required by the BSA and its implementing regulations. should be tailored to address the risks associated with a firm’s particular business, taking into account factors such as size, location, activities, customers, and other risks of (or vulnerabilities to) money Moreover, in order to be able to identify suspicious transactions, a broker-dealer should look for indicators of illicit activities (generally referred to as “red flags”) and incorporate those red flags into its policies and procedures. Awareness by firm personnel of red flags and how to respond to those red flags, including escalating awareness of the red flags to appropriate firm personnel, will help ensure that a firm is in a position to identify the circumstances that warrant further due diligence and possible Suspicious Activity Reporting The SAR Rule requires broker-dealers to file with FinCEN a report of any suspicious transaction relevant to a possible violation of law or regulation. Generally, a broker-dealer must file a SAR for any transaction involving funds or other assets of at least $5,000 that are conducted or attempted by, at, or through the broker-dealer and for which the broker-dealer knows, suspects, or has reason to suspect that, among other things, the transaction (or pattern of transactions of which the transaction is a part): (1) involves funds derived from illegal activity or is intended or conducted to hide or disguise funds or assets derived from illegal activity as part of a plan to violate or evade any federal law or (2) is designed to evade any requirements set forth in regulations implementing the BSA; (3) has no business purpose or apparent lawful purpose or is not the sort in which the particular customer would normally be expected to engage, and the broker-dealer knows of no reasonable explanation for the transaction after examining the available facts, including the background and possible purpose of the transaction; or (4) involves use of the broker-dealer to facilitate criminal activity. A broker-dealer is expected to conduct due diligence in determining whether to file a SAR on particular transactions based on the facts existing at the time. Under the SAR Rule’s objective “knows, suspects, or has reason to suspect” standard, a SAR is required if, on the facts existing at the time, a reasonable broker-dealer in similar circumstances would have suspected the transaction was subject to SAR The failure to file a SAR or maintain records as required by the SAR Rule would be a violation of Section 17(a) of the Exchange Act and Rule 17a-8. Alpine Securities Corp., 982 F.3d 68 (2d Cir. broker-dealer’s failure to follow its own AML procedures could also constitute a failure to “document accurately” its AML compliance program in violation of Section 17(a) and Rule 17a-8. 5 A broker-dealer must file a SAR “no later than 30 calendar days after the date of the initial detection … of facts that may constitute a basis for filing a SAR.” 6 In its SAR filing instructions (and various advisories), FinCEN has provided guidance that filers include a clear, complete, and concise narrative of the activity, including what was unusual or irregular that caused",
        "provenance": true
      },
      {
        "label": "transaction-cost history",
        "title": "Round-Dollar Alert AML-RF-021",
        "content": "Customer: Zinc Harbor LLC. Over five business days, the account received four round-dollar incoming wires of $75,000 each from unrelated senders and sent four outgoing wires of $74,500 each to the same foreign beneficiary. KYC expected domestic revenue under $50,000 monthly. No invoices or beneficiary relationship documents are in the file.",
        "provenance": false
      },
      {
        "label": "service expectation note",
        "title": "Round-Dollar Transfer Rule",
        "content": "The reviewer must count incoming and outgoing transfers, calculate total in and total out, identify same-beneficiary concentration, and decide whether rapid round-dollar movement should be escalated.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 2,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 3,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 4,
        "family": "Quantitative Verification",
        "tag": "QV5",
        "check_type": "LLM",
        "text": "For every requested deadline, review window, date count, aging bucket, retention period, or as-of-date test, the response must show source dates, formula or comparison, final timing status, and business implication."
      },
      {
        "no": 5,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 6,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must use between four and nine non-empty paragraphs."
      }
    ]
  },
  {
    "sample_no": 19,
    "item_id": "tonight_hard_swapin_097",
    "workflow": "Risk and Compliance Review",
    "task": "Stress testing",
    "work_product": "CRE severe-loss worksheet",
    "instruction": "Prepare the CRE severe-loss worksheet for stress run STR-900. Use only the supplied documents, keep the 39.0% CRE shock unchanged, calculate loss for each asset pool and the total loss with the methodology formula, rank the pools from largest to smallest calculated loss, compare the total with the $9,000,000 board limit, and state whether Risk Committee escalation is required with two mitigation actions. Produce the CRE severe-loss worksheet under an audit-ready controller review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; separate source-stated facts from reviewer inferences, assumptions, customer statements, or management assertions; for any comparison, ranking, alternative, scenario, or trade-off, state the comparison basis, source inputs, result, and decision implication; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the CRE severe-loss worksheet with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Review file 1009: CRE severe-loss worksheet\n\nAnalyst instructions\nThe answer needs to cover this request: Prepare the CRE severe-loss worksheet for stress run STR-900. Use only the supplied documents, keep the 39.0% CRE shock unchanged, calculate loss for each asset pool and the total loss with the methodology formula, rank the pools from largest to smallest calculated loss, compare the total with the $9,000,000 board limit, and state whether Risk Committee escalation is required with two mitigation actions.\n\nEvidence in the file\nadverse cre shock -- Stress run STR-900 for Aster Ridge Capital uses the following scenario: commercial real estate prices fall 39.0%, vacancy rises, and refinancing spreads widen by 240 bps. The operative stress assumption is 39.0% CRE price decline. The scenario is for internal risk review and does not override product terms or customer disclosures.\n\nName for this material: exposure pack str-900. Content: The exposure pack lists the following inputs. Downtown office loan pool: amount or value $12,000,000; stress input 0.62. Suburban retail loan pool: amount or value $8,000,000; stress input 0.37. Hotel bridge loan: amount or value $6,500,000; stress input 0.55. The applicable limit, reserve, tolerance, or trigger amount is $9,000,000.\n\nescalation standard (Aster Ridge Capital Stress Methodology and Escalation Standard)\nFor STR-900, stress loss = exposure amount x 39.0% x internal loss multiplier. Required presentation: table with columns Asset pool, Exposure, Shock, Multiplier, Calculated loss, Limit status, Action. Escalation rule: escalate to the Risk Committee if total calculated loss exceeds the board-approved loss limit. Calculations must use only documented inputs, unsupported recoveries or offsets must be identified as unavailable, and the reviewer must cite document IDs when the query asks for source support.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nPrepare the CRE severe-loss worksheet for stress run STR-900. Use only the supplied documents, keep the 39.0% CRE shock unchanged, calculate loss for each asset pool and the total loss with the methodology formula, rank the pools from largest to smallest calculated loss, compare the total with the $9,000,000 board limit, and state whether Risk Committee escalation is required with two mitigation actions. Produce the CRE severe-loss worksheet under an audit-ready controller review posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; separate source-stated facts from reviewer inferences, assumptions, customer statements, or management assertions; for any comparison, ranking, alternative, scenario, or trade-off, state the comparison basis, source inputs, result, and decision implication; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the CRE severe-loss worksheet with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "adverse cre shock",
        "title": "2026 Severely Adverse CRE Shock - Scenario Definition",
        "content": "Stress run STR-900 for Aster Ridge Capital uses the following scenario: commercial real estate prices fall 39.0%, vacancy rises, and refinancing spreads widen by 240 bps. The operative stress assumption is 39.0% CRE price decline. The scenario is for internal risk review and does not override product terms or customer disclosures.",
        "provenance": false
      },
      {
        "label": "exposure pack str-900",
        "title": "Aster Ridge Capital Exposure Pack for STR-900",
        "content": "The exposure pack lists the following inputs. Downtown office loan pool: amount or value $12,000,000; stress input 0.62. Suburban retail loan pool: amount or value $8,000,000; stress input 0.37. Hotel bridge loan: amount or value $6,500,000; stress input 0.55. The applicable limit, reserve, tolerance, or trigger amount is $9,000,000.",
        "provenance": false
      },
      {
        "label": "escalation standard",
        "title": "Aster Ridge Capital Stress Methodology and Escalation Standard",
        "content": "For STR-900, stress loss = exposure amount x 39.0% x internal loss multiplier. Required presentation: table with columns Asset pool, Exposure, Shock, Multiplier, Calculated loss, Limit status, Action. Escalation rule: escalate to the Risk Committee if total calculated loss exceeds the board-approved loss limit. Calculations must use only documented inputs, unsupported recoveries or offsets must be identified as unavailable, and the reviewer must cite document IDs when the query asks for source support.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The response must use only the supplied documents."
      },
      {
        "no": 2,
        "family": "Quantitative Verification",
        "tag": "QV1",
        "check_type": "LLM",
        "text": "The response must calculate stressed impact using the methodology formula: stress loss = exposure amount x 39.0% x internal loss multiplier."
      },
      {
        "no": 3,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "LLM",
        "text": "The response must follow the required presentation: table with columns Asset pool, Exposure, Shock, Multiplier, Calculated loss, Limit status, Action."
      },
      {
        "no": 4,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 5,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 6,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 7,
        "family": "Evidence and Grounding",
        "tag": "EG3",
        "check_type": "LLM",
        "text": "The response must separate source-stated facts from reviewer inferences, assumptions, customer statements, or management assertions; it must not present inferred conclusions as source facts."
      },
      {
        "no": 8,
        "family": "Quantitative Verification",
        "tag": "QV6",
        "check_type": "LLM",
        "text": "For every requested comparison, ranking, alternative, scenario, or trade-off, the response must state the comparison basis, source inputs, result, and decision implication rather than listing options without a supported ordering or boundary."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 12,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include at least two Markdown blockquote lines."
      },
      {
        "no": 13,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must contain at least eight complete sentences."
      }
    ]
  },
  {
    "sample_no": 20,
    "item_id": "tonight_hard_swapin_111",
    "workflow": "Risk and Compliance Review",
    "task": "Internal control review",
    "work_product": "pricing-override supervision review",
    "instruction": "Create a pricing-override supervision review for the Cobalt Ridge 2029 bond. Use only the documents supplied. Calculate the percentage override versus vendor price, compare it with the 3% threshold, evaluate whether valuation committee approval and Fund Accounting disclosure timing met policy, and state whether NAV finalization should have been held. Produce the pricing-override supervision review under an audit-ready compliance escalation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the pricing-override supervision review with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.",
    "full_prompt": "Assignment 939: Pricing-override supervision review\n\nCompletion instructions\nFor the final response, handle this assignment: Create a pricing-override supervision review for the Cobalt Ridge 2029 bond. Use only the documents supplied. Calculate the percentage override versus vendor price, compare it with the 3% threshold, evaluate whether valuation committee approval and Fund Accounting disclosure timing met policy, and state whether NAV finalization should have been held.\n\nEvidence in the file\npricing override policy (Investment Product Pricing Override Policy)\nManual price overrides above 3% of independent vendor price require portfolio manager rationale, valuation committee approval, and disclosure to Fund Accounting before NAV finalization.\n\nprice override register -- Security: Cobalt Ridge 2029 bond. Vendor price: 84.20. Manual price used: 88.10. Portfolio manager rationale: liquidity improved after tender announcement. Valuation committee approval: pending. Fund Accounting disclosure: email sent after NAV finalization.\n\nName for this material: supervision review. Content: Reviewers must calculate override percentage, determine whether approval timing met policy, and state whether NAV finalization should have been held.\n\nWhen the answer uses evidence, cite the material labels shown above.\n\nFinal work-product request\nCreate a pricing-override supervision review for the Cobalt Ridge 2029 bond. Use only the documents supplied. Calculate the percentage override versus vendor price, compare it with the 3% threshold, evaluate whether valuation committee approval and Fund Accounting disclosure timing met policy, and state whether NAV finalization should have been held. Produce the pricing-override supervision review under an audit-ready compliance escalation posture: connect each final action to the active evidence and the governing rule, policy, task standard, or active-case trigger; keep active source labels beside the material facts, figures, thresholds, missing-evidence triggers, and decision points where they are used; for any calculation or reconciliation, show the source inputs, formula or comparison, result, and business implication; preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; name any required approver, authority evidence, authorization, or review prerequisite that controls the outcome; write every percentage value, including percent or percentage-point values, with exactly two decimal places. Open the pricing-override supervision review with a Markdown bold title on the first non-empty line. Near the end, include the exact handoff label Next action:; if the packet supports no next action, write Next action: none supported by the packet. Include at least two short Markdown blockquote lines beginning with > for source or rule excerpts that anchor the decision. Use at least eight complete sentences in the full response. Treat the layout as part of the requested finance work product, but do not omit required evidence, calculations, boundaries, or decisions just to satisfy presentation.\n",
    "sources": [
      {
        "label": "pricing override policy",
        "title": "Investment Product Pricing Override Policy",
        "content": "Manual price overrides above 3% of independent vendor price require portfolio manager rationale, valuation committee approval, and disclosure to Fund Accounting before NAV finalization.",
        "provenance": false
      },
      {
        "label": "price override register",
        "title": "Price Override Register - Fund A",
        "content": "Security: Cobalt Ridge 2029 bond. Vendor price: 84.20. Manual price used: 88.10. Portfolio manager rationale: liquidity improved after tender announcement. Valuation committee approval: pending. Fund Accounting disclosure: email sent after NAV finalization.",
        "provenance": false
      },
      {
        "label": "supervision review",
        "title": "Supervision Review Notes",
        "content": "Reviewers must calculate override percentage, determine whether approval timing met policy, and state whether NAV finalization should have been held.",
        "provenance": false
      }
    ],
    "constraints": [
      {
        "no": 1,
        "family": "Evidence and Grounding",
        "tag": "EG1",
        "check_type": "LLM",
        "text": "The review must use only the documents supplied."
      },
      {
        "no": 2,
        "family": "Decision and Boundary",
        "tag": "DB9",
        "check_type": "LLM",
        "text": "The response must connect active evidence, governing rule or task standard, and final action in a single reasoning chain; it must not present facts, calculations, and recommendations as disconnected checklist fragments."
      },
      {
        "no": 3,
        "family": "Evidence and Grounding",
        "tag": "EG2",
        "check_type": "LLM",
        "text": "Material facts, numeric inputs, thresholds, calculation results, missing-evidence triggers, and decision points must have active source labels next to the sentence, row, or bullet where they are used; collected end-only citations are not sufficient."
      },
      {
        "no": 4,
        "family": "Quantitative Verification",
        "tag": "QV2",
        "check_type": "LLM",
        "text": "For every requested calculation, reconciliation, variance, threshold test, date count, headroom, or shortfall, the response must show source inputs, formula or comparison, final result, and business implication; a bare computed number does not satisfy this requirement."
      },
      {
        "no": 5,
        "family": "Evidence and Grounding",
        "tag": "EG5",
        "check_type": "LLM",
        "text": "The response must preserve exact source figures, dates, thresholds, names, and rule references when they control the decision; it must not round, rename, or paraphrase them in a way that changes the controlling source meaning."
      },
      {
        "no": 6,
        "family": "Decision and Boundary",
        "tag": "DB7",
        "check_type": "LLM",
        "text": "If approval, authorization, authority evidence, or a review prerequisite controls the outcome, the response must name the required approver or prerequisite and must not imply approval while that prerequisite is missing."
      },
      {
        "no": 7,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "Every percentage value in the response, including values written with percent or percentage points, must use exactly two decimal places."
      },
      {
        "no": 8,
        "family": "Format and Presentation",
        "tag": "FP6",
        "check_type": "rule",
        "text": "The first non-empty line must be a Markdown bold title."
      },
      {
        "no": 9,
        "family": "Format and Presentation",
        "tag": "FP4",
        "check_type": "rule",
        "text": "The response must include the exact label Next action:."
      },
      {
        "no": 10,
        "family": "Format and Presentation",
        "tag": "FP2",
        "check_type": "rule",
        "text": "The response must include at least two Markdown blockquote lines."
      },
      {
        "no": 11,
        "family": "Format and Presentation",
        "tag": "FP3",
        "check_type": "rule",
        "text": "The response must contain at least eight complete sentences."
      }
    ]
  }
];
