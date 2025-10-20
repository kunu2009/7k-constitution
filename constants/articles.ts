import { Article } from '../types';

export const CONSTITUTION_ARTICLES: Article[] = [
  // PART I: THE UNION AND ITS TERRITORY
  {
    id: "Article 1",
    title: "Name and territory of the Union",
    summary: "India, that is Bharat, shall be a Union of States. The territory of India will comprise the territories of the States, the Union territories, and other acquired territories.",
    detailedExplanation: "This article lays the foundational identity of the country, declaring it as a 'Union of States' rather than a 'Federation of States'. This phrasing is significant; it implies that the Indian Union is not the result of an agreement among the states, and the states have no right to secede. It establishes the name of the country and defines its territorial constituents, which are further detailed in the First Schedule of the Constitution.",
    fullText: "1. (1) India, that is Bharat, shall be a Union of States. (2) The States and the territories thereof shall be as specified in the First Schedule. (3) The territory of India shall comprise— (a) the territories of the States; (b) the Union territories specified in the First Schedule; and (c) such other territories as may be acquired.",
    part: "Part I: The Union and its Territory",
    landmarkCases: []
  },
  {
    id: "Article 2",
    title: "Admission or establishment of new States",
    summary: "Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit.",
    detailedExplanation: "Article 2 grants power to the Parliament to admit new states into the Union of India that were not previously part of the country. This can be done by either establishing a new state or admitting an existing foreign territory. This power is external-facing, dealing with territories that are not currently part of India, as seen with the admission of Sikkim.",
    fullText: "Parliament may by law admit into the Union, or establish, new States on such terms and conditions as it thinks fit.",
    part: "Part I: The Union and its Territory",
    landmarkCases: []
  },
  {
    id: "Article 3",
    title: "Formation of new States and alteration of areas, boundaries or names of existing States",
    summary: "Parliament can form a new State, increase or diminish the area of any State, alter its boundaries, or change its name.",
    detailedExplanation: "Unlike Article 2, this article gives Parliament the power to reorganize the states internally. It can change the political map of India by creating new states, altering boundaries, or changing names of existing states. This makes India an 'indestructible union of destructible states.' A bill for such changes requires the prior recommendation of the President, who must refer it to the concerned state legislature for its views, although Parliament is not bound by these views.",
    fullText: "Parliament may by law— (a) form a new State by separation of territory from any State or by uniting two or more States or parts of States or by uniting any territory to a part of any State; (b) increase the area of any State; (c) diminish the area of any State; (d) alter the boundaries of any State; (e) alter the name of any State.",
    part: "Part I: The Union and its Territory",
    landmarkCases: []
  },
  {
    id: "Article 4",
    title: "Laws made under Articles 2 and 3",
    summary: "Laws for creating/altering states (Articles 2 & 3) are not considered constitutional amendments, meaning they can be passed by a simple majority.",
    detailedExplanation: "Article 4 clarifies the legislative process for laws made under Articles 2 and 3. It states that such laws, which may amend the First and Fourth Schedules (dealing with states/UTs and Rajya Sabha seat allocation), are not to be considered amendments to the Constitution under Article 368. This allows for territorial reorganization of India through a simple majority in Parliament, providing flexibility.",
    fullText: "Laws made for the admission or establishment of new States (under Article 2) and formation of new States and alteration of areas, boundaries or names of existing States (under Article 3) are not to be considered as amendments of the Constitution under Article 368.",
    part: "Part I: The Union and its Territory",
    landmarkCases: []
  },
  // PART II: CITIZENSHIP
  {
    id: "Article 5",
    title: "Citizenship at the commencement of the Constitution",
    summary: "Defines who was a citizen of India at the time the Constitution was enacted, based on domicile, birth in India, parent's birth in India, or residence.",
    detailedExplanation: "This article established the initial basis of Indian citizenship when the Constitution came into effect on January 26, 1950. It provided a simple set of rules for citizenship based on the principle of 'jus soli' (right of the soil) and domicile. A person only had to satisfy the condition of having a domicile in India and one of the three other conditions (birth in India, parent's birth in India, or residence for five years).",
    fullText: "At the commencement of this Constitution, every person who has his domicile in the territory of India and— (a) who was born in the territory of India; or (b) either of whose parents was born in the territory of India; or (c) who has been ordinarily resident in the territory of India for not less than five years immediately preceding such commencement, shall be a citizen of India.",
    part: "Part II: Citizenship",
    landmarkCases: []
  },
  {
    id: "Article 11",
    title: "Parliament to regulate the right of citizenship by law",
    summary: "Gives Parliament the power to make any provision with respect to the acquisition and termination of citizenship and all other matters relating to it.",
    detailedExplanation: "Articles 5 to 10 only deal with citizenship at the commencement of the Constitution. Article 11 is a crucial enabling provision that grants exclusive power to the Parliament of India to legislate on all matters related to citizenship, including how it can be acquired or terminated after 1950. The Citizenship Act of 1955 and its subsequent amendments were enacted by Parliament under this very article.",
    fullText: "Nothing in the foregoing provisions of this Part shall derogate from the power of Parliament to make any provision with respect to the acquisition and termination of citizenship and all other matters relating to citizenship.",
    part: "Part II: Citizenship",
    landmarkCases: []
  },
  // PART III: FUNDAMENTAL RIGHTS
  {
    id: "Article 12",
    title: "Definition of 'the State'",
    summary: "Defines 'the State' to include the Government and Parliament of India, state governments and legislatures, and all local or other authorities within India.",
    detailedExplanation: "This article is critical because Fundamental Rights are primarily enforceable against 'the State'. Article 12 provides an inclusive and wide definition of the term 'State' to cover all governmental authorities, not just the executive and legislative branches. Over time, the judiciary has expanded the term 'other authorities' to include bodies that may not be directly governmental but perform public functions, such as LIC, ONGC, and even some private bodies acting as instruments of the state.",
    fullText: "In this Part, unless the context otherwise requires, 'the State' includes the Government and Parliament of India and the Government and the Legislature of each of the States and all local or other authorities within the territory of India or under the control of the Government of India.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Ajay Hasia v. Khalid Mujib (1981)", caseSummary: "The Supreme Court laid down a test to determine whether a body is an agency or instrumentality of the State and therefore falls under 'other authorities' in Article 12. Factors include financial control by the government, functional character, and monopolistic status." }
    ]
  },
  {
    id: "Article 13",
    title: "Laws inconsistent with fundamental rights",
    summary: "Declares that any law which is inconsistent with or takes away any of the fundamental rights shall be void. This includes pre-constitutional and post-constitutional laws.",
    detailedExplanation: "Article 13 establishes the supremacy of Fundamental Rights over all other laws. It gives teeth to these rights by empowering the judiciary (Supreme Court under Article 32 and High Courts under Article 226) to declare a law unconstitutional and void if it infringes on any fundamental right. This power of 'judicial review' is a cornerstone of the Indian Constitution, ensuring a system of checks and balances.",
    fullText: "(1) All laws in force in the territory of India immediately before the commencement of this Constitution, in so far as they are inconsistent with the provisions of this Part, shall, to the extent of such inconsistency, be void. (2) The State shall not make any law which takes away or abridges the rights conferred by this Part and any law made in contravention of this clause shall, to the extent of the contravention, be void.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Kesavananda Bharati v. State of Kerala (1973)", caseSummary: "While this case is famous for the 'basic structure' doctrine, it also affirmed that constitutional amendments are subject to judicial review. The court held that while Parliament can amend any part of the Constitution, it cannot alter its basic structure, which includes fundamental rights." }
    ]
  },
  {
    id: "Article 14",
    title: "Equality before law",
    summary: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    detailedExplanation: "Article 14 is the foundation of all equality provisions. It has two aspects: 'equality before the law' (a negative concept from British law, meaning no one is above the law) and 'equal protection of the laws' (a positive concept from the US Constitution, meaning those in similar circumstances should be treated alike). It does not mean absolute equality but permits reasonable classification for legislative purposes, provided it is not arbitrary and is based on an intelligible differentia.",
    fullText: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "E. P. Royappa v. State of Tamil Nadu (1974)", caseSummary: "The Supreme Court introduced a new dimension to Article 14, stating that equality is a dynamic concept and cannot be confined to traditional limits. It held that arbitrariness is the antithesis of equality, so any state action that is arbitrary is a violation of Article 14." },
      { caseName: "Maneka Gandhi v. Union of India (1978)", caseSummary: "This case expanded the scope of Article 14, stating that any law or procedure must be fair, just, and reasonable, not arbitrary, fanciful, or oppressive. It interlinked Articles 14, 19, and 21." }
    ]
  },
  {
    id: "Article 15",
    title: "Prohibition of discrimination",
    summary: "Prohibits the State from discriminating against any citizen on grounds only of religion, race, caste, sex, or place of birth. Allows for special provisions for women and children.",
    detailedExplanation: "This article is a specific application of the general principle of equality laid down in Article 14. It prohibits discrimination by the State in specific matters. Crucially, it also allows for 'protective discrimination' or affirmative action. Clauses (3), (4), and (5) are enabling provisions that permit the State to make special laws for women, children, and for the advancement of socially and educationally backward classes of citizens, including Scheduled Castes and Scheduled Tribes.",
    fullText: "(1) The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them. (2) No citizen shall... be subject to any disability, liability, restriction or condition with regard to— (a) access to shops, public restaurants, hotels and places of public entertainment; or (b) the use of wells, tanks, bathing ghats, roads and places of public resort...",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Indra Sawhney v. Union of India (1992)", caseSummary: "Also known as the Mandal Commission case, it upheld the implementation of reservations for Other Backward Classes (OBCs) but stipulated that the total reservation should not exceed 50% and introduced the concept of the 'creamy layer' to exclude the affluent members of a backward class from accessing reservation benefits." }
    ]
  },
  {
    id: "Article 16",
    title: "Equality of opportunity in public employment",
    summary: "Guarantees equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.",
    detailedExplanation: "Article 16 ensures equality of opportunity in public employment and prevents the State from discriminating on grounds of religion, race, caste, sex, descent, place of birth, or residence. Like Article 15, it also contains provisions for affirmative action, allowing Parliament to make laws for the reservation of appointments or posts in favour of any backward class of citizens that is not adequately represented in the services under the State.",
    fullText: "(1) There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State. (2) No citizen shall, on grounds only of religion, race, caste, sex, descent, place of birth, residence or any of them, be ineligible for, or discriminated against in respect of, any employment or office under the State.",
    part: "Part III: Fundamental Rights",
    landmarkCases: []
  },
  {
    id: "Article 17",
    title: "Abolition of Untouchability",
    summary: "'Untouchability' is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of 'Untouchability' shall be an offence.",
    detailedExplanation: "This is one of the few fundamental rights that is absolute and is also available against private individuals. It aims to eradicate the social evil of untouchability. The Constitution does not define 'untouchability,' but it is understood as the historical practice of imposing social disabilities on certain classes of people. To enforce this article, Parliament enacted the Protection of Civil Rights Act, 1955, and later the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989.",
    fullText: "'Untouchability' is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of 'Untouchability' shall be an offence punishable in accordance with law.",
    part: "Part III: Fundamental Rights",
    landmarkCases: []
  },
  {
    id: "Article 18",
    title: "Abolition of titles",
    summary: "Prohibits the State from conferring titles. Citizens of India are prohibited from accepting any title from a foreign state. Military and academic distinctions are exempt.",
    detailedExplanation: "This article seeks to establish a society based on equality of status by abolishing hereditary titles of nobility like 'Maharaja', 'Rai Bahadur', etc., which were prevalent in colonial India. It does not prevent the state from conferring military or academic distinctions. National awards such as Bharat Ratna and Padma Vibhushan are considered awards and not titles, as clarified by the Supreme Court.",
    fullText: "(1) No title, not being a military or academic distinction, shall be conferred by the State. (2) No citizen of India shall accept any title from any foreign State.",
    part: "Part III: Fundamental Rights",
    landmarkCases: []
  },
  {
    id: "Article 19",
    title: "Protection of certain rights regarding freedom of speech, etc.",
    summary: "Guarantees six fundamental freedoms: speech and expression, assembly, association, movement, residence, and profession, subject to reasonable restrictions.",
    detailedExplanation: "Article 19(1) is a charter of personal liberties, guaranteeing six fundamental freedoms that are the bedrock of a democratic society. However, these freedoms are not absolute. Article 19(2) to 19(6) empower the State to impose 'reasonable restrictions' on these freedoms in the interest of public order, sovereignty and integrity of India, security of the State, friendly relations with foreign states, morality, or decency.",
    fullText: "(1) All citizens shall have the right— (a) to freedom of speech and expression; (b) to assemble peaceably and without arms; (c) to form associations or unions; (d) to move freely throughout the territory of India; (e) to reside and settle in any part of the territory of India; and (f) to practise any profession, or to carry on any occupation, trade or business.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
       { caseName: "Shreya Singhal v. Union of India (2015)", caseSummary: "The Supreme Court struck down Section 66A of the Information Technology Act, 2000, as unconstitutional, holding that it violated the freedom of speech and expression. The court ruled that the restrictions imposed by the section were vague and overbroad." }
    ]
  },
  {
    id: "Article 20",
    title: "Protection in respect of conviction for offences",
    summary: "Provides protection against arbitrary and excessive punishment to an accused person, including protection against ex-post-facto law, double jeopardy, and self-incrimination.",
    detailedExplanation: "This article provides three key safeguards to individuals accused of crimes. (1) No ex-post-facto law: A person cannot be convicted for an act that was not an offence at the time of its commission. (2) No double jeopardy: A person cannot be prosecuted and punished for the same offence more than once. (3) No self-incrimination: An accused person cannot be compelled to be a witness against himself.",
    fullText: "(1) No person shall be convicted of any offence except for violation of a law in force at the time of the commission of the Act... (2) No person shall be prosecuted and punished for the same offence more than once. (3) No person accused of any offence shall be compelled to be a witness against himself.",
    part: "Part III: Fundamental Rights",
    landmarkCases: []
  },
  {
    id: "Article 21",
    title: "Protection of life and personal liberty",
    summary: "No person shall be deprived of his life or personal liberty except according to procedure established by law. This right is available to both citizens and non-citizens.",
    detailedExplanation: "Arguably the most important fundamental right, Article 21 has been interpreted by the Supreme Court in the widest possible manner. 'Life' means more than mere animal existence; it means the right to live with human dignity. 'Personal liberty' has also been given an expansive meaning. The Supreme Court has read numerous other rights into Article 21, such as the right to a clean environment, the right to privacy, the right to speedy trial, and the right to education.",
    fullText: "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
    part: "Part III: Fundamental Rights",
    landmarkCases: [
      { caseName: "Maneka Gandhi v. Union of India (1978)", caseSummary: "The Supreme Court held that the 'procedure established by law' under Article 21 must be fair, just, and reasonable, not arbitrary. This judgment marked a paradigm shift, effectively importing the American concept of 'due process of law' into the Indian Constitution." },
      { caseName: "Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)", caseSummary: "A nine-judge bench of the Supreme Court unanimously declared that the Right to Privacy is a fundamental right, intrinsic to life and personal liberty under Article 21 of the Constitution." }
    ]
  },
  {
    id: "Article 21A",
    title: "Right to education",
    summary: "The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.",
    detailedExplanation: "This article was added by the 86th Constitutional Amendment Act, 2002. It makes the Right to Education a fundamental right. Before this, it was a directive principle. This amendment was a significant step towards ensuring that every child has access to quality elementary education. The Parliament enacted the Right of Children to Free and Compulsory Education (RTE) Act, 2009 to give effect to this article.",
    fullText: "The State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine.",
    part: "Part III: Fundamental Rights",
    landmarkCases: []
  },
  {
    id: "Article 22",
    title: "Protection against arrest and detention",
    summary: "Provides procedural safeguards for individuals against arbitrary arrest and detention, including the right to be informed of the grounds of arrest and the right to consult a lawyer.",
    detailedExplanation: "This article grants protection to persons who are arrested or detained. It provides for four rights for those arrested under ordinary law: the right to be informed of the grounds of arrest, the right to consult and be defended by a legal practitioner, the right to be produced before a magistrate within 24 hours, and the right to not be detained beyond 24 hours without the authority of a magistrate. However, these safeguards are not available to an enemy alien or a person arrested under preventive detention law.",
    fullText: "(1) No person who is arrested shall be detained in custody without being informed... of the grounds for such arrest nor shall he be denied the right to consult... a legal practitioner of his choice. (2) Every person who is arrested... shall be produced before the nearest magistrate within a period of twenty-four hours...",
    part: "Part III: Fundamental Rights",
    landmarkCases: []
  },
  {
    id: "Article 25",
    title: "Freedom of conscience and free profession, practice and propagation of religion",
    summary: "Guarantees all persons the freedom of conscience and the right to freely profess, practice and propagate religion, subject to public order, morality and health.",
    detailedExplanation: "This article is a cornerstone of India's secularism. It guarantees both individual and collective freedom of religion. 'Freedom of conscience' refers to a person's inner freedom to hold beliefs of their choosing. 'Profess, practice, and propagate' refer to the outward expression of those beliefs. The right to propagate does not include the right to convert another person by force or fraud. This right is subject to reasonable restrictions on grounds of public order, morality, and health.",
    fullText: "(1) Subject to public order, morality and health and to the other provisions of this Part, all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion.",
    part: "Part III: Fundamental Rights",
    landmarkCases: []
  },
  {
    id: "Article 32",
    title: "Remedies for enforcement of fundamental rights",
    summary: "Guarantees the right to move the Supreme Court for the enforcement of Fundamental Rights. The Supreme Court can issue writs like habeas corpus, mandamus, prohibition, certiorari, and quo warranto.",
    detailedExplanation: "Dr. B.R. Ambedkar called this article the 'heart and soul' of the Constitution. It is a fundamental right in itself, guaranteeing the right to constitutional remedies. It empowers the Supreme Court to act as the guarantor and protector of fundamental rights. The Court can issue five types of writs: Habeas Corpus (to produce a person who has been detained), Mandamus (to command a public authority to perform its duty), Prohibition (to prevent a lower court from exceeding its jurisdiction), Certiorari (to quash an order of a lower court), and Quo Warranto (to inquire into the legality of a claim to a public office).",
    fullText: "(1) The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights conferred by this Part is guaranteed. (2) The Supreme Court shall have power to issue directions or orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari...",
    part: "Part III: Fundamental Rights",
    landmarkCases: []
  },
  // PART IV: DIRECTIVE PRINCIPLES OF STATE POLICY
  {
    id: "Article 37",
    title: "Application of the principles",
    summary: "The Directive Principles are not enforceable by any court, but the principles laid down are fundamental in the governance of the country and it is the duty of the State to apply these principles in making laws.",
    detailedExplanation: "This article clarifies the nature of the Directive Principles of State Policy (DPSPs). Unlike Fundamental Rights, they are not justiciable (not enforceable by courts). However, they are declared to be 'fundamental in the governance of the country.' This means they are a moral and political instruction manual for the government. While a citizen cannot go to court if a DPSP is not implemented, they serve as a guide for the state and a benchmark for the public to judge the performance of the government.",
    fullText: "The provisions contained in this Part shall not be enforceable by any court, but the principles therein laid down are nevertheless fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: []
  },
  {
    id: "Article 39A",
    title: "Equal justice and free legal aid",
    summary: "The State shall secure that the operation of the legal system promotes justice on a basis of equal opportunity and shall provide free legal aid to ensure justice is not denied due to economic or other disabilities.",
    detailedExplanation: "Added by the 42nd Amendment Act, 1976, this DPSP aims to provide legal assistance to the poor and weaker sections of society. It acknowledges that justice can be denied if a person cannot afford legal services. In pursuance of this article, the Parliament has enacted the Legal Services Authorities Act, 1987, which has established a nationwide network of Lok Adalats and legal aid programs.",
    fullText: "The State shall secure that the operation of the legal system promotes justice, on a basis of equal opportunity, and shall, in particular, provide free legal aid, by suitable legislation or schemes or in any other way, to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: []
  },
  {
    id: "Article 40",
    title: "Organisation of village panchayats",
    summary: "The State shall take steps to organise village panchayats and endow them with powers to function as units of self-government.",
    detailedExplanation: "This is a Gandhian principle aimed at democratic decentralization. It directs the state to establish village panchayats as units of self-government. This DPSP was a guiding force behind the 73rd and 74th Constitutional Amendment Acts of 1992, which gave constitutional status and protection to Panchayati Raj Institutions and Urban Local Bodies, respectively, creating a third tier of government.",
    fullText: "The State shall take steps to organise village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: []
  },
  {
    id: "Article 44",
    title: "Uniform civil code for the citizens",
    summary: "The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India.",
    detailedExplanation: "This article directs the state to strive for a Uniform Civil Code (UCC), which would mean having one set of personal laws for all citizens of India, irrespective of their religion, in matters such as marriage, divorce, inheritance, and adoption. Currently, different religious communities are governed by their own personal laws. This remains one of the most debated DPSPs and has not yet been implemented.",
    fullText: "The State shall endeavour to secure for the citizens a uniform civil code throughout the territory of India.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: [
      { caseName: "Sarla Mudgal v. Union of India (1995)", caseSummary: "The Supreme Court urged the government to take steps towards implementing a Uniform Civil Code, highlighting the need for national integration and removing contradictions based on different ideologies." }
    ]
  },
  {
    id: "Article 50",
    title: "Separation of judiciary from executive",
    summary: "The State shall take steps to separate the judiciary from the executive in the public services of the State.",
    detailedExplanation: "This principle is crucial for ensuring the independence of the judiciary, which is a basic feature of the Constitution. It mandates the separation of judicial and executive functions to prevent any conflict of interest and ensure impartiality in the administration of justice. This has been largely implemented through the Code of Criminal Procedure, which separated the judicial magistrates from the executive magistrates.",
    fullText: "The State shall take steps to separate the judiciary from the executive in the public services of the State.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: []
  },
  {
    id: "Article 51",
    title: "Promotion of international peace and security",
    summary: "The State shall endeavour to promote international peace and security, maintain just and honourable relations between nations, and foster respect for international law.",
    detailedExplanation: "This article reflects India's commitment to internationalism and peaceful coexistence. It guides India's foreign policy, directing the state to promote peace, maintain good relations with other nations, respect international law and treaties, and encourage the settlement of international disputes through arbitration. This principle is reflected in India's policy of non-alignment and its role in international bodies like the United Nations.",
    fullText: "The State shall endeavour to— (a) promote international peace and security; (b) maintain just and honourable relations between nations; (c) foster respect for international law and treaty obligations in the dealings of organised peoples with one another; and (d) encourage settlement of international disputes by arbitration.",
    part: "Part IV: Directive Principles of State Policy",
    landmarkCases: []
  },
  // PART IVA: FUNDAMENTAL DUTIES
  {
    id: "Article 51A",
    title: "Fundamental duties",
    summary: "Lists the fundamental duties of every citizen, such as abiding by the Constitution, promoting harmony, protecting public property, and striving towards excellence.",
    detailedExplanation: "Added by the 42nd Amendment Act, 1976, on the recommendations of the Swaran Singh Committee, this part lists ten fundamental duties (an eleventh was added in 2002). These duties are a moral and civic code for citizens, reminding them that they have responsibilities towards the nation, in addition to enjoying rights. Like DPSPs, these duties are not enforceable by courts, but they can be used by courts to interpret statutes.",
    fullText: "It shall be the duty of every citizen of India— (a) to abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem; (b) to cherish and follow the noble ideals which inspired our national struggle for freedom; (c) to uphold and protect the sovereignty, unity and integrity of India; (d) to defend the country and render national service when called upon to do so...",
    part: "Part IVA: Fundamental Duties",
    landmarkCases: []
  }
];
