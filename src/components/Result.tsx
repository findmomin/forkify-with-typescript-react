import React from 'react';
import { Link, useParams } from 'react-router-dom';
import icons from '../Images/icons.svg';
import styles from '../styles/Result.module.css';
import * as Types from '../Types';

interface Props {
  result: Types.Result;
}

const Result: React.FC<Props> = ({
  result: { id, title, publisher, image_url },
}) => {
  const { query } = useParams<{ query: string }>();

  return (
    <Link to={`/${query}/${id}`} className={styles.Link}>
      <figure className={styles.Figure}>
        <img src={image_url} alt={title} />
      </figure>
      <div className={styles.Data}>
        <h4 className={styles.Title}>{title}</h4>
        <p className={styles.Publisher}>{publisher}</p>
        <div className={styles.UserGenerated}>
          <svg>
            <use href={`${icons}#icon-user`}></use>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Result;
