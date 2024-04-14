# Lucky Winners All Heroes

This project reimagines the conventional lottery system, integrating philanthropy with the thrill of winning. Participants purchase tickets using the cryptocurrency, Pi, and receive their unique lottery numbers. Upon the announcement of the winners, prizes are awarded in Pi.

A distinct feature of this lottery is the allocation
of funds:

* 5% to 20% of the total collected money is earmarked for charity. The exact percentage is democratically decided by participant votes each round.
* The selected charities also vary each round, as they are chosen through participant voting, fostering a community-driven approach to support.
* The majority of the funds (minus a modest 0.1% to 1% for operational costs) are distributed to the winners or rolled over to increase the prize pool for subsequent rounds.

**Financial transparency** is key in this model. We ensure that the distribution of funds to charities is not only participant-directed but also meticulously recorded and made accessible for all participants to view and recorded in the blockchain, even the draw algorithm's log will be tokenized in the blockchain for more transparency and trust. This transparency extends to the conversion of Pi to fiat currency for charitable donations, aligning with our commitment to accountability and community impact.

It is composed of two major parts:

* **backend**: a backend app (a very simple JSON API built using Node and ExpressJS)
* **frontend**: a single-page frontend app (built using React and create-react-app)

## Goals

1. **Develop a Functional Lottery System within the Pi Ecosystem:** Build and deploy a fully operational lottery system that integrates seamlessly with the Pi Network, enabling users to participate directly using Pi tokens.
2. **Promote User Engagement with the Pi Blockchain and Charitable Activities:** Increase active participation in the Pi ecosystem by linking lottery involvement with charity initiatives. Encourage users to contribute to charitable causes through the lottery system, enhancing community engagement and support.
3. **Ensure Compliance with Legal Regulations:** Design and implement the lottery system to fully comply with all applicable laws and regulations. Ensure that all operations adhere to legal standards to maintain legitimacy and trust.
4. **Achieve Financial Transparency and Integrate Pi Tokens:** Establish a transparent financial structure for the lottery system that includes clear tracking and reporting of all transactions. Integrate Pi tokens effectively, allowing users to utilize them for lottery participation while ensuring all financial operations are openly documented and auditable.

### Data model of the system

* **User Model:** This model stores essential user data needed for system interaction and authentication.
  * Fields
  * **'userId'**: Primary Key, unique identifier for each user.
  * **'username'**: Unique username for user identification.
  * **'walletAddress'**: Cryptocurrency wallet address for transactions.
  * **'contactDetails'**: Email, phone number, etc., for communications.
  * **'createdAt'**: Timestamp of account creation.
  * **'updatedAt'**: Timestamp of last account update.

  Considerations: There is the need to add fields for user verification status and roles for administrators.

* **Ticket Model:** Manages details of each lottery ticket purchase, ensuring traceability and user preferences for charitable donations.
  * Fields
    * **ticketId**: Primary Key, unique identifier for each ticket.
    * **userId**: Foreign Key, reference to the User Model.
    * **ticketNumber**: User selected, Randomly generated or sequentially assigned number.
    * **charityPercentagePreference**: Percentage of their ticket contribution the user wishes to go to charity.
    * **charityPreference**: List of charities selected by the user or a single charity ID referencing the Charity Model.
    * **timestamp**: Date and time the ticket was purchased.

  Considerations: Ensure ticket numbers are unique within each draw. Consider how to handle the generation and storage of these numbers to avoid duplicates.

* **Draw Model:** Captures information about each lottery draw, facilitating transparency and auditability.
  * Fields
    * **'userId'**: Primary Key, unique identifier for each user.
    * **'username'**: Unique username for user identification.
    * **'walletAddress'**: Cryptocurrency wallet address for transactions.
    * **'contactDetails'**: Email, phone number, etc., for communications.
    * **'createdAt'**: Timestamp of account creation.
    * **'updatedAt'**: Timestamp of last account update.

  Considerations: Eventually we want to track multiple winning tickets, since with a high probability the lottery design should allow for multiple tiers of prizes.

* **Charity Model:** Provides a structured overview of charities involved, enhancing user trust and engagement.
  * Fields
    * **charityId**: Primary Key, unique identifier for each charity.
    * **name**: Name of the charity.
    * **description**: A brief description of the charity.
    * **transactionHistory**: List of all transactions made to the charity.

  Considerations: Consider linking directly to donations made through the lottery rather than just maintaining a transaction history within the model.

* **PrizePool Model:** Manages the distribution and allocation of the prize pool for each draw.
  * Fields
    * **prizePoolId**: Primary Key, unique identifier for each prize pool record.
    * **drawId**: Foreign Key, reference to the Draw Model.
    * **collectedAmount**: Total amount collected for the prize pool.
    * **distributionDate**: When the prize was or will be distributed.
    * **isRolledOver**: Boolean indicating whether the funds were rolled over to the next draw.

  Considerations: It is needed to track specific allocations of the prize pool, such as how much was rolled over versus distributed.

### Ticket issuing

### Drawing specifications

### Prize Division (System)

## Milestones

### 1. **TestNet Prototype**

### 2. **TestNet Production**

## Appendix

### Oklahoma Lottery Law Considerations

#### Overview

The laws concerning lotteries are really complicated and nuanced and restricted. So You can’t do it personally, Just go ask professionals like iHub.

### Types of allowed lottery systems

Oklahoma laws permit several types of lottery games under the oversight of the Oklahoma Lottery Commission. The primary types of games approved and offered by the Oklahoma Lottery include:

* Scratch-Off Tickets: These are instant-win games where players scratch off a coating on the ticket to reveal if they have won a prize
* Drawing Games: These include multi-state games such as Powerball and Mega Millions, as well as state-specific drawing games. Players choose numbers and win by matching them with numbers drawn on specified days.
* Daily Draw Games: These games are drawn more frequently, often daily, and include games like Pick 3 and Cash 5, where players select a set of numbers.
* Electronic Terminal-Based Games: These games use electronic terminals where players can play certain lottery games at authorized locations.

The introduction of new types of games or modifications to existing games would require approval from the Oklahoma Lottery Commission. They ensure that all games comply with state laws, maintain fairness and integrity, and contribute to the funding objectives designated by law, primarily for educational purposes.

Oklahoma's lottery laws are designed to ensure that the lottery system operates transparently and responsibly, with a significant portion of proceeds going to fund educational initiatives across the state.

### Offices, Laws and resources about lottery laws

**Oklahoma State Legislature**: The official website for the Oklahoma State Legislature provides access to state statutes and bills, which would include laws related to lotteries. [Link](https://www.oklegislature.gov/)

**Oklahoma Lottery Commission**: This is the governing body that oversees all lottery-related activities in Oklahoma. Their website would provide detailed information on regulations, application processes for lottery vendors, and compliance requirements.

### Lottery Legislation

Constitution: [Link](https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKCN&level=1)

Go to Article 10, Section 41:  Oklahoma Education Trust Fund [Oklahoma Constitution, Article 10, Section 41](https://docs.google.com/document/d/1X9nAAN6zqfMQ7fArignnJmki5fNOv_cDhO56sDNE3GQ/edit#bookmark=id.v62rcw6cvlny)

### State Statutes

Statue: [Link](https://www.oscn.net/applications/oscn/index.asp?ftdb=STOKST&level=1)

Expand Title 3A (Amusements & Sports); go to Chapter 7:  Oklahoma Education Lottery Act
Audited Financial Statements & Comprehensive Annual Financial Report (CAFR):

* FY-2023 Audited Financial Statements PDF
* FY-2022 Audited Financial Statements PDF
* FY-2021 Audited Financial Statements PDF
* FY-2020 Audited Financial Statements PDF
* FY-2019 Audited Financial Statements PDF
* FY-2018 Audited Financial Statements PDF
* FY-2017 Audited Financial Statements PDF
* Comprehensive Annual Financial Report for the Fiscal Year Ended June 30, 2023 – PDF
* Comprehensive Annual Financial Report for the Fiscal * Year Ended June 30, 2022 – PDF
* Comprehensive Annual Financial Report for the Fiscal Year Ended June 30, 2021 – PDF
* Comprehensive Annual Financial Report for the Fiscal Year Ended June 30, 2020 – PDF
* Comprehensive Annual Financial Report for the Fiscal Year Ended June 30, 2019 PDF
* Comprehensive Annual Financial Report for the Fiscal Year Ended June 30, 2018 PDF
* Comprehensive Annual Financial Report for the Fiscal Year Ended June 30, 2017 PDF

## Oklahoma Constitution, Article 10, Section 41

 Oklahoma Constitution

    Article 10 - Revenue And Taxation 
      Public Indebtedness
        Section Article 10 section 41 - Oklahoma Education Lottery Trust Fund
    Cite as: OKCONST O.S. § Article 10 section 41 (OSCN 2024), Public Indebtedness

§ 41. Oklahoma Education Lottery Trust Fund.

A. There is hereby created a trust fund to be known as the "Oklahoma Education Lottery Trust Fund". The trust fund shall consist of the funds transferred to it from the Oklahoma Education Lottery.

B. Monies in the Oklahoma Education Lottery Trust Fund shall only be expended for the following educational purposes and programs:

1. Kindergarten through twelfth grade public education, including but not limited to compensation and benefits for public school teachers and support employees;
2. Early childhood development programs;
3. Tuition grants, loans and scholarships to citizens of this state to enable such citizens to attend colleges and universities located within this state which are accredited by the Oklahoma State Regents for Higher Education or to attend institutions operated under the authority of the Oklahoma Department of Career and Technology Education;
4. Construction of educational facilities for elementary school districts, independent school districts, the Oklahoma State System of Higher Education, and career and technology education;
5. Capital outlay projects for elementary school districts, independent school districts, the Oklahoma State System of Higher Education, and career and technology education;
6. Technology for public elementary school district, independent school district, state higher education, and career and technology education facilities;
7. Endowed chairs for professors at institutions of higher education operated by the Oklahoma State System of Higher Education;
8. Programs and personnel of the Oklahoma School for the Deaf and the Oklahoma School for the Blind;
9. The School Consolidation and Assistance Fund; and
10. The Teachers’ Retirement System Dedicated Revenue Revolving Fund.

C. The Legislature shall appropriate funds from the Oklahoma Education Lottery Trust Fund only for the purposes specified in subsection B of this section. Even when the funds from the trust fund are used for these purposes, the Legislature shall not use funds from the trust fund to supplant or replace other state funds supporting common education, higher education, or career and technology education.

D. In order to ensure that the funds from the trust fund are used to enhance and not supplant funding for education, the State Board of Equalization shall examine and investigate appropriations from the trust fund each year. At the meeting of the State Board of Equalization held within five (5) days after the monthly apportionment in February of each year, the State Board of Equalization shall issue a finding and report which shall state whether appropriations from the trust fund were used to enhance or supplant education funding. If the State Board of Equalization finds that education funding was supplanted by funds from the trust fund, the Board shall specify the amount by which education funding was supplanted. In this event, the Legislature shall not make any appropriations for the ensuing fiscal year until an appropriation in that amount is made to replenish the trust fund.

E. The provisions of this section shall not become effective if Enrolled House Bill No. 1278 of the 1st Session of the 49th Oklahoma Legislature is not approved by the people of this state.

Historical Data
