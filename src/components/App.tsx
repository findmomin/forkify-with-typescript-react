import { BookmarksProvider } from '../contexts/Bookmarks.context';
import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RecipeContainer from './RecipeContainer';
import UploadRecipeOverlay from './Overlay';
import { UploadRecipeFormProvider } from '../contexts/UploadRecipeForm.context';
import { NotificationProvider } from '../contexts/Notification.context';
import Notification from './Notification';

const App = () => {
  return (
    <div className={styles.App}>
      <BookmarksProvider>
        <UploadRecipeFormProvider>
          <NotificationProvider>
            {/* The navbar */}
            <Navbar />

            {/* The sidebar or search results area */}
            <Sidebar />

            {/* The recipe area */}
            <RecipeContainer />

            {/* Add recipe overlay */}
            <UploadRecipeOverlay />

            {/* Notification */}
            <Notification />
          </NotificationProvider>
        </UploadRecipeFormProvider>
      </BookmarksProvider>
    </div>
  );
};

export default App;
