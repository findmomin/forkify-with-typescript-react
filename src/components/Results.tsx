import React, { useContext, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { ResultsContext } from '../contexts/Results.context';
import styles from '../styles/Results.module.css';
import Result from './Result';

const Results: React.FC = () => {
  // Consuming context
  const { results, query, setQuery } = useContext(ResultsContext);

  // Getting the search query from the url
  const {
    params: { newQuery },
  } = useRouteMatch<{ newQuery: string }>('/:newQuery')!;

  // Setting the query in the context if the query is new
  useEffect(() => {
    if (query === newQuery) return;

    setQuery!(newQuery);
  });

  const markup = results?.map(result => (
    <Result key={result.id} result={result} />
  ));

  return (
    <div className={styles.Results}>
      {results?.length ? markup : <h1>Rendering</h1>}
    </div>
  );
};

export default Results;
