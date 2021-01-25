import React from 'react';
import styles from '../../styles/Message.module.css';

interface Props {
  fontSize?: string;
}

const Message: React.FC<Props> = ({ children, fontSize = '1.8rem' }) => (
  <div style={{ fontSize: fontSize }} className={styles.Message}>
    {children}
  </div>
);

export default Message;
