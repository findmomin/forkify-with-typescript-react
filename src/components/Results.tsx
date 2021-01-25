import { useContext } from 'react';
import { ResultsContext } from '../contexts/Results.context';
import Result from './Result';

const Results = () => {
  const results = useContext(ResultsContext);

  const markup = results.map(result => <Result key={result.id} />);

  return (
    <div className={''}>{results.length ? markup : <h1>Rendering</h1>}</div>
  );
};

export default Results;
