import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styles from '../styles/Results.module.css';
import * as Types from '../Types';
import Spinner from './styled/Spinner';
import Result from './Result';

const Results: React.FC = () => {
  const history = useHistory();

  // Getting the search query from the url
  const {
    params: { query },
  } = useRouteMatch<{ query: string }>('/:query')!;

  // Search results
  const [results, setResults] = useState<Types.Results>([]);

  // Setting the query in the context if the query is new
  useEffect(() => {
    if (!query) return;

    // Clearing old results (if any)
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
  }, [query]);

  const markup = results?.map(result => (
    <Result key={result.id} result={result} />
  ));

  return (
    <div className={styles.Results}>
      {results?.length ? markup : <Spinner />}
    </div>
  );
};

export default Results;
