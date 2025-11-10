export interface LandmarkCase {
  caseName: string;
  caseSummary: string;
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
}

export enum LearningMode {
  Home = 'HOME',
  Exam = 'EXAM',
  Flashcards = 'FLASHCARDS',
  MCQ = 'MCQ',
  Reels = 'REELS',
  Progress = 'PROGRESS',
  List = 'LIST',
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