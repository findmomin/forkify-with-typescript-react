import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { RES_PER_PAGE } from '../constants';
import { getResults } from '../helpers';
import styles from '../styles/Results.module.css';
import * as Types from '../Types';
import Spinner from './styled/Spinner';
import Result from './Result';
import Paginator from './Paginator';

const Results: React.FC = () => {
  // For redirecting user to home
  const history = useHistory();

  // Getting the search query from the url
  const { query } = useParams<{ query: string }>();

  // State
  // Search results
  const [searchResults, setSearchResults] = useState<Types.Results>([]);

  // Current page
  const [currentPage, setCurrentPage] = useState(1);

  // Total number of pages
  const [totalPages, setTotalPages] = useState(0);

  // Setting the query in the context if the query is new
  useEffect(() => {
    if (!query) return;

    // Clearing old results (if any)
    setSearchResults([]);

    // Resetting the current page
    setCurrentPage(1);

    const getSearchResults = async (query: string) => {
      // Getting the results
      const results = await getResults(query);

      if (!results) {
        return history.goBack();
      }

      // Updating the total pages
      setTotalPages(results.length / RES_PER_PAGE);

      // Injecting the query in each result
      results.forEach(result => (result.query = query));

      // Storing new results
      setSearchResults(results);
    };

    getSearchResults(query);
  }, [query, history]);

  const markup = searchResults
    ?.slice((currentPage - 1) * RES_PER_PAGE, RES_PER_PAGE * currentPage)
    .map(result => <Result key={result.id} result={result} />);

  return (
    <div className={styles.Results}>
      {/* The results */}
      {searchResults?.length ? markup : <Spinner />}

      {/* Paginator */}
      {totalPages > 1 && (
        <Paginator
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Results;
