import React, { createContext, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import * as Types from '../Types';

export const ResultsContext = createContext<Types.Results>([]);

export const ResultsProvider: React.FC = ({ children }) => {
  // State
  // If the route matches a search route
  const match = useRouteMatch<{ query: string }>('/:query');
  const history = useHistory();

  // Search results
  const [results, setResults] = useState<Types.Results>([]);

  // If any query is available get results for that query
  useEffect(() => {
    if (!match) return;

    const {
      params: { query },
    } = match;

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
  }, [match?.params.query]);

  return (
    <ResultsContext.Provider value={results}>
      {children}
    </ResultsContext.Provider>
  );
};
