import { BookmarksProvider } from '../contexts/Bookmarks.context';
import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RecipeContainer from './RecipeContainer';

const App = () => {
  return (
    <div className={styles.App}>
      <BookmarksProvider>
        <Navbar />
        <Sidebar />
        <RecipeContainer />
      </BookmarksProvider>
    </div>
  );
};

export default App;
