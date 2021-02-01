import { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { SEARCH_QUERIES } from '../constants';
import styles from '../styles/AvailableQueries.module.css';
import { OverlayContext } from '../contexts/Overlay.context';

const AvailableQueriese = () => {
  // Consuming context
  const { toggleOverlay } = useContext(OverlayContext);

  // Getting the recipe id from the url (if any)
  const match = useRouteMatch<{ recipeId: string }>('/:query/:recipeId');

  return (
    <div
      className={styles.AvailableQueriese}
      onClick={e => e.stopPropagation()}
    >
      <h1>Recipes You Can Search For</h1>

      <button
        className={styles.CloseBtn}
        onClick={() => toggleOverlay!({ isOverlayShowing: false })}
      >
        x
      </button>

      <div className={styles.Links}>
        {SEARCH_QUERIES.map(query => (
          <Link
            className={styles.Link}
            key={uuid()}
            to={`/${query.replaceAll(' ', '-')}${
              match?.params.recipeId ? `/${match.params.recipeId}` : ''
            }`}
            onClick={() => toggleOverlay!({ isOverlayShowing: false })}
          >
            {query.toUpperCase()}
          </Link>
        ))}
      </div>

      <h2>Have Fun!</h2>
    </div>
  );
};

export default AvailableQueriese;
