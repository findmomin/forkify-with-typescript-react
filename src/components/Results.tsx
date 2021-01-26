import React, { useContext, useEffect } from 'react';
import { ResultsContext } from '../contexts/Results.context';
import { useRouteMatch } from 'react-router-dom';
import Result from './Result';

const Results: React.FC = () => {
  // Consuming context
  const { results, query, setQuery } = useContext(ResultsContext);

  // Getting the search query from the url
  const {
    params: { newQuery },
  } = useRouteMatch<{ newQuery: string }>('/:newQuery')!;

  useEffect(() => {
    if (query === newQuery) return;

    setQuery!(newQuery);
  });

  const markup = results?.map(result => <Result key={result.id} />);

  return (
    <div className={''}>{results?.length ? markup : <h1>Rendering</h1>}</div>
  );
};

export default Results;
