import { BookmarksProvider } from '../contexts/Bookmarks.context';
import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RecipeContainer from './RecipeContainer';
import Overlay from './Overlay';
import { OverlayProvider } from '../contexts/Overlay.context';
import { NotificationProvider } from '../contexts/Notification.context';
import Notification from './Notification';

const App = () => {
  return (
    <div className={styles.App}>
      <BookmarksProvider>
        <OverlayProvider>
          <NotificationProvider>
            {/* The navbar */}
            <Navbar />

            {/* The sidebar or search results area */}
            <Sidebar />

            {/* The recipe area */}
            <RecipeContainer />

            {/* Add recipe overlay */}
            <Overlay />

            {/* Notification */}
            <Notification />
          </NotificationProvider>
        </OverlayProvider>
      </BookmarksProvider>
    </div>
  );
};

export default App;
