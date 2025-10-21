import { Article } from '../types';

export const CONSTITUTION_ARTICLES: Article[] = [
  // PART I: THE UNION AND ITS TERRITORY
  {
    id: "Article 1",
    title: "Name and territory of the Union",
    summary: "India, that is Bharat, shall be a Union of States. The territory of India will comprise the territories of the States, the Union territories, and other acquired territories.",
    detailedExplanation: "This foundational article establishes the identity of the nation with two names, 'India' and 'Bharat', and defines its political structure as a 'Union of States'. The choice of 'Union' over 'Federation' was deliberate by the Constituent Assembly to signify that India is an indivisible whole. States are integral parts of the Union and have no right to secede. It clarifies that the country's territory consists of states, union territories listed in the First Schedule, and any territories that might be acquired in the future. This provision underscores the unity and integrity of the nation.",
    fullText: "(1) India, that is Bharat, shall be a Union of States.\n(2) The States and the territories thereof shall be as specified in the First Schedule.\n(3) The territory of India shall comprise—\n(a) the territories of the States;\n(b) the Union territories specified in the First Schedule; and\n(c) such other territories as may be acquired.",
    part: "Part I: The Union and its Territory",
    landmarkCases: [
      { caseName: "In re Berubari Union (1960)", caseSummary: "The Supreme Court held that the power of Parliament to diminish the area of a state (under Article 3) does not cover the cession of Indian territory to a foreign country. This must be done through a constitutional amendment under Article 368." },
      { caseName: "State of West Bengal v. Union of India (1962)", caseSummary: "The court upheld the power of the Union Parliament to acquire a state's property. It reiterated that the Indian constitution is not truly federal and the states are not sovereign, reinforcing the 'Union of States' concept from Article 1." }
    ],
    tags: ["Union", "Territory", "State Formation"],
    limitationsAndExceptions: "While Parliament has the power to reorganize states internally, ceding Indian territory to a foreign country requires a constitutional amendment under Article 368, as established in the Berubari Union case. The 'Union of States' concept implies states have no right to secede."
  },
  {
    id: "Article 2",
    title: "Admission or establishment of new States",
    summary: "Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit.",
    detailedExplanation: "Article 2 grants the Indian Parliament absolute power regarding territories that are not yet part of India. It has two aspects: 'admission' of states that are already in existence and 'establishment' of new states which were not previously in existence. This power is external-facing, allowing India to expand its territory. A key example is the admission of Sikkim into the Union in 1975. The phrase 'on such terms and conditions as it thinks fit' gives Parliament considerable flexibility in integrating new territories.",
    fullText: "Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit.",
    part: "Part I: The Union and its Territory",
    landmarkCases: [
        { caseName: "N. Masthan Sahib v. Chief Commissioner, Pondicherry (1962)", caseSummary: "The court examined the status of a territory acquired under Article 1(3)(c) and held that Parliament has the power to make laws for such territories. It clarified the process of integration of acquired territories." },
        { caseName: "Maganbhai Ishwarbhai Patel vs Union Of India (1969)", caseSummary: "Related to the Rann of Kutch dispute, the court distinguished between cession of territory (requiring amendment) and settlement of a boundary dispute (which can be done by executive action), clarifying the scope of Parliament's power over external territories." }
    ],
    tags: ["Parliament", "State Formation", "Union"],
    limitationsAndExceptions: "This power applies to territories that are not part of India. For altering the boundaries or status of existing Indian states, the procedure under Article 3 must be followed. The wide discretion given to Parliament is subject to the basic structure of the Constitution."
  },
  {
    id: "Article 3",
    title: "Formation of new States and alteration of areas, boundaries or names of existing States",
    summary: "Parliament can form a new State, increase or diminish the area of any State, alter its boundaries, or change its name.",
    detailedExplanation: "This article gives Parliament the power to reorganize the states internally. It can unilaterally change the political map of India. This power demonstrates the flexibility of India's federal structure, famously described as an 'indestructible union of destructible states.' The procedure requires a bill to be introduced only with the prior recommendation of the President. The President must refer the bill to the legislature of the affected state(s) for their views within a specified time. However, Parliament is not bound by these views, highlighting the Union's supremacy in territorial matters.",
    fullText: "Parliament may by law—\n(a) form a new State by separation of territory from any State or by uniting two or more States or parts of States or by uniting any territory to a part of any State;\n(b) increase the area of any State;\n(c) diminish the area of any State;\n(d) alter the boundaries of any State;\n(e) alter the name of any State.",
    part: "Part I: The Union and its Territory",
    landmarkCases: [
        { caseName: "Babulal Parate v. State of Bombay (1960)", caseSummary: "The Supreme Court upheld the constitutionality of Article 3. It clarified that Parliament is not obligated to follow the views of the state legislatures and can introduce amendments to the reorganization bill without referring them back to the state." },
        { caseName: "State of Haryana v. State of Punjab (2002)", caseSummary: "In a dispute over the completion of the Sutlej-Yamuna Link (SYL) canal, the court emphasized that a state created under Article 3 is bound by the agreements and obligations of its parent state at the time of reorganization." }
    ],
    tags: ["Parliament", "State Formation", "Territory"],
    limitationsAndExceptions: "A bill for such changes can only be introduced with the President's prior recommendation. While the bill must be referred to the concerned state legislature for its views, Parliament is not bound by these views. This power is for internal reorganization and cannot be used to cede territory to another country."
  },
  {
    id: "Article 4",
    title: "Laws made under Articles 2 and 3",
    summary: "Laws for creating/altering states (Articles 2 & 3) are not considered constitutional amendments, meaning they can be passed by a simple majority.",
    detailedExplanation: "Article 4 is a consequential provision that clarifies the legislative process for laws made under Articles 2 and 3. It explicitly states that such laws, which might consequentially amend the First Schedule (listing states and UTs) and the Fourth Schedule (allocating Rajya Sabha seats), will not be treated as constitutional amendments under Article 368. This mechanism allows for the territorial reorganization of India through a simple majority in Parliament, providing immense flexibility to the Union to meet changing administrative, political, or linguistic needs.",
    fullText: "(1) Any law referred to in article 2 or article 3 shall contain such provisions for the amendment of the First Schedule and the Fourth Schedule as may be necessary to give effect to the provisions of the law and may also contain such supplemental, incidental and consequential provisions (including provisions as to representation in Parliament and in the Legislature or Legislatures of the State or States affected by such law) as Parliament may deem necessary.\n(2) No such law as aforesaid shall be deemed to be an amendment of this Constitution for the purposes of article 368.",
    part: "Part I: The Union and its Territory",
    landmarkCases: [
        { caseName: "Mangal Singh v. Union of India (1967)", caseSummary: "The Supreme Court clarified that while Article 4 allows for consequential changes to the First and Fourth Schedules, it does not empower Parliament to make any and all constitutional changes in the guise of reorganization. The changes must be incidental to the reorganization itself." },
        { caseName: "V.B. Raju v. State of Gujarat (1982)", caseSummary: "The court reiterated that laws made under Article 3, read with Article 4, do not need to follow the procedure of Article 368, reaffirming the simplicity and flexibility intended by the Constitution makers for state reorganization." }
    ],
    tags: ["Parliament", "State Formation", "Constitutional Amendment"],
    limitationsAndExceptions: "The power to make consequential changes under this article is limited. It does not empower Parliament to make substantial constitutional amendments that are not incidental to the state reorganization itself. The core principles and basic structure of the Constitution cannot be altered through this simplified process."
  },
  // PART II: CITIZENSHIP
  {
    id: "Article 5",
    title: "Citizenship at the commencement of the Constitution",
    summary: "Defines who was a citizen of India at the time the Constitution was enacted, based on domicile, birth in India, parent's birth in India, or residence.",
    detailedExplanation: "This article provided the foundational rules for Indian citizenship on January 26, 1950. It established a simple framework based on the principle of 'domicile'—the intention to reside in India permanently. A person who had their domicile in India automatically became a citizen if they also met one of three conditions: (a) they were born in India (jus soli - right of the soil), (b) either of their parents was born in India (jus sanguinis - right of blood), or (c) they had been ordinarily resident in India for at least five years before the Constitution's commencement. This article was designed to be inclusive for people living in India at that historic moment.",
    fullText: "At the commencement of this Constitution, every person who has his domicile in the territory of India and—\n(a) who was born in the territory of India; or\n(b) either of whose parents was born in the territory of India; or\n(c) who has been ordinarily resident in the territory of India for not less than five years immediately preceding such commencement, shall be a citizen of India.",
    part: "Part II: Citizenship",
    landmarkCases: [
      { caseName: "Pradeep Jain v. Union of India (1984)", caseSummary: "The Supreme Court, while discussing domicile, held that India has only one domicile—the domicile of the country—and there is no separate state domicile. This affirmed the concept of single citizenship." },
      { caseName: "D.P. Joshi v. State of Madhya Bharat (1955)", caseSummary: "The court distinguished between 'domicile' and 'place of birth,' holding that discrimination based on residence for educational purposes was permissible, but discrimination based on place of birth alone was prohibited under Article 15." }
    ],
    tags: ["Citizenship", "Domicile"],
    limitationsAndExceptions: "This article's provisions were applicable only at the commencement of the Constitution (Jan 26, 1950). It is not a current source for acquiring citizenship. Post-commencement citizenship matters are governed by laws made by Parliament under Article 11, primarily the Citizenship Act, 1955."
  },
  {
    id: "Article 6",
    title: "Rights of citizenship of certain persons who have migrated to India from Pakistan",
    summary: "Grants citizenship to people who migrated from Pakistan to India before July 19, 1948, or those who migrated after but registered as citizens.",
    detailedExplanation: "This article was specifically designed to address the large-scale migration during the Partition of India. It provides citizenship for individuals who moved from the territory of Pakistan to India. It sets a cut-off date: anyone who migrated before July 19, 1948, and ordinarily resided in India became a citizen automatically. For those who migrated on or after this date, they had to be resident in India for at least six months and formally register with the authorities to become a citizen. This article was a crucial provision for settling the citizenship status of millions of refugees.",
    fullText: "Notwithstanding anything in article 5, a person who has migrated to the territory of India from the territory now included in Pakistan shall be deemed to be a citizen of India at the commencement of this Constitution if...\n(a) he or either of his parents or any of his grand-parents was born in India as defined in the Government of India Act, 1935... and\n(b)(i) in the case where such person has so migrated before the nineteenth day of July, 1948, he has been ordinarily resident in the territory of India since the date of his migration, or\n(ii) in the case where such person has so migrated on or after the nineteenth day of July, 1948, he has been registered as a citizen of India...",
    part: "Part II: Citizenship",
    landmarkCases: [
        { caseName: "State of Bihar v. Kumar Amar Singh (1955)", caseSummary: "The Supreme Court dealt with the concept of 'migration' under Article 6, holding that it implies a movement with the intention of residing permanently in the new country, not just a temporary visit." },
        { caseName: "Kulathil Mammu v. State of Kerala (1966)", caseSummary: "The court provided a comprehensive interpretation of the term 'migrated' as used in Articles 6 and 7, clarifying its meaning in the context of Partition." }
    ],
    tags: ["Citizenship", "Partition", "Migration"],
    limitationsAndExceptions: "This is a specific provision dealing with the citizenship of migrants from Pakistan due to Partition and is not applicable to modern-day migration. The term 'migration' implies an intention to settle permanently, not just a temporary visit. It is also subject to the provisions of Article 7."
  },
  {
    id: "Article 7",
    title: "Rights of citizenship of certain migrants to Pakistan",
    summary: "Strips Indian citizenship from those who migrated to Pakistan after March 1, 1947, but allows them to regain it if they return to India under a permit for resettlement.",
    detailedExplanation: "This article addresses the situation of people who initially migrated from India to Pakistan after March 1, 1947, but later returned. It states that such persons shall not be considered citizens of India. However, it provides an exception: if a person returned to India under a permit for resettlement or permanent return issued by the government, they could still become a citizen by following the registration process outlined in Article 6(b)(ii). This article was necessary to manage the complex, two-way flow of people during Partition.",
    fullText: "Notwithstanding anything in articles 5 and 6, a person who has after the first day of March, 1947, migrated from the territory of India to the territory now included in Pakistan shall not be deemed to be a citizen of India:\nProvided that nothing in this article shall apply to a person who, after having so migrated to the territory now included in Pakistan, has returned to the territory of India under a permit for resettlement or permanent return...",
    part: "Part II: Citizenship",
    landmarkCases: [
      { caseName: "State of A.P. v. Abdul Khader (1961)", caseSummary: "The Supreme Court clarified that Article 7 overrides Articles 5 and 6. A person who migrated to Pakistan after the specified date lost their Indian citizenship, even if they would have been eligible under Article 5." }
    ],
    tags: ["Citizenship", "Partition", "Migration"],
    limitationsAndExceptions: "This article overrides Articles 5 and 6. It has a specific historical context tied to Partition. The exception for return is not automatic and requires a valid permit for resettlement issued by a competent authority, making it a conditional provision."
  },
  {
    id: "Article 8",
    title: "Rights of citizenship of certain persons of Indian origin residing outside India",
    summary: "Grants Indian citizenship to persons of Indian origin (PIO) residing outside undivided India, if they or their parents/grandparents were born in undivided India and they register as a citizen with an Indian diplomatic mission.",
    detailedExplanation: "This article extends Indian citizenship to the diaspora. It provides that any person of Indian origin residing in any country outside undivided India can become an Indian citizen. The conditions are that the person, or either of their parents or grandparents, must have been born in India as defined in the Government of India Act, 1935. To acquire citizenship, they must register themselves with the Indian diplomatic or consular representative in their country of residence. This provision acknowledges the connection of the Indian diaspora to their country of origin.",
    fullText: "Notwithstanding anything in article 5, any person who or either of whose parents or any of whose grand-parents was born in India as defined in the Government of India Act, 1935... and who is ordinarily residing in any country outside India... shall be deemed to be a citizen of India if he has been registered as a citizen of India by the diplomatic or consular representative of India in the country where he is for the time being residing...",
    part: "Part II: Citizenship",
    landmarkCases: [],
    tags: ["Citizenship", "PIO", "Diaspora"],
    limitationsAndExceptions: "This is not an automatic grant of citizenship. The person of Indian origin must make an application and be formally registered as a citizen by an Indian diplomatic or consular representative. This provision was also primarily for the time of the Constitution's commencement."
  },
  {
    id: "Article 9",
    title: "Persons voluntarily acquiring citizenship of a foreign State not to be citizens",
    summary: "A person who voluntarily acquires the citizenship of a foreign country shall no longer be a citizen of India.",
    detailedExplanation: "This article explicitly states the principle that Indian citizenship is singular. It establishes that if an Indian citizen voluntarily acquires the citizenship of another country, they automatically cease to be an Indian citizen. This provision underlines the fact that India does not permit dual citizenship. The determination of whether a person has voluntarily acquired foreign citizenship is left to the government under the Citizenship Act.",
    fullText: "No person shall be a citizen of India by virtue of article 5, or be deemed to be a citizen of India by virtue of article 6 or article 8, if he has voluntarily acquired the citizenship of any foreign State.",
    part: "Part II: Citizenship",
    landmarkCases: [
      { caseName: "Bhagwati Prasad v. Rajeev Gandhi (1986)", caseSummary: "The court dealt with questions regarding the termination of citizenship upon acquiring foreign citizenship, affirming the principles laid down in Article 9." }
    ],
    tags: ["Citizenship", "Dual Citizenship"],
    limitationsAndExceptions: "This article enforces single citizenship. The determination of 'voluntary acquisition' is governed by rules set by the central government. The loss of Indian citizenship is automatic upon acquiring foreign citizenship."
  },
  {
    id: "Article 10",
    title: "Continuance of the rights of citizenship",
    summary: "Every person who is a citizen of India under any of the foregoing provisions shall continue to be a citizen, subject to any law made by Parliament.",
    detailedExplanation: "This article ensures the continuity of citizenship for those who were deemed citizens at the commencement of the Constitution. It acts as a bridge, stating that citizenship status granted under Articles 5 to 8 will continue. However, it makes this continuance subject to the provisions of any law that Parliament might make. This links the constitutional provisions on citizenship to the legislative power of Parliament under Article 11.",
    fullText: "Every person who is or is deemed to be a citizen of India under any of the foregoing provisions of this Part shall, subject to the provisions of any law that may be made by Parliament, continue to be such citizen.",
    part: "Part II: Citizenship",
    landmarkCases: [],
    tags: ["Citizenship", "Parliament"],
    limitationsAndExceptions: "The right to continue as a citizen is not absolute. It is explicitly made 'subject to the provisions of any law that may be made by Parliament.' This means Parliament can enact laws for the termination or deprivation of citizenship under certain conditions."
  },
  {
    id: "Article 11",
    title: "Parliament to regulate the right of citizenship by law",
    summary: "Gives Parliament the power to make any provision with respect to the acquisition and termination of citizenship and all other matters relating to it.",
    detailedExplanation: "This is a crucial forward-looking provision. While Articles 5 to 10 dealt with who was a citizen at the commencement of the Constitution, Article 11 empowers the Parliament to enact laws governing all future aspects of citizenship. It grants exclusive and plenary powers to Parliament to make laws regarding the acquisition (e.g., by birth, descent, registration, naturalization) and termination of citizenship. Acting under this article, Parliament passed the Citizenship Act, 1955, which is the primary legislation dealing with Indian citizenship today. This article ensures that the rules of citizenship can evolve with the changing needs of the country.",
    fullText: "Nothing in the foregoing provisions of this Part shall derogate from the power of Parliament to make any provision with respect to the acquisition and termination of citizenship and all other matters relating to citizenship.",
    part: "Part II: Citizenship",
    landmarkCases: [
        { caseName: "Izhar Ahmad Khan v. Union of India (1962)", caseSummary: "The Supreme Court upheld the power of Parliament under Article 11 to enact laws that may result in the deprivation of citizenship, holding that such powers are a sovereign prerogative and are not subject to judicial review on the grounds of wisdom or policy." },
        { caseName: "Sarbananda Sonowal v. Union of India (2005)", caseSummary: "In this case concerning the IMDT Act, the court, while not directly ruling on Article 11, implicitly acknowledged Parliament's power to legislate on citizenship while emphasizing that such laws must not violate other constitutional provisions, particularly fundamental rights." }
    ],
    tags: ["Citizenship", "Parliament"],
    limitationsAndExceptions: "While Parliament's power over citizenship is extensive, any law it enacts must not violate the basic structure of the Constitution. The exercise of this power is subject to judicial review to ensure it is not arbitrary or discriminatory, thereby violating other fundamental rights like Article 14."
  },
  // PART III: FUNDAMENTAL RIGHTS
  {
    id: "Article 12",
    title: "Definition of 'the State'",
    summary: "Defines 'the State' to include the Government and Parliament of India, state governments and legislatures, and all local or other authorities within India.",
    detailedExplanation: "This article is the gateway to Part III, as Fundamental Rights are primarily enforceable against 'the State'. Article 12 provides a broad and inclusive definition to ensure that a wide range of bodies are held accountable for upholding fundamental rights. The term 'other authorities' has been a subject of extensive judicial interpretation. The judiciary has expanded its meaning to include not just statutory bodies but also entities that act as an 'agency or instrumentality' of the government. This ensures that even bodies that appear to be private but perform public functions or are heavily controlled by the government are subject to the discipline of fundamental rights.",
    fullText: "In this Part, unless the context otherwise requires, 'the State' includes the Government and Parliament of India and the Government and the Legislature of each of the States and all local or other authorities within the territory of India or under the control of the Government of India.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Ajay Hasia v. Khalid Mujib (1981)", caseSummary: "The Supreme Court laid down a comprehensive test to determine whether a body is an 'agency or instrumentality' of the State. Factors include financial control by the government, functional character, monopolistic status, and deep and pervasive state control." },
      { caseName: "R.D. Shetty v. International Airport Authority (1979)", caseSummary: "This case was a precursor to Ajay Hasia, where the court held that the International Airport Authority, a statutory corporation, fell within the definition of 'the State' under Article 12. It established the groundwork for the instrumentality test." }
    ],
    tags: ["Fundamental Rights", "State"],
    limitationsAndExceptions: "The definition, while broad, does not include purely private, non-state-controlled entities. The violation of fundamental rights by a private individual against another is generally not challengeable under this framework, except for certain rights like those under Articles 17 and 24. The judiciary itself is not explicitly included in the definition."
  },
  {
    id: "Article 13",
    title: "Laws inconsistent with fundamental rights",
    summary: "Declares that any law which is inconsistent with or takes away any of the fundamental rights shall be void. This includes pre-constitutional and post-constitutional laws.",
    detailedExplanation: "Article 13 is the bedrock of judicial review in India. It establishes the supremacy of Fundamental Rights over all forms of 'law', which it defines inclusively to cover ordinances, orders, by-laws, rules, regulations, and even customs having the force of law. It has two parts: clause (1) deals with pre-constitutional laws, making them void to the extent of their inconsistency with fundamental rights, and clause (2) prohibits the State from making any law that abridges or takes away these rights. This article empowers the Supreme Court (under Article 32) and High Courts (under Article 226) to strike down any legislation or executive action that violates Part III of the Constitution, thus acting as a vigilant guardian of citizens' rights.",
    fullText: "(1) All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void.\n(2) The State shall not make any law which takes away or abridges the rights conferred by this Part and any law made in contravention of this clause shall, to the extent of the contravention, be void.\n(3) In this article, unless the context otherwise requires,—\n(a) 'law' includes any Ordinance, order, bye-law, rule, regulation, notification, custom or usage having in the territory of India the force of law;\n(b) 'laws in force' includes laws passed or made by a Legislature or other competent authority in the territory of India before the commencement of this Constitution and not previously repealed, notwithstanding that any such law or any part thereof may not be then in operation either at all or in particular areas.\n(4) Nothing in this article shall apply to any amendment of this Constitution made under article 368.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Kesavananda Bharati v. State of Kerala (1973)", caseSummary: "In this seminal case, the Supreme Court held that while Parliament has the power to amend the Constitution (including fundamental rights), it cannot alter its 'basic structure'. This ruling established that even constitutional amendments are subject to judicial review under the principles of Article 13." },
      { caseName: "A.K. Gopalan v. State of Madras (1950)", caseSummary: "In an early interpretation, the court took a narrow view, holding that 'law' in Article 13 meant only ordinary laws, not constitutional amendments. This view was later overruled in subsequent cases, culminating in the Kesavananda Bharati judgment." }
    ],
    tags: ["Fundamental Rights", "Judicial Review", "Basic Structure"],
    limitationsAndExceptions: "A law is not automatically void; it must be challenged and declared void by a competent court. Through the doctrine of 'basic structure', the Supreme Court has held that even constitutional amendments can be struck down if they violate the fundamental essence of the Constitution, thereby placing a check on Parliament's amending power."
  },
  {
    id: "Article 14",
    title: "Equality before law",
    summary: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    detailedExplanation: "Article 14 is the cornerstone of equality rights in India. It guarantees this right to 'any person', including citizens, non-citizens, and legal persons. It has two facets: 'Equality before the law', a concept from British law, implies the absence of any special privileges and the equal subjection of all individuals to the ordinary law of the land. 'Equal protection of the laws', from the American Constitution, is a positive concept that means equals should be treated equally. It allows for 'reasonable classification' where the state can treat different groups differently, but this classification must be based on an 'intelligible differentia' (a discernible difference) and must have a rational nexus to the objective sought to be achieved by the law.",
    fullText: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "E. P. Royappa v. State of Tamil Nadu (1974)", caseSummary: "The Supreme Court expanded the scope of Article 14 beyond the traditional 'reasonable classification' test. It held that equality is a dynamic concept and is antithetical to arbitrariness. Thus, any state action that is arbitrary, irrational, or unreasonable is a violation of Article 14." },
      { caseName: "Maneka Gandhi v. Union of India (1978)", caseSummary: "This case further strengthened the principle against arbitrariness, holding that the procedure established by law under Article 21 must also pass the test of reasonableness under Article 14. It established a 'golden triangle' between Articles 14, 19, and 21." }
    ],
    tags: ["Fundamental Rights", "Equality"],
    limitationsAndExceptions: "The right to equality is not absolute. It permits 'reasonable classification' by the State, meaning different groups can be treated differently if the classification is based on an intelligible differentia and has a rational nexus to the law's objective. It does not command mathematical or universal equality."
  },
  {
    id: "Article 15",
    title: "Prohibition of discrimination",
    summary: "Prohibits the State from discriminating against any citizen on grounds only of religion, race, caste, sex, or place of birth. Allows for special provisions for women and children.",
    detailedExplanation: "Article 15 is a specific application of the general principle of equality laid down in Article 14, but it applies only to citizens. It prohibits the state from discriminating on five specific grounds. The word 'only' is significant; it means discrimination on other grounds is not prohibited. Clause (2) extends this prohibition to individuals, preventing discrimination in access to public places. Crucially, the article also embodies the concept of 'protective discrimination' or affirmative action. Clauses (3), (4), (5) and (6) are enabling provisions that allow the state to make special provisions for the advancement of women, children, and socially and educationally backward classes (SEBCs), including Scheduled Castes (SCs), Scheduled Tribes (STs), and Economically Weaker Sections (EWS).",
    fullText: "(1) The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.\n(2) No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to—\n(a) access to shops, public restaurants, hotels and places of public entertainment; or\n(b) the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.\n(3) Nothing in this article shall prevent the State from making any special provision for women and children.\n(4) Nothing in this article or in clause (2) of article 29 shall prevent the State from making any special provision for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes and the Scheduled Tribes.\n(5) Nothing in this article or in sub-clause (g) of clause (1) of article 19 shall prevent the State from making any special provision, by law, for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes or the Scheduled Tribes in so far as such special provisions relate to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30.\n(6) Nothing in this article or sub-clause (g) of clause (1) of article 19 or clause (2) of article 29 shall prevent the State from making—\n(a) any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5); and\n(b) any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5) in so far as such special provisions relate to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30, which in the case of reservation would be in addition to the existing reservations and subject to a maximum of ten per cent. of the total seats in each category.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Indra Sawhney v. Union of India (1992)", caseSummary: "Also known as the Mandal Commission case, it upheld reservations for Other Backward Classes (OBCs) but capped total reservations at 50% and introduced the 'creamy layer' concept to exclude affluent members of a backward class from reservation benefits." },
      { caseName: "State of Madras v. Champakam Dorairajan (1951)", caseSummary: "This case led to the First Constitutional Amendment, which added Article 15(4). The court had struck down a government order for caste-based reservations in educational institutions, stating it violated Article 29(2). The amendment enabled the state to make special provisions for backward classes." }
    ],
    tags: ["Fundamental Rights", "Equality", "Discrimination", "Reservation"],
    limitationsAndExceptions: "The prohibition applies to discrimination on the specified grounds 'only', meaning discrimination on other grounds (like residence or qualification) may be permissible. The article itself contains exceptions in clauses (3), (4), (5), and (6), allowing the state to make special provisions (affirmative action) for women, children, and socially, educationally, or economically backward classes."
  },
  {
    id: "Article 16",
    title: "Equality of opportunity in public employment",
    summary: "Guarantees equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.",
    detailedExplanation: "Article 16 is another specific application of the principle of equality, focusing on public employment. It ensures that all citizens have an equal opportunity for jobs under the state. It prohibits discrimination on seven grounds: religion, race, caste, sex, descent, place of birth, and residence. Similar to Article 15, it contains enabling clauses for affirmative action. Article 16(4) allows the state to make provisions for the reservation of appointments or posts in favour of any backward class of citizens which, in the opinion of the state, is not adequately represented in public services. Subsequent amendments have added provisions for reservations in promotions and for economically weaker sections (EWS).",
    fullText: "(1) There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.\n(2) No citizen shall, on grounds only of religion, race, caste, sex, descent, place of birth, residence or any of them, be ineligible for, or discriminated against in respect of, any employment or office under the State.\n(3) Nothing in this article shall prevent Parliament from making any law prescribing, in regard to a class or classes of employment or appointment to an office under the Government of, or any local or other authority within, a State or Union territory, any requirement as to residence within that State or Union territory prior to such employment or appointment.\n(4) Nothing in this article shall prevent the State from making any provision for the reservation of appointments or posts in favour of any backward class of citizens which, in the opinion of the State, is not adequately represented in the services under the State.\n(4A) Nothing in this article shall prevent the State from making any provision for reservation in matters of promotion, with consequential seniority, to any class or classes of posts in the services under the State in favour of the Scheduled Castes and the Scheduled Tribes which, in the opinion of the State, are not adequately represented in the services under the State.\n(4B) Nothing in this article shall prevent the State from considering any unfilled vacancies of a year which are reserved for being filled up in that year in accordance with any provision for reservation made under clause (4) or clause (4A) as a separate class of vacancies to be filled up in any succeeding year or years and such class of vacancies shall not be considered together with the vacancies of the year in which they are being filled up for determining the ceiling of fifty per cent. reservation on total number of vacancies of that year.\n(5) Nothing in this article shall affect the operation of any law which provides that the incumbent of an office in connection with the affairs of any religious or denominational institution or any member of the governing body thereof shall be a person professing a particular religion or belonging to a particular denomination.\n(6) Nothing in this article shall prevent the State from making any provision for the reservation of appointments or posts in favour of any economically weaker sections of citizens other than the classes mentioned in clause (4), in addition to the existing reservation and subject to a maximum of ten per cent. of the posts in each category.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "M. Nagaraj v. Union of India (2006)", caseSummary: "The court upheld the constitutional validity of amendments enabling reservation in promotions for SCs and STs but laid down three compelling requirements for the state: demonstrating the backwardness of the class, the inadequacy of their representation, and ensuring administrative efficiency is maintained." },
      { caseName: "Jarnail Singh v. Lachhmi Narain Gupta (2018)", caseSummary: "The court modified the Nagaraj judgment by holding that the state does not need to collect quantifiable data to prove the backwardness of SCs and STs for reservations in promotions. However, it applied the 'creamy layer' principle to exclude affluent SC/ST members from these benefits." }
    ],
    tags: ["Fundamental Rights", "Equality", "Public Employment", "Reservation"],
    limitationsAndExceptions: "This article allows for reservation in public employment for backward classes, SCs, STs, and EWS. Parliament can also prescribe residence as a condition for certain state or local employments (Clause 3). It also allows for religious considerations in appointments to religious institutions (Clause 5). The state can set necessary qualifications for any post."
  },
  {
    id: "Article 17",
    title: "Abolition of Untouchability",
    summary: "'Untouchability' is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of 'Untouchability' shall be an offence.",
    detailedExplanation: "This is a unique and powerful provision aimed at eradicating the deep-rooted social evil of untouchability. It is one of the few fundamental rights that is absolute, with no exceptions, and is enforceable against both the state and private individuals. The Constitution does not define 'untouchability,' but it is understood in its historical context as the practice of imposing social disabilities on certain classes of people by reason of their birth. To enforce this article, Parliament has enacted punitive laws, most notably the Protection of Civil Rights Act, 1955, and the more stringent Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989.",
    fullText: "'Untouchability' is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of 'Untouchability' shall be an offence punishable in accordance with law.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "People's Union for Democratic Rights v. Union of India (1982)", caseSummary: "The Supreme Court held that the fundamental rights under Articles 17 and 24 are enforceable against private individuals as well, and it is the constitutional duty of the state to take necessary steps to prevent their violation." },
      { caseName: "State of Karnataka v. Appa Balu Ingale (1993)", caseSummary: "The court upheld the conviction of individuals for preventing Dalits from taking water from a public well, affirming that the objective of Article 17 is to create a new, ideal society free from caste-based hatred and to ensure the restoration of the Dalits' dignity." }
    ],
    tags: ["Fundamental Rights", "Equality", "Untouchability", "Discrimination"],
    limitationsAndExceptions: "This right is considered absolute and has no constitutional limitations. Its effectiveness, however, relies on the enforcement of laws passed by Parliament to punish acts of untouchability, such as the Protection of Civil Rights Act, 1955."
  },
  {
    id: "Article 18",
    title: "Abolition of titles",
    summary: "Prohibits the State from conferring titles. Citizens of India are prohibited from accepting any title from a foreign state. Military and academic distinctions are exempt.",
    detailedExplanation: "This article aims to establish social equality by abolishing hereditary titles of nobility like 'Maharaja', 'Rai Bahadur', 'Raja', etc., which were conferred by colonial rulers and created a hierarchical social order. It prohibits the state from conferring any titles except for military and academic distinctions, which are seen as rewards for merit. It also prevents Indian citizens from accepting titles from foreign states without the consent of the President. The Supreme Court has clarified that national awards like the Bharat Ratna, Padma Vibhushan, etc., are awards and not titles, and therefore not violative of Article 18. They cannot, however, be used as prefixes or suffixes to a person's name.",
    fullText: "(1) No title, not being a military or academic distinction, shall be conferred by the State.\n(2) No citizen of India shall accept any title from any foreign State.\n(3) No person who is not a citizen of India shall, while he holds any office of profit or trust under the State, accept without the consent of the President any title from any foreign State.\n(4) No person holding any office of profit or trust under the State shall, without the consent of the President, accept any present, emolument, or office of any kind from or under any foreign State.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Balaji Raghavan v. Union of India (1996)", caseSummary: "The Supreme Court upheld the constitutional validity of national awards like Bharat Ratna and Padma awards, clarifying that they are not 'titles' within the meaning of Article 18. The Court held that these are awards for meritorious service and not titles of nobility." },
      { caseName: "Indira Jaising v. Supreme Court of India (2017)", caseSummary: "While not directly on Article 18, this case addressed the use of the 'Senior Advocate' designation. The petitioner argued it was a title, but the court held it was a distinction based on merit and not a title, reinforcing the idea that merit-based distinctions are permissible." }
    ],
    tags: ["Fundamental Rights", "Equality"],
    limitationsAndExceptions: "The article explicitly exempts military and academic distinctions. The Supreme Court has ruled that National Awards like the Bharat Ratna are not titles of nobility and are therefore not prohibited, but they cannot be used as prefixes or suffixes to names."
  },
  {
    id: "Article 19",
    title: "Protection of certain rights regarding freedom of speech, etc.",
    summary: "Guarantees six fundamental freedoms: speech and expression, assembly, association, movement, residence, and profession, subject to reasonable restrictions.",
    detailedExplanation: "Article 19(1) is the soul of personal liberties in India, guaranteeing six fundamental freedoms that form the bedrock of a democratic society. These are available only to citizens. However, these freedoms are not absolute and can be curtailed. Clauses (2) to (6) of Article 19 empower the state to impose 'reasonable restrictions' on these freedoms. The grounds for these restrictions are specific to each freedom, and include interests like the sovereignty and integrity of India, security of the state, public order, decency or morality, and incitement to an offence. The judiciary has the power to determine whether a restriction is 'reasonable' or not.",
    fullText: "(1) All citizens shall have the right—\n(a) to freedom of speech and expression;\n(b) to assemble peaceably and without arms;\n(c) to form associations or unions or co-operative societies;\n(d) to move freely throughout the territory of India;\n(e) to reside and settle in any part of the territory of India; and\n(g) to practise any profession, or to carry on any occupation, trade or business.\n\n(2) Nothing in sub-clause (a) of clause (1) shall affect the operation of any existing law, or prevent the State from making any law, in so far as such law imposes reasonable restrictions on the exercise of the right conferred by the said sub-clause in the interests of the sovereignty and integrity of India, the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation or incitement to an offence.\n\n(3) Nothing in sub-clause (b) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty and integrity of India or public order, reasonable restrictions on the exercise of the right conferred by the said sub-clause.\n\n(4) Nothing in sub-clause (c) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty and integrity of India or public order or morality, reasonable restrictions on the exercise of the right conferred by the said sub-clause.\n\n(5) Nothing in sub-clauses (d) and (e) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, reasonable restrictions on the exercise of any of the rights conferred by the said sub-clauses either in the interests of the general public or for the protection of the interests of any Scheduled Tribe.\n\n(6) Nothing in sub-clause (g) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the general public, reasonable restrictions on the exercise of the right conferred by the said sub-clause, and, in particular, nothing in the said sub-clause shall affect the operation of any existing law in so far as it relates to, or prevent the State from making any law relating to,\n(i) the professional or technical qualifications necessary for practising any profession or carrying on any occupation, trade or business, or\n(ii) the carrying on by the State, or by a corporation owned or controlled by the State, of any trade, business, industry or service, whether to the exclusion, complete or partial, of citizens or otherwise.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
       { caseName: "Shreya Singhal v. Union of India (2015)", caseSummary: "The Supreme Court struck down Section 66A of the Information Technology Act, 2000, as unconstitutional for being vague and overbroad, thus violating the freedom of speech and expression. It was a landmark judgment for online free speech." },
       { caseName: "Indian Express Newspapers v. Union of India (1985)", caseSummary: "The Court held that the freedom of press is included within the freedom of speech and expression under Article 19(1)(a). It stated that this freedom includes the right to circulation and is essential for a democracy." }
    ],
    tags: ["Fundamental Rights", "Freedom of Speech", "Liberty"],
    limitationsAndExceptions: "The freedoms guaranteed are not absolute. They are subject to 'reasonable restrictions' specified in clauses (2) to (6) on grounds like sovereignty and integrity of India, security of the State, public order, decency, morality, defamation, or incitement to an offence. The judiciary determines if a restriction is 'reasonable'."
  },
  {
    id: "Article 20",
    title: "Protection in respect of conviction for offences",
    summary: "Provides protection against arbitrary and excessive punishment to an accused person, including protection against ex-post-facto law, double jeopardy, and self-incrimination.",
    detailedExplanation: "This article provides three crucial safeguards to any person accused of a crime, ensuring protection against arbitrary state action. (1) Protection against ex-post-facto laws: A person cannot be convicted for an act that was not an offence when it was committed, nor can they be subjected to a penalty greater than what was prescribed at the time. (2) Protection against double jeopardy: A person cannot be prosecuted and punished for the same offence more than once. This applies only to proceedings before a court of law or a judicial tribunal. (3) Protection against self-incrimination: An accused person cannot be compelled to be a witness against themselves. This is the 'right to silence'. These protections are fundamental to a fair criminal justice system.",
    fullText: "(1) No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the Act charged as an offence, nor be subjected to a penalty greater than that which might have been inflicted under the law in force at the time of the commission of the offence.\n(2) No person shall be prosecuted and punished for the same offence more than once.\n(3) No person accused of any offence shall be compelled to be a witness against himself.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
        { caseName: "Selvi v. State of Karnataka (2010)", caseSummary: "The Supreme Court held that compelling an accused to undergo narco-analysis, polygraph tests, or brain-mapping violates the protection against self-incrimination under Article 20(3). It affirmed that the right against self-incrimination is a crucial safeguard in criminal law." },
        { caseName: "Nandini Satpathy v. P.L. Dani (1978)", caseSummary: "The court gave a wide interpretation to the phrase 'compelled to be a witness against himself', holding that the protection extends to the pre-trial stage of police investigation. A person cannot be forced to answer questions that could be self-incriminatory." }
    ],
    tags: ["Fundamental Rights", "Criminal Justice", "Liberty"],
    limitationsAndExceptions: "Protection against ex-post-facto laws (Clause 1) applies only to criminal laws, not civil laws or taxes. Protection against double jeopardy (Clause 2) is only for prosecution and punishment before a court, not for departmental or administrative proceedings. Protection against self-incrimination (Clause 3) does not extend to the compulsory production of material objects or giving physical evidence like fingerprints."
  },
  {
    id: "Article 21",
    title: "Protection of life and personal liberty",
    summary: "No person shall be deprived of his life or personal liberty except according to procedure established by law. This right is available to both citizens and non-citizens.",
    detailedExplanation: "Considered the heart of the fundamental rights, Article 21 has the most expansive interpretation. The Supreme Court has transformed it from a mere guarantee against arbitrary executive action into a charter for a dignified life. 'Life' has been interpreted to mean more than mere physical existence; it includes the right to live with human dignity and all that goes along with it. 'Personal liberty' is also interpreted broadly. The phrase 'procedure established by law' has been interpreted to mean that the procedure must be fair, just, and reasonable, not arbitrary. The Court has read numerous unenumerated rights into Article 21, such as the right to a clean environment, right to privacy, right to speedy trial, right to health, and right to livelihood, making it a wellspring of human rights.",
    fullText: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Maneka Gandhi v. Union of India (1978)", caseSummary: "The Supreme Court held that the 'procedure established by law' under Article 21 must be fair, just, and reasonable. This landmark judgment effectively introduced the American concept of 'substantive due process' into Indian constitutional law and interlinked Articles 14, 19, and 21." },
      { caseName: "Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)", caseSummary: "A nine-judge bench unanimously affirmed that the Right to Privacy is a fundamental right, protected as an intrinsic part of the right to life and personal liberty under Article 21. This has had far-reaching implications for data protection and individual autonomy." }
    ],
    tags: ["Fundamental Rights", "Life and Liberty", "Privacy"],
    limitationsAndExceptions: "This right is not absolute and can be curtailed 'according to procedure established by law.' Following the Maneka Gandhi case, this procedure must be fair, just, and reasonable, not arbitrary. The State can lawfully deprive a person of life or liberty through such a valid legal procedure (e.g., imprisonment after a fair trial)."
  },
  {
    id: "Article 21A",
    title: "Right to education",
    summary: "The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.",
    detailedExplanation: "Inserted by the 86th Constitutional Amendment Act, 2002, this article elevated the right to education from a directive principle to a fundamental right. It casts a positive obligation on the state to provide free and compulsory elementary education to all children between the ages of six and fourteen. This was a landmark step towards achieving universal education and tackling child labour. To implement this fundamental right, the Parliament enacted the Right of Children to Free and Compulsory Education (RTE) Act in 2009, which lays down the norms and standards for schools and specifies the responsibilities of the government.",
    fullText: "The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Mohini Jain v. State of Karnataka (1992)", caseSummary: "In this case, the Supreme Court held that the right to education is a fundamental right that flows from the right to life under Article 21. This judgment paved the way for making education a fundamental right, although it was initially for higher education." },
      { caseName: "Unni Krishnan, J.P. v. State of Andhra Pradesh (1993)", caseSummary: "The court modified the Mohini Jain verdict, holding that the right to education is a fundamental right under Article 21, but it is limited to free and compulsory education for children up to the age of 14. This judgment was instrumental in the insertion of Article 21A." }
    ],
    tags: ["Fundamental Rights", "Education"],
    limitationsAndExceptions: "The right is specific to the age group of 6 to 14 years. It does not cover education before age 6 (which is a DPSP under Article 45) or higher education. The manner of providing education is determined by the State through law (e.g., the RTE Act, 2009)."
  },
  {
    id: "Article 22",
    title: "Protection against arrest and detention",
    summary: "Provides procedural safeguards for individuals against arbitrary arrest and detention, including the right to be informed of the grounds of arrest and the right to consult a lawyer.",
    detailedExplanation: "This article grants crucial safeguards to persons who are arrested or detained. It is divided into two parts. The first part (Clauses 1 & 2) deals with arrests under ordinary law and provides four rights: (1) the right to be informed of the grounds of arrest, (2) the right to consult and be defended by a lawyer, (3) the right to be produced before a magistrate within 24 hours of arrest (excluding travel time), and (4) the right not to be detained beyond 24 hours without a magistrate's order. The second part (Clauses 4-7) deals with preventive detention laws, where a person is detained to prevent them from committing a crime. While it provides some safeguards (like review by an Advisory Board), these are much weaker than for ordinary arrests. These protections are not available to enemy aliens.",
    fullText: "(1) No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest nor shall he be denied the right to consult, and to be defended by, a legal practitioner of his choice.\n(2) Every person who is arrested and detained in custody shall be produced before the nearest magistrate within a period of twenty-four hours of such arrest excluding the time necessary for the journey from the place of arrest to the court of the magistrate and no such person shall be detained in custody beyond the said period without the authority of a magistrate.\n(3) Nothing in clauses (1) and (2) shall apply—\n(a) to any person who for the time being is an enemy alien; or\n(b) to any person who is arrested or detained under any law providing for preventive detention.\n(4) No law providing for preventive detention shall authorise the detention of a person for a longer period than three months unless—\n(a) an Advisory Board consisting of persons who are, or have been, or are qualified to be appointed as, Judges of a High Court has reported before the expiration of the said period of three months that there is in its opinion sufficient cause for such detention...\n(5) When any person is detained in pursuance of an order made under any law providing for preventive detention, the authority making the order shall, as soon as may be, communicate to such person the grounds on which the order has been made and shall afford him the earliest opportunity of making a representation against the order.\n(6) Nothing in clause (5) shall require the authority making any such order as is referred to in that clause to disclose facts which such authority considers to be against the public interest to disclose.\n(7) Parliament may by law prescribe—\n(a) the circumstances under which, and the class or classes of cases in which, a person may be detained for a period longer than three months under any law providing for preventive detention without obtaining the opinion of an Advisory Board in accordance with the provisions of sub-clause (a) of clause (4);...",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "D.K. Basu v. State of West Bengal (1997)", caseSummary: "The Supreme Court laid down detailed guidelines that the police must follow during arrest and detention to prevent custodial violence and protect the rights of the arrested person under Articles 21 and 22. These are known as the 'D.K. Basu guidelines'." },
      { caseName: "A.K. Roy v. Union of India (1982)", caseSummary: "In a case challenging the National Security Act, the court upheld the validity of preventive detention laws but emphasized that the procedure must be fair and reasonable. It held that the detenu has the right to legal representation before the Advisory Board, but not necessarily a lawyer." }
    ],
    tags: ["Fundamental Rights", "Arrest and Detention", "Criminal Justice", "Liberty"],
    limitationsAndExceptions: "The safeguards in clauses (1) and (2) are not available to an enemy alien or a person arrested or detained under a law providing for preventive detention. Preventive detention laws themselves are a significant limitation on personal liberty, though subject to certain procedural safeguards within Article 22 itself."
  },
   {
    id: "Article 23",
    title: "Prohibition of traffic in human beings and forced labour",
    summary: "Prohibits human trafficking, 'begar' (forced labour without payment), and other similar forms of forced labour. Any contravention of this provision is a punishable offence.",
    detailedExplanation: "This article is a crucial safeguard against exploitation. It explicitly outlaws traffic in human beings (which includes practices like slavery, prostitution, and devadasis) and all forms of forced labour. The state is required to enact laws to punish these acts. The article allows for one exception: the state can impose compulsory service for public purposes (like military service or social service), but in doing so, it cannot discriminate on grounds of religion, race, caste, or class.",
    fullText: "(1) Traffic in human beings and begar and other similar forms of forced labour are prohibited and any contravention of this provision shall be an offence punishable in accordance with law.\n(2) Nothing in this article shall prevent the State from imposing compulsory service for public purposes, and in imposing such service the State shall not make any discrimination on grounds only of religion, race, caste or class or any of them.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
        { caseName: "People's Union for Democratic Rights v. Union of India (1982)", caseSummary: "Also known as the Asiad workers case, the court interpreted 'forced labour' broadly to include not just physical force but also compulsion arising from economic circumstances. It held that paying less than the minimum wage amounts to forced labour." }
    ],
    tags: ["Fundamental Rights", "Exploitation", "Forced Labour"],
    limitationsAndExceptions: "The article provides an exception for the State to impose compulsory service for public purposes, such as military conscription or community service, without payment. However, the State cannot discriminate on grounds of religion, race, caste, or class while imposing such service."
  },
  {
    id: "Article 24",
    title: "Prohibition of employment of children in factories, etc.",
    summary: "Prohibits the employment of children below the age of fourteen years in any factory, mine or other hazardous employment.",
    detailedExplanation: "This article is an absolute prohibition aimed at protecting the health and well-being of young children. It forbids their employment in hazardous occupations. This provision, read with the Right to Education under Article 21A, forms the constitutional basis for laws against child labour in India, such as the Child Labour (Prohibition and Regulation) Act, 1986, and the more recent amendments.",
    fullText: "No child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "M.C. Mehta v. State of Tamil Nadu (1996)", caseSummary: "The court gave exhaustive directions on how to eradicate child labour, including the creation of a Child Labour Rehabilitation Welfare Fund and ensuring education for the children involved." }
    ],
    tags: ["Fundamental Rights", "Exploitation", "Child Labour"],
    limitationsAndExceptions: "The prohibition in this article is specific to employment in factories, mines, or other hazardous jobs. It does not explicitly prohibit child labour in non-hazardous occupations, although this is now largely covered by the Child Labour (Prohibition and Regulation) Act."
  },
  {
    id: "Article 25",
    title: "Freedom of conscience and free profession, practice and propagation of religion",
    summary: "Guarantees all persons the freedom of conscience and the right to freely profess, practice and propagate religion, subject to public order, morality and health.",
    detailedExplanation: "This article forms the core of India's commitment to secularism, guaranteeing religious freedom to all persons. It has four aspects: (1) Freedom of conscience: Inner freedom to mould one's relation with God or creatures in whatever way one desires. (2) Right to profess: Declaration of one's religious beliefs openly. (3) Right to practice: Performance of religious worship, rituals, and ceremonies. (4) Right to propagate: Transmission and dissemination of one's religious beliefs to others. The Supreme Court has clarified that the right to propagate does not include the right to convert another person by force, fraud, or allurement. This freedom is not absolute and is subject to restrictions on grounds of public order, morality, health, and other provisions of fundamental rights.",
    fullText: "(1) Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion.\n(2) Nothing in this article shall affect the operation of any existing law or prevent the State from making any law—\n(a) regulating or restricting any economic, financial, political or other secular activity which may be associated with religious practice;\n(b) providing for social welfare and reform or the throwing open of Hindu religious institutions of a public character to all classes and sections of Hindus.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Rev. Stainislaus v. State of Madhya Pradesh (1977)", caseSummary: "The Supreme Court held that the right to 'propagate' religion under Article 25 does not include the right to convert. It clarified that propagation means spreading one's beliefs, but conversion by force, fraud, or inducement is not protected." },
      { caseName: "Indian Young Lawyers Association v. State of Kerala (2018)", caseSummary: "In the Sabarimala Temple entry case, the court held that the exclusion of women of a certain age group from the temple violated their fundamental right to freedom of religion under Article 25. It affirmed that religious practices cannot be a ground for gender discrimination." }
    ],
    tags: ["Fundamental Rights", "Religion", "Secularism"],
    limitationsAndExceptions: "This right is subject to public order, morality, health, and other Fundamental Rights. The State can regulate or restrict any economic, financial, political, or other secular activity associated with religious practice. The right to propagate does not include the right to convert by force, fraud, or allurement."
  },
  {
    id: "Article 26",
    title: "Freedom to manage religious affairs",
    summary: "Gives every religious denomination the right to establish and maintain institutions for religious and charitable purposes, manage its own affairs in matters of religion, own and acquire property, and administer such property.",
    detailedExplanation: "While Article 25 grants religious freedom to individuals, Article 26 grants it to religious groups or denominations. It gives them a degree of autonomy in managing their own affairs. However, this right is also subject to public order, morality, and health. The state can regulate the administration of property owned by religious denominations through secular laws.",
    fullText: "Subject to public order, morality and health, every religious denomination or any section thereof shall have the right—\n(a) to establish and maintain institutions for religious and charitable purposes;\n(b) to manage its own affairs in matters of religion;\n(c) to own and acquire movable and immovable property; and\n(d) to administer such property in accordance with law.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
        { caseName: "The Commissioner, Hindu Religious Endowments, Madras v. Sri Lakshmindra Thirtha Swamiar of Sri Shirur Mutt (1954)", caseSummary: "The 'Shirur Mutt' case was pivotal in defining what constitutes a 'religious denomination' and distinguishing between essential religious matters and secular administrative activities, which can be regulated by the state." }
    ],
    tags: ["Fundamental Rights", "Religion", "Secularism"],
    limitationsAndExceptions: "This right is also subject to public order, morality, and health. While denominations can manage their own religious affairs, the right to administer property is 'in accordance with law,' meaning the State can enact laws for the proper administration of such properties."
  },
  {
    id: "Article 27",
    title: "Freedom as to payment of taxes for promotion of any particular religion",
    summary: "No person shall be compelled to pay any taxes, the proceeds of which are specifically appropriated for the promotion or maintenance of any particular religion or religious denomination.",
    detailedExplanation: "This article reinforces the secular character of the Indian state. It prohibits the state from using public funds collected through taxes to promote any specific religion. This means the state cannot favour one religion over another. However, the state is permitted to charge a fee for providing secular services or administration to religious institutions.",
    fullText: "No person shall be compelled to pay any taxes, the proceeds of which are specifically appropriated in payment of expenses for the promotion or maintenance of any particular religion or religious denomination.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [],
    tags: ["Fundamental Rights", "Religion", "Secularism", "Taxation"],
    limitationsAndExceptions: "The article prohibits taxes for promoting a specific religion, but it does not prohibit the charging of a fee. A fee can be levied to cover the costs of secular administration of religious institutions, provided the fee is not a disguised tax."
  },
  {
    id: "Article 28",
    title: "Freedom as to attendance at religious instruction or religious worship in certain educational institutions",
    summary: "Prohibits religious instruction in any educational institution wholly maintained out of State funds. In other institutions, no person shall be required to take part in religious instruction without their (or their guardian's) consent.",
    detailedExplanation: "This article deals with the role of religion in state-funded educational institutions. It creates a distinction: (1) Institutions wholly maintained by the state cannot provide any religious instruction. (2) Institutions administered by the state but established under a trust requiring religious instruction are exempt. (3) In state-recognised or state-aided private institutions, religious instruction is permitted, but students cannot be compelled to attend without their consent (or their guardian's consent if they are a minor).",
    fullText: "(1) No religious instruction shall be provided in any educational institution wholly maintained out of State funds.\n(2) Nothing in clause (1) shall apply to an educational institution which is administered by the State but has been established under any endowment or trust which requires that religious instruction shall be imparted in such institution.\n(3) No person attending any educational institution recognised by the State or receiving aid out of State funds shall be required to take part in any religious instruction that may be imparted in such institution or to attend any religious worship that may be conducted in such institution or in any premises attached thereto unless such person or, if such person is a minor, his guardian has given his consent thereto.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [],
    tags: ["Fundamental Rights", "Religion", "Education", "Secularism"],
    limitationsAndExceptions: "The absolute prohibition on religious instruction applies only to institutions 'wholly maintained out of State funds'. It does not apply to institutions that are state-administered but established under an endowment or trust requiring religious instruction, or to institutions that are state-aided or recognized."
  },
  {
    id: "Article 29",
    title: "Protection of interests of minorities",
    summary: "Any section of the citizens residing in India having a distinct language, script or culture of its own shall have the right to conserve the same. No citizen shall be denied admission into any state-maintained or state-aided educational institution on grounds only of religion, race, caste, or language.",
    detailedExplanation: "This article provides protection to both religious and linguistic minorities. Clause (1) is a broad right for any section of citizens to preserve their unique culture, language, and script. Clause (2) is a specific right that prohibits discrimination in admission to state-funded or state-aided educational institutions, ensuring equal access for all citizens, including those from minority communities.",
    fullText: "(1) Any section of the citizens residing in the territory of India or any part thereof having a distinct language, script or culture of its own shall have the right to conserve the same.\n(2) No citizen shall be denied admission into any educational institution maintained by the State or receiving aid out of State funds on grounds only of religion, race, caste, language or any of them.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "St. Xaviers College v. State of Gujarat (1974)", caseSummary: "The court held that the right to conserve language, script, or culture includes the right to establish and administer educational institutions for that purpose." }
    ],
    tags: ["Fundamental Rights", "Minority Rights", "Education", "Culture"],
    limitationsAndExceptions: "The right to conserve culture is not absolute and cannot be used to justify practices that violate public order, morality, or other fundamental rights. Clause (2) is a specific anti-discrimination provision that applies only to state-maintained or state-aided institutions."
  },
  {
    id: "Article 30",
    title: "Right of minorities to establish and administer educational institutions",
    summary: "All minorities, whether based on religion or language, have the right to establish and administer educational institutions of their choice. The State shall not discriminate in granting aid to such institutions.",
    detailedExplanation: "This article provides a specific and crucial right to religious and linguistic minorities to establish their own educational institutions. This is key to helping them preserve their culture and language. The state is also barred from discriminating against these institutions when providing financial aid. The Supreme Court has interpreted this right to give minorities substantial autonomy in managing their institutions, including admissions and appointments.",
    fullText: "(1) All minorities, whether based on religion or language, shall have the right to establish and administer educational institutions of their choice.\n(1A) In making any law providing for the compulsory acquisition of any property of an educational institution established and administered by a minority, referred to in clause (1), the State shall ensure that the amount fixed by or determined under such law for the acquisition of such property is such as would not restrict or abrogate the right guaranteed under that clause.\n(2) The State shall not, in granting aid to educational institutions, discriminate against any educational institution on the ground that it is under the management of a minority, whether based on religion or language.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "T.M.A. Pai Foundation v. State of Karnataka (2002)", caseSummary: "In this landmark 11-judge bench decision, the court extensively interpreted Article 30, balancing the autonomy of minority institutions with the state's regulatory power in the interest of educational excellence." }
    ],
    tags: ["Fundamental Rights", "Minority Rights", "Education"],
    limitationsAndExceptions: "The right to administer does not mean the right to maladminister. The State can impose reasonable regulations relating to academic standards, employee service conditions, and eligibility criteria for students, as long as these regulations do not destroy the minority character of the institution."
  },
  {
    id: "Article 31",
    title: "Right to Property (Repealed)",
    summary: "This article, which originally guaranteed the fundamental right to property, was repealed by the 44th Amendment Act in 1978. The right to property is now a legal right under Article 300-A.",
    detailedExplanation: "Originally, Article 31 guaranteed the right to property. However, it became one of the most controversial provisions, leading to numerous constitutional amendments as it posed challenges to the government's land reform and socialist policies. To overcome these hurdles, it was first amended and later completely removed from Part III (Fundamental Rights) by the 44th Amendment in 1978. The right to property was then placed as a legal/constitutional right under Article 300-A, which states that no person shall be deprived of their property save by authority of law. This means the right is no longer a fundamental right, but it is still protected against arbitrary executive action.",
    fullText: "[Repealed by the Constitution (Forty-fourth Amendment) Act, 1978]",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
        { caseName: "I.C. Golaknath v. State of Punjab (1967)", caseSummary: "The court, in a case involving property rights, held that Parliament could not amend fundamental rights. This decision was later overruled in the Kesavananda Bharati case." }
    ],
    tags: ["Fundamental Rights", "Property", "Repealed"],
    limitationsAndExceptions: "This article has been repealed. The primary limitation is that the right to property is no longer a fundamental right. It is now a constitutional right under Article 300-A, meaning a person can be deprived of their property by authority of law, and its violation cannot be directly challenged in the Supreme Court under Article 32."
  },
  {
    id: "Article 32",
    title: "Remedies for enforcement of fundamental rights",
    summary: "Guarantees the right to move the Supreme Court for the enforcement of Fundamental Rights. The Supreme Court can issue writs like habeas corpus, mandamus, prohibition, certiorari, and quo warranto.",
    detailedExplanation: "Dr. B.R. Ambedkar described this article as the 'very heart and soul' of the Constitution, without which Part III would be meaningless. It is a fundamental right in itself, which guarantees an effective remedy for the enforcement of other fundamental rights. It designates the Supreme Court as the protector and guarantor of these rights. The Court is empowered to issue five types of writs: Habeas Corpus ('to have the body of'), Mandamus ('we command'), Prohibition ('to forbid'), Certiorari ('to be certified'), and Quo Warranto ('by what authority'). The right to move the Supreme Court under Article 32 can only be suspended during a national emergency.",
    fullText: "(1) The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed.\n(2) The Supreme Court shall have power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari, whichever may be appropriate, for the enforcement of any of the rights conferred by this Part.\n(3) Without prejudice to the powers conferred on the Supreme Court by clauses (1) and (2), Parliament may by law empower any other court to exercise within the local limits of its jurisdiction all or any of the powers exercisable by the Supreme Court under clause (2).\n(4) The right guaranteed by this article shall not be suspended except as otherwise provided for by this Constitution.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "L. Chandra Kumar v. Union of India (1997)", caseSummary: "The Supreme Court held that the power of judicial review of the High Courts under Article 226 and the Supreme Court under Article 32 is a 'basic feature' of the Constitution and cannot be taken away by a constitutional amendment." },
      { caseName: "Bandhua Mukti Morcha v. Union of India (1984)", caseSummary: "The court expanded the scope of Article 32, stating that it is not confined to issuing prerogative writs. It can include any procedure, including appointing commissions or taking evidence, to ensure justice. This case was a landmark in Public Interest Litigation (PIL)." }
    ],
    tags: ["Fundamental Rights", "Judicial Review", "Writs", "Supreme Court"],
    limitationsAndExceptions: "This right can be suspended by the President during a National Emergency under Article 359. The remedy under Article 32 is available only for the violation of Fundamental Rights (Part III) and not for other legal or constitutional rights, for which a person must approach the High Court under Article 226 or a lower court."
  },
   {
    id: "Article 33",
    title: "Power of Parliament to modify the rights in their application to Forces, etc.",
    summary: "Allows Parliament to restrict or abrogate the fundamental rights of members of the Armed Forces, paramilitary forces, police forces, and intelligence agencies to ensure the proper discharge of their duties and maintenance of discipline.",
    detailedExplanation: "This article grants Parliament the power to make laws that limit the fundamental rights of personnel in specific crucial services. The purpose is to ensure that discipline and duty are maintained within these uniformed and intelligence services, which is vital for national security. The rights that can be restricted include freedom of speech, association, etc. Any law made under this article cannot be challenged in court on the ground that it violates fundamental rights.",
    fullText: "Parliament may, by law, determine to what extent any of the rights conferred by this Part shall, in their application to,—\n(a) the members of the Armed Forces; or\n(b) the members of the Forces charged with the maintenance of public order; or\n(c) persons employed in any bureau or other organisation established by the State for purposes of intelligence or counter intelligence; or\n(d) person employed in, or in connection with, the telecommunication systems set up for the purposes of any Force, bureau or organisation referred to in clauses (a) to (c),\nbe restricted or abrogated so as to ensure the proper discharge of their duties and the maintenance of discipline among them.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [],
    tags: ["Fundamental Rights", "Parliament", "Armed Forces"],
    limitationsAndExceptions: "This is an explicit exception to Fundamental Rights. The power to make such restrictive laws is vested exclusively with the Parliament, not state legislatures. A law made under this article cannot be challenged on the grounds of violating Part III rights."
  },
  {
    id: "Article 34",
    title: "Restriction on rights while martial law is in force",
    summary: "Restricts fundamental rights while martial law is in force in any area. It empowers Parliament to indemnify any government servant for acts done in connection with the maintenance or restoration of order.",
    detailedExplanation: "This article provides a constitutional basis for the imposition of martial law. While the Constitution does not define 'martial law,' it implies military rule. When martial law is in force, the fundamental rights can be restricted. Furthermore, Parliament can pass an 'Act of Indemnity' to protect officials from legal action for acts committed while maintaining order under martial law. This is an extraordinary provision for dealing with situations like war, invasion, or armed rebellion.",
    fullText: "Notwithstanding anything in the foregoing provisions of this Part, Parliament may by law indemnify any person in the service of the Union or of a State or any other person in respect of any act done by him in connection with the maintenance or restoration of order in any area within the territory of India where martial law was in force or validate any sentence passed, punishment inflicted, forfeiture ordered or other act done under martial law in such area.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [],
    tags: ["Fundamental Rights", "Parliament", "Martial Law", "Emergency"],
    limitationsAndExceptions: "This is another explicit exception to Fundamental Rights, applicable only in areas where martial law is in force. The power to indemnify officials for their actions rests solely with Parliament."
  },
  {
    id: "Article 35",
    title: "Legislation to give effect to the provisions of this Part",
    summary: "Gives Parliament, and not state legislatures, the exclusive power to make laws to give effect to certain specified fundamental rights and to prescribe punishment for offences related to them.",
    detailedExplanation: "This article ensures uniformity throughout India in the laws related to certain fundamental rights. It gives Parliament exclusive power to legislate on matters such as prescribing residence requirements for public employment (Article 16), empowering courts to issue writs (Article 32), restricting rights of armed forces personnel (Article 33), and indemnifying acts during martial law (Article 34). It also empowers Parliament to prescribe punishment for acts declared as offences under Part III, like untouchability (Article 17) and forced labour (Article 23).",
    fullText: "Notwithstanding anything in this Constitution,—\n(a) Parliament shall have, and the Legislature of a State shall not have, power to make laws—\n(i) with respect to any of the matters which under clause (3) of article 16, clause (3) of article 32, article 33 and article 34 may be provided for by law made by Parliament; and\n(ii) for prescribing punishment for those acts which are declared to be offences under this Part;\nand Parliament shall, as soon as may be after the commencement of this Constitution, make laws for prescribing punishment for the acts referred to in sub-clause (ii);...",
    part: "Part III: Fundamental Rights",
    landmarkCases: [],
    tags: ["Fundamental Rights", "Parliament"],
    limitationsAndExceptions: "This article is a limitation on the power of state legislatures. It ensures national uniformity in laws related to certain fundamental rights by granting exclusive legislative power to the Parliament in these specific matters."
  },
  // PART IV: DIRECTIVE PRINCIPLES OF STATE POLICY
  {
    id: "Article 36",
    title: "Definition",
    summary: "Defines 'the State' for the purposes of Part IV (Directive Principles) as having the same meaning as in Part III (Fundamental Rights).",
    detailedExplanation: "This article is a simple definitional clause. It states that for the purpose of the Directive Principles of State Policy (DPSP), the term 'State' has the same meaning as defined in Article 12 for Fundamental Rights. This means the directives are aimed at the same bodies: the central government and Parliament, state governments and legislatures, and all local and other authorities. This ensures that the responsibility to implement these principles is wide-ranging, covering all levels of government.",
    fullText: "In this Part, unless the context otherwise requires, 'the State' has the same meaning as in Part III.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [],
    tags: ["DPSP", "State"],
    limitationsAndExceptions: "Like other DPSPs, this is a guiding principle. The primary limitation of all DPSPs is their non-justiciable nature as outlined in Article 37."
  },
  {
    id: "Article 37",
    title: "Application of the principles",
    summary: "The Directive Principles are not enforceable by any court, but the principles laid down are fundamental in the governance of the country and it is the duty of the State to apply these principles in making laws.",
    detailedExplanation: "This article is the key to understanding the nature of Directive Principles of State Policy (DPSPs). It explicitly states that DPSPs are not justiciable, meaning a citizen cannot go to court to demand their implementation if the government fails to do so. However, it simultaneously declares that these principles are 'fundamental in the governance of the country' and makes it the 'duty of the State' to apply them in making laws. Thus, DPSPs are a moral and political compass for the government, guiding them towards establishing a just and egalitarian society. They serve as a benchmark for the electorate to judge the performance of a government.",
    fullText: "The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
        { caseName: "State of Madras v. Champakam Dorairajan (1951)", caseSummary: "In an early judgment, the Supreme Court held that Directive Principles must conform to and run subsidiary to Fundamental Rights. This led to constitutional amendments to give more weight to DPSPs." },
        { caseName: "Minerva Mills v. Union of India (1980)", caseSummary: "The court held that the Indian Constitution is founded on the bedrock of the balance between Fundamental Rights and Directive Principles. They are like two wheels of a chariot, and one cannot be given primacy over the other. This established the doctrine of 'harmony and balance' between Part III and Part IV." }
    ],
    tags: ["DPSP", "Governance", "Justiciability"],
    limitationsAndExceptions: "This article explicitly states the primary limitation of all DPSPs: they are 'not enforceable by any court.' They are fundamental guidelines for governance and impose a moral duty on the State, but they do not create legally enforceable rights for citizens."
  },
  {
    id: "Article 38",
    title: "State to secure a social order for the promotion of welfare of the people",
    summary: "The State shall strive to promote the welfare of the people by securing and protecting a social order in which justice—social, economic, and political—shall inform all the institutions of national life.",
    detailedExplanation: "This article is the essence of the welfare state ideal enshrined in the Constitution. It directs the state to create a social order that ensures justice in all its forms. The 44th Amendment added a second clause which further directs the state to minimise inequalities in income, status, facilities, and opportunities, not just among individuals but also among groups of people residing in different areas or engaged in different vocations. It lays down the broad vision for an egalitarian society.",
    fullText: "(1) The State shall strive to promote the welfare of the people by securing and protecting as effectively as it may a social order in which justice, social, economic and political, shall inform all the institutions of the national life.\n(2) The State shall, in particular, strive to minimise the inequalities in income, and endeavour to eliminate inequalities in status, facilities and opportunities, not only amongst individuals but also amongst groups of people residing in different areas or engaged in different vocations.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [],
    tags: ["DPSP", "Welfare State", "Social Justice", "Equality"],
    limitationsAndExceptions: "As per Article 37, this principle is a directive and is not enforceable by any court of law. It is a fundamental guideline for governance, imposing a moral and political duty on the State, not a legally binding one on which citizens can sue."
  },
   {
    id: "Article 39",
    title: "Certain principles of policy to be followed by the State",
    summary: "Outlines principles for the State, including securing adequate means of livelihood, equitable distribution of resources, preventing concentration of wealth, equal pay for equal work, and protecting the health of workers and children.",
    detailedExplanation: "This article lists several key socio-economic goals. It directs the State's policy towards securing: (a) the right to an adequate means of livelihood for all citizens; (b) the distribution of ownership and control of material resources to best serve the common good; (c) an economic system that does not result in the concentration of wealth; (d) equal pay for equal work for both men and women; (e) protection of the health of workers and prevention of abuse of children; and (f) opportunities for the healthy development of children.",
    fullText: "The State shall, in particular, direct its policy towards securing—\n(a) that the citizens, men and women equally, have the right to an adequate means of livelihood;\n(b) that the ownership and control of the material resources of the community are so distributed as best to subserve the common good;\n(c) that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment;\n(d) that there is equal pay for equal work for both men and women;\n(e) that the health and strength of workers, men and women, and the tender age of children are not abused and that citizens are not forced by economic necessity to enter avocations unsuited to their age or strength;\n(f) that children are given opportunities and facilities to develop in a healthy manner and in conditions of freedom and dignity and that childhood and youth are protected against exploitation and against moral and material abandonment.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
      { caseName: "Randhir Singh v. Union of India (1982)", caseSummary: "The court held that the principle of 'equal pay for equal work,' though a DPSP, could be enforced as a fundamental right if there is arbitrary discrimination in pay scales for similar work." }
    ],
    tags: ["DPSP", "Social Justice", "Economic Justice", "Equality"],
    limitationsAndExceptions: "As per Article 37, these principles are not enforceable by any court. However, courts have sometimes read principles like 'equal pay for equal work' into the fundamental right to equality under Article 14, making them enforceable in specific contexts of arbitrary discrimination."
  },
  {
    id: "Article 39A",
    title: "Equal justice and free legal aid",
    summary: "The State shall secure that the operation of the legal system promotes justice on a basis of equal opportunity and shall provide free legal aid to ensure justice is not denied due to economic or other disabilities.",
    detailedExplanation: "Added by the 42nd Amendment Act of 1976, this DPSP is crucial for ensuring access to justice for all. It directs the state to provide free legal aid to the poor and weaker sections of society so that justice is not denied to anyone due to economic or other disadvantages. It acknowledges that a fair trial is impossible if a person cannot afford legal representation. In pursuance of this article, Parliament enacted the Legal Services Authorities Act in 1987, which established a nationwide network of institutions like NALSA and Lok Adalats to provide free legal services.",
    fullText: "The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid, by suitable legislation or schemes or in any other way, to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
      { caseName: "Hussainara Khatoon v. Home Secretary, State of Bihar (1979)", caseSummary: "In this landmark PIL, the Supreme Court held that the right to free legal aid is an essential part of a 'reasonable, fair and just' procedure under Article 21. This effectively elevated the DPSP of Article 39A to the status of a fundamental right." },
      { caseName: "M.H. Hoskot v. State of Maharashtra (1978)", caseSummary: "Justice Krishna Iyer emphatically stated that providing free legal aid to an indigent accused is a state's duty, not just a matter of charity. This case helped solidify the link between Article 39A and the fundamental right to life and liberty under Article 21." }
    ],
    tags: ["DPSP", "Social Justice", "Legal Aid"],
    limitationsAndExceptions: "While this is a DPSP, the Supreme Court has effectively made the right to free legal aid a fundamental right by linking it to the right to a fair trial under Article 21. Therefore, its non-enforceability as a DPSP has been largely overcome through judicial interpretation, at least in criminal cases."
  },
  {
    id: "Article 40",
    title: "Organisation of village panchayats",
    summary: "The State shall take steps to organise village panchayats and endow them with powers to function as units of self-government.",
    detailedExplanation: "This is a Gandhian principle that reflects the vision of democratic decentralization, aiming to build democracy from the grassroots level. It directs the state to establish village panchayats and empower them to function as effective units of local self-government. For a long time, this DPSP remained largely a guiding principle. Its true implementation came with the 73rd Constitutional Amendment Act of 1992, which granted constitutional status to Panchayati Raj Institutions (PRIs), establishing a three-tier system of local government in rural areas and making it mandatory for states to hold regular elections.",
    fullText: "The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
      { caseName: "State of U.P. v. Pradhan Sangh Kshettra Samiti (1995)", caseSummary: "The Supreme Court, while interpreting the provisions of the U.P. Panchayat Raj Act, emphasized the importance of Article 40 and the 73rd Amendment in establishing genuine democratic decentralization and empowering local self-government institutions." },
      { caseName: "K. Krishna Murthy v. Union of India (2010)", caseSummary: "The court upheld reservations in Panchayati Raj Institutions, noting that they are aimed at remedying past discrimination and enhancing the democratic character of these bodies, which is in line with the spirit of Article 40." }
    ],
    tags: ["DPSP", "Panchayats", "Gandhian Principles", "Governance"],
    limitationsAndExceptions: "As a DPSP, this was not legally enforceable until the 73rd Constitutional Amendment Act, 1992, which gave constitutional status and a framework for Panchayati Raj Institutions. The extent of powers devolved to panchayats still varies significantly between states."
  },
  {
    id: "Article 41",
    title: "Right to work, to education and to public assistance in certain cases",
    summary: "Within its economic capacity, the State shall make effective provision for securing the right to work, to education, and to public assistance in cases of unemployment, old age, sickness, and disablement.",
    detailedExplanation: "This article directs the state to create a social safety net for its citizens. It acknowledges the rights to work, education, and social security. However, these rights are made subject to the 'economic capacity and development' of the state. This means it is a goal to be achieved progressively as the state's economy grows. Various social welfare schemes, such as old-age pension schemes, disability pensions, and employment guarantee schemes like MGNREGA, are inspired by this directive.",
    fullText: "The State shall, within the limits of its economic capacity and development, make effective provision for securing the right to work, to education and to public assistance in cases of unemployment, old age, sickness and disablement, and in other cases of undeserved want.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [],
    tags: ["DPSP", "Welfare State", "Social Security"],
    limitationsAndExceptions: "The implementation of this directive is explicitly limited by the 'economic capacity and development' of the State. It does not create a legally enforceable right to employment or public assistance; these are goals to be achieved progressively."
  },
  {
    id: "Article 42",
    title: "Provision for just and humane conditions of work and maternity relief",
    summary: "The State shall make provision for securing just and humane conditions of work and for maternity relief.",
    detailedExplanation: "This directive focuses on labour welfare. It mandates the state to create a work environment that is safe, fair, and humane. It also specifically highlights the need for maternity relief, which is crucial for the health of working women and their children. The Maternity Benefit Act, 1961, and various factory safety laws are legislative actions taken in pursuance of this article.",
    fullText: "The State shall make provision for securing just and humane conditions of work and for maternity relief.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [],
    tags: ["DPSP", "Labour Rights", "Welfare State"],
    limitationsAndExceptions: "As per Article 37, this principle is a directive and is not enforceable by any court of law. Its implementation depends on legislation passed by the State, such as the Maternity Benefit Act."
  },
  {
    id: "Article 43",
    title: "Living wage, etc., for workers",
    summary: "The State shall endeavour to secure a living wage, a decent standard of life, and full enjoyment of leisure and social and cultural opportunities for all workers.",
    detailedExplanation: "This article goes beyond just a minimum wage. It directs the state to strive for a 'living wage,' which is a wage sufficient to ensure a decent standard of life for the worker and their family, including basic necessities, education, and healthcare. It also emphasizes the importance of leisure and cultural opportunities for workers. Additionally, it directs the state to promote cottage industries on an individual or co-operative basis in rural areas.",
    fullText: "The State shall endeavour to secure, by suitable legislation or economic organisation or in any other way, to all workers, agricultural, industrial or otherwise, work, a living wage, conditions of work ensuring a decent standard of life and full enjoyment of leisure and social and cultural opportunities and, in particular, the State shall endeavour to promote cottage industries on an individual or co-operative basis in rural areas.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [],
    tags: ["DPSP", "Labour Rights", "Welfare State", "Gandhian Principles"],
    limitationsAndExceptions: "This directive is an aspirational goal. The concept of a 'living wage' is higher than a 'minimum wage' and is not legally enforceable. The State is only required to 'endeavour' to secure it."
  },
  {
    id: "Article 44",
    title: "Uniform civil code for the citizens",
    summary: "The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India.",
    detailedExplanation: "This article directs the state to strive for a Uniform Civil Code (UCC), which would replace the diverse personal laws based on religion with a single set of secular civil laws for all citizens. These laws would govern matters like marriage, divorce, inheritance, adoption, and maintenance. The goal is to promote national integration, gender justice, and equality by removing contradictions and discrimination present in various personal laws. This remains one of the most contentious and debated DPSPs in India. While the Supreme Court has repeatedly urged the government to implement it, it has not yet been enacted due to political sensitivities and concerns about religious freedom.",
    fullText: "The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
      { caseName: "Sarla Mudgal v. Union of India (1995)", caseSummary: "The Supreme Court again lamented the lack of a Uniform Civil Code, stating that it is necessary for national integration. It urged the government to take steps towards framing a UCC and to review the personal laws that conflict with constitutional principles." },
      { caseName: "Mohd. Ahmed Khan v. Shah Bano Begum (1985)", caseSummary: "In this landmark case, the Supreme Court granted maintenance to a divorced Muslim woman under the secular Code of Criminal Procedure, overriding Muslim personal law. The judgment sparked a huge political controversy and highlighted the need for a UCC to ensure gender justice." }
    ],
    tags: ["DPSP", "Uniform Civil Code", "Secularism", "Gender Justice"],
    limitationsAndExceptions: "This is a non-justiciable directive. Its implementation is a highly sensitive issue, involving a perceived conflict between the goal of uniformity and the fundamental right to freedom of religion (Article 25). The State is only directed to 'endeavour' to secure a UCC."
  },
   {
    id: "Article 45",
    title: "Provision for early childhood care and education to children below the age of six years",
    summary: "The State shall endeavour to provide early childhood care and education for all children until they complete the age of six years.",
    detailedExplanation: "Originally, this article provided for free and compulsory education for children up to 14 years. After the 86th Amendment made Right to Education a fundamental right under Article 21A (for ages 6-14), Article 45 was amended to its current form. It now directs the state to focus on early childhood care and education for children below the age of six. This is crucial for their cognitive and social development and forms the basis for programmes like the Integrated Child Development Services (ICDS) and Anganwadis.",
    fullText: "The State shall endeavour to provide early childhood care and education for all children until they complete the age of six years.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [],
    tags: ["DPSP", "Education", "Welfare State"],
    limitationsAndExceptions: "Following the 86th Amendment, this article is now a non-enforceable directive for early childhood care (age 0-6), while education for ages 6-14 is a legally enforceable fundamental right under Article 21A."
  },
  {
    id: "Article 46",
    title: "Promotion of educational and economic interests of Scheduled Castes, Scheduled Tribes and other weaker sections",
    summary: "The State shall promote with special care the educational and economic interests of the weaker sections of the people, particularly the Scheduled Castes and the Scheduled Tribes, and shall protect them from social injustice and all forms of exploitation.",
    detailedExplanation: "This is a key directive for social justice. It imposes a duty on the state to actively promote the educational and economic well-being of the most disadvantaged sections of society. It specifically names Scheduled Castes and Scheduled Tribes and also includes other weaker sections. It also mandates the state to protect them from social injustice and exploitation. Reservation policies and various welfare schemes for these communities are rooted in this directive.",
    fullText: "The State shall promote with special care the educational and economic interests of the weaker sections of the people, and, in particular, of the Scheduled Castes and the Scheduled Tribes, and shall protect them from social injustice and all forms of exploitation.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [],
    tags: ["DPSP", "Social Justice", "Reservation", "SC/ST"],
    limitationsAndExceptions: "This is a non-justiciable directive that provides the guiding principle for affirmative action policies. While not enforceable on its own, it provides the constitutional justification for reservation policies and other welfare schemes, which are themselves subject to legal and constitutional limits (e.g., the 50% cap on reservations)."
  },
  {
    id: "Article 47",
    title: "Duty of the State to raise the level of nutrition and the standard of living and to improve public health",
    summary: "The State shall regard the raising of the level of nutrition, the standard of living of its people, and the improvement of public health as among its primary duties. It shall also endeavour to bring about prohibition of intoxicating drinks and drugs injurious to health.",
    detailedExplanation: "This directive sets public health and nutrition as primary duties of the state. It forms the constitutional basis for public health initiatives, food security schemes (like the Public Distribution System), and nutritional programmes (like the Mid-Day Meal Scheme). The second part of the article, which is a Gandhian principle, directs the state to work towards the prohibition of alcohol and harmful drugs. Prohibition policies in some states are based on this directive.",
    fullText: "The State shall regard the raising of the level of nutrition and the standard of living of its people and the improvement of public health as among its primary duties and, in particular, the State shall endeavour to bring about prohibition of the consumption except for medicinal purposes of intoxicating drinks and of drugs which are injurious to health.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [],
    tags: ["DPSP", "Public Health", "Welfare State", "Gandhian Principles"],
    limitationsAndExceptions: "The duty to improve public health is a primary, but non-justiciable, duty. The directive to prohibit intoxicating drinks is an 'endeavour' and is not mandatory, which is why alcohol is not prohibited nationwide. The exception for 'medicinal purposes' is specified."
  },
  {
    id: "Article 48",
    title: "Organisation of agriculture and animal husbandry",
    summary: "The State shall endeavour to organise agriculture and animal husbandry on modern and scientific lines and shall take steps for preserving and improving breeds, and prohibiting the slaughter of cows, calves, and other milch and draught cattle.",
    detailedExplanation: "This directive has two parts. The first part directs the state to modernise agriculture and animal husbandry. The second part, which reflects Gandhian principles, directs the state to prohibit the slaughter of cows and other useful cattle. This provision has been the subject of much debate and is the basis for cattle protection laws enacted by various states.",
    fullText: "The State shall endeavour to organise agriculture and animal husbandry on modern and scientific lines and shall, in particular, take steps for preserving and improving the breeds, and prohibiting the slaughter, of cows and calves and other milch and draught cattle.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
      { caseName: "State of Gujarat v. Mirzapur Moti Kureshi Kassab Jamat (2005)", caseSummary: "The Supreme Court upheld a law imposing a total ban on the slaughter of cows and their progeny, arguing that cattle become more valuable with age and that the ban was a reasonable restriction in the interest of the general public." }
    ],
    tags: ["DPSP", "Agriculture", "Gandhian Principles"],
    limitationsAndExceptions: "This is a non-justiciable directive. Laws based on this article must still respect the fundamental rights of citizens, such as the right to practice a profession (Article 19(1)(g)). Courts have had to balance this directive with the rights of those involved in the cattle trade."
  },
  {
    id: "Article 49",
    title: "Protection of monuments and places and objects of national importance",
    summary: "It shall be the obligation of the State to protect every monument or place or object of artistic or historic interest, declared by or under law made by Parliament to be of national importance, from spoliation, disfigurement, destruction, removal, disposal or export.",
    detailedExplanation: "This directive imposes a duty on the state to protect India's rich historical and cultural heritage. It mandates the protection of monuments, places, and objects that are declared to be of national importance. The Archaeological Survey of India (ASI) and laws like the Ancient Monuments and Archaeological Sites and Remains Act, 1958, are the primary instruments through which the state fulfills this directive.",
    fullText: "It shall be the obligation of the State to protect every monument or place or object of artistic or historic interest, declared by or under law made by Parliament to be of national importance, from spoliation, disfigurement, destruction, removal, disposal or export, as the case may be.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [],
    tags: ["DPSP", "Culture", "Heritage"],
    limitationsAndExceptions: "This obligation applies specifically to monuments and objects that have been declared of 'national importance' by or under a law made by Parliament. It does not automatically apply to all historical sites."
  },
  {
    id: "Article 50",
    title: "Separation of judiciary from executive",
    summary: "The State shall take steps to separate the judiciary from the executive in the public services of the State.",
    detailedExplanation: "This DPSP is a cornerstone of the doctrine of separation of powers and is crucial for ensuring the independence and impartiality of the judiciary. It directs the state to separate judicial functions from executive functions. If the same person has the power to both execute laws (like a collector) and adjudicate disputes, there is a high risk of bias and arbitrary action. This principle has been largely implemented through the enactment of the Code of Criminal Procedure (CrPC) in 1973, which separated the judicial magistrates, who are under the control of the High Court, from the executive magistrates, who remain under the control of the state government.",
    fullText: "The State shall take steps to separate the judiciary from the executive in the public services of the State.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
      { caseName: "S.P. Gupta v. Union of India (1981)", caseSummary: "Also known as the First Judges Case, the Supreme Court discussed the importance of an independent judiciary as a basic feature of the Constitution, a principle that is strongly supported by the directive in Article 50." },
      { caseName: "Chandra Mohan v. State of U.P. (1966)", caseSummary: "The court emphasized that the appointment of district judges should be made by the Governor in consultation with the High Court to maintain the independence of the judiciary from the executive, thereby upholding the spirit of Article 50." }
    ],
    tags: ["DPSP", "Judiciary", "Separation of Powers", "Governance"],
    limitationsAndExceptions: "This directive, while largely achieved in the criminal justice system through the CrPC, is still a goal. The separation applies to 'public services of the State', and some overlap in administrative functions can still exist, particularly with executive magistrates."
  },
  {
    id: "Article 51",
    title: "Promotion of international peace and security",
    summary: "The State shall endeavour to promote international peace and security, maintain just and honourable relations between nations, and foster respect for international law.",
    detailedExplanation: "This article outlines the fundamental principles of India's foreign policy. It reflects India's commitment to being a peaceful and responsible member of the global community. It directs the state to: (a) promote international peace and security, (b) maintain just and honourable relations with other nations, (c) foster respect for international law and treaty obligations, and (d) encourage the settlement of international disputes through arbitration rather than conflict. These principles have guided India's policy of non-alignment, its active role in the United Nations and other international forums, and its commitment to global disarmament and peaceful coexistence.",
    fullText: "The State shall endeavour to—\n(a) promote international peace and security;\n(b) maintain just and honourable relations between nations;\n(c) foster respect for international law and treaty obligations in the dealings of organised peoples with one another; and\n(d) encourage settlement of international disputes by arbitration.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
      { caseName: "Vishaka v. State of Rajasthan (1997)", caseSummary: "The Supreme Court, in the absence of a domestic law on sexual harassment at the workplace, relied on international conventions and treaties, thereby giving effect to the principle of fostering respect for international law as mentioned in Article 51(c)." },
      { caseName: "Gramophone Company of India Ltd. v. Birendra Bahadur Pandey (1984)", caseSummary: "The court ruled that in case of a conflict between municipal law and international law, the domestic law will prevail. However, it also stated that courts should attempt to interpret domestic laws in a way that is consistent with international law, in line with the spirit of Article 51." }
    ],
    tags: ["DPSP", "Foreign Policy", "International Law"],
    limitationsAndExceptions: "These are guiding principles for foreign policy and are non-justiciable. In case of a direct conflict between domestic law and international law, Indian courts are bound to apply the domestic law. National interest and security concerns can also override these principles in practice."
  },
  // PART IVA: FUNDAMENTAL DUTIES
  {
    id: "Article 51A",
    title: "Fundamental duties",
    summary: "Lists the fundamental duties of every citizen, such as abiding by the Constitution, promoting harmony, protecting public property, and striving towards excellence.",
    detailedExplanation: "Added by the 42nd Amendment Act in 1976, based on the recommendations of the Swaran Singh Committee, this part introduced the concept of civic and moral responsibilities for citizens. It serves as a constant reminder that while citizens enjoy fundamental rights, they also have duties towards the nation. These duties include respecting the Constitution, national flag, and anthem; cherishing the ideals of the freedom struggle; protecting India's sovereignty, unity, and integrity; promoting harmony and brotherhood; preserving our composite culture; protecting the natural environment; and developing a scientific temper. Like DPSPs, these duties are non-justiciable, but they can be used by courts to interpret laws and uphold their constitutionality.",
    fullText: "It shall be the duty of every citizen of India—\n(a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem;\n(b) to cherish and follow the noble ideals which inspired our national struggle for freedom;\n(c) to uphold and protect the sovereignty, unity and integrity of India;\n(d) to defend the country and render national service when called upon to do so;\n(e) to promote harmony and the spirit of common brotherhood amongst all the people of India transcending religious, linguistic and regional or sectional diversities; to renounce practices derogatory to the dignity of women;\n(f) to value and preserve the rich heritage of our composite culture;\n(g) to protect and improve the natural environment including forests, lakes, rivers and wild life, and to have compassion for living creatures;\n(h) to develop the scientific temper, humanism and the spirit of inquiry and reform;\n(i) to safeguard public property and to abjure violence;\n(j) to strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavour and achievement;\n(k) who is a parent or guardian to provide opportunities for education to his child or, as the case may be, ward between the age of six and fourteen years.",
    part: "Part IVA: Fundamental Duties",
    landmarkCases: [
      { caseName: "AIIMS Students' Union v. AIIMS (2002)", caseSummary: "The Supreme Court held that Fundamental Duties, although non-enforceable by themselves, can be used to interpret ambiguous statutes. It also observed that duties can help in determining the reasonableness of a legislative restriction on fundamental rights." },
      { caseName: "M.C. Mehta v. Union of India (1988)", caseSummary: "In a case related to environmental pollution in the Ganga river, the court held that under Article 51A(g), it is the duty of the central government to take steps to protect the environment. This case linked fundamental duties to environmental jurisprudence." }
    ],
    tags: ["Fundamental Duties", "Citizenship"],
    limitationsAndExceptions: "Fundamental Duties are non-justiciable, meaning they are not directly enforceable by courts. They serve as moral and civic obligations for citizens. While courts can use them as an aid to interpreting statutes, there is no legal penalty for their violation unless a specific law makes such a violation an offence."
  }
];
