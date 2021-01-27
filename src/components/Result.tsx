import React from 'react';
import { NavLink } from 'react-router-dom';
import icons from '../Images/icons.svg';
import styles from '../styles/Result.module.css';
import * as Types from '../Types';

interface Props {
  result: Types.Result;
}

const Result: React.FC<Props> = ({
  result: { id, query, title, publisher, image_url },
}) => {
  return (
    <NavLink
      to={`/${query}/${id}`}
      className={styles.Link}
      activeClassName={styles.Active}
    >
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
    </NavLink>
  );
};

export default Result;
