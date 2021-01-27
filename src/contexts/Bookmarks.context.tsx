import React, { createContext, useState } from 'react';
import * as Types from '../Types';

interface Value {
  bookmarks: Types.Results;
  addToBookmark: (bookmark: Types.Result) => void;
}

export const BookmarksContext = createContext<Partial<Value>>({});

export const BookmarksProvider: React.FC = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Types.Results>([]);

  const addToBookmark = (bookmark: Types.Result) => {
    setBookmarks([bookmark, ...bookmarks]);
  };

  return (
    <BookmarksContext.Provider value={{ bookmarks, addToBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
};
