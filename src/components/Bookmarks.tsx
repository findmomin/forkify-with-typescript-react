import { useContext } from 'react';
import { BookmarksContext } from '../contexts/Bookmarks.context';
import icons from '../Images/icons.svg';
import Message from './styled/Message';
import Result from './Result';

const Bookmarks = () => {
  const { bookmarks } = useContext(BookmarksContext);

  const listOfBookmarks = bookmarks?.map(bookmark => (
    <Result result={bookmark} key={bookmark.id} />
  ));

  const message = (
    <Message>
      <svg style={{ width: '10rem' }}>
        <use href={`${icons}#icon-alert-triangle`}></use>
      </svg>
      <p
        style={{
          fontSize: '1.8rem',
          lineHeight: 1.5,
          fontWeight: 600,
          textTransform: 'initial',
        }}
      >
        No bookmarks yet. Find a nice recipe and bookmark it ;)
      </p>
    </Message>
  );

  return <>{bookmarks?.length ? listOfBookmarks : message}</>;
};

export default Bookmarks;
