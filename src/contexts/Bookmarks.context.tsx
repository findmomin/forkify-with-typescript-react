import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import * as Types from '../Types';

interface Value {
  bookmarks: Types.Results;
  addToBookmark: (newBookmark: Types.Result) => void;
}

export const BookmarksContext = createContext<Partial<Value>>({});

export const BookmarksProvider: React.FC = ({ children }) => {
  const [bookmarks, setBookmarks] = useLocalStorage('forkifyBookmarks', []);

  const addToBookmark = (newBookmark: Types.Result) => {
    // Checking if the newBookmark exists
    if (bookmarks.some(({ id }) => id === newBookmark.id))
      // if yes then unbookmark it
      setBookmarks(bookmarks.filter(({ id }) => id !== newBookmark.id));
    // else bookmark it
    else setBookmarks([newBookmark, ...bookmarks]);
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, addToBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
};
