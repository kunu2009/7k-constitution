import { useState, useEffect } from 'react';
import { UserData } from '../types';

const USER_DATA_KEY = '7kConstitutionUserData';

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

  const toggleFavorite = (articleId: string) => {
    setUserData(prev => {
      const currentData = prev[articleId] || { isFavorite: false, notes: '' };
      return {
        ...prev,
        [articleId]: {
          ...currentData,
          isFavorite: !currentData.isFavorite,
        },
      };
    });
  };

  const updateNotes = (articleId: string, notes: string) => {
     setUserData(prev => {
      const currentData = prev[articleId] || { isFavorite: false, notes: '' };
      return {
       ...prev,
       [articleId]: {
         ...currentData,
         notes,
       },
     };
    });
  };

  return { userData, toggleFavorite, updateNotes };
};
