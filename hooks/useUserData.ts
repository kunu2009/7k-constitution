
import { useState, useEffect, useCallback } from 'react';
import { UserData, UserArticleData } from '../types';

const USER_DATA_KEY = '7kConstitutionUserData';

const getDefaultArticleData = (): Omit<UserArticleData, 'isFavorite' | 'notes'> => ({
    masteryLevel: 0,
    lastReviewed: null,
});

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData>(() => {
    try {
      const item = window.localStorage.getItem(USER_DATA_KEY);
      return item ? JSON.parse(item) : {};
    } catch (error) {
      console.error("Failed to parse user data from localStorage", error);
      return {};
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    } catch (error)
    {
      console.error("Failed to save user data to localStorage", error);
    }
  }, [userData]);

  const getArticleData = useCallback((articleId: string): UserArticleData => {
    return userData[articleId] || { isFavorite: false, notes: '', ...getDefaultArticleData() };
  }, [userData]);

  const updateArticleData = useCallback((articleId: string, updates: Partial<UserArticleData>) => {
    setUserData(prev => ({
      ...prev,
      [articleId]: {
        ...getArticleData(articleId),
        ...updates,
      },
    }));
  }, [getArticleData]);


  const toggleFavorite = (articleId: string) => {
    const currentData = getArticleData(articleId);
    updateArticleData(articleId, { isFavorite: !currentData.isFavorite });
  };

  const updateNotes = (articleId: string, notes: string) => {
     updateArticleData(articleId, { notes });
  };

  const updateArticleMastery = (articleId: string, result: 'correct' | 'incorrect') => {
    const currentData = getArticleData(articleId);
    let newMasteryLevel = currentData.masteryLevel;

    if (result === 'correct') {
      newMasteryLevel = Math.min(5, newMasteryLevel + 1);
    } else {
      newMasteryLevel = Math.max(0, newMasteryLevel - 1);
    }
    
    updateArticleData(articleId, {
      masteryLevel: newMasteryLevel,
      lastReviewed: new Date().toISOString(),
    });
  };

  return { userData, getArticleData, toggleFavorite, updateNotes, updateArticleMastery };
};