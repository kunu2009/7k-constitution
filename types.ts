export interface LandmarkCase {
  caseName: string;
  caseSummary: string;
}

export interface FillBlankQuestionType {
  question: string; // "The State shall provide free and compulsory education to all children of theage of ____ to fourteen years."
  answer: string; // "six"
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  detailedExplanation: string;
  fullText: string;
  part: string;
  landmarkCases: LandmarkCase[];
  tags: string[];
  limitationsAndExceptions: string;
  relatedArticles?: string[];
  fillInTheBlanks?: FillBlankQuestionType[];
}

export enum LearningMode {
  Home = 'HOME',
  Exam = 'EXAM',
  Flashcards = 'FLASHCARDS',
  MCQ = 'MCQ',
  Reels = 'REELS',
  Progress = 'PROGRESS',
  List = 'LIST',
  Games = 'GAMES',
  Explore = 'EXPLORE',
  MindMap = 'MIND_MAP',
  Timeline = 'TIMELINE',
  FillBlanks = 'FILL_BLANKS',
  Match = 'MATCH',
}

export interface MCQQuestion {
  questionText?: string;
  article: Article;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface UserArticleData {
  isFavorite: boolean;
  notes: string;
}

export interface UserData {
  [articleId: string]: UserArticleData;
}

export interface Amendment {
  id: string;
  year: number;
  title: string;
  summary: string;
  affectedArticles: string[];
}
