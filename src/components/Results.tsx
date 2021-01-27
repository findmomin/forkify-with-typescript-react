import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styles from '../styles/Results.module.css';
import { RES_PER_PAGE } from '../constants';
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

      // Updating the total pages
      setTotalPages(recipes.length / RES_PER_PAGE);

      // Storing new results
      setSearchResults(recipes);
    };

    getResults();
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
