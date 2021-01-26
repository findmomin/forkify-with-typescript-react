import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Types from '../Types';

interface Value {
  query: string;
  results: Types.Results;
  setQuery: (query: string) => void;
}

export const ResultsContext = createContext<Partial<Value>>({});
export const ResultsProvider: React.FC = ({ children }) => {
  // State
  // The search query
  const [query, setQuery] = useState('');

  const history = useHistory();

  // Search results
  const [results, setResults] = useState<Types.Results>([]);

  // If any query is available get results for that query
  useEffect(() => {
    if (!query) return;

    setResults([]);

    // Gets the results for a query
    const getResults = async () => {
      const {
        results,
        data: { recipes },
      }: { results: number; data: { recipes: Types.Results } } = await (
        await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
        )
      ).json();

      if (!results) {
        alert('No recipes found :(');
        return history.push('/');
      }

      setResults(recipes);
    };

    getResults();
  }, [query, history]);

  const value: Value = {
    results,
    query,
    setQuery,
  };

  return (
    <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>
  );
};
