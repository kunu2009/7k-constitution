export interface Article {
  id: string;
  title: string;
  summary: string;
  fullText: string;
  part: string;
}

export enum LearningMode {
  Home = 'HOME',
  Flashcards = 'FLASHCARDS',
  MCQ = 'MCQ',
  Reels = 'REELS',
}

export interface MCQQuestion {
  article: Article;
  options: string[];
  correctAnswer: string;
}

export interface UserArticleData {
  isFavorite: boolean;
  notes: string;
}

export interface UserData {
  [articleId: string]: UserArticleData;
}
