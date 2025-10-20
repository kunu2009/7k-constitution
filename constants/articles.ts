import { Article } from '../types';

export const CONSTITUTION_ARTICLES: Article[] = [
  // PART I: THE UNION AND ITS TERRITORY
  {
    id: "Article 1",
    title: "Name and territory of the Union",
    summary: "India, that is Bharat, shall be a Union of States. The territory of India will comprise the territories of the States, the Union territories, and other acquired territories.",
    detailedExplanation: "This foundational article establishes the identity of the nation with two names, 'India' and 'Bharat', and defines its political structure as a 'Union of States'. The choice of 'Union' over 'Federation' was deliberate by the Constituent Assembly to signify that India is an indivisible whole. States are integral parts of the Union and have no right to secede. It clarifies that the country's territory consists of states, union territories listed in the First Schedule, and any territories that might be acquired in the future. This provision underscores the unity and integrity of the nation.",
    fullText: "1. (1) India, that is Bharat, shall be a Union of States. (2) The States and the territories thereof shall be as specified in the First Schedule. (3) The territory of India shall comprise— (a) the territories of the States; (b) the Union territories specified in the First Schedule; and (c) such other territories as may be acquired.",
    part: "Part I: The Union and its Territory",
    landmarkCases: [
      { caseName: "In re Berubari Union (1960)", caseSummary: "The Supreme Court held that the power of Parliament to diminish the area of a state (under Article 3) does not cover the cession of Indian territory to a foreign country. This must be done through a constitutional amendment under Article 368." },
      { caseName: "State of West Bengal v. Union of India (1962)", caseSummary: "The court upheld the power of the Union Parliament to acquire a state's property. It reiterated that the Indian constitution is not truly federal and the states are not sovereign, reinforcing the 'Union of States' concept from Article 1." }
    ]
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
    ]
  },
  {
    id: "Article 3",
    title: "Formation of new States and alteration of areas, boundaries or names of existing States",
    summary: "Parliament can form a new State, increase or diminish the area of any State, alter its boundaries, or change its name.",
    detailedExplanation: "This article gives Parliament the power to reorganize the states internally. It can unilaterally change the political map of India. This power demonstrates the flexibility of India's federal structure, famously described as an 'indestructible union of destructible states.' The procedure requires a bill to be introduced only with the prior recommendation of the President. The President must refer the bill to the legislature of the affected state(s) for their views within a specified time. However, Parliament is not bound by these views, highlighting the Union's supremacy in territorial matters.",
    fullText: "Parliament may by law— (a) form a new State by separation of territory from any State or by uniting two or more States or parts of States or by uniting any territory to a part of any State; (b) increase the area of any State; (c) diminish the area of any State; (d) alter the boundaries of any State; (e) alter the name of any State.",
    part: "Part I: The Union and its Territory",
    landmarkCases: [
        { caseName: "Babulal Parate v. State of Bombay (1960)", caseSummary: "The Supreme Court upheld the constitutionality of Article 3. It clarified that Parliament is not obligated to follow the views of the state legislatures and can introduce amendments to the reorganization bill without referring them back to the state." },
        { caseName: "State of Haryana v. State of Punjab (2002)", caseSummary: "In a dispute over the completion of the Sutlej-Yamuna Link (SYL) canal, the court emphasized that a state created under Article 3 is bound by the agreements and obligations of its parent state at the time of reorganization." }
    ]
  },
  {
    id: "Article 4",
    title: "Laws made under Articles 2 and 3",
    summary: "Laws for creating/altering states (Articles 2 & 3) are not considered constitutional amendments, meaning they can be passed by a simple majority.",
    detailedExplanation: "Article 4 is a consequential provision that clarifies the legislative process for laws made under Articles 2 and 3. It explicitly states that such laws, which might consequentially amend the First Schedule (listing states and UTs) and the Fourth Schedule (allocating Rajya Sabha seats), will not be treated as constitutional amendments under Article 368. This mechanism allows for the territorial reorganization of India through a simple majority in Parliament, providing immense flexibility to the Union to meet changing administrative, political, or linguistic needs.",
    fullText: "Laws made for the admission or establishment of new States (under Article 2) and formation of new States and alteration of areas, boundaries or names of existing States (under Article 3) are not to be considered as amendments of the Constitution under Article 368.",
    part: "Part I: The Union and its Territory",
    landmarkCases: [
        { caseName: "Mangal Singh v. Union of India (1967)", caseSummary: "The Supreme Court clarified that while Article 4 allows for consequential changes to the First and Fourth Schedules, it does not empower Parliament to make any and all constitutional changes in the guise of reorganization. The changes must be incidental to the reorganization itself." },
        { caseName: "V.B. Raju v. State of Gujarat (1982)", caseSummary: "The court reiterated that laws made under Article 3, read with Article 4, do not need to follow the procedure of Article 368, reaffirming the simplicity and flexibility intended by the Constitution makers for state reorganization." }
    ]
  },
  // PART II: CITIZENSHIP
  {
    id: "Article 5",
    title: "Citizenship at the commencement of the Constitution",
    summary: "Defines who was a citizen of India at the time the Constitution was enacted, based on domicile, birth in India, parent's birth in India, or residence.",
    detailedExplanation: "This article provided the foundational rules for Indian citizenship on January 26, 1950. It established a simple framework based on the principle of 'domicile'—the intention to reside in India permanently. A person who had their domicile in India automatically became a citizen if they also met one of three conditions: (a) they were born in India (jus soli - right of the soil), (b) either of their parents was born in India (jus sanguinis - right of blood), or (c) they had been ordinarily resident in India for at least five years before the Constitution's commencement. This article was designed to be inclusive for people living in India at that historic moment.",
    fullText: "At the commencement of this Constitution, every person who has his domicile in the territory of India and— (a) who was born in the territory of India; or (b) either of whose parents was born in the territory of India; or (c) who has been ordinarily resident in the territory of India for not less than five years immediately preceding such commencement, shall be a citizen of India.",
    part: "Part II: Citizenship",
    landmarkCases: [
      { caseName: "Pradeep Jain v. Union of India (1984)", caseSummary: "The Supreme Court, while discussing domicile, held that India has only one domicile—the domicile of the country—and there is no separate state domicile. This affirmed the concept of single citizenship." },
      { caseName: "D.P. Joshi v. State of Madhya Bharat (1955)", caseSummary: "The court distinguished between 'domicile' and 'place of birth,' holding that discrimination based on residence for educational purposes was permissible, but discrimination based on place of birth alone was prohibited under Article 15." }
    ]
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
    ]
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
    ]
  },
  {
    id: "Article 13",
    title: "Laws inconsistent with fundamental rights",
    summary: "Declares that any law which is inconsistent with or takes away any of the fundamental rights shall be void. This includes pre-constitutional and post-constitutional laws.",
    detailedExplanation: "Article 13 is the bedrock of judicial review in India. It establishes the supremacy of Fundamental Rights over all forms of 'law', which it defines inclusively to cover ordinances, orders, by-laws, rules, regulations, and even customs having the force of law. It has two parts: clause (1) deals with pre-constitutional laws, making them void to the extent of their inconsistency with fundamental rights, and clause (2) prohibits the State from making any law that abridges or takes away these rights. This article empowers the Supreme Court (under Article 32) and High Courts (under Article 226) to strike down any legislation or executive action that violates Part III of the Constitution, thus acting as a vigilant guardian of citizens' rights.",
    fullText: "(1) All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void. (2) The State shall not make any law which takes away or abridges the rights conferred by this Part and any law made in contravention of this clause shall, to the extent of the contravention, be void.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Kesavananda Bharati v. State of Kerala (1973)", caseSummary: "In this seminal case, the Supreme Court held that while Parliament has the power to amend the Constitution (including fundamental rights), it cannot alter its 'basic structure'. This ruling established that even constitutional amendments are subject to judicial review under the principles of Article 13." },
      { caseName: "A.K. Gopalan v. State of Madras (1950)", caseSummary: "In an early interpretation, the court took a narrow view, holding that 'law' in Article 13 meant only ordinary laws, not constitutional amendments. This view was later overruled in subsequent cases, culminating in the Kesavananda Bharati judgment." }
    ]
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
    ]
  },
  {
    id: "Article 15",
    title: "Prohibition of discrimination",
    summary: "Prohibits the State from discriminating against any citizen on grounds only of religion, race, caste, sex, or place of birth. Allows for special provisions for women and children.",
    detailedExplanation: "Article 15 is a specific application of the general principle of equality laid down in Article 14, but it applies only to citizens. It prohibits the state from discriminating on five specific grounds. The word 'only' is significant; it means discrimination on other grounds is not prohibited. Clause (2) extends this prohibition to individuals, preventing discrimination in access to public places. Crucially, the article also embodies the concept of 'protective discrimination' or affirmative action. Clauses (3), (4), (5) and (6) are enabling provisions that allow the state to make special provisions for the advancement of women, children, and socially and educationally backward classes (SEBCs), including Scheduled Castes (SCs), Scheduled Tribes (STs), and Economically Weaker Sections (EWS).",
    fullText: "(1) The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them. (2) No citizen shall... be subject to any disability, liability, restriction or condition with regard to— (a) access to shops, public restaurants, hotels and places of public entertainment; or (b) the use of wells, tanks, bathing ghats, roads and places of public resort...",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Indra Sawhney v. Union of India (1992)", caseSummary: "Also known as the Mandal Commission case, it upheld reservations for Other Backward Classes (OBCs) but capped total reservations at 50% and introduced the 'creamy layer' concept to exclude affluent members of a backward class from reservation benefits." },
      { caseName: "State of Madras v. Champakam Dorairajan (1951)", caseSummary: "This case led to the First Constitutional Amendment, which added Article 15(4). The court had struck down a government order for caste-based reservations in educational institutions, stating it violated Article 29(2). The amendment enabled the state to make special provisions for backward classes." }
    ]
  },
  {
    id: "Article 16",
    title: "Equality of opportunity in public employment",
    summary: "Guarantees equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.",
    detailedExplanation: "Article 16 is another specific application of the principle of equality, focusing on public employment. It ensures that all citizens have an equal opportunity for jobs under the state. It prohibits discrimination on seven grounds: religion, race, caste, sex, descent, place of birth, and residence. Similar to Article 15, it contains enabling clauses for affirmative action. Article 16(4) allows the state to make provisions for the reservation of appointments or posts in favour of any backward class of citizens which, in the opinion of the state, is not adequately represented in public services. Subsequent amendments have added provisions for reservations in promotions and for economically weaker sections (EWS).",
    fullText: "(1) There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State. (2) No citizen shall, on grounds only of religion, race, caste, sex, descent, place of birth, residence or any of them, be ineligible for, or discriminated against in respect of, any employment or office under the State.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "M. Nagaraj v. Union of India (2006)", caseSummary: "The court upheld the constitutional validity of amendments enabling reservation in promotions for SCs and STs but laid down three compelling requirements for the state: demonstrating the backwardness of the class, the inadequacy of their representation, and ensuring administrative efficiency is maintained." },
      { caseName: "Jarnail Singh v. Lachhmi Narain Gupta (2018)", caseSummary: "The court modified the Nagaraj judgment by holding that the state does not need to collect quantifiable data to prove the backwardness of SCs and STs for reservations in promotions. However, it applied the 'creamy layer' principle to exclude affluent SC/ST members from these benefits." }
    ]
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
    ]
  },
  {
    id: "Article 18",
    title: "Abolition of titles",
    summary: "Prohibits the State from conferring titles. Citizens of India are prohibited from accepting any title from a foreign state. Military and academic distinctions are exempt.",
    detailedExplanation: "This article aims to establish social equality by abolishing hereditary titles of nobility like 'Maharaja', 'Rai Bahadur', 'Raja', etc., which were conferred by colonial rulers and created a hierarchical social order. It prohibits the state from conferring any titles except for military and academic distinctions, which are seen as rewards for merit. It also prevents Indian citizens from accepting titles from foreign states without the consent of the President. The Supreme Court has clarified that national awards like the Bharat Ratna, Padma Vibhushan, etc., are awards and not titles, and therefore not violative of Article 18. They cannot, however, be used as prefixes or suffixes to a person's name.",
    fullText: "(1) No title, not being a military or academic distinction, shall be conferred by the State. (2) No citizen of India shall accept any title from any foreign State.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Balaji Raghavan v. Union of India (1996)", caseSummary: "The Supreme Court upheld the constitutional validity of national awards like Bharat Ratna and Padma awards, clarifying that they are not 'titles' within the meaning of Article 18. The Court held that these are awards for meritorious service and not titles of nobility." },
      { caseName: "Indira Jaising v. Supreme Court of India (2017)", caseSummary: "While not directly on Article 18, this case addressed the use of the 'Senior Advocate' designation. The petitioner argued it was a title, but the court held it was a distinction based on merit and not a title, reinforcing the idea that merit-based distinctions are permissible." }
    ]
  },
  {
    id: "Article 19",
    title: "Protection of certain rights regarding freedom of speech, etc.",
    summary: "Guarantees six fundamental freedoms: speech and expression, assembly, association, movement, residence, and profession, subject to reasonable restrictions.",
    detailedExplanation: "Article 19(1) is the soul of personal liberties in India, guaranteeing six fundamental freedoms that form the bedrock of a democratic society. These are available only to citizens. However, these freedoms are not absolute and can be curtailed. Clauses (2) to (6) of Article 19 empower the state to impose 'reasonable restrictions' on these freedoms. The grounds for these restrictions are specific to each freedom, and include interests like the sovereignty and integrity of India, security of the state, public order, decency or morality, and incitement to an offence. The judiciary has the power to determine whether a restriction is 'reasonable' or not.",
    fullText: "(1) All citizens shall have the right— (a) to freedom of speech and expression; (b) to assemble peaceably and without arms; (c) to form associations or unions; (d) to move freely throughout the territory of India; (e) to reside and settle in any part of the territory of India; and (f) to practise any profession, or to carry on any occupation, trade or business.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
       { caseName: "Shreya Singhal v. Union of India (2015)", caseSummary: "The Supreme Court struck down Section 66A of the Information Technology Act, 2000, as unconstitutional for being vague and overbroad, thus violating the freedom of speech and expression. It was a landmark judgment for online free speech." },
       { caseName: "Indian Express Newspapers v. Union of India (1985)", caseSummary: "The Court held that the freedom of press is included within the freedom of speech and expression under Article 19(1)(a). It stated that this freedom includes the right to circulation and is essential for a democracy." }
    ]
  },
  {
    id: "Article 20",
    title: "Protection in respect of conviction for offences",
    summary: "Provides protection against arbitrary and excessive punishment to an accused person, including protection against ex-post-facto law, double jeopardy, and self-incrimination.",
    detailedExplanation: "This article provides three crucial safeguards to any person accused of a crime, ensuring protection against arbitrary state action. (1) Protection against ex-post-facto laws: A person cannot be convicted for an act that was not an offence when it was committed, nor can they be subjected to a penalty greater than what was prescribed at the time. (2) Protection against double jeopardy: A person cannot be prosecuted and punished for the same offence more than once. This applies only to proceedings before a court of law or a judicial tribunal. (3) Protection against self-incrimination: An accused person cannot be compelled to be a witness against themselves. This is the 'right to silence'. These protections are fundamental to a fair criminal justice system.",
    fullText: "(1) No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the Act... (2) No person shall be prosecuted and punished for the same offence more than once. (3) No person accused of any offence shall be compelled to be a witness against himself.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
        { caseName: "Selvi v. State of Karnataka (2010)", caseSummary: "The Supreme Court held that compelling an accused to undergo narco-analysis, polygraph tests, or brain-mapping violates the protection against self-incrimination under Article 20(3). It affirmed that the right against self-incrimination is a crucial safeguard in criminal law." },
        { caseName: "Nandini Satpathy v. P.L. Dani (1978)", caseSummary: "The court gave a wide interpretation to the phrase 'compelled to be a witness against himself', holding that the protection extends to the pre-trial stage of police investigation. A person cannot be forced to answer questions that could be self-incriminatory." }
    ]
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
    ]
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
    ]
  },
  {
    id: "Article 22",
    title: "Protection against arrest and detention",
    summary: "Provides procedural safeguards for individuals against arbitrary arrest and detention, including the right to be informed of the grounds of arrest and the right to consult a lawyer.",
    detailedExplanation: "This article grants crucial safeguards to persons who are arrested or detained. It is divided into two parts. The first part deals with arrests under ordinary law and provides four rights: (1) the right to be informed of the grounds of arrest, (2) the right to consult and be defended by a lawyer, (3) the right to be produced before a magistrate within 24 hours of arrest (excluding travel time), and (4) the right not to be detained beyond 24 hours without a magistrate's order. The second part deals with preventive detention laws, where a person is detained to prevent them from committing a crime. While it provides some safeguards (like the right to know the grounds of detention and make a representation), these are much weaker than for ordinary arrests. These protections are not available to enemy aliens.",
    fullText: "(1) No person who is arrested shall be detained in custody without being informed... of the grounds for such arrest nor shall he be denied the right to consult... a legal practitioner of his choice. (2) Every person who is arrested... shall be produced before the nearest magistrate within a period of twenty-four hours...",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "D.K. Basu v. State of West Bengal (1997)", caseSummary: "The Supreme Court laid down detailed guidelines that the police must follow during arrest and detention to prevent custodial violence and protect the rights of the arrested person under Articles 21 and 22. These are known as the 'D.K. Basu guidelines'." },
      { caseName: "A.K. Roy v. Union of India (1982)", caseSummary: "In a case challenging the National Security Act, the court upheld the validity of preventive detention laws but emphasized that the procedure must be fair and reasonable. It held that the detenu has the right to legal representation before the Advisory Board, but not necessarily a lawyer." }
    ]
  },
  {
    id: "Article 25",
    title: "Freedom of conscience and free profession, practice and propagation of religion",
    summary: "Guarantees all persons the freedom of conscience and the right to freely profess, practice and propagate religion, subject to public order, morality and health.",
    detailedExplanation: "This article forms the core of India's commitment to secularism, guaranteeing religious freedom to all persons. It has four aspects: (1) Freedom of conscience: Inner freedom to mould one's relation with God or creatures in whatever way one desires. (2) Right to profess: Declaration of one's religious beliefs openly. (3) Right to practice: Performance of religious worship, rituals, and ceremonies. (4) Right to propagate: Transmission and dissemination of one's religious beliefs to others. The Supreme Court has clarified that the right to propagate does not include the right to convert another person by force, fraud, or allurement. This freedom is not absolute and is subject to restrictions on grounds of public order, morality, health, and other provisions of fundamental rights.",
    fullText: "(1) Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Rev. Stainislaus v. State of Madhya Pradesh (1977)", caseSummary: "The Supreme Court held that the right to 'propagate' religion under Article 25 does not include the right to convert. It clarified that propagation means spreading one's beliefs, but conversion by force, fraud, or inducement is not protected." },
      { caseName: "Indian Young Lawyers Association v. State of Kerala (2018)", caseSummary: "In the Sabarimala Temple entry case, the court held that the exclusion of women of a certain age group from the temple violated their fundamental right to freedom of religion under Article 25. It affirmed that religious practices cannot be a ground for gender discrimination." }
    ]
  },
  {
    id: "Article 32",
    title: "Remedies for enforcement of fundamental rights",
    summary: "Guarantees the right to move the Supreme Court for the enforcement of Fundamental Rights. The Supreme Court can issue writs like habeas corpus, mandamus, prohibition, certiorari, and quo warranto.",
    detailedExplanation: "Dr. B.R. Ambedkar described this article as the 'very heart and soul' of the Constitution, without which Part III would be meaningless. It is a fundamental right in itself, which guarantees an effective remedy for the enforcement of other fundamental rights. It designates the Supreme Court as the protector and guarantor of these rights. The Court is empowered to issue five types of writs: Habeas Corpus ('to have the body of'), Mandamus ('we command'), Prohibition ('to forbid'), Certiorari ('to be certified'), and Quo Warranto ('by what authority'). The right to move the Supreme Court under Article 32 can only be suspended during a national emergency.",
    fullText: "(1) The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed. (2) The Supreme Court shall have power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari...",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "L. Chandra Kumar v. Union of India (1997)", caseSummary: "The Supreme Court held that the power of judicial review of the High Courts under Article 226 and the Supreme Court under Article 32 is a 'basic feature' of the Constitution and cannot be taken away by a constitutional amendment." },
      { caseName: "Bandhua Mukti Morcha v. Union of India (1984)", caseSummary: "The court expanded the scope of Article 32, stating that it is not confined to issuing prerogative writs. It can include any procedure, including appointing commissions or taking evidence, to ensure justice. This case was a landmark in Public Interest Litigation (PIL)." }
    ]
  },
  // PART IV: DIRECTIVE PRINCIPLES OF STATE POLICY
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  },
  {
    id: "Article 51",
    title: "Promotion of international peace and security",
    summary: "The State shall endeavour to promote international peace and security, maintain just and honourable relations between nations, and foster respect for international law.",
    detailedExplanation: "This article outlines the fundamental principles of India's foreign policy. It reflects India's commitment to being a peaceful and responsible member of the global community. It directs the state to: (a) promote international peace and security, (b) maintain just and honourable relations with other nations, (c) foster respect for international law and treaty obligations, and (d) encourage the settlement of international disputes through arbitration rather than conflict. These principles have guided India's policy of non-alignment, its active role in the United Nations and other international forums, and its commitment to global disarmament and peaceful coexistence.",
    fullText: "The State shall endeavour to— (a) promote international peace and security; (b) maintain just and honourable relations between nations; (c) foster respect for international law and treaty obligations in the dealings of organised peoples with one another; and (d) encourage settlement of international disputes by arbitration.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
      { caseName: "Vishaka v. State of Rajasthan (1997)", caseSummary: "The Supreme Court, in the absence of a domestic law on sexual harassment at the workplace, relied on international conventions and treaties, thereby giving effect to the principle of fostering respect for international law as mentioned in Article 51(c)." },
      { caseName: "Gramophone Company of India Ltd. v. Birendra Bahadur Pandey (1984)", caseSummary: "The court ruled that in case of a conflict between municipal law and international law, the domestic law will prevail. However, it also stated that courts should attempt to interpret domestic laws in a way that is consistent with international law, in line with the spirit of Article 51." }
    ]
  },
  // PART IVA: FUNDAMENTAL DUTIES
  {
    id: "Article 51A",
    title: "Fundamental duties",
    summary: "Lists the fundamental duties of every citizen, such as abiding by the Constitution, promoting harmony, protecting public property, and striving towards excellence.",
    detailedExplanation: "Added by the 42nd Amendment Act in 1976, based on the recommendations of the Swaran Singh Committee, this part introduced the concept of civic and moral responsibilities for citizens. It serves as a constant reminder that while citizens enjoy fundamental rights, they also have duties towards the nation. These duties include respecting the Constitution, national flag, and anthem; cherishing the ideals of the freedom struggle; protecting India's sovereignty, unity, and integrity; promoting harmony and brotherhood; preserving our composite culture; protecting the natural environment; and developing a scientific temper. Like DPSPs, these duties are non-justiciable, but they can be used by courts to interpret laws and uphold their constitutionality.",
    fullText: "It shall be the duty of every citizen of India— (a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem; (b) to cherish and follow the noble ideals which inspired our national struggle for freedom; (c) to uphold and protect the sovereignty, unity and integrity of India; (d) to defend the country and render national service when called upon to do so...",
    part: "Part IVA: Fundamental Duties",
    landmarkCases: [
      { caseName: "AIIMS Students' Union v. AIIMS (2002)", caseSummary: "The Supreme Court held that Fundamental Duties, although non-enforceable by themselves, can be used to interpret ambiguous statutes. It also observed that duties can help in determining the reasonableness of a legislative restriction on fundamental rights." },
      { caseName: "M.C. Mehta v. Union of India (1988)", caseSummary: "In a case related to environmental pollution in the Ganga river, the court held that under Article 51A(g), it is the duty of the central government to take steps to protect the environment. This case linked fundamental duties to environmental jurisprudence." }
    ]
  }
];