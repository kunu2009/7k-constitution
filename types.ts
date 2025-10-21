
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
}

export enum LearningMode {
  Home = 'HOME',
  Flashcards = 'FLASHCARDS',
  MCQ = 'MCQ',
  Reels = 'REELS',
  Progress = 'PROGRESS',
  List = 'LIST',
}

export interface MCQQuestion {
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
