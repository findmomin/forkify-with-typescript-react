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
      <svg>
        <use href={`${icons}#icon-alert-triangle`}></use>
      </svg>
      <p>No bookmarks yet. Find a nice recipe and bookmark it ;)</p>
    </Message>
  );

  return <>{bookmarks?.length ? listOfBookmarks : message}</>;
};

export default Bookmarks;
