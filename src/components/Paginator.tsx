import React from 'react';
import icons from '../Images/icons.svg';
import styles from '../styles/Paginator.module.css';

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (newPage: number) => void;
}

const Paginator: React.FC<Props> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className={styles.Paginator}>
      {/* Prev btn */}
      <button
        className={`${styles.Btn} ${currentPage < 2 ? styles.Hidden : ''}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <svg className={styles.Icon}>
          <use href={`${icons}#icon-arrow-left`}></use>
        </svg>
        <span>Page {currentPage - 1}</span>
      </button>

      {/* Current page */}
      <span className={styles.CurrentPage}>{currentPage}</span>

      {/* Forwd btn */}
      <button
        className={`${styles.Btn} ${
          currentPage >= totalPages ? styles.Hidden : ''
        }`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <span>Page {currentPage + 1}</span>
        <svg className={styles.Icon}>
          <use href={`${icons}#icon-arrow-right`}></use>
        </svg>
      </button>
    </div>
  );
};

export default Paginator;
