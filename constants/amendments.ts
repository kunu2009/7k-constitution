import { Amendment } from '../types';

export const CONSTITUTION_AMENDMENTS: Amendment[] = [
  {
    id: '1st',
    year: 1951,
    title: 'First Amendment',
    summary: 'Introduced to address judicial decisions on fundamental rights. Added "reasonable restrictions" on freedom of speech, validated zamindari abolition laws, and added Articles 31A, 31B and the Ninth Schedule. Also added Article 15(4) to allow special provisions for backward classes.',
    affectedArticles: ['Article 15', 'Article 19', 'Article 31'],
  },
  {
    id: '24th',
    year: 1971,
    title: 'Twenty-fourth Amendment',
    summary: 'Enacted in response to the Golaknath case, it affirmed Parliament\'s power to amend any part of the Constitution, including fundamental rights. It made it obligatory for the President to give assent to a Constitutional Amendment Bill.',
    affectedArticles: ['Article 13', 'Article 368'],
  },
  {
    id: '42nd',
    year: 1976,
    title: 'Forty-second Amendment',
    summary: 'Known as the "Mini-Constitution," this was the most comprehensive amendment. It added the words "Socialist," "Secular," and "Integrity" to the Preamble, added Fundamental Duties (Part IVA), established Administrative Tribunals, and gave primacy to Directive Principles over some Fundamental Rights.',
    affectedArticles: ['Preamble', 'Article 31', 'Article 39A', 'Article 43A', 'Article 48A', 'Article 51A'],
  },
  {
    id: '44th',
    year: 1978,
    title: 'Forty-fourth Amendment',
    summary: 'Enacted to reverse many of the distortions of the 42nd Amendment. It repealed the Right to Property as a Fundamental Right, made "internal disturbance" a ground for emergency only if it is an "armed rebellion," and strengthened procedural safeguards against emergencies.',
    affectedArticles: ['Article 19', 'Article 22', 'Article 30', 'Article 31', 'Article 352'],
  },
  {
    id: '52nd',
    year: 1985,
    title: 'Fifty-second Amendment',
    summary: 'Introduced the anti-defection law by adding the Tenth Schedule to the Constitution, which disqualifies members of Parliament and state legislatures who defect from one political party to another.',
    affectedArticles: ['Article 101', 'Article 102', 'Article 190', 'Article 191'],
  },
  {
    id: '73rd',
    year: 1992,
    title: 'Seventy-third Amendment',
    summary: 'Granted constitutional status to Panchayati Raj Institutions (PRIs), establishing a three-tier system of local self-government in rural areas and adding the Eleventh Schedule.',
    affectedArticles: ['Article 40', 'Part IX added'],
  },
  {
    id: '86th',
    year: 2002,
    title: 'Eighty-sixth Amendment',
    summary: 'Made elementary education a fundamental right by inserting Article 21A. It also changed Article 45 to direct the state for early childhood care and added a new fundamental duty under Article 51A(k).',
    affectedArticles: ['Article 21A', 'Article 45', 'Article 51A'],
  },
  {
    id: '97th',
    year: 2011,
    title: 'Ninety-seventh Amendment',
    summary: 'Gave constitutional status and protection to co-operative societies. It added the right to form co-operative societies as a fundamental right under Article 19 and added a new Directive Principle (Article 43B).',
    affectedArticles: ['Article 19', 'Article 43B', 'Part IXB added'],
  },
  {
    id: '103rd',
    year: 2019,
    title: 'One Hundred and Third Amendment',
    summary: 'Introduced a 10% reservation for Economically Weaker Sections (EWS) of society in admission to educational institutions and in public employment.',
    affectedArticles: ['Article 15', 'Article 16'],
  },
];
